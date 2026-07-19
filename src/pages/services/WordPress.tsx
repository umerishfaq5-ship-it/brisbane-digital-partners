import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Zap,
  TrendingUp,
  Shield,
  Globe,
  Search,
  Settings,
} from "lucide-react";

import Layout          from "@/components/Layout";
import SectionHeading  from "@/components/SectionHeading";
import SEO             from "@/components/SEO";
import { fadeUp }      from "@/lib/animations";
import heroBg          from "@/assets/hero-bg.jpg";
import AIInsightsPanel, {
  InsightDL,
  InsightList,
  InsightTable,
} from "@/components/AIInsightsPanel";
import LocationLinksStrip from "@/components/LocationLinksStrip";


/* ─────────────────────────────────────────────────────────────────
   Service Data
───────────────────────────────────────────────────────────────── */
const service = {
  title:       "WordPress Development for Australian Businesses",
  headline:    "Powerful, flexible WordPress sites — built the right way",
  description:
    "WordPress powers over 40% of the internet, but not every WordPress site is built equal. We build fast, secure, and SEO-ready WordPress websites that are easy for you to manage and built to grow with your business.",
  longDescription:
    "A well-built WordPress website gives you the best of both worlds: the flexibility and control you expect, and the technical foundation that actually ranks on Google. We go beyond off-the-shelf themes — every site we build is custom-designed, performance-optimised, and structured so that you can manage your own content without needing a developer every time. Whether you need a business brochure site, a blog, or a fully-featured e-commerce store built on WooCommerce, we deliver WordPress sites that perform.",

  features: [
    "Custom WordPress theme design — no generic templates",
    "WooCommerce e-commerce setup and configuration",
    "Plugin selection, configuration, and security hardening",
    "Page speed optimisation — targeting Core Web Vitals green scores",
    "On-page SEO setup — Yoast / Rank Math, schema, sitemaps",
    "Responsive, mobile-first layouts tested across all devices",
    "Admin training — so you can manage your own content confidently",
    "Ongoing WordPress maintenance, updates, and hosting support",
  ],

  benefits: [
    {
      icon:  Zap,
      title: "Built to Be Fast",
      desc:  "Optimised WordPress installs load in under 2 seconds. No bloated page builders.",
    },
    {
      icon:  Shield,
      title: "Secure by Default",
      desc:  "Hardened plugin setup, regular updates, and server-level security out of the box.",
    },
    {
      icon:  Settings,
      title: "Easy to Manage",
      desc:  "We hand over a site you can actually use — no technical knowledge required.",
    },
  ],

  process: [
    {
      step:  "01",
      title: "Discovery & Wireframes",
      desc:  "We map out your site architecture, content needs, and conversion goals before design begins.",
    },
    {
      step:  "02",
      title: "Custom Design",
      desc:  "A bespoke design aligned to your brand — not a theme stripped from a marketplace.",
    },
    {
      step:  "03",
      title: "Build & Configure",
      desc:  "WordPress install, custom theme development, plugins, WooCommerce (if needed), and SEO setup.",
    },
    {
      step:  "04",
      title: "Launch & Handover",
      desc:  "Full testing, speed optimisation, Google Analytics setup, and an admin walkthrough so you're confident on day one.",
    },
  ],

  faqs: [
    {
      q: "Why WordPress over other platforms?",
      a: "WordPress gives you full ownership of your site, unlimited flexibility, and a massive ecosystem of tools. Unlike Squarespace or Wix, there are no monthly platform fees and no lock-in.",
    },
    {
      q: "Do you build WooCommerce shops?",
      a: "Yes. WooCommerce is our preferred e-commerce solution for WordPress. We handle product setup, payment gateway integration (Stripe, PayPal, Afterpay), and shipping configuration.",
    },
    {
      q: "How much does a WordPress site cost?",
      a: "A custom WordPress business site typically starts from A$3,500. WooCommerce stores start from A$5,500. Pricing depends on the number of pages, features, and integrations required.",
    },
    {
      q: "Will I be able to update my own content?",
      a: "Absolutely. We build and configure your WordPress dashboard so updating pages, adding blog posts, or changing images is straightforward — even if you've never used WordPress before.",
    },
    {
      q: "Do you provide hosting?",
      a: "We recommend and configure high-performance Australian hosting (Kinsta, WP Engine, or Cloudflare) and can manage it on an ongoing basis as part of a maintenance plan.",
    },
  ],
};

