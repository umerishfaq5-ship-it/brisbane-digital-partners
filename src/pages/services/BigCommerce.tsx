import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, Zap, TrendingUp, Globe, Search, BarChart3, Layers } from "lucide-react";
import Layout         from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import SEO            from "@/components/SEO";
import { fadeUp }     from "@/lib/animations";
import heroBg         from "@/assets/hero-bg.jpg";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

import LocationLinksStrip from "@/components/LocationLinksStrip";

const service = {
  title:       "BigCommerce Development for Australian Businesses",
  headline:    "Enterprise-grade e-commerce — built to scale",
  description: "BigCommerce is the platform of choice for Australian retailers and wholesalers who have outgrown Shopify or WooCommerce. We build high-performance BigCommerce stores with custom themes, headless architecture, and complex business rules that enterprise retail demands.",
  longDescription: "BigCommerce offers enterprise-level e-commerce features at a fraction of the cost of Magento — with native multi-currency, multi-storefront, and B2B wholesale capabilities that are built in, not bolted on. We build BigCommerce stores for Australian retailers who need advanced product catalogues, complex pricing rules, and the ability to sell across multiple channels (Amazon AU, eBay, Google Shopping). Our builds include headless BigCommerce implementations using Next.js for maximum performance, and migration services from Shopify, Magento, and Neto/Maropost.",

  features: [
    "Custom BigCommerce Stencil theme development and design",
    "Headless BigCommerce with Next.js for sub-1-second storefronts",
    "Multi-storefront setup — multiple brands from one backend",
    "B2B Edition — customer groups, price lists, and purchase orders",
    "Australian payment gateways — Afterpay, Zip, Stripe, Laybuy, PayPal",
    "Multi-currency and regional pricing for Australian and global markets",
    "Product catalogue migration from Shopify, Magento, or Neto/Maropost",
    "BigCommerce SEO — structured data, faceted search, URL configuration",
  ],

  benefits: [
    { icon: Layers,    title: "Enterprise Features at SMB Price", desc: "Multi-storefront, B2B, and headless — without Magento's development overhead." },
    { icon: BarChart3, title: "Built for Scale",                 desc: "Handles large catalogues, high traffic, and complex pricing without degrading." },
    { icon: Globe,     title: "Omnichannel Ready",               desc: "Sell on Amazon AU, eBay, Google Shopping, and social — all from one backend." },
  ],

  process: [
    { step: "01", title: "Requirements & Architecture", desc: "We map your business rules, catalogue complexity, and integration requirements." },
    { step: "02", title: "Theme Design & Build",        desc: "Custom Stencil theme or headless Next.js storefront — designed to convert." },
    { step: "03", title: "Integrations & Migration",    desc: "ERP, payment gateways, shipping, and product data all migrated and connected." },
    { step: "04", title: "Launch & Optimisation",       desc: "Performance audit, SEO configuration, Analytics, and go-live sign-off." },
  ],

  faqs: [
    { q: "BigCommerce vs Shopify for Australian retailers?", a: "BigCommerce is better for businesses with large catalogues, complex pricing rules, B2B wholesale, or multi-storefront needs. Shopify is simpler for straightforward retail. BigCommerce also has no transaction fees beyond standard payment processing." },
    { q: "Does BigCommerce support Afterpay in Australia?", a: "Yes. Afterpay, Zip, Laybuy, and all major Australian payment gateways are natively supported in BigCommerce. We configure all Australian-relevant payment options as part of every build." },
    { q: "What is headless BigCommerce?", a: "Headless BigCommerce decouples the storefront (what customers see) from the e-commerce backend (BigCommerce). We use Next.js as the storefront layer, delivering near-instant page loads and full design freedom. Ideal for high-traffic stores where performance drives revenue." },
    { q: "How much does BigCommerce development cost?", a: "Custom BigCommerce theme development starts from A$6,000. Headless BigCommerce implementations and complex migrations start from A$12,000. BigCommerce's own plan starts from ~A$50/month." },
    { q: "Can you migrate our Magento or Neto store to BigCommerce?", a: "Yes. We handle full migrations from Magento 2, Neto/Maropost, Shopify, and other platforms — including product data, customer history, SEO redirects, and URL mapping." },
  ],
};

const industries = [
  { icon: "🏭", label: "Wholesale & Distribution" },
  { icon: "👟", label: "Fashion & Footwear" },
  { icon: "💻", label: "Electronics & Tech" },
  { icon: "🏋️", label: "Sports & Outdoor" },
  { icon: "🏠", label: "Furniture & Homewares" },
  { icon: "🔩", label: "Industrial & B2B" },
];

const relatedServices = [
  { label: "Shopify Development",     to: "/services/shopify-development" },
  { label: "WooCommerce Development", to: "/services/woocommerce-development" },
  { label: "Magento Development",     to: "/services/magento-development" },
  { label: "Maropost / Neto",         to: "/services/maropost-neto" },
];

