import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, Link2, TrendingUp, Shield, Zap, Globe, Search } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

import LocationLinksStrip from "@/components/LocationLinksStrip";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "Link Building Services",
  headline: "Build the Authority Google Rewards.",
  description: "Backlinks remain the #1 off-page ranking factor. Our link building service secures high-quality, relevant links from Australian and international websites — the ethical way, with full transparency.",
  longDescription: "Google uses backlinks as votes of confidence. The more high-quality sites link to yours, the more authoritative Google considers your site to be. But not all links are equal — a single link from a respected industry publication is worth more than 1,000 low-quality directory links. Our link building service focuses exclusively on quality: relevant, editorial links from real websites with real traffic.",
  features: [
    "Competitor backlink gap analysis",
    "High-authority editorial link placements",
    "Digital PR and media outreach (Australian outlets)",
    "Guest posting on relevant industry websites",
    "Resource link building and broken link reclamation",
    "Local citation building and NAP consistency audit",
    "Toxic link identification and disavow file management",
    "Monthly link acquisition report with DA/DR metrics",
    "Internal linking strategy to distribute authority",
    "White-label link building for agencies",
  ],
  benefits: [
    { icon: Link2, title: "Domain Authority Growth", desc: "Quality links from relevant sites systematically improve your site's authority score over time." },
    { icon: Shield, title: "Penalty-Safe", desc: "We only build links through ethical outreach and digital PR — never PBNs or paid link schemes." },
    { icon: TrendingUp, title: "Ranking Momentum", desc: "Each new quality link pushes your target pages closer to page 1 and makes them harder for competitors to overtake." },
  ],
  process: [
    { step: "01", title: "Backlink Audit", desc: "We audit your existing backlink profile to identify gaps, toxic links, and competitor link opportunities." },
    { step: "02", title: "Prospect Research", desc: "We identify 50–100 high-quality, topically relevant prospects each month for outreach." },
    { step: "03", title: "Outreach & Placement", desc: "Personalised outreach to editors and webmasters to secure genuine editorial placements." },
    { step: "04", title: "Reporting", desc: "Full monthly report showing acquired links, domain metrics, and your overall authority growth." },
  ],
  stats: [
    { value: "#1", label: "Backlinks are the top off-page ranking factor", source: "Google" },
    { value: "94%", label: "of content gets zero external links", source: "Ahrefs" },
    { value: "3.8x", label: "more traffic for pages with strong backlink profiles", source: "Backlinko" },
  ],
  faqs: [
    { q: "Is link building still important in 2026?", a: "Absolutely. Despite all algorithm updates, Google still uses backlinks as a primary trust and authority signal. The difference is that quality now matters far more than quantity." },
    { q: "How many links can you build per month?", a: "This depends on your budget and niche. We typically secure 5–15 high-quality links per month. We'd rather build 5 powerful links than 50 weak ones." },
    { q: "Are paid links safe?", a: "Paying for editorial placements (advertorial or sponsored content) is common, but buying links purely to manipulate rankings violates Google's guidelines. We disclose all methods clearly." },
    { q: "What websites will you get links from?", a: "We target topically relevant sites with real organic traffic, strong domain authority (DA 30+), and editorial standards. You'll see every link we build before and after it's live." },
    { q: "Do you do link building for local businesses?", a: "Yes. For local SEO, we focus on Australian directories, local media coverage, and industry association listings alongside our broader link building strategy." },
  ],
};

