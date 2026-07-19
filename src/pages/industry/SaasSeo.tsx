import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Zap, TrendingUp, Globe, Search, Users, BarChart2 } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";
import LocationLinksStrip from "@/components/LocationLinksStrip";

const service = {
  title: "B2B & SaaS SEO Strategy",
  headline: "Organic Pipeline for Australian Tech Companies.",
  description: "Product-led SEO for Brisbane SaaS startups, B2B software companies, and technology businesses. We build organic acquisition engines that generate MQLs, not just traffic.",
  longDescription: "SaaS SEO is fundamentally different from traditional SEO. Your buyers aren't searching for your product — they're searching for the problem your product solves. A CFO searching 'automate expense reporting Australia' or 'accounts payable software Brisbane' isn't looking for a blog post — they're 2 weeks away from a purchase decision. Next Tab Agency builds SaaS-specific SEO strategies that target every stage of your buyer journey: bottom-of-funnel comparison pages, middle-of-funnel problem-aware content, and top-of-funnel thought leadership that compounds over time.",
  features: [
    "Bottom-of-funnel keyword strategy — 'best [category] software Australia', '[competitor] alternative'",
    "Competitor comparison and alternative pages that intercept switching intent",
    "Product-led content — free tools, calculators, and templates that drive signups",
    "Technical SEO for SaaS — subdomain strategy, faceted search, crawl budget management",
    "Entity and topical authority building in your product category",
    "Integration documentation and API page SEO (developer audience)",
    "Case study and ROI page optimisation for enterprise buyers",
    "G2, Capterra, and Software Advice review and listing strategy",
    "SaaS-specific link building — Product Hunt, TechCrunch AU, startup directories",
    "Monthly SEO reporting aligned to MQLs, trials, and demo requests",
  ],
  benefits: [
    { icon: TrendingUp, title: "Pipeline-Quality Leads", desc: "We target keywords with purchase intent — buyers researching solutions, not just browsing." },
    { icon: Zap, title: "Compounding Growth", desc: "Unlike paid ads that stop when budget runs out, SEO compounds. Month 12 costs the same as month 1 — but delivers 5× the results." },
    { icon: BarChart2, title: "Full-Funnel Coverage", desc: "TOFU thought leadership, MOFU comparison pages, BOFU trial/demo pages — all working together." },
  ],
  process: [
    { step: "01", title: "ICP & Keyword Map", desc: "Define your Ideal Customer Profile and map their search journey from problem awareness to purchase decision." },
    { step: "02", title: "Technical Foundation", desc: "Audit your SaaS site architecture — subdomains, crawlability, Core Web Vitals, and schema for software products." },
    { step: "03", title: "Content Moat", desc: "Build a content strategy that creates topical authority in your category — making you the go-to resource for your buyers." },
    { step: "04", title: "Measure & Scale", desc: "Track MQLs, trials, and demo requests from organic. Scale what works, cut what doesn't." },
  ],
  stats: [
    { value: "47%", label: "of B2B buyers start their purchase research with a generic Google search", source: "Gartner" },
    { value: "3×", label: "higher conversion rate from organic traffic vs paid for SaaS products", source: "First Page Sage" },
    { value: "14mo", label: "average time to see full compounding ROI from SaaS SEO — but most clients see MQLs within 90 days", source: "Next Tab Analysis" },
  ],
  contentTypes: [
    { type: "BOFU", name: "Comparison Pages", example: "'[Your Product] vs [Competitor]', 'Best [Category] Software Australia 2025'" },
    { type: "BOFU", name: "Alternative Pages", example: "'[Competitor] Alternatives', 'Switch from [Competitor] to [Your Product]'" },
    { type: "MOFU", name: "Problem-Aware Content", example: "'How to automate [process]', '[Problem] solutions for Australian businesses'" },
    { type: "TOFU", name: "Thought Leadership", example: "Industry reports, original research, expert guides that earn backlinks" },
    { type: "TOFU", name: "Free Tools", example: "Calculators, generators, and templates that drive organic traffic and product signups" },
  ],
  faqs: [
    { q: "How is SaaS SEO different from regular SEO?", a: "SaaS SEO focuses on product category keywords, competitor comparison content, and free tool strategies — not just blog traffic. The goal is MQLs and trials, not page views." },
    { q: "We're pre-product. Is it too early for SEO?", a: "No — building topical authority before launch is a significant competitive advantage. Many successful SaaS companies rank before they publicly launch." },
    { q: "Do you work with SaaS companies outside Brisbane?", a: "Yes. We work with SaaS companies across Australia — Sydney, Melbourne, Perth — and internationally. Our SaaS SEO work is entirely remote." },
    { q: "How do you measure SaaS SEO success?", a: "We track organic MQLs, trial signups, demo requests, and keyword rankings for your target categories. Traffic is a vanity metric — pipeline is what matters." },
    { q: "What's the minimum budget for SaaS SEO?", a: "SaaS SEO typically starts from $2,000/month for early-stage companies. Enterprise or competitive category campaigns start from $4,000/month." },
  ],
};

