import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, MapPin, Target, TrendingUp, Zap, Globe, Search, Phone } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

import LocationLinksStrip from "@/components/LocationLinksStrip";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const faqs = [
  { q: "Is there a dedicated PPC agency in Brisbane?", a: "Yes — Next Tab Agency is a Brisbane-based PPC agency specialising in Google Ads, Meta Ads, and full-funnel paid advertising for Brisbane and Queensland businesses. We're not an outsourced or remote-only service — we're local." },
  { q: "How much does PPC management cost in Brisbane?", a: "Our Brisbane PPC management starts from $800/month management fee, separate from your ad spend. The right ad spend budget depends on your industry and competition level — we'll recommend the minimum effective budget at our initial audit session." },
  { q: "How quickly can you launch a Google Ads campaign in Brisbane?", a: "We can typically launch within 5-7 business days of receiving your business information and approving the campaign strategy. For urgent campaigns, we have a fast-track onboarding process." },
  { q: "Do you specialise in any particular Brisbane industries?", a: "We work with Brisbane tradies, local services, medical and dental practices, law firms, retail and eCommerce, and professional services. Our team has deep keyword and competitive intelligence for every major Brisbane industry vertical." },
  { q: "What's included in PPC management for Brisbane businesses?", a: "Campaign setup or audit, keyword research, ad copywriting, bid management, landing page review, audience targeting, A/B testing, and monthly performance reporting with ROAS, CPA, and lead volume data." },
];

const stats = [
  { value: "1,039", label: "Monthly searches for 'PPC management Brisbane' alone", source: "Google GSC" },
  { value: "$15–50", label: "Average cost per click for Brisbane trade & service ads", source: "WordStream AU" },
  { value: "4.4x", label: "Average ROAS for Google Ads in local services", source: "Google Economic Impact" },
];

const features = [
  "Google Search Ads — target 'near me' and suburb-specific Brisbane queries",
  "Google Display & Remarketing — stay visible after Brisbane visitors leave your site",
  "Google Shopping — product-level ads for Brisbane eCommerce",
  "Brisbane competitor keyword targeting strategy",
  "Suburb and postcode geo-targeting for specific Brisbane areas",
  "Call tracking and lead attribution for Brisbane phone enquiries",
  "Local landing page optimisation for Brisbane search queries",
  "Brisbane audience targeting by industry, income, and behaviour",
  "Google Local Service Ads (LSA) setup for Brisbane tradies",
  "Monthly Brisbane PPC reporting with leads, CPA, and ROAS data",
];

