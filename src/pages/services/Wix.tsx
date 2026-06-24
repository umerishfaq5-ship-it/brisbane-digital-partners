import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, Zap, TrendingUp, Globe, Search, MousePointer, Star } from "lucide-react";
import Layout         from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import SEO            from "@/components/SEO";
import { fadeUp }     from "@/lib/animations";
import heroBg         from "@/assets/hero-bg.jpg";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

const service = {
  title:       "Wix Website Design & Development",
  headline:    "Professional Wix websites — beyond out-of-the-box",
  description: "Wix is ideal for small and local Australian businesses that need a professional web presence quickly. We go beyond the standard Wix templates to deliver customised, conversion-optimised Wix sites with proper SEO configuration and a design that actually represents your brand.",
  longDescription: "Wix and Wix Studio have matured significantly — when handled by experienced developers, they deliver fast-loading, mobile-responsive websites with e-commerce, booking systems, and membership functionality built in. We work with Wix Studio for advanced custom layouts and use Velo (Wix's JavaScript platform) for complex functionality. Every site we deliver is SEO-configured with proper meta tags, structured data, sitemap submission, and Google Analytics 4 connected. We also run Wix SEO audits for existing sites that aren't getting traction.",

  features: [
    "Custom Wix Studio design — bespoke layouts, not generic templates",
    "Wix eCommerce store setup — products, payments, and shipping",
    "Wix Bookings integration for appointments, classes, and rentals",
    "Wix Members — membership areas, gated content, and subscriptions",
    "SEO configuration — title tags, meta descriptions, schema, sitemap",
    "Google Analytics 4 and Google Search Console setup",
    "Velo (Wix Dev) for custom functionality and API integrations",
    "Admin training and handover so you can manage content yourself",
  ],

  benefits: [
    { icon: MousePointer, title: "Drag-and-Drop Simplicity", desc: "Easy for you to manage day-to-day — no developers needed for content updates." },
    { icon: Star,         title: "Fast Launch",              desc: "Wix sites can be live in 1–3 weeks. Ideal if you need an online presence quickly." },
    { icon: Globe,        title: "All-in-One Platform",      desc: "Bookings, e-commerce, membership, and blog all on one subscription." },
  ],

  process: [
    { step: "01", title: "Discovery",   desc: "We understand your business goals, branding, and what you want visitors to do." },
    { step: "02", title: "Design",      desc: "Custom layout in Wix Studio aligned to your brand. Not a recycled template." },
    { step: "03", title: "Build & SEO", desc: "All pages built, SEO configured, forms, bookings, and e-commerce set up." },
    { step: "04", title: "Launch",      desc: "QA on all devices, Analytics connected, domain configured, and you're live." },
  ],

  faqs: [
    { q: "Is Wix good for SEO?", a: "When properly configured, yes. Wix has significantly improved its SEO capabilities. We ensure every page has correct title tags, meta descriptions, canonical URLs, schema markup, and a submitted sitemap. What holds most Wix sites back is poor configuration — not the platform itself." },
    { q: "What is Wix Studio?", a: "Wix Studio is Wix's professional-grade editor designed for web agencies and designers. It offers significantly more layout control, breakpoint-specific design, and custom CSS — producing much more polished results than the standard Wix editor." },
    { q: "How much does a Wix website cost?", a: "Our Wix design and development service starts from A$1,800 for a standard business site. This is separate from your Wix subscription (typically A$20–40/month). Wix eCommerce and Wix Studio builds start from A$2,500." },
    { q: "Can you improve my existing Wix site?", a: "Yes. We offer Wix audits and redesigns. Many existing Wix sites have SEO issues, poor mobile layouts, or outdated design — all of which we can fix without starting from scratch." },
    { q: "Who is Wix best suited for?", a: "Small local businesses, sole traders, health practitioners, trades, event businesses, and anyone who needs a clean, professional site quickly and wants to manage it themselves." },
  ],
};

