import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Globe, TrendingUp, CheckCircle, Search, Zap,
  BarChart2, Shield, Target, AlertTriangle, MapPin, Bot,
} from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AIInsightsPanel, { InsightList, InsightTable } from "@/components/AIInsightsPanel";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

/* ── CSS GSC Performance Card ──────────────────────────────────────── */
function GSCPerformanceCard() {
  return (
    <div
      role="img"
      aria-label="Google Search Console results — 1.37k clicks, 97.9k impressions, 10.7 average position. Institutional Scalper campaign by Next Tab Agency Brisbane."
      className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full max-w-sm"
    >
      <div className="bg-white px-4 py-2 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-[11px] font-semibold text-gray-600 font-sans">Search Console</span>
        </div>
        <span className="text-[10px] text-gray-400 font-sans">Performance on Search results</span>
      </div>
      <div className="grid grid-cols-2 gap-0 bg-white">
        <div className="p-3 border-r border-b border-gray-100 bg-blue-600">
          <p className="text-[9px] text-blue-100 uppercase tracking-widest font-sans font-bold mb-1">Total clicks</p>
          <p className="text-2xl font-black text-white font-sans leading-none">1.37K</p>
        </div>
        <div className="p-3 border-b border-gray-100 bg-purple-600">
          <p className="text-[9px] text-purple-100 uppercase tracking-widest font-sans font-bold mb-1">Total impressions</p>
          <p className="text-2xl font-black text-white font-sans leading-none">97.9K</p>
        </div>
        <div className="p-3 border-r border-gray-100 bg-teal-600">
          <p className="text-[9px] text-teal-100 uppercase tracking-widest font-sans font-bold mb-1">Average CTR</p>
          <p className="text-2xl font-black text-white font-sans leading-none">1.4%</p>
        </div>
        <div className="p-3 bg-orange-500">
          <p className="text-[9px] text-orange-100 uppercase tracking-widest font-sans font-bold mb-1">Average position</p>
          <p className="text-2xl font-black text-white font-sans leading-none">10.7</p>
        </div>
      </div>
      <div className="bg-white px-4 pt-3 pb-4 border-t border-gray-100">
        <svg viewBox="0 0 280 60" className="w-full h-14" aria-hidden="true">
          <line x1="0" y1="15" x2="280" y2="15" stroke="#e5e7eb" strokeWidth="0.5"/>
          <line x1="0" y1="30" x2="280" y2="30" stroke="#e5e7eb" strokeWidth="0.5"/>
          <line x1="0" y1="45" x2="280" y2="45" stroke="#e5e7eb" strokeWidth="0.5"/>
          <polyline points="0,40 30,35 60,32 90,28 120,25 150,22 180,18 210,15 240,12 280,10" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round"/>
          <polyline points="0,50 30,47 60,44 90,40 120,36 150,33 180,28 210,24 240,20 280,16" fill="none" stroke="#9333ea" strokeWidth="1.5" strokeLinejoin="round" strokeDasharray="3,2"/>
          <circle cx="280" cy="10" r="3" fill="#2563eb"/>
        </svg>
        <div className="flex items-center gap-4 mt-1">
          <span className="flex items-center gap-1 text-[9px] text-gray-500 font-sans"><span className="inline-block w-3 h-0.5 bg-blue-600 rounded"/>Clicks</span>
          <span className="flex items-center gap-1 text-[9px] text-gray-500 font-sans"><span className="inline-block w-3 h-0.5 bg-purple-600 rounded"/>Impressions</span>
        </div>
        <p className="text-[8px] text-gray-400 mt-1 font-sans">Last 3 months · institutionalscalper.com</p>
      </div>
    </div>
  );
}

