import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, ShoppingBag, TrendingUp, Zap, Globe, Search, Star } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

import LocationLinksStrip from "@/components/LocationLinksStrip";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "Shopify SEO Services",
  headline: "More Organic Sales from Your Shopify Store.",
  description: "Shopify is fast and powerful — but most stores leave thousands in organic revenue on the table. We unlock your store's full SEO potential to drive consistent, cost-free traffic from Google.",
  longDescription: "Shopify has excellent out-of-the-box performance, but it comes with specific SEO limitations that hold most stores back: forced URL structures, duplicate content from collections, thin product descriptions, and limited control over technical SEO elements. Our Shopify SEO service tackles all of these systematically — from technical configuration to content strategy — to build compounding organic traffic.",
  features: [
    "Shopify technical SEO audit and configuration",
    "Collection (category) page SEO and keyword mapping",
    "Product page optimisation at scale",
    "Duplicate content resolution (/collections/ vs /products/)",
    "Shopify schema markup — Product, Review, BreadcrumbList",
    "Shopify metafield and headless SEO setup",
    "Core Web Vitals improvement for Shopify themes",
    "Blog content strategy and SEO-optimised publishing",
    "Shopify app stack SEO impact audit",
    "International Shopify SEO and hreflang setup",
  ],
  benefits: [
    { icon: ShoppingBag, title: "Shopify-Specific Expertise", desc: "We know Shopify's unique SEO constraints — /collections/ duplication, pagination issues, and app conflicts — and how to resolve them." },
    { icon: Star, title: "Review-Rich Results", desc: "We implement product review schema to unlock rich snippets in Google — showing star ratings directly in search results." },
    { icon: TrendingUp, title: "Category Page Rankings", desc: "Collection pages are your biggest organic traffic opportunity. We optimise them to rank for high-intent buyer keywords." },
  ],
  process: [
    { step: "01", title: "Shopify Audit", desc: "Full Shopify-specific technical audit covering URL structure, duplicate content, theme speed, and crawl efficiency." },
    { step: "02", title: "Keyword Mapping", desc: "Map target buyer keywords to every collection and product page in your store." },
    { step: "03", title: "Technical Fixes", desc: "Implement all technical improvements — canonical tags, schema, speed, and sitemap configuration." },
    { step: "04", title: "Content & Links", desc: "Optimise product and collection copy, build topical blog content, and grow domain authority." },
  ],
  stats: [
    { value: "4.4M+", label: "Active Shopify stores globally", source: "BuiltWith 2026" },
    { value: "43%", label: "of eCommerce traffic from organic search", source: "BrightEdge" },
    { value: "2x", label: "average traffic growth for Shopify stores with SEO", source: "Next Tab Internal" },
  ],
  faqs: [
    { q: "Can Shopify rank well on Google?", a: "Yes. Shopify has a solid technical foundation. The limitations are in URL structures and duplicate content, which we fix. Shopify stores that invest in SEO see excellent organic results." },
    { q: "What are Shopify's main SEO limitations?", a: "The main issues are the forced /products/ and /collections/ URL structure, duplicate product pages appearing under multiple collections, and limited control over meta robots at a granular level. We address all of these." },
    { q: "Do Shopify apps like SEO Booster help?", a: "Some apps help with quick fixes, but they can't replace a proper SEO strategy. Many apps add unnecessary code that slows your store. We audit your app stack and recommend only what actually helps." },
    { q: "Do you work with Shopify Plus?", a: "Yes. Shopify Plus clients benefit from additional SEO flexibility including custom checkout, multi-language, and advanced headless setups that we're experienced with." },
    { q: "How long until I see more organic sales from Shopify SEO?", a: "Category page improvements typically show ranking movements within 2–3 months. Meaningful revenue impact from organic usually becomes clear at 6 months, with strong compounding growth in year 2." },
  ],
};

