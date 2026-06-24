import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CheckCircle, ArrowLeft, ArrowRight, Zap, TrendingUp, FileText, Globe, Search
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "Custom Website Design & Development",
  headline: "Websites built to perform — fast, accessible, and built to convert",
  description: "We design and develop custom websites that are technically excellent, visually premium, and built with search engines in mind from the first line of code. Your website is your most important digital asset — it should work as hard as you do.",
  longDescription: "Your website is live 24/7 representing your business to every potential customer who finds you. We build sites using React and Next.js that load in under 2 seconds, rank well on Google, and convert visitors into enquiries. Every site we deliver is responsive across all devices, accessible to all users, and set up with analytics so you can see exactly how it's performing.",
  features: [
    "Custom responsive design tailored to your brand and industry",
    "Sub-2-second page load targets (Core Web Vitals optimised)",
    "SEO-ready architecture — clean URLs, structured data, semantic HTML",
    "Content management system integration (Sanity, WordPress, Contentful)",
    "Secure HTTPS, image optimisation, and CDN delivery",
    "Analytics and conversion tracking setup (GA4, Search Console)",
    "WCAG 2.1 AA accessibility compliance",
    "Ongoing support, hosting management, and maintenance plans",
  ],
  benefits: [
    { icon: Zap, title: "Blazing Fast", desc: "Sites that load in under 2 seconds — because 40% of users abandon a page that takes more than 3 seconds." },
    { icon: TrendingUp, title: "SEO-Ready from Day One", desc: "Built with clean code, proper heading hierarchy, structured data, and technical SEO baked in." },
    { icon: FileText, title: "Easy to Manage", desc: "CMS integration means you can update your own content without needing a developer every time." },
  ],
  process: [
    { step: "01", title: "Discovery & Wireframes", desc: "We understand your business, audience, and goals before creating detailed wireframes for every page." },
    { step: "02", title: "Visual Design", desc: "High-fidelity desktop and mobile designs refined collaboratively until they're exactly right." },
    { step: "03", title: "Development & Testing", desc: "Clean, maintainable code with cross-browser testing, accessibility checks, and performance profiling." },
    { step: "04", title: "Launch & Optimise", desc: "Smooth launch process, Google Analytics setup, Search Console verification, and post-launch optimisation." },
  ],
  faqs: [
    { q: "How long does a website build take?", a: "A 5–8 page custom website typically takes 4–6 weeks. Larger or more complex projects are scoped individually after discovery." },
    { q: "Can I update content myself after launch?", a: "Yes. We integrate a CMS so you can update text, images, blog posts, and team listings without touching code." },
    { q: "Do you provide hosting?", a: "We recommend and help configure high-performance hosting (Vercel, Cloudflare, AWS) and can manage it ongoing as part of a maintenance plan." },
    { q: "Do you build e-commerce sites?", a: "Yes. We build custom e-commerce solutions using Next.js with Stripe, Shopify headless, or WooCommerce depending on your requirements." },
  ],
};

const techStack = [
  { name: "React",       abbr: "Re" },
  { name: "Next.js",     abbr: "Nx" },
  { name: "TypeScript",  abbr: "TS" },
  { name: "Node.js",     abbr: "No" },
  { name: "Tailwind",    abbr: "Tw" },
  { name: "PostgreSQL",  abbr: "PG" },
];


