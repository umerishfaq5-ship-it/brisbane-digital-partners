import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, ShoppingCart, TrendingUp, DollarSign, Zap, Globe, Search } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "eCommerce SEO Services",
  headline: "More Organic Revenue. Less Wasted Ad Spend.",
  description: "Paid ads stop the moment you pause them. eCommerce SEO builds compounding organic traffic that drives revenue month after month — without paying Google a cent per click.",
  longDescription: "eCommerce SEO is one of the most complex and highest-ROI digital strategies available to online retailers. Unlike paid advertising, organic rankings build equity over time. A single top-ranking product or category page can drive thousands of clicks per month — free. Our eCommerce SEO service is designed specifically for Australian online stores across Shopify, WooCommerce, Magento, and BigCommerce.",
  features: [
    "Product page SEO — title tags, meta descriptions, structured data",
    "Category page architecture and keyword mapping",
    "Faceted navigation (filters) crawl control",
    "Duplicate content resolution for variant products",
    "Internal linking strategy for category and product hierarchy",
    "Schema markup — Product, Review, BreadcrumbList, Offer",
    "eCommerce site speed and Core Web Vitals optimisation",
    "Competitor product and category gap analysis",
    "Content strategy for category landing pages",
    "Google Shopping feed optimisation support",
  ],
  benefits: [
    { icon: ShoppingCart, title: "Higher-Intent Traffic", desc: "Rank for 'buy' and 'near me' queries that convert into actual sales — not just page views." },
    { icon: DollarSign, title: "Lower Customer Acquisition Cost", desc: "Organic traffic has zero CPC. As rankings improve, your cost-per-sale decreases." },
    { icon: TrendingUp, title: "Compounding Returns", desc: "Unlike ads, SEO rankings build month-over-month. Year 2 traffic costs less than Year 1." },
  ],
  process: [
    { step: "01", title: "Store Audit", desc: "We audit your product catalogue, site architecture, and technical setup for SEO-critical issues." },
    { step: "02", title: "Keyword Strategy", desc: "Map high-intent buyer keywords to every category and product page in your store." },
    { step: "03", title: "On-Page Optimisation", desc: "Implement SEO improvements across your product and category pages at scale." },
    { step: "04", title: "Authority Building", desc: "Strategic link building to push key category pages onto page 1 of Google." },
  ],
  stats: [
    { value: "43%", label: "of eCommerce traffic comes from organic search", source: "BrightEdge 2025" },
    { value: "8x", label: "higher ROI for SEO vs paid for mature eCommerce stores", source: "Forrester" },
    { value: "37%", label: "of clicks go to the #1 organic result", source: "First Page Sage" },
  ],
  faqs: [
    { q: "Does SEO work for eCommerce stores?", a: "Absolutely — it's one of the highest-ROI channels for online retailers. Category pages and product pages can consistently rank for high-intent buyer keywords, driving free, qualified traffic." },
    { q: "How do you handle large product catalogues?", a: "For stores with thousands of SKUs, we focus on category page strategy first, then systematically improve top-revenue product pages. We use crawl prioritisation to ensure Google focuses on your most important pages." },
    { q: "Do you work with Shopify?", a: "Yes — Shopify, WooCommerce, Magento, BigCommerce, and custom platforms. Each has specific technical SEO requirements we're expert in." },
    { q: "What's the difference between eCommerce SEO and regular SEO?", a: "eCommerce SEO deals with unique challenges: product variants, faceted navigation, thin product descriptions, and huge page counts. It requires a specific approach to architecture and technical SEO." },
    { q: "How long before I see an increase in organic sales?", a: "Most clients see early ranking movements at 3–4 months, with meaningful revenue impact from organic at 6–12 months. Results scale significantly in year 2." },
  ],
};

