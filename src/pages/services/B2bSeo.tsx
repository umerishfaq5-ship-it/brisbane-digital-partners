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
  title: "B2B SEO Services",
  headline: "Rank Where Your Buyers Research Before They Even Pick Up the Phone.",
  description: "B2B buying cycles start with Google. Decision-makers research vendors, compare solutions, and validate expertise long before any sales conversation. Our B2B SEO ensures your business is found first.",
  longDescription: "B2B SEO operates on a different timeline to consumer SEO — buyers spend weeks or months researching before they make contact. This means content depth, topical authority, and E-E-A-T signals matter more than in any other SEO vertical. Our B2B SEO service builds the kind of comprehensive digital presence that earns trust at every stage of the buyer journey — from awareness through to vendor shortlist.",
  features: [
    "B2B keyword research — informational, comparison, and transactional intent mapping",
    "Pillar content and topic cluster strategy for topical authority",
    "Solution and use-case page creation for each buyer segment",
    "B2B schema markup (Organization, FAQPage, HowTo, Article)",
    "LinkedIn and thought leadership SEO integration",
    "Technical SEO for B2B SaaS and service websites",
    "Case study and social proof page optimisation",
    "International B2B SEO for Australian companies targeting global markets",
    "B2B buyer journey content — TOFU, MOFU, BOFU",
    "Monthly B2B SEO pipeline attribution reporting",
  ],
  benefits: [
    { icon: Building2, title: "Long Buyer Journey Coverage", desc: "We create content for every stage — awareness blog posts through to comparison and decision pages." },
    { icon: Users, title: "Decision-Maker Targeting", desc: "B2B SEO targets CFOs, CTOs, and Procurement Managers — the people who actually sign contracts." },
    { icon: TrendingUp, title: "Pipeline-Quality Leads", desc: "Organic B2B leads tend to be better qualified than inbound from paid channels — they've already done their research." },
  ],
  process: [
    { step: "01", title: "Buyer Research", desc: "Map your ICP, buyer personas, and the full keyword journey from problem-aware to vendor-ready." },
    { step: "02", title: "Content Architecture", desc: "Build a pillar-and-cluster content structure covering every buyer stage and use case." },
    { step: "03", title: "Authority Building", desc: "Technical SEO, E-E-A-T signals, and B2B-relevant backlinks from industry publications." },
    { step: "04", title: "Pipeline Reporting", desc: "Monthly reporting connecting organic traffic to pipeline opportunities and revenue attribution." },
  ],
  stats: [
    { value: "67%", label: "of B2B buyers start research with a Google search", source: "Google/Millward Brown" },
    { value: "57%", label: "of B2B purchase decisions are made before first vendor contact", source: "CEB/Gartner" },
    { value: "14x", label: "higher close rate for inbound SEO leads vs outbound", source: "HubSpot" },
  ],
  faqs: [
    { q: "Is B2B SEO different from regular SEO?", a: "Yes. B2B keywords are lower volume but much higher commercial intent. The focus shifts from driving traffic volume to capturing high-quality, decision-maker-level intent at every stage of a long research process." },
    { q: "How do you measure B2B SEO success?", a: "We track keyword rankings, organic traffic, and goal completions (form fills, demo requests, phone calls). For clients with CRM integration, we can also track pipeline attribution — which organic queries led to actual opportunities." },
    { q: "Can B2B SEO work alongside our ABM strategy?", a: "Absolutely. SEO creates the inbound foundation that ABM outreach can reference and leverage. When a targeted account reaches your website via organic search, the intent signal is extremely strong." },
    { q: "What kind of content does B2B SEO need?", a: "A mix of educational top-funnel content (how-to guides, industry explainers), comparison mid-funnel content (vs competitor pages, feature comparisons), and decision-stage content (case studies, ROI calculators, solution pages)." },
  ],
};