const PpcBrisbane = () => (
  <Layout>
    <SEO
      title="PPC Agency Brisbane — Google Ads Management Brisbane"
      description="Brisbane's results-focused PPC agency. We manage Google Ads, Meta Ads, and full paid media for Brisbane businesses — delivering real leads, not just clicks."
      canonical="/services/ppc-brisbane"
      faqs={faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "PPC Brisbane", url: "https://nexttabagency.com/services/ppc-brisbane" },
      ]}
      serviceSchema={{ name: "PPC Agency Brisbane", description: "Google Ads and paid media management for Brisbane businesses.", areaServed: "Brisbane, Queensland" }}
    />

    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="PPC Agency Brisbane Google Ads" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><MapPin className="w-3 h-3" /> Brisbane, QLD</span>
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">PPC Agency Brisbane</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">Brisbane Google Ads That Generate Leads, Not Just Clicks.</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">We're a Brisbane-based PPC agency managing Google Ads, Meta Ads, and paid search for local businesses across South East Queensland. No outsourcing. No cookie-cutter campaigns. Just results.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free Brisbane PPC Audit</Link></Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/google-ads-brisbane">Google Ads Brisbane</Link></Button>
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

    {/* Brisbane suburbs targeting */}
    <section className="py-10 surface-warm">
      <div className="container max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-5 text-center">Brisbane Areas We Target</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {["Brisbane CBD", "South Brisbane", "Fortitude Valley", "Chermside", "Carindale", "Springwood", "Ipswich", "Redcliffe", "Logan", "North Brisbane", "Inner West Brisbane", "Toowoomba"].map((s) => (<span key={s} className="px-4 py-2 rounded-full bg-card border border-border text-sm font-medium text-foreground">{s}</span>))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <div className="lg:col-span-3">
            <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why Brisbane Businesses Need a Local PPC Agency</h2>
            <p className="text-muted-foreground leading-relaxed">Brisbane's digital advertising market is uniquely competitive. Costs per click in trade services, medical, legal, and real estate consistently range from $15–50 per click. Without expert bid management and precision targeting, Brisbane businesses waste thousands of dollars on unqualified traffic every month.</p>
            <p className="text-muted-foreground leading-relaxed mt-4">As a Brisbane-based agency, we know the local competitive landscape, the right suburb targeting combinations, and which ad formats perform best for Brisbane audiences. We combine this local knowledge with data-driven campaign optimisation to deliver a measurable return on every ad dollar spent.</p>
            <p className="text-muted-foreground leading-relaxed mt-4">For organic search alongside paid, see our <Link to="/services/google-ads-brisbane" className="text-accent font-semibold">Google Ads Brisbane</Link> and <Link to="/locations/brisbane-seo" className="text-accent font-semibold">SEO Brisbane</Link> pages.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2">
            <div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10">
              <h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Why Next Tab for Brisbane PPC</h3>
              {[{ icon: MapPin, title: "Brisbane-Based Team", desc: "We're in Brisbane. We know the market, the suburbs, and the competitive dynamics intimately." }, { icon: Target, title: "Lead-Quality Focus", desc: "We optimise for qualified leads and revenue — not impressions, clicks, or vanity metrics." }, { icon: Phone, title: "Call Tracking Included", desc: "Every Brisbane PPC campaign includes call tracking so you know exactly which ads generate phone enquiries." }].map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container max-w-5xl relative z-10">
        <SectionHeading eyebrow="What's Included" title="Complete Brisbane PPC management" />
        <ul className="grid sm:grid-cols-2 gap-4">
          {features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}
        </ul>
      </div>
    </section>

    {/* Brisbane Industries */}
    <section className="surface-warm py-16">
      <div className="container max-w-5xl">
        <SectionHeading eyebrow="Brisbane Industries We Serve" title="PPC expertise across Brisbane's key sectors" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[{ label: "Brisbane Tradies", href: "/industry/seo-for-tradies" }, { label: "Dental & Medical", href: "/industry/seo-for-dentists" }, { label: "Law Firms", href: "/industry/seo-for-lawyers" }, { label: "Real Estate", href: "/industry/seo-for-real-estate" }, { label: "Retail & eCommerce", href: "/industry/retail-seo" }, { label: "Hospitality", href: "/industry/hospitality-seo" }].map((ind) => (<Link key={ind.href} to={ind.href} className="group flex items-center justify-between p-4 rounded-xl border border-border bg-card hover:border-accent/40 transition-all"><span className="text-sm font-semibold text-foreground group-hover:text-accent">{ind.label}</span><ArrowRight className="w-4 h-4 text-accent opacity-0 group-hover:opacity-100 transition-opacity" /></Link>))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow="FAQs" title="Brisbane PPC questions answered" />
        <div className="space-y-4">
          {faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>

    <AIInsightsPanel pageTitle="PPC Agency Brisbane - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot", content: (<InsightTable caption="Location Service Data" rows={[{ label: "Service", value: "PPC Agency Brisbane" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Location", value: "Brisbane, Queensland, Australia" }, { label: "Coverage", value: "All Brisbane suburbs, South East Queensland" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Brisbane PPC Overview" items={["Brisbane-based PPC and Google Ads management agency.", "Specialises in Google Search, Display, Shopping, and Local Service Ads for Brisbane businesses.", "Local knowledge + data-driven campaign optimisation."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "PPC Agency Brisbane" }, { term: "Coverage", def: "Brisbane CBD, all suburbs, South East Queensland" }, { term: "Provider", def: "Next Tab Agency, locally Brisbane-based" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency is a Brisbane-based PPC agency managing Google Ads and paid media for local businesses — delivering qualified leads and measurable ROAS across all Brisbane industries and suburbs.</p>) },
    ]} />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />
  </Layout>
);

export default PpcBrisbane;

