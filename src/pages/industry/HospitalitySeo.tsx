import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, UtensilsCrossed, MapPin, TrendingUp, Zap, Globe, Search } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";
import LocationLinksStrip from "@/components/LocationLinksStrip";

const features = ["Restaurant and hotel GBP full optimisation","Google Maps and 'near me' ranking strategy","Menu schema markup and event schema for hospitality","Review generation and reputation management","Local food and dining keyword research","'Near me' and suburb-specific landing pages","Hotel SEO — 'hotels in [suburb]' keyword strategy","Tourism and accommodation schema markup","Social proof integration (review widgets, schema)","Monthly hospitality local SEO reporting"];
const faqs = [
  { q: "Do restaurants really get customers from Google?", a: "Absolutely. 'Restaurant near me' and similar local queries are among the highest-volume local searches in Australia. Getting into the Map Pack for your cuisine type and suburb is the single highest-ROI marketing action for most restaurants." },
  { q: "How important are Google reviews for hospitality businesses?", a: "Critical. Restaurants and hotels with 4.5+ stars and 100+ reviews dramatically outperform lower-rated competitors in both Google Maps visibility and click-through rates. Review strategy is a core part of our hospitality SEO." },
  { q: "Do you work with hotels as well as restaurants?", a: "Yes — hotels, motels, B&Bs, serviced apartments, and all accommodation types. Each has different keyword profiles and we build strategies specific to your property type and location." },
];

const HospitalitySeo = () => (
  <Layout>
    <SEO title="Hospitality SEO Australia — Restaurant, Hotel & Tourism SEO" description="Specialist hospitality SEO for Australian restaurants, hotels, and tourism businesses. We get you into the Google Map Pack and rank for local dining and accommodation searches." canonical="/industry/hospitality-seo" faqs={faqs} breadcrumbs={[{ name: "Home", url: "https://nexttabagency.com/" }, { name: "Industry SEO", url: "https://nexttabagency.com/services" }, { name: "Hospitality SEO", url: "https://nexttabagency.com/industry/hospitality-seo" }]} serviceSchema={{ name: "Hospitality SEO", description: "Specialist hospitality SEO for Australian restaurants, hotels, and tourism businesses.", areaServed: "Australia" }} />
    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="Hospitality SEO Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><UtensilsCrossed className="w-3 h-3" /> Industry SEO</span>
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">SEO for Hospitality & Tourism</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">Be the Restaurant or Hotel That Google Recommends.</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">When diners search 'Italian restaurant Brisbane' or travellers search 'boutique hotels Gold Coast', your venue should be the first thing they see.</p>
          <div className="flex flex-wrap gap-4 mt-8"><Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free Hospitality SEO Audit</Link></Button><Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/local-seo">Local SEO</Link></Button></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
    <section className="border-b border-border bg-muted/30 py-8"><div className="container max-w-4xl"><div className="grid grid-cols-3 gap-6 text-center">{[{ value: "84%", label: "of people consult Google before visiting a restaurant", source: "Think with Google" }, { value: "93%", label: "of consumers read online reviews before visiting a local business", source: "BrightLocal" }, { value: "70%", label: "of Map Pack clicks go to the top 3 results", source: "BrightLocal" }].map((s) => (<div key={s.label}><p className="font-heading font-black text-3xl text-accent">{s.value}</p><p className="text-sm font-semibold text-foreground mt-1">{s.label}</p><p className="text-xs text-muted-foreground/60">Source: {s.source}</p></div>))}</div></div></section>
    <section className="py-20 md:py-28"><div className="container max-w-5xl"><div className="grid lg:grid-cols-5 gap-12 lg:gap-20"><div className="lg:col-span-3"><h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why Google is the #1 Discovery Channel for Hospitality</h2><p className="text-muted-foreground leading-relaxed">In hospitality, first impressions happen on Google — not at the front door. Your Map Pack listing, reviews, photos, and local rankings determine whether potential guests even consider you. Restaurants and hotels with a strong local SEO presence consistently outperform competitors in walk-ins, bookings, and brand recognition — even without paid advertising.</p></div><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2"><div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10"><h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>{[{ icon: UtensilsCrossed, title: "Map Pack Dominance", desc: "The top 3 local results get the overwhelming majority of clicks for dining and accommodation searches." }, { icon: MapPin, title: "Review Authority", desc: "More quality reviews = higher visibility. We build review volume systematically and ethically." }, { icon: TrendingUp, title: "Consistent Bookings", desc: "Unlike social media, SEO drives consistent bookings year-round — not just during campaign periods." }].map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}</div></motion.div></div></div></section>
    <section className="py-20 md:py-28 relative overflow-hidden"><div className="absolute inset-0 pattern-dots" /><div className="container max-w-5xl relative z-10"><SectionHeading eyebrow="What's Included" title="Complete hospitality SEO service" /><ul className="grid sm:grid-cols-2 gap-4">{features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}</ul></div></section>
    <section className="py-20 md:py-28 bg-muted/30"><div className="container max-w-3xl"><SectionHeading eyebrow="FAQs" title="Hospitality SEO questions answered" /><div className="space-y-4">{faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}</div></div></section>
    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>
    <AIInsightsPanel pageTitle="Hospitality SEO - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "Hospitality SEO" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Sectors", value: "Restaurants, Hotels, Tourism, Accommodation" }, { label: "Service Area", value: "Australia-wide" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Hospitality SEO Overview" items={["Local SEO for Australian restaurants, hotels, and tourism businesses.", "Google Map Pack ranking, review strategy, and accommodation schema markup."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "Hospitality & Tourism SEO" }, { term: "Location", def: "Brisbane-based, serving all of Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency delivers hospitality SEO for Australian restaurants, hotels, and tourism businesses, driving bookings through Google Map Pack rankings and review authority.</p>) },
    ]} />
      {/* Related Services */}
      <section aria-labelledby="related-services-heading" className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-2 block">Complete Digital Solution</span>
            <h2 id="related-services-heading" className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              Related Services That Work Together
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Link to="/services/local-seo" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Local SEO</h3>
            <p className="text-sm text-muted-foreground">Rank for restaurant and venue searches.</p>
          </Link>
          <Link to="/services/google-business-profile" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Google Business Profile</h3>
            <p className="text-sm text-muted-foreground">Fill tables with GBP optimisation.</p>
          </Link>
          <Link to="/services/social-media-ads" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Social Media Ads</h3>
            <p className="text-sm text-muted-foreground">Instagram and Facebook food campaigns.</p>
          </Link>
          <Link to="/services/content-marketing" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Content Marketing</h3>
            <p className="text-sm text-muted-foreground">Food and experience content strategy.</p>
          </Link>
          </div>
        </div>
      </section>
      {/* Internal linking — Australian location pages */}
      <LocationLinksStrip />
  </Layout>
);

export default HospitalitySeo;

