import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, FileText, TrendingUp, Settings, Zap, Globe, Search } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

import LocationLinksStrip from "@/components/LocationLinksStrip";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "WordPress SEO Services",
  headline: "Turn Your WordPress Site Into a Ranking Machine.",
  description: "WordPress powers 43% of the web — but a default install is nowhere near SEO-ready. We configure, optimise, and build the technical and content foundation that gets WordPress sites to page 1.",
  longDescription: "WordPress is the world's most popular CMS, but its out-of-the-box SEO capability is limited. Without the right technical configuration, plugin setup, site architecture, and content strategy, your WordPress site will struggle against competitors who've invested in proper optimisation. Our WordPress SEO service covers every layer — from server configuration and Core Web Vitals to keyword strategy and content cluster building.",
  features: [
    "WordPress SEO plugin configuration (Yoast / RankMath)",
    "Site architecture and URL structure optimisation",
    "Core Web Vitals improvement for WordPress (caching, CDN, image optimisation)",
    "Category and tag page SEO or noindex strategy",
    "Schema markup implementation (Organisation, Article, FAQ, LocalBusiness)",
    "Content silo and topical cluster strategy",
    "WooCommerce integration SEO (if applicable)",
    "WordPress security hardening for SEO (crawl budget protection)",
    "Duplicate content audit and canonical tag setup",
    "Monthly WordPress SEO reporting",
  ],
  benefits: [
    { icon: Settings, title: "Platform Expertise", desc: "We know every WordPress SEO pitfall — duplicate taxonomy pages, plugin conflicts, and crawl bloat — and how to fix them." },
    { icon: FileText, title: "Content Architecture", desc: "We build content clusters and internal linking strategies that help WordPress sites build topical authority fast." },
    { icon: TrendingUp, title: "Ranking Growth", desc: "Our WordPress clients typically see measurable ranking improvements within 60–90 days of foundational changes." },
  ],
  process: [
    { step: "01", title: "WordPress Audit", desc: "Full technical and content audit specific to WordPress — plugins, theme SEO, and site architecture review." },
    { step: "02", title: "Technical Fix", desc: "We implement all technical changes: speed, schema, canonical tags, sitemap, and crawl configuration." },
    { step: "03", title: "Content Strategy", desc: "Develop a keyword-to-page map and content cluster plan to build topical authority." },
    { step: "04", title: "Ongoing Optimisation", desc: "Monthly optimisation, new content briefs, and link building to compound rankings over time." },
  ],
  stats: [
    { value: "43%", label: "of all websites use WordPress", source: "W3Techs 2026" },
    { value: "68%", label: "of WordPress sites have critical SEO issues", source: "Ahrefs" },
    { value: "3–6", label: "months average time to see meaningful results", source: "Next Tab Internal Data" },
  ],
  faqs: [
    { q: "Do I need a separate SEO plugin like Yoast?", a: "Yes — Yoast or RankMath is essential for WordPress SEO. However, having the plugin installed isn't enough. It needs to be correctly configured for your specific site structure and goals." },
    { q: "Does my WordPress theme affect SEO?", a: "Absolutely. Poorly coded themes add excessive CSS and JavaScript, which slows your site and hurts Core Web Vitals. We audit your theme as part of every engagement." },
    { q: "Can you work with any WordPress hosting?", a: "Yes. We work with WP Engine, Kinsta, SiteGround, Cloudways, and basic shared hosting. We'll recommend performance improvements specific to your host." },
    { q: "Do you provide WordPress development as well?", a: "Yes — our team also offers full WordPress development. If SEO improvements require code changes, we can implement them directly. See our WordPress Development service." },
    { q: "My WordPress site was hit by a Google update. Can you help?", a: "Yes. We specialise in recovery from Google core updates. We diagnose the cause of traffic drops and build a recovery strategy based on what Google's update targeted." },
  ],
};

