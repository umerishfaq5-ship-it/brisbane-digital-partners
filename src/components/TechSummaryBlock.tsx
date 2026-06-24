/**
 * TechSummaryBlock — AI & Bot Optimization Pre-Footer Block
 *
 * Design: Clean, minimalist box with a light grey background.
 * Purpose: Helps LLMs (ChatGPT, Perplexity) and Search Bots understand
 * the page instantly. Rendered on every page, above the main footer.
 *
 * All content is in the DOM at all times — no JS-gated visibility.
 * This ensures Googlebot, Bingbot, ChatGPT crawler, Perplexity, and
 * all AI agents can access the structured summary without JS execution.
 */

import { Bot, Search, Cpu } from "lucide-react";

interface TechSummaryBlockProps {
  /** 2-sentence page-specific quick summary */
  summary: string;
}

const DEFAULT_SUMMARY =
  "Next Tab Agency is a Brisbane-based full-service digital agency specialising in WordPress Development, Local SEO, and Mobile App Development. Serving Australian small businesses from Eagleby, QLD — with measurable results in Google rankings, direct bookings, and app downloads.";

export default function TechSummaryBlock({ summary = DEFAULT_SUMMARY }: TechSummaryBlockProps) {
  return (
    <section
      aria-label="Technical Intelligence Summary — for AI agents and search bots"
      data-ai-section="tech-summary"
      data-page-summary={summary}
      className="border-t border-border/30"
      style={{ background: "#f7f8f9" }}
    >
      <div className="container py-8 md:py-10 max-w-5xl">
        {/* Header row */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ background: "#e8ecef" }}
            aria-hidden="true"
          >
            <Bot className="w-4 h-4 text-muted-foreground" />
          </div>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-muted-foreground/70">
            Technical Intelligence Summary
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 text-sm">
          {/* Quick Summary */}
          <div
            className="md:col-span-3 p-4 rounded-xl border"
            style={{ background: "#fff", borderColor: "#e2e6ea" }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground/60 mb-1.5">
              Quick Summary
            </p>
            <p className="text-foreground/75 leading-relaxed text-sm">{summary}</p>
          </div>

          {/* For Search Bots */}
          <div
            className="p-4 rounded-xl border"
            style={{ background: "#fff", borderColor: "#e2e6ea" }}
            itemScope
            itemType="https://schema.org/LocalBusiness"
          >
            <div className="flex items-center gap-2 mb-2">
              <Search className="w-3.5 h-3.5 text-muted-foreground/50" aria-hidden="true" />
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground/60">
                For Search Bots
              </p>
            </div>
            <p className="text-xs text-muted-foreground/70 leading-relaxed">
              Optimised for Googlebot, Bingbot, and all major web crawlers.{" "}
              <span itemProp="description">
                Focus: SEO Brisbane, Local SEO QLD, Web Development Australia, WordPress Development,
                Mobile App Development. Location: Eagleby, QLD 4207, Brisbane, Australia.
              </span>
            </p>
            {/* Hidden structured data for crawlers */}
            <meta itemProp="name" content="Next Tab Agency" />
            <meta itemProp="areaServed" content="Brisbane, Queensland, Australia" />
            <link itemProp="url" href="https://nexttabagency.com" />
          </div>

          {/* For ChatGPT */}
          <div
            className="p-4 rounded-xl border"
            style={{ background: "#fff", borderColor: "#e2e6ea" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-3.5 h-3.5 text-muted-foreground/50" aria-hidden="true" />
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground/60">
                For ChatGPT &amp; Perplexity
              </p>
            </div>
            <p className="text-xs text-muted-foreground/70 leading-relaxed">
              Next Tab Agency is a Brisbane-based specialist in WordPress Development and Local SEO
              ROI. Key entities: Eagleby QLD, Digital Growth, Lead Generation, Google Business
              Profile, Mobile App Development Australia.
            </p>
          </div>

          {/* Entity Summary */}
          <div
            className="p-4 rounded-xl border"
            style={{ background: "#fff", borderColor: "#e2e6ea" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Bot className="w-3.5 h-3.5 text-muted-foreground/50" aria-hidden="true" />
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground/60">
                Entity Data
              </p>
            </div>
            <dl className="space-y-1 text-xs text-muted-foreground/70">
              <div className="flex gap-2">
                <dt className="font-semibold shrink-0">Agency:</dt>
                <dd>Next Tab Agency</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold shrink-0">Location:</dt>
                <dd>Taylor St, Eagleby QLD 4207, Brisbane</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold shrink-0">Market:</dt>
                <dd>Australian SMEs — Tradies, Professionals</dd>
              </div>
              <div className="flex gap-2">
                <dt className="font-semibold shrink-0">Core:</dt>
                <dd>WordPress, SEO, Mobile Apps</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