const EcommerceSeo = () => {
  return (
    <Layout>
      <SEO
        title="eCommerce SEO Services Australia — Rank Products & Categories"
        description="Specialist eCommerce SEO for Australian online stores. We rank product and category pages on Shopify, WooCommerce, Magento, and BigCommerce to drive organic revenue."
        canonical="/services/ecommerce-seo"
        faqs={service.faqs}
        breadcrumbs={[
          { name: "Home", url: "https://nexttabagency.com/" },
          { name: "Services", url: "https://nexttabagency.com/services" },
          { name: "eCommerce SEO", url: "https://nexttabagency.com/services/ecommerce-seo" },
        ]}
        serviceSchema={{
          name: "eCommerce SEO Services",
          description: "Specialist eCommerce SEO for Australian online stores — product pages, category pages, and technical architecture.",
          areaServed: "Australia",
        }}
      />

      {/* Hero */}
      <section aria-labelledby="service-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img src={heroBg} alt="eCommerce SEO Services Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
        <div className="container relative z-10 py-32 md:py-48 pt-44">
          <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all services
          </Link>
          <div className="max-w-3xl">
            <h1 id="service-hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
            <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free eCommerce SEO Audit</Link></Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/shopify-seo">Shopify SEO</Link></Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Bar */}
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

      {/* Main Content */}
      <section aria-labelledby="why-need-heading" className="py-20 md:py-28 relative">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-3 prose prose-lg dark:prose-invert">
              <h2 id="why-need-heading" className="font-heading font-bold text-3xl mb-6 text-foreground">Why eCommerce Stores Need Dedicated SEO</h2>
              <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Australian online retail is competitive and the cost of Google Shopping ads continues to rise. The brands that win long-term are the ones investing in organic authority — category pages on page 1, product pages with rich snippets, and a technical foundation that Google can efficiently crawl.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Our platform expertise spans <Link to="/services/shopify-development" className="text-accent font-semibold">Shopify</Link>, <Link to="/services/woocommerce-development" className="text-accent font-semibold">WooCommerce</Link>, <Link to="/services/magento-development" className="text-accent font-semibold">Magento</Link>, and <Link to="/services/bigcommerce-development" className="text-accent font-semibold">BigCommerce</Link>.
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

      {/* What's Included */}
      <section aria-labelledby="included-heading" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container max-w-5xl relative z-10">
          <SectionHeading id="included-heading" eyebrow="What's Included" title="Complete eCommerce SEO service" />
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

      {/* Platform Support */}
      <section className="surface-warm py-12">
        <div className="container max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-6 text-center">Platforms We Support</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: "Shopify SEO", href: "/services/shopify-seo" },
              { label: "WooCommerce SEO", href: "/services/woocommerce-seo" },
              { label: "Magento SEO", href: "/services/magento-seo" },
              { label: "BigCommerce SEO", href: "/services/bigcommerce-seo" },
            ].map((p) => (
              <Link key={p.href} to={p.href} className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-border bg-card text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors">
                {p.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process-heading" className="py-20 md:py-28">
        <div className="container max-w-5xl">
          <SectionHeading id="process-heading" eyebrow="Our Process" title="How we grow your organic revenue" />
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

      {/* FAQs */}
      <section aria-labelledby="faq-heading" className="py-20 md:py-28 relative overflow-hidden bg-muted/30">
        <div className="container max-w-3xl relative z-10">
          <SectionHeading id="faq-heading" eyebrow="FAQs" title="eCommerce SEO questions answered" />
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

      <section aria-label="eCommerce SEO Audit Form" className="py-20 md:py-28">
        <div className="container"><LiveTeardownForm /></div>
      </section>

      <AIInsightsPanel
        pageTitle="eCommerce SEO Services - Next Tab Agency"
        tabs={[
          { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<div className="space-y-6"><InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "eCommerce SEO Services" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Platforms", value: "Shopify, WooCommerce, Magento, BigCommerce" }, { label: "Service Area", value: "Australia-wide" }]} /></div>) },
          { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<div className="space-y-6"><InsightList heading="eCommerce SEO Overview" items={["Specialist SEO for Australian online stores across all major eCommerce platforms.", "Focus on category page architecture, product schema, and technical crawl efficiency.", "Drives compounding organic revenue to reduce reliance on paid advertising."]} /></div>) },
          { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<div className="space-y-6"><InsightDL items={[{ term: "Service", def: "eCommerce SEO" }, { term: "Platforms", def: "Shopify, WooCommerce, Magento, BigCommerce" }, { term: "Location", def: "Brisbane-based, serving all of Australia" }]} /></div>) },
          { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<div className="space-y-4"><p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency delivers specialist eCommerce SEO for Australian online retailers, focusing on product and category page rankings to drive compounding organic revenue.</p></div>) },
        ]}
      />
    </Layout>
  );
};

export default EcommerceSeo;
