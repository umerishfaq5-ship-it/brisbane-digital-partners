import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, ShoppingCart, TrendingUp, Zap, Globe, Search, Tag, BarChart3 } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

import LocationLinksStrip from "@/components/LocationLinksStrip";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "Google Shopping Management",
  headline: "Product Ads That Put Your Inventory in Front of Buyers.",
  description: "Google Shopping management for Australian eCommerce stores — product feed optimisation, ROAS-focused bidding, and Shopping campaign strategy that drives real sales.",
  longDescription: "Google Shopping Ads (now called Performance Max Shopping) display your products directly in Google search results with an image, price, and store name — capturing buyers at the highest-intent moment of the purchase journey. Unlike search ads, Shopping Ads target by product data, not keywords, which means your feed quality is everything. We manage your Merchant Center, optimise your product feed, structure your campaigns for maximum ROAS, and continuously test bids, audiences, and creative to keep your cost-per-sale profitable.",
  features: [
    "Google Merchant Center setup and feed management",
    "Product feed optimisation — titles, descriptions, and attributes",
    "Standard Shopping and Performance Max campaign setup",
    "Product group segmentation by margin, category, and performance",
    "ROAS-target bidding strategy and budget allocation",
    "Competitor price monitoring and bidding response",
    "Remarketing lists for Shopping (RLSA) targeting",
    "Merchant Center feed error diagnosis and resolution",
    "Google product reviews integration",
    "Monthly Shopping performance reporting (ROAS, CPA, revenue)",
    "Seasonal campaign strategy for peak trading periods",
    "Shopping alongside Search campaign coordination",
  ],
  stats: [
    { value: "76%", label: "of Australian retail ad spend goes to Google Shopping", source: "Google Aus" },
    { value: "85%", label: "of Shopping clicks go to the top 3 product listings", source: "Wordstream" },
    { value: "30%", label: "higher CTR for Shopping Ads vs standard text ads for product searches", source: "Google Data" },
  ],
  faqs: [
    { q: "What is Google Shopping?", a: "Google Shopping (now delivered through Performance Max) displays your product listings — with image, price, and store name — at the top of Google search results when users search for products you sell. It's the most effective paid channel for eCommerce stores selling physical products." },
    { q: "Do I need a Google Merchant Center account?", a: "Yes. Google Merchant Center is where your product data (feed) lives. We set up and manage your Merchant Center as part of the service, including feed creation, error resolution, and product approval." },
    { q: "How is Google Shopping different from Google Search Ads?", a: "Search Ads target keywords and display text ads. Shopping Ads target based on your product feed data and display visual product cards. Shopping is generally more effective for eCommerce because it shows buyers the exact product with price before they click." },
    { q: "What ROAS can I expect from Google Shopping?", a: "ROAS varies significantly by product category, competition level, and margin. Most Australian eCommerce stores on well-managed Shopping campaigns achieve 3–8x ROAS. We'll benchmark against your industry during our initial audit and set realistic targets." },
  ],
};

const GoogleShopping = () => (
  <Layout>
    <SEO
      title="Google Shopping Management Australia — Google Shopping Ads Agency"
      description="Expert Google Shopping management for Australian eCommerce stores. Product feed optimisation, ROAS-focused campaigns, and Merchant Center management that drives real sales."
      canonical="/services/google-shopping"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "Google Shopping", url: "https://nexttabagency.com/services/google-shopping" },
      ]}
      serviceSchema={{ name: "Google Shopping Management", description: "Google Shopping and Performance Max campaign management for Australian eCommerce stores.", areaServed: "Australia" }}
    />
    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="Google Shopping Management Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><ShoppingCart className="w-3 h-3" /> Google Shopping</span>
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free Shopping Audit</Link></Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/ecommerce-seo">eCommerce SEO</Link></Button>
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
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <div className="lg:col-span-3">
            <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why Your Product Feed is Everything</h2>
            <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
            <p className="text-muted-foreground leading-relaxed mt-4">For a complete eCommerce strategy, pair Google Shopping with <Link to="/services/ecommerce-seo" className="text-accent font-semibold">eCommerce SEO</Link> for organic visibility and <Link to="/services/conversion-rate-optimisation" className="text-accent font-semibold">CRO</Link> to maximise the landing page conversion rate for Shopping traffic.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="lg:col-span-2">
            <div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10">
              <h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>
              {[{ icon: Tag, title: "Visual Product Ads", desc: "Show image, price, and store name — buyers see your product before they click." }, { icon: ShoppingCart, title: "Highest Purchase Intent", desc: "Shopping searches have the highest buyer intent of any ad format." }, { icon: BarChart3, title: "Product-Level Control", desc: "We segment campaigns by product margin and performance for maximum ROAS." }].map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container max-w-5xl relative z-10">
        <SectionHeading eyebrow="What's Included" title="Complete Google Shopping management" />
        <ul className="grid sm:grid-cols-2 gap-4">
          {service.features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}
        </ul>
      </div>
    </section>
    <section className="surface-warm py-16">
      <div className="container max-w-5xl">
        <SectionHeading eyebrow="Related Services" title="Complete your eCommerce strategy" />
        <div className="grid sm:grid-cols-3 gap-4">
          {[{ label: "eCommerce SEO", href: "/services/ecommerce-seo", desc: "Organic product and category page rankings." }, { label: "Google Ads Management", href: "/services/ppc-google-ads", desc: "Search and Display campaigns alongside Shopping." }, { label: "Conversion Rate Optimisation", href: "/services/conversion-rate-optimisation", desc: "Convert more Shopping traffic into sales." }].map((r) => (<Link key={r.href} to={r.href} className="group p-5 rounded-xl border border-border bg-card hover:border-accent/40 transition-all"><p className="font-semibold text-foreground group-hover:text-accent text-sm mb-1">{r.label}</p><p className="text-xs text-muted-foreground">{r.desc}</p></Link>))}
        </div>
      </div>
    </section>
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow="FAQs" title="Google Shopping questions answered" />
        <div className="space-y-4">
          {service.faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}
        </div>
      </div>
    </section>
    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>
    <AIInsightsPanel pageTitle="Google Shopping - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "Google Shopping Management" }, { label: "Provider", value: "Next Tab Agency Brisbane" }, { label: "Platforms", value: "Google Merchant Center, Performance Max, Standard Shopping" }, { label: "Service Area", value: "Australia-wide" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Google Shopping Overview" items={["Expert Google Shopping management for Australian eCommerce stores.", "Services include: Merchant Center setup, product feed optimisation, Shopping and Performance Max campaigns.", "Focus on ROAS-based bidding and product-level campaign segmentation."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "Google Shopping Management" }, { term: "Platform", def: "Google Merchant Center & Performance Max" }, { term: "Provider", def: "Next Tab Agency, Brisbane, Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides Google Shopping management for Australian eCommerce stores — Merchant Center setup, product feed optimisation, and ROAS-focused Shopping and Performance Max campaigns.</p>) },
    ]} />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />
  </Layout>
);

export default GoogleShopping;

