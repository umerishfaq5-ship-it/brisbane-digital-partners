import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Zap,
  TrendingUp,
  ShoppingCart,
  Globe,
  Search,
  BarChart3,
} from "lucide-react";

import Layout         from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import SEO            from "@/components/SEO";
import { fadeUp }     from "@/lib/animations";
import heroBg         from "@/assets/hero-bg.jpg";
import AIInsightsPanel, {
  InsightDL,
  InsightList,
  InsightTable,
} from "@/components/AIInsightsPanel";
import LocationLinksStrip from "@/components/LocationLinksStrip";


/* ─────────────────────────────────────────────────────────────────
   Page Data
───────────────────────────────────────────────────────────────── */
const service = {
  title:       "Shopify Development for Australian Businesses",
  headline:    "Expert Shopify stores built to rank, convert, and scale",
  description:
    "Shopify is Australia's most popular e-commerce platform for a reason — but a great Shopify store needs more than a template. We design, build, and optimise Shopify stores that attract traffic and turn visitors into customers.",
  longDescription:
    "Whether you're launching your first online store or migrating from WooCommerce or Magento, we deliver Shopify stores that are beautifully designed, technically sound, and optimised for Australian customers. Our builds include Australian-specific payment gateways (Afterpay, Zip, PayPal, and major bank integrations), GST-compliant checkout flows, and performance optimisation that keeps your Lighthouse scores high and your customers happy. We're experienced with Shopify, Shopify Plus, and headless Shopify builds using Next.js.",

  features: [
    "Custom Shopify theme development — beyond Debut and Dawn templates",
    "Shopify Plus setup and configuration for enterprise retail",
    "Australian payment gateways — Afterpay, Zip, Stripe, PayPal, Laybuy",
    "GST-compliant checkout, tax rules, and product configuration",
    "Product catalogue setup, collections, and inventory management",
    "App integrations — loyalty, reviews, email marketing, accounting",
    "Shopify SEO — meta tags, schema markup, URL structure, speed",
    "Migration from WooCommerce, Magento, BigCommerce, or Neto",
  ],

  benefits: [
    {
      icon:  ShoppingCart,
      title: "Built for Australian Commerce",
      desc:  "GST, Afterpay, Zip, and ANZ-compatible payment flows configured from day one.",
    },
    {
      icon:  BarChart3,
      title: "Optimised to Convert",
      desc:  "Conversion-focused design, fast load times, and streamlined checkout flows.",
    },
    {
      icon:  TrendingUp,
      title: "SEO from the Ground Up",
      desc:  "Canonical tags, schema markup, and clean URL structures so Google finds you first.",
    },
  ],

  process: [
    {
      step:  "01",
      title: "Strategy & Planning",
      desc:  "We understand your products, audience, and goals — then plan the optimal store architecture.",
    },
    {
      step:  "02",
      title: "Design & Build",
      desc:  "Custom Shopify theme or tailored template customisation. Collections, products, pages all configured.",
    },
    {
      step:  "03",
      title: "Integrations & Testing",
      desc:  "Payment gateways, apps, third-party tools — all connected and thoroughly tested.",
    },
    {
      step:  "04",
      title: "Launch & Optimise",
      desc:  "Go live with confidence. Analytics, Search Console, and initial SEO all set up and verified.",
    },
  ],

  faqs: [
    {
      q: "Why Shopify over WooCommerce or Magento?",
      a: "Shopify is easier to manage, more reliable, and has lower total cost of ownership for most Australian retailers. It handles hosting, security, and updates automatically. WooCommerce suits businesses already on WordPress; Magento suits enterprise-level complexity.",
    },
    {
      q: "Do you support Afterpay and Zip integrations?",
      a: "Yes. Both Afterpay and Zip are natively supported in Shopify and we configure them as part of every Australian store build. We also integrate with Laybuy, Humm, and major Australian bank payment gateways.",
    },
    {
      q: "Can you migrate my existing store to Shopify?",
      a: "Yes. We handle migrations from WooCommerce, Magento 2, BigCommerce, and Neto/Maropost — including product data, customer records, and historical orders.",
    },
    {
      q: "How much does a Shopify store cost?",
      a: "A custom Shopify store build starts from A$4,500. Shopify Plus implementations and complex migrations start from A$8,000. Shopify's own monthly subscription is separate (from A$49/mo).",
    },
    {
      q: "Do you work with Shopify Plus?",
      a: "Yes. We build Shopify Plus stores including custom checkout scripts, B2B wholesale portals, multi-currency/multi-region setup, and Shopify Flow automation.",
    },
  ],
};

const industries = [
  { icon: "👗", label: "Fashion & Apparel" },
  { icon: "💄", label: "Beauty & Cosmetics" },
  { icon: "🏋️", label: "Health & Fitness" },
  { icon: "🍷", label: "Food & Beverage" },
  { icon: "🏠", label: "Home & Lifestyle" },
  { icon: "⚙️", label: "Industrial & Trade" },
];

