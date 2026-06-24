import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { format, addDays, parseISO, eachDayOfInterval, isWeekend } from 'date-fns';
import {
  CalendarIcon, Plus, Trash2, Save, Printer,
  Settings, ClipboardList, Copy, Check, ChevronRight
} from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import {
  getSettings,
  saveSettings,
  saveLocalInvoice,
  getNextInvoiceNumber,
  syncToGoogleSheets,
  APPS_SCRIPT_CODE,
  type Invoice,
  type LineItem,
} from '@/lib/sheetsApi';

// ── Constants ──────────────────────────────────────────────
const HAMZA = {
  name:    'Hamza Ishfaq',
  address: 'U9 19-29 Taylor St\nEagleby 4207, Australia',
  email:   'hamzaishfaq86@gmail.com',
  abn:     '36 342 063 078',
  bank:    'Account no. 10601631\nBSB 064102',
};

// Default / most-common client — applied via the quick-fill button
const DEFAULT_CLIENT = {
  name:    'S Painting and Decorating Pty Ltd',
  address: '30 Lake Borumba St Logan Reserve\nBrisbane, 4133 Queensland, Australia\nHarpreet Singh\nABN: 38 616 242 650',
};

// ── Helpers ────────────────────────────────────────────────
function fmt(n: number) {
  return new Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
}
function makeItem(): LineItem {
  return { id: `${Date.now()}-${Math.random().toString(36).slice(2)}`, description: '', qty: 44, rate: 22, amount: 880 };
}

