import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, Zap, TrendingUp, Globe, Search, RefreshCw, Shield, AlertTriangle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

import LocationLinksStrip from "@/components/LocationLinksStrip";

const service = {
  title: "SEO Migration Services Brisbane",
  headline: "Platform migrations done right — zero rankings lost, traffic preserved.",
  description: "Moving from Wix to WordPress? Rebranding your domain? Platform migration is high-risk SEO territory. One wrong redirect and years of ranking history disappears. We make it safe.",
  longDescription: "SEO migrations are one of the most technically complex — and risky — projects in digital marketing. A botched migration can wipe out years of accumulated Google rankings overnight. Businesses moving from Wix to WordPress, Squarespace to Shopify, or rebranding their domain need a specialist who understands both the technical and algorithmic implications. Our Brisbane SEO migration team has executed migrations for high-traffic Australian websites with zero ranking loss, using a meticulous redirect mapping, crawl validation, and GSC monitoring process.",
  features: [
    "Full pre-migration site crawl and URL inventory (every page, every asset)",
    "301 redirect map creation — old URLs to new URLs, complete coverage",
    "301 redirect implementation and server-level testing across all pages",
    "Page-by-page title, meta description, H1, and canonical tag migration",
    "Internal link audit and update across all migrated content",
    "XML sitemap update and resubmission via Google Search Console",
    "Google Analytics 4 cross-domain tracking configuration",
    "Hreflang tag migration for multilingual Australian/NZ sites",
    "Post-migration crawl audit using Screaming Frog and Ahrefs",
    "30-day post-migration Google Search Console monitoring report",
    "Platform-specific migration: Wix → WordPress, Squarespace → Shopify, and more",
  ],
  benefits: [
    { icon: Shield, title: "Zero Ranking Loss", desc: "Our meticulous redirect mapping and validation process ensures existing Google rankings are fully preserved post-migration." },
    { icon: RefreshCw, title: "Full Traffic Handover", desc: "Every URL, every internal link, every canonical — fully migrated so traffic flows to your new platform from day one." },
    { icon: TrendingUp, title: "Often Ranks Better Post-Migration", desc: "A well-executed migration to a faster, more SEO-friendly platform often results in ranking improvements within 30–60 days." },
  ],
  process: [
    { step: "01", title: "Pre-Migration Audit", desc: "Full crawl of your existing site — every URL, title, meta, backlink source, and ranking keyword logged before a single change is made." },
    { step: "02", title: "Redirect Map & Plan", desc: "Every old URL mapped to its new equivalent with 301 redirects. Complex URL structure changes planned in full before execution." },
    { step: "03", title: "Migration Execution", desc: "Redirects implemented, content migrated, internal links updated, Search Console configured, and sitemaps resubmitted." },
    { step: "04", title: "Post-Migration Monitoring", desc: "30 days of active monitoring via Search Console, Ahrefs, and Analytics. Any ranking drops identified and corrected within 24 hours." },
  ],
  faqs: [
    { q: "What's the biggest SEO migration risk?", a: "Missing redirects. If Google can't follow from your old URL to the new one via a 301 redirect, it treats the new page as brand new — losing all historical ranking signals. Our 100% URL coverage process prevents this." },
    { q: "Can you migrate Wix to WordPress without losing SEO?", a: "Yes. This is one of our most common migrations. Wix has non-standard URL structures that need careful mapping. We've done this successfully for Brisbane businesses maintaining full Google Map Pack and organic rankings." },
    { q: "How long does an SEO migration take?", a: "A typical 50–200 page website migration takes 2–4 weeks. Larger sites (500+ pages) or domain rebrand migrations take 4–8 weeks. We always include 30 days of post-migration monitoring." },
    { q: "What if rankings drop after migration?", a: "A small, temporary dip is normal in the first 1–2 weeks as Google recrawls. Significant or sustained drops indicate a redirect or canonicalisation issue — which we identify and fix within 24 hours via our monitoring process." },
  ],
};

const migrationTypes = [
  { icon: "🔄", title: "Wix → WordPress", desc: "The most common high-ticket migration request. Wix's limited SEO ceiling vs WordPress's unlimited potential." },
  { icon: "🛍️", title: "Squarespace → Shopify", desc: "E-commerce brands outgrowing Squarespace's limited checkout capabilities." },
  { icon: "🌐", title: "Domain Rebrand", desc: "Moving your entire site to a new domain without losing 10 years of Google trust." },
  { icon: "📦", title: "Magento → WooCommerce", desc: "Legacy Magento 1 end-of-life migrations to modern, maintainable WooCommerce." },
  { icon: "🏪", title: "HTTP → HTTPS", desc: "Legacy sites migrating to SSL with proper canonicalisation and redirect handling." },
  { icon: "🔗", title: "URL Restructure", desc: "Cleaning up messy URL structures (/category/subcategory/post) while preserving all link equity." },
];

