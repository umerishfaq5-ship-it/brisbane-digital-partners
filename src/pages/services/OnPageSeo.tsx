import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, FileEdit, TrendingUp, Search, Zap, Globe, Tag, AlignLeft } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

import LocationLinksStrip from "@/components/LocationLinksStrip";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "On-Page SEO",
  headline: "The Foundation Every Ranking Sits On.",
  description: "On-page SEO optimisation for Australian websites — title tags, headings, content, schema markup, internal links, and everything Google needs to understand, trust, and rank your pages.",
  longDescription: "On-page SEO is the practice of optimising individual web pages so search engines can correctly understand what they're about and what queries they should rank for. It covers everything visible on and within your page — from the title tag and meta description through to heading structure, body content, internal links, image alt text, and schema markup. Without solid on-page SEO, even the best content and backlink profile won't deliver the rankings your business deserves.",
  features: [
    "Title tag optimisation — keyword-rich, click-worthy, within character limits",
    "Meta description optimisation — driving CTR from search results",
    "H1, H2, H3 heading structure audit and rewrite",
    "Body content optimisation for primary and secondary keywords",
    "Keyword density and semantic keyword (LSI) analysis",
    "Image alt text optimisation across all pages",
    "Internal linking audit and improvement",
    "URL structure review and optimisation",
    "Schema markup implementation (FAQ, HowTo, LocalBusiness, Article)",
    "Page-level E-E-A-T signal improvement",
    "Thin content identification and improvement plan",
    "Duplicate content identification and canonical tag implementation",
  ],
  benefits: [
    { icon: Tag, title: "Tell Google Exactly What You're About", desc: "Properly optimised on-page signals remove ambiguity for Google — making it easier to rank for your target keywords." },
    { icon: AlignLeft, title: "Content That Answers Intent", desc: "We align every page's content with the searcher's intent — informational, commercial, or transactional — for higher engagement and conversion rates." },
    { icon: TrendingUp, title: "Foundation for Off-Page Success", desc: "Backlinks won't rank a poorly optimised page. Strong on-page SEO ensures every link you earn delivers maximum ranking benefit." },
  ],
  process: [
    { step: "01", title: "Audit", desc: "Full on-page SEO audit across your site — identifying every title tag, heading, and content optimisation opportunity." },
    { step: "02", title: "Prioritise", desc: "Pages ranked by traffic potential and optimisation opportunity. Quick wins addressed first." },
    { step: "03", title: "Optimise", desc: "Title tags, meta descriptions, headings, content, schema, and internal links updated on each page." },
    { step: "04", title: "Monitor", desc: "Track ranking and CTR improvements. Ongoing optimisation as search intent and algorithms evolve." },
  ],
  stats: [
    { value: "36%", label: "of SEO practitioners say on-page content is the #1 ranking factor", source: "Moz State of SEO" },
    { value: "78%", label: "of pages that appear in the top 3 have their primary keyword in the H1", source: "Ahrefs Study" },
    { value: "5x", label: "more CTR for pages with optimised title tags vs default titles", source: "Search Engine Journal" },
  ],
  faqs: [
    { q: "What exactly is on-page SEO?", a: "On-page SEO covers all optimisations made directly on your web pages — title tags, meta descriptions, headings, body content, internal links, image alt text, URL structure, and schema markup. It's the signals that tell search engines what your page is about and why it should rank." },
    { q: "How is on-page SEO different from off-page SEO?", a: "On-page SEO refers to what's on your website pages. Off-page SEO refers to everything external — primarily backlinks from other websites. Both are essential for comprehensive rankings. See our Off-Page SEO page for backlink strategy." },
    { q: "How long does on-page SEO take to show results?", a: "Many on-page improvements — especially title tag and meta description changes — are re-crawled and reflected in rankings within 2-4 weeks. Content improvements and structural changes typically show measurable ranking movement within 30-90 days." },
    { q: "Can on-page SEO hurt my rankings if done incorrectly?", a: "Yes. Over-optimisation (keyword stuffing), duplicate title tags, incorrect canonical tags, or removing content that was previously ranking can harm rankings. Our approach is always measured and based on Google's published guidelines." },
  ],
};

