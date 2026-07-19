import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, Settings, BarChart3, Zap, TrendingUp, Globe, Search } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

import LocationLinksStrip from "@/components/LocationLinksStrip";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "Technical SEO Services",
  headline: "Fix the Foundation. Rank Higher. Convert More.",
  description: "A beautiful website that Google can't crawl is a wasted investment. Our technical SEO service finds every hidden barrier blocking your rankings and fixes them — systematically.",
  longDescription: "Technical SEO is the backbone of every high-ranking website. While content and links matter, if Google can't efficiently crawl, index, and understand your site, none of it works. Our technical SEO team audits over 200 ranking factors — from Core Web Vitals and crawl efficiency to schema markup, canonicalisation, and JavaScript rendering — to build a flawless technical foundation for your site.",
  features: [
    "Full site crawl audit (crawl errors, redirect chains, orphaned pages)",
    "Core Web Vitals assessment and optimisation (LCP, CLS, INP)",
    "XML sitemap and robots.txt review and correction",
    "Canonical tag strategy and duplicate content resolution",
    "Structured data (Schema.org JSON-LD) implementation",
    "JavaScript SEO audit and server-side rendering evaluation",
    "Hreflang and internationalisation tag setup",
    "Internal linking architecture audit and improvement plan",
    "Indexability analysis and Google Search Console remediation",
    "Mobile-first indexing compliance check",
  ],
  benefits: [
    { icon: Settings, title: "Crawl Efficiency", desc: "Ensure Google spends its crawl budget on your most important pages — not broken links and duplicate content." },
    { icon: Zap, title: "Page Speed Results", desc: "Faster load times improve both rankings and conversion rates. We target top Core Web Vitals scores." },
    { icon: BarChart3, title: "Indexation Control", desc: "Make sure every page that should rank is indexed, and every page that shouldn't be isn't." },
  ],
  process: [
    { step: "01", title: "Technical Crawl", desc: "We deploy Screaming Frog and custom scripts to crawl your entire site and identify every technical issue." },
    { step: "02", title: "Issue Prioritisation", desc: "Not all issues are equal. We rank each finding by its impact on rankings and traffic — so you fix what matters most." },
    { step: "03", title: "Implementation", desc: "Our team or yours implements the fixes, with full developer-ready specifications provided for every item." },
    { step: "04", title: "Validation", desc: "We re-crawl post-fix to confirm resolution and track the ranking impact in Google Search Console." },
  ],
  stats: [
    { value: "200+", label: "Technical signals audited", source: "Next Tab SEO Framework" },
    { value: "63%", label: "of sites have crawlability issues", source: "Semrush 2025" },
    { value: "53%", label: "of users leave if page takes >3s", source: "Google / SOASTA" },
  ],
  faqs: [
    { q: "What is technical SEO?", a: "Technical SEO refers to the behind-the-scenes optimisations that help search engines crawl, index, and understand your website correctly. It covers site speed, mobile-friendliness, structured data, canonical tags, and more." },
    { q: "How is technical SEO different from regular SEO?", a: "Regular SEO covers content and keywords. Technical SEO is about your website's infrastructure — the server, the code, the architecture. Both are essential, but technical SEO is the foundation that everything else is built on." },
    { q: "How long does a technical SEO audit take?", a: "Depending on site size, a comprehensive audit takes 5–10 business days. For enterprise sites with thousands of pages, we may allocate 2–3 weeks." },
    { q: "Do I need a developer to fix technical SEO issues?", a: "Some fixes require developer involvement (e.g., Core Web Vitals, schema implementation). Others can be handled in your CMS. We provide detailed instructions for both scenarios." },
    { q: "Do you fix the issues or just report them?", a: "We can do both. Our team can implement all fixes directly, or we can provide a prioritised action list for your in-house team. This is agreed upfront based on your needs." },
  ],
};