const SaasSeo = () => (
  <Layout>
    <SEO
      title="B2B & SaaS SEO Australia — Organic Pipeline for Tech Companies"
      description="SaaS-specific SEO strategy for Australian B2B software companies. Competitor comparison pages, bottom-of-funnel content, and technical SEO that generates MQLs and trial signups. Brisbane-based, Australia-wide."
      canonical="/industry/saas-seo"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Industries", url: "https://nexttabagency.com/services" },
        { name: "SaaS SEO", url: "https://nexttabagency.com/industry/saas-seo" },
      ]}
      serviceSchema={{ name: "B2B & SaaS SEO", description: "Product-led SEO strategy for Australian SaaS and B2B technology companies — generating MQLs and trial signups from organic search.", areaServed: "Australia" }}
    />

    {/* ── Hero ── */}
    <section aria-labelledby="saas-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="SaaS SEO Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to all services
        </Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
            <Zap className="w-3 h-3" /> SaaS & B2B SEO
          </span>
          <h1 id="saas-hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Get a SaaS SEO Strategy</Link></Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/services/seo-audits">Free SEO Audit</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* ── Stats ── */}
    <section className="py-20 surface-teal text-primary-foreground">
      <div className="container">
        <div className="grid sm:grid-cols-3 gap-8 text-center">
          {service.stats.map((s, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }}>
              <p className="font-heading font-bold text-5xl text-accent mb-2">{s.value}</p>
              <p className="text-sm text-primary-foreground/70 leading-snug">{s.label}</p>
              <p className="text-xs text-primary-foreground/40 mt-1">Source: {s.source}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Benefits ── */}
    <section className="py-24">
      <div className="container">
        <SectionHeading
          eyebrow="The SaaS SEO Advantage"
          title="Organic Traffic That Actually Converts to Pipeline"
          subtitle="Most SaaS companies treat SEO like a blog strategy. We treat it like a revenue channel."
        />
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {service.benefits.map((b, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="p-8 rounded-2xl border border-border bg-card">
              <b.icon className="w-10 h-10 text-accent mb-5" />
              <h3 className="font-heading font-bold text-lg mb-3">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Content Framework ── */}
    <section className="py-24 bg-muted/30">
      <div className="container">
        <SectionHeading
          eyebrow="Content Strategy"
          title="The Full-Funnel SaaS Content Framework"
          subtitle="We build content at every stage of your buyer's journey — from problem awareness to vendor comparison."
        />
        <div className="mt-12 space-y-4 max-w-4xl mx-auto">
          {service.contentTypes.map((c, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }}
              className="grid sm:grid-cols-[80px_200px_1fr] gap-4 items-start p-5 rounded-2xl border border-border bg-card">
              <span className={`inline-flex items-center justify-center px-2 py-1 rounded-full text-xs font-black tracking-wider ${
                c.type === 'BOFU' ? 'bg-accent/20 text-accent' :
                c.type === 'MOFU' ? 'bg-blue-500/10 text-blue-600' :
                'bg-muted text-muted-foreground'
              }`}>{c.type}</span>
              <p className="font-semibold text-sm">{c.name}</p>
              <p className="text-sm text-muted-foreground italic">{c.example}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── Services ── */}
    <section className="py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading eyebrow="What's Included" title="Full SaaS SEO Service" />
            <ul className="mt-8 space-y-3">
              {service.features.map((f, i) => (
                <motion.li key={i} {...fadeUp} transition={{ delay: i * 0.04 }} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />{f}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Our Process" title="How We Build Your Organic Pipeline" />
            <div className="mt-8 space-y-6">
              {service.process.map((p, i) => (
                <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="relative pl-14">
                  <div className="absolute left-0 top-0 text-3xl font-heading font-black text-accent/20">{p.step}</div>
                  <h3 className="font-heading font-bold text-base mb-1">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Brisbane Tech Ecosystem ── */}
    <section className="py-16 bg-muted/30">
      <div className="container max-w-4xl">
        <SectionHeading
          eyebrow="Brisbane Tech Scene"
          title="We Know the Brisbane Tech Ecosystem"
          subtitle="From Fishburners to River City Labs, QUT Forge to the Valley tech precinct — we understand the Brisbane startup landscape and the B2B buyers within it."
        />
        <div className="mt-8 grid sm:grid-cols-3 gap-4">
          {["Fishburners Brisbane", "River City Labs", "QUT Forge", "Startup QLD", "ilab Ventures", "Brisbane Technology Park"].map((org, i) => (
            <div key={i} className="p-4 rounded-xl border border-border bg-card text-sm font-medium text-center">{org}</div>
          ))}
        </div>
      </div>
    </section>

    {/* ── AI Insights ── */}
    <section className="py-16">
      <div className="container max-w-4xl">
        <AIInsightsPanel title="SaaS SEO Intelligence">
          <InsightDL items={[
            ["Highest converting page type", "Competitor comparison pages convert 4–6× better than generic feature pages for SaaS products"],
            ["Australian SaaS buyer behaviour", "85% of Australian B2B software buyers shortlist 3–4 vendors from Google search before contacting sales"],
            ["Review platform impact", "A G2 or Capterra listing with 50+ reviews drives 3× more demo requests than a landing page alone"],
            ["Content ROI timeline", "BOFU content generates MQLs in 60–90 days. TOFU content compounds over 12–18 months"],
          ]} />
          <InsightList heading="SaaS SEO Quick Wins" items={[
            "Build one '[Competitor] vs [Your Product]' comparison page per major competitor",
            "Create a free calculator or tool in your product category to capture TOFU traffic",
            "Claim and optimise G2, Capterra, and GetApp listings (Bing feeds these to Perplexity)",
            "Add FAQ schema to all product and pricing pages for AI Overview visibility",
            "Build a 'State of [Category] in Australia' annual report for backlink acquisition",
          ]} />
        </AIInsightsPanel>
      </div>
    </section>

    {/* ── FAQs ── */}
    <section className="py-24 bg-muted/30">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="SaaS SEO — Your Questions Answered" />
        <div className="mt-10 space-y-6">
          {service.faqs.map((faq, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.08 }} className="p-6 rounded-2xl border border-border bg-card">
              <h3 className="font-heading font-bold text-base mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── CTA ── */}
    <section className="py-20 surface-teal text-primary-foreground">
      <div className="container text-center max-w-2xl">
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Ready to Build Your Organic Pipeline?</h2>
        <p className="text-primary-foreground/70 mb-8">Free SaaS SEO audit — we'll map your competitor gaps, keyword opportunities, and content priorities in 48 hours.</p>
        <Button variant="accent" size="lg" asChild><Link to="/contact">Get My Free SaaS SEO Audit</Link></Button>
      </div>
    </section>

    <LiveTeardownForm />
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
          <Link to="/services/b2b-seo" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">B2B SEO</h3>
            <p className="text-sm text-muted-foreground">Long-cycle B2B search strategy.</p>
          </Link>
          <Link to="/services/technical-seo" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Technical SEO</h3>
            <p className="text-sm text-muted-foreground">Fix crawl issues in complex SaaS apps.</p>
          </Link>
          <Link to="/services/link-building" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Link Building</h3>
            <p className="text-sm text-muted-foreground">Authority backlinks from SaaS publications.</p>
          </Link>
          <Link to="/services/content-marketing" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Content Marketing</h3>
            <p className="text-sm text-muted-foreground">Topical authority content for SaaS.</p>
          </Link>
          </div>
        </div>
      </section>
      {/* Internal linking — Australian location pages */}
      <LocationLinksStrip />
  </Layout>
);

export default SaasSeo;

