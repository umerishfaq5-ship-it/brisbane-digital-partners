import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, MapPin, TrendingUp, Users, Zap, Globe, Search, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const stats = [
  { value: "350k+", label: "People living in the City of Logan", source: "ABS" },
  { value: "70", label: "Suburbs across the City of Logan", source: "Logan City Council" },
  { value: "Local", label: "Our office is in Eagleby, Logan", source: "Next Tab Agency" },
];

const suburbs = [
  "Beenleigh", "Eagleby", "Logan Central", "Springwood", "Shailer Park", "Loganholme",
  "Waterford", "Browns Plains", "Slacks Creek", "Underwood", "Daisy Hill", "Bethania",
  "Edens Landing", "Marsden", "Kingston", "Meadowbrook", "Jimboomba", "Yarrabilba",
  "Logan Village", "Yatala",
];

const features = [
  "Logan and Beenleigh keyword research — what your local customers actually type into Google",
  "Google Business Profile setup, verification and weekly optimisation",
  "Suburb pages for the Logan areas you serve (Springwood, Browns Plains, Loganholme and more)",
  "Citations on Australian directories with one consistent name, address and phone",
  "A simple Google review system so happy customers actually leave reviews",
  "Technical SEO fixes: speed, mobile, indexing and broken pages",
  "Local links from Logan business groups, sponsors and suppliers",
  "Call and form tracking so you can see which leads came from Google",
  "Website design and rebuilds for Logan small businesses",
  "Monthly report in plain English — rankings, calls and enquiries",
];

const faqs = [
  { q: "Are you actually based in Logan?", a: "Yes. Next Tab Agency works out of Eagleby in the City of Logan, between Beenleigh and the Gold Coast. We can meet Logan, Beenleigh and Yatala business owners in person, and we know the local market because we live in it." },
  { q: "How long does SEO take for a Logan business?", a: "Most Logan service businesses see Google Maps and ranking improvements within 2–4 months. Competition in Logan is lower than in central Brisbane, so local businesses often see results faster than they would in the CBD." },
  { q: "Do I need SEO or Google Ads?", a: "If you need calls this week, Google Ads is faster. If you want leads that keep coming without paying per click, SEO is better long term. Many Logan businesses start with a small Google Ads budget while SEO builds — we can manage both." },
  { q: "Which Logan suburbs can you help me rank in?", a: "Any suburb you serve — Beenleigh, Springwood, Shailer Park, Loganholme, Browns Plains, Waterford, Logan Central, Jimboomba and more. Google Maps rankings depend on distance, so we build suburb pages and reviews to reach further across Logan." },
  { q: "Do you lock clients into contracts?", a: "No. All our SEO is month-to-month. You stay because the calls and enquiries are coming in, not because of a contract." },
];

