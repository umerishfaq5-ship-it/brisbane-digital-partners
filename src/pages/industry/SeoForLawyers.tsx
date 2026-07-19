import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, Scale, Users, TrendingUp, Zap, Globe, Search } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";
import LocationLinksStrip from "@/components/LocationLinksStrip";

const service = {
  title: "SEO for Lawyers",
  headline: "Rank #1 for the Searches That Drive Clients to Your Firm.",
  description: "Legal searches have the highest CPCs of any industry — and that means the organic rankings are pure gold. We specialise in law firm SEO that drives qualified client enquiries without paying $80+ per click.",
  longDescription: "Law firm SEO is one of the most competitive and highest-value SEO markets in Australia. Keywords like 'personal injury lawyer Brisbane' or 'family law solicitor Sydney' carry extraordinary commercial intent — searchers are ready to hire. The firms that capture these organic rankings build a client pipeline that compounds year over year, dramatically reducing dependence on expensive Google Ads.",
  features: [
    "Law firm technical SEO audit and keyword strategy",
    "Practice area page creation and optimisation",
    "Local SEO and Google Business Profile for each office location",
    "Attorney/lawyer schema markup and E-E-A-T strategy",
    "Legal directory listings (Law Society, Justia, Findlaw)",
    "Thought-leadership blog content strategy",
    "Competitor ranking gap analysis for key practice areas",
    "Review and reputation management strategy",
    "City + practice area landing pages (e.g. 'family lawyer Brisbane')",
    "Monthly legal SEO performance reporting",
  ],
  benefits: [
    { icon: Scale, title: "High-Value Keyword Rankings", desc: "Legal keywords convert at extraordinarily high rates. One first-page ranking can be worth hundreds of thousands in annual fees." },
    { icon: Users, title: "Qualified Client Enquiries", desc: "People searching for legal help are ready to act. Our SEO targets searchers at the exact moment of intent." },
    { icon: TrendingUp, title: "Sustainable Client Pipeline", desc: "Unlike ads, organic rankings compound. Year 2 clients cost a fraction of Year 1 as authority builds." },
  ],
  process: [
    { step: "01", title: "Practice Area Audit", desc: "Map every practice area to target keywords and assess current ranking gaps vs. competitor firms." },
    { step: "02", title: "Page Architecture", desc: "Build a landing page structure covering every practice area and city you want to dominate." },
    { step: "03", title: "Authority Building", desc: "Legal directory links, editorial placements, and E-E-A-T content to establish your firm as the trusted authority." },
    { step: "04", title: "Reporting", desc: "Monthly report showing keyword rankings, enquiry growth, and ROI attribution per practice area." },
  ],
  stats: [
    { value: "$80+", label: "Average CPC for legal keywords in Australia", source: "Google Ads" },
    { value: "72%", label: "of people use Google to find a lawyer", source: "Clio Legal Trends" },
    { value: "96%", label: "of legal searches click an organic result", source: "BrightEdge" },
  ],
  faqs: [
    { q: "How long does it take for law firm SEO to work?", a: "Law firm SEO in competitive markets takes 6–12 months to see significant results. However, less competitive practice areas or regional markets can move much faster. We set realistic expectations upfront." },
    { q: "Do I need separate pages for each practice area?", a: "Yes. A single 'services' page cannot rank for every practice area simultaneously. Dedicated pages for each practice area and location are essential for competitive rankings." },
    { q: "Does my law firm need a blog?", a: "Blogging significantly expands your keyword coverage and helps establish E-E-A-T (Expertise, Experience, Authority, Trust) — a critical ranking factor for legal and medical sites. We provide content strategy and briefs." },
    { q: "Can you help with Legal Professional Association compliance in content?", a: "Our content follows ethical guidelines and avoids any claims that could violate professional standards. You review all content before it's published." },
  ],
};