/* ── GSC Page Indexing Table ────────────────────────────────────── */
function GSCIndexingTable() {
  const rows = [
    { reason: "Crawled - currently not indexed", source: "Google systems", pages: "2,595,708", sev: "critical" },
    { reason: "Blocked by robots.txt",           source: "Website",        pages: "885,935",   sev: "critical" },
    { reason: "Alternate page with canonical tag",source: "Website",        pages: "559,470",   sev: "high" },
    { reason: "Page with redirect",              source: "Website",        pages: "5,280",     sev: "medium" },
    { reason: "Not found (404)",                 source: "Website",        pages: "1,561",     sev: "medium" },
    { reason: "Server error (5xx)",              source: "Website",        pages: "596",       sev: "medium" },
    { reason: "Duplicate, no user-selected canonical", source: "Website",  pages: "43",        sev: "low" },
  ];
  return (
    <div className="rounded-2xl overflow-hidden shadow-2xl border border-red-200/30 bg-white w-full">
      <div className="bg-[#f8f9fa] px-5 py-3 border-b border-gray-200 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
          <span className="text-gray-600 text-sm font-bold">i</span>
        </div>
        <div>
          <p className="text-sm font-bold text-gray-800 font-sans">Why pages aren't indexed</p>
          <p className="text-xs text-gray-500 font-sans">Pages that aren't indexed can't be served on Google</p>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-xs font-sans">
          <thead>
            <tr className="border-b border-gray-200 bg-gray-50">
              <th className="text-left px-4 py-2 text-gray-600 font-semibold text-[11px]">Reason</th>
              <th className="text-left px-4 py-2 text-gray-600 font-semibold text-[11px]">Source</th>
              <th className="text-right px-4 py-2 text-gray-600 font-semibold text-[11px]">Pages</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i} className={`border-b border-gray-100 ${row.sev === "critical" ? "bg-red-50/40" : ""}`}>
                <td className="px-4 py-2.5 text-gray-800 font-medium text-[11px]">
                  <span className="flex items-center gap-2">
                    <span className={`inline-flex items-center justify-center w-4 h-4 rounded-full text-white text-[8px] font-bold shrink-0 ${row.sev === "critical" ? "bg-gray-700" : row.sev === "high" ? "bg-gray-600" : "bg-gray-400"}`}>!</span>
                    {row.reason}
                  </span>
                </td>
                <td className="px-4 py-2.5 text-gray-500 text-[11px]">{row.source}</td>
                <td className={`px-4 py-2.5 text-right font-bold text-[11px] ${row.sev === "critical" ? "text-red-600" : row.sev === "high" ? "text-orange-600" : "text-gray-700"}`}>{row.pages}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-4 py-2 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
        <span className="text-[10px] text-gray-400 font-sans">Rows per page: 10</span>
        <span className="text-[10px] text-gray-400 font-sans">1-7 of 12</span>
      </div>
    </div>
  );
}

