import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, TrendingUp,
  MapPin, AlertTriangle, CheckCircle, BarChart2, Users, Star, Shield, Bot, Target,
} from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AIInsightsPanel, { InsightList, InsightTable } from "@/components/AIInsightsPanel";
import { Button } from "@/components/ui/button";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

/* ── CSS GSC Performance Card ────────────────────────────────────── */
function GSCHeavenPerformanceCard() {
  return (
    <div
      role="img"
      aria-label="Google Search Console - Heaven on Mainstreet: 49.3k clicks, 5.86M impressions, 0.8% CTR, 8.5 average position. Next Tab Agency Brisbane."
      className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full max-w-sm"
    >
      <div className="bg-white px-4 py-2 flex items-center justify-between border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-blue-500" />
          <span className="text-[11px] font-semibold text-gray-600 font-sans">Search Console</span>
        </div>
        <div className="flex items-center gap-2 text-[10px] text-gray-400 font-sans">
          <span className="px-2 py-0.5 rounded border border-gray-300 text-gray-600">3 months</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-0 bg-white">
        <div className="p-3 border-r border-b border-gray-100 bg-blue-600">
          <p className="text-[9px] text-blue-100 uppercase tracking-widest font-sans font-bold mb-1">Total clicks</p>
          <p className="text-2xl font-black text-white font-sans leading-none">49.3K</p>
        </div>
        <div className="p-3 border-b border-gray-100 bg-purple-600">
          <p className="text-[9px] text-purple-100 uppercase tracking-widest font-sans font-bold mb-1">Total impressions</p>
          <p className="text-2xl font-black text-white font-sans leading-none">5.86M</p>
        </div>
        <div className="p-3 border-r border-gray-100 bg-teal-600">
          <p className="text-[9px] text-teal-100 uppercase tracking-widest font-sans font-bold mb-1">Average CTR</p>
          <p className="text-2xl font-black text-white font-sans leading-none">0.8%</p>
        </div>
        <div className="p-3 bg-orange-500">
          <p className="text-[9px] text-orange-100 uppercase tracking-widest font-sans font-bold mb-1">Average position</p>
          <p className="text-2xl font-black text-white font-sans leading-none">8.5</p>
        </div>
      </div>
      <div className="bg-white px-4 pt-3 pb-4 border-t border-gray-100">
        <svg viewBox="0 0 280 70" className="w-full h-16" aria-hidden="true">
          <defs>
            <linearGradient id="blueGrad3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2563eb"/>
              <stop offset="100%" stopColor="transparent"/>
            </linearGradient>
          </defs>
          <line x1="0" y1="15" x2="280" y2="15" stroke="#e5e7eb" strokeWidth="0.5"/>
          <line x1="0" y1="30" x2="280" y2="30" stroke="#e5e7eb" strokeWidth="0.5"/>
          <line x1="0" y1="45" x2="280" y2="45" stroke="#e5e7eb" strokeWidth="0.5"/>
          <line x1="0" y1="60" x2="280" y2="60" stroke="#e5e7eb" strokeWidth="0.5"/>
          <polyline points="0,55 25,52 50,50 75,46 100,42 120,38 140,35 155,28 160,12 165,20 175,25 200,22 220,19 250,17 280,16" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinejoin="round"/>
          <polygon points="0,55 25,52 50,50 75,46 100,42 120,38 140,35 155,28 160,12 165,20 175,25 200,22 220,19 250,17 280,16 280,65 0,65" fill="url(#blueGrad3)" opacity="0.15"/>
          <polyline points="0,48 25,46 50,44 75,42 100,38 120,36 140,34 155,33 160,40 165,36 175,34 200,32 220,30 250,28 280,27" fill="none" stroke="#f97316" strokeWidth="1.5" strokeLinejoin="round"/>
          <polyline points="0,62 25,60 50,58 75,56 100,54 120,52 140,50 155,46 160,44 165,47 175,45 200,43 220,42 250,40 280,39" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinejoin="round" strokeDasharray="3,2"/>
          <line x1="160" y1="12" x2="160" y2="65" stroke="#2563eb" strokeWidth="0.75" strokeDasharray="2,2" opacity="0.5"/>
          <circle cx="160" cy="12" r="3.5" fill="#2563eb"/>
          <rect x="162" y="4" width="34" height="11" rx="3" fill="#1d4ed8"/>
          <text x="179" y="12.5" textAnchor="middle" fill="white" fontSize="6" fontFamily="sans-serif" fontWeight="bold">PEAK</text>
        </svg>
        <div className="flex items-center flex-wrap gap-3 mt-1">
          <span className="flex items-center gap-1 text-[9px] text-gray-500 font-sans"><span className="inline-block w-3 h-0.5 bg-blue-600 rounded"/>Impressions</span>
          <span className="flex items-center gap-1 text-[9px] text-gray-500 font-sans"><span className="inline-block w-3 h-0.5 bg-orange-500 rounded"/>Avg Position</span>
          <span className="flex items-center gap-1 text-[9px] text-gray-500 font-sans"><span className="inline-block w-3 h-0.5 bg-emerald-500 rounded"/>CTR</span>
        </div>
        <p className="text-[8px] text-gray-400 mt-1 font-sans">3 months · heavenonmainstreet.com · Brisbane, QLD</p>
      </div>
    </div>
  );
}