const SeoForLawyers = () => (
  <Layout>
    <SEO
      title="SEO for Lawyers Australia — Law Firm SEO That Drives Client Enquiries"
      description="Specialist law firm SEO for Australian lawyers and solicitors. We rank your practice areas on page 1 of Google to build a consistent pipeline of qualified client enquiries."
      canonical="/industry/seo-for-lawyers"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Industry SEO", url: "https://nexttabagency.com/services" },
        { name: "SEO for Lawyers", url: "https://nexttabagency.com/industry/seo-for-lawyers" },
      ]}
      serviceSchema={{ name: "SEO for Lawyers", description: "Specialist law firm SEO for Australian lawyers — practice area pages, local SEO, and E-E-A-T strategy.", areaServed: "Australia" }}
    />
    <section aria-labelledby="service-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="SEO for Lawyers Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><Scale className="w-3 h-3" /> Industry SEO</span>
          <h1 id="service-hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free Law Firm SEO Audit</Link></Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/local-seo">Local SEO</Link></Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="border-b border-border bg-muted/30 py-8"><div className="container max-w-4xl"><div className="grid grid-cols-3 gap-6 text-center">{service.stats.map((s) => (<div key={s.label}><p className="font-heading font-black text-3xl text-accent">{s.value}</p><p className="text-sm font-semibold text-foreground mt-1">{s.label}</p><p className="text-xs text-muted-foreground/60">Source: {s.source}</p></div>))}</div></div></section>

    <section className="py-20 md:py-28"><div className="container max-w-5xl"><div className="grid lg:grid-cols-5 gap-12 lg:gap-20"><div className="lg:col-span-3"><h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why Law Firm SEO Has the Highest ROI in Digital Marketing</h2><p className="text-muted-foreground leading-relaxed">{service.longDescription}</p></div><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2"><div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10"><h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>{service.benefits.map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}</div></motion.div></div></div></section>

    <section className="py-20 md:py-28 relative overflow-hidden"><div className="absolute inset-0 pattern-dots" /><div className="container max-w-5xl relative z-10"><SectionHeading eyebrow="What's Included" title="Complete law firm SEO service" /><ul className="grid sm:grid-cols-2 gap-4">{service.features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}</ul></div></section>

    <section className="surface-warm py-20 md:py-28"><div className="container max-w-5xl"><SectionHeading eyebrow="Our Process" title="How we build your legal client pipeline" /><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{service.process.map((step, i) => (<motion.div key={step.title} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative"><div className="card-premium rounded-2xl p-6 h-full"><span className="font-heading font-bold text-2xl number-outline block mb-3">{step.step}</span><h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{step.title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p></div>{i < 3 && (<div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 items-center justify-center"><ArrowRight className="w-4 h-4 text-accent/40" /></div>)}</motion.div>))}</div></div></section>

    <section className="py-20 md:py-28 bg-muted/30"><div className="container max-w-3xl"><SectionHeading eyebrow="FAQs" title="Law firm SEO questions answered" /><div className="space-y-4">{service.faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}</div></div></section>

    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>
    <AIInsightsPanel pageTitle="SEO for Lawyers - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "SEO for Lawyers / Law Firm SEO" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Service Area", value: "Australia-wide" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Law Firm SEO Overview" items={["Specialist law firm SEO for Australian lawyers — practice area pages, local SEO, and E-E-A-T strategy.", "Targets high-value legal keywords to drive qualified client enquiries without costly PPC."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "SEO for Lawyers / Law Firms" }, { term: "Location", def: "Brisbane-based, serving all of Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides specialist law firm SEO for Australian lawyers and solicitors, ranking practice area pages to build a sustainable organic client enquiry pipeline.</p>) },
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
            <p className="text-sm text-muted-foreground">Rank for high-intent legal search terms.</p>
          </Link>
          <Link to="/services/content-marketing" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Content Marketing</h3>
            <p className="text-sm text-muted-foreground">E-E-A-T legal content that Google trusts.</p>
          </Link>
          <Link to="/services/technical-seo" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Technical SEO</h3>
            <p className="text-sm text-muted-foreground">Site speed and structure audits.</p>
          </Link>
          <Link to="/services/google-business-profile" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Google Business Profile</h3>
            <p className="text-sm text-muted-foreground">Win the Map Pack for your legal practice.</p>
          </Link>
          </div>
        </div>
      </section>
      {/* Internal linking — Australian location pages */}
      <LocationLinksStrip />
  </Layout>
);

export default SeoForLawyers;

