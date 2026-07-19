import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, MapPin, TrendingUp, Users, Zap, Globe, Search } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import LocationLinksStrip from "@/components/LocationLinksStrip";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const stats = [
  { value: "350k+", label: "Sunshine Coast residents", source: "ABS 2026" },
  { value: "#1", label: "Fastest-growing region in Queensland", source: "SCRC" },
  { value: "4.2M+", label: "Annual visitors to the Sunshine Coast", source: "Tourism Noosa" },
];

const features = [
  "Sunshine Coast keyword research and competitor analysis",
  "Google Business Profile optimisation for SCC businesses",
  "Suburb-level landing pages (Noosa, Maroochydore, Caloundra, etc.)",
  "Local citation building in Sunshine Coast directories",
  "Tourism and lifestyle SEO specialisation",
  "Map Pack ranking strategy for key SCC suburbs",
  "Technical SEO audit and Core Web Vitals improvement",
  "Link building with Sunshine Coast media and directories",
  "Content strategy targeting local and tourist demand",
  "Monthly Sunshine Coast SEO performance reporting",
];

const faqs = [
  { q: "Do you serve businesses across the entire Sunshine Coast?", a: "Yes — from Caloundra in the south to Noosa in the north, and all hinterland areas including Maleny and Montville. We target every suburb relevant to your business." },
  { q: "What industries are you strongest in for the Sunshine Coast?", a: "We specialise in hospitality, tourism, trades, real estate, and professional services — the dominant industries in the Sunshine Coast economy. See our industry-specific SEO pages for more detail." },
  { q: "Is the Sunshine Coast growing fast enough to justify SEO investment?", a: "Absolutely. The Sunshine Coast is one of Australia's fastest-growing regions, with major infrastructure investment (airport expansion, hospital, light rail) driving significant population and business growth. Early SEO investment now builds authority that compounds as the market grows." },
  { q: "Can you help with both Sunshine Coast and Brisbane for a multi-location business?", a: "Yes — multi-location SEO is a core service. We create location-specific pages and GBP profiles for each location, avoiding keyword cannibalisation between cities." },
];

const SunshineCoastSeo = () => (
  <Layout>
    <SEO
      title="SEO Sunshine Coast — SEO Agency for Sunshine Coast Businesses"
      description="Expert SEO agency for Sunshine Coast businesses. We rank Sunshine Coast companies on Google with local SEO, Map Pack strategy, and suburb-level keyword targeting."
      canonical="/locations/sunshine-coast-seo"
      faqs={faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Locations", url: "https://nexttabagency.com/" },
        { name: "Sunshine Coast SEO", url: "https://nexttabagency.com/locations/sunshine-coast-seo" },
      ]}
      serviceSchema={{ name: "SEO Services Sunshine Coast", description: "Expert SEO services for Sunshine Coast businesses — local SEO, Map Pack rankings, and suburb-level keyword strategy.", areaServed: "Sunshine Coast, Queensland" }}
    />
    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="SEO Agency Sunshine Coast" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><MapPin className="w-3 h-3" /> Sunshine Coast, QLD</span>
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">SEO Agency Sunshine Coast</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">Rank #1 on the Sunshine Coast. Grow With the Region.</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">The Sunshine Coast is Australia's fastest-growing region. Be the business locals and tourists find first on Google — from Noosa to Caloundra.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free Sunshine Coast SEO Audit</Link></Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/local-seo">Local SEO Service</Link></Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="border-b border-border bg-muted/30 py-8">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-3 gap-6 text-center">
          {stats.map((s) => (<div key={s.label}><p className="font-heading font-black text-3xl text-accent">{s.value}</p><p className="text-sm font-semibold text-foreground mt-1">{s.label}</p><p className="text-xs text-muted-foreground/60">Source: {s.source}</p></div>))}
        </div>
      </div>
    </section>

    {/* Suburbs */}
    <section className="py-12 surface-warm">
      <div className="container max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-5 text-center">Key Areas We Target</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {["Noosa", "Maroochydore", "Caloundra", "Kawana", "Buderim", "Nambour", "Sippy Downs", "Coolum Beach", "Peregian Beach", "Maleny", "Mooloolaba", "Alexandra Headland"].map((s) => (
            <span key={s} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">{s}</span>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <div className="lg:col-span-3">
            <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">The Sunshine Coast SEO Opportunity in 2026</h2>
            <p className="text-muted-foreground leading-relaxed">The Sunshine Coast is experiencing unprecedented growth — new residents, new businesses, new infrastructure. This creates a rare window where early SEO investment builds the kind of authority that becomes very difficult for late-movers to displace. Businesses that rank now will dominate the expanded market of 2027 and beyond.</p>
            <p className="text-muted-foreground leading-relaxed mt-4">Brisbane-based and serving all of South-East Queensland — including our <Link to="/locations/brisbane-seo" className="text-accent font-semibold">Brisbane SEO</Link> and <Link to="/locations/gold-coast-seo" className="text-accent font-semibold">Gold Coast SEO</Link> services.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2">
            <div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10">
              <h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>
              {[{ icon: MapPin, title: "Regional Growth Timing", desc: "Invest in SEO now and capture authority as the region's search volume grows." }, { icon: Users, title: "Tourism + Local Targeting", desc: "Target both the growing local population and millions of annual tourists." }, { icon: TrendingUp, title: "Less Competition", desc: "SEO is less contested on the Sunshine Coast than in Brisbane — more opportunity for faster results." }].map((b) => (
                <div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container max-w-5xl relative z-10">
        <SectionHeading eyebrow="What's Included" title="Complete Sunshine Coast SEO service" />
        <ul className="grid sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
              <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>

    <section className="surface-warm py-12">
      <div className="container max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-6 text-center">Other Locations We Serve</p>
        <div className="flex flex-wrap gap-3 justify-center">
          {[{ label: "Brisbane SEO", href: "/locations/brisbane-seo" }, { label: "Gold Coast SEO", href: "/locations/gold-coast-seo" }, { label: "Sydney SEO", href: "/locations/sydney-seo" }, { label: "Melbourne SEO", href: "/locations/melbourne-seo" }].map((l) => (
            <Link key={l.href} to={l.href} className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-border bg-card text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors">{l.label} <ArrowRight className="w-3.5 h-3.5" /></Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow="FAQs" title="Sunshine Coast SEO questions answered" />
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>

    <AIInsightsPanel pageTitle="SEO Sunshine Coast - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<InsightTable caption="Location Service Data" rows={[{ label: "Service", value: "SEO Agency Sunshine Coast" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Location", value: "Sunshine Coast, Queensland, Australia" }, { label: "Coverage", value: "Noosa, Maroochydore, Caloundra, Kawana, Buderim and all SCC areas" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Sunshine Coast SEO Overview" items={["Expert SEO agency serving Sunshine Coast businesses across all industries.", "Specialises in local SEO, Map Pack rankings, and suburb-level keyword targeting from Noosa to Caloundra.", "Brisbane-based agency serving the entire SEQ corridor."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "SEO Sunshine Coast" }, { term: "Coverage", def: "Noosa, Maroochydore, Caloundra, Kawana, Buderim, Coolum, Mooloolaba and all Sunshine Coast areas" }, { term: "Provider", def: "Next Tab Agency, Brisbane-based" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency is a Brisbane-based SEO agency providing expert SEO services to Sunshine Coast businesses, specialising in local search, Map Pack rankings, and suburb-level keyword targeting across Australia's fastest-growing region.</p>) },
    ]} />
  </Layout>
);

export default SunshineCoastSeo;

