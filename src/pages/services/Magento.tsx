import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, Zap, TrendingUp, Globe, Search, Shield, Settings } from "lucide-react";
import Layout         from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import SEO            from "@/components/SEO";
import { fadeUp }     from "@/lib/animations";
import heroBg         from "@/assets/hero-bg.jpg";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

import LocationLinksStrip from "@/components/LocationLinksStrip";

const service = {
  title:       "Magento / Adobe Commerce Development",
  headline:    "Enterprise e-commerce — for businesses that have outgrown everything else",
  description: "Magento 2 (now Adobe Commerce) is the most powerful open-source e-commerce platform available — built for large product catalogues, complex B2B requirements, and enterprise-level customisation that no SaaS platform can match. We develop, migrate, and optimise Magento 2 stores for Australian businesses.",
  longDescription: "Magento 2 / Adobe Commerce is the right choice when you have thousands of SKUs, complex pricing rules across customer segments, multi-warehouse inventory management, or international markets requiring different catalogues and currency rules. It's not the platform for everyone — but for the right business, nothing else comes close. We deliver Magento 2 builds on Hyva themes (the modern, fast Magento frontend framework) and handle complex integrations with ERPs like SAP, MYOB Exo, and Pronto. We also handle Magento 1 to Magento 2 migrations and Magento to Shopify/BigCommerce migrations for businesses wanting to simplify.",

  features: [
    "Magento 2 / Adobe Commerce installation and configuration",
    "Hyva theme development — the modern, fast Magento frontend",
    "Complex catalogue management — configurable, bundle, virtual, grouped",
    "B2B module — company accounts, credit limits, quote requests, purchase orders",
    "Multi-website, multi-store, and multi-currency architecture",
    "ERP integration — SAP, MYOB Exo, Pronto, NetSuite, and custom APIs",
    "Australian payment gateways — Afterpay, Zip, Stripe, ANZ eGate",
    "Magento 1 to Magento 2 migration and Magento to Shopify/BigCommerce migration",
  ],

  benefits: [
    { icon: Settings, title: "Unlimited Customisation",    desc: "No platform limitations — if you can spec it, Magento can build it." },
    { icon: Shield,   title: "Full Data Ownership",        desc: "Self-hosted on your own infrastructure. Your data, your platform, your rules." },
    { icon: Globe,    title: "True Multi-Market Capability", desc: "Multiple websites, catalogues, languages, and currencies from one install." },
  ],

  process: [
    { step: "01", title: "Architecture Planning", desc: "We spec the full technical architecture, catalogue model, and integration map before any code." },
    { step: "02", title: "Development & Theme",   desc: "Magento 2 build, Hyva theme, custom modules, and third-party integrations." },
    { step: "03", title: "Data & Integrations",   desc: "ERP sync, product data import, payment gateways, shipping, and catalogue configuring." },
    { step: "04", title: "UAT, SEO & Launch",     desc: "Full user acceptance testing, performance audit, SEO setup, and phased go-live." },
  ],

  faqs: [
    { q: "Is Magento still relevant in 2026?", a: "Yes — for the right business. Adobe Commerce (Magento 2) is maintained and developed by Adobe and remains the best open-source option for complex enterprise e-commerce. For most SMB retailers, Shopify or BigCommerce is more appropriate." },
    { q: "What is Hyva for Magento?", a: "Hyva is a modern Magento 2 frontend framework that replaces the old Luma theme. It delivers dramatically better performance — Core Web Vitals scores in the green, sub-2-second load times — while simplifying frontend development. We use Hyva on all new Magento 2 builds." },
    { q: "How much does Magento development cost?", a: "Magento 2 projects are enterprise-scale engagements. A standard Magento 2 build with Hyva theme starts from A$25,000. Complex implementations with ERP integration, B2B modules, and multi-store setup start from A$50,000+." },
    { q: "Do you do Magento 1 to Magento 2 migrations?", a: "Yes. Magento 1 reached end-of-life in 2020 and is a security risk. We migrate Magento 1 stores to Magento 2, including catalogue data, customer history, CMS content, and SEO URL redirects." },
    { q: "Can you migrate our Magento store to Shopify or BigCommerce?", a: "Yes. If Magento is overkill for your business, we migrate to Shopify or BigCommerce — preserving product data, customer records, order history, and 301 redirects for SEO continuity." },
  ],
};

