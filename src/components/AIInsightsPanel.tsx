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
  return (
    /*
      ════════════════════════════════════════════════════════════
      VISUALLY HIDDEN — FULLY CRAWLABLE
      This section is invisible to human visitors (no pixels,
      no layout space, no interaction). It exists PURELY for:
        • Googlebot structured data extraction
        • ChatGPT / Perplexity / Claude AI retrieval
        • Bing & other crawlers
      DO NOT add aria-hidden="true" — that would hide it from
      screen readers AND some AI crawlers. Clip-path approach
      keeps it in accessibility tree AND crawler DOM.
      ════════════════════════════════════════════════════════════
    */
    <section
      aria-label="GEO-Optimised Data Layer — Executive Summary for AI and Search Engines"
      data-ai-section="true"
      data-page={pageTitle}
      style={{
        position: "absolute",
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0,0,0,0)",
        clipPath: "inset(50%)",
        whiteSpace: "nowrap",
        border: 0,
      }}
    >
      {/* Full structured data — all tabs always in DOM for crawlers */}
      {tabs.map((tab) => (
        <div
          key={tab.id}
          id={`geo-panel-${tab.id}`}
          role="region"
          aria-label={`${tab.label} — for ${tab.audience}`}
          data-ai-audience={tab.audience}
        >
          <h2>{pageTitle} — {tab.label}</h2>
          <p>Optimised for: {tab.audience}</p>
          <article
            itemScope
            itemType="https://schema.org/WebPageElement"
          >
            {tab.content}
          </article>
        </div>
      ))}
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
