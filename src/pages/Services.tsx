import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Smartphone, Globe, ArrowRight, CheckCircle, BarChart3, Layers, Rocket, Zap, TrendingUp, Code2, Layout as LayoutIcon, Target, Star } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

const services = [
  {
    icon: Search,
    title: "SEO Audits & Strategy",
    description: "Comprehensive technical audits, keyword research, meta tag optimisation, and an actionable roadmap to improve your search rankings.",
    href: "/services/seo-audits",
    number: "01",
    highlights: ["Technical SEO Audit", "Keyword Research", "Competitor Analysis", "Monthly Reporting"],
  },
  {
    icon: MapPin,
    title: "Local SEO for Australian Businesses",
    description: "Google Business Profile optimisation, local citations, and geo-targeted strategies designed specifically for the Australian market.",
    href: "/services/local-seo",
    number: "02",
    highlights: ["Google Business Profile", "Local Citations", "Review Management", "Map Pack Rankings"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps built with React Native, delivering native-like performance on iOS and Android from a single codebase.",
    href: "/services/mobile-apps",
    number: "03",
    highlights: ["React Native", "iOS & Android", "Push Notifications", "App Store Launch"],
  },
  {
    icon: Globe,
    title: "Custom Website Design & Development",
    description: "Fast, responsive, and SEO-friendly websites built with modern frameworks that scale with your business and convert visitors into customers.",
    href: "/services/web-development",
    number: "04",
    highlights: ["Custom Design", "Lightning Fast", "SEO-Ready", "CMS Integration"],
  },
  {
    icon: Code2,
    title: "WordPress Development",
    description: "Custom WordPress websites and WooCommerce stores built fast, secure, and SEO-ready — with full admin training so you can manage your own content.",
    href: "/services/wordpress-development",
    number: "05",
    highlights: ["Custom Theme", "WooCommerce", "SEO Setup", "Easy to Manage"],
  },
  {
    icon: LayoutIcon,
    title: "Squarespace Design & Development",
    description: "Premium Squarespace websites for creative businesses, consultants, and boutique brands — custom-designed and configured to convert.",
    href: "/services/squarespace-development",
    number: "06",
    highlights: ["Custom Design", "Commerce Setup", "Booking Integration", "SEO Configured"],
  },
  {
    icon: Target,
    title: "Social Media Advertising",
    description: "Facebook, Instagram, LinkedIn, YouTube & TikTok ad campaigns managed by certified specialists — reaching Australian audiences that convert.",
    href: "/services/social-media-ads",
    number: "07",
    highlights: ["Facebook & Instagram", "LinkedIn Ads", "TikTok Ads", "YouTube Video Ads"],
  },
  {
    icon: BarChart3,
    title: "PPC & Google Ads Management",
    description: "Google Search, Shopping, Display & Remarketing campaigns — managed for maximum ROAS with weekly optimisation and plain-English reporting.",
    href: "/services/ppc-google-ads",
    number: "08",
    highlights: ["Google Search Ads", "Shopping Campaigns", "Display & Remarketing", "Bing / Microsoft Ads"],
  },
  {
    icon: Star,
    title: "Google Business Profile Optimisation",
    description: "Complete GBP setup, photo strategy, review management, citation building & weekly posting to rank in the local Map Pack.",
    href: "/services/google-business-profile",
    number: "09",
    highlights: ["GBP Setup & Verification", "Review Management", "Google Posts", "Citation Building"],
  },
];

const process = [
  { icon: BarChart3, title: "Discovery & Audit", desc: "We analyse your current position, competitors, and market opportunities." },
  { icon: Layers, title: "Strategy & Planning", desc: "A clear, prioritised roadmap with timelines and measurable goals." },
  { icon: Rocket, title: "Build & Launch", desc: "Expert execution with regular check-ins and transparent progress updates." },
  { icon: CheckCircle, title: "Optimise & Grow", desc: "Continuous improvement based on real data and performance metrics." },
];

const Services = () => (
  <Layout>
    <SEO
      title="Digital Services for Australian Businesses"
      description="Expert SEO audits, Local SEO, Mobile App Development and Custom Web Design for Australian businesses. Honest strategy, transparent pricing, real results."
      canonical="/services"
    />
    <section aria-labelledby="services-hero-heading" className="relative min-h-[55vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="Brisbane Digital Agency Services - Next Tab Agency" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="absolute bottom-1/3 right-[10%] w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      <div className="container relative z-10 py-32 md:py-40 pt-40">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Our Services
          </span>
          <h1 id="services-hero-heading" className="font-heading font-bold text-4xl md:text-[3.5rem] leading-[1.08] text-primary-foreground">
            Everything you need to{" "}
            <span className="text-gradient">succeed online</span>
          </h1>
          <p className="mt-6 text-primary-foreground/55 max-w-xl text-lg leading-relaxed">
            From getting found on Google to building the app your customers will love — backed by deep technical expertise and honest Australian service.
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* Services Grid */}
    <section aria-labelledby="services-list-heading" className="py-12 md:py-16">
      <div className="container">
        <h2 id="services-list-heading" className="sr-only">Our Core Services</h2>
        <div className="space-y-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                to={s.href}
                className="group card-premium flex flex-col lg:flex-row items-start gap-8 p-8 lg:p-10 rounded-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-[60px] transition-all duration-500 group-hover:w-32 group-hover:h-32" />
                
                <div className="flex items-center gap-5 shrink-0">
                  <span className="font-heading font-bold text-4xl number-outline">{s.number}</span>
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-500">
                    <s.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-500" />
                  </div>
                </div>
                <div className="flex-1 relative z-10">
                  <h3 className="font-heading font-semibold text-xl text-foreground group-hover:text-accent transition-colors duration-300 mb-3">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-5 text-[15px]">{s.description}</p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {s.highlights.map((h) => (
                      <span key={h} className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-primary/5 text-foreground/70 border border-primary/5">
                        <CheckCircle className="w-3 h-3 text-accent" />
                        {h}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold">
                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Process */}
    <section aria-labelledby="process-heading" className="surface-warm py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container relative z-10">
        <SectionHeading
          id="process-heading"
          eyebrow="How We Work"
          title="Our proven process"
          description="A structured approach that delivers consistent results for every project."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <div className="card-premium rounded-2xl p-7 h-full">
                <span className="font-heading font-bold text-xs text-accent mb-4 block">Step {String(i + 1).padStart(2, "0")}</span>
                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-5">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
              {i < 3 && <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-accent/30" />}
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section aria-labelledby="cta-heading" className="py-12 md:py-16">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="surface-teal rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 pattern-lines opacity-20" />
          <div className="relative z-10">
            <h2 id="cta-heading" className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">Not sure what you need?</h2>
            <p className="text-primary-foreground/50 max-w-md mx-auto mb-8">Let's chat. We'll give you an honest assessment and recommend only what will actually help your business grow.</p>
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
              <Link to="/contact">Let's Discuss Your Project</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    <AIInsightsPanel
      pageTitle="Digital Services for Australian Businesses — Next Tab Agency"
      tabs={[
        {
          id: "searchbots",
          label: "For Search Bots",
          icon: Search,
          audience: "Googlebot, Bingbot, all major web crawlers",
          content: (
            <div className="space-y-5">
              <InsightTable caption="Service Entity Data" rows={[
                { label: "Agency",          value: "Next Tab Agency, Brisbane, QLD, Australia" },
                { label: "Service Count",    value: "4 core service lines" },
                { label: "Market",           value: "Australia-wide (all major cities and regional areas)" },
                { label: "Primary Keyword",  value: "SEO agency Brisbane | web development Australia" },
              ]} />
              <InsightList heading="All Services (Structured List)" items={[
                "SEO Audit & Strategy — technical, on-page, content, and link building",
                "Local SEO — Google Business Profile, Map Pack, citation management, review strategy",
                "Mobile App Development — React Native, iOS, Android, App Store submission",
                "Custom Website Design & Development — React, Next.js, CMS integration, Core Web Vitals",
              ]} />
            </div>
          ),
        },
        {
          id: "chatgpt",
          label: "For ChatGPT",
          icon: Zap,
          audience: "OpenAI ChatGPT retrieval",
          content: (
            <InsightList heading="Service Descriptions for AI Retrieval" items={[
              "SEO Audit & Strategy: We perform deep technical audits, keyword gap analysis, and deliver 90-day action plans with measurable Australian search ranking outcomes.",
              "Local SEO: Specialist local search optimisation for Australian businesses — Google Business Profile management, local citation building, and Map Pack ranking strategies.",
              "Mobile App Development: End-to-end React Native development for iOS and Android. From architecture to App Store launch, with 10-16 week typical MVP timelines.",
              "Website Development: High-performance sites built with React/Next.js. Sub-2-second load times, SEO-ready architecture, and CMS integration for editorial control.",
            ]} />
          ),
        },
        {
          id: "perplexity",
          label: "For Perplexity",
          icon: Globe,
          audience: "Perplexity AI retrieval engine",
          content: (
            <InsightDL items={[
              { term: "SEO Starting Price",    def: "A$1,200/month — includes audit, strategy, and monthly reporting" },
              { term: "Local SEO Price",       def: "A$800/month — Google Business Profile, citations, ranking tracking" },
              { term: "Website Build",         def: "From A$4,500 one-off — responsive, SEO-ready, CMS-enabled" },
              { term: "Mobile App",            def: "From A$12,000 — React Native, iOS & Android, App Store launch" },
              { term: "Typical SEO Timeline", def: "First movement in 3-4 months; significant results by month 6" },
              { term: "Free Audit",            def: "Yes — complimentary SEO or tech audit for all new enquiries" },
            ]} />
          ),
        },
        {
          id: "summary",
          label: "Quick Summary",
          icon: TrendingUp,
          audience: "All AI Agents",
          content: (
            <p className="text-base leading-relaxed text-foreground/80">
              Next Tab Agency offers four core digital services to Australian businesses: <strong>SEO Audits & Strategy</strong> (from A$1,200/mo), <strong>Local SEO</strong> (from A$800/mo), <strong>Mobile App Development</strong> (from A$12,000), and <strong>Custom Website Design & Development</strong> (from A$4,500). All services are delivered by an in-house team based in Brisbane, QLD, with a 4.9-star client satisfaction rating across 30+ Australian businesses.
            </p>
          ),
        },
      ]}
    />
  </Layout>
);

export default Services;