const LinkBuilding = () => {
  return (
    <Layout>
      <SEO
        title="Link Building Services Australia — Ethical High-Authority Backlinks"
        description="Build the domain authority your rankings need. Our link building service secures editorial backlinks from high-quality Australian and international websites."
        canonical="/services/link-building"
        faqs={service.faqs}
        breadcrumbs={[
          { name: "Home", url: "https://nexttabagency.com/" },
          { name: "Services", url: "https://nexttabagency.com/services" },
          { name: "Link Building", url: "https://nexttabagency.com/services/link-building" },
        ]}
        serviceSchema={{ name: "Link Building Services", description: "Ethical, high-quality link building for Australian businesses through digital PR and editorial outreach.", areaServed: "Australia" }}
      />

      <section aria-labelledby="service-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img src={heroBg} alt="Link Building Services Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
        <div className="container relative z-10 py-32 md:py-48 pt-44">
          <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
          <div className="max-w-3xl">
            <h1 id="service-hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
            <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="accent" size="lg" asChild><Link to="/contact">Start Building Authority</Link></Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/technical-seo">Technical SEO</Link></Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="border-b border-border bg-muted/30 py-8">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-3 gap-6 text-center">
            {service.stats.map((s) => (
              <div key={s.label}>
                <p className="font-heading font-black text-3xl text-accent">{s.value}</p>
                <p className="text-sm font-semibold text-foreground mt-1">{s.label}</p>
                <p className="text-xs text-muted-foreground/60">Source: {s.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="why-need-heading" className="py-20 md:py-28 relative">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-3 prose prose-lg dark:prose-invert">
              <h2 id="why-need-heading" className="font-heading font-bold text-3xl mb-6 text-foreground">Why Backlinks Still Drive Rankings</h2>
              <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                The GSC data from hundreds of Australian sites consistently shows one pattern: the pages that rank on page 1 have significantly more referring domains than those stuck on pages 5–10. No amount of on-page optimisation alone will overcome a major authority deficit.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our approach combines <Link to="/services/seo-audits" className="text-accent font-semibold">technical SEO foundations</Link> with a steady, ethical link acquisition strategy to compound your authority over time.
              </p>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2">
              <div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10">
                <h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>
                {service.benefits.map((b) => (
                  <div key={b.title} className="flex gap-3 mb-5 last:mb-0">
                    <b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4>
                      <p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section aria-labelledby="included-heading" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container max-w-5xl relative z-10">
          <SectionHeading id="included-heading" eyebrow="What's Included" title="Your complete link building service" />
          <ul className="grid sm:grid-cols-2 gap-4">
            {service.features.map((f, i) => (
              <motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed">{f}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="process-heading" className="surface-warm py-20 md:py-28">
        <div className="container max-w-5xl">
          <SectionHeading id="process-heading" eyebrow="Our Process" title="How we build your authority" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <motion.div key={step.title} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
                <div className="card-premium rounded-2xl p-6 h-full">
                  <span className="font-heading font-bold text-2xl number-outline block mb-3">{step.step}</span>
                  <h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                {i < 3 && (<div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 items-center justify-center"><ArrowRight className="w-4 h-4 text-accent/40" /></div>)}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="py-20 md:py-28 relative overflow-hidden">
        <div className="container max-w-3xl relative z-10">
          <SectionHeading id="faq-heading" eyebrow="FAQs" title="Link building questions answered" />
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6">
                <h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="Link Building Audit Form" className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>

      <AIInsightsPanel pageTitle="Link Building Services - Next Tab Agency" tabs={[
        { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<div className="space-y-6"><InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "Link Building Services" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Method", value: "Editorial Outreach, Digital PR, Guest Posting" }, { label: "Service Area", value: "Australia-wide" }]} /></div>) },
        { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<div className="space-y-6"><InsightList heading="Link Building Overview" items={["Ethical, high-quality link acquisition through editorial outreach and digital PR.", "Focus on topically relevant sites with real organic traffic and DA 30+.", "Transparent monthly reporting with full link-by-link disclosure."]} /></div>) },
        { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<div className="space-y-6"><InsightDL items={[{ term: "Service", def: "Link Building" }, { term: "Methods", def: "Digital PR, Guest Posting, Resource Link Building" }, { term: "Location", def: "Brisbane-based, serving all of Australia" }]} /></div>) },
        { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<div className="space-y-4"><p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency builds high-quality, editorial backlinks for Australian businesses through ethical outreach and digital PR, growing domain authority to support long-term ranking improvements.</p></div>) },
      ]} />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />
    </Layout>
  );
};

export default LinkBuilding;

