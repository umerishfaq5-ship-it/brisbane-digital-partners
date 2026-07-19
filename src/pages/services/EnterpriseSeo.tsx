import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, Building2, Users, TrendingUp, Zap, Globe, Search } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

import LocationLinksStrip from "@/components/LocationLinksStrip";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "Enterprise SEO Services",
  headline: "SEO at Scale. Measurable Revenue. No Fluff.",
  description: "Enterprise SEO demands a different approach — one built for complex site architectures, multiple stakeholders, and markets where every ranking position represents significant revenue.",
  longDescription: "Enterprise SEO is not regular SEO multiplied. Large organisations face unique challenges: thousands of pages, fragmented internal teams, complex CMS environments, international targeting, and the need for SEO to integrate with broader marketing and product roadmaps. Our enterprise SEO service is built for this scale — combining advanced technical strategy, data-driven content planning, and executive-level reporting.",
  features: [
    "Large-scale technical SEO audit (10,000+ page sites)",
    "JavaScript SEO and headless CMS architecture review",
    "Crawl budget management and log file analysis",
    "Multi-location and multi-domain SEO strategy",
    "International SEO and hreflang implementation",
    "Sitewide content audit and cannibalisation mapping",
    "Advanced internal linking and PageRank distribution strategy",
    "Enterprise-grade reporting (Data Studio / Looker dashboards)",
    "Cross-team SEO workflow documentation and training",
    "Agile SEO sprint planning integrated with development cycles",
  ],
  benefits: [
    { icon: Building2, title: "Scale-Ready Strategy", desc: "We handle enterprise-scale complexity — millions of pages, distributed teams, and multi-market targeting." },
    { icon: Users, title: "Stakeholder Reporting", desc: "Executive-level SEO reporting that connects rankings to revenue, demonstrating clear ROI to leadership." },
    { icon: TrendingUp, title: "Compounding Authority", desc: "Enterprise authority compounds faster than SMB SEO. A well-executed 12-month strategy delivers outsized returns." },
  ],
  process: [
    { step: "01", title: "Discovery", desc: "Deep-dive into your tech stack, team structure, CMS, and current SEO performance across all markets." },
    { step: "02", title: "Strategy", desc: "A 12-month SEO roadmap aligned with your business goals, product launches, and market priorities." },
    { step: "03", title: "Execution", desc: "Sprint-based implementation working alongside your development and content teams." },
    { step: "04", title: "Reporting", desc: "Monthly executive reporting connecting SEO metrics to pipeline, revenue, and market share." },
  ],
  stats: [
    { value: "5x", label: "Higher ROI for enterprise SEO vs paid search after 18 months", source: "Forrester" },
    { value: "70%", label: "of enterprise sites have critical crawl issues undetected", source: "Botify" },
    { value: "38%", label: "of enterprise organic traffic lost to crawl inefficiency", source: "Botify" },
  ],
  faqs: [
    { q: "What counts as 'enterprise' SEO?", a: "Generally, enterprise SEO applies to websites with 10,000+ pages, significant monthly organic traffic (100,000+ sessions), or large organisations where SEO requires coordination across multiple teams and stakeholders." },
    { q: "Do you work with ASX-listed or multinational companies?", a: "Yes. We have experience working with enterprise-scale Australian and international businesses where SEO is a core revenue channel requiring boardroom-level accountability." },
    { q: "How do you integrate with our existing development team?", a: "We provide developer-ready technical specifications and integrate into your existing sprint cycles. We work in your tools — Jira, Confluence, Slack — not around them." },
    { q: "Can you handle international SEO?", a: "Yes. We implement hreflang, manage multi-domain vs subdirectory vs subdomain strategy, and coordinate SEO across multiple markets and languages." },
  ],
};

const EnterpriseSeo = () => (
  <Layout>
    <SEO
      title="Enterprise SEO Services Australia — Large-Scale SEO Strategy"
      description="Expert enterprise SEO for large Australian businesses. We handle complex site architectures, multi-market strategy, and stakeholder reporting that connects rankings to revenue."
      canonical="/services/enterprise-seo"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "Enterprise SEO", url: "https://nexttabagency.com/services/enterprise-seo" },
      ]}
      serviceSchema={{ name: "Enterprise SEO Services", description: "Large-scale enterprise SEO for Australian businesses — advanced technical strategy, international SEO, and executive reporting.", areaServed: "Australia" }}
    />
    <section aria-labelledby="service-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="Enterprise SEO Services Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <h1 id="service-hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Request an Enterprise SEO Consultation</Link></Button>
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

    <section className="py-20 md:py-28"><div className="container max-w-5xl"><div className="grid lg:grid-cols-5 gap-12 lg:gap-20"><div className="lg:col-span-3"><h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why Enterprise SEO is Different</h2><p className="text-muted-foreground leading-relaxed">{service.longDescription}</p><p className="text-muted-foreground leading-relaxed mt-4">We also provide <Link to="/services/b2b-seo" className="text-accent font-semibold">B2B SEO</Link> and <Link to="/services/ai-seo" className="text-accent font-semibold">AI SEO / GEO</Link> services that complement enterprise strategies.</p></div><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2"><div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10"><h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>{service.benefits.map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}</div></motion.div></div></div></section>

    <section className="py-20 md:py-28 relative overflow-hidden"><div className="absolute inset-0 pattern-dots" /><div className="container max-w-5xl relative z-10"><SectionHeading eyebrow="What's Included" title="Complete enterprise SEO service" /><ul className="grid sm:grid-cols-2 gap-4">{service.features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}</ul></div></section>

    <section className="surface-warm py-20 md:py-28"><div className="container max-w-5xl"><SectionHeading eyebrow="Our Process" title="How we deliver enterprise SEO results" /><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{service.process.map((step, i) => (<motion.div key={step.title} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative"><div className="card-premium rounded-2xl p-6 h-full"><span className="font-heading font-bold text-2xl number-outline block mb-3">{step.step}</span><h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{step.title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p></div>{i < 3 && (<div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 items-center justify-center"><ArrowRight className="w-4 h-4 text-accent/40" /></div>)}</motion.div>))}</div></div></section>

    <section className="py-20 md:py-28 bg-muted/30"><div className="container max-w-3xl"><SectionHeading eyebrow="FAQs" title="Enterprise SEO questions answered" /><div className="space-y-4">{service.faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}</div></div></section>

    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>

    <AIInsightsPanel pageTitle="Enterprise SEO - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "Enterprise SEO Services" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Scale", value: "10,000+ page sites, multi-market, multi-domain" }, { label: "Service Area", value: "Australia-wide" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Enterprise SEO Overview" items={["Large-scale enterprise SEO for Australian businesses with complex site architectures.", "Covers crawl budget management, international SEO, hreflang, and executive reporting.", "Works alongside development and marketing teams in agile sprint cycles."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "Enterprise SEO" }, { term: "Scale", def: "10,000+ page sites, multi-market" }, { term: "Location", def: "Brisbane-based, serving all of Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides enterprise SEO for large Australian organisations, managing complex technical architectures, multi-market strategies, and executive-level reporting that connects rankings to revenue.</p>) },
    ]} />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />
  </Layout>
);

export default EnterpriseSeo;

