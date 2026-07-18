import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, Home, BarChart3, TrendingUp, Zap, Globe, Search } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "SEO for Real Estate",
  headline: "Rank #1 for Property Searches in Your Market.",
  description: "Real estate is hyperlocal. When buyers and renters search Google, they search by suburb. We build suburb-specific SEO strategies that put your agency in front of exactly the right audience.",
  longDescription: "Real estate SEO requires a unique approach: deep suburb-level keyword targeting, property listing schema, and local authority building. The agencies that dominate Google in a suburb own that market. Our real estate SEO service is built to create this dominance — suburb by suburb — for real estate agencies and property management businesses across Australia.",
  features: [
    "Suburb-specific landing page creation and optimisation",
    "Real estate schema markup (RealEstateListing, LocalBusiness, FAQPage)",
    "Google Business Profile optimisation for agency offices",
    "Agent profile pages with authoritative bio content",
    "Property listing SEO integration strategy",
    "Competitor suburb ranking analysis",
    "Area guide and suburb profile content strategy",
    "Rental market and buyer guide blog content",
    "Internal linking across suburb and service pages",
    "Monthly local real estate SEO performance report",
  ],
  benefits: [
    { icon: Home, title: "Suburb-Level Dominance", desc: "We create SEO strategies that own search in your target suburbs — buyers and sellers find you first." },
    { icon: BarChart3, title: "Long-Term Market Authority", desc: "Area guides and suburb content compound over time, building the kind of authority Google rewards with sustained rankings." },
    { icon: TrendingUp, title: "Qualified Listing Leads", desc: "Property owners searching for an agent are ready to list. Organic search captures them at peak intent." },
  ],
  process: [
    { step: "01", title: "Market Analysis", desc: "Analyse your target suburbs, property types, and competitive landscape to identify the highest-value ranking opportunities." },
    { step: "02", title: "Page Architecture", desc: "Build suburb, service, and agent pages following best-practice real estate SEO architecture." },
    { step: "03", title: "Content Strategy", desc: "Develop area guides, suburb profiles, and market update content to build topical authority." },
    { step: "04", title: "Authority & Links", desc: "Build local authority through property industry directories, local media mentions, and strategic link building." },
  ],
  stats: [
    { value: "90%", label: "of property searches start on Google", source: "NAR / Google" },
    { value: "3.5x", label: "more leads for agencies with suburb-specific pages", source: "Next Tab Internal" },
    { value: "72%", label: "of buyers use online search as their primary discovery method", source: "REA Group" },
  ],
  faqs: [
    { q: "Do you create individual suburb landing pages?", a: "Yes — this is the core of real estate SEO. Each suburb you want to dominate needs a dedicated, optimised page targeting suburb-specific buyer and seller keywords." },
    { q: "Can you help with property management SEO as well?", a: "Absolutely. Property management has different keyword intent to sales. We create separate strategies for property management, buyer's agency, and residential/commercial sales." },
    { q: "Does SEO compete with portal sites like realestate.com.au?", a: "For branded and agency-specific searches, no — they target different queries. Your SEO targets suburb-level and seller intent searches that portals don't capture." },
    { q: "How many suburbs can you target?", a: "We start with your 5–10 highest priority suburbs and expand over time. Trying to rank for too many suburbs at once dilutes your authority. We build depth before breadth." },
  ],
};

const SeoForRealEstate = () => (
  <Layout>
    <SEO
      title="SEO for Real Estate Agencies Australia — Rank by Suburb"
      description="Specialist real estate SEO for Australian agencies. We build suburb-specific landing pages and local SEO strategies to drive property listings and buyer enquiries."
      canonical="/industry/seo-for-real-estate"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Industry SEO", url: "https://nexttabagency.com/services" },
        { name: "SEO for Real Estate", url: "https://nexttabagency.com/industry/seo-for-real-estate" },
      ]}
      serviceSchema={{ name: "SEO for Real Estate", description: "Specialist real estate SEO for Australian agencies — suburb landing pages, agent profiles, and local authority.", areaServed: "Australia" }}
    />
    <section aria-labelledby="service-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="SEO for Real Estate Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><Home className="w-3 h-3" /> Industry SEO</span>
          <h1 id="service-hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free Real Estate SEO Audit</Link></Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/local-seo">Local SEO</Link></Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="border-b border-border bg-muted/30 py-8"><div className="container max-w-4xl"><div className="grid grid-cols-3 gap-6 text-center">{service.stats.map((s) => (<div key={s.label}><p className="font-heading font-black text-3xl text-accent">{s.value}</p><p className="text-sm font-semibold text-foreground mt-1">{s.label}</p><p className="text-xs text-muted-foreground/60">Source: {s.source}</p></div>))}</div></div></section>
    <section className="py-20 md:py-28"><div className="container max-w-5xl"><div className="grid lg:grid-cols-5 gap-12 lg:gap-20"><div className="lg:col-span-3"><h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why Real Estate Agencies Win With Suburb-Specific SEO</h2><p className="text-muted-foreground leading-relaxed">{service.longDescription}</p></div><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2"><div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10"><h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>{service.benefits.map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}</div></motion.div></div></div></section>
    <section className="py-20 md:py-28 relative overflow-hidden"><div className="absolute inset-0 pattern-dots" /><div className="container max-w-5xl relative z-10"><SectionHeading eyebrow="What's Included" title="Complete real estate SEO service" /><ul className="grid sm:grid-cols-2 gap-4">{service.features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}</ul></div></section>
    <section className="surface-warm py-20 md:py-28"><div className="container max-w-5xl"><SectionHeading eyebrow="Our Process" title="How we build your real estate authority" /><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{service.process.map((step, i) => (<motion.div key={step.title} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative"><div className="card-premium rounded-2xl p-6 h-full"><span className="font-heading font-bold text-2xl number-outline block mb-3">{step.step}</span><h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{step.title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p></div>{i < 3 && (<div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 items-center justify-center"><ArrowRight className="w-4 h-4 text-accent/40" /></div>)}</motion.div>))}</div></div></section>
    <section className="py-20 md:py-28 bg-muted/30"><div className="container max-w-3xl"><SectionHeading eyebrow="FAQs" title="Real estate SEO questions answered" /><div className="space-y-4">{service.faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}</div></div></section>
    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>
    <AIInsightsPanel pageTitle="SEO for Real Estate - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "SEO for Real Estate Agencies" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Service Area", value: "Australia-wide" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Real Estate SEO Overview" items={["Specialist real estate SEO for Australian agencies — suburb landing pages, agent profiles, and local authority.", "Drives property listing enquiries and buyer leads through suburb-specific organic rankings."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "SEO for Real Estate" }, { term: "Location", def: "Brisbane-based, serving all of Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides real estate SEO for Australian agencies, building suburb-specific landing pages and local authority strategies to drive property listing and buyer enquiries.</p>) },
    ]} />
  </Layout>
);

export default SeoForRealEstate;
