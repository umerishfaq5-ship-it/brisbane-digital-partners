import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, ShoppingCart, Monitor, Globe2, ArrowRight, CheckCircle, TrendingUp, DollarSign, MousePointer, BarChart3, Zap, Target } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";

const adTypes = [
  {
    icon: Search,
    name: "Google Search Ads",
    color: "from-teal to-ocean",
    description: "Capture buyers at the exact moment they're searching for what you offer. We build tightly themed ad groups, sculpt exact-match keyword lists, and write compelling ad copy that drives high-quality clicks from Australians ready to buy.",
    subServices: [
      "Google Search campaign setup & management",
      "Keyword research & negative keyword sculpting",
      "Responsive search ad (RSA) copywriting",
      "Quality Score & Ad Rank optimisation",
      "Competitor conquest & branded defence campaigns",
      "Call tracking & conversion setup",
    ],
  },
  {
    icon: ShoppingCart,
    name: "Google Shopping Ads",
    color: "from-eucalyptus to-teal",
    description: "For e-commerce businesses, Shopping Ads drive the highest purchase intent traffic on Google. We optimise your product feed, structure campaigns for maximum visibility, and manage bids to hit your target ROAS.",
    subServices: [
      "Google Merchant Centre setup & feed optimisation",
      "Standard & Performance Max Shopping campaigns",
      "Product title & description copywriting",
      "Shopping campaign segmentation by margin/category",
      "Dynamic remarketing to past visitors",
      "ROAS-based bidding strategy management",
    ],
  },
  {
    icon: Monitor,
    name: "Display & Remarketing",
    color: "from-ocean to-teal-light",
    description: "Stay top-of-mind with customers who've visited your site but haven't converted yet. Our display and remarketing campaigns use Google's massive Australian ad network to bring warm prospects back and close the sale.",
    subServices: [
      "Google Display Network campaign setup",
      "Remarketing audience segmentation & lists",
      "Dynamic display ad creative production",
      "Affinity & in-market audience targeting",
      "Gmail Sponsored Promotions",
      "View-through & cross-channel attribution",
    ],
  },
  {
    icon: Globe2,
    name: "Microsoft / Bing Ads",
    color: "from-teal-light to-eucalyptus",
    description: "Bing holds a meaningful slice of Australian desktop search and is often 30–50% cheaper per click than Google. We import and optimise your campaigns to capture this overlooked channel at a fraction of the cost.",
    subServices: [
      "Microsoft Advertising account setup",
      "Google Ads campaign import & localisation",
      "LinkedIn profile targeting (exclusive to MS Ads)",
      "Bidding optimisation for AU market",
      "Cross-platform budget allocation strategy",
      "Unified reporting across Google & Bing",
    ],
  },
];

const stats = [
  { icon: TrendingUp, value: "4.2×", label: "Average ROAS for AU e-commerce clients" },
  { icon: DollarSign, value: "A$150K+", label: "Monthly Google Ads spend managed" },
  { icon: MousePointer, value: "62%", label: "Average reduction in cost-per-acquisition" },
  { icon: BarChart3, value: "Top 3", label: "Average ad position for priority keywords" },
];