const OnPageSeo = () => (
  <Layout>
    <SEO
      title="On-Page SEO Australia — On-Page SEO Services & Optimisation"
      description="Expert on-page SEO for Australian websites. We optimise title tags, headings, content, schema, and internal links to maximise your rankings and organic click-through rates."
      canonical="/services/on-page-seo"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "On-Page SEO", url: "https://nexttabagency.com/services/on-page-seo" },
      ]}
      serviceSchema={{ name: "On-Page SEO Services", description: "On-page SEO optimisation for Australian websites — title tags, headings, content, schema, and internal linking.", areaServed: "Australia" }}
    />

    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="On-Page SEO Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><FileEdit className="w-3 h-3" /> On-Page SEO</span>
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free On-Page SEO Audit</Link></Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/technical-seo">Technical SEO</Link></Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="border-b border-border bg-muted/30 py-8">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-3 gap-6 text-center">
          {service.stats.map((s) => (<div key={s.label}><p className="font-heading font-black text-3xl text-accent">{s.value}</p><p className="text-sm font-semibold text-foreground mt-1">{s.label}</p><p className="text-xs text-muted-foreground/60">Source: {s.source}</p></div>))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <div className="lg:col-span-3">
            <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why On-Page SEO is Non-Negotiable</h2>
            <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
            <p className="text-muted-foreground leading-relaxed mt-4">On-page SEO is part of a complete strategy: combine it with <Link to="/services/technical-seo" className="text-accent font-semibold">Technical SEO</Link> (crawl and speed), <Link to="/services/content-marketing" className="text-accent font-semibold">Content Marketing</Link> (new page creation), and <Link to="/services/link-building" className="text-accent font-semibold">Link Building</Link> (off-page authority) for maximum ranking results.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2">
            <div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10">
              <h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>
              {service.benefits.map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container max-w-5xl relative z-10">
        <SectionHeading eyebrow="What's Included" title="Complete on-page SEO optimisation" />
        <ul className="grid sm:grid-cols-2 gap-4">
          {service.features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}
        </ul>
      </div>
    </section>

    {/* On-Page vs Technical vs Off-Page Comparison */}
    <section className="surface-warm py-16">
      <div className="container max-w-5xl">
        <SectionHeading eyebrow="SEO Layer Comparison" title="On-page is one layer of a 3-part system" />
        <div className="grid sm:grid-cols-3 gap-4">
          {[{ label: "On-Page SEO", href: "/services/on-page-seo", desc: "Content, headings, title tags, schema markup. What's on the page.", active: true }, { label: "Technical SEO", href: "/services/technical-seo", desc: "Crawl, indexation, speed, structured data. How the site works." }, { label: "Link Building", href: "/services/link-building", desc: "Backlinks, digital PR, authority. What other sites say about you." }].map((r) => (<Link key={r.href} to={r.href} className={`group p-5 rounded-xl border transition-all ${r.active ? "border-accent bg-accent/5" : "border-border bg-card hover:border-accent/40"}`}><p className={`font-semibold text-sm mb-1 ${r.active ? "text-accent" : "text-foreground group-hover:text-accent"}`}>{r.label}</p><p className="text-xs text-muted-foreground">{r.desc}</p></Link>))}
        </div>
      </div>
    </section>

    <section className="surface-warm py-20 md:py-28">
      <div className="container max-w-5xl">
        <SectionHeading eyebrow="Our Process" title="How we optimise your pages" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step, i) => (<motion.div key={step.title} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative"><div className="card-premium rounded-2xl p-6 h-full"><span className="font-heading font-bold text-2xl number-outline block mb-3">{step.step}</span><h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{step.title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p></div>{i < 3 && (<div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 items-center justify-center"><ArrowRight className="w-4 h-4 text-accent/40" /></div>)}</motion.div>))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow="FAQs" title="On-page SEO questions answered" />
        <div className="space-y-4">
          {service.faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>

    <AIInsightsPanel pageTitle="On-Page SEO - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "On-Page SEO Services" }, { label: "Provider", value: "Next Tab Agency Brisbane" }, { label: "Scope", value: "Title tags, headings, content, schema, internal links, meta descriptions" }, { label: "Service Area", value: "Australia-wide" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="On-Page SEO Overview" items={["Expert on-page SEO for Australian websites.", "Services include: title tag optimisation, heading structure, content optimisation, schema markup, and internal linking.", "Part of a 3-layer SEO system with Technical SEO and Link Building."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "On-Page SEO" }, { term: "Scope", def: "All on-page ranking signals — title tags through to schema markup" }, { term: "Provider", def: "Next Tab Agency, Brisbane, Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides on-page SEO services for Australian websites — optimising title tags, headings, content, internal links, and schema markup to maximise rankings and organic CTR.</p>) },
    ]} />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />
  </Layout>
);

export default OnPageSeo;