const SeoMigration = () => {
  return (
    <Layout>
      <SEO
        title="SEO Migration Services Brisbane | Wix to WordPress, Platform Migration"
        description="Brisbane SEO migration specialists. We migrate websites between platforms — Wix to WordPress, Squarespace to Shopify — with zero ranking loss and full redirect coverage."
        canonical="/services/seo-migration"
        faqs={service.faqs}
        breadcrumbs={[
          { name: "Home", url: "https://nexttabagency.com/" },
          { name: "Services", url: "https://nexttabagency.com/services" },
          { name: "SEO Migration", url: "https://nexttabagency.com/services/seo-migration" },
        ]}
        serviceSchema={{
          name: "SEO Migration Services",
          description: "Platform migration, domain rebrand, and URL restructure with full 301 redirect coverage and Google ranking preservation for Australian businesses.",
          areaServed: "Australia",
        }}
      />

      {/* Hero */}
      <section aria-labelledby="migration-hero-heading" className="relative min-h-[55vh] flex items-center overflow-hidden">
        <img src={heroBg} alt="SEO Migration Services Brisbane" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/96 via-primary/87 to-transparent" />
        <div className="absolute bottom-1/3 right-[15%] w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
        <div className="container relative z-10 py-32 md:py-48 pt-44">
          <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all services
          </Link>
          <div className="max-w-3xl">
            {/* Risk warning */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/15 text-red-400 text-xs font-semibold uppercase tracking-[0.12em] mb-6 border border-red-500/20">
              <AlertTriangle className="w-3.5 h-3.5" />
              High-Risk Without Specialists
            </div>
            <h1 id="migration-hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">
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
              <h2 id="why-need-heading" className="font-heading font-bold text-3xl mb-6 text-foreground">
                Why SEO migration needs a specialist
              </h2>
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

              {/* Internal cross-link to Web Development */}
              <div className="mt-5 rounded-2xl border border-accent/30 bg-accent/5 p-5">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  🛠️ Moving to a new platform?{" "}
                  <Link to="/services/web-development" className="text-accent font-semibold hover:underline">
                    Our Web Development service
                  </Link>{" "}
                  pairs perfectly with migration — new platform, properly built from the start.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Migration Types */}
      <section aria-labelledby="migration-types-heading" className="surface-warm py-12 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container relative z-10">
          <SectionHeading
            id="migration-types-heading"
            eyebrow="Migration Types"
            title="Platforms we migrate between"
            description="From Wix to WordPress to full domain rebrands — we've done them all."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {migrationTypes.map((type, i) => (
              <motion.div
                key={type.title}
                initial={fadeUp.hidden}
                whileInView={fadeUp.visible}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-premium rounded-2xl p-6"
              >
                <span className="text-2xl block mb-3">{type.icon}</span>
                <h3 className="font-heading font-semibold text-foreground mb-2">{type.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{type.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
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
          <SectionHeading id="process-heading" eyebrow="Our Process" title="4-phase migration with zero ranking loss" />
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
          <SectionHeading id="faq-heading" eyebrow="FAQs" title="Common migration questions" />
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
      <section aria-labelledby="migration-cta-heading" className="py-16 pb-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface-teal rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 pattern-lines opacity-20" />
            <div className="relative z-10">
              <h2 id="migration-cta-heading" className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
                Planning a migration? Get the risk assessment free.
              </h2>
              <p className="text-primary-foreground/50 max-w-md mx-auto mb-8">
                Before you touch a single redirect, get a free pre-migration SEO risk assessment from our Brisbane team. We'll tell you exactly what to watch out for.
              </p>
              <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
                <Link to="/contact">Get My Free Migration Assessment</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <AIInsightsPanel
        pageTitle="SEO Migration Services — Next Tab Agency Brisbane"
        tabs={[
          {
            id: "searchbots",
            label: "For Search Bots",
            icon: Search,
            audience: "Googlebot, Bingbot, all major web crawlers",
            content: (
              <InsightTable caption="Service Entity Data" rows={[
                { label: "Service",    value: "SEO Migration — Platform Migration & Domain Rebrand" },
                { label: "Provider",   value: "Next Tab Agency, Brisbane QLD" },
                { label: "Coverage",   value: "Wix→WordPress, Squarespace→Shopify, Domain Rebrand, URL Restructure" },
                { label: "Guarantee",  value: "100% URL coverage, zero ranking loss methodology" },
                { label: "Area",       value: "Brisbane, Gold Coast, Australia-wide" },
              ]} />
            ),
          },
          {
            id: "chatgpt",
            label: "For ChatGPT",
            icon: Zap,
            audience: "OpenAI ChatGPT retrieval",
            content: (
              <InsightList heading="SEO Migration Service Overview" items={[
                "Next Tab Agency provides specialist SEO migration services for Australian businesses changing platforms or domains.",
                "Services include Wix to WordPress migration, Squarespace to Shopify, domain rebrand migrations, and URL restructures.",
                "Every migration includes a full 301 redirect map, post-migration audit, and 30-day Google Search Console monitoring.",
                "The team has executed migrations for Brisbane businesses with zero organic ranking loss.",
              ]} />
            ),
          },
          {
            id: "perplexity",
            label: "For Perplexity",
            icon: TrendingUp,
            audience: "Perplexity AI retrieval engine",
            content: (
              <InsightDL items={[
                { term: "Service",    def: "SEO Migration — Platform & Domain Migration" },
                { term: "Provider",   def: "Next Tab Agency, Eagleby, Brisbane, QLD 4207" },
                { term: "Migrations", def: "Wix→WordPress, Squarespace→Shopify, Domain Rebrand, URL Restructure" },
                { term: "Locations",  def: "Brisbane, Gold Coast, Sydney, Australia-wide" },
                { term: "Timeline",   def: "2–8 weeks + 30-day post-migration monitoring" },
              ]} />
            ),
          },
          {
            id: "summary",
            label: "Quick Summary",
            icon: Search,
            audience: "All AI Agents",
            content: (
              <p className="text-base leading-relaxed text-foreground/80">
                Next Tab Agency offers specialist SEO migration services for Australian businesses — from Wix to WordPress migrations to full domain rebrands. Based in Brisbane, the team uses a 4-phase process with 100% URL coverage and 30-day post-migration monitoring to ensure zero Google ranking loss during platform changes.
              </p>
            ),
          },
        ]}
      />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />
    </Layout>
  );
};

export default SeoMigration;