const process = [
  { step: "01", title: "Account Audit", desc: "Full teardown of your existing Google Ads account — identifying wasted spend, quality score issues, and immediate wins." },
  { step: "02", title: "Strategy & Structure", desc: "We rebuild or restructure campaigns around tightly themed ad groups, match types, and conversion goals aligned to your business." },
  { step: "03", title: "Launch & Track", desc: "Pixel-perfect conversion tracking setup, campaign launch, and baseline performance benchmarking in week one." },
  { step: "04", title: "Optimise Weekly", desc: "Weekly bid management, search term analysis, A/B ad testing, and monthly budget reviews to compound results month on month." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const PpcAds = () => (
  <Layout>
    <SEO
      title="PPC & Google Ads Management Australia — Google Search, Shopping & Display Campaigns"
      description="Expert Google Ads management for Australian businesses. Search, Shopping, Display, Remarketing & Bing Ads managed by certified PPC specialists. Transparent reporting & proven ROAS."
      canonical="/services/ppc-google-ads"
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "PPC & Google Ads", url: "https://nexttabagency.com/services/ppc-google-ads" },
      ]}
      serviceSchema={{
        name: "PPC & Google Ads Management",
        description: "Google Search, Shopping, Display, Remarketing and Bing Ads management for Australian businesses with transparent ROAS reporting.",
        areaServed: "Australia",
      }}
      faqs={[
        { q: "How much does Google Ads management cost in Australia?", a: "Our management fees start from A$800/month for small accounts. We also offer performance-based arrangements for established businesses spending A$5,000+/month on ads." },
        { q: "What is a good ROAS for Google Ads in Australia?", a: "A healthy ROAS varies by industry, but we typically target 4x+ for e-commerce clients. For lead generation businesses, we focus on cost-per-lead rather than ROAS." },
        { q: "How quickly can I see results from Google Ads?", a: "Unlike SEO, Google Ads can generate traffic from day one. Typically expect 2–4 weeks for the algorithm to optimise, with meaningful ROI data available by month two." },
        { q: "Do you manage Bing Ads as well as Google?", a: "Yes. We manage Microsoft Advertising (Bing Ads) campaigns and often import optimised Google campaigns to capture Bing's Australian desktop search traffic at lower CPCs." },
      ]}
    />

    {/* Hero */}
    <section aria-labelledby="ppc-hero-heading" className="relative min-h-[60vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="Google Ads PPC Management Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/96 via-primary/85 to-transparent" />
      <div className="absolute bottom-1/4 right-[8%] w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="container relative z-10 py-32 md:py-40 pt-40">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Google Ads & PPC
          </span>
          <h1 id="ppc-hero-heading" className="font-heading font-bold text-4xl md:text-[3.5rem] leading-[1.08] text-primary-foreground mb-6">
            PPC management that{" "}
            <span className="text-gradient">maximises every dollar</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/60 max-w-2xl mb-10 leading-relaxed">
            Google Search, Shopping, Display, Remarketing & Bing — managed by certified Australian PPC specialists who treat your budget like their own.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
              <Link to="/contact">Get a Free PPC Audit <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button variant="hero-secondary" size="xl" className="rounded-full" asChild>
              <Link to="/services">All Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* Stats */}
    <section aria-label="PPC Results" className="py-16 surface-warm relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((r, i) => (
            <motion.div
              key={r.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-premium rounded-2xl p-7 text-center"
            >
              <r.icon className="w-6 h-6 text-accent mx-auto mb-3" />
              <p className="font-heading font-bold text-3xl text-foreground mb-1">{r.value}</p>
              <p className="text-sm text-muted-foreground">{r.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Ad Type Sections */}
    <section aria-labelledby="ad-types-heading" className="py-12 md:py-16">
      <div className="container">
        <SectionHeading
          id="ad-types-heading"
          eyebrow="Campaign Types"
          title="Every type of Google Ads campaign, expertly managed"
          description="We don't just run one type of campaign — we build a full-funnel PPC ecosystem that captures demand at every stage of the buyer journey."
        />
        <div className="space-y-8">
          {adTypes.map((a, i) => (
            <motion.div
              key={a.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="card-premium rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row gap-8"
            >
              <div className="shrink-0">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${a.color} flex items-center justify-center shadow-lg`}>
                  <a.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="font-heading font-bold text-xl text-foreground mb-3">{a.name}</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">{a.description}</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {a.subServices.map((s) => (
                    <li key={s} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section aria-labelledby="ppc-process-heading" className="surface-teal py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 pattern-lines opacity-20" />
      <div className="container relative z-10">
        <SectionHeading
          id="ppc-process-heading"
          eyebrow="Our Process"
          title="From audit to scale in 4 steps"
          light
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-dark rounded-2xl p-7 border border-primary-foreground/10"
            >
              <span className="font-heading font-bold text-xs text-accent mb-4 block">Step {s.step}</span>
              <h3 className="font-heading font-semibold text-primary-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-primary-foreground/50 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Related Services */}
    <section aria-labelledby="ppc-related-heading" className="py-20">
      <div className="container">
        <h2 id="ppc-related-heading" className="font-heading font-bold text-2xl text-foreground mb-8 text-center">Pair PPC with organic growth</h2>
        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {[
            { label: "Social Media Ads", href: "/services/social-media-ads", desc: "Extend your reach to social channels alongside search." },
            { label: "SEO Audits & Strategy", href: "/services/seo-audits", desc: "Ads provide traffic, SEO provides long-term growth — combine both for compounding ROI." },
            { label: "Google Business Profile", href: "/services/google-business-profile", desc: "Maximise local map pack presence alongside search ads." },
          ].map((item) => (
            <Link key={item.href} to={item.href} className="group card-premium rounded-2xl p-6 block">
              <p className="font-heading font-semibold text-foreground group-hover:text-accent transition-colors mb-1">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
              <span className="inline-flex items-center gap-1 text-accent text-xs font-semibold mt-3">Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section aria-labelledby="ppc-cta-heading" className="py-16 pb-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="surface-teal rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 pattern-lines opacity-20" />
          <div className="relative z-10">
            <h2 id="ppc-cta-heading" className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
              Stop paying for clicks that don't convert
            </h2>
            <p className="text-primary-foreground/50 max-w-md mx-auto mb-8">
              Get a free, no-obligation audit of your Google Ads account. We'll show you exactly where your budget is being wasted and how to fix it.
            </p>
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
              <Link to="/contact">Book Your Free PPC Audit</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default PpcAds;
