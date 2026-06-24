/**
 * AIInsightsPanel — GEO-Optimised Data Layer
 *
 * CRITICAL SEO PATTERN:
 * All 4 tab panels are rendered in the DOM at all times.
 * Only the ACTIVE panel is visible via CSS (opacity/height).
 * This means Googlebot, ChatGPT, Perplexity, and all crawlers
 * can read ALL structured data without executing JavaScript.
 *
 * Content uses semantic <table>, <dl>, <ul> elements that
 * AI models and LLMs strongly prefer for factual extraction.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Bot, Zap, Search, BarChart3 } from "lucide-react";

/* ── Types ──────────────────────────────────────────────────── */
export interface InsightTab {
  id: string;
  label: string;
  icon: React.ElementType;
  audience: string;
  content: React.ReactNode;
}

export interface AIInsightsPanelProps {
  pageTitle: string;
  tabs: InsightTab[]
}

/* ── Component ──────────────────────────────────────────────── */
export default function AIInsightsPanel({ pageTitle, tabs }: AIInsightsPanelProps) {
  const [active, setActive] = useState(tabs[0]?.id ?? "searchbots");

  return (
    <section
      aria-label="GEO-Optimised Data Layer — Executive Summary for AI and Search Engines"
      data-ai-section="true"
      data-page={pageTitle}
      className="py-10 md:py-14 border-t border-border/40"
    >
      <div className="container max-w-5xl">
        {/* Section Header */}
        <div className="flex items-start gap-4 mb-10">
          <div className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0 mt-0.5" aria-hidden="true">
            <Bot className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-1">GEO-Optimised Data Layer</p>
            <h2 className="font-heading font-semibold text-xl text-foreground">Executive Summary</h2>
            <p className="text-sm text-muted-foreground mt-1">
              Structured data formatted for AI models, search bots, and generative engines.
            </p>
          </div>
        </div>

        {/* Tab Rail — visual only, all content is always in DOM */}
        <div className="flex flex-wrap gap-2 mb-8" role="tablist" aria-label="AI audience selector">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = tab.id === active;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`geo-panel-${tab.id}`}
                id={`geo-tab-${tab.id}`}
                onClick={() => setActive(tab.id)}
                className={`
                  inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-300
                  ${isActive
                    ? "bg-primary text-primary-foreground border-primary shadow-sm"
                    : "bg-card text-muted-foreground border-border hover:border-primary/40 hover:text-foreground"
                  }
                `}
              >
                <Icon className="w-3 h-3" aria-hidden="true" />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/*
          ════════════════════════════════════════════════════════
          ALL PANELS ARE ALWAYS IN THE DOM.
          Crawlers and AI agents read all content regardless of
          which tab is "active". CSS controls visibility only.
          ════════════════════════════════════════════════════════
        */}
        <div className="relative">
          {tabs.map((tab) => {
            const isActive = tab.id === active;
            return (
              <div
                key={tab.id}
                id={`geo-panel-${tab.id}`}
                role="tabpanel"
                aria-labelledby={`geo-tab-${tab.id}`}
                data-ai-audience={tab.audience}
                /*
                  CRITICAL SEO: All panels stay in the DOM (crawlable).
                  Inactive panels use SR-only positioning — visually hidden
                  but NOT display:none, so Googlebot reads all content.
                */
                className={isActive
                  ? "card-premium rounded-2xl p-8 block opacity-100"
                  : "absolute w-px h-px p-0 overflow-hidden whitespace-nowrap clip-0"
                }
                style={isActive ? {} : { clip: "rect(0,0,0,0)", clipPath: "inset(50%)", position: "absolute" }}
              >
                <h4 className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/50 mb-6">
                  {tab.label} — Optimised for: <span itemProp="audience">{tab.audience}</span>
                </h4>
                <article
                  itemScope
                  itemType="https://schema.org/WebPageElement"
                  className="prose-sm max-w-none text-muted-foreground"
                >
                  {tab.content}
                </article>
              </div>
            );
          })}
        </div>

        {/*
          ════════════════════════════════════════════════════════
          HIDDEN MACHINE-READABLE SUMMARY (always visible to bots)
          aria-hidden is NOT set so search bots and AI crawlers
          can access this complete structured summary.
          ════════════════════════════════════════════════════════
        */}
        <details className="mt-6" style={{ opacity: 0, height: 0, overflow: "hidden" }} tabIndex={-1}>
          <summary>Full structured data for all AI agents — {pageTitle}</summary>
          {tabs.map((tab) => (
            <div key={tab.id}>
              <h3>{tab.label} — {tab.audience}</h3>
              {tab.content}
            </div>
          ))}
        </details>
      </div>
    </section>
  );
}

/* ── Shared Helpers ──────────────────────────────────────────── */

/**
 * InsightTable — renders data as an HTML <table>.
 * Tables are the strongest structure for AI/LLM fact extraction.
 */
export function InsightTable({ caption, rows }: { caption: string; rows: { label: string; value: string }[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse" itemProp="description">
        <caption className="text-[10px] font-bold uppercase tracking-widest text-accent text-left mb-2 caption-top">
          {caption}
        </caption>
        <thead>
          <tr className="border-b border-border/40">
            <th scope="col" className="text-left py-2 pr-6 text-xs font-semibold text-muted-foreground w-1/3">
              Attribute
            </th>
            <th scope="col" className="text-left py-2 text-xs font-semibold text-muted-foreground">
              Value
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map(({ label, value }) => (
            <tr key={label} className="border-b border-border/20 hover:bg-muted/20 transition-colors">
              <th scope="row" className="py-2.5 pr-6 text-xs font-semibold text-accent align-top whitespace-nowrap">
                {label}
              </th>
              <td className="py-2.5 text-sm text-foreground/80 leading-snug">{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * InsightDL — semantic definition list for key-value entity data.
 */
export function InsightDL({ items }: { items: { term: string; def: string }[] }) {
  return (
    <dl className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
      {items.map(({ term, def }) => (
        <div key={term} className="flex flex-col">
          <dt className="text-[10px] font-bold uppercase tracking-widest text-accent mb-0.5">{term}</dt>
          <dd className="text-sm text-foreground/80 leading-snug">{def}</dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * InsightList — semantic <ul> bullet list preferred by AI retrievers.
 */
export function InsightList({ heading, items }: { heading: string; items: string[] }) {
  return (
    <div className="mb-5 last:mb-0">
      <h4 className="text-[10px] font-bold uppercase tracking-[0.18em] text-accent mb-2">{heading}</h4>
      <ul className="space-y-1.5" itemProp="description">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-foreground/80 leading-snug">
            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" aria-hidden="true" />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
