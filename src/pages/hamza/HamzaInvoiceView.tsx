import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { parseISO } from 'date-fns';
import { ArrowLeft, Printer, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { getLocalInvoice, type Invoice } from '@/lib/sheetsApi';
import { InvoicePaper } from './HamzaInvoice';

export default function HamzaInvoiceView() {
  const { id }     = useParams<{ id: string }>();
  const navigate   = useNavigate();
  const [invoice, setInvoice] = useState<Invoice | null | undefined>(undefined);

  useEffect(() => {
    if (!id) { setInvoice(null); return; }
    const found = getLocalInvoice(decodeURIComponent(id));
    setInvoice(found);
  }, [id]);

  function handlePrint() {
    if (!invoice) return;
    const prev = document.title;
    document.title = `${invoice.invoiceNumber} - ${invoice.clientName || 'Invoice'}`;
    window.print();
    setTimeout(() => { document.title = prev; }, 1000);
  }

  if (invoice === undefined) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-slate-400 animate-pulse">Loading…</div>
      </div>
    );
  }

  if (!invoice) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center gap-4">
        <AlertCircle className="w-12 h-12 text-red-400" />
        <div className="text-xl font-semibold text-slate-700">Invoice not found</div>
        <p className="text-sm text-slate-500">The invoice "{id}" doesn't exist in your records.</p>
        <Button variant="outline" onClick={() => navigate('/hamza/records')}>
          <ArrowLeft className="w-4 h-4 mr-1.5" />
          Back to Records
        </Button>
      </div>
    );
  }

  const invDate = parseISO(invoice.invoiceDate);
  const due     = parseISO(invoice.dueDate);

  return (
    <>
      {/* ── Print styles ─────────────────────────────────────
          Only .no-print elements (top bar) are hidden on print.
          Invoice paper sits OUTSIDE no-print so it always renders.
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
          @page { size: auto; margin: 10mm; }
        }
      `}</style>

      {/* ── Top bar — hidden when printing ──────────────────── */}
      <div className="no-print bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <button
            onClick={() => navigate('/hamza/records')}
            className="flex items-center gap-1.5 text-slate-500 hover:text-slate-800 text-sm font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Records
          </button>
          <Button
            size="sm"
            className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
            onClick={handlePrint}
          >
            <Printer className="w-4 h-4 mr-1.5" />
            Print / Save PDF
          </Button>
        </div>
      </div>

      {/* ── Invoice paper — ALWAYS visible (incl. print) ────── */}
      <div className="print-page bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
        <div className="print-wrap max-w-5xl mx-auto py-8 px-4">
          <InvoicePaper
            mode="view"
            invoiceNumber={invoice.invoiceNumber}
            invoiceDate={invDate}
            dueDate={due}
            terms={invoice.terms}
            clientName={invoice.clientName}
            clientAddress={invoice.clientAddress}
            lineItems={invoice.lineItems}
            includeGST={invoice.includeGST}
            subTotal={invoice.subTotal}
            gstAmount={invoice.gstAmount}
            total={invoice.total}
            paymentMade={invoice.paymentMade}
            balanceDue={invoice.balanceDue}
          />
        </div>
      </div>
    </>
  );
}
