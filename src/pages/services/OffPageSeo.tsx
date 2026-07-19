import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, Link2, TrendingUp, Zap, Globe, Search, Shield, ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

import LocationLinksStrip from "@/components/LocationLinksStrip";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "Off-Page SEO",
  headline: "Build the Authority That Makes Rankings Stick.",
  description: "Off-page SEO for Australian businesses that want sustainable rankings — not short-lived spikes. We build genuine authority through editorial backlinks, digital PR, and brand signal acquisition.",
  longDescription: "Off-page SEO encompasses everything that happens outside your own website that signals authority and trust to Google. The most important off-page signal is backlinks — editorial links from other websites that tell Google your content is worth ranking. But off-page SEO in 2026 extends beyond links to include brand mentions, digital PR, social signals, and the growing influence of AI citation (GEO). We build a comprehensive off-page authority profile that creates durable rankings resistant to algorithm updates.",
  features: [
    "Backlink profile audit — identify toxic, weak, and missing links",
    "Competitor backlink gap analysis",
    "Editorial link building through content outreach",
    "Digital PR — earn links from Australian news and media sites",
    "Niche-specific link acquisition (industry directories, associations)",
    "HARO and journalist query response for expert citation",
    "Broken link building opportunities",
    "Guest post strategy on relevant Australian publications",
    "Brand mention monitoring and conversion to links",
    "Internal link architecture aligned with off-page strategy",
    "Disavow file management for toxic backlinks",
    "Monthly backlink reporting (DR, traffic, anchor text distribution)",
  ],
  benefits: [
    { icon: Shield, title: "Durable Rankings", desc: "Authority-backed rankings resist algorithm updates. Pages with strong off-page signals consistently maintain their positions." },
    { icon: ExternalLink, title: "Referral Traffic", desc: "Quality links from relevant sites send direct referral traffic in addition to improving rankings." },
    { icon: TrendingUp, title: "Domain Authority Growth", desc: "Consistent off-page SEO compounds over time — authority earned today protects and amplifies your organic investment for years." },
  ],
  stats: [
    { value: "#1", label: "backlinks remain Google's strongest ranking signal after content quality", source: "Google" },
    { value: "91%", label: "of web pages get zero organic traffic — most due to insufficient backlinks", source: "Ahrefs" },
    { value: "3.8x", label: "more backlinks held by pages ranking in top 3 vs position 10", source: "Backlinko" },
  ],
  faqs: [
    { q: "What is off-page SEO?", a: "Off-page SEO refers to all SEO activities that happen outside your website — primarily building backlinks (links from other sites to yours), but also brand mentions, digital PR, and other authority signals. Google treats backlinks as 'votes' from other websites, with more authoritative sources carrying more weight." },
    { q: "How is off-page SEO different from on-page SEO?", a: "On-page SEO optimises what's on your pages — content, title tags, headings, and schema. Off-page SEO builds external authority signals, primarily backlinks. Both are essential. See our On-Page SEO page for the on-page counterpart." },
    { q: "Are bought or low-quality backlinks safe?", a: "No. Google actively penalises unnatural link schemes. We exclusively build links through legitimate outreach, digital PR, and content-led acquisition. All links earned are editorially placed by real website owners — no paid link networks." },
    { q: "How long does link building take to impact rankings?", a: "New backlinks typically impact rankings within 4-12 weeks as Googlebot discovers and indexes the linking page. Authority accumulation is gradual — a 6-12 month programme produces the most significant and stable ranking movements." },
  ],
};

const OffPageSeo = () => (
  <Layout>
    <SEO
      title="Off-Page SEO Australia — Off-Page SEO Services & Link Building"
      description="Off-page SEO for Australian businesses. We build editorial backlinks, digital PR coverage, and brand authority signals that create durable Google rankings."
      canonical="/services/off-page-seo"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "Off-Page SEO", url: "https://nexttabagency.com/services/off-page-seo" },
      ]}
      serviceSchema={{ name: "Off-Page SEO Services", description: "Off-page SEO, link building, and digital PR for Australian businesses.", areaServed: "Australia" }}
    />
    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="Off-Page SEO Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><Link2 className="w-3 h-3" /> Off-Page SEO</span>
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free Backlink Audit</Link></Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/link-building">Link Building</Link></Button>
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
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <div className="lg:col-span-3">
            <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why Off-Page Authority is Non-Negotiable</h2>
            <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
            <p className="text-muted-foreground leading-relaxed mt-4">Off-page SEO is the authority layer on top of <Link to="/services/on-page-seo" className="text-accent font-semibold">On-Page SEO</Link> and <Link to="/services/technical-seo" className="text-accent font-semibold">Technical SEO</Link>. For link acquisition specifically, see our dedicated <Link to="/services/link-building" className="text-accent font-semibold">Link Building</Link> service page.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="lg:col-span-2">
            <div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10">
              <h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>
              {service.benefits.map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container max-w-5xl relative z-10">
        <SectionHeading eyebrow="What's Included" title="Complete off-page SEO service" />
        <ul className="grid sm:grid-cols-2 gap-4">
          {service.features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}
        </ul>
      </div>
    </section>
    <section className="surface-warm py-16">
      <div className="container max-w-5xl">
        <SectionHeading eyebrow="SEO Layer Comparison" title="Off-page sits on top of a 3-layer system" />
        <div className="grid sm:grid-cols-3 gap-4">
          {[{ label: "Technical SEO", href: "/services/technical-seo", desc: "Crawl, indexation and site speed foundation." }, { label: "On-Page SEO", href: "/services/on-page-seo", desc: "Content, headings, schema — what's on the page." }, { label: "Off-Page SEO", href: "/services/off-page-seo", desc: "Backlinks and authority — what others say about you.", active: true }].map((r) => (<Link key={r.href} to={r.href} className={`group p-5 rounded-xl border transition-all ${r.active ? "border-accent bg-accent/5" : "border-border bg-card hover:border-accent/40"}`}><p className={`font-semibold text-sm mb-1 ${r.active ? "text-accent" : "text-foreground group-hover:text-accent"}`}>{r.label}</p><p className="text-xs text-muted-foreground">{r.desc}</p></Link>))}
        </div>
      </div>
    </section>
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow="FAQs" title="Off-page SEO questions answered" />
        <div className="space-y-4">
          {service.faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}
        </div>
      </div>
    </section>
    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>
    <AIInsightsPanel pageTitle="Off-Page SEO - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "Off-Page SEO Services" }, { label: "Provider", value: "Next Tab Agency Brisbane" }, { label: "Methods", value: "Editorial link building, digital PR, brand signals" }, { label: "Service Area", value: "Australia-wide" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Off-Page SEO Overview" items={["Off-page SEO and link building for Australian businesses.", "Services include: backlink audit, editorial link building, digital PR, brand mention monitoring, and disavow management.", "Builds durable domain authority that compounds over time."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "Off-Page SEO" }, { term: "Focus", def: "Editorial backlinks, digital PR, brand authority" }, { term: "Provider", def: "Next Tab Agency, Brisbane, Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides off-page SEO services for Australian businesses — building editorial backlinks, digital PR coverage, and brand authority signals that create durable Google rankings.</p>) },
    ]} />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />
  </Layout>
);

export default OffPageSeo;

