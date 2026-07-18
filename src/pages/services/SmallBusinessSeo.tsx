import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, Store, TrendingUp, DollarSign, Zap, Globe, Search } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "SEO for Small Business",
  headline: "Big Brand Rankings Without a Big Brand Budget.",
  description: "Small businesses have one weapon large competitors can't replicate: local relevance. Our small business SEO service weaponises it to deliver real rankings on a budget that makes sense.",
  longDescription: "Small businesses don't need the same SEO strategy as enterprise companies — they need a smarter, more focused one. Instead of trying to rank for everything, we identify the 20% of keywords that will drive 80% of your revenue, build the technical foundation to support rankings, and execute a local authority strategy that outflanks larger, slower competitors. This is lean, efficient SEO built for Australian small business owners.",
  features: [
    "Small business keyword research — focusing on buyer-intent, low-competition opportunities",
    "Google Business Profile setup and optimisation",
    "On-page SEO for your core service and location pages",
    "Technical SEO essentials — crawl, speed, mobile, and schema",
    "Local citation building for your industry and suburb",
    "Review generation strategy for social proof and Map Pack ranking",
    "Simple monthly reporting with plain-English insights",
    "Content strategy — blog and FAQ pages to expand keyword coverage",
    "Competitor local ranking analysis",
    "No lock-in contracts — month-by-month flexibility",
  ],
  benefits: [
    { icon: Store, title: "Local Relevance as a Weapon", desc: "You can outrank national brands for suburb-specific searches. We build this advantage systematically." },
    { icon: DollarSign, title: "Budget-Smart Execution", desc: "We prioritise the highest-impact work first — no wasted spend on activities that won't move the needle for a small business." },
    { icon: TrendingUp, title: "Sustainable Growth", desc: "Small business SEO compounds. Month 6 costs the same as month 1, but delivers 3x the organic leads." },
  ],
  process: [
    { step: "01", title: "Discovery", desc: "Learn your business, your customers, and your most important revenue-driving keywords." },
    { step: "02", title: "Quick Wins", desc: "Fix the technical basics and optimise your GBP for fast early results." },
    { step: "03", title: "Authority Build", desc: "Local citations, review strategy, and content to build ongoing ranking momentum." },
    { step: "04", title: "Reporting", desc: "Plain-English monthly report showing exactly where your business ranks and what improved." },
  ],
  stats: [
    { value: "97%", label: "of people learn about local businesses online", source: "BrightLocal" },
    { value: "5x", label: "higher ROI for SEO vs Google Ads for small businesses after 12 months", source: "Forrester" },
    { value: "78%", label: "of local mobile searches result in an offline purchase", source: "Google" },
  ],
  faqs: [
    { q: "How much does small business SEO cost?", a: "Our small business SEO plans start from $800/month. The exact investment depends on your industry competitiveness, location, and goals. We'll recommend the minimum effective budget for your specific situation." },
    { q: "How long before a small business sees results from SEO?", a: "Most small businesses see meaningful improvements in 60–90 days for local Map Pack rankings, and 3–6 months for organic page 1 positions. The timeline depends on your starting baseline and competition level." },
    { q: "Is SEO worth it for a very small business (e.g. a sole trader)?", a: "Yes — especially for local service businesses. For a plumber or electrician, one additional job per week from organic search pays for a year of SEO investment. The ROI case is strong even for very small operators." },
    { q: "Do you lock small businesses into long contracts?", a: "No. We work on flexible monthly arrangements. We believe our results should keep clients — not contracts. Most clients stay 12+ months because of the results they see." },
    { q: "Can small businesses compete with larger competitors in Google?", a: "Yes — especially at the local level. Suburb-specific searches are where small businesses consistently outrank national brands. This is the core of our small business SEO strategy." },
  ],
};

const SmallBusinessSeo = () => (
  <Layout>
    <SEO
      title="SEO for Small Business Australia — Affordable Small Business SEO"
      description="Small business SEO for Australian sole traders and SMBs. We deliver real page 1 rankings and Google Map Pack visibility on a budget that makes sense for small businesses."
      canonical="/services/small-business-seo"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "Small Business SEO", url: "https://nexttabagency.com/services/small-business-seo" },
      ]}
      serviceSchema={{ name: "SEO for Small Business", description: "Affordable small business SEO for Australian SMBs and sole traders.", areaServed: "Australia" }}
    />
    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="Small Business SEO Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free Small Business SEO Audit</Link></Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/local-seo">Local SEO</Link></Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="border-b border-border bg-muted/30 py-8"><div className="container max-w-4xl"><div className="grid grid-cols-3 gap-6 text-center">{service.stats.map((s) => (<div key={s.label}><p className="font-heading font-black text-3xl text-accent">{s.value}</p><p className="text-sm font-semibold text-foreground mt-1">{s.label}</p><p className="text-xs text-muted-foreground/60">Source: {s.source}</p></div>))}</div></div></section>

    <section className="py-20 md:py-28"><div className="container max-w-5xl"><div className="grid lg:grid-cols-5 gap-12 lg:gap-20"><div className="lg:col-span-3"><h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why Small Business SEO Requires a Different Playbook</h2><p className="text-muted-foreground leading-relaxed">{service.longDescription}</p><p className="text-muted-foreground leading-relaxed mt-4">Read our blog: <Link to="/blog/seo-for-small-business-zero-time" className="text-accent font-semibold">SEO for Small Business Owners: The Zero-Time Strategy</Link> — the 20% of SEO that drives 80% of results.</p></div><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2"><div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10"><h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>{service.benefits.map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}</div></motion.div></div></div></section>

    <section className="py-20 md:py-28 relative overflow-hidden"><div className="absolute inset-0 pattern-dots" /><div className="container max-w-5xl relative z-10"><SectionHeading eyebrow="What's Included" title="Complete small business SEO service" /><ul className="grid sm:grid-cols-2 gap-4">{service.features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}</ul></div></section>

    <section className="surface-warm py-20 md:py-28"><div className="container max-w-5xl"><SectionHeading eyebrow="Our Process" title="How we grow small businesses on Google" /><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{service.process.map((step, i) => (<motion.div key={step.title} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative"><div className="card-premium rounded-2xl p-6 h-full"><span className="font-heading font-bold text-2xl number-outline block mb-3">{step.step}</span><h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{step.title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p></div>{i < 3 && (<div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 items-center justify-center"><ArrowRight className="w-4 h-4 text-accent/40" /></div>)}</motion.div>))}</div></div></section>

    <section className="py-20 md:py-28 bg-muted/30"><div className="container max-w-3xl"><SectionHeading eyebrow="FAQs" title="Small business SEO questions answered" /><div className="space-y-4">{service.faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}</div></div></section>

    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>

    <AIInsightsPanel pageTitle="Small Business SEO - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "SEO for Small Business" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Target", value: "Australian SMBs, sole traders, and local service businesses" }, { label: "Service Area", value: "Australia-wide" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Small Business SEO Overview" items={["Affordable SEO for Australian small businesses and sole traders.", "Focuses on local relevance, GBP optimisation, and the 20% of work that drives 80% of results.", "No lock-in contracts. Plans from $800/month."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "SEO for Small Business" }, { term: "Target", def: "Australian SMBs and sole traders" }, { term: "Location", def: "Brisbane-based, serving all of Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides affordable, focused SEO for Australian small businesses — prioritising local relevance, GBP optimisation, and high-impact keyword rankings to deliver real results on a small business budget.</p>) },
    ]} />
  </Layout>
);

export default SmallBusinessSeo;
