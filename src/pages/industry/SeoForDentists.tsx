import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, Heart, Star, TrendingUp, Zap, Globe, Search } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";
import LocationLinksStrip from "@/components/LocationLinksStrip";

const service = {
  title: "SEO for Dentists",
  headline: "Fill Your Appointment Book With Patients From Google.",
  description: "Every day, thousands of Australians search for a new dentist. Most never scroll past the first three results. Our dental SEO service puts your practice there — and keeps it there.",
  longDescription: "Dental practices depend on local patient acquisition. Unlike many industries, dentistry is a true local business — patients won't travel more than 15–20 minutes for routine care. This makes Google Map Pack dominance and local keyword rankings the single most important digital marketing strategy for dental clinics. Our dental SEO service is built specifically for this: suburb-level targeting, GBP optimisation, and review strategy to maximise new patient bookings.",
  features: [
    "Google Business Profile full optimisation for dental practices",
    "Suburb-level local SEO (e.g. 'dentist Paddington Brisbane')",
    "Service-specific landing pages (teeth whitening, orthodontics, Invisalign, etc.)",
    "Patient review generation and reputation management",
    "Dental schema markup (MedicalBusiness, Service, Review)",
    "Competitor local ranking analysis",
    "Before/after gallery SEO and image alt text strategy",
    "AHPRA-compliant content creation",
    "Dental blog content strategy for topical authority",
    "Google Ads integration support for dual search coverage",
  ],
  benefits: [
    { icon: Heart, title: "New Patient Bookings", desc: "SEO targets patients actively searching for a dentist right now — the highest-intent audience available." },
    { icon: Star, title: "Review Dominance", desc: "Practices with more 5-star reviews get more Map Pack clicks. We build your review volume systematically." },
    { icon: TrendingUp, title: "Long-Term Practice Growth", desc: "A new patient retained over 10 years is worth $15,000+. The ROI on SEO for dentists is extraordinary." },
  ],
  process: [
    { step: "01", title: "Practice Audit", desc: "Audit your GBP, website, and local rankings against competitor dental practices in your area." },
    { step: "02", title: "Local Strategy", desc: "Map every suburb you want to serve to specific landing pages and GBP keyword targets." },
    { step: "03", title: "Reviews & GBP", desc: "Implement review generation system and fully optimise GBP with photos, posts, and Q&As." },
    { step: "04", title: "Content & Authority", desc: "Build service pages and educational content that establishes you as the trusted local dental authority." },
  ],
  stats: [
    { value: "77%", label: "of patients research a dentist online before booking", source: "Think with Google" },
    { value: "$15k+", label: "lifetime patient value for a retained dental patient", source: "Dental Economics" },
    { value: "4.5x", label: "more bookings for practices in the Google Map Pack", source: "BrightLocal" },
  ],
  faqs: [
    { q: "Does dental SEO work for private practices vs corporates?", a: "Absolutely — private practices that invest in local SEO regularly outperform corporate chains in local search results because they can be more nimble and authentic in their content and review strategy." },
    { q: "How do you handle AHPRA advertising guidelines?", a: "All our dental content is written to comply with AHPRA's advertising guidelines — no testimonials used as endorsements, no misleading claims, no guarantee language. You review all content before publishing." },
    { q: "Can you create service pages for specific treatments?", a: "Yes — we create individual optimised pages for each service (Invisalign, teeth whitening, dental implants, etc.) because each has distinct keyword demand and patient intent." },
    { q: "My Google reviews are low. Can you help?", a: "Yes. Review generation is a core part of our dental SEO service. We implement a systematic approach to requesting reviews from satisfied patients — ethically and in line with Google's policies." },
  ],
};