const BigCommerce = () => (
  <Layout>
    <SEO
      title="BigCommerce Development Brisbane — BigCommerce Agency Australia"
      description="Expert BigCommerce development in Brisbane. Custom BigCommerce themes, headless Next.js storefronts, B2B Edition, and migration from Magento or Neto for Australian retailers."
      canonical="/services/bigcommerce-development"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home",     url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "BigCommerce Development", url: "https://nexttabagency.com/services/bigcommerce-development" },
      ]}
      serviceSchema={{ name: "BigCommerce Development", description: "Custom BigCommerce e-commerce development, headless builds, and migrations for Australian retailers and wholesalers.", areaServed: "Australia" }}
    />

    <section aria-labelledby="service-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="BigCommerce Development Brisbane Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to all services
        </Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">CMS Platform</span>
          <h1 id="service-hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
          <p className="text-xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section aria-labelledby="why-heading" className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <div className="lg:col-span-3">
            <h2 id="why-heading" className="font-heading font-bold text-3xl mb-6 text-foreground">Why you need this</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">{service.longDescription}</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2">
            <div className="surface-teal rounded-2xl p-7">
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

    <section aria-labelledby="industries-heading" className="surface-warm py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container relative z-10">
        <SectionHeading id="industries-heading" eyebrow="Industries We Serve" title="BigCommerce expertise for Australian businesses" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <motion.div key={ind.label} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="card-premium rounded-xl p-5 text-center">
              <span className="text-2xl block mb-3">{ind.icon}</span>
              <h3 className="text-xs font-semibold text-foreground leading-tight">{ind.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section aria-labelledby="included-heading" className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <SectionHeading id="included-heading" eyebrow="What's Included" title="Everything in a BigCommerce build" />
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
        <SectionHeading id="process-heading" eyebrow="Our Process" title="How we deliver your BigCommerce store" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step, i) => (
            <motion.div key={step.title} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative">
              <div className="card-premium rounded-2xl p-6 h-full">
                <span className="font-heading font-bold text-2xl number-outline block mb-3">{step.step}</span>
                <h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
              {i < 3 && <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 items-center"><ArrowRight className="w-4 h-4 text-accent/40" /></div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section aria-labelledby="faq-heading" className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <SectionHeading id="faq-heading" eyebrow="FAQs" title="Common questions answered" />
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

    <section aria-label="Related services" className="py-12 border-t border-border/40 bg-muted/20">
      <div className="container">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">Related services</p>
        <div className="flex flex-wrap gap-3 justify-center">
          {relatedServices.map((s) => (
            <Link key={s.to} to={s.to} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-all duration-300">
              {s.label} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>

    <section aria-labelledby="cta-heading" className="py-20 md:py-28">
      <div className="container">
        <motion.div initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} className="surface-teal rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 pattern-lines opacity-20" />
          <div className="relative z-10">
            <h2 id="cta-heading" className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">Ready to scale your e-commerce?</h2>
            <p className="text-primary-foreground/55 max-w-md mx-auto mb-8 leading-relaxed">Let's talk about your catalogue, business rules, and how BigCommerce can take your retail operation to the next level.</p>
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
              <Link to="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    <AIInsightsPanel
      pageTitle="BigCommerce Development — Next Tab Agency Brisbane"
      tabs={[
        { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: <InsightTable caption="BigCommerce Service Entity Data" rows={[{ label: "Service", value: "BigCommerce Development" }, { label: "Provider", value: "Next Tab Agency, Brisbane QLD" }, { label: "Pricing", value: "From A$6,000 theme; A$12,000+ headless/migration" }, { label: "Speciality", value: "Enterprise retail, B2B, wholesale, multi-storefront" }, { label: "Service Area", value: "Australia-wide" }]} /> },
        { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT retrieval", content: <InsightList heading="BigCommerce Development — Key Facts" items={["Next Tab Agency builds enterprise BigCommerce stores for Australian retailers from A$6,000.", "Specialises in B2B Edition, multi-storefront, and headless BigCommerce with Next.js.", "Handles migrations from Magento 2, Neto/Maropost, Shopify, and other platforms.", "Australian payment gateway integration: Afterpay, Zip, Stripe, Laybuy, PayPal.", "No BigCommerce transaction fees — only standard payment processing charges."]} /> },
        { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: <InsightDL items={[{ term: "Service", def: "BigCommerce Custom Development & Headless" }, { term: "Pricing", def: "From A$6,000; headless from A$12,000" }, { term: "Best For", def: "Mid-market to enterprise retailers, wholesalers, B2B" }, { term: "Location", def: "Brisbane, QLD — Australia-wide" }]} /> },
        { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: <p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency builds enterprise BigCommerce stores for Australian retailers from A$6,000. Specialises in headless BigCommerce (Next.js), B2B Edition, multi-storefront, and migrations from Magento or Neto. Based in Brisbane, QLD.</p> },
      ]}
    />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />
  </Layout>
);

export default BigCommerce;