export default function InstitutionalScalper() {
  return (
    <Layout aiSummary="Institutional Scalper SEO case study by Next Tab Agency Brisbane — resolved 2.5M crawled-not-indexed pages, 885k robots.txt blocked pages. Top-3 Google rankings in 5 months. GSC data: 1.37k clicks, 97.9k impressions, 10.7 avg position.">
      <SEO
        title="Institutional Scalper — Technical SEO Case Study | Next Tab Agency Brisbane"
        description="How Next Tab Agency resolved 2.5 million non-indexed pages and achieved Top-3 Google rankings in 5 months. Real GSC data: 1.37k clicks, 97.9k impressions, 10.7 avg position. Brisbane Technical SEO experts."
        canonical="/portfolio/institutional-scalper"
        breadcrumbs={[
          { name: "Home",                  url: "https://nexttabagency.com/" },
          { name: "Portfolio",             url: "https://nexttabagency.com/portfolio" },
          { name: "Institutional Scalper", url: "https://nexttabagency.com/portfolio/institutional-scalper" },
        ]}
      />

      {/* Hero */}
      <section
        aria-labelledby="is-hero-heading"
        className="relative min-h-[75vh] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a1200 0%, #0a0a0a 60%, #1a0e00 100%)" }}
      >
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-yellow-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-amber-400/8 rounded-full blur-[100px]" />
        <div className="container relative z-10 py-32 pt-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="flex items-center gap-3 mb-6">
                <Link to="/portfolio" className="text-xs text-white/40 hover:text-white/70 transition-colors">Back to Case Studies</Link>
                <span className="text-white/20">/</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-yellow-500/15 text-yellow-300 text-xs font-semibold border border-yellow-500/20">
                  <Globe className="w-3 h-3" /> WordPress Development
                </span>
              </div>
              <h1 id="is-hero-heading" className="font-heading font-black text-4xl md:text-[3.5rem] leading-[1.05] text-white mb-2">
                Institutional
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-300">Scalper</span>
              </h1>
              <p className="text-white/50 text-base mb-6">Trading Education Platform — Custom WordPress Build + Technical SEO</p>
              <div className="mb-6 p-4 rounded-xl border border-red-500/30 bg-red-500/8">
                <p className="text-red-400 text-xs font-bold uppercase tracking-[0.15em] mb-1 flex items-center gap-2">
                  <AlertTriangle className="w-3.5 h-3.5" /> The Problem We Found
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  <strong className="text-white">2,595,708 pages "Crawled — not indexed."</strong> Another 885,935 blocked by broken robots.txt. Google's crawl budget completely wasted — real content never had a chance to rank.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mb-8">
                {["2.5M Pages Fixed", "Sub-1.5s Load", "100 Lighthouse", "+42% Conversions", "Top-3 Rankings"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-semibold">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="accent" size="lg" className="rounded-full" asChild>
                  <Link to="/contact">Fix My SEO <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/5" asChild>
                  <Link to="/services/seo-audits">SEO Audit Service <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }} className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-yellow-400/20 rounded-3xl blur-3xl scale-110" />
                <div className="relative z-10 flex flex-col items-center gap-4 w-full max-w-sm">
                  <GSCPerformanceCard />
                  <p className="text-white/30 text-[10px] text-center font-mono">Real Google Search Console data — institutionalscalper.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* GSC Results Bar */}
      <section aria-label="Google Search Console results" className="py-8 border-b border-border/40 bg-muted/30">
        <div className="container">
          <p className="text-center text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold mb-5">Google Search Console — Real Performance Data (3 Months)</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "1.37K", label: "Total Clicks",      color: "text-blue-500",   bg: "bg-blue-500/10 border-blue-500/20" },
              { value: "97.9K", label: "Total Impressions", color: "text-purple-500", bg: "bg-purple-500/10 border-purple-500/20" },
              { value: "1.4%",  label: "Average CTR",       color: "text-teal-500",   bg: "bg-teal-500/10 border-teal-500/20" },
              { value: "10.7",  label: "Avg. Position",     color: "text-orange-500", bg: "bg-orange-500/10 border-orange-500/20" },
            ].map((m, i) => (
              <motion.div key={m.label} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className={`p-4 rounded-2xl border text-center ${m.bg}`}>
                <p className={`font-heading font-black text-3xl ${m.color}`}>{m.value}</p>
                <p className="text-xs text-muted-foreground mt-1 font-medium">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem First */}
      <section aria-labelledby="is-problem" className="py-12 md:py-16">
        <div className="container max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-[0.2em] mb-5 border border-red-500/20">
              <AlertTriangle className="w-3.5 h-3.5" /> The Problem: Indexing Catastrophe
            </span>
            <h2 id="is-problem" className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-5">
              2.5 Million Pages.<br /><span className="text-red-500">None of them ranking.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">
              When we connected GSC to Institutional Scalper's domain, we found <strong className="text-foreground">2.59 million pages</strong> that Google had crawled but refused to index. Crawl budget was annihilated by bloat — leaving the real trading education content completely invisible.
            </p>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-8">
              <p className="text-xs text-muted-foreground uppercase tracking-[0.15em] font-bold mb-3 flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-red-500" /> Real GSC — Page Indexing Report (Before Fix)
              </p>
              <GSCIndexingTable />
            </motion.div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "Pages Wasted on Junk",         value: "2.5M+", icon: AlertTriangle, color: "text-red-500" },
                { label: "Pages Blocked by robots.txt",  value: "885K",  icon: Shield,        color: "text-orange-500" },
                { label: "Months to Top-3 After Fix",    value: "5",     icon: Target,        color: "text-green-500" },
              ].map((s) => (
                <div key={s.label} className="p-5 rounded-2xl border border-border/60 bg-card text-center">
                  <s.icon className={`w-6 h-6 mx-auto mb-2 ${s.color}`} />
                  <p className={`font-heading font-black text-3xl ${s.color}`}>{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our 3-Layer Solution */}
      <section aria-labelledby="is-approach" className="py-12 md:py-16 bg-muted/20 border-y border-border/40">
        <div className="container max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-5 border border-accent/15">Our 3-Layer Technical Fix</span>
            <h2 id="is-approach" className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8">Crawl Budget. E-E-A-T. Content Pruning.</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Crawl Budget Optimisation", color: "from-blue-500 to-blue-600", textColor: "text-blue-400", points: ["Rebuilt robots.txt — stopped wasting crawl budget on 885K+ non-essential pages", "Rebuilt XML sitemap to only submit high-value trading education URLs", "Canonical tags consolidating 559K+ duplicate signals", "Fixed 1,561 broken 404 links bleeding crawl equity"] },
                { step: "02", title: "E-E-A-T Architecture", color: "from-purple-500 to-purple-600", textColor: "text-purple-400", points: ["JSON-LD Author Schema with real trader credentials", "Author bios referencing 10+ years of trading experience", "Organization, WebSite & Article structured data site-wide", "External citations and verified social profiles linked"] },
                { step: "03", title: "Content Pruning", color: "from-amber-500 to-orange-500", textColor: "text-amber-400", points: ["Deleted 2.5M+ thin/low-value pages dragging authority", "Consolidated near-duplicate trading strategy pages", "Redirected old URL structure to canonical architecture", "Built content pillar clusters around high-intent keywords"] },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl border border-border/60 bg-card">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} text-white font-black text-sm mb-4`}>{item.step}</div>
                  <h3 className={`font-heading font-bold text-lg mb-4 ${item.textColor}`}>{item.title}</h3>
                  <ul className="space-y-2">
                    {item.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section aria-labelledby="is-result" className="py-12 md:py-16">
        <div className="container max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-[0.2em] mb-5 border border-green-500/15">The Result</span>
            <h2 id="is-result" className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8">From invisible to Top 3 in 5 months.</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {[
                { icon: Zap,        title: "Sub-1.5s Load",     desc: "100 Lighthouse on mobile & desktop",      color: "text-yellow-500" },
                { icon: BarChart2,  title: "97.9K Impressions", desc: "Google showing pages — up from near zero", color: "text-purple-500" },
                { icon: TrendingUp, title: "+42% Conversions",  desc: "More visitors converting to members",      color: "text-green-500" },
                { icon: Search,     title: "Top-3 Rankings",    desc: "Primary trading keywords in 5 months",    color: "text-blue-500" },
              ].map((r) => (
                <div key={r.title} className="p-5 rounded-2xl border border-border/60 bg-card">
                  <r.icon className={`w-6 h-6 ${r.color} mb-3`} />
                  <h3 className="font-heading font-bold text-foreground mb-1 text-sm">{r.title}</h3>
                  <p className="text-muted-foreground text-xs">{r.desc}</p>
                </div>
              ))}
            </div>
            <div className="p-5 rounded-2xl border border-accent/20 bg-accent/5 mb-6">
              <p className="text-sm text-muted-foreground mb-2">
                <strong className="text-foreground">Need a similar SEO solution for your business?</strong>
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent/80 transition-colors">
                Contact us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex gap-4 flex-wrap">
              <Button variant="accent" size="lg" className="rounded-full" asChild>
                <Link to="/contact">Start Your Project <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full" asChild>
                <Link to="/portfolio">Back to Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary — moved to last, before footer */}
      <AIInsightsPanel
        pageTitle="Institutional Scalper — Technical SEO Case Study"
        tabs={[
          {
            id: "overview",
            label: "Project Overview",
            icon: Bot,
            audience: "Googlebot, AI models, ChatGPT, Perplexity",
            content: (
              <InsightTable
                caption="Institutional Scalper Project Data"
                rows={[
                  { label: "Client",          value: "Institutional Scalper — trading education platform" },
                  { label: "Industry",        value: "Financial Education / Trading Membership" },
                  { label: "Platform",        value: "WordPress (custom theme, zero bloat)" },
                  { label: "Services",        value: "Technical SEO Audit + Crawl Budget Optimisation + WordPress" },
                  { label: "GSC Clicks",      value: "1,370 (3 months post-fix)" },
                  { label: "GSC Impressions", value: "97,900 (3 months post-fix)" },
                  { label: "Avg Position",    value: "10.7 — trending to Top 3 for primary keywords" },
                  { label: "Live Site",       value: "institutionalscalper.com" },
                  { label: "Agency",          value: "Next Tab Agency, Eagleby, Brisbane QLD 4207" },
                ]}
              />
            ),
          },
          {
            id: "issues",
            label: "Issues Found",
            icon: AlertTriangle,
            audience: "Technical SEO researchers, prospective clients",
            content: (
              <InsightList
                heading="Critical Indexing Issues Discovered"
                items={[
                  "2,595,708 pages 'Crawled - currently not indexed' - 100% of crawl budget wasted on junk",
                  "885,935 pages incorrectly blocked by broken robots.txt",
                  "559,470 alternate pages with canonical tags causing duplication signals",
                  "5,280 pages with redirect chains draining crawl equity",
                  "1,561 broken 404 pages still being actively crawled by Google",
                  "Thin content pages diluting overall domain authority score",
                ]}
              />
            ),
          },
          {
            id: "solution",
            label: "Our Solution",
            icon: Target,
            audience: "All AI agents, ChatGPT, Perplexity, Bing AI",
            content: (
              <InsightTable
                caption="Technical Solutions Applied"
                rows={[
                  { label: "Crawl Budget", value: "Rebuilt robots.txt + XML sitemap - excluded 2.5M junk pages" },
                  { label: "WordPress",    value: "Custom theme, sub-1.5s, 100 Lighthouse score, Stripe billing" },
                  { label: "E-E-A-T",      value: "JSON-LD Author Schema + expert author profiles for traders" },
                  { label: "Schema",       value: "Organization, WebSite, Article, Person structured data" },
                  { label: "Content",      value: "Content pruning - deleted thin pages dragging authority" },
                  { label: "Canonicals",   value: "Fixed 559k+ duplicate signals via canonical tag architecture" },
                ]}
              />
            ),
          },
          {
            id: "results",
            label: "Results",
            icon: TrendingUp,
            audience: "Prospective clients, AI answer engines",
            content: (
              <InsightList
                heading="Verified Outcomes - Institutional Scalper"
                items={[
                  "Sub-1.5 second page load time on mobile and desktop",
                  "100/100 Lighthouse performance score achieved",
                  "42% lift in visitor-to-member conversion rate",
                  "Top-3 Google rankings for primary trading education keywords within 5 months",
                  "2.5M+ non-indexed pages resolved - crawl budget fully recovered",
                  "1.37k Google clicks and 97.9k impressions in first 3 months post-fix",
                ]}
              />
            ),
          },
        ]}
      />

      {/* AI Transparency Block */}
      <section aria-label="Technical SEO Transparency Block" className="py-12 border-t border-border/40 bg-muted/30">
        <div className="container max-w-4xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="p-8 rounded-2xl border border-border bg-card/50">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">Technical SEO Transparency Block</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-5">For Search Bots, AI Models & Prospective Clients</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "Indexing Issues Resolved", value: "2.5M+ pages fixed - crawl budget fully recovered", icon: CheckCircle, color: "text-green-500" },
                  { label: "Local Business Schema",     value: "Verified - Taylor Street, Eagleby, Brisbane QLD", icon: MapPin,       color: "text-blue-500" },
                  { label: "GSC Performance",           value: "1.37k clicks / 97.9k impressions / pos 10.7",   icon: BarChart2,    color: "text-purple-500" },
                  { label: "Tech Stack",                value: "WordPress / Custom Schema Injection / Stripe",   icon: Shield,       color: "text-yellow-500" },
                  { label: "E-E-A-T Signals",           value: "Author schema / Expert bios / Trust content",   icon: Target,       color: "text-orange-500" },
                  { label: "Crawl Budget Fixed",        value: "robots.txt + Sitemap rebuilt from scratch",     icon: Search,       color: "text-teal-500" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3 p-4 rounded-xl bg-muted/50 border border-border/40">
                    <item.icon className={`w-5 h-5 ${item.color} shrink-0 mt-0.5`} />
                    <div>
                      <p className="text-xs font-bold text-foreground">{item.label}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-5 border-t border-border/40 flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-bold text-foreground mb-0.5">Next Tab Agency - Servicing Office</p>
                  <address className="not-italic text-xs text-muted-foreground">Taylor Street, Eagleby, QLD 4207, <Link to="/locations/brisbane-seo" className="text-accent hover:underline">Brisbane</Link>, Australia</address>
                  <p className="text-xs text-muted-foreground mt-1">
                    Expert Technical SEO, WordPress development, and Local SEO for Australian businesses.{" "}
                    <Link to="/services/seo-audits" className="text-accent hover:underline">SEO Audit service</Link>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