const B2bSeo = () => (
  <Layout>
    <SEO
      title="B2B SEO Services Australia — Rank Where Buyers Research"
      description="Specialist B2B SEO for Australian companies. We build topical authority and buyer journey content that generates pipeline-quality organic leads from Google."
      canonical="/services/b2b-seo"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "B2B SEO", url: "https://nexttabagency.com/services/b2b-seo" },
      ]}
      serviceSchema={{ name: "B2B SEO Services", description: "Specialist B2B SEO for Australian companies — buyer journey content, topical authority, and pipeline attribution.", areaServed: "Australia" }}
    />
    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="B2B SEO Services Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Book a B2B SEO Strategy Call</Link></Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/enterprise-seo">Enterprise SEO</Link></Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="border-b border-border bg-muted/30 py-8"><div className="container max-w-4xl"><div className="grid grid-cols-3 gap-6 text-center">{service.stats.map((s) => (<div key={s.label}><p className="font-heading font-black text-3xl text-accent">{s.value}</p><p className="text-sm font-semibold text-foreground mt-1">{s.label}</p><p className="text-xs text-muted-foreground/60">Source: {s.source}</p></div>))}</div></div></section>

    <section className="py-20 md:py-28"><div className="container max-w-5xl"><div className="grid lg:grid-cols-5 gap-12 lg:gap-20"><div className="lg:col-span-3"><h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why B2B Companies Can't Ignore Organic Search</h2><p className="text-muted-foreground leading-relaxed">{service.longDescription}</p><p className="text-muted-foreground leading-relaxed mt-4">For enterprise-scale B2B operations, see our <Link to="/services/enterprise-seo" className="text-accent font-semibold">Enterprise SEO</Link> service. For AI-optimised content that gets cited in ChatGPT and Perplexity, see <Link to="/services/ai-seo" className="text-accent font-semibold">AI SEO / GEO</Link>.</p></div><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2"><div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10"><h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>{service.benefits.map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}</div></motion.div></div></div></section>

    <section className="py-20 md:py-28 relative overflow-hidden"><div className="absolute inset-0 pattern-dots" /><div className="container max-w-5xl relative z-10"><SectionHeading eyebrow="What's Included" title="Complete B2B SEO service" /><ul className="grid sm:grid-cols-2 gap-4">{service.features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}</ul></div></section>

    <section className="surface-warm py-20 md:py-28"><div className="container max-w-5xl"><SectionHeading eyebrow="Our Process" title="How we build your B2B organic pipeline" /><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{service.process.map((step, i) => (<motion.div key={step.title} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative"><div className="card-premium rounded-2xl p-6 h-full"><span className="font-heading font-bold text-2xl number-outline block mb-3">{step.step}</span><h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{step.title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p></div>{i < 3 && (<div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 items-center justify-center"><ArrowRight className="w-4 h-4 text-accent/40" /></div>)}</motion.div>))}</div></div></section>

    <section className="py-20 md:py-28 bg-muted/30"><div className="container max-w-3xl"><SectionHeading eyebrow="FAQs" title="B2B SEO questions answered" /><div className="space-y-4">{service.faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}</div></div></section>

    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>

    <AIInsightsPanel pageTitle="B2B SEO Services - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "B2B SEO Services" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Target", value: "B2B companies, SaaS, professional services" }, { label: "Service Area", value: "Australia-wide" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="B2B SEO Overview" items={["Specialist B2B SEO for Australian companies — buyer journey content, topical authority, and pipeline attribution.", "Covers TOFU, MOFU, BOFU content strategy and enterprise-level technical SEO."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "B2B SEO" }, { term: "Target", def: "B2B companies, SaaS, professional services" }, { term: "Location", def: "Brisbane-based, serving all of Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides specialist B2B SEO for Australian companies, building topical authority and buyer journey content strategies that generate pipeline-quality organic leads from Google search.</p>) },
    ]} />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />
  </Layout>
);

export default B2bSeo;