/* ── NAP Before/After ─────────────────────────────────────────────── */
function NAPComparisonCard() {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <div className="rounded-2xl border border-red-500/30 bg-red-500/5 p-5">
        <p className="text-xs font-bold text-red-500 uppercase tracking-[0.15em] mb-3 flex items-center gap-2">
          <AlertTriangle className="w-3.5 h-3.5" /> Before — GBP Suspended
        </p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p><strong className="text-red-400">Name:</strong> "Heaven on Main Street" (wrong)</p>
          <p><strong className="text-red-400">Address:</strong> 3 different addresses across 50+ citations</p>
          <p><strong className="text-red-400">Phone:</strong> 2 different numbers indexed by Google</p>
          <p><strong className="text-red-400">GBP Status:</strong> <span className="text-red-500 font-bold">SUSPENDED</span></p>
          <p><strong className="text-red-400">Map Pack:</strong> Not appearing</p>
          <p><strong className="text-red-400">Reviews:</strong> 3 total, no response strategy</p>
        </div>
      </div>
      <div className="rounded-2xl border border-green-500/30 bg-green-500/5 p-5">
        <p className="text-xs font-bold text-green-500 uppercase tracking-[0.15em] mb-3 flex items-center gap-2">
          <CheckCircle className="w-3.5 h-3.5" /> After — 3 Months Later
        </p>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p><strong className="text-green-400">Name:</strong> "Heaven on Mainstreet" (consistent)</p>
          <p><strong className="text-green-400">Address:</strong> Single canonical — 50+ citations cleaned</p>
          <p><strong className="text-green-400">Phone:</strong> One verified number, click-to-call</p>
          <p><strong className="text-green-400">GBP Status:</strong> <span className="text-green-500 font-bold">ACTIVE & VERIFIED</span></p>
          <p><strong className="text-green-400">Map Pack:</strong> <strong className="text-green-400">#1 Position</strong></p>
          <p><strong className="text-green-400">Reviews:</strong> 1 review/week automated system</p>
        </div>
      </div>
    </div>
  );
}

