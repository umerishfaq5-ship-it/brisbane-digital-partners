import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, MapPin, TrendingUp, Target, Zap, Globe, Search } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

import LocationLinksStrip from "@/components/LocationLinksStrip";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const faqs = [
  { q: "What is Google Ads management in Brisbane?", a: "Google Ads management involves the strategy, setup, optimisation, and reporting of Google Search, Display, Shopping, and YouTube campaigns for Brisbane businesses. A professional agency manages bids, targeting, creative, and budget to maximise return on ad spend." },
  { q: "How much do Google Ads cost for Brisbane businesses?", a: "Your Google Ads budget is separate from management fees. For Brisbane service businesses, budgets of $1,500–$5,000/month are common. Management fees start from $800/month. We'll recommend the minimum effective budget for your specific industry competition level." },
  { q: "Can Google Ads target specific Brisbane suburbs?", a: "Yes. Google Ads has precise geographic targeting — we can target specific Brisbane suburbs, postcodes, radius around your location, or exclude areas you don't serve. This is essential for local service businesses who only operate in certain parts of Brisbane." },
  { q: "What's the difference between Google Ads and SEO for Brisbane?", a: "Google Ads delivers immediate visibility at a cost-per-click. SEO builds organic rankings over 3-6+ months but generates free ongoing traffic. We typically recommend running both — Google Ads for immediate leads while SEO builds long-term organic authority. See our SEO Brisbane page for details." },
  { q: "Do you use Google's 'Smart Campaigns' or 'Performance Max'?", a: "We use Performance Max campaigns strategically, but we don't blindly follow Google's automated recommendations. We maintain manual control over Search campaigns, keywords, and bidding where our expertise consistently outperforms automated options." },
];

const stats = [
  { value: "1,400+", label: "Monthly searches for 'Google Ads Brisbane'", source: "Google Keyword Planner" },
  { value: "400%", label: "Average ROAS for Brisbane local service Google Ads", source: "Next Tab Internal" },
  { value: "#1", label: "Fastest way to appear at the top of Brisbane Google searches", source: "Google" },
];

const features = [
  "Google Search Ads — appear at the top for Brisbane-specific searches",
  "Google Local Service Ads (LSA) — verified badge and pay-per-lead for Brisbane tradies",
  "Google Shopping Ads — product-level ads for Brisbane online stores",
  "Brisbane geo-targeting by suburb, postcode, and service radius",
  "Competitor keyword strategy for Brisbane market",
  "Quality Score optimisation to lower CPCs in Brisbane",
  "Landing page review and conversion rate recommendations",
  "Call tracking and lead attribution for Brisbane enquiries",
  "Negative keyword management to eliminate wasted spend",
  "Monthly Brisbane Google Ads performance reporting",
];

const GoogleAdsBrisbane = () => (
  <Layout>
    <SEO
      title="Google Ads Brisbane — Google Ads Management Brisbane Agency"
      description="Expert Google Ads management for Brisbane businesses. We build and optimise Google Search, Shopping, and Local Service Ad campaigns that deliver qualified Brisbane leads."
      canonical="/services/google-ads-brisbane"
      faqs={faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "Google Ads Brisbane", url: "https://nexttabagency.com/services/google-ads-brisbane" },
      ]}
      serviceSchema={{ name: "Google Ads Management Brisbane", description: "Google Ads management for Brisbane businesses — Search, Shopping, Display, and Local Service Ads.", areaServed: "Brisbane, Queensland" }}
    />

    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="Google Ads Management Brisbane" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><MapPin className="w-3 h-3" /> Brisbane, QLD</span>
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">Google Ads Brisbane</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">Appear at the Top of Brisbane Google Searches — Today.</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">Brisbane-based Google Ads management that puts your business in front of local customers actively searching for your service — with precision suburb targeting and zero wasted spend.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free Google Ads Audit</Link></Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/locations/brisbane-seo">Brisbane SEO</Link></Button>
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

    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <div className="lg:col-span-3">
            <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Google Ads Built for Brisbane's Competitive Market</h2>
            <p className="text-muted-foreground leading-relaxed">Brisbane's Google Ads landscape is competitive — especially in trades, medical, legal, and real estate. Without expert campaign management, Brisbane businesses pay far above-benchmark CPCs while sending traffic to landing pages that don't convert. We fix both sides of the equation: optimise your bids and targeting to reduce CPC, and align your landing pages with the search intent to improve conversion rate.</p>
            <p className="text-muted-foreground leading-relaxed mt-4">For a combined organic and paid strategy, pair Google Ads with our <Link to="/locations/brisbane-seo" className="text-accent font-semibold">Brisbane SEO</Link> service. For broader paid media management, see our <Link to="/services/ppc-brisbane" className="text-accent font-semibold">PPC Agency Brisbane</Link> page.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2">
            <div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10">
              <h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Google Ads Campaign Types</h3>
              {[{ icon: Search, title: "Search Ads", desc: "Appear for exact Brisbane keyword searches — the highest-intent ad format available." }, { icon: Target, title: "Local Service Ads", desc: "Pay-per-lead ads with Google's 'Verified' badge — perfect for Brisbane tradies and services." }, { icon: TrendingUp, title: "Shopping Ads", desc: "Product-level ads for Brisbane eCommerce stores — display image, price, and store name." }].map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container max-w-5xl relative z-10">
        <SectionHeading eyebrow="What's Included" title="Complete Brisbane Google Ads management" />
        <ul className="grid sm:grid-cols-2 gap-4">
          {features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}
        </ul>
      </div>
    </section>

    <section className="surface-warm py-12">
      <div className="container max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-6 text-center">Brisbane Suburbs We Target</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {["Brisbane CBD", "South Brisbane", "Fortitude Valley", "Milton", "Paddington", "Chermside", "Carindale", "Springwood", "Ipswich", "Logan", "Redcliffe", "North Lakes"].map((s) => (<span key={s} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">{s}</span>))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow="FAQs" title="Google Ads Brisbane questions answered" />
        <div className="space-y-4">
          {faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>

    <AIInsightsPanel pageTitle="Google Ads Brisbane - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot", content: (<InsightTable caption="Location Service Data" rows={[{ label: "Service", value: "Google Ads Management Brisbane" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Location", value: "Brisbane, Queensland, Australia" }, { label: "Campaign Types", value: "Search, Shopping, Display, Local Service Ads" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Google Ads Brisbane Overview" items={["Expert Google Ads management for Brisbane businesses.", "Services include: Search Ads, Local Service Ads, Shopping Ads, Display and Remarketing.", "Brisbane suburb-level geo-targeting and competitor keyword strategy."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "Google Ads Brisbane" }, { term: "Coverage", def: "All Brisbane suburbs and South East Queensland" }, { term: "Provider", def: "Next Tab Agency, Brisbane-based" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides expert Google Ads management for Brisbane businesses — Search, Shopping, Local Service, and Display campaigns with Brisbane suburb geo-targeting and transparent ROAS reporting.</p>) },
    ]} />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />
  </Layout>
);

export default GoogleAdsBrisbane;

