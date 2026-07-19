import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, ShoppingCart, TrendingUp, Settings, Zap, Globe, Search } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

import LocationLinksStrip from "@/components/LocationLinksStrip";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "WooCommerce SEO Services",
  headline: "Turn Your WooCommerce Store Into an Organic Revenue Engine.",
  description: "WooCommerce gives you unmatched SEO flexibility — but only if it's configured correctly. We unlock the full ranking potential of your WooCommerce store with technical precision and content strategy.",
  longDescription: "WooCommerce, built on WordPress, offers the most powerful SEO customisation of any eCommerce platform. Unlike Shopify, you control every URL, every meta tag, and every line of code. But this power comes with complexity — most WooCommerce stores are riddled with duplicate content, slow page speeds, and poor product architecture. Our WooCommerce SEO service fixes all of this, then builds the content and authority strategy to push you onto page 1.",
  features: [
    "WooCommerce technical SEO audit (crawl, indexation, speed)",
    "Product and category URL structure optimisation",
    "Duplicate content resolution for product variants and attributes",
    "WooCommerce-specific schema markup (Product, Review, Offer, BreadcrumbList)",
    "Yoast / RankMath WooCommerce SEO configuration",
    "Core Web Vitals improvement for WooCommerce themes",
    "Product page copy and keyword optimisation",
    "Category page content strategy and internal linking",
    "Faceted navigation (filter) crawl control via robots.txt or noindex",
    "Monthly WooCommerce SEO performance report",
  ],
  benefits: [
    { icon: Settings, title: "Full Technical Control", desc: "WooCommerce gives us 100% SEO customisation — no Shopify URL restrictions. We use this to build the perfect site architecture." },
    { icon: ShoppingCart, title: "Product-Level Optimisation", desc: "We optimise product pages at scale with keyword-rich copy, review schema, and structured data for rich snippets." },
    { icon: TrendingUp, title: "Category Authority", desc: "We build your category pages into the most authoritative pages on the web for their target keywords." },
  ],
  process: [
    { step: "01", title: "Store Audit", desc: "Complete WooCommerce technical audit — architecture, speed, duplicate content, and crawl efficiency." },
    { step: "02", title: "Keyword Mapping", desc: "Map buyer-intent keywords to every product and category page in your store." },
    { step: "03", title: "Technical Fix", desc: "Implement all technical SEO improvements directly on your WooCommerce site." },
    { step: "04", title: "Content & Authority", desc: "Optimise product copy, build category content, and grow domain authority through link building." },
  ],
  stats: [
    { value: "6.5M+", label: "WooCommerce stores worldwide", source: "BuiltWith 2026" },
    { value: "43%", label: "of eCommerce traffic from organic search", source: "BrightEdge" },
    { value: "300%", label: "average organic traffic growth for optimised WooCommerce stores", source: "Next Tab Internal" },
  ],
  faqs: [
    { q: "Is WooCommerce better than Shopify for SEO?", a: "WooCommerce offers more SEO flexibility — you control URL structures, meta robots, and every technical element. Shopify is faster out-of-the-box but more rigid. See our comparison guide for details." },
    { q: "Does WooCommerce have duplicate content issues?", a: "Yes — product variants, attribute archive pages, and tag pages often create duplicate content. We audit and resolve all of these as a standard part of our service." },
    { q: "Can you help with WooCommerce speed optimisation?", a: "Absolutely. Speed is a critical ranking factor and WooCommerce can be slow without proper optimisation. We implement caching, CDN, image optimisation, and theme/plugin auditing." },
    { q: "Do you also build WooCommerce stores?", a: "Yes — our team handles full WooCommerce development. If you need a new build or a migration, see our WooCommerce Development service." },
    { q: "How long before I see organic sales from WooCommerce SEO?", a: "Category pages typically show ranking movements within 2–3 months. Meaningful revenue impact from organic usually becomes clear at 6 months." },
  ],
};

