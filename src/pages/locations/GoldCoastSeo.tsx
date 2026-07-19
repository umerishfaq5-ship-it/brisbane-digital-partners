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
  { value: "700k+", label: "Gold Coast residents and growing", source: "ABS 2026" },
  { value: "12M+", label: "Annual visitors to the Gold Coast", source: "GCCC Tourism" },
  { value: "94%", label: "of GC residents use Google to find local businesses", source: "Google" },
];

const features = [
  "Gold Coast keyword research and competitor analysis",
  "Google Business Profile optimisation for GC businesses",
  "Suburb-level landing pages (Surfers Paradise, Broadbeach, Burleigh, etc.)",
  "Local citation building in Gold Coast directories",
  "Gold Coast hospitality and tourism SEO specialisation",
  "Map Pack ranking strategy for key GC suburbs",
  "Technical SEO audit and Core Web Vitals improvement",
  "Link building with Gold Coast media and business directories",
  "Content strategy targeting Gold Coast search demand",
  "Monthly Gold Coast SEO performance reporting",
];

const faqs = [
  { q: "Do you have experience with Gold Coast businesses?", a: "Yes — we work with Gold Coast businesses across hospitality, tourism, real estate, trades, and professional services. The GC market has unique search patterns due to high tourism volume, which we account for in keyword strategy." },
  { q: "Is Gold Coast SEO different from Brisbane SEO?", a: "Yes. Gold Coast has a heavily tourism-influenced search landscape alongside strong local residential demand. We tailor strategy to target both locals and tourist-intent searches simultaneously." },
  { q: "Which Gold Coast suburbs do you target?", a: "We target all GC suburbs based on your business location and service area — Surfers Paradise, Broadbeach, Burleigh Heads, Robina, Southport, Coolangatta, and beyond. Our suburb page strategy covers every area you want to rank in." },
  { q: "Can you help my Gold Coast business rank against larger national brands?", a: "Yes — through local SEO, Google Business Profile optimisation, and suburb-specific content, local businesses can outrank national brands for suburb-level searches. This is where local SEO creates the biggest advantage." },
];

