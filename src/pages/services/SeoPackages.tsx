import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, Package, TrendingUp, Search, Zap, Globe, Star, Shield, BarChart3 } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

import LocationLinksStrip from "@/components/LocationLinksStrip";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const packages = [
  {
    name: "Basic",
    price: "$750",
    badge: "One suburb, one service",
    icon: "📍",
    description: "For a tradie or local service that wants to show up in Google Maps and search for its main suburb.",
    includes: [
      "Website and Google Business Profile audit, fixed in month 1",
      "Google Business Profile: categories, services, weekly post",
      "On-page SEO for your main service pages",
      "10 Australian directory listings (consistent name, address, phone)",
      "Review system so customers actually leave Google reviews",
      "Monthly report in plain English: calls, rankings, enquiries",
    ],
    cta: "Start with Basic",
    accent: false,
  },
  {
    name: "Standard",
    price: "$1,200",
    badge: "Most Popular",
    icon: "🚀",
    description: "For businesses serving several suburbs or services (NDIS providers, clinics, multi-trade businesses).",
    includes: [
      "Everything in Basic, plus:",
      "Suburb and service pages written and published each month",
      "1 blog article a month aimed at a real search people make",
      "Local backlinks from suppliers, groups and AU directories",
      "Competitor tracking: who outranks you and why",
      "Call and form tracking so every lead is counted",
    ],
    cta: "Start with Standard",
    accent: true,
  },
  {
    name: "Premium",
    price: "$1,700",
    badge: "Competitive markets",
    icon: "🏆",
    description: "For Brisbane-wide or Gold Coast-wide competition, online stores, or businesses that want Google Ads run alongside SEO.",
    includes: [
      "Everything in Standard, plus:",
      "2 articles a month and a quarterly content plan",
      "Digital PR and stronger link building",
      "Technical SEO: speed, Core Web Vitals, schema",
      "Google Ads setup and management included (ad spend separate)",
      "Monthly strategy call",
    ],
    cta: "Start with Premium",
    accent: false,
  },
];

const faqs = [
  {
    q: "What's included in your SEO packages?",
    a: "Every package includes an audit, Google Business Profile management, on-page SEO, directory listings, a review system and a plain-English monthly report. Standard adds suburb and service pages, a monthly article, local links and call tracking. Premium adds two articles a month, digital PR, technical SEO and Google Ads management.",
  },
  {
    q: "How much do your SEO packages cost?",
    a: "Basic is $750 a month, Standard is $1,200 a month and Premium is $1,700 a month, each with a 6-month minimum and then month-to-month. Prices exclude GST. The first 15 clients get 50% off for the first 3 months.",
  },
  {
    q: "Why a 6-month minimum?",
    a: "New pages, directory listings and links take 3 to 6 months to move rankings; anyone who promises page 1 in 30 days is selling Google Ads or spam. After the first 6 months every package is month-to-month and you can stop any time.",
  },
  {
    q: "How is your SEO service different from cheaper online packages?",
    a: "Offshore or templated SEO packages typically involve low-quality link building, generic content, and no strategic oversight. Our packages are strategy-led — every deliverable is mapped to your specific keyword opportunities and business goals. We're an Australian agency with senior strategists reviewing your account each month.",
  },
  {
    q: "Do you offer one-off SEO audits or project-based work?",
    a: "Yes. If you're not ready for ongoing SEO, we offer standalone SEO audits and project-based engagements such as technical SEO fixes, on-page optimisation sprints, and content audits. Contact us to discuss your requirements.",
  },
];

