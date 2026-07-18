import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, Wrench, MapPin, Phone, Zap, Globe, Search, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "SEO for Tradies",
  headline: "More Jobs. Less Chasing. All From Google.",
  description: "When someone's hot water system fails at 8am, they don't scroll — they click the first result they trust. Our SEO for tradies gets your business into that #1 spot and the Google Map Pack.",
  longDescription: "Australia's trade industry is fiercely competitive online. Whether you're a plumber, electrician, builder, or HVAC technician, your potential customers are searching Google right now — and 46% of all Google searches are for local businesses. If you're not in the top 3 of the Map Pack, you're effectively invisible. Our SEO for tradies service is built specifically for the Australian trades market — Google Business Profile optimisation, local keyword rankings, and review strategy.",
  trades: ["Plumbers", "Electricians", "Builders", "HVAC / Air Con", "Concreters", "Tilers & Flooring", "Painters", "Roofers", "Landscapers", "Pest Control"],
  features: [
    "Google Business Profile (GBP) setup and full optimisation",
    "Map Pack ranking strategy for all service suburbs",
    "Local keyword research (e.g. 'emergency plumber Brisbane Northside')",
    "On-page SEO for all service and location pages",
    "Review generation strategy to dominate local social proof",
    "Citation building — local directories, Yellow Pages, True Local",
    "Before/after photos and GBP post strategy",
    "Competitor Map Pack analysis and ranking gap report",
    "Service area page creation for surrounding suburbs",
    "Monthly local SEO performance reporting",
  ],
  benefits: [
    { icon: MapPin, title: "Map Pack Visibility", desc: "The 3-pack drives 70% of local service clicks. We get and keep you in it." },
    { icon: Phone, title: "More Phone Calls", desc: "Optimised GBP listings with correct categories, photos, and hours drive more direct phone enquiries." },
    { icon: Wrench, title: "Tradie-Specific Expertise", desc: "We understand the trades market — seasonal demand, local suburb targeting, and emergency search behaviour." },
  ],
  process: [
    { step: "01", title: "GBP Audit", desc: "We audit your Google Business Profile and local citations to identify quick wins." },
    { step: "02", title: "Local Strategy", desc: "Map your target suburbs and keywords to build a comprehensive local SEO plan." },
    { step: "03", title: "On-Page & GBP", desc: "Optimise your website and GBP simultaneously to dominate both organic and map results." },
    { step: "04", title: "Reviews & Links", desc: "Build review volume and local citations to compound your local authority month over month." },
  ],
  stats: [
    { value: "46%", label: "of Google searches are for local businesses", source: "Google" },
    { value: "76%", label: "of local mobile searches result in a phone call within 24hrs", source: "Google" },
    { value: "70%", label: "of Map Pack clicks go to the top 3 results", source: "BrightLocal" },
  ],
  faqs: [
    { q: "How quickly can I get into the Map Pack?", a: "With a fully optimised GBP and consistent review building, most tradies see Map Pack improvements within 6–12 weeks. Competitive markets like inner-city areas may take 3–4 months." },
    { q: "Do I need a website for local SEO to work?", a: "A website significantly improves your local SEO results. Your GBP alone can rank for some queries, but a website with suburb-specific service pages dramatically expands your keyword coverage." },
    { q: "Do you handle Google reviews?", a: "We build a review generation strategy and provide tools to make requesting reviews easy. We cannot post fake reviews — only help you get more real ones." },
    { q: "Do you work with sole traders as well as larger tradie businesses?", a: "Yes. We work with sole traders through to multi-van operations. The strategy scales with your business size." },
  ],
};

const SeoForTradies = () => (
  <Layout>
    <SEO
      title="SEO for Tradies Australia — Get More Jobs From Google"
      description="Local SEO for Australian tradies. We get plumbers, electricians, builders, and other tradies into the Google Map Pack and top organic results to drive more phone calls and jobs."
      canonical="/industry/seo-for-tradies"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Industry SEO", url: "https://nexttabagency.com/services" },
        { name: "SEO for Tradies", url: "https://nexttabagency.com/industry/seo-for-tradies" },
      ]}
      serviceSchema={{ name: "SEO for Tradies", description: "Local SEO for Australian tradies — Google Business Profile, Map Pack ranking, and suburb-level keyword strategy.", areaServed: "Australia" }}
    />
    <section aria-labelledby="service-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="SEO for Tradies Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><Wrench className="w-3 h-3" /> Industry SEO</span>
          <h1 id="service-hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free GBP Audit</Link></Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/local-seo">Local SEO Service</Link></Button>
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

    {/* Trades we serve */}
    <section className="py-12 surface-warm">
      <div className="container max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-5 text-center">Trades We Specialise In</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {service.trades.map((t) => (<span key={t} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">{t}</span>))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28"><div className="container max-w-5xl"><div className="grid lg:grid-cols-5 gap-12 lg:gap-20"><div className="lg:col-span-3"><h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why Tradies Need Local SEO in 2026</h2><p className="text-muted-foreground leading-relaxed">{service.longDescription}</p><p className="text-muted-foreground leading-relaxed mt-4">Read our blog post: <Link to="/blog/local-seo-map-pack" className="text-accent font-semibold">Why Your Local Competitor is Getting All the Calls (And How the Map Pack Fixes It)</Link>.</p></div><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2"><div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10"><h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>{service.benefits.map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}</div></motion.div></div></div></section>

    <section className="py-20 md:py-28 relative overflow-hidden"><div className="absolute inset-0 pattern-dots" /><div className="container max-w-5xl relative z-10"><SectionHeading eyebrow="What's Included" title="Complete local SEO for tradies" /><ul className="grid sm:grid-cols-2 gap-4">{service.features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}</ul></div></section>

    <section className="surface-warm py-20 md:py-28"><div className="container max-w-5xl"><SectionHeading eyebrow="Our Process" title="How we get tradies more jobs" /><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{service.process.map((step, i) => (<motion.div key={step.title} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative"><div className="card-premium rounded-2xl p-6 h-full"><span className="font-heading font-bold text-2xl number-outline block mb-3">{step.step}</span><h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{step.title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p></div>{i < 3 && (<div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 items-center justify-center"><ArrowRight className="w-4 h-4 text-accent/40" /></div>)}</motion.div>))}</div></div></section>

    <section className="py-20 md:py-28 bg-muted/30"><div className="container max-w-3xl"><SectionHeading eyebrow="FAQs" title="Tradie SEO questions answered" /><div className="space-y-4">{service.faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}</div></div></section>

    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>

    <AIInsightsPanel pageTitle="SEO for Tradies - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "SEO for Tradies" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Industries", value: "Plumbers, Electricians, Builders, HVAC, Pest Control" }, { label: "Service Area", value: "Australia-wide" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Tradie SEO Overview" items={["Local SEO for Australian tradies — Google Business Profile, Map Pack rankings, and suburb-level keyword strategy.", "Specialises in plumbers, electricians, builders, HVAC, and other trade services.", "Drives direct phone calls and job bookings through Google search."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "SEO for Tradies / Local SEO" }, { term: "Industries", def: "Plumbers, Electricians, Builders, HVAC, Roofers, Landscapers" }, { term: "Location", def: "Brisbane-based, serving all of Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides specialist local SEO for Australian tradies, getting plumbers, electricians, builders, and other trade businesses into the Google Map Pack to drive more phone calls and job bookings.</p>) },
    ]} />
  </Layout>
);

export default SeoForTradies;