const LoganSeo = () => (
  <Layout>
    <SEO
      title="SEO Logan & Beenleigh | Local SEO Agency"
      description="Logan-based SEO and web design for Beenleigh, Eagleby, Springwood and Logan Central businesses. Google Maps rankings, more calls, no lock-in. Free SEO audit."
      canonical="/locations/logan-seo"
      faqs={faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Locations", url: "https://nexttabagency.com/" },
        { name: "Logan SEO", url: "https://nexttabagency.com/locations/logan-seo/" },
      ]}
      serviceSchema={{ name: "SEO Services Logan", description: "Local SEO, Google Business Profile optimisation and web design for businesses in Logan, Beenleigh and surrounding suburbs.", areaServed: "City of Logan, Queensland" }}
    />
    <section aria-labelledby="hero-heading" className="relative min-h-[60vh] flex items-start overflow-hidden pt-16">
      <img src={heroBg} alt="SEO agency in Logan and Beenleigh" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to Home</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><MapPin className="w-3 h-3" /> Eagleby, City of Logan, QLD</span>
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">SEO Logan &amp; Beenleigh</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">Your local SEO team — right here in Logan.</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">We help Logan tradies, clinics, shops and service businesses show up in Google Maps and search results when locals in Beenleigh, Springwood or Browns Plains look for what you do.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact/">Get a Free Logan SEO Audit</Link></Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><a href="tel:+61470400743"><Phone className="w-4 h-4 mr-2" />0470 400 743</a></Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="border-b border-border bg-muted/30 py-8"><div className="container max-w-4xl"><div className="grid grid-cols-3 gap-6 text-center">{stats.map((s) => (<div key={s.label}><p className="font-heading font-black text-3xl text-accent">{s.value}</p><p className="text-sm font-semibold text-foreground mt-1">{s.label}</p><p className="text-xs text-muted-foreground/60">Source: {s.source}</p></div>))}</div></div></section>

    <section className="py-12 surface-warm">
      <div className="container max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-5 text-center">Logan Suburbs We Serve</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {suburbs.map((s) => (<span key={s} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">{s}</span>))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28"><div className="container max-w-5xl"><div className="grid lg:grid-cols-5 gap-12 lg:gap-20"><div className="lg:col-span-3">
      <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why Logan businesses need local SEO</h2>
      <p className="text-muted-foreground leading-relaxed">Logan sits between Brisbane and the Gold Coast along the M1 and Logan Motorway, and it is one of the fastest-growing areas in South East Queensland. New estates in Yarrabilba, Logan Reserve and Jimboomba mean new households searching Google every day for plumbers, electricians, dentists, mechanics, cleaners and childcare.</p>
      <p className="text-muted-foreground leading-relaxed mt-4">Most of those searches end in the Google Map Pack — the three businesses shown on the map. Google picks them by distance, relevance and reviews. That's good news for Logan businesses: you don't have to beat big Brisbane CBD agencies' clients, you have to beat the other businesses near Beenleigh, Springwood or Browns Plains.</p>
      <p className="text-muted-foreground leading-relaxed mt-4">We work from Eagleby, so Logan is our home market. We also cover the wider corridor through our <Link to="/locations/brisbane-seo/" className="text-accent font-semibold">Brisbane SEO</Link> and <Link to="/locations/gold-coast-seo/" className="text-accent font-semibold">Gold Coast SEO</Link> services, and we manage <Link to="/services/ppc-google-ads/" className="text-accent font-semibold">Google Ads</Link> when you need leads faster.</p>
    </div><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2"><div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10"><h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Why a Logan agency</h3>{[{ icon: MapPin, title: "Actually local", desc: "Based in Eagleby — we can meet you in Beenleigh, Logan Central or on site." }, { icon: Users, title: "Built for small business", desc: "Plain-English advice and reporting. No jargon, no lock-in contracts." }, { icon: TrendingUp, title: "Calls, not just rankings", desc: "We track phone calls and enquiries so you can see what Google brings in." }].map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}</div></motion.div></div></div></section>

    <section className="py-20 md:py-28 relative overflow-hidden"><div className="absolute inset-0 pattern-dots" /><div className="container max-w-5xl relative z-10"><SectionHeading eyebrow="What's Included" title="Logan SEO service" /><ul className="grid sm:grid-cols-2 gap-4">{features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}</ul></div></section>

    <section className="surface-warm py-12"><div className="container max-w-5xl"><p className="text-xs font-bold uppercase tracking-widest text-accent mb-6 text-center">Popular Services in Logan</p><div className="flex flex-wrap gap-3 justify-center">{[{ label: "Local SEO", href: "/services/local-seo/" }, { label: "Google Business Profile", href: "/services/google-business-profile/" }, { label: "SEO for Tradies", href: "/industry/seo-for-tradies/" }, { label: "Web Design", href: "/services/web-development/" }, { label: "Google Ads", href: "/services/ppc-google-ads/" }, { label: "SEO Packages", href: "/services/seo-packages/" }].map((l) => (<Link key={l.href} to={l.href} className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-border bg-card text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors">{l.label} <ArrowRight className="w-3.5 h-3.5" /></Link>))}</div></div></section>

    <section className="py-20 md:py-28 bg-muted/30"><div className="container max-w-3xl"><SectionHeading eyebrow="FAQs" title="Logan SEO questions answered" /><div className="space-y-4">{faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}</div></div></section>
    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>
    <AIInsightsPanel pageTitle="SEO Logan & Beenleigh - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<InsightTable caption="Location Service Data" rows={[{ label: "Service", value: "SEO Agency Logan" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Office", value: "Eagleby, City of Logan, QLD 4207" }, { label: "Phone", value: "0470 400 743" }, { label: "Coverage", value: "Beenleigh, Eagleby, Springwood, Logan Central, Browns Plains and all City of Logan suburbs" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Logan SEO Overview" items={["Next Tab Agency is an SEO and web design agency based in Eagleby, in the City of Logan, Queensland.", "Serves Logan, Beenleigh, Springwood, Browns Plains and surrounding suburbs, plus Brisbane and the Gold Coast.", "Month-to-month SEO with no lock-in contracts. Phone 0470 400 743."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "SEO Logan & Beenleigh" }, { term: "Office", def: "Eagleby, City of Logan, QLD 4207" }, { term: "Coverage", def: "All City of Logan suburbs, Yatala and the northern Gold Coast" }, { term: "Contracts", def: "Month-to-month, no lock-in" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency is a Logan-based SEO agency in Eagleby, QLD, helping businesses in Beenleigh, Springwood, Logan Central and surrounding suburbs rank in Google Maps and search results. Call 0470 400 743.</p>) },
    ]} />
  </Layout>
);

export default LoganSeo;