// ── Component ──────────────────────────────────────────────
export default function HamzaInvoice() {
  const navigate = useNavigate();

  // ─ Invoice state ─────────────────────────────────────────
  const [invoiceNumber, setInvoiceNumber] = useState('INV-000006');
  const [invoiceDate,   setInvoiceDate]   = useState<Date>(new Date());
  const [dueDate,       setDueDate]       = useState<Date>(addDays(new Date(), 7));
  const [terms,         setTerms]         = useState('Custom');
  const [clientName,    setClientName]    = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [lineItems,     setLineItems]     = useState<LineItem[]>([makeItem()]);
  const [includeGST,    setIncludeGST]   = useState(false);
  const [paymentMade,   setPaymentMade]   = useState<string>('0');

  // ─ UI state ──────────────────────────────────────────────
  const [invDateOpen,   setInvDateOpen]   = useState(false);
  const [dueDateOpen,   setDueDateOpen]   = useState(false);
  const [isSaving,      setIsSaving]      = useState(false);
  const [showSettings,  setShowSettings]  = useState(false);
  const [showScript,    setShowScript]    = useState(false);
  const [copied,        setCopied]        = useState(false);
  const [scriptUrl,     setScriptUrl]     = useState('');

  useEffect(() => {
    setInvoiceNumber(getNextInvoiceNumber());
    setScriptUrl(getSettings().appsScriptUrl);
  }, []);

  // ─ Calculations ──────────────────────────────────────────
  const subTotal   = lineItems.reduce((s, i) => s + i.amount, 0);
  const gstAmount  = includeGST ? parseFloat((subTotal * 0.1).toFixed(2)) : 0;
  const total      = parseFloat((subTotal + gstAmount).toFixed(2));
  const pmtNum     = parseFloat(paymentMade) || 0;
  const balanceDue = parseFloat((total - pmtNum).toFixed(2));

  // ─ Line item helpers ─────────────────────────────────────
  function updateItem(id: string, field: keyof LineItem, value: string | number) {
    setLineItems(prev => prev.map(item => {
      if (item.id !== id) return item;
      const next = { ...item, [field]: value };
      if (field === 'qty' || field === 'rate') {
        next.amount = parseFloat((Number(next.qty) * Number(next.rate)).toFixed(2));
      }
      return next;
    }));
  }
  function addRow()            { setLineItems(p => [...p, makeItem()]); }
  function removeRow(id: string) {
    if (lineItems.length === 1) return;
    setLineItems(p => p.filter(i => i.id !== id));
  }

  // ─ Actions ───────────────────────────────────────────────
  async function handleSave() {
    if (!clientName.trim()) { toast.error('Please enter a client name'); return; }
    if (lineItems.every(i => !i.description.trim())) { toast.error('Please add at least one line item'); return; }

    setIsSaving(true);
    const invoice: Invoice = {
      invoiceNumber,
      invoiceDate:  invoiceDate.toISOString(),
      dueDate:      dueDate.toISOString(),
      terms,
      clientName,
      clientAddress,
      lineItems,
      subTotal,
      gstAmount,
      total,
      paymentMade: pmtNum,
      balanceDue:  balanceDue < 0 ? 0 : balanceDue,
      includeGST,
      createdAt: new Date().toISOString(),
    };

    saveLocalInvoice(invoice);
    const syncResult = await syncToGoogleSheets(invoice);
    setIsSaving(false);

    if (syncResult.success) {
      toast.success(`${invoiceNumber} — ${clientName}`, {
        description: 'Saved & synced to Google Sheets ✅',
        icon: '🧾',
      });
    } else {
      toast.success(`${invoiceNumber} — ${clientName}`, {
        description: syncResult.error === 'no-url'
          ? 'Saved locally · Set up Google Sheets in ⚙ Settings to sync'
          : `Saved locally · Sheets sync failed: ${syncResult.error}`,
        icon: '💾',
      });
    }

    // Advance invoice number for next creation
    setInvoiceNumber(getNextInvoiceNumber());
  }

  function handlePrint() {
    const prev = document.title;
    document.title = `${invoiceNumber} - ${clientName || 'Invoice'}`;
    window.print();
    // Restore after print dialog closes
    setTimeout(() => { document.title = prev; }, 1000);
  }

  function handleSaveSettings() {
    saveSettings({ appsScriptUrl: scriptUrl });
    setShowSettings(false);
    toast.success('Settings saved!');
  }

  async function handleCopyScript() {
    await navigator.clipboard.writeText(APPS_SCRIPT_CODE);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  // ── Render ─────────────────────────────────────────────────
  return (
    <>
      {/* ── Print Styles ──────────────────────────────────────
          Only nav bars are .no-print. Invoice paper is always
          visible so @media print shows it correctly on A4.
      */}
      <style>{`
        @media print {
          .no-print   { display: none !important; }
          html, body, #root { 
            height: auto !important; 
            min-height: unset !important; 
            background: white !important; 
            margin: 0 !important; 
            padding: 0 !important; 
          }
          .print-page  { background: white !important; padding: 0 !important; margin: 0 !important; min-height: unset !important; height: auto !important; }
          .print-wrap  { padding: 0 !important; margin: 0 !important; width: 100% !important; max-width: 100% !important; }
          .inv-box     { box-shadow: none !important; max-width: 100% !important; margin: 0 !important;
                         border-radius: 0 !important; padding: 0 !important; border: none !important; }
          input, textarea { border: none !important; outline: none !important;
                            background: transparent !important; padding: 0 !important; margin: 0 !important;
                            resize: none !important; box-shadow: none !important; height: auto !important; overflow: hidden !important; }
          .del-btn     { display: none !important; }
          .overflow-x-auto { overflow: visible !important; }
          @page { size: auto; margin: 10mm; }
        }
      `}</style>

      {/* ── Top bar — hidden when printing ─────────────────── */}
      <div className="no-print bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-sm">
              <span className="text-white text-lg font-bold">H</span>
            </div>
            <div>
              <div className="font-bold text-slate-800 text-sm leading-tight">Hamza Ishfaq</div>
              <div className="text-xs text-slate-500 leading-tight">Invoice Generator</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="text-slate-600 border-slate-200 hover:bg-slate-50"
              onClick={() => navigate('/hamza/records')}
            >
              <ClipboardList className="w-4 h-4 mr-1.5" />
              Past Records
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-slate-600"
              onClick={() => setShowSettings(true)}
            >
              <Settings className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* ── Action bar — hidden when printing ──────────────── */}
      <div className="no-print bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 py-2.5 flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <Switch id="gst-toggle" checked={includeGST} onCheckedChange={setIncludeGST} />
              <Label htmlFor="gst-toggle" className="text-sm text-slate-600 cursor-pointer">
                Add 10% GST
              </Label>
            </div>

            <div className="w-px h-4 bg-slate-200" />

            <button
              type="button"
              onClick={() => {
                setClientName(DEFAULT_CLIENT.name);
                setClientAddress(DEFAULT_CLIENT.address);
              }}
              className="text-xs text-indigo-600 bg-indigo-50 border border-indigo-200 rounded-md px-2.5 py-1 hover:bg-indigo-100 transition-colors whitespace-nowrap font-medium"
            >
              📄 S Painting &amp; Decorating
            </button>
          </div>

          {!getSettings().appsScriptUrl && (
            <button
              onClick={() => setShowSettings(true)}
              className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-md px-2.5 py-1 hover:bg-amber-100 transition-colors"
            >
              ⚠ Google Sheets not configured — click to set up
            </button>
          )}

          <div className="ml-auto flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={addRow} className="border-slate-200">
              <Plus className="w-4 h-4 mr-1" />
              Add Row
            </Button>
            <Button
              size="sm"
              onClick={handleSave}
              disabled={isSaving}
              className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm"
            >
              <Save className="w-4 h-4 mr-1" />
              {isSaving ? 'Saving…' : 'Save Invoice'}
            </Button>
            <Button
              size="sm"
              onClick={handlePrint}
              className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
            >
              <Printer className="w-4 h-4 mr-1" />
              Print
            </Button>
          </div>
        </div>
      </div>

      {/* ── Invoice paper — ALWAYS visible (incl. print) ────── */}
      <div className="print-page bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
        <div className="print-wrap max-w-5xl mx-auto py-8 px-4">
          <InvoicePaper
            mode="edit"
            invoiceNumber={invoiceNumber}
            setInvoiceNumber={setInvoiceNumber}
            invoiceDate={invoiceDate}
            setInvoiceDate={setInvoiceDate}
            dueDate={dueDate}
            setDueDate={setDueDate}
            terms={terms}
            setTerms={setTerms}
            clientName={clientName}
            setClientName={setClientName}
            clientAddress={clientAddress}
            setClientAddress={setClientAddress}
            lineItems={lineItems}
            updateItem={updateItem}
            addRow={addRow}
            removeRow={removeRow}
            includeGST={includeGST}
            subTotal={subTotal}
            gstAmount={gstAmount}
            total={total}
            paymentMade={paymentMade}
            setPaymentMade={setPaymentMade}
            balanceDue={balanceDue}
            invDateOpen={invDateOpen}
            setInvDateOpen={setInvDateOpen}
            dueDateOpen={dueDateOpen}
            setDueDateOpen={setDueDateOpen}
          />
        </div>
      </div>

      {/* ── Settings Dialog ──────────────────────────────────── */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              Google Sheets Setup
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-5 mt-2">
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-3 text-sm text-blue-800">
              Invoices are always saved on this device. Setting up Google Sheets lets you access them from anywhere.
            </div>

            <div className="space-y-1.5">
              <Label className="text-sm font-medium">Apps Script Web App URL</Label>
              <Input
                placeholder="https://script.google.com/macros/s/…/exec"
                value={scriptUrl}
                onChange={e => setScriptUrl(e.target.value)}
              />
              <p className="text-xs text-slate-500">Paste your deployed Apps Script URL here</p>
            </div>

            {/* How-to instructions */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 text-sm font-medium text-slate-700 hover:bg-slate-100 transition-colors"
                onClick={() => setShowScript(s => !s)}
              >
                <span>📋 How to set up (step-by-step)</span>
                <ChevronRight className={`w-4 h-4 transition-transform ${showScript ? 'rotate-90' : ''}`} />
              </button>
              {showScript && (
                <div className="p-4 space-y-3 text-sm">
                  <ol className="list-decimal list-inside space-y-1.5 text-slate-600">
                    <li>Open your Google Sheet</li>
                    <li>Go to <strong>Extensions → Apps Script</strong></li>
                    <li>Delete all existing code, paste the script below</li>
                    <li>Click <strong>Deploy → New deployment</strong></li>
                    <li>Select type: <strong>Web app</strong></li>
                    <li>Execute as: <strong>Me</strong></li>
                    <li>Who has access: <strong>Anyone</strong></li>
                    <li>Click <strong>Deploy</strong>, copy the URL, paste above</li>
                  </ol>

                  <div className="relative">
                    <pre className="bg-slate-900 text-emerald-300 rounded-lg p-4 text-xs overflow-x-auto max-h-64 leading-relaxed">
                      {APPS_SCRIPT_CODE}
                    </pre>
                    <button
                      onClick={handleCopyScript}
                      className="absolute top-2 right-2 bg-slate-700 hover:bg-slate-600 text-white rounded-md px-2.5 py-1 text-xs flex items-center gap-1 transition-colors"
                    >
                      {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-2 pt-1">
              <Button variant="outline" onClick={() => setShowSettings(false)}>Cancel</Button>
              <Button onClick={handleSaveSettings} className="bg-indigo-600 hover:bg-indigo-700 text-white">
                Save Settings
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

// ══════════════════════════════════════════════════════════════
// Shared Invoice Paper — used by both HamzaInvoice (edit) and
// HamzaInvoiceView (read-only). Matches the HTML sample layout.
// ══════════════════════════════════════════════════════════════
interface InvoicePaperProps {
  mode: 'edit' | 'view';
  invoiceNumber:    string;
  setInvoiceNumber?: (v: string) => void;
  invoiceDate:      Date;
  setInvoiceDate?:  (d: Date) => void;
  dueDate:          Date;
  setDueDate?:      (d: Date) => void;
  terms:            string;
  setTerms?:        (v: string) => void;
  clientName:       string;
  setClientName?:   (v: string) => void;
  clientAddress:    string;
  setClientAddress?:(v: string) => void;
  lineItems:        LineItem[];
  updateItem?:      (id: string, field: keyof LineItem, value: string | number) => void;
  addRow?:          () => void;
  removeRow?:       (id: string) => void;
  includeGST:       boolean;
  subTotal:         number;
  gstAmount:        number;
  total:            number;
  paymentMade:      string | number;
  setPaymentMade?:  (v: string) => void;
  balanceDue:       number;
  invDateOpen?:     boolean;
  setInvDateOpen?:  (v: boolean) => void;
  dueDateOpen?:     boolean;
  setDueDateOpen?:  (v: boolean) => void;
}

export function InvoicePaper(p: InvoicePaperProps) {
  const isEdit  = p.mode === 'edit';
  const bd      = p.balanceDue < 0 ? 0 : p.balanceDue;
  const pmtNum  = typeof p.paymentMade === 'string' ? parseFloat(p.paymentMade) || 0 : p.paymentMade;

  // Track which date picker is open per line item: null | 'from' | 'to'
  const [openPicker, setOpenPicker] = React.useState<Record<string, 'from' | 'to' | null>>({});
  function pickerOpen(id: string, which: 'from' | 'to') {
    return openPicker[id] === which;
  }
  function setPicker(id: string, which: 'from' | 'to' | null) {
    setOpenPicker(prev => ({ ...prev, [id]: which }));
  }
  function fmtJobDate(iso?: string) {
    if (!iso) return '';
    try { return format(parseISO(iso), 'd MMM yyyy'); } catch { return ''; }
  }

  /** Returns all weekdays (Mon-Fri) between two ISO date strings */
  function getWeekdaysBetween(fromIso: string, toIso: string): Date[] {
    try {
      const start = parseISO(fromIso);
      const end   = parseISO(toIso);
      if (end < start) return [start];
      return eachDayOfInterval({ start, end }).filter(d => !isWeekend(d));
    } catch {
      return [];
    }
  }

  return (
    <div className="inv-box bg-white rounded-xl shadow-lg border border-slate-100 p-4 sm:p-10 max-w-[850px] mx-auto font-sans">

      {/* ── Header ────────────────────────────────────────────── */}
      <div className="flex flex-col sm:flex-row justify-between items-start mb-6 sm:mb-10 gap-3 sm:gap-0">
        {/* Sender info */}
        <div className="text-sm text-slate-600 leading-relaxed">
          <div className="font-bold text-slate-800 text-base mb-0.5">
            {HAMZA.name} <span className="font-normal text-slate-500 text-sm">({HAMZA.email})</span>
          </div>
          <div className="whitespace-pre-line">{HAMZA.address}</div>
        </div>

        {/* Title + Number */}
        <div className="text-left sm:text-right">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-widest mb-1">INVOICE</h1>
          {isEdit ? (
            <div className="flex items-center sm:justify-end gap-1 text-slate-500 text-sm mb-1">
              <span>#</span>
              <input
                className="text-sm text-slate-700 font-medium w-32 text-right border-0 border-b border-dashed border-slate-300 bg-transparent focus:outline-none focus:border-indigo-400"
                value={p.invoiceNumber}
                onChange={e => p.setInvoiceNumber?.(e.target.value)}
              />
            </div>
          ) : (
            <div className="text-slate-600 text-sm font-medium mb-1">#{p.invoiceNumber} - {p.clientName}</div>
          )}
          <div className="text-base font-bold text-slate-800 mt-1">
            Balance Due:&nbsp;
            <span className={bd > 0 ? 'text-red-600' : 'text-emerald-600'}>
              ${fmt(bd)}
            </span>
          </div>
        </div>
      </div>

      {/* ── Bill To + Invoice Details ───────────────────────── */}
      <div className="flex flex-col sm:flex-row justify-between items-start mb-6 sm:mb-8 gap-4 sm:gap-6">
        {/* Bill To */}
        <div className="text-sm text-slate-600 flex-1 w-full">
          <div className="font-bold text-slate-800 mb-2">Bill To</div>
          {isEdit ? (
            <>
              <input
                className="w-full font-semibold text-slate-800 text-sm border-0 border-b border-dashed border-slate-300 bg-transparent focus:outline-none focus:border-indigo-400 mb-2 py-0.5"
                placeholder="Client / Company Name"
                value={p.clientName}
                onChange={e => p.setClientName?.(e.target.value)}
              />
              <div className="relative">
                <textarea
                  className="w-full text-sm text-slate-700 border border-dashed border-slate-300 bg-slate-50/60 rounded-md focus:outline-none focus:border-indigo-400 focus:bg-white resize-none leading-relaxed p-2 transition-colors"
                  rows={4}
                  placeholder={`Client Address\ne.g.\n30 Lake Borumba St Logan Reserve\nBrisbane\n4133 Queensland\nAustralia`}
                  value={p.clientAddress}
                  onChange={e => p.setClientAddress?.(e.target.value)}
                />
              </div>
            </>
          ) : (
            <>
              <div className="font-semibold text-slate-800">{p.clientName}</div>
              <div className="whitespace-pre-line">{p.clientAddress}</div>
            </>
          )}
        </div>

        {/* Invoice Details */}
        <div className="text-sm text-slate-600 sm:text-right shrink-0 w-full sm:w-auto">
          {/* Invoice Date */}
          <div className="flex items-center justify-between sm:justify-end gap-2 mb-2">
            <span className="font-medium text-slate-700 whitespace-nowrap">Invoice Date:</span>
            {isEdit ? (
              <Popover open={p.invDateOpen} onOpenChange={p.setInvDateOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm" className="text-xs h-7 px-2 border-slate-200">
                    <CalendarIcon className="w-3 h-3 mr-1 text-indigo-500" />
                    {format(p.invoiceDate, 'd MMM yyyy')}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <Calendar
                    mode="single"
                    selected={p.invoiceDate}
                    onSelect={d => { if (d) { p.setInvoiceDate?.(d); p.setInvDateOpen?.(false); } }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            ) : (
              <span>{format(p.invoiceDate, 'd MMM yyyy')}</span>
            )}
          </div>

          {/* Terms */}
          <div className="flex items-center justify-between sm:justify-end gap-2 mb-2">
            <span className="font-medium text-slate-700">Terms:</span>
            {isEdit ? (
              <input
                className="text-xs text-right w-24 border-0 border-b border-dashed border-slate-300 bg-transparent focus:outline-none focus:border-indigo-400 py-0.5"
                value={p.terms}
                onChange={e => p.setTerms?.(e.target.value)}
              />
            ) : (
              <span>{p.terms}</span>
            )}
          </div>

          {/* Due Date */}
          <div className="flex items-center justify-between sm:justify-end gap-2">
            <span className="font-medium text-slate-700 whitespace-nowrap">Due Date:</span>
            {isEdit ? (
              <Popover open={p.dueDateOpen} onOpenChange={p.setDueDateOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm" className="text-xs h-7 px-2 border-slate-200">
                    <CalendarIcon className="w-3 h-3 mr-1 text-indigo-500" />
                    {format(p.dueDate, 'd MMM yyyy')}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <Calendar
                    mode="single"
                    selected={p.dueDate}
                    onSelect={d => { if (d) { p.setDueDate?.(d); p.setDueDateOpen?.(false); } }}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            ) : (
              <span>{format(p.dueDate, 'd MMM yyyy')}</span>
            )}
          </div>
        </div>
      </div>

      {/* ── Line Items Table ────────────────────────────────── */}
      <div className="overflow-x-auto -mx-4 sm:mx-0 px-4 sm:px-0">
        <table className="w-full border-collapse min-w-[480px]">
          <thead>
            <tr className="bg-slate-50">
              <th className="text-left px-2.5 py-2 border-b border-slate-200 text-xs text-slate-500 font-semibold w-8">#</th>
              <th className="text-left px-2.5 py-2 border-b border-slate-200 text-xs text-slate-500 font-semibold">Item &amp; Job Description</th>
              <th className="text-right px-2.5 py-2 border-b border-slate-200 text-xs text-slate-500 font-semibold w-20">Hours</th>
              <th className="text-right px-2.5 py-2 border-b border-slate-200 text-xs text-slate-500 font-semibold w-24">Rate</th>
              <th className="text-right px-2.5 py-2 border-b border-slate-200 text-xs text-slate-500 font-semibold w-28">Amount</th>
              {isEdit && <th className="del-btn w-9 border-b border-slate-200"></th>}
            </tr>
          </thead>
          <tbody>
            {p.lineItems.map((item, idx) => (
              <tr key={item.id} className="border-b border-slate-100 group">
                <td className="px-2.5 py-2 text-sm text-slate-400 align-top pt-3">{idx + 1}</td>
                <td className="px-2.5 py-2 align-top">
                  {isEdit ? (
                    <>
                      <textarea
                        className="w-full text-sm text-slate-700 border-0 border-b border-dashed border-slate-200 bg-transparent focus:outline-none focus:border-indigo-400 resize-none leading-relaxed min-h-[40px]"
                        placeholder="Item description, job details…"
                        value={item.description}
                        onChange={e => p.updateItem?.(item.id, 'description', e.target.value)}
                        rows={2}
                      />
                      {/* ── Per-row job date range pickers ────── */}
                      <div className="flex items-center gap-1.5 mt-1.5 flex-wrap">
                        <span className="text-xs text-slate-400">Job dates:</span>
                        {/* From */}
                        <Popover open={pickerOpen(item.id, 'from')} onOpenChange={o => setPicker(item.id, o ? 'from' : null)}>
                          <PopoverTrigger asChild>
                            <button className={`text-xs px-2 py-0.5 rounded border border-dashed transition-colors ${
                              item.jobDateFrom
                                ? 'border-indigo-300 text-indigo-600 bg-indigo-50'
                                : 'border-slate-300 text-slate-400 hover:border-indigo-300'
                            }`}>
                              <CalendarIcon className="w-3 h-3 inline mr-1" />
                              {item.jobDateFrom ? fmtJobDate(item.jobDateFrom) : 'From'}
                            </button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={item.jobDateFrom ? parseISO(item.jobDateFrom) : undefined}
                              onSelect={d => { if (d) { p.updateItem?.(item.id, 'jobDateFrom', d.toISOString()); setPicker(item.id, null); } }}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <span className="text-xs text-slate-400">to</span>
                        {/* To */}
                        <Popover open={pickerOpen(item.id, 'to')} onOpenChange={o => setPicker(item.id, o ? 'to' : null)}>
                          <PopoverTrigger asChild>
                            <button className={`text-xs px-2 py-0.5 rounded border border-dashed transition-colors ${
                              item.jobDateTo
                                ? 'border-indigo-300 text-indigo-600 bg-indigo-50'
                                : 'border-slate-300 text-slate-400 hover:border-indigo-300'
                            }`}>
                              <CalendarIcon className="w-3 h-3 inline mr-1" />
                              {item.jobDateTo ? fmtJobDate(item.jobDateTo) : 'To'}
                            </button>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={item.jobDateTo ? parseISO(item.jobDateTo) : undefined}
                              onSelect={d => { if (d) { p.updateItem?.(item.id, 'jobDateTo', d.toISOString()); setPicker(item.id, null); } }}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        {(item.jobDateFrom || item.jobDateTo) && (
                          <span className="text-xs text-slate-500">(7am to 3pm)</span>
                        )}
                      </div>
                      {/* Preview of expanded weekday dates */}
                      {item.jobDateFrom && item.jobDateTo && (() => {
                        const days = getWeekdaysBetween(item.jobDateFrom, item.jobDateTo);
                        if (days.length === 0) return null;
                        return (
                          <div className="mt-1.5 flex flex-wrap gap-1">
                            {days.map(d => (
                              <span key={d.toISOString()} className="text-xs bg-indigo-50 border border-indigo-200 text-indigo-700 rounded px-1.5 py-0.5 font-medium">
                                {format(d, 'EEE d MMM')}
                              </span>
                            ))}
                          </div>
                        );
                      })()}
                    </>
                  ) : (
                    <div className="text-sm text-slate-700 whitespace-pre-line leading-relaxed">
                      {item.description}
                      {item.jobDateFrom && item.jobDateTo && (() => {
                        const days = getWeekdaysBetween(item.jobDateFrom, item.jobDateTo);
                        return days.length > 0 ? (
                          <div className="mt-1.5 space-y-0.5">
                            {days.map(d => (
                              <div key={d.toISOString()}>
                                <span className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded text-xs font-semibold">
                                  {format(d, 'EEE d MMM yyyy')} (7am to 3pm)
                                </span>
                              </div>
                            ))}
                          </div>
                        ) : null;
                      })()}
                      {/* Fallback if only one date is set */}
                      {(item.jobDateFrom && !item.jobDateTo) && (
                        <div className="mt-1.5">
                          <span className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded text-xs font-semibold">
                            {fmtJobDate(item.jobDateFrom)} (7am to 3pm)
                          </span>
                        </div>
                      )}
                      {(!item.jobDateFrom && item.jobDateTo) && (
                        <div className="mt-1.5">
                          <span className="bg-yellow-100 text-yellow-800 px-1.5 py-0.5 rounded text-xs font-semibold">
                            {fmtJobDate(item.jobDateTo)} (7am to 3pm)
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                </td>
                <td className="px-2.5 py-2 align-top">
                  {isEdit ? (
                    <input
                      type="number"
                      className="w-20 text-right text-sm border-0 border-b border-dashed border-slate-200 bg-transparent focus:outline-none focus:border-indigo-400 py-0.5"
                      value={item.qty}
                      onChange={e => p.updateItem?.(item.id, 'qty', parseFloat(e.target.value) || 0)}
                      min="0" step="0.5"
                    />
                  ) : (
                    <div className="text-sm text-right text-slate-700">{item.qty}</div>
                  )}
                </td>
                <td className="px-2.5 py-2 align-top">
                  {isEdit ? (
                    <input
                      type="number"
                      className="w-24 text-right text-sm border-0 border-b border-dashed border-slate-200 bg-transparent focus:outline-none focus:border-indigo-400 py-0.5"
                      value={item.rate}
                      onChange={e => p.updateItem?.(item.id, 'rate', parseFloat(e.target.value) || 0)}
                      min="0" step="0.01"
                    />
                  ) : (
                    <div className="text-sm text-right text-slate-700">{fmt(item.rate)}</div>
                  )}
                </td>
                <td className="px-2.5 py-2 text-right text-sm font-medium text-slate-800 align-top pt-3">
                  {fmt(item.amount)}
                </td>
                {isEdit && (
                  <td className="del-btn px-1 py-2 align-top">
                    <button
                      onClick={() => p.removeRow?.(item.id)}
                      disabled={p.lineItems.length === 1}
                      className="mt-2 text-slate-300 hover:text-red-500 disabled:opacity-20 transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Totals ────────────────────────────────────────────── */}
      <div className="flex justify-end mt-4 sm:mt-6 pb-6 sm:pb-10">
        <div className="w-full sm:w-72">
          <TotalsRow label="Sub Total" value={`${fmt(p.subTotal)}`} />
          {p.includeGST && <TotalsRow label="GST (10%)" value={`${fmt(p.gstAmount)}`} />}
          <div className="border-t border-slate-200 mt-1 pt-1">
            <TotalsRow label="Total" value={`$${fmt(p.total)}`} bold />
          </div>
          <div className="flex justify-between items-center py-1.5 text-sm text-slate-600">
            <span>Payment Made</span>
            {isEdit ? (
              <span className="flex items-center gap-0.5 text-slate-600">
                (-) $
                <input
                  type="number"
                  className="w-24 text-right text-sm border-0 border-b border-dashed border-slate-200 bg-transparent focus:outline-none focus:border-indigo-400 py-0"
                  value={p.paymentMade}
                  onChange={e => p.setPaymentMade?.(e.target.value)}
                  min="0" step="0.01"
                />
              </span>
            ) : (
              <span>(-) ${fmt(pmtNum)}</span>
            )}
          </div>
          <div className="border-t-2 border-slate-300 mt-1 pt-1.5">
            <TotalsRow
              label="Balance Due"
              value={`$${fmt(bd)}`}
              bold
              valueClass={bd > 0 ? 'text-red-600' : 'text-emerald-600'}
            />
          </div>
        </div>
      </div>

      {/* ── Notes / Footer ─────────────────────────────────── */}
      <div className="border-t border-slate-100 pt-4 text-sm text-slate-600 clear-both flex flex-col sm:flex-row justify-between gap-4">
        <div>
          <div className="font-bold text-slate-800 mb-1">Notes</div>
          <div className="font-medium text-slate-700">{HAMZA.name}</div>
          <div><span className="font-medium">ABN:</span> {HAMZA.abn}</div>
          <div className="mt-2 text-slate-500 italic">Thanks for your business.</div>
        </div>
        <div className="sm:text-right">
          <div className="font-bold text-slate-800 mb-1">Payment Details</div>
          <div className="whitespace-pre-line leading-relaxed">{HAMZA.bank}</div>
        </div>
      </div>
    </div>
  );
}

// Small helper row component
function TotalsRow({ label, value, bold, valueClass }: {
  label: string; value: string; bold?: boolean; valueClass?: string;
}) {
  return (
    <div className={`flex justify-between py-1.5 text-sm ${bold ? 'font-bold text-slate-800' : 'text-slate-600'}`}>
      <span>{label}</span>
      <span className={valueClass}>{value}</span>
    </div>
  );
}