const SeoPackages = () => (
  <Layout>
    <SEO
      title="SEO Packages Australia & Brisbane | Pricing"
      description="SEO packages with real prices: Basic $750, Standard $1,200, Premium $1,700 a month. 6-month minimum, then month-to-month. For Brisbane, Logan and Gold Coast businesses."
      canonical="/services/seo-packages"
      faqs={faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services/" },
        { name: "SEO Packages", url: "https://nexttabagency.com/services/seo-packages/" },
      ]}
      serviceSchema={{
        name: "SEO Packages Australia",
        description: "SEO packages for Australian businesses: Basic $750, Standard $1,200 and Premium $1,700 per month, 6-month minimum.",
        areaServed: "Australia",
      }}
    />

    {/* Hero */}
    <section aria-labelledby="hero-heading" className="relative min-h-[60vh] flex items-start overflow-hidden pt-16">
      <img src={heroBg} alt="SEO Packages Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services/" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to all services
        </Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
            <Package className="w-3 h-3" /> SEO Packages
          </span>
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">
            SEO Packages Australia
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">
            No lock-in contracts. No templated campaigns. Just SEO that grows your business.
          </p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">
            Three packages, three prices, no quote dance: $750, $1,200 or $1,700 a month. Pick the one that matches how many suburbs and services you need to rank for.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact/">Request a Quote</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/services/seo-audits/">Free SEO Audit First</Link>
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* Trust bar */}
    <section className="border-b border-border bg-muted/30 py-8">
      <div className="container max-w-5xl">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { value: "No Lock-In", label: "Month-to-month contracts" },
            { value: "100% Local", label: "Australian-based team" },
            { value: "$750+", label: "Real prices, published" },
            { value: "Transparent", label: "Monthly reporting always included" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-heading font-black text-xl md:text-2xl text-accent">{s.value}</p>
              <p className="text-xs font-medium text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Package Cards */}
    <section className="py-20 md:py-28">
      <div className="container max-w-6xl">
        <SectionHeading eyebrow="Our SEO Packages" title="Choose the right tier for your business" description="Real prices, nothing hidden. All three run for a 6-month minimum because Google takes that long to trust new pages and links; after that it is month-to-month. Prices exclude GST." />
        <div className="grid lg:grid-cols-3 gap-6 mt-12">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={fadeUp.hidden}
              whileInView={fadeUp.visible}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative rounded-2xl border p-8 flex flex-col ${pkg.accent ? "border-accent bg-accent/5 shadow-xl shadow-accent/10" : "border-border bg-card"}`}
            >
              {pkg.accent && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                  {pkg.badge}
                </span>
              )}
              {!pkg.accent && (
                <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3 border border-border rounded-full px-3 py-0.5 w-fit">
                  {pkg.badge}
                </span>
              )}
              <div className="text-3xl mb-3">{pkg.icon}</div>
              <h2 className="font-heading font-bold text-2xl text-foreground mb-1">{pkg.name}</h2>
              <p className="mb-4"><span className="font-heading font-black text-4xl text-foreground">{pkg.price}</span><span className="text-sm text-muted-foreground"> / month, 6-month minimum</span></p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">{pkg.description}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <CheckCircle className={`w-4 h-4 shrink-0 mt-0.5 ${pkg.accent ? "text-accent" : "text-accent"}`} />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant={pkg.accent ? "accent" : "outline"} className="w-full" asChild>
                <Link to="/contact/">{pkg.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          Not sure which package is right for you? Start with a{" "}
          <Link to="/services/seo-audits/" className="text-accent font-semibold underline underline-offset-4">
            free SEO audit
          </Link>{" "}
          — we'll review your site and recommend the right scope.
        </p>
      </div>
    </section>

    {/* What's always included */}
    <section className="py-20 md:py-28 surface-warm">
      <div className="container max-w-5xl">
        <SectionHeading eyebrow="Always Included" title="Every Next Tab SEO package includes" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Shield, title: "No Lock-In Contract", desc: "Month-to-month. Stay because of results, not because you're trapped." },
            { icon: BarChart3, title: "Monthly Reporting", desc: "Keyword rankings, organic traffic, and lead attribution — every month." },
            { icon: Search, title: "Keyword Research", desc: "Full keyword analysis and opportunity mapping before work begins." },
            { icon: TrendingUp, title: "On-Page Optimisation", desc: "Title tags, meta descriptions, headings, and content on every target page." },
            { icon: Star, title: "Link Building", desc: "Quality Australian backlinks through outreach, content, and digital PR." },
            { icon: Package, title: "Dedicated Strategist", desc: "One contact who knows your account and is accountable for results." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={fadeUp.hidden}
              whileInView={fadeUp.visible}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-premium rounded-2xl p-6"
            >
              <item.icon className="w-8 h-8 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{item.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Related service links */}
    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <SectionHeading eyebrow="Explore Services" title="What's covered in each package" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Technical SEO", href: "/services/technical-seo/", desc: "Site speed, crawl, and indexation." },
            { label: "On-Page SEO", href: "/services/on-page-seo/", desc: "Title tags, headings, and content." },
            { label: "Link Building", href: "/services/link-building/", desc: "Quality backlinks for authority." },
            { label: "Local SEO", href: "/services/local-seo/", desc: "Map Pack and local rankings." },
            { label: "Content Marketing", href: "/services/content-marketing/", desc: "Blog posts and topic clusters." },
            { label: "eCommerce SEO", href: "/services/ecommerce-seo/", desc: "SEO for online stores." },
            { label: "SEO Audits", href: "/services/seo-audits/", desc: "Full site SEO health check." },
            { label: "SEO Consulting", href: "/services/seo-consulting/", desc: "Strategy for in-house teams." },
          ].map((r) => (
            <Link
              key={r.href}
              to={r.href}
              className="group p-4 rounded-xl border border-border bg-card hover:border-accent/40 transition-all"
            >
              <p className="font-semibold text-foreground group-hover:text-accent text-sm mb-1 flex items-center justify-between">
                {r.label} <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </p>
              <p className="text-xs text-muted-foreground">{r.desc}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* FAQs */}
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow="FAQs" title="SEO packages — questions answered" />
        <div className="space-y-4">
          {faqs.map((faq, i) => (
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

    <section className="py-20 md:py-28">
      <div className="container">
        <LiveTeardownForm />
      </div>
    </section>

    <AIInsightsPanel
      pageTitle="SEO Packages Australia - Next Tab Agency"
      tabs={[
        {
          id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot",
          content: (
            <InsightTable caption="Service Entity Data" rows={[
              { label: "Entity", value: "SEO Packages Australia" },
              { label: "Provider", value: "Next Tab Agency Brisbane" },
              { label: "Tiers", value: "Local SEO, Growth SEO, Enterprise SEO" },
              { label: "Contract", value: "No lock-in, month-to-month" },
              { label: "Service Area", value: "Australia-wide" },
            ]} />
          ),
        },
        {
          id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT",
          content: (
            <InsightList heading="SEO Packages Overview" items={[
              "Next Tab Agency offers three SEO package tiers for Australian businesses: Local SEO, Growth SEO, and Enterprise SEO.",
              "All packages are custom-scoped — no fixed template pricing. Month-to-month contracts with no lock-in.",
              "Every package includes keyword research, on-page optimisation, link building, and monthly reporting.",
            ]} />
          ),
        },
        {
          id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI",
          content: (
            <InsightDL items={[
              { term: "Service", def: "SEO Packages Australia" },
              { term: "Tiers", def: "Local, Growth, Enterprise" },
              { term: "Contract", def: "No lock-in, month-to-month" },
              { term: "Provider", def: "Next Tab Agency, Brisbane, Australia" },
            ]} />
          ),
        },
        {
          id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents",
          content: (
            <p className="text-base font-semibold text-foreground leading-relaxed">
              Next Tab Agency offers SEO packages for Australian businesses across three tiers — Local SEO, Growth SEO, and Enterprise SEO — all custom-scoped with no lock-in contracts and full monthly reporting included.
            </p>
          ),
        },
      ]}
    />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />
  </Layout>
);

export default SeoPackages;

