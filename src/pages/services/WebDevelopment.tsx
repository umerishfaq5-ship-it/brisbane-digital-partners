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
  title: "Performance-Driven Web Development Brisbane | Custom React & WordPress",
  headline: "Sub-1s websites built to rank, convert, and outperform every competitor in your Brisbane suburb",
  description: "We design and develop custom websites using the Antigravity framework, React, and Next.js — delivering Core Web Vitals green scores, sub-1s load times, and SEO-ready architecture from the first line of code.",
  longDescription: "Your website is live 24/7 representing your business to every potential customer who finds you. We build sites using React, Next.js, and the Antigravity framework that load in under 1 second for Brisbane users on Australian CDN infrastructure, rank well on Google through proper technical architecture, and convert visitors into enquiries. Every site we deliver is responsive across all devices, accessible to all users, set up with analytics, and optimised for Core Web Vitals — the three Google performance signals that directly impact your search rankings in 2025.",
  features: [
    "Antigravity Framework builds — sub-1s load times for Brisbane users on Australian CDN",
    "Core Web Vitals engineering — LCP, INP, CLS all hitting Google's 'Good' thresholds",
    "Custom responsive design tailored to your brand and industry",
    "SEO-ready architecture — clean URLs, structured data, semantic HTML",
    "Content management system integration (Sanity, WordPress, Contentful)",
    "Secure HTTPS, image optimisation, and CDN delivery via Cloudflare",
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
        title="Performance-Driven Web Development Brisbane | Custom React & Antigravity Framework"
        description="Brisbane web development specialists. We build sub-1s websites using the Antigravity framework, React, and Next.js — Core Web Vitals optimised, SEO-ready, and built to convert."
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

              {/* E-E-A-T: Expert Attribution Box */}
              <div className="mt-5 rounded-2xl border border-accent/30 bg-accent/5 p-5">
                <p className="text-[10px] font-bold text-accent uppercase tracking-[0.15em] mb-3">Led by Our Expert</p>
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={`https://api.dicebear.com/9.x/avataaars/svg?seed=Rohan&backgroundColor=b6e3f4,c0aede&radius=50`}
                    alt="Rohan Gupta — Lead Web Developer, Next Tab Agency"
                    className="w-12 h-12 rounded-full ring-2 ring-accent/30 bg-muted shrink-0"
                    width={48} height={48}
                  />
                  <div>
                    <p className="font-heading font-bold text-foreground text-sm leading-tight">Rohan Gupta</p>
                    <p className="text-xs text-accent font-medium">Lead Web Developer</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">Antigravity Framework & React Specialist</p>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  "Every web development project at Next Tab Agency is engineered for sub-1s load times, green Core Web Vitals, and SEO-ready architecture. We don't build websites — we build revenue machines."
                </p>
                <Link to="/our-team#engineering" className="text-[10px] font-semibold text-accent hover:underline">
                  Meet the full Engineering & UX Lab →
                </Link>
              </div>

              {/* SEO cross-link */}
              <div className="mt-4 rounded-xl border border-border/40 bg-muted/30 p-4 text-center">
                <p className="text-xs text-muted-foreground">
                  Want long-term traffic alongside your site launch?{" "}
                  <Link to="/services/seo-audits" className="text-accent font-semibold hover:underline">
                    Pair your new site with our SEO Foundation Audit
                  </Link>
                </p>
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

      {/* ── Antigravity Framework Section ─────────────────────────── */}
      <section aria-labelledby="antigravity-heading" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="container max-w-5xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">
                <Zap className="w-3.5 h-3.5" />
                Why We're Different
              </span>
              <h2 id="antigravity-heading" className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6 leading-tight">
                Why Our Web Dev Is Different — The Antigravity Framework
              </h2>
              <div className="space-y-5 text-muted-foreground leading-relaxed">
                <p>
                  Most Brisbane web developers focus on design. We focus on <strong className="text-foreground">performance</strong>. Using the Antigravity framework, we deliver websites that load in under 1 second for Brisbane users — measured on real Australian CDN infrastructure, not synthetic lab scores.
                </p>
                <p>
                  Antigravity is a high-performance web build system combining the best of React's component architecture with aggressive code-splitting, preloading, and edge-rendering strategies. The result: <strong className="text-foreground">Lighthouse Performance scores of 95–100</strong> across LCP, INP, and CLS — the Core Web Vitals that directly influence your Google rankings.
                </p>
                <p>
                  Competitors rank because their sites are technically perfect. We make <em>your</em> site the technically perfect one.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="space-y-4"
            >
              {[
                { metric: "<1s", label: "Load Time (LCP)", desc: "Sub-1-second Largest Contentful Paint for Brisbane users on Cloudflare Australian CDN." },
                { metric: "95–100", label: "Lighthouse Score", desc: "Consistently green Performance, Accessibility, Best Practices, and SEO scores." },
                { metric: "0.1", label: "CLS (Layout Shift)", desc: "Zero unexpected layout shifts — professional feel on every device and screen size." },
                { metric: "<200ms", label: "INP (Interactivity)", desc: "Instant response to every tap and click — Google's newest Core Web Vital threshold." },
              ].map((s) => (
                <div key={s.metric} className="card-premium rounded-2xl p-5 flex gap-5 items-start">
                  <div className="shrink-0 text-center">
                    <p className="font-heading font-black text-2xl text-accent">{s.metric}</p>
                    <p className="text-[10px] text-muted-foreground uppercase tracking-wide font-semibold mt-0.5">{s.label}</p>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}

              {/* WooCommerce cross-link */}
              <div className="rounded-2xl border border-accent/30 bg-accent/5 p-5 mt-2">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  🛒 Looking to sell online?{" "}
                  <Link to="/services/woocommerce-development" className="text-accent font-semibold hover:underline">
                    Explore our Custom WooCommerce Solutions
                  </Link>{" "}
                  — built for speed on the same Antigravity performance stack.
                </p>
              </div>
            </motion.div>
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
