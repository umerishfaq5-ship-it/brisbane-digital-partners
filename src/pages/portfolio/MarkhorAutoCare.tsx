import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Globe, TrendingUp, CheckCircle, Search,
  BarChart2, Shield, Target, AlertTriangle, MapPin, Bot,
  Star, Users, Zap, Car,
} from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AIInsightsPanel, { InsightList, InsightTable } from "@/components/AIInsightsPanel";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

/* ── Mini Browser + Lighthouse Card ────────────────────────────── */
function LighthouseCard() {
  const scores = [
    { label: "Perf",   score: 95,  color: "#22c55e" },
    { label: "Access", score: 97,  color: "#22c55e" },
    { label: "B.P.",   score: 100, color: "#22c55e" },
    { label: "SEO",    score: 100, color: "#22c55e" },
  ];
  return (
    <div
      role="img"
      aria-label="Google Lighthouse scores for markhorautocare.com.au: Performance 95, Accessibility 97, Best Practices 100, SEO 100"
      className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full max-w-sm"
    >
      {/* Browser chrome */}
      <div className="bg-[#2a2a2a] px-3 py-2 flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="w-2 h-2 rounded-full bg-red-400" />
          <span className="w-2 h-2 rounded-full bg-yellow-400" />
          <span className="w-2 h-2 rounded-full bg-green-400" />
        </div>
        <div className="flex-1 bg-[#3a3a3a] rounded px-2.5 py-1 flex items-center gap-1.5">
          <svg className="w-3 h-3 text-green-400 shrink-0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>
          <span className="text-[9px] text-white/50 font-sans">markhorautocare.com.au</span>
        </div>
      </div>
      {/* Lighthouse scores */}
      <div className="bg-white px-4 py-3">
        <p className="text-[9px] text-gray-400 font-sans font-semibold uppercase tracking-wider mb-3">Lighthouse Scores</p>
        <div className="grid grid-cols-4 gap-2">
          {scores.map((sc) => (
            <div key={sc.label} className="flex flex-col items-center">
              <svg viewBox="0 0 36 36" className="w-12 h-12" aria-hidden="true">
                <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e5e7eb" strokeWidth="3"/>
                <circle
                  cx="18" cy="18" r="15.9" fill="none"
                  stroke={sc.color} strokeWidth="3"
                  strokeDasharray={`${sc.score} 100`}
                  strokeLinecap="round"
                  transform="rotate(-90 18 18)"
                />
                <text x="18" y="22" textAnchor="middle" fill="#111" fontSize="9" fontWeight="bold" fontFamily="sans-serif">{sc.score}</text>
              </svg>
              <span className="text-[8px] text-gray-500 font-sans font-semibold mt-0.5">{sc.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Metrics strip */}
      <div className="bg-gray-50 px-4 py-2 border-t border-gray-100 flex items-center justify-between">
        <span className="text-[9px] font-bold text-gray-600 font-sans">Load: <span className="text-green-600">1.6s</span></span>
        <span className="text-[9px] font-bold text-gray-600 font-sans">Mobile: <span className="text-blue-600">94</span></span>
        <span className="text-[9px] font-bold text-gray-600 font-sans"><span className="text-orange-500">WordPress</span></span>
      </div>
      <div className="bg-gray-50 px-4 pb-2">
        <p className="text-[7px] text-gray-400 font-sans">markhorautocare.com.au · Rocklea, Brisbane QLD</p>
      </div>
    </div>
  );
}

/* ── GBP Before/After ────────────────────────────────────────── */
function GBPComparisonCard() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
        <p className="text-xs font-bold text-red-500 uppercase tracking-[0.15em] mb-3 flex items-center gap-2">
          <AlertTriangle className="w-3.5 h-3.5" /> Before — No GBP, No Map Pack
        </p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p><strong className="text-red-400">Website:</strong> Outdated, not mobile-friendly</p>
          <p><strong className="text-red-400">GBP:</strong> Not set up — invisible on Google Maps</p>
          <p><strong className="text-red-400">Map Pack:</strong> Not appearing for Rocklea searches</p>
          <p><strong className="text-red-400">Reviews:</strong> No review strategy</p>
          <p><strong className="text-red-400">Page Speed:</strong> &gt;5s load time</p>
          <p><strong className="text-red-400">Enquiries:</strong> Mostly walk-ins only</p>
        </div>
      </div>
      <div className="rounded-2xl border border-green-500/30 bg-green-500/5 p-5">
        <p className="text-xs font-bold text-green-500 uppercase tracking-[0.15em] mb-3 flex items-center gap-2">
          <CheckCircle className="w-3.5 h-3.5" /> After — Map Pack + Modern Site
        </p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p><strong className="text-green-400">Website:</strong> Fast, mobile-first WordPress build</p>
          <p><strong className="text-green-400">GBP:</strong> Fully set up — verified, photos, Q&A</p>
          <p><strong className="text-green-400">Map Pack:</strong> <strong>Top-3 for Rocklea car detailing</strong></p>
          <p><strong className="text-green-400">Reviews:</strong> Automated request system active</p>
          <p><strong className="text-green-400">Page Speed:</strong> 1.6s · Lighthouse 95</p>
          <p><strong className="text-green-400">Enquiries:</strong> <strong>+85% contact form submissions</strong></p>
        </div>
      </div>
    </div>
  );
}

export default function MarkhorAutoCare() {
  return (
    <Layout aiSummary="Markhor Auto Care — car detailing and mechanical repairs, Rocklea Brisbane. Next Tab Agency built a WordPress website and set up Google Business Profile. Results: GBP Top-3 Map Pack, 1.6s load time, 95 Lighthouse, +85% enquiries. Phone: +61 411 092 204.">
      <SEO
        title="Markhor Auto Care — WordPress & GBP Case Study | Next Tab Agency Brisbane"
        description="How Next Tab Agency built a high-performance WordPress website and Google Business Profile for Markhor Auto Care, Rocklea Brisbane. Results: Map Pack Top-3, 95 Lighthouse score, +85% enquiries. Brisbane web development experts."
        canonical="/portfolio/markhor-auto-care"
        breadcrumbs={[
          { name: "Home",             url: "https://nexttabagency.com/" },
          { name: "Case Studies",     url: "https://nexttabagency.com/portfolio" },
          { name: "Markhor Auto Care",url: "https://nexttabagency.com/portfolio/markhor-auto-care" },
        ]}
      />

      {/* Hero */}
      <section
        aria-labelledby="mac-hero-heading"
        className="relative min-h-[75vh] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0a1628 0%, #0a0a0a 60%, #1a0a0a 100%)" }}
      >
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-red-500/8 rounded-full blur-[100px]" />

        <div className="container relative z-10 py-32 pt-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="flex items-center gap-3 mb-6">
                <Link to="/portfolio" className="text-xs text-white/40 hover:text-white/70 transition-colors">Back to Case Studies</Link>
                <span className="text-white/20">/</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 text-xs font-semibold border border-blue-500/20">
                  <Globe className="w-3 h-3" /> WordPress + GBP
                </span>
              </div>

              <h1 id="mac-hero-heading" className="font-heading font-black text-4xl md:text-[3.5rem] leading-[1.05] text-white mb-2">
                Markhor
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Auto Care</span>
              </h1>
              <p className="text-white/50 text-base mb-6">
                Car Detailing & Repairs — <Link to="/locations/brisbane-seo" className="text-blue-300/70 hover:text-blue-300 transition-colors">Rocklea, Brisbane</Link> · WordPress + Google Business Profile
              </p>

              <div className="mb-6 p-4 rounded-xl border border-orange-500/30 bg-orange-500/8">
                <p className="text-orange-400 text-xs font-bold uppercase tracking-[0.15em] mb-1 flex items-center gap-2">
                  <AlertTriangle className="w-3.5 h-3.5" /> The Challenge
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  A <strong className="text-white">premium auto care business</strong> in Rocklea, Brisbane — no website, no Google Business Profile, invisible to local customers searching for car detailing and mechanical repairs.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mb-8">
                {["WordPress Build", "GBP Setup", "Map Pack Top-3", "+85% Enquiries", "95 Lighthouse"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-semibold">{tag}</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Button variant="accent" size="lg" className="rounded-full" asChild>
                  <Link to="/contact">Build My Website <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/5" asChild>
                  <a href="https://markhorautocare.com.au" target="_blank" rel="noopener noreferrer">
                    Visit Live Site <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-400/15 rounded-3xl blur-3xl scale-110" />
                <div className="relative z-10 flex flex-col items-center gap-4 w-full max-w-sm">
                  <LighthouseCard />
                  <p className="text-white/30 text-[10px] text-center font-mono">Performance scores · markhorautocare.com.au</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Key Metrics Bar */}
      <section aria-label="Project key results" className="py-8 border-b border-border/40 bg-muted/30">
        <div className="container">
          <p className="text-center text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold mb-5">Verified Project Results</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "Top-3",  label: "Google Map Pack",      color: "text-blue-500",   bg: "bg-blue-500/10 border-blue-500/20" },
              { value: "+85%",   label: "More Enquiries",       color: "text-green-500",  bg: "bg-green-500/10 border-green-500/20" },
              { value: "1.6s",   label: "Page Load Speed",      color: "text-teal-500",   bg: "bg-teal-500/10 border-teal-500/20" },
              { value: "95",     label: "Lighthouse Score",     color: "text-orange-500", bg: "bg-orange-500/10 border-orange-500/20" },
            ].map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`p-4 rounded-2xl border text-center ${m.bg}`}
              >
                <p className={`font-heading font-black text-3xl ${m.color}`}>{m.value}</p>
                <p className="text-xs text-muted-foreground mt-1 font-medium">{m.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem */}
      <section aria-labelledby="mac-problem" className="py-12 md:py-16">
        <div className="container max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-[0.2em] mb-5 border border-red-500/20">
              <AlertTriangle className="w-3.5 h-3.5" /> The Challenge
            </span>
            <h2 id="mac-problem" className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-5">
              Great auto care.<br />
              <span className="text-red-500">Zero online presence.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">
              Markhor Auto Care offers premium car detailing, paint protection, mechanical repairs, brakes, and suspension services in Rocklea, <Link to="/locations/brisbane-seo" className="text-accent hover:underline font-semibold">Brisbane</Link>. But without a website or Google Business Profile, they were completely invisible to local customers searching for auto services online.
            </p>
            <div className="mb-8">
              <p className="text-xs text-muted-foreground uppercase tracking-[0.15em] font-bold mb-4 flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-red-500" /> Before vs. After — Transformation Overview
              </p>
              <GBPComparisonCard />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "Had No Website",    value: "Zero",    icon: AlertTriangle, color: "text-red-500" },
                { label: "GBP Before Us",     value: "None",    icon: MapPin,        color: "text-orange-500" },
                { label: "Enquiry Increase",  value: "+85%",    icon: TrendingUp,    color: "text-green-500" },
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

      {/* Our Solution */}
      <section aria-labelledby="mac-solution" className="py-12 md:py-16 bg-muted/20 border-y border-border/40">
        <div className="container max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-5 border border-accent/15">
              Our 3-Layer Strategy
            </span>
            <h2 id="mac-solution" className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8">
              WordPress Build. GBP Setup. Local Domination.
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  step: "01",
                  title: "WordPress Website",
                  color: "from-blue-500 to-blue-600",
                  textColor: "text-blue-400",
                  icon: Globe,
                  points: [
                    "Mobile-first WordPress build — fast on all devices",
                    "Dedicated service pages: detailing, paint protection, mechanical, brakes",
                    "Online booking/enquiry form integrated with email notifications",
                    "WooCommerce for gift vouchers and service packages",
                    "Core Web Vitals optimised — 1.6s load, 95 Lighthouse performance",
                    "AutoCare & LocalBusiness structured data (JSON-LD)",
                  ],
                },
                {
                  step: "02",
                  title: "Google Business Profile",
                  color: "from-green-500 to-emerald-600",
                  textColor: "text-green-400",
                  icon: MapPin,
                  points: [
                    "Created and verified GBP listing for Rocklea, Brisbane",
                    "Added 40+ professional photos — interior, exterior, before/after",
                    "Set up all service categories, attributes, and Q&A",
                    "NAP (Name, Address, Phone) unified across 30+ local directories",
                    "Automated customer review request system — 2+ reviews/week",
                    "Owner response templates — every review answered within 24h",
                  ],
                },
                {
                  step: "03",
                  title: "Local SEO & Schema",
                  color: "from-purple-500 to-purple-600",
                  textColor: "text-purple-400",
                  icon: Search,
                  points: [
                    "Geo-targeted content: 'car detailing Rocklea,' 'mechanic Rocklea Brisbane'",
                    "LocalBusiness + AutoRepair + Service schema markup",
                    "AggregateRating schema for rich snippet star ratings",
                    "Internal linking: service pages → location → booking",
                    "Citation building across Yellow Pages, True Local, Yelp, hipages",
                    "Google Maps embed on contact page for direct navigation",
                  ],
                },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl border border-border/60 bg-card">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} text-white font-black text-sm mb-4`}>
                    {item.step}
                  </div>
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

            {/* Tech Stack */}
            <div className="p-5 rounded-2xl border border-blue-500/20 bg-blue-500/5">
              <p className="text-blue-400 text-xs font-bold uppercase tracking-[0.15em] mb-3">Tech Stack</p>
              <div className="flex flex-wrap gap-2">
                {["WordPress", "WooCommerce", "Custom Theme", "LocalBusiness Schema", "AutoRepair Schema", "AggregateRating", "Google Business Profile API", "Core Web Vitals"].map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold">{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section aria-labelledby="mac-result" className="py-12 md:py-16">
        <div className="container max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-bold uppercase tracking-[0.2em] mb-5 border border-green-500/15">
              The Result
            </span>
            <h2 id="mac-result" className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8">
              Map Pack Top-3. 85% more enquiries. In months.
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {[
                { icon: MapPin,     title: "Map Pack Top-3",  desc: "Google Maps Top-3 for Rocklea car detailing & repairs",    color: "text-blue-500" },
                { icon: TrendingUp, title: "+85% Enquiries",  desc: "Contact form submissions up 85% month-on-month",           color: "text-green-500" },
                { icon: Zap,        title: "1.6s Load Time",  desc: "95 Lighthouse performance — fast on mobile and desktop",   color: "text-yellow-500" },
                { icon: Star,       title: "4.9 GBP Rating",  desc: "Verified Google reviews — auto-request system in place",  color: "text-orange-500" },
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
                <strong className="text-foreground">Need a similar WordPress & SEO solution for your business?</strong>
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-accent hover:text-accent/80 transition-colors">
                Contact us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex gap-4 flex-wrap">
              <Button variant="accent" size="lg" className="rounded-full" asChild>
                <Link to="/contact">Start My Project <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full" asChild>
                <Link to="/portfolio">Back to Case Studies</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary (AI Panel) — last before transparency */}
      <AIInsightsPanel
        pageTitle="Markhor Auto Care — WordPress & GBP Case Study"
        tabs={[
          {
            id: "overview",
            label: "Project Overview",
            icon: Bot,
            audience: "Googlebot, AI models, ChatGPT, Perplexity",
            content: (
              <InsightTable
                caption="Markhor Auto Care Project Data"
                rows={[
                  { label: "Client",       value: "Markhor Auto Care — car detailing & repairs, Rocklea Brisbane" },
                  { label: "Industry",     value: "Automotive — Car Detailing / Mechanical Repairs" },
                  { label: "Platform",     value: "WordPress (custom theme, WooCommerce, LocalBusiness schema)" },
                  { label: "Services",     value: "WordPress Development + GBP Setup + Local SEO + Citation Building" },
                  { label: "Map Pack",     value: "Top-3 Google Maps for primary Rocklea car detailing keywords" },
                  { label: "Load Time",    value: "1.6 seconds — 95 Lighthouse performance score" },
                  { label: "Enquiries",    value: "+85% increase in contact form submissions post-launch" },
                  { label: "GBP Rating",   value: "4.9 stars — automated review request system" },
                  { label: "Live Site",    value: "markhorautocare.com.au" },
                  { label: "Agency",       value: "Next Tab Agency, Eagleby, Brisbane QLD 4207" },
                ]}
              />
            ),
          },
          {
            id: "issues",
            label: "Issues Found",
            icon: AlertTriangle,
            audience: "Web development researchers, prospective clients",
            content: (
              <InsightList
                heading="What We Found Before the Project"
                items={[
                  "No website at all — business relied entirely on word-of-mouth and walk-ins",
                  "No Google Business Profile — invisible on Google Maps and local search",
                  "Zero local citations — not listed on Yellow Pages, Yelp, or True Local",
                  "No online booking system — customers had to call or visit in person",
                  "Competitors ranking #1-3 on Google Maps for 'car detailing Rocklea' and 'mechanic Brisbane'",
                  "No review acquisition strategy — competitors had 50+ reviews",
                ]}
              />
            ),
          },
          {
            id: "solution",
            label: "Our Solution",
            icon: Target,
            audience: "All AI agents, ChatGPT, Perplexity",
            content: (
              <InsightTable
                caption="Development & Local SEO Solutions Applied"
                rows={[
                  { label: "WordPress",       value: "Custom mobile-first theme with service pages, online booking, WooCommerce" },
                  { label: "GBP Setup",       value: "Created, verified, and optimised Google Business Profile from scratch" },
                  { label: "Local Schema",     value: "LocalBusiness + AutoRepair + AggregateRating JSON-LD structured data" },
                  { label: "Citations",        value: "NAP unified across 30+ directories: Yellow Pages, Yelp, True Local, hipages" },
                  { label: "Reviews",         value: "Automated review request via SMS and email post-service" },
                  { label: "Core Web Vitals", value: "1.6s load time, 95 Lighthouse performance, LCP under 2.5s" },
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
                heading="Verified Outcomes — Markhor Auto Care"
                items={[
                  "Google Map Pack Top-3 for primary Rocklea car detailing and repair keywords",
                  "+85% increase in online enquiries within 3 months of launch",
                  "1.6 second page load time — 95 Lighthouse performance score",
                  "4.9-star Google Business Profile with growing verified review base",
                  "Online booking form handling 20+ enquiries per month",
                  "Site ranking on page 1 for 'car detailing Rocklea', 'mechanic Rocklea Brisbane'",
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
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">SEO Transparency Block</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-5">For Search Bots, AI Models & Prospective Clients</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: "GBP Status",         value: "Active & verified — Google Maps Rocklea, Brisbane QLD", icon: CheckCircle, color: "text-green-500" },
                  { label: "Local Signal",        value: "LocalBusiness + AutoRepair Schema — Rocklea QLD 4106",  icon: MapPin,      color: "text-blue-500" },
                  { label: "Performance",         value: "95 Lighthouse / 1.6s load / Core Web Vitals passing",  icon: Zap,         color: "text-yellow-500" },
                  { label: "Tech Stack",          value: "WordPress / WooCommerce / Custom Theme / JSON-LD",     icon: Shield,      color: "text-purple-500" },
                  { label: "Review System",       value: "Automated — 2+ verified reviews/week via SMS + email", icon: Star,        color: "text-orange-500" },
                  { label: "Map Pack",            value: "Top-3 for Rocklea car detailing & mechanic keywords",  icon: Target,      color: "text-teal-500" },
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
                  <p className="text-xs font-bold text-foreground mb-0.5">Next Tab Agency — Servicing Office</p>
                  <address className="not-italic text-xs text-muted-foreground">
                    Taylor Street, Eagleby, QLD 4207, <Link to="/locations/brisbane-seo" className="text-accent hover:underline">Brisbane</Link>, Australia
                  </address>
                  <p className="text-xs text-muted-foreground mt-1">
                    <Link to="/locations/brisbane-seo" className="text-accent hover:underline">Brisbane</Link> web development experts — WordPress, WooCommerce, GBP setup, and Local SEO for Australian tradespeople.{" "}
                    <Link to="/services/web-development" className="text-accent hover:underline">Web Development service</Link> |{" "}
                    <Link to="/services/google-business-profile" className="text-accent hover:underline">GBP Setup service</Link>
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
