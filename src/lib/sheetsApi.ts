// ─────────────────────────────────────────────────────────
//  Hamza Invoice — Data layer
//  • Local Storage (always works, no config needed)
//  • Google Sheets sync (optional, via Apps Script Web App)
// ─────────────────────────────────────────────────────────

export interface LineItem {
  id: string;
  description: string;
  qty: number;
  rate: number;
  amount: number;
  jobDateFrom?: string; // ISO date string
  jobDateTo?: string;   // ISO date string
}

export interface Invoice {
  invoiceNumber: string;
  invoiceDate: string;   // ISO date string
  dueDate: string;       // ISO date string
  terms: string;
  clientName: string;
  clientAddress: string;
  lineItems: LineItem[];
  subTotal: number;
  gstAmount: number;
  total: number;
  paymentMade: number;
  balanceDue: number;
  includeGST: boolean;
  createdAt: string;     // ISO datetime string
}

export interface AppSettings {
  appsScriptUrl: string;
}

const INVOICES_KEY = 'hamza_invoices_v1';
const SETTINGS_KEY = 'hamza_settings_v1';

// ── Settings ──────────────────────────────────────────────

export function getSettings(): AppSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    return raw ? JSON.parse(raw) : { appsScriptUrl: '' };
  } catch {
    return { appsScriptUrl: '' };
  }
}

export function saveSettings(settings: AppSettings): void {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

// ── Local Storage CRUD ────────────────────────────────────

export function getLocalInvoices(): Invoice[] {
  try {
    const raw = localStorage.getItem(INVOICES_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveLocalInvoice(invoice: Invoice): void {
  const invoices = getLocalInvoices();
  const idx = invoices.findIndex(i => i.invoiceNumber === invoice.invoiceNumber);
  if (idx >= 0) {
    invoices[idx] = invoice;
  } else {
    invoices.unshift(invoice); // newest first
  }
  localStorage.setItem(INVOICES_KEY, JSON.stringify(invoices));
}

export function getLocalInvoice(invoiceNumber: string): Invoice | null {
  return getLocalInvoices().find(i => i.invoiceNumber === invoiceNumber) ?? null;
}

export function deleteLocalInvoice(invoiceNumber: string): void {
  const invoices = getLocalInvoices().filter(i => i.invoiceNumber !== invoiceNumber);
  localStorage.setItem(INVOICES_KEY, JSON.stringify(invoices));
}

/** Returns the next invoice number based on existing invoices, starting at INV-000006 */
export function getNextInvoiceNumber(): string {
  const invoices = getLocalInvoices();
  if (!invoices.length) return 'INV-000006';
  const nums = invoices.map(inv => {
    const m = inv.invoiceNumber.match(/INV-(\d+)/);
    return m ? parseInt(m[1], 10) : 0;
  });
  return `INV-${String(Math.max(...nums) + 1).padStart(6, '0')}`;
}

// ── Google Sheets Sync (fire-and-forget POST) ─────────────
// Uses no-cors mode because Apps Script doesn't support CORS preflight.
// The invoice is always saved locally first; this is just a sync.

export async function syncToGoogleSheets(invoice: Invoice): Promise<{ success: boolean; error?: string }> {
  const { appsScriptUrl } = getSettings();
  if (!appsScriptUrl) return { success: false, error: 'no-url' };
  try {
    // Use text/plain content-type → no CORS preflight triggered.
    // Apps Script redirects POSTs; redirect:'follow' handles that transparently.
    const response = await fetch(appsScriptUrl, {
      method: 'POST',
      redirect: 'follow',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(invoice),
    });
    if (!response.ok) return { success: false, error: `HTTP ${response.status}` };
    const result = await response.json();
    return { success: result.success === true, error: result.error };
  } catch (e) {
    return { success: false, error: String(e) };
  }
}

/** Fetches all invoices from Google Sheets (falls back to empty array) */
export async function fetchFromGoogleSheets(): Promise<Invoice[]> {
  const { appsScriptUrl } = getSettings();
  if (!appsScriptUrl) return [];
  try {
    const res = await fetch(`${appsScriptUrl}?action=list`);
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data.invoices) ? data.invoices : [];
  } catch {
    return [];
  }
}

// ── Google Apps Script code (shown in Settings UI) ────────
export const APPS_SCRIPT_CODE = `function doGet(e) {
  const action = e.parameter.action;
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Invoices');
  if (!sheet) sheet = ss.insertSheet('Invoices');

  if (action === 'list') {
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) return json({ invoices: [] });
    const headers = data[0];
    const invoices = data.slice(1).map(row => {
      const obj = {};
      headers.forEach((h, i) => obj[h] = row[i]);
      try { obj.lineItems = JSON.parse(obj.lineItems); } catch(e) { obj.lineItems = []; }
      return obj;
    });
    return json({ invoices });
  }

  if (action === 'get') {
    const id = e.parameter.id;
    const data = sheet.getDataRange().getValues();
    if (data.length <= 1) return json({ invoice: null });
    const headers = data[0];
    const row = data.slice(1).find(r => r[0] === id);
    if (!row) return json({ invoice: null });
    const obj = {};
    headers.forEach((h, i) => obj[h] = row[i]);
    try { obj.lineItems = JSON.parse(obj.lineItems); } catch(e) { obj.lineItems = []; }
    return json({ invoice: obj });
  }

  return json({ error: 'Unknown action' });
}

function doPost(e) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Invoices');
  if (!sheet) sheet = ss.insertSheet('Invoices');

  const inv = JSON.parse(e.postData.contents);
  const cols = ['invoiceNumber','invoiceDate','dueDate','terms','clientName',
                 'clientAddress','lineItems','subTotal','gstAmount','total',
                 'paymentMade','balanceDue','includeGST','createdAt'];

  if (sheet.getLastRow() === 0) sheet.appendRow(cols);

  const data = sheet.getDataRange().getValues();
  const invNums = data.slice(1).map(r => r[0]);
  const existIdx = invNums.indexOf(inv.invoiceNumber);
  const row = cols.map(c => c === 'lineItems' ? JSON.stringify(inv[c]) : (inv[c] ?? ''));

  if (existIdx >= 0) {
    sheet.getRange(existIdx + 2, 1, 1, row.length).setValues([row]);
  } else {
    sheet.appendRow(row);
  }
  return json({ success: true });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}`;