const SeoForDentists = () => (
  <Layout>
    <SEO
      title="SEO for Dentists Australia — Get More Dental Patients From Google"
      description="Specialist dental SEO for Australian dentists and clinics. We get dental practices into the Google Map Pack and rank service pages to drive new patient bookings."
      canonical="/industry/seo-for-dentists"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Industry SEO", url: "https://nexttabagency.com/services" },
        { name: "SEO for Dentists", url: "https://nexttabagency.com/industry/seo-for-dentists" },
      ]}
      serviceSchema={{ name: "SEO for Dentists", description: "Specialist dental SEO for Australian practices — local SEO, GBP optimisation, and patient booking growth.", areaServed: "Australia" }}
    />
    <section aria-labelledby="service-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="SEO for Dentists Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><Heart className="w-3 h-3" /> Industry SEO</span>
          <h1 id="service-hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free Dental SEO Audit</Link></Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/local-seo">Local SEO</Link></Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="border-b border-border bg-muted/30 py-8"><div className="container max-w-4xl"><div className="grid grid-cols-3 gap-6 text-center">{service.stats.map((s) => (<div key={s.label}><p className="font-heading font-black text-3xl text-accent">{s.value}</p><p className="text-sm font-semibold text-foreground mt-1">{s.label}</p><p className="text-xs text-muted-foreground/60">Source: {s.source}</p></div>))}</div></div></section>

    <section className="py-20 md:py-28"><div className="container max-w-5xl"><div className="grid lg:grid-cols-5 gap-12 lg:gap-20"><div className="lg:col-span-3"><h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why Local SEO is the #1 Growth Strategy for Dental Practices</h2><p className="text-muted-foreground leading-relaxed">{service.longDescription}</p></div><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2"><div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10"><h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>{service.benefits.map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}</div></motion.div></div></div></section>

    <section className="py-20 md:py-28 relative overflow-hidden"><div className="absolute inset-0 pattern-dots" /><div className="container max-w-5xl relative z-10"><SectionHeading eyebrow="What's Included" title="Complete dental SEO service" /><ul className="grid sm:grid-cols-2 gap-4">{service.features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}</ul></div></section>

    <section className="surface-warm py-20 md:py-28"><div className="container max-w-5xl"><SectionHeading eyebrow="Our Process" title="How we fill your appointment book" /><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{service.process.map((step, i) => (<motion.div key={step.title} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative"><div className="card-premium rounded-2xl p-6 h-full"><span className="font-heading font-bold text-2xl number-outline block mb-3">{step.step}</span><h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{step.title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p></div>{i < 3 && (<div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 items-center justify-center"><ArrowRight className="w-4 h-4 text-accent/40" /></div>)}</motion.div>))}</div></div></section>

    <section className="py-20 md:py-28 bg-muted/30"><div className="container max-w-3xl"><SectionHeading eyebrow="FAQs" title="Dental SEO questions answered" /><div className="space-y-4">{service.faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}</div></div></section>

    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>
    <AIInsightsPanel pageTitle="SEO for Dentists - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "SEO for Dentists" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Service Area", value: "Australia-wide" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Dental SEO Overview" items={["Specialist SEO for Australian dental practices — local SEO, GBP, and new patient acquisition.", "AHPRA-compliant content strategy and review generation included."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "SEO for Dentists" }, { term: "Location", def: "Brisbane-based, serving all of Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides specialist dental SEO for Australian practices, driving new patient bookings through Google Map Pack rankings, service-specific landing pages, and review strategy.</p>) },
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
            <p className="text-sm text-muted-foreground">Rank for 'dentist near me' in your suburb.</p>
          </Link>
          <Link to="/services/google-business-profile" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Google Business Profile</h3>
            <p className="text-sm text-muted-foreground">Fill your appointment books via GBP.</p>
          </Link>
          <Link to="/services/facebook-ads" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Facebook Ads</h3>
            <p className="text-sm text-muted-foreground">Attract new patients with targeted ads.</p>
          </Link>
          <Link to="/services/web-development" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Web Development</h3>
            <p className="text-sm text-muted-foreground">A website that converts visitors to bookings.</p>
          </Link>
          </div>
        </div>
      </section>
      {/* Internal linking — Australian location pages */}
      <LocationLinksStrip />
  </Layout>
);

export default SeoForDentists;