export default function HeavenOnMainstreet() {
  return (
    <Layout aiSummary="Heaven on Mainstreet Local SEO - GBP suspended due to NAP inconsistency, restored by Next Tab Agency Brisbane. #1 Google Map Pack. GSC: 49.3k clicks, 5.86M impressions, 0.8% CTR, 8.5 avg position. WordPress rebuild, +62% bookings, bounce 74% to 28%.">
      <SEO
        title="Heaven on Mainstreet — Local SEO & Map Pack Case Study | Next Tab Agency Brisbane"
        description="How Next Tab Agency restored a suspended Google Business Profile, cleaned 50+ NAP citations, and achieved #1 Google Map Pack. Real GSC: 49.3k clicks, 5.86M impressions, 0.8% CTR. Brisbane Local SEO experts."
        canonical="/portfolio/heaven-on-mainstreet"
        breadcrumbs={[
          { name: "Home",                 url: "https://nexttabagency.com/" },
          { name: "Portfolio",            url: "https://nexttabagency.com/portfolio" },
          { name: "Heaven on Mainstreet", url: "https://nexttabagency.com/portfolio/heaven-on-mainstreet" },
        ]}
      />

      {/* Hero */}
      <section
        aria-labelledby="hom-hero-heading"
        className="relative min-h-[75vh] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1a1208 0%, #0a0a0a 60%, #2a1a08 100%)" }}
      >
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-yellow-400/6 rounded-full blur-[100px]" />
        <div className="container relative z-10 py-32 pt-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="flex items-center gap-3 mb-6">
                <Link to="/portfolio" className="text-xs text-white/40 hover:text-white/70 transition-colors">Back to Case Studies</Link>
                <span className="text-white/20">/</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 text-xs font-semibold border border-amber-500/20">
                  <MapPin className="w-3 h-3" /> Local SEO + Map Pack
                </span>
              </div>
              <h1 id="hom-hero-heading" className="font-heading font-black text-4xl md:text-[3.5rem] leading-[1.05] text-white mb-2">
                Heaven on
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-yellow-300">Mainstreet</span>
              </h1>
              <p className="text-white/50 text-base mb-6">Local SEO + GBP Restoration + WordPress — Brisbane</p>
              <div className="mb-6 p-4 rounded-xl border border-red-500/30 bg-red-500/8">
                <p className="text-red-400 text-xs font-bold uppercase tracking-[0.15em] mb-1 flex items-center gap-2">
                  <AlertTriangle className="w-3.5 h-3.5" /> The Crisis We Found
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  The Google Business Profile was <strong className="text-white">SUSPENDED</strong> — Name, Address, Phone was different across 50+ local citations. Despite great products, completely invisible in Brisbane local search.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 mb-8">
                {["GBP Restored", "5.86M Impressions", "Map Pack #1", "62% More Bookings", "WordPress"].map((tag) => (
                  <span key={tag} className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-semibold">{tag}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Button variant="accent" size="lg" className="rounded-full" asChild>
                  <Link to="/contact">Get Map Pack #1 <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full border-white/20 text-white hover:bg-white/5" asChild>
                  <Link to="/services/local-seo">Local SEO Service <ArrowRight className="w-4 h-4 ml-2" /></Link>
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 40, scale: 0.95 }} animate={{ opacity: 1, x: 0, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-amber-400/15 rounded-3xl blur-3xl scale-110" />
                <div className="relative z-10 flex flex-col items-center gap-3 w-full max-w-sm">
                  <GSCHeavenPerformanceCard />
                  <p className="text-white/30 text-[10px] text-center font-mono">Real Google Search Console data — heavenonmainstreet.com</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* GSC Metrics Bar */}
      <section aria-label="Real GSC performance data" className="py-8 border-b border-border/40 bg-muted/30">
        <div className="container">
          <p className="text-center text-xs text-muted-foreground uppercase tracking-[0.2em] font-bold mb-5">Google Search Console — 3 Month Performance (Real Data)</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: "49.3K", label: "Total Clicks",      color: "text-blue-500",   bg: "bg-blue-500/10 border-blue-500/20" },
              { value: "5.86M", label: "Total Impressions", color: "text-purple-500", bg: "bg-purple-500/10 border-purple-500/20" },
              { value: "0.8%",  label: "Average CTR",       color: "text-teal-500",   bg: "bg-teal-500/10 border-teal-500/20" },
              { value: "8.5",   label: "Avg. Position",     color: "text-orange-500", bg: "bg-orange-500/10 border-orange-500/20" },
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
      <section aria-labelledby="hom-problem" className="py-12 md:py-16">
        <div className="container max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 text-red-500 text-xs font-bold uppercase tracking-[0.2em] mb-5 border border-red-500/20">
              <AlertTriangle className="w-3.5 h-3.5" /> The Problem: GBP Suspended
            </span>
            <h2 id="hom-problem" className="font-heading font-bold text-3xl md:text-5xl text-foreground mb-5">
              Great products.<br /><span className="text-red-500">Zero local visibility.</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 max-w-3xl">
              Despite having excellent products and genuine local demand, Heaven on Mainstreet was completely invisible in Brisbane local search. The root cause? Their <strong className="text-foreground">Google Business Profile was suspended</strong> — Google flagged NAP inconsistency across 50+ local directory listings. Google doesn't rank what it can't trust.
            </p>
            <div className="mb-8">
              <p className="text-xs text-muted-foreground uppercase tracking-[0.15em] font-bold mb-4 flex items-center gap-2">
                <BarChart2 className="w-4 h-4 text-red-500" /> NAP Inconsistency — Before vs. After
              </p>
              <NAPComparisonCard />
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { label: "Local Citations Cleaned", value: "50+",     icon: CheckCircle, color: "text-green-500" },
                { label: "GBP Suspension Fixed In", value: "3 Weeks", icon: Shield,      color: "text-blue-500" },
                { label: "Map Pack Position",        value: "#1",      icon: MapPin,      color: "text-amber-500" },
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

      {/* 3-Layer Solution */}
      <section aria-labelledby="hom-approach" className="py-12 md:py-16 bg-muted/20 border-y border-border/40">
        <div className="container max-w-5xl">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-5 border border-accent/15">Our Local SEO Strategy</span>
            <h2 id="hom-approach" className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-8">GBP Restoration. Geo-Content. Review Engine.</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {[
                { step: "01", title: "GBP Restoration & NAP Unification", color: "from-blue-500 to-blue-600", textColor: "text-blue-400", points: ["Appealed GBP suspension with verification evidence", "Audited and cleaned 50+ local citation directories", "Unified Name, Address, Phone across every listing", "Click-to-call, updated hours, photos, attributes"] },
                { step: "02", title: "Geo-Targeted Content", color: "from-amber-500 to-orange-500", textColor: "text-amber-400", points: ["Brisbane-specific landing content — 'Skincare for Brisbane Humidity'", "Optimised for: 'skincare Brisbane,' 'local beauty Brisbane'", "Suburb-level content for Eagleby, Logan, Gold Coast", "Internal linking product to local service pages"] },
                { step: "03", title: "Review Acquisition Loop", color: "from-green-500 to-emerald-600", textColor: "text-green-400", points: ["Automated post-purchase review requests via email + SMS", "Minimum 1 verified local customer review per week", "Owner response templates — every review answered in 24h", "Review schema markup on WordPress for star ratings"] },
              ].map((item) => (
                <div key={item.title} className="p-6 rounded-2xl border border-border/60 bg-card">
                  <div className={`inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} text-white font-black text-sm mb-4`}>{item.step}</div>
                  <h3 className={`font-heading font-bold text-base mb-4 ${item.textColor}`}>{item.title}</h3>
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
            <div className="p-5 rounded-2xl border border-amber-500/20 bg-amber-500/5">
              <p className="text-amber-400 text-xs font-bold uppercase tracking-[0.15em] mb-2">Why WordPress for Scalability</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                WordPress was selected for its <strong className="text-foreground">unmatched content management scalability</strong> — enabling the client to add product pages, seasonal promotions, and blog content independently without developer costs.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section aria-labelledby="hom-result" className="py-12 md:py-16 surface-teal relative overflow-hidden">
        <div className="absolute inset-0 pattern-lines opacity-20" />
        <div className="container max-w-5xl relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-[0.2em] mb-5 border border-white/15">The Result</span>
            <h2 id="hom-result" className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-7">5.86 Million impressions. Map Pack #1. 62% more bookings.</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
              {[
                { icon: TrendingUp, title: "+62% Bookings",     desc: "Direct online bookings Q1 post-launch", color: "text-green-400" },
                { icon: MapPin,     title: "Map Pack #1",       desc: "Top position for Brisbane local queries", color: "text-amber-400" },
                { icon: Users,      title: "74% to 28%",        desc: "Mobile bounce rate after rebuild", color: "text-blue-400" },
                { icon: Star,       title: "5.86M Impressions", desc: "Google showing site across 3 months", color: "text-purple-400" },
              ].map((r) => (
                <div key={r.title} className="p-5 rounded-2xl border border-white/10 bg-white/5">
                  <r.icon className={`w-6 h-6 ${r.color} mb-3`} />
                  <h3 className="font-heading font-bold text-primary-foreground mb-1 text-sm">{r.title}</h3>
                  <p className="text-primary-foreground/60 text-xs">{r.desc}</p>
                </div>
              ))}
            </div>
            <div className="p-5 rounded-2xl border border-white/15 bg-white/5 mb-6">
              <p className="text-primary-foreground/80 text-sm mb-2">
                <strong className="text-white">Need a similar SEO & WordPress solution for your business?</strong>
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-amber-400 hover:text-amber-300 transition-colors">
                Contact us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button variant="hero-primary" size="lg" className="rounded-full" asChild>
                <Link to="/contact">Start Your Local SEO <ArrowRight className="w-4 h-4 ml-2" /></Link>
              </Button>
              <Button variant="ghost" size="lg" className="rounded-full text-white border-white/20 hover:bg-white/10" asChild>
                <Link to="/portfolio">Back to Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary — at the bottom before transparency block */}
      <AIInsightsPanel
        pageTitle="Heaven on Mainstreet — Local SEO Case Study"
        tabs={[
          {
            id: "overview",
            label: "Project Overview",
            icon: Bot,
            audience: "Googlebot, AI models, ChatGPT, Perplexity",
            content: (
              <InsightTable
                caption="Heaven on Mainstreet Project Data"
                rows={[
                  { label: "Client",          value: "Heaven on Mainstreet — skincare/beauty/hospitality, Brisbane" },
                  { label: "Industry",        value: "Local Business — Skincare / Beauty / B&B" },
                  { label: "Platform",        value: "WordPress (custom theme, WooCommerce, LodgingBusiness schema)" },
                  { label: "Services",        value: "Local SEO + GBP Restoration + Citation Cleanup + WordPress" },
                  { label: "GSC Clicks",      value: "49,300 (3 months)" },
                  { label: "GSC Impressions", value: "5,860,000 (3 months)" },
                  { label: "Avg CTR",         value: "0.8%" },
                  { label: "Avg Position",    value: "8.5 (trending to Map Pack #1)" },
                  { label: "Map Pack",        value: "#1 for primary Brisbane local keywords" },
                  { label: "Agency",          value: "Next Tab Agency, Eagleby, Brisbane QLD 4207" },
                ]}
              />
            ),
          },
          {
            id: "issues",
            label: "Issues Found",
            icon: AlertTriangle,
            audience: "Local SEO researchers, prospective clients",
            content: (
              <InsightList
                heading="Critical Local SEO Issues Discovered"
                items={[
                  "Google Business Profile SUSPENDED - NAP (Name, Address, Phone) inconsistency",
                  "Name listed as 'Heaven on Main Street' (wrong) on 50+ citation directories",
                  "3 different phone numbers indexed across Google's local data set",
                  "2 different addresses in local citations - Google couldn't trust the location",
                  "Zero review response strategy - declining local trust signals",
                  "Website invisible on mobile - 74% mobile bounce rate pre-rebuild",
                  "No LodgingBusiness or AggregateRating schema - no rich results eligibility",
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
                caption="Local SEO Solutions Applied"
                rows={[
                  { label: "GBP Restoration",  value: "Appealed suspension, verified address, fixed all 50+ citation NAPs" },
                  { label: "Citation Cleanup",  value: "Unified NAP across Google Maps, Yelp, TripAdvisor, Yellow Pages, 50+ directories" },
                  { label: "Review System",     value: "Automated review request loop - 1 verified review/week minimum" },
                  { label: "Geo Content",       value: "Brisbane-specific content - 'Skincare for Brisbane Humidity' style articles" },
                  { label: "WordPress",         value: "Rebuilt for scalability - client controls content independently" },
                  { label: "Schema",            value: "LodgingBusiness + AggregateRating + LocalBusiness JSON-LD" },
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
                heading="Verified Outcomes - Heaven on Mainstreet"
                items={[
                  "#1 Google Map Pack for primary Brisbane local search keywords within 3 months",
                  "+62% direct online bookings in Q1 post-launch (no aggregator commission)",
                  "Mobile bounce rate reduced from 74% to 28% after WordPress mobile-first rebuild",
                  "49.3K Google clicks and 5.86M impressions across 3 months in Search Console",
                  "Average position 8.5 across 5.86 million Google impressions",
                  "GBP restored from suspended to verified and active in 3 weeks",
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
                  { label: "Indexing Status",       value: "GBP restored - NAP unified across 50+ citations", icon: CheckCircle, color: "text-green-500" },
                  { label: "Local Signal",           value: "Verified LocalBusiness Schema - Eagleby, Brisbane QLD 4207", icon: MapPin, color: "text-blue-500" },
                  { label: "Performance Metrics",    value: "5.86M impressions / 49.3k clicks / Avg pos 8.5", icon: BarChart2, color: "text-purple-500" },
                  { label: "Tech Stack",             value: "WordPress CMS / LodgingBusiness Schema / WooCommerce", icon: Shield, color: "text-amber-500" },
                  { label: "GBP Status",             value: "Active & verified - #1 Map Pack Brisbane", icon: Star, color: "text-yellow-500" },
                  { label: "Review Acquisition",     value: "Automated loop - 1 verified review/week", icon: Users, color: "text-teal-500" },
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
                    Brisbane-based Local SEO experts - GBP management, citation cleanup, Map Pack domination.{" "}
                    <Link to="/services/local-seo" className="text-accent hover:underline">Local SEO service</Link>
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