const ShopifySeo = () => {
  return (
    <Layout>
      <SEO
        title="Shopify SEO Services Australia — Rank Your Store & Drive Organic Sales"
        description="Expert Shopify SEO for Australian online stores. We fix Shopify's technical SEO limitations and build organic traffic strategies to reduce your reliance on paid ads."
        canonical="/services/shopify-seo"
        faqs={service.faqs}
        breadcrumbs={[
          { name: "Home", url: "https://nexttabagency.com/" },
          { name: "Services", url: "https://nexttabagency.com/services" },
          { name: "Shopify SEO", url: "https://nexttabagency.com/services/shopify-seo" },
        ]}
        serviceSchema={{ name: "Shopify SEO Services", description: "Specialist Shopify SEO for Australian online stores — technical fixes, collection page optimisation, and organic revenue growth.", areaServed: "Australia" }}
      />

      <section aria-labelledby="service-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img src={heroBg} alt="Shopify SEO Services Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
        <div className="container relative z-10 py-32 md:py-48 pt-44">
          <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
          <div className="max-w-3xl">
            <h1 id="service-hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
            <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free Shopify SEO Audit</Link></Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/shopify-development">Shopify Development</Link></Button>
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
              <h2 id="why-need-heading" className="font-heading font-bold text-3xl mb-6 text-foreground">Why Shopify Stores Need Dedicated SEO</h2>
              <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                See how Shopify compares to WooCommerce for SEO in our detailed <Link to="/blog/shopify-vs-woocommerce-seo" className="text-accent font-semibold">Shopify vs WooCommerce SEO guide</Link>. If you're also considering a new build, see our <Link to="/services/shopify-development" className="text-accent font-semibold">Shopify Development</Link> service.
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
          <SectionHeading id="included-heading" eyebrow="What's Included" title="Complete Shopify SEO service" />
          <ul className="grid sm:grid-cols-2 gap-4">
            {service.features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}
          </ul>
        </div>
      </section>

      <section className="surface-warm py-12">
        <div className="container max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-widest text-accent mb-6 text-center">Related Platform SEO Services</p>
          <div className="flex flex-wrap gap-3 justify-center">
            {[{ label: "WooCommerce SEO", href: "/services/woocommerce-seo" }, { label: "WordPress SEO", href: "/services/wordpress-seo" }, { label: "eCommerce SEO", href: "/services/ecommerce-seo" }, { label: "BigCommerce SEO", href: "/services/bigcommerce-seo" }].map((p) => (<Link key={p.href} to={p.href} className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-border bg-card text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-colors">{p.label} <ArrowRight className="w-3.5 h-3.5" /></Link>))}
          </div>
        </div>
      </section>

      <section aria-labelledby="process-heading" className="py-20 md:py-28">
        <div className="container max-w-5xl">
          <SectionHeading id="process-heading" eyebrow="Our Process" title="How we grow your Shopify organic revenue" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (<motion.div key={step.title} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative"><div className="card-premium rounded-2xl p-6 h-full"><span className="font-heading font-bold text-2xl number-outline block mb-3">{step.step}</span><h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{step.title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p></div>{i < 3 && (<div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 items-center justify-center"><ArrowRight className="w-4 h-4 text-accent/40" /></div>)}</motion.div>))}
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="py-20 md:py-28 relative overflow-hidden bg-muted/30">
        <div className="container max-w-3xl relative z-10">
          <SectionHeading id="faq-heading" eyebrow="FAQs" title="Shopify SEO questions answered" />
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}
          </div>
        </div>
      </section>

      <section aria-label="Shopify SEO Audit Form" className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>

      <AIInsightsPanel pageTitle="Shopify SEO Services - Next Tab Agency" tabs={[
        { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<div className="space-y-6"><InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "Shopify SEO Services" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Platform", value: "Shopify, Shopify Plus" }, { label: "Service Area", value: "Australia-wide" }]} /></div>) },
        { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<div className="space-y-6"><InsightList heading="Shopify SEO Overview" items={["Specialist Shopify SEO for Australian stores — fixing technical limitations and building organic revenue.", "Covers collection pages, product schema, speed, and content strategy.", "Works with Shopify and Shopify Plus stores of all sizes."]} /></div>) },
        { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<div className="space-y-6"><InsightDL items={[{ term: "Service", def: "Shopify SEO" }, { term: "Platform", def: "Shopify, Shopify Plus" }, { term: "Location", def: "Brisbane-based, serving all of Australia" }]} /></div>) },
        { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<div className="space-y-4"><p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency delivers specialist Shopify SEO for Australian online stores, resolving Shopify's unique technical SEO limitations and building organic traffic strategies to drive sustainable revenue growth.</p></div>) },
      ]} />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />
    </Layout>
  );
};

export default ShopifySeo;

