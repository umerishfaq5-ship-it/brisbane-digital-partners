import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Zap,
  TrendingUp,
  Palette,
  Globe,
  Search,
  MousePointer,
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
  title:       "Squarespace Design & Development",
  headline:    "Beautiful, polished Squarespace sites — built to impress and convert",
  description:
    "Squarespace is one of the most visually powerful platforms available, but an out-of-the-box Squarespace site won't stand out. We customise, configure, and launch Squarespace websites that look premium, load fast, and are set up to actually help Australian businesses grow.",
  longDescription:
    "Squarespace is the platform of choice for creative businesses, photographers, consultants, and boutique brands that want a stunning online presence without high ongoing development costs. What separates a great Squarespace site from a mediocre one isn't the template — it's the customisation, content strategy, and technical configuration. We handle all of it: custom CSS and code injection, SEO-optimised page structure, e-commerce store setup, booking integration, and a handover that leaves you confident to manage your own site.",

  features: [
    "Template selection and full custom design on top of it",
    "Custom CSS, HTML, and code injection for pixel-perfect results",
    "Squarespace Commerce — product catalogue, payments, shipping",
    "Acuity Scheduling integration for service-based businesses",
    "Blog setup, social integrations, and newsletter configuration",
    "SEO setup — page titles, descriptions, image alt text, canonical tags",
    "Google Analytics 4 and Search Console connection",
    "Admin walkthrough — so you can update your site with confidence",
  ],

  benefits: [
    {
      icon:  Palette,
      title: "Visually Stunning",
      desc:  "Squarespace is built for beautiful design. We push it further with custom code and on-brand styling.",
    },
    {
      icon:  MousePointer,
      title: "Easy to Manage Yourself",
      desc:  "Once built, you have full control. No developer required for day-to-day content updates.",
    },
    {
      icon:  Zap,
      title: "Fast to Launch",
      desc:  "Compared to custom builds, a Squarespace site can be live in 2–3 weeks without sacrificing quality.",
    },
  ],

  process: [
    {
      step:  "01",
      title: "Discovery & Template Selection",
      desc:  "We understand your business, brand, and goals — then select the right Squarespace template as a foundation.",
    },
    {
      step:  "02",
      title: "Custom Design & Content",
      desc:  "We customise the template, apply your brand colours and fonts, and structure your content for conversions.",
    },
    {
      step:  "03",
      title: "Configure & Optimise",
      desc:  "SEO setup, e-commerce config, booking integrations, analytics connection, and performance tuning.",
    },
    {
      step:  "04",
      title: "Launch & Handover",
      desc:  "Thorough QA across all devices, final optimisation, and a clear admin walkthrough before you go live.",
    },
  ],

  faqs: [
    {
      q: "Is Squarespace a good choice for my business?",
      a: "Squarespace is an excellent fit for creative businesses, photographers, consultants, restaurants, boutique retailers, and service businesses that want a premium-looking site without ongoing development costs.",
    },
    {
      q: "Can Squarespace rank on Google?",
      a: "Yes — when configured correctly. We set up all on-page SEO elements including title tags, meta descriptions, canonical tags, image alt text, and submit your sitemap to Google Search Console.",
    },
    {
      q: "How much does a Squarespace site cost?",
      a: "Our Squarespace design and build service starts from A$2,200 for a standard business site. Squarespace Commerce and booking-integrated sites start from A$3,000. This is separate from your Squarespace subscription.",
    },
    {
      q: "Do you handle the Squarespace subscription?",
      a: "You'll hold your own Squarespace subscription — we'll recommend the right plan for your needs. The ongoing cost is typically A$20–50/month directly to Squarespace.",
    },
    {
      q: "How long does it take?",
      a: "Most Squarespace projects are completed in 2–4 weeks, depending on the number of pages and the complexity of e-commerce or booking integrations.",
    },
  ],
};

const useCases = [
  { icon: "📸", label: "Photographers & Creatives" },
  { icon: "🏨", label: "Hospitality & Events" },
  { icon: "💆", label: "Wellness & Beauty" },
  { icon: "👗", label: "Fashion & Boutique Retail" },
  { icon: "💼", label: "Consultants & Coaches" },
  { icon: "🎨", label: "Design & Architecture" },
];