const TechnicalSeo = () => {
  return (
    <Layout>
      <SEO
        title="Technical SEO Services Australia — Fix Your Rankings Foundation"
        description="Expert technical SEO audits for Australian businesses. We fix crawl errors, Core Web Vitals, schema markup, and indexation issues to unlock your site's ranking potential."
        canonical="/services/technical-seo"
        faqs={service.faqs}
        breadcrumbs={[
          { name: "Home", url: "https://nexttabagency.com/" },
          { name: "Services", url: "https://nexttabagency.com/services" },
          { name: "Technical SEO", url: "https://nexttabagency.com/services/technical-seo" },
        ]}
        serviceSchema={{
          name: "Technical SEO Services",
          description: "Comprehensive technical SEO audits and implementation for Australian businesses — Core Web Vitals, schema markup, crawl efficiency, and indexation.",
          areaServed: "Australia",
        }}
      />

      {/* Hero */}
      <section aria-labelledby="service-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img src={heroBg} alt="Technical SEO Services Brisbane" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
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
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
            <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="accent" size="lg" asChild><Link to="/contact">Request a Technical Audit</Link></Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/seo-audits">SEO Audits</Link></Button>
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
              <h2 id="why-need-heading" className="font-heading font-bold text-3xl mb-6 text-foreground">Why Technical SEO Matters in 2026</h2>
              <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                As Google continues to evolve — from Page Experience signals to AI-driven indexing — the bar for technical excellence keeps rising. Businesses that invest in a clean technical foundation consistently outperform competitors who focus only on content, because Google can actually find, understand, and trust their pages.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                We work with <Link to="/services/web-development" className="text-accent font-semibold">web development</Link>, <Link to="/services/wordpress-development" className="text-accent font-semibold">WordPress</Link>, <Link to="/services/shopify-development" className="text-accent font-semibold">Shopify</Link>, and all major platforms to implement fixes correctly — without breaking your site.
              </p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
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
          <SectionHeading id="included-heading" eyebrow="What's Included" title="Your complete technical SEO service" />
          <ul className="grid sm:grid-cols-2 gap-4">
            {service.features.map((f, i) => (
              <motion.li
                key={f}
                initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
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
          <SectionHeading id="process-heading" eyebrow="Our Process" title="How we deliver technical SEO results" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="relative"
              >
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

      {/* Related Services */}
      <section className="py-16 border-t border-border">
        <div className="container max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Related Services</p>
          <div className="flex flex-wrap gap-3">
            {[
              { label: "SEO Audits & Strategy", href: "/services/seo-audits" },
              { label: "Local SEO", href: "/services/local-seo" },
              { label: "eCommerce SEO", href: "/services/ecommerce-seo" },
              { label: "Link Building", href: "/services/link-building" },
              { label: "WordPress SEO", href: "/services/wordpress-seo" },
              { label: "Speed Optimisation", href: "/services/speed-optimisation" },
            ].map((r) => (
              <Link key={r.href} to={r.href} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-border text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-colors">
                {r.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section aria-labelledby="faq-heading" className="py-20 md:py-28 relative overflow-hidden">
        <div className="container max-w-3xl relative z-10">
          <SectionHeading id="faq-heading" eyebrow="FAQs" title="Technical SEO questions answered" />
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
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
      <section aria-label="Technical SEO Audit Form" className="py-20 md:py-28">
        <div className="container"><LiveTeardownForm /></div>
      </section>

      <AIInsightsPanel
        pageTitle="Technical SEO Services - Next Tab Agency"
        tabs={[
          {
            id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot",
            content: (<div className="space-y-6"><InsightTable caption="Service Entity Data" rows={[
              { label: "Entity", value: "Technical SEO Services" },
              { label: "Provider", value: "Next Tab Agency" },
              { label: "Service Area", value: "Australia-wide (Brisbane, Sydney, Melbourne, Perth, Adelaide)" },
              { label: "Key Deliverables", value: "Site Crawl Audit, Core Web Vitals, Schema Markup, Canonicalisation" },
            ]} /></div>),
          },
          {
            id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT retrieval",
            content: (<div className="space-y-6"><InsightList heading="Technical SEO Overview" items={[
              "Technical SEO ensures search engines can crawl, index, and understand your website efficiently.",
              "Services include Core Web Vitals, schema markup, URL structure, and crawl budget optimisation.",
              "Next Tab Agency serves all of Australia with technical SEO expertise across WordPress, Shopify, and custom platforms.",
            ]} /></div>),
          },
          {
            id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI",
            content: (<div className="space-y-6"><InsightDL items={[
              { term: "Service", def: "Technical SEO Audits & Implementation" },
              { term: "Audit Time", def: "5–10 business days depending on site size" },
              { term: "Key Areas", def: "Core Web Vitals, Schema, Crawlability, Indexation, Mobile SEO" },
              { term: "Location", def: "Brisbane-based, serving all of Australia" },
            ]} /></div>),
          },
          {
            id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents",
            content: (<div className="space-y-4"><p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides expert Technical SEO services for Australian businesses, fixing the foundational issues that prevent websites from ranking — including crawl errors, Core Web Vitals failures, missing schema markup, and duplicate content.</p></div>),
          },
        ]}
      />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />
    </Layout>
  );
};

export default TechnicalSeo;