const GoldCoastSeo = () => (
  <Layout>
    <SEO
      title="SEO Gold Coast — SEO Agency for Gold Coast Businesses"
      description="Expert SEO agency for Gold Coast businesses. We rank Gold Coast companies on Google with local SEO, Map Pack strategy, and suburb-level keyword targeting."
      canonical="/locations/gold-coast-seo"
      faqs={faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Locations", url: "https://nexttabagency.com/" },
        { name: "Gold Coast SEO", url: "https://nexttabagency.com/locations/gold-coast-seo" },
      ]}
      serviceSchema={{ name: "SEO Services Gold Coast", description: "Expert SEO services for Gold Coast businesses — local SEO, Map Pack rankings, and suburb-level keyword strategy.", areaServed: "Gold Coast, Queensland" }}
    />
    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="SEO Agency Gold Coast" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><MapPin className="w-3 h-3" /> Gold Coast, QLD</span>
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">SEO Agency Gold Coast</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">Rank #1 in the Gold Coast. Attract More Local Customers.</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">Whether you're a tradie in Robina, a restaurant in Broadbeach, or a retailer in Surfers Paradise — we get Gold Coast businesses found on Google.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free Gold Coast SEO Audit</Link></Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/local-seo">Local SEO Service</Link></Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="border-b border-border bg-muted/30 py-8"><div className="container max-w-4xl"><div className="grid grid-cols-3 gap-6 text-center">{stats.map((s) => (<div key={s.label}><p className="font-heading font-black text-3xl text-accent">{s.value}</p><p className="text-sm font-semibold text-foreground mt-1">{s.label}</p><p className="text-xs text-muted-foreground/60">Source: {s.source}</p></div>))}</div></div></section>

    {/* Suburbs */}
    <section className="py-12 surface-warm">
      <div className="container max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-5 text-center">Key Suburbs We Target</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {["Surfers Paradise", "Broadbeach", "Burleigh Heads", "Robina", "Southport", "Coolangatta", "Hope Island", "Palm Beach", "Nerang", "Helensvale", "Coomera", "Mudgeeraba"].map((s) => (<span key={s} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">{s}</span>))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28"><div className="container max-w-5xl"><div className="grid lg:grid-cols-5 gap-12 lg:gap-20"><div className="lg:col-span-3"><h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Gold Coast SEO: What the Local Market Demands</h2><p className="text-muted-foreground leading-relaxed">The Gold Coast is one of Australia's fastest-growing regions — and one of its most competitive local markets. With over 700,000 residents and 12 million annual visitors, the search landscape blends local residential demand with high-volume tourism intent. Businesses that capture both win the GC market. Our Gold Coast SEO service is built for this unique dual-intent environment.</p><p className="text-muted-foreground leading-relaxed mt-4">Based in Brisbane, we serve the entire South-East Queensland corridor — including our <Link to="/locations/brisbane-seo" className="text-accent font-semibold">Brisbane SEO</Link> and <Link to="/locations/sunshine-coast-seo" className="text-accent font-semibold">Sunshine Coast SEO</Link> services.</p></div><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2"><div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10"><h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>{[{ icon: MapPin, title: "Local Market Expertise", desc: "We understand the GC's unique mix of residential and tourism search demand." }, { icon: Users, title: "Suburb-Level Targeting", desc: "Dedicated landing pages for every suburb you want to rank in." }, { icon: TrendingUp, title: "Sustainable Growth", desc: "Organic rankings compound over time — unlike ads that stop the moment you pause them." }].map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}</div></motion.div></div></div></section>

    <section className="py-20 md:py-28 relative overflow-hidden"><div className="absolute inset-0 pattern-dots" /><div className="container max-w-5xl relative z-10"><SectionHeading eyebrow="What's Included" title="Complete Gold Coast SEO service" /><ul className="grid sm:grid-cols-2 gap-4">{features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}</ul></div></section>

    {/* Related Locations */}
    <section className="surface-warm py-12"><div className="container max-w-5xl"><p className="text-xs font-bold uppercase tracking-widest text-accent mb-6 text-center">Other Locations We Serve</p><div className="flex flex-wrap gap-3 justify-center">{[{ label: "Brisbane SEO", href: "/locations/brisbane-seo" }, { label: "Sydney SEO", href: "/locations/sydney-seo" }, { label: "Melbourne SEO", href: "/locations/melbourne-seo" }, { label: "Sunshine Coast SEO", href: "/locations/sunshine-coast-seo" }, { label: "Perth SEO", href: "/locations/perth-seo" }].map((l) => (<Link key={l.href} to={l.href} className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-border bg-card text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors">{l.label} <ArrowRight className="w-3.5 h-3.5" /></Link>))}</div></div></section>

    <section className="py-20 md:py-28 bg-muted/30"><div className="container max-w-3xl"><SectionHeading eyebrow="FAQs" title="Gold Coast SEO questions answered" /><div className="space-y-4">{faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}</div></div></section>
    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>
    <AIInsightsPanel pageTitle="SEO Gold Coast - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<InsightTable caption="Location Service Data" rows={[{ label: "Service", value: "SEO Agency Gold Coast" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Location", value: "Gold Coast, Queensland, Australia" }, { label: "Coverage", value: "All Gold Coast suburbs and surrounding areas" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Gold Coast SEO Overview" items={["Expert SEO agency serving Gold Coast businesses in all industries.", "Specialises in local SEO, Map Pack rankings, and suburb-level keyword targeting.", "Brisbane-based agency serving the entire Gold Coast and South-East QLD corridor."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "SEO Gold Coast" }, { term: "Coverage", def: "Surfers Paradise, Broadbeach, Burleigh, Robina, Southport, Coolangatta and all GC suburbs" }, { term: "Provider", def: "Next Tab Agency, Brisbane-based" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency is a Brisbane-based SEO agency providing expert SEO services to Gold Coast businesses, specialising in local search, Map Pack rankings, and suburb-level keyword targeting across all Gold Coast suburbs.</p>) },
    ]} />
  </Layout>
);

export default GoldCoastSeo;