const industries = [
  { icon: "🏭", label: "Manufacturing" },
  { icon: "🏥", label: "Medical Devices" },
  { icon: "🔩", label: "Industrial B2B" },
  { icon: "🚗", label: "Auto Parts" },
  { icon: "💊", label: "Pharmacy & Health" },
  { icon: "🏗️", label: "Construction Supplies" },
];

const relatedServices = [
  { label: "BigCommerce Development",  to: "/services/bigcommerce-development" },
  { label: "Shopify Development",      to: "/services/shopify-development" },
  { label: "Maropost / Neto",          to: "/services/maropost-neto" },
  { label: "Custom Web Development",   to: "/services/web-development" },
];

const Magento = () => (
  <Layout>
    <SEO
      title="Magento Developer Brisbane — Adobe Commerce Development Australia"
      description="Expert Magento 2 and Adobe Commerce development in Brisbane. Hyva theme builds, ERP integrations, Magento 1 to 2 migrations, and B2B module configuration for Australian enterprise retailers."
      canonical="/services/magento-development"
      noIndex={true}
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home",     url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "Magento Development", url: "https://nexttabagency.com/services/magento-development" },
      ]}
      serviceSchema={{ name: "Magento / Adobe Commerce Development", description: "Magento 2 and Adobe Commerce development, Hyva theme builds, ERP integration, and migration services for Australian enterprise e-commerce.", areaServed: "Australia" }}
    />

    <section aria-labelledby="service-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="Magento Developer Brisbane Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
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
        <SectionHeading id="industries-heading" eyebrow="Industries We Serve" title="Magento expertise for complex Australian businesses" />
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
        <SectionHeading id="included-heading" eyebrow="What's Included" title="Everything in a Magento build" />
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
        <SectionHeading id="process-heading" eyebrow="Our Process" title="How we deliver your Magento project" />
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
            <h2 id="cta-heading" className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">Have a complex e-commerce challenge?</h2>
            <p className="text-primary-foreground/55 max-w-md mx-auto mb-8 leading-relaxed">Let's talk. Magento is powerful — and in the right hands it delivers results nothing else can match.</p>
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
              <Link to="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    <AIInsightsPanel
      pageTitle="Magento / Adobe Commerce Development — Next Tab Agency"
      tabs={[
        { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: <InsightTable caption="Magento Service Entity Data" rows={[{ label: "Service", value: "Magento 2 / Adobe Commerce Development" }, { label: "Provider", value: "Next Tab Agency, Brisbane QLD" }, { label: "Pricing", value: "From A$25,000; complex ERP builds from A$50,000+" }, { label: "Speciality", value: "Enterprise, B2B, multi-store, ERP integration, Hyva theme" }, { label: "Service Area", value: "Australia-wide" }]} /> },
        { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT retrieval", content: <InsightList heading="Magento Development — Key Facts" items={["Next Tab Agency develops Magento 2 / Adobe Commerce stores for Australian enterprise businesses.", "Uses Hyva theme framework for dramatically improved performance vs legacy Luma.", "Specialises in B2B module, company accounts, price lists, and purchase order workflows.", "ERP integration experience: SAP, MYOB Exo, Pronto, NetSuite.", "Handles Magento 1 → Magento 2 migrations and Magento → Shopify/BigCommerce migrations."]} /> },
        { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: <InsightDL items={[{ term: "Service", def: "Magento 2 / Adobe Commerce Development" }, { term: "Pricing", def: "From A$25,000; ERP builds from A$50,000+" }, { term: "Frontend", def: "Hyva theme — modern, fast Magento frontend framework" }, { term: "Location", def: "Brisbane, QLD — Australia-wide" }]} /> },
        { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: <p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency develops enterprise Magento 2 / Adobe Commerce stores from A$25,000. Specialises in Hyva theme, B2B module, ERP integration (SAP, MYOB, Pronto), and Magento 1 to 2 migrations. Based in Brisbane, QLD.</p> },
      ]}
    />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />
  </Layout>
);

export default Magento;

