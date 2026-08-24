// ─────────────────────────────────────────────────────────
//  Hamza Invoice — Data layer (Local Storage only)
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

const INVOICES_KEY = 'hamza_invoices_v1';

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