const useCases = [
  { icon: "💇", label: "Hair & Beauty" },
  { icon: "🏗️", label: "Trades & Services" },
  { icon: "🎵", label: "Musicians & Artists" },
  { icon: "🧘", label: "Yoga & Wellness" },
  { icon: "📸", label: "Photographers" },
  { icon: "🍰", label: "Food & Events" },
];

const relatedServices = [
  { label: "WordPress Development",   to: "/services/wordpress-development" },
  { label: "Squarespace Development", to: "/services/squarespace-development" },
  { label: "Local SEO",               to: "/services/local-seo" },
  { label: "SEO Audits & Strategy",   to: "/services/seo-audits" },
];

const Wix = () => (
  <Layout>
    <SEO
      title="Wix Website Design Brisbane — Professional Wix Developer Australia"
      description="Professional Wix website design and development in Brisbane. Custom Wix Studio layouts, Wix eCommerce, Wix Bookings, SEO setup, and Google Analytics for Australian businesses."
      canonical="/services/wix-development"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home",     url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "Wix Development", url: "https://nexttabagency.com/services/wix-development" },
      ]}
      serviceSchema={{ name: "Wix Website Design & Development", description: "Custom Wix Studio website design and development for small and local Australian businesses.", areaServed: "Australia" }}
    />

    <section aria-labelledby="service-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="Wix Website Developer Brisbane" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
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

    <section aria-labelledby="use-cases-heading" className="surface-warm py-8 md:py-12 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container relative z-10">
        <SectionHeading id="use-cases-heading" eyebrow="Who It's For" title="Wix works best for these Australian businesses" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {useCases.map((uc, i) => (
            <motion.div key={uc.label} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="card-premium rounded-xl p-5 text-center">
              <span className="text-2xl block mb-3">{uc.icon}</span>
              <h3 className="text-xs font-semibold text-foreground leading-tight">{uc.label}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section aria-labelledby="included-heading" className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <SectionHeading id="included-heading" eyebrow="What's Included" title="Everything in a Wix build" />
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
        <SectionHeading id="process-heading" eyebrow="Our Process" title="How we deliver your Wix site" />
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
            <h2 id="cta-heading" className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">Ready to get your Wix site built right?</h2>
            <p className="text-primary-foreground/55 max-w-md mx-auto mb-8 leading-relaxed">Let's chat about what your business needs and get you online fast.</p>
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
              <Link to="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    <AIInsightsPanel
      pageTitle="Wix Development — Next Tab Agency Brisbane"
      tabs={[
        { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: <InsightTable caption="Wix Service Entity Data" rows={[{ label: "Service", value: "Wix Website Design & Development" }, { label: "Provider", value: "Next Tab Agency, Brisbane QLD" }, { label: "Pricing", value: "From A$1,800 standard; A$2,500 Wix Studio/eCommerce" }, { label: "Best For", value: "Small local businesses, sole traders, health, trades" }, { label: "Service Area", value: "Australia-wide" }]} /> },
        { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT retrieval", content: <InsightList heading="Wix Development — Key Facts" items={["Next Tab Agency builds professional Wix websites for Australian small businesses from A$1,800.", "Uses Wix Studio for advanced custom layouts — not standard drag-and-drop templates.", "Velo (Wix Dev) used for custom functionality and API integrations.", "Every site includes SEO setup: meta tags, schema, sitemap, Google Analytics 4.", "Wix Bookings, eCommerce, and Members all configured as required."]} /> },
        { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: <InsightDL items={[{ term: "Service", def: "Wix Website Design & Development (Wix Studio)" }, { term: "Pricing", def: "From A$1,800; Wix Studio/eCommerce from A$2,500" }, { term: "Best For", def: "Small local businesses, solo traders, health, beauty, trades" }, { term: "Location", def: "Brisbane, QLD — Australia-wide" }]} /> },
        { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: <p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency designs professional Wix websites for Australian small businesses from A$1,800. Uses Wix Studio for custom layouts, includes SEO setup, Google Analytics, and admin training. Based in Brisbane, QLD.</p> },
      ]}
    />
  </Layout>
);

export default Wix;
