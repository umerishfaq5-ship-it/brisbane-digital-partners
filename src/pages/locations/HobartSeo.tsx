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
  { value: "240k+", label: "Greater Hobart population and growing", source: "ABS 2026" },
  { value: "Low", label: "SEO competition vs mainland capitals — big opportunity", source: "Next Tab Internal" },
  { value: "1.3M+", label: "Annual visitors to Tasmania", source: "Tourism Tasmania" },
];

const features = [
  "Hobart keyword research and local competitor analysis",
  "Google Business Profile optimisation for Hobart businesses",
  "Suburb-level landing pages (CBD, Sandy Bay, Salamanca, North Hobart, etc.)",
  "Local citation building in Tasmanian business directories",
  "Tourism and hospitality SEO for Tasmanian operators",
  "Map Pack ranking strategy for Hobart search queries",
  "Technical SEO audit and Core Web Vitals improvement",
  "Link building with Tasmanian media and directories",
  "Content strategy targeting Hobart and Tasmanian search demand",
  "Monthly Hobart SEO performance reporting",
];

const faqs = [
  { q: "Is there enough search volume in Hobart to justify SEO?", a: "Yes. While Hobart has lower absolute search volume than Sydney or Melbourne, it also has significantly less competition. Businesses typically rank faster and at lower cost. The ROI per dollar spent on Hobart SEO is often superior to the major metros." },
  { q: "What industries do you specialise in for Hobart?", a: "Hospitality, tourism, retail, trades, professional services, and real estate are the dominant industries in Hobart. We have deep keyword and content experience across all of these sectors." },
  { q: "Can you help Hobart businesses rank for both local and tourist searches?", a: "Absolutely. Tasmania's visitor economy is substantial. We build strategies that capture both local residential search demand and high-intent tourist searches — two quite different keyword profiles that we target simultaneously." },
  { q: "Do you need to be physically in Hobart to do SEO for Hobart businesses?", a: "No. SEO is a remote service. Our Brisbane-based team has delivered results for clients across all Australian states and territories. We have the same tools, data, and capabilities for any location." },
];

const HobartSeo = () => (
  <Layout>
    <SEO
      title="SEO Hobart — SEO Agency for Hobart & Tasmania Businesses"
      description="Expert SEO agency for Hobart and Tasmanian businesses. We rank Hobart companies on Google with local SEO, Map Pack strategy, and suburb-level keyword targeting."
      canonical="/locations/hobart-seo"
      faqs={faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Locations", url: "https://nexttabagency.com/" },
        { name: "Hobart SEO", url: "https://nexttabagency.com/locations/hobart-seo" },
      ]}
      serviceSchema={{ name: "SEO Services Hobart", description: "Expert SEO services for Hobart and Tasmanian businesses — local SEO, Map Pack rankings, and suburb-level keyword strategy.", areaServed: "Hobart, Tasmania" }}
    />
    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="SEO Agency Hobart Tasmania" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><MapPin className="w-3 h-3" /> Hobart, TAS</span>
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">SEO Agency Hobart</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">Less Competition. Faster Rankings. More Hobart Customers.</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">Hobart businesses have a unique advantage: the SEO landscape is far less competitive than mainland capitals. Act now to build rankings that dominate for years.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free Hobart SEO Audit</Link></Button>
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
          {["Hobart CBD", "Sandy Bay", "Salamanca", "North Hobart", "Glenorchy", "Moonah", "Kingston", "Bellerive", "Lindisfarne", "Launceston", "Devonport", "Burnie"].map((s) => (
            <span key={s} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">{s}</span>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <div className="lg:col-span-3">
            <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why Hobart Businesses Should Invest in SEO Now</h2>
            <p className="text-muted-foreground leading-relaxed">Hobart's SEO landscape is a rare opportunity. While mainland capitals like Sydney and Melbourne are saturated with SEO competition, Hobart businesses can often reach page 1 in 60–90 days rather than 6–12 months. The businesses that invest now will build rankings that become extremely difficult for competitors to displace — at significantly lower cost than comparable mainland campaigns.</p>
            <p className="text-muted-foreground leading-relaxed mt-4">We also serve all of regional Tasmania — Launceston, Devonport, and Burnie — with the same local SEO approach we apply to Hobart businesses.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2">
            <div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10">
              <h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>
              {[{ icon: MapPin, title: "Less Competition", desc: "Hobart SEO is significantly less contested than mainland capitals — faster rankings, lower cost." }, { icon: Users, title: "Tourism + Local Targeting", desc: "We capture both Hobart locals and the 1.3M+ annual Tasmanian visitors simultaneously." }, { icon: TrendingUp, title: "First-Mover Advantage", desc: "Build rankings now before the Hobart SEO landscape becomes as contested as the mainland." }].map((b) => (
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
        <SectionHeading eyebrow="What's Included" title="Complete Hobart SEO service" />
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
          {[{ label: "Brisbane SEO", href: "/locations/brisbane-seo" }, { label: "Gold Coast SEO", href: "/locations/gold-coast-seo" }, { label: "Sydney SEO", href: "/locations/sydney-seo" }, { label: "Melbourne SEO", href: "/locations/melbourne-seo" }, { label: "Adelaide SEO", href: "/locations/adelaide-seo" }].map((l) => (
            <Link key={l.href} to={l.href} className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-border bg-card text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors">{l.label} <ArrowRight className="w-3.5 h-3.5" /></Link>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow="FAQs" title="Hobart SEO questions answered" />
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

    <AIInsightsPanel pageTitle="SEO Hobart - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<InsightTable caption="Location Service Data" rows={[{ label: "Service", value: "SEO Agency Hobart" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Location", value: "Hobart, Tasmania, Australia" }, { label: "Coverage", value: "All Hobart suburbs, Launceston, Devonport, Burnie and regional TAS" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Hobart SEO Overview" items={["Expert SEO agency serving Hobart and Tasmania businesses in all industries.", "Less competitive market than mainland capitals — faster rankings at lower cost.", "Captures both local residential and high-intent tourist search demand."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "SEO Hobart" }, { term: "Coverage", def: "Hobart CBD, Sandy Bay, Salamanca, North Hobart, Glenorchy, Kingston, Launceston and all of Tasmania" }, { term: "Provider", def: "Next Tab Agency, Brisbane-based" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides expert SEO services to Hobart and Tasmanian businesses, taking advantage of the less competitive local market to deliver faster rankings at a lower cost than mainland SEO campaigns.</p>) },
    ]} />
  </Layout>
);

export default HobartSeo;