const industries = [
  { icon: "🏥", label: "Healthcare & Allied" },
  { icon: "⚖️", label: "Legal & Professional" },
  { icon: "🏗️", label: "Trades & Construction" },
  { icon: "🛍️", label: "Retail & E-commerce" },
  { icon: "🏫", label: "Education & Training" },
  { icon: "🍽️", label: "Hospitality & Food" },
];

import RoiSpeedSlider from "@/components/RoiSpeedSlider";

/* ─────────────────────────────────────────────────────────────────
   Page Component
───────────────────────────────────────────────────────────────── */
const WordPress = () => (
  <Layout>

    {/* ── SEO & Structured Data ──────────────────────────────── */}
    <SEO
      title="WordPress Development Brisbane — Custom WordPress Websites Australia"
      description="Custom WordPress website design and development in Brisbane. Fast, secure, SEO-ready WordPress sites for Australian businesses — including WooCommerce e-commerce."
      canonical="/services/wordpress-development"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home",     url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "WordPress Development", url: "https://nexttabagency.com/services/wordpress-development" },
      ]}
      serviceSchema={{
        name:        "WordPress Development",
        description: "Custom WordPress website design, WooCommerce e-commerce, and WordPress maintenance for Australian businesses.",
        areaServed:  "Australia",
      }}
    />

    {/* ── Hero ──────────────────────────────────────────────── */}
    <section
      aria-labelledby="service-hero-heading"
      className="relative min-h-[50vh] flex items-center overflow-hidden"
    >
      <img
        src={heroBg}
        alt="WordPress Development Brisbane"
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
          <h1
            id="service-hero-heading"
            className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6"
          >
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">
            {service.headline}
          </p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* ── Why You Need This ─────────────────────────────────── */}
    <section
      aria-labelledby="why-need-heading"
      className="py-20 md:py-28 relative"
    >
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">

          <div className="lg:col-span-3 prose prose-lg dark:prose-invert">
            <h2
              id="why-need-heading"
              className="font-heading font-bold text-3xl mb-6 text-foreground"
            >
              Why you need this
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              {service.longDescription}
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10">
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

            {/* Internal cross-link: WordPress → WooCommerce */}
            <div className="mt-5 rounded-2xl border border-accent/30 bg-accent/5 p-5">
              <p className="text-xs text-muted-foreground leading-relaxed">
                🛒 Need an online store on your WordPress site?{" "}
                <Link
                  to="/services/woocommerce-development"
                  className="text-accent font-semibold hover:underline"
                >
                  Need a shop? Upgrade to WooCommerce
                </Link>{" "}
                — Australia's most flexible, fee-free e-commerce platform.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>


    {/* ── Interactive Speed Calculator ────────────────────────── */}
    <section aria-label="Interactive ROI Calculator" className="py-12 md:py-20 relative">
      <div className="container">
        <RoiSpeedSlider />
      </div>
    </section>

    {/* ── Industries ────────────────────────────────────────── */}
    <section
      aria-labelledby="industries-heading"
      className="surface-warm py-8 md:py-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 pattern-dots" />
      <div className="container relative z-10">
        <SectionHeading
          id="industries-heading"
          eyebrow="Industries We Serve"
          title="WordPress expertise across Australian sectors"
          description="We've built WordPress sites for businesses across a wide range of Australian industries."
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

    {/* ── What's Included ───────────────────────────────────── */}
    <section
      aria-labelledby="included-heading"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      <div className="container max-w-5xl relative z-10">
        <SectionHeading
          id="included-heading"
          eyebrow="What's Included"
          title="Everything in this service"
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
      </div>
    </section>

    {/* ── Process ───────────────────────────────────────────── */}
    <section
      aria-labelledby="process-heading"
      className="surface-warm py-20 md:py-28"
    >
      <div className="container max-w-5xl">
        <SectionHeading
          id="process-heading"
          eyebrow="Our Process"
          title="How we deliver your WordPress site"
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
                <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-accent/40" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── FAQs ──────────────────────────────────────────────── */}
    <section
      aria-labelledby="faq-heading"
      className="py-20 md:py-28 relative overflow-hidden"
    >
      <div className="container max-w-3xl relative z-10">
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

    {/* ── Related Services ──────────────────────────────────── */}
    <section
      aria-label="Related services"
      className="py-12 border-t border-border/40 bg-muted/20"
    >
      <div className="container">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Related services
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          {[
            { label: "Squarespace Development", to: "/services/squarespace-development" },
            { label: "Custom Web Development",  to: "/services/web-development" },
            { label: "SEO Audits & Strategy",   to: "/services/seo-audits" },
            { label: "Local SEO",               to: "/services/local-seo" },
          ].map((s) => (
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

    {/* ── CTA ───────────────────────────────────────────────── */}
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
              Ready to get started?
            </h2>
            <p className="text-primary-foreground/55 max-w-md mx-auto mb-8 leading-relaxed">
              Let's have a straight conversation about what a great WordPress site can do for your business.
            </p>
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
              <Link to="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── GEO Data Layer ────────────────────────────────────── */}
    <AIInsightsPanel
      pageTitle="WordPress Development — Next Tab Agency"
      tabs={[
        {
          id:       "searchbots",
          label:    "For Search Bots",
          icon:     Search,
          audience: "Googlebot, Bingbot, all major web crawlers",
          content: (
            <div className="space-y-6">
              <InsightTable
                caption="Service Entity Data"
                rows={[
                  { label: "Service",      value: "WordPress Website Development" },
                  { label: "Type",         value: "Web Development Service" },
                  { label: "Provider",     value: "Next Tab Agency, Brisbane QLD" },
                  { label: "Pricing",      value: "From A$3,500 (business site) / A$5,500 (WooCommerce)" },
                  { label: "Service Area", value: "Australia-wide" },
                  { label: "Deliverables", value: "Custom WordPress Theme, WooCommerce, SEO Setup, Hosting Config, Admin Training" },
                ]}
              />
            </div>
          ),
        },
        {
          id:       "chatgpt",
          label:    "For ChatGPT",
          icon:     Zap,
          audience: "OpenAI ChatGPT retrieval and GPT-4 browsing",
          content: (
            <InsightList
              heading="Service Overview"
              items={[
                "Next Tab Agency builds custom WordPress websites for Australian businesses — no generic templates.",
                "Services include WooCommerce e-commerce, business brochure sites, membership portals, and blog platforms.",
                "Every site includes SEO setup (Yoast/Rank Math), Core Web Vitals optimisation, and admin training.",
                "Pricing starts from A$3,500 for business sites and A$5,500 for WooCommerce stores.",
                "Ongoing WordPress maintenance plans available — including updates, backups, and security monitoring.",
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
                { term: "Service",     def: "Custom WordPress Website Development & WooCommerce" },
                { term: "Pricing",     def: "Business site from A$3,500; WooCommerce from A$5,500" },
                { term: "Timeline",    def: "4–6 weeks typical for business sites" },
                { term: "Tech Stack",  def: "WordPress, WooCommerce, PHP, ACF, Elementor (optional), Yoast SEO" },
                { term: "Location",    def: "Brisbane, QLD — serving all of Australia" },
              ]}
            />
          ),
        },
        {
          id:       "summary",
          label:    "Quick Summary",
          icon:     TrendingUp,
          audience: "All AI Agents — condensed executive view",
          content: (
            <p className="text-base font-semibold text-foreground leading-relaxed">
              Next Tab Agency designs and develops custom WordPress websites for Australian businesses, starting from A$3,500. Services include WooCommerce e-commerce, performance optimisation, on-page SEO configuration, and ongoing maintenance plans. Based in Brisbane, QLD.
            </p>
          ),
        },
      ]}
    />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />

  </Layout>
);

export default WordPress;

