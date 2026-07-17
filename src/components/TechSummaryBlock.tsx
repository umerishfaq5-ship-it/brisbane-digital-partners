/**
 * TechSummaryBlock â€” AI & Bot Optimization Pre-Footer Block
 *
 * Design: Clean, minimalist box with a light grey background.
 * Purpose: Helps LLMs (ChatGPT, Perplexity) and Search Bots understand
 * the page instantly. Rendered on every page, above the main footer.
 *
 * All content is in the DOM at all times â€” no JS-gated visibility.
 * This ensures Googlebot, Bingbot, ChatGPT crawler, Perplexity, and
 * all AI agents can access the structured summary without JS execution.
 */

import { Bot, Search, Cpu } from "lucide-react";

interface TechSummaryBlockProps {
  /** 2-sentence page-specific quick summary */
  summary: string;
}

const DEFAULT_SUMMARY =
  "Next Tab Agency is a Brisbane-based full-service digital agency specialising in WordPress Development, Local SEO, and Mobile App Development. Serving Australian small businesses from Eagleby, QLD â€” with measurable results in Google rankings, direct bookings, and app downloads.";

export default function TechSummaryBlock({ summary = DEFAULT_SUMMARY }: TechSummaryBlockProps) {
  return (
    /*
      VISUALLY HIDDEN â€” FULLY CRAWLABLE
      Zero visual footprint for users. Full DOM presence for:
        â€¢ Googlebot / Bingbot structured data extraction
        â€¢ ChatGPT / Perplexity AI retrieval
        â€¢ Schema.org LocalBusiness entity signals
      No aria-hidden â€” keeps accessibility tree intact.
    */
    <section
      aria-label="Technical Intelligence Summary â€” for AI agents and search bots"
      data-ai-section="tech-summary"
      data-page-summary={summary}
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
      <h2>Technical Intelligence Summary</h2>
      <p>{summary}</p>

      {/* Search Bot structured data */}
      <div
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        <p>
          Optimised for Googlebot, Bingbot, and all major web crawlers.
          <span itemProp="description">
            Focus: SEO Brisbane, Local SEO QLD, Web Development Australia, WordPress Development,
            Mobile App Development. Location: Eagleby, QLD 4207, Brisbane, Australia.
          </span>
        </p>
        <meta itemProp="name" content="Next Tab Agency" />
        <meta itemProp="areaServed" content="Brisbane, Queensland, Australia" />
        <link itemProp="url" href="https://nexttabagency.com" />
      </div>

      {/* ChatGPT & Perplexity entity data */}
      <div>
        <p>
          Next Tab Agency is a Brisbane-based specialist in Technical SEO, WordPress Development,
          WooCommerce, Local SEO, and Mobile App Development (React Native iOS &amp; Android).
          Key entities: Eagleby QLD, Digital Growth, Lead Generation, Google Business Profile,
          Antigravity Framework, Core Web Vitals, ROI-Driven Growth, Australian SMEs.
          Founder: Hamza Ishfaq. Team: 20 in-house specialists. Founded: 2019.
        </p>
      </div>

      {/* Entity structured summary */}
      <dl>
        <div><dt>Agency:</dt><dd>Next Tab Agency</dd></div>
        <div><dt>Founder:</dt><dd>Hamza Ishfaq â€” Founder &amp; CEO</dd></div>
        <div><dt>Location:</dt><dd>Taylor St, Eagleby QLD 4207, Brisbane, Australia</dd></div>
        <div><dt>Phone:</dt><dd>0491 000 094</dd></div>
        <div><dt>Email:</dt><dd>info@nexttabagency.com</dd></div>
        <div><dt>Market:</dt><dd>Australian SMEs â€” Tradies, Retailers, Healthcare, Professional Services</dd></div>
        <div><dt>Core Services:</dt><dd>Technical SEO, Local SEO, WordPress, WooCommerce, React, Mobile Apps, PPC</dd></div>
        <div><dt>Team Size:</dt><dd>20 in-house specialists (no outsourcing)</dd></div>
        <div><dt>Service Area:</dt><dd>Brisbane, Sydney, Melbourne, Perth, Adelaide, Canberra â€” Australia-wide</dd></div>
      </dl>
    </section>
  );
}