/* ─────────────────────────────────────────────────────────────────
   Page Component
───────────────────────────────────────────────────────────────── */
const Squarespace = () => (
  <Layout>

    {/* ── SEO & Structured Data ──────────────────────────────── */}
    <SEO
      title="Squarespace Design & Development Brisbane — Custom Squarespace Websites"
      description="Professional Squarespace website design and development in Brisbane. Custom Squarespace sites for Australian creative businesses, consultants, and retailers — fast, beautiful, and SEO-configured."
      canonical="/services/squarespace-development"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home",     url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "Squarespace Development", url: "https://nexttabagency.com/services/squarespace-development" },
      ]}
      serviceSchema={{
        name:        "Squarespace Design & Development",
        description: "Custom Squarespace website design, e-commerce setup, and SEO configuration for Australian businesses.",
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
        alt="Squarespace Development Brisbane"
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
          </motion.div>

        </div>
      </div>
    </section>

    {/* ── Best Fits ─────────────────────────────────────────── */}
    <section
      aria-labelledby="use-cases-heading"
      className="surface-warm py-8 md:py-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 pattern-dots" />
      <div className="container relative z-10">
        <SectionHeading
          id="use-cases-heading"
          eyebrow="Who It's For"
          title="Squarespace is the perfect fit for these businesses"
          description="Squarespace's design-forward approach suits certain businesses perfectly."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {useCases.map((uc, i) => (
            <motion.div
              key={uc.label}
              initial={fadeUp.hidden}
              whileInView={fadeUp.visible}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="card-premium rounded-xl p-5 text-center"
            >
              <span className="text-2xl block mb-3">{uc.icon}</span>
              <h3 className="text-xs font-semibold text-foreground leading-tight">
                {uc.label}
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
          title="How we deliver your Squarespace site"
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
            { label: "WordPress Development",  to: "/services/wordpress-development" },
            { label: "Custom Web Development", to: "/services/web-development" },
            { label: "SEO Audits & Strategy",  to: "/services/seo-audits" },
            { label: "Local SEO",              to: "/services/local-seo" },
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
              Let's talk about what a standout Squarespace site can do for your business.
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
      pageTitle="Squarespace Development — Next Tab Agency"
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
                  { label: "Service",      value: "Squarespace Website Design & Development" },
                  { label: "Type",         value: "Web Design Service" },
                  { label: "Provider",     value: "Next Tab Agency, Brisbane QLD" },
                  { label: "Pricing",      value: "From A$2,200 (business site) / A$3,000 (Commerce)" },
                  { label: "Service Area", value: "Australia-wide" },
                  { label: "Deliverables", value: "Custom Squarespace Design, Commerce Setup, SEO Config, Analytics, Admin Training" },
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
                "Next Tab Agency designs custom Squarespace websites for Australian creative businesses, consultants, and boutique retailers.",
                "Services go beyond templates — custom CSS, code injection, content strategy, and full SEO configuration.",
                "Squarespace Commerce setup available — product catalogues, Stripe payments, and shipping rules.",
                "Acuity Scheduling integration for service-based businesses that need online booking.",
                "Pricing from A$2,200 with 2–4 week turnaround. Squarespace subscription held by the client.",
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
                { term: "Service",     def: "Custom Squarespace Design, Development & Commerce" },
                { term: "Pricing",     def: "From A$2,200 (business) / A$3,000 (Commerce)" },
                { term: "Timeline",    def: "2–4 weeks typical" },
                { term: "Platform",    def: "Squarespace (version 7.1) with custom CSS & code injection" },
                { term: "Best For",    def: "Photographers, creatives, consultants, hospitality, boutique retail" },
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
              Next Tab Agency builds premium custom Squarespace websites for Australian businesses, starting from A$2,200. Specialising in creative industries, hospitality, and service businesses. Services include custom design, Squarespace Commerce, booking integrations, SEO setup, and admin training. Based in Brisbane, QLD.
            </p>
          ),
        },
      ]}
    />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />

  </Layout>
);

export default Squarespace;


