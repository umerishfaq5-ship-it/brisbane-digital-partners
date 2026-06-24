import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { format, isPast, parseISO } from 'date-fns';
import {
  Plus, RefreshCw, FileText, TrendingUp,
  ChevronRight, Search, AlertCircle, Trash2
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { getLocalInvoices, deleteLocalInvoice, type Invoice } from '@/lib/sheetsApi';

// ── Helpers ────────────────────────────────────────────────
function fmt(n: number) {
  return new Intl.NumberFormat('en-AU', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(n);
}

function getStatus(inv: Invoice): 'paid' | 'overdue' | 'pending' {
  if (inv.balanceDue <= 0) return 'paid';
  if (isPast(parseISO(inv.dueDate))) return 'overdue';
  return 'pending';
}

const STATUS_STYLES = {
  paid:    { label: 'Paid',    cls: 'bg-emerald-100 text-emerald-700 border-emerald-200' },
  overdue: { label: 'Overdue', cls: 'bg-red-100 text-red-700 border-red-200' },
  pending: { label: 'Pending', cls: 'bg-amber-100 text-amber-700 border-amber-200' },
};

// ── Component ──────────────────────────────────────────────
export default function HamzaRecords() {
  const navigate = useNavigate();
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [search,   setSearch]   = useState('');
  const [loading,  setLoading]  = useState(true);
  const [deleteTarget, setDeleteTarget] = useState<string | null>(null);

  function loadInvoices() {
    setLoading(true);
    const local = getLocalInvoices();
    setInvoices(local);
    setLoading(false);
  }

  useEffect(() => { loadInvoices(); }, []);

  function confirmDelete(invoiceNumber: string, e: React.MouseEvent) {
    e.stopPropagation(); // don't navigate to the invoice
    setDeleteTarget(invoiceNumber);
  }

  function handleDelete() {
    if (!deleteTarget) return;
    deleteLocalInvoice(deleteTarget);
    setDeleteTarget(null);
    loadInvoices();
  }

  const filtered = invoices.filter(inv =>
    inv.invoiceNumber.toLowerCase().includes(search.toLowerCase()) ||
    inv.clientName.toLowerCase().includes(search.toLowerCase())
  );

  // ── Summary Stats ─────────────────────────────────────────
  const totalRevenue  = invoices.reduce((s, i) => s + i.total, 0);
  const totalOwed     = invoices.reduce((s, i) => s + Math.max(0, i.balanceDue), 0);
  const paidCount     = invoices.filter(i => getStatus(i) === 'paid').length;
  const overdueCount  = invoices.filter(i => getStatus(i) === 'overdue').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">

      {/* ── Top Bar ─────────────────────────────────────────── */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-sm">
              <span className="text-white text-lg font-bold">H</span>
            </div>
            <div>
              <div className="font-bold text-slate-800 text-sm leading-tight">Hamza Ishfaq</div>
              <div className="text-xs text-slate-500 leading-tight">Past Invoices</div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="text-slate-600" onClick={loadInvoices}>
              <RefreshCw className="w-4 h-4" />
            </Button>
            <Button
              size="sm"
              className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm"
              onClick={() => navigate('/hamza')}
            >
              <Plus className="w-4 h-4 mr-1 sm:mr-1.5" />
              <span className="hidden sm:inline">New Invoice</span>
              <span className="sm:hidden">New</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-3 sm:px-4 py-4 sm:py-8 space-y-4 sm:space-y-6">

        {/* ── Stats Cards ───────────────────────────────────── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          <StatCard icon={<FileText className="w-5 h-5 text-indigo-500" />} label="Total Invoices" value={invoices.length} bg="bg-indigo-50 border-indigo-100" />
          <StatCard icon={<TrendingUp className="w-5 h-5 text-emerald-500" />} label="Total Revenue" value={`$${fmt(totalRevenue)}`} bg="bg-emerald-50 border-emerald-100" />
          <StatCard icon={<span className="text-amber-500 font-bold text-sm">✓</span>} label="Paid" value={paidCount} bg="bg-amber-50 border-amber-100" />
          <StatCard icon={<AlertCircle className="w-5 h-5 text-red-500" />} label="Outstanding" value={totalOwed > 0 ? `$${fmt(totalOwed)}` : '$0.00'} bg="bg-red-50 border-red-100" />
        </div>

        {/* ── Search + List/Table ────────────────────────────── */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
          <div className="px-4 sm:px-5 py-3 sm:py-4 border-b border-slate-100 flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search invoice or client…"
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="pl-9 border-slate-200 focus-visible:ring-indigo-200"
              />
            </div>
            <span className="text-sm text-slate-400 whitespace-nowrap">
              {filtered.length} record{filtered.length !== 1 ? 's' : ''}
            </span>
          </div>

          {loading ? (
            <div className="text-center py-16 text-slate-400">Loading…</div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-20 space-y-3">
              <div className="text-5xl">🧾</div>
              <div className="text-slate-600 font-medium">No invoices yet</div>
              <div className="text-sm text-slate-400">
                {search ? 'No results for that search.' : 'Create your first invoice to see it here.'}
              </div>
              {!search && (
                <Button size="sm" className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white" onClick={() => navigate('/hamza')}>
                  <Plus className="w-4 h-4 mr-1" /> Create Invoice
                </Button>
              )}
            </div>
          ) : (
            <>
              {/* ── Mobile card list (< sm) ─────────────────── */}
              <div className="sm:hidden divide-y divide-slate-100">
                {filtered.map(inv => {
                  const status = getStatus(inv);
                  const s = STATUS_STYLES[status];
                  return (
                    <div key={inv.invoiceNumber} className="flex items-center gap-2 px-4 py-3 hover:bg-indigo-50/30 transition-colors">
                      <button
                        className="flex-1 flex items-start justify-between text-left min-w-0 gap-3"
                        onClick={() => navigate(`/hamza/invoice/${encodeURIComponent(inv.invoiceNumber)}`)}
                      >
                        <div className="min-w-0">
                          <div className="font-mono text-sm font-bold text-indigo-600">#{inv.invoiceNumber}</div>
                          <div className="text-sm font-medium text-slate-800 truncate mt-0.5">{inv.clientName || '—'}</div>
                          <div className="text-xs text-slate-400 mt-0.5">
                            {format(parseISO(inv.invoiceDate), 'd MMM yy')} · Due {format(parseISO(inv.dueDate), 'd MMM yy')}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-1.5 shrink-0">
                          <span className={`text-xs border rounded-full px-2 py-0.5 font-medium ${s.cls}`}>{s.label}</span>
                          <div className="text-sm font-bold text-slate-800">${fmt(inv.total)}</div>
                        </div>
                      </button>
                      <button
                        onClick={(e) => confirmDelete(inv.invoiceNumber, e)}
                        className="p-2 rounded-lg text-slate-300 hover:text-red-500 hover:bg-red-50 transition-colors shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* ── Desktop grid table (sm+) ────────────────── */}
              <div className="hidden sm:block">
                <div className="grid grid-cols-[120px_1fr_110px_110px_110px_90px_44px_32px] px-5 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wide border-b border-slate-100 bg-slate-50">
                  <div>Invoice #</div><div>Client</div><div>Date</div><div>Due</div>
                  <div className="text-right">Total</div><div className="text-right">Status</div>
                  <div></div><div></div>
                </div>
                {filtered.map(inv => {
                  const status = getStatus(inv);
                  const s = STATUS_STYLES[status];
                  return (
                    <button
                      key={inv.invoiceNumber}
                      onClick={() => navigate(`/hamza/invoice/${encodeURIComponent(inv.invoiceNumber)}`)}
                      className="w-full grid grid-cols-[120px_1fr_110px_110px_110px_90px_44px_32px] px-5 py-3.5 items-center text-left border-b border-slate-50 hover:bg-indigo-50/40 transition-colors group"
                    >
                      <div className="font-mono text-sm font-semibold text-indigo-600 group-hover:text-indigo-700">#{inv.invoiceNumber}</div>
                      <div className="text-sm text-slate-700 truncate pr-4">{inv.clientName || '—'}</div>
                      <div className="text-sm text-slate-500">{format(parseISO(inv.invoiceDate), 'd MMM yyyy')}</div>
                      <div className="text-sm text-slate-500">{format(parseISO(inv.dueDate), 'd MMM yyyy')}</div>
                      <div className="text-sm font-medium text-slate-800 text-right">${fmt(inv.total)}</div>
                      <div className="flex justify-end">
                        <span className={`text-xs border rounded-full px-2.5 py-0.5 font-medium ${s.cls}`}>{s.label}</span>
                      </div>
                      <div className="flex justify-center">
                        <button onClick={(e) => confirmDelete(inv.invoiceNumber, e)} className="p-1.5 rounded-md text-slate-300 hover:text-red-500 hover:bg-red-50 transition-colors" title="Delete invoice">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="flex justify-end">
                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-400 transition-colors" />
                      </div>
                    </button>
                  );
                })}
              </div>
            </>
          )}
        </div>

        {overdueCount > 0 && (
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-lg px-4 py-3 text-sm text-red-700">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>
              You have <strong>{overdueCount}</strong> overdue invoice{overdueCount > 1 ? 's' : ''} — click to view details.
            </span>
          </div>
        )}
      </div>

      {/* ── Delete Confirmation Dialog ────────────────────────── */}
      <AlertDialog open={!!deleteTarget} onOpenChange={open => !open && setDeleteTarget(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Invoice?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete <strong>{deleteTarget}</strong> from your records.
              This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Yes, Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}

// ── Stat Card ──────────────────────────────────────────────
function StatCard({ icon, label, value, bg }: {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  bg: string;
}) {
  return (
    <div className={`border rounded-xl px-4 py-4 ${bg}`}>
      <div className="flex items-center gap-2 mb-2">{icon}<span className="text-xs text-slate-500 font-medium">{label}</span></div>
      <div className="text-xl font-bold text-slate-800">{value}</div>
    </div>
  );
}