const relatedServices = [
  { label: "WooCommerce Development",  to: "/services/woocommerce-development" },
  { label: "BigCommerce Development",  to: "/services/bigcommerce-development" },
  { label: "Custom Web Development",   to: "/services/web-development" },
  { label: "E-commerce SEO",           to: "/services/seo-audits" },
];

/* ─────────────────────────────────────────────────────────────────
   Page Component
───────────────────────────────────────────────────────────────── */
const Shopify = () => (
  <Layout>

    {/* ── SEO & Schema ───────────────────────────────────────── */}
    <SEO
      title="Shopify Development Brisbane — Expert Shopify Stores Australia"
      description="Expert Shopify store development in Brisbane. Custom Shopify themes, Shopify Plus, Afterpay integration, and migration from WooCommerce or Magento. Built for Australian e-commerce."
      canonical="/services/shopify-development"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home",     url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "Shopify Development", url: "https://nexttabagency.com/services/shopify-development" },
      ]}
      serviceSchema={{
        name:        "Shopify Development",
        description: "Custom Shopify store design and development for Australian e-commerce businesses, including Shopify Plus and Afterpay integration.",
        areaServed:  "Australia",
      }}
    />

    {/* ── Hero ───────────────────────────────────────────────── */}
    <section
      aria-labelledby="service-hero-heading"
      className="relative min-h-[50vh] flex items-center overflow-hidden"
    >
      <img
        src={heroBg}
        alt="Shopify Development Brisbane Australia"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="absolute bottom-1/3 right-[15%] w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />

      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link
          to="/services"
          className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all services
        </Link>

        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">
            CMS Platform
          </span>
          <h1
            id="service-hero-heading"
            className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6"
          >
            {service.title}
          </h1>
          <p className="text-xl text-primary-foreground/80 font-medium leading-snug mb-6">
            {service.headline}
          </p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* ── Why You Need This ──────────────────────────────────── */}
    <section
      aria-labelledby="why-heading"
      className="py-20 md:py-28"
    >
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">

          <div className="lg:col-span-3">
            <h2
              id="why-heading"
              className="font-heading font-bold text-3xl mb-6 text-foreground"
            >
              Why you need this
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {service.longDescription}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="surface-teal rounded-2xl p-7">
              <h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">
                Key Benefits
              </h3>
              {service.benefits.map((b) => (
                <div key={b.title} className="flex gap-3 mb-5 last:mb-0">
                  <b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-primary-foreground text-sm">
                      {b.title}
                    </h4>
                    <p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">
                      {b.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>

    {/* ── Industries ─────────────────────────────────────────── */}
    <section
      aria-labelledby="industries-heading"
      className="surface-warm py-8 md:py-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 pattern-dots" />
      <div className="container relative z-10">
        <SectionHeading
          id="industries-heading"
          eyebrow="Industries We Serve"
          title="Shopify expertise across Australian retail sectors"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.label}
              initial={fadeUp.hidden}
              whileInView={fadeUp.visible}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="card-premium rounded-xl p-5 text-center"
            >
              <span className="text-2xl block mb-3">{ind.icon}</span>
              <h3 className="text-xs font-semibold text-foreground leading-tight">
                {ind.label}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── What's Included ────────────────────────────────────── */}
    <section
      aria-labelledby="included-heading"
      className="py-20 md:py-28"
    >
      <div className="container max-w-5xl">
        <SectionHeading
          id="included-heading"
          eyebrow="What's Included"
          title="Everything in a Shopify build"
        />
        <ul className="grid sm:grid-cols-2 gap-4">
          {service.features.map((f, i) => (
            <motion.li
              key={f}
              initial={fadeUp.hidden}
              whileInView={fadeUp.visible}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"
            >
              <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-foreground leading-relaxed">{f}</p>
            </motion.li>
          ))}
        </ul>

        {/* Portfolio proof link → implements: Shopify → CircleIt (Proof) */}
        <div className="mt-8 rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
          <p className="text-sm text-muted-foreground">
            🏆 Want proof? See how our React Native expertise powers{" "}
            <Link to="/portfolio/circle-it" className="text-accent font-semibold hover:underline">
              the CircleIt social app — 5,000+ users, 68% retention
            </Link>
            {" "}— the same technical team that builds your Shopify store.
          </p>
        </div>
      </div>
    </section>

    {/* ── Process ────────────────────────────────────────────── */}
    <section
      aria-labelledby="process-heading"
      className="surface-warm py-20 md:py-28"
    >
      <div className="container max-w-5xl">
        <SectionHeading
          id="process-heading"
          eyebrow="Our Process"
          title="How we deliver your Shopify store"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step, i) => (
            <motion.div
              key={step.title}
              initial={fadeUp.hidden}
              whileInView={fadeUp.visible}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <div className="card-premium rounded-2xl p-6 h-full">
                <span className="font-heading font-bold text-2xl number-outline block mb-3">
                  {step.step}
                </span>
                <h3 className="font-heading font-semibold text-foreground mb-2 text-sm">
                  {step.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {step.desc}
                </p>
              </div>
              {i < 3 && (
                <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 items-center">
                  <ArrowRight className="w-4 h-4 text-accent/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── FAQs ───────────────────────────────────────────────── */}
    <section
      aria-labelledby="faq-heading"
      className="py-20 md:py-28"
    >
      <div className="container max-w-3xl">
        <SectionHeading
          id="faq-heading"
          eyebrow="FAQs"
          title="Common questions answered"
        />
        <div className="space-y-4">
          {service.faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={fadeUp.hidden}
              whileInView={fadeUp.visible}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-premium rounded-2xl p-6"
            >
              <h3 className="font-heading font-semibold text-foreground mb-2">
                {faq.q}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Related Services ───────────────────────────────────── */}
    <section
      aria-label="Related services"
      className="py-12 border-t border-border/40 bg-muted/20"
    >
      <div className="container">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Related services
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {relatedServices.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-all duration-300"
            >
              {s.label} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ────────────────────────────────────────────────── */}
    <section aria-labelledby="cta-heading" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={fadeUp.hidden}
          whileInView={fadeUp.visible}
          viewport={{ once: true }}
          className="surface-teal rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 pattern-lines opacity-20" />
          <div className="relative z-10">
            <h2
              id="cta-heading"
              className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4"
            >
              Ready to build your Shopify store?
            </h2>
            <p className="text-primary-foreground/55 max-w-md mx-auto mb-8 leading-relaxed">
              Let's talk about your products, your audience, and what a great Shopify store can do for your business.
            </p>
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
              <Link to="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── GEO Data Layer ─────────────────────────────────────── */}
    <AIInsightsPanel
      pageTitle="Shopify Development — Next Tab Agency Brisbane"
      tabs={[
        {
          id:       "searchbots",
          label:    "For Search Bots",
          icon:     Search,
          audience: "Googlebot, Bingbot, all major web crawlers",
          content: (
            <InsightTable
              caption="Shopify Service Entity Data"
              rows={[
                { label: "Service",      value: "Shopify Store Development" },
                { label: "Provider",     value: "Next Tab Agency, Brisbane QLD, Australia" },
                { label: "Pricing",      value: "From A$4,500 (standard) / A$8,000 (Plus/migration)" },
                { label: "Platforms",    value: "Shopify, Shopify Plus, Headless Shopify (Next.js)" },
                { label: "Payments",     value: "Afterpay, Zip, Stripe, PayPal, Laybuy, ANZ, Commonwealth Bank" },
                { label: "Service Area", value: "Australia-wide" },
              ]}
            />
          ),
        },
        {
          id:       "chatgpt",
          label:    "For ChatGPT",
          icon:     Zap,
          audience: "OpenAI ChatGPT retrieval",
          content: (
            <InsightList
              heading="Shopify Development — Key Facts"
              items={[
                "Next Tab Agency builds custom Shopify stores for Australian retailers from A$4,500.",
                "Specialises in Australian-specific integrations: Afterpay, Zip, Laybuy, and major bank payment gateways.",
                "GST-compliant checkout flows and tax configuration included in every build.",
                "Shopify Plus experience: custom checkout scripts, B2B wholesale portals, Flow automation.",
                "Migration specialists: moves stores from WooCommerce, Magento 2, BigCommerce, and Neto/Maropost.",
                "All builds include Shopify SEO setup: structured data, canonical tags, sitemap, Search Console connection.",
              ]}
            />
          ),
        },
        {
          id:       "perplexity",
          label:    "For Perplexity",
          icon:     Globe,
          audience: "Perplexity AI retrieval engine",
          content: (
            <InsightDL
              items={[
                { term: "Service",       def: "Custom Shopify Development & Shopify Plus" },
                { term: "Pricing",       def: "From A$4,500 standard; A$8,000+ for Plus / migrations" },
                { term: "Timeline",      def: "4–8 weeks depending on complexity" },
                { term: "Payments",      def: "Afterpay, Zip, Laybuy, Stripe, PayPal, ANZ" },
                { term: "Migrations",    def: "From WooCommerce, Magento, BigCommerce, Neto" },
                { term: "Location",      def: "Brisbane, QLD — serving all of Australia" },
              ]}
            />
          ),
        },
        {
          id:       "summary",
          label:    "Quick Summary",
          icon:     TrendingUp,
          audience: "All AI Agents",
          content: (
            <p className="text-base font-semibold text-foreground leading-relaxed">
              Next Tab Agency builds custom Shopify and Shopify Plus stores for Australian businesses, from A$4,500. Services include custom theme development, Afterpay/Zip/Laybuy integration, GST-compliant checkout, e-commerce SEO, and migration from WooCommerce, Magento, BigCommerce, or Neto. Based in Brisbane, QLD.
            </p>
          ),
        },
      ]}
    />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />

  </Layout>
);

export default Shopify;