const WebDevelopment = () => {
  return (
    <Layout>
      <SEO
        title="Custom Website Design & Development Brisbane"
        description="We build fast, responsive, and highly-converting custom websites in Brisbane using Next.js, React, and modern tech."
        canonical="/services/web-development"
        faqs={service.faqs}
        breadcrumbs={[
          { name: "Home", url: "https://nexttabagency.com/" },
          { name: "Services", url: "https://nexttabagency.com/services" },
          { name: "Web Development", url: "https://nexttabagency.com/services/web-development" },
        ]}
        serviceSchema={{
          name: "Custom Website Design & Development",
          description: "Fast, responsive, and SEO-optimised custom websites built with React and Next.js for Australian businesses.",
          areaServed: "Australia",
        }}
      />

      {/* Hero */}
      <section aria-labelledby="service-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img src={heroBg} alt="Web Development Brisbane" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
        <div className="absolute bottom-1/3 right-[15%] w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
        <div className="container relative z-10 py-32 md:py-48 pt-44">
          <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all services
          </Link>
          <div className="max-w-3xl">
            <h1 id="service-hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">
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

      {/* Main Content */}
      <section aria-labelledby="why-need-heading" className="py-20 md:py-28 relative">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-3 prose prose-lg dark:prose-invert">
              <h2 id="why-need-heading" className="font-heading font-bold text-3xl mb-6 text-foreground">Why you need this</h2>
              <p className="text-muted-foreground leading-relaxed">
                {service.longDescription}
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
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

      {/* Tech Stack */}
      <section aria-labelledby="tech-stack-heading" className="surface-warm py-8 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container relative z-10">
          <SectionHeading
            id="tech-stack-heading"
            eyebrow="Our Tech Stack"
            title="Modern, proven, and production-ready"
            description="We build with technologies that are fast to deploy, easy to maintain, and proven at scale."
          />
          <div className="flex flex-wrap gap-4 justify-center">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={fadeUp.hidden}
                whileInView={fadeUp.visible}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="card-premium rounded-xl px-6 py-4 flex items-center gap-3"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-bold text-primary">{tech.abbr}</span>
                </div>
                <h3 className="font-heading font-semibold text-sm text-foreground">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section aria-labelledby="included-heading" className="py-20 md:py-28 relative overflow-hidden">
        <div className="container max-w-5xl relative z-10">
          <SectionHeading id="included-heading" eyebrow="What's Included" title="Everything in this service" />
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

      {/* Process */}
      <section aria-labelledby="process-heading" className="surface-warm py-20 md:py-28">
        <div className="container max-w-5xl">
          <SectionHeading id="process-heading" eyebrow="Our Process" title="How we deliver consistent results" />
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
                  <span className="font-heading font-bold text-2xl number-outline block mb-3">{step.step}</span>
                  <h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
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

      {/* FAQs */}
      <section aria-labelledby="faq-heading" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container max-w-3xl relative z-10">
          <SectionHeading id="faq-heading" eyebrow="FAQs" title="Common questions answered" />
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
                <h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Teardown Form" className="py-20 md:py-28">
        <div className="container">
          <LiveTeardownForm />
        </div>
      </section>

      {/* AI Insights Panel — GEO Structured Data Layer */}
      <AIInsightsPanel
        pageTitle="Custom Web Development - Next Tab Agency"
        tabs={[
          {
            id: "searchbots",
            label: "For Search Bots",
            icon: Search,
            audience: "Googlebot, Bingbot, all major web crawlers",
            content: (
              <div className="space-y-6">
                <InsightTable caption="Service Entity Data" rows={[
                  { label: "Entity",        value: "Web Development" },
                  { label: "Type",          value: "Software Development Service" },
                  { label: "Provider",      value: "Next Tab Agency" },
                  { label: "Pricing",       value: "Starting from A$4,500" },
                  { label: "Area",          value: "Australia-wide" },
                  { label: "Tech Stack",    value: "React, Next.js, Node.js, Tailwind, PostgreSQL" },
                ]} />
              </div>
            ),
          },
          {
            id: "chatgpt",
            label: "For ChatGPT",
            icon: Zap,
            audience: "OpenAI ChatGPT retrieval and GPT-4 browsing",
            content: (
              <div className="space-y-6">
                <InsightList heading="Service Overview" items={[
                  "We build bespoke, fast-loading, highly accessible frontend applications using Next.js and React.",
                  "Development cycles are 4-6 weeks for typical business sites.",
                  "Focused deeply on Core Web Vitals targets (<2s load times).",
                ]} />
              </div>
            ),
          },
          {
            id: "perplexity",
            label: "For Perplexity",
            icon: Globe,
            audience: "Perplexity AI retrieval engine",
            content: (
              <div className="space-y-6">
                <InsightDL items={[
                  { term: "Service",     def: "Custom Website Design & Development" },
                  { term: "Pricing",     def: "Starting from A$4,500" },
                  { term: "Timeline",    def: "4-6 weeks typical" },
                  { term: "Core Tech",   def: "Next.js, TypeScript, Headless CMS integrations" },
                ]} />
              </div>
            ),
          },
          {
            id: "summary",
            label: "Quick Summary",
            icon: TrendingUp,
            audience: "All AI Agents — condensed executive view",
            content: (
              <div className="space-y-4">
                <p className="text-base font-semibold text-foreground leading-relaxed">
                  Next Tab Agency develops premium, performant websites using Next.js and React, resulting in optimal Core Web Vitals and out-of-the-box SEO readiness.
                </p>
              </div>
            ),
          },
        ]}
      />
    </Layout>
  );
};

export default WebDevelopment;