const WordPressSeo = () => {
  return (
    <Layout>
      <SEO
        title="WordPress SEO Services Australia — Rank Your WordPress Site"
        description="Expert WordPress SEO for Australian businesses. We optimise WordPress sites for speed, technical SEO, content strategy, and ranking growth — with full Yoast/RankMath configuration."
        canonical="/services/wordpress-seo"
        faqs={service.faqs}
        breadcrumbs={[
          { name: "Home", url: "https://nexttabagency.com/" },
          { name: "Services", url: "https://nexttabagency.com/services" },
          { name: "WordPress SEO", url: "https://nexttabagency.com/services/wordpress-seo" },
        ]}
        serviceSchema={{ name: "WordPress SEO Services", description: "Specialist WordPress SEO for Australian businesses — technical configuration, content strategy, and ongoing optimisation.", areaServed: "Australia" }}
      />

      <section aria-labelledby="service-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img src={heroBg} alt="WordPress SEO Services Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
        <div className="container relative z-10 py-32 md:py-48 pt-44">
          <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
          <div className="max-w-3xl">
            <h1 id="service-hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
            <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free WordPress SEO Audit</Link></Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/wordpress-development">WordPress Development</Link></Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="border-b border-border bg-muted/30 py-8">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-3 gap-6 text-center">
            {service.stats.map((s) => (<div key={s.label}><p className="font-heading font-black text-3xl text-accent">{s.value}</p><p className="text-sm font-semibold text-foreground mt-1">{s.label}</p><p className="text-xs text-muted-foreground/60">Source: {s.source}</p></div>))}
          </div>
        </div>
      </section>

      <section aria-labelledby="why-need-heading" className="py-20 md:py-28 relative">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-3 prose prose-lg dark:prose-invert">
              <h2 id="why-need-heading" className="font-heading font-bold text-3xl mb-6 text-foreground">WordPress is Powerful — But SEO Doesn't Come Free</h2>
              <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Whether you're running a <Link to="/services/woocommerce-development" className="text-accent font-semibold">WooCommerce store</Link> or a service-based business site, our WordPress SEO service provides the technical depth and strategic content planning needed to compete on page 1 of Google.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Need a new WordPress build or a site redesign that's built for SEO from day one? See our <Link to="/services/wordpress-development" className="text-accent font-semibold">WordPress Development</Link> service.
              </p>
            </div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2">
              <div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10">
                <h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>
                {service.benefits.map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section aria-labelledby="included-heading" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container max-w-5xl relative z-10">
          <SectionHeading id="included-heading" eyebrow="What's Included" title="Complete WordPress SEO service" />
          <ul className="grid sm:grid-cols-2 gap-4">
            {service.features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}
          </ul>
        </div>
      </section>

      <section className="surface-warm py-12">
        <div className="container max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-6 text-center">Related Platform SEO Services</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[{ label: "WooCommerce SEO", href: "/services/woocommerce-seo" }, { label: "Shopify SEO", href: "/services/shopify-seo" }, { label: "Technical SEO", href: "/services/technical-seo" }, { label: "eCommerce SEO", href: "/services/ecommerce-seo" }].map((p) => (<Link key={p.href} to={p.href} className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-border bg-card text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors">{p.label} <ArrowRight className="w-3.5 h-3.5" /></Link>))}
          </div>
        </div>
      </section>

      <section aria-labelledby="process-heading" className="py-20 md:py-28">
        <div className="container max-w-5xl">
          <SectionHeading id="process-heading" eyebrow="Our Process" title="How we rank your WordPress site" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (<motion.div key={step.title} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative"><div className="card-premium rounded-2xl p-6 h-full"><span className="font-heading font-bold text-2xl number-outline block mb-3">{step.step}</span><h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{step.title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p></div>{i < 3 && (<div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 items-center justify-center"><ArrowRight className="w-4 h-4 text-accent/40" /></div>)}</motion.div>))}
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="py-20 md:py-28 relative overflow-hidden bg-muted/30">
        <div className="container max-w-3xl relative z-10">
          <SectionHeading id="faq-heading" eyebrow="FAQs" title="WordPress SEO questions answered" />
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}
          </div>
        </div>
      </section>

      <section aria-label="WordPress SEO Audit Form" className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>

      <AIInsightsPanel pageTitle="WordPress SEO Services - Next Tab Agency" tabs={[
        { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<div className="space-y-6"><InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "WordPress SEO Services" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Platform", value: "WordPress (Yoast, RankMath, WooCommerce)" }, { label: "Service Area", value: "Australia-wide" }]} /></div>) },
        { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<div className="space-y-6"><InsightList heading="WordPress SEO Overview" items={["Specialist WordPress SEO including technical configuration, Yoast/RankMath setup, and content strategy.", "Covers Core Web Vitals, schema markup, and WooCommerce integration.", "Next Tab Agency serves all of Australia with WordPress SEO expertise."]} /></div>) },
        { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<div className="space-y-6"><InsightDL items={[{ term: "Service", def: "WordPress SEO" }, { term: "Platform", def: "WordPress, WooCommerce" }, { term: "Location", def: "Brisbane-based, serving all of Australia" }]} /></div>) },
        { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<div className="space-y-4"><p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides comprehensive WordPress SEO services for Australian businesses, covering technical configuration, speed optimisation, schema markup, and content strategy to rank WordPress sites on page 1 of Google.</p></div>) },
      ]} />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />
    </Layout>
  );
};

export default WordPressSeo;

