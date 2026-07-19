import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, ShoppingBag, BarChart3, TrendingUp, Zap, Globe, Search } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";
import LocationLinksStrip from "@/components/LocationLinksStrip";

const features = ["Product and category page SEO at scale","Retail schema markup (Product, Offer, Review, BreadcrumbList)","Local retail store SEO and GBP optimisation","eCommerce platform SEO (Shopify, WooCommerce, Magento)","Seasonal campaign keyword strategy","Competitor product ranking gap analysis","Google Shopping feed and Merchant Centre SEO support","Content strategy for category and collection pages","Site architecture and internal linking for large catalogues","Monthly retail SEO performance reporting"];
const faqs = [
  { q: "Does retail SEO work for both physical stores and online-only retailers?", a: "Yes — our retail SEO service covers both. For physical stores, we focus on local search and GBP. For online-only retailers, we focus on category and product page rankings." },
  { q: "How do you handle large product catalogues?", a: "For retailers with thousands of SKUs, we prioritise top-revenue categories first, then systematically expand. We implement crawl controls to ensure Google focuses on your most valuable pages." },
  { q: "Can SEO reduce my dependence on Google Shopping ads?", a: "Significantly. Organic category page rankings drive free, qualified traffic with zero CPC. Many of our retail clients reduce ad spend by 40–60% within 18 months of SEO investment." },
];

const RetailSeo = () => (
  <Layout>
    <SEO title="SEO for Retail & eCommerce Australia — Rank Products and Categories" description="Specialist retail SEO for Australian retailers. We rank product and category pages on Shopify, WooCommerce, and Magento to drive organic revenue and reduce ad spend." canonical="/industry/retail-seo" faqs={faqs} breadcrumbs={[{ name: "Home", url: "https://nexttabagency.com/" }, { name: "Industry SEO", url: "https://nexttabagency.com/services" }, { name: "Retail SEO", url: "https://nexttabagency.com/industry/retail-seo" }]} serviceSchema={{ name: "SEO for Retail", description: "Specialist retail and eCommerce SEO for Australian businesses.", areaServed: "Australia" }} />
    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="Retail SEO Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><ShoppingBag className="w-3 h-3" /> Industry SEO</span>
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">SEO for Retail & eCommerce</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">More Organic Sales. Less Ad Spend. Compounding Growth.</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">Paid ads stop the moment you pause them. Organic retail SEO builds a revenue channel that grows month after month — with zero cost per click.</p>
          <div className="flex flex-wrap gap-4 mt-8"><Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free Retail SEO Audit</Link></Button><Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/ecommerce-seo">eCommerce SEO</Link></Button></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="border-b border-border bg-muted/30 py-8"><div className="container max-w-4xl"><div className="grid grid-cols-3 gap-6 text-center">{[{ value: "43%", label: "of eCommerce traffic from organic search", source: "BrightEdge" }, { value: "8x", label: "higher ROI for SEO vs paid for mature retail stores", source: "Forrester" }, { value: "37%", label: "of clicks go to the #1 organic result", source: "First Page Sage" }].map((s) => (<div key={s.label}><p className="font-heading font-black text-3xl text-accent">{s.value}</p><p className="text-sm font-semibold text-foreground mt-1">{s.label}</p><p className="text-xs text-muted-foreground/60">Source: {s.source}</p></div>))}</div></div></section>

    <section className="py-20 md:py-28"><div className="container max-w-5xl"><div className="grid lg:grid-cols-5 gap-12 lg:gap-20"><div className="lg:col-span-3"><h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why Retail Brands Win Long-Term With SEO</h2><p className="text-muted-foreground leading-relaxed">Australian retail is one of the most competitive online markets. The brands that dominate organic search — not just paid — build a compounding advantage that makes them nearly unassailable. Category page rankings drive the most revenue: a single top-3 result for a high-volume product category can be worth hundreds of thousands per year in organic revenue.</p><p className="text-muted-foreground leading-relaxed mt-4">We specialise in <Link to="/services/shopify-seo" className="text-accent font-semibold">Shopify SEO</Link>, <Link to="/services/woocommerce-seo" className="text-accent font-semibold">WooCommerce SEO</Link>, and <Link to="/services/ecommerce-seo" className="text-accent font-semibold">eCommerce SEO</Link> across all platforms.</p></div><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2"><div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10"><h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>{[{ icon: ShoppingBag, title: "Category Page Rankings", desc: "High-intent buyer keywords at the category level drive the most revenue." }, { icon: BarChart3, title: "Lower CAC Over Time", desc: "Organic traffic has zero CPC. Cost per acquisition decreases as rankings improve." }, { icon: TrendingUp, title: "Compounding Revenue", desc: "Unlike ads, SEO compounds. Year 2 organic revenue costs less than Year 1." }].map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}</div></motion.div></div></div></section>

    <section className="py-20 md:py-28 relative overflow-hidden"><div className="absolute inset-0 pattern-dots" /><div className="container max-w-5xl relative z-10"><SectionHeading eyebrow="What's Included" title="Complete retail SEO service" /><ul className="grid sm:grid-cols-2 gap-4">{features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}</ul></div></section>

    <section className="py-20 md:py-28 bg-muted/30"><div className="container max-w-3xl"><SectionHeading eyebrow="FAQs" title="Retail SEO questions answered" /><div className="space-y-4">{faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}</div></div></section>
    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>
    <AIInsightsPanel pageTitle="Retail SEO - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "SEO for Retail & eCommerce" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Service Area", value: "Australia-wide" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Retail SEO Overview" items={["Specialist retail and eCommerce SEO for Australian businesses — product pages, category rankings, and platform optimisation.", "Works with Shopify, WooCommerce, and Magento to build compounding organic revenue."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "Retail & eCommerce SEO" }, { term: "Location", def: "Brisbane-based, serving all of Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides retail and eCommerce SEO for Australian businesses, ranking product and category pages to drive organic revenue and reduce reliance on paid advertising.</p>) },
    ]} />
      {/* Related Services */}
      <section aria-labelledby="related-services-heading" className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-2 block">Complete Digital Solution</span>
            <h2 id="related-services-heading" className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              Related Services That Work Together
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Link to="/services/ecommerce-seo" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">eCommerce SEO</h3>
            <p className="text-sm text-muted-foreground">Category and product page SEO.</p>
          </Link>
          <Link to="/services/shopify-seo" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Shopify SEO</h3>
            <p className="text-sm text-muted-foreground">Shopify-specific SEO optimisation.</p>
          </Link>
          <Link to="/services/ppc-google-ads" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Google Ads</h3>
            <p className="text-sm text-muted-foreground">Google Shopping campaigns for retail.</p>
          </Link>
          <Link to="/services/facebook-ads" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Facebook Ads</h3>
            <p className="text-sm text-muted-foreground">Retargeting and product catalogues.</p>
          </Link>
          </div>
        </div>
      </section>
      {/* Internal linking — Australian location pages */}
      <LocationLinksStrip />
  </Layout>
);

export default RetailSeo;