const WooCommerceSeo = () => (
  <Layout>
    <SEO
      title="WooCommerce SEO Services Australia — Rank Your WooCommerce Store"
      description="Expert WooCommerce SEO for Australian stores. We fix technical issues, optimise product and category pages, and build organic traffic that converts."
      canonical="/services/woocommerce-seo"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "WooCommerce SEO", url: "https://nexttabagency.com/services/woocommerce-seo" },
      ]}
      serviceSchema={{ name: "WooCommerce SEO Services", description: "Specialist WooCommerce SEO for Australian online stores.", areaServed: "Australia" }}
    />
    <section aria-labelledby="service-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="WooCommerce SEO Services Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <h1 id="service-hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free WooCommerce SEO Audit</Link></Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/woocommerce-development">WooCommerce Development</Link></Button>
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

    <section aria-labelledby="why-need-heading" className="py-20 md:py-28 relative">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <div className="lg:col-span-3 prose prose-lg dark:prose-invert">
            <h2 id="why-need-heading" className="font-heading font-bold text-3xl mb-6 text-foreground">Why WooCommerce Stores Need Dedicated SEO</h2>
            <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
            <p className="text-muted-foreground leading-relaxed mt-4">Our platform expertise spans <Link to="/services/woocommerce-development" className="text-accent font-semibold">WooCommerce development</Link>, <Link to="/services/wordpress-seo" className="text-accent font-semibold">WordPress SEO</Link>, and <Link to="/services/ecommerce-seo" className="text-accent font-semibold">eCommerce SEO strategy</Link> — giving you a fully integrated solution.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2">
            <div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10">
              <h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>
              {service.benefits.map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section aria-labelledby="included-heading" className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container max-w-5xl relative z-10">
        <SectionHeading id="included-heading" eyebrow="What's Included" title="Complete WooCommerce SEO service" />
        <ul className="grid sm:grid-cols-2 gap-4">
          {service.features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}
        </ul>
      </div>
    </section>

    <section className="surface-warm py-12">
      <div className="container max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-widest text-accent mb-6 text-center">Related Services</p>
        <div className="flex flex-wrap gap-3 justify-center">
          {[{ label: "WordPress SEO", href: "/services/wordpress-seo" }, { label: "Shopify SEO", href: "/services/shopify-seo" }, { label: "eCommerce SEO", href: "/services/ecommerce-seo" }, { label: "Technical SEO", href: "/services/technical-seo" }].map((p) => (<Link key={p.href} to={p.href} className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-border bg-card text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors">{p.label} <ArrowRight className="w-3.5 h-3.5" /></Link>))}
        </div>
      </div>
    </section>

    <section aria-labelledby="process-heading" className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <SectionHeading id="process-heading" eyebrow="Our Process" title="How we grow your WooCommerce organic revenue" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step, i) => (<motion.div key={step.title} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative"><div className="card-premium rounded-2xl p-6 h-full"><span className="font-heading font-bold text-2xl number-outline block mb-3">{step.step}</span><h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{step.title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p></div>{i < 3 && (<div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 items-center justify-center"><ArrowRight className="w-4 h-4 text-accent/40" /></div>)}</motion.div>))}
        </div>
      </div>
    </section>

    <section aria-labelledby="faq-heading" className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-3xl">
        <SectionHeading id="faq-heading" eyebrow="FAQs" title="WooCommerce SEO questions answered" />
        <div className="space-y-4">
          {service.faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>

    <AIInsightsPanel pageTitle="WooCommerce SEO Services - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "WooCommerce SEO Services" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Platform", value: "WooCommerce / WordPress" }, { label: "Service Area", value: "Australia-wide" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="WooCommerce SEO Overview" items={["Specialist WooCommerce SEO for Australian stores — technical fixes, category optimisation, and content strategy.", "Covers duplicate content, schema markup, Core Web Vitals, and Yoast/RankMath setup."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "WooCommerce SEO" }, { term: "Platform", def: "WooCommerce / WordPress" }, { term: "Location", def: "Brisbane-based, serving all of Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency delivers specialist WooCommerce SEO for Australian online stores, resolving technical issues and building organic traffic strategies to drive sustainable revenue growth.</p>) },
    ]} />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />
  </Layout>
);

export default WooCommerceSeo;

