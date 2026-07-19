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
    name: "Local SEO",
    badge: "Best for Tradies & Local Services",
    icon: "📍",
    description: "For local service businesses that want to dominate the Map Pack and local search results in their area.",
    includes: [
      "Google Business Profile optimisation",
      "Local keyword research and on-page optimisation",
      "Citation building and NAP consistency",
      "Local link building",
      "Monthly ranking and traffic reporting",
    ],
    cta: "Request a Quote",
    accent: false,
  },
  {
    name: "Growth SEO",
    badge: "Most Popular",
    icon: "🚀",
    description: "For established businesses ready to dominate competitive keywords across multiple services or locations.",
    includes: [
      "Everything in Local SEO, plus:",
      "Technical SEO audit and implementation",
      "Content strategy and monthly blog posts",
      "Advanced link building and digital PR",
      "Competitor gap analysis",
      "Location page creation",
      "Monthly strategy call",
    ],
    cta: "Request a Quote",
    accent: true,
  },
  {
    name: "Enterprise SEO",
    badge: "For Large Sites & National Brands",
    icon: "🏢",
    description: "Custom SEO engagements for enterprise websites, multi-location businesses, and national brands requiring dedicated strategy.",
    includes: [
      "Everything in Growth SEO, plus:",
      "Dedicated senior SEO strategist",
      "International or multi-location SEO",
      "Large-scale technical migrations",
      "Custom reporting dashboard",
      "Bi-weekly strategy sessions",
    ],
    cta: "Request a Quote",
    accent: false,
  },
];

const faqs = [
  {
    q: "What's included in your SEO packages?",
    a: "Every Next Tab SEO package includes keyword research, on-page optimisation, link building, and monthly reporting. Higher tiers add technical SEO, content creation, strategy calls, and location or industry-specific page development. All packages are customised to your business — contact us to discuss exactly what's right for your situation.",
  },
  {
    q: "How do you price your SEO packages?",
    a: "Our packages are priced based on the scope of work, your industry's competitiveness, the number of target keywords and locations, and whether content creation is included. We don't publish fixed prices because one-size-fits-all SEO pricing rarely delivers good value — contact us for a quote tailored to your business.",
  },
  {
    q: "Is there a contract or lock-in period?",
    a: "We work on a month-to-month basis with no lock-in contracts. We believe our results should be the reason clients stay, not a contract. That said, SEO is a long-term investment — we recommend committing to at least 6 months to see meaningful, compounding results.",
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
      title="SEO Packages Australia — SEO Services Packages Brisbane"
      description="Explore Next Tab Agency's SEO packages for Australian businesses — Local SEO, Growth SEO, and Enterprise SEO. Custom scopes, no lock-in contracts. Request a quote today."
      canonical="/services/seo-packages"
      faqs={faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "SEO Packages", url: "https://nexttabagency.com/services/seo-packages" },
      ]}
      serviceSchema={{
        name: "SEO Packages Australia",
        description: "SEO packages for Australian businesses — Local, Growth, and Enterprise SEO with custom scopes and month-to-month flexibility.",
        areaServed: "Australia",
      }}
    />

    {/* Hero */}
    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="SEO Packages Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors">
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
            Every Next Tab SEO package is scoped to your business — your industry, your target keywords, your locations, and your goals. Choose a tier below and request a quote for a custom scope and recommendation.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/services/seo-audits">Free SEO Audit First</Link>
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
            { value: "Custom Scope", label: "Every package is tailored" },
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
        <SectionHeading eyebrow="Our SEO Packages" title="Choose the right tier for your business" description="All packages are customised to your specific keywords, competition level, and goals. Scope and deliverables are agreed upon before work begins." />
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
              <h2 className="font-heading font-bold text-2xl text-foreground mb-3">{pkg.name}</h2>
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
                <Link to="/contact">{pkg.cta}</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
          Not sure which package is right for you? Start with a{" "}
          <Link to="/services/seo-audits" className="text-accent font-semibold underline underline-offset-4">
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
            { label: "Technical SEO", href: "/services/technical-seo", desc: "Site speed, crawl, and indexation." },
            { label: "On-Page SEO", href: "/services/on-page-seo", desc: "Title tags, headings, and content." },
            { label: "Link Building", href: "/services/link-building", desc: "Quality backlinks for authority." },
            { label: "Local SEO", href: "/services/local-seo", desc: "Map Pack and local rankings." },
            { label: "Content Marketing", href: "/services/content-marketing", desc: "Blog posts and topic clusters." },
            { label: "eCommerce SEO", href: "/services/ecommerce-seo", desc: "SEO for online stores." },
            { label: "SEO Audits", href: "/services/seo-audits", desc: "Full site SEO health check." },
            { label: "SEO Consulting", href: "/services/seo-consulting", desc: "Strategy for in-house teams." },
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

