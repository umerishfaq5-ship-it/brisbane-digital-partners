import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Heart, MapPin, Users, Zap, Shield, TrendingUp, Globe } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "NDIS Digital Marketing Brisbane",
  headline: "Help More Participants Find Your Services.",
  description: "Specialist digital marketing for NDIS providers in Brisbane, Logan, Ipswich, Gold Coast, and across Queensland. NDIS-compliant SEO, Google Ads, and web design that drives participant enquiries — without violating NDIS Commission guidelines.",
  longDescription: "Queensland has the highest concentration of NDIS participants outside NSW. Every day, participants and their plan managers in Logan, Ipswich, the Redlands, and Moreton Bay are searching Google for disability support providers — and finding your competitors first. Next Tab Agency builds NDIS-specific digital strategies that respect the NDIS Code of Conduct marketing rules, drive genuine enquiries from participants and carers, and grow your registered or unregistered provider business sustainably.",
  features: [
    "NDIS SEO — rank for 'NDIS [support type] Brisbane' and suburb-level searches",
    "Google Ads for NDIS providers — PACE-compliant, targeted to carers and plan managers",
    "NDIS website design — WCAG 2.1 AA accessibility, mobile-first, click-to-call",
    "Google Business Profile setup for each NDIS service location",
    "Local suburb targeting — Logan, Ipswich, Redlands, Gold Coast, Sunshine Coast",
    "Support coordinator outreach strategy and referral SEO",
    "Schema markup for NDIS services, location, and accessibility features",
    "Facebook & Instagram for participant community building",
    "Reputation management and Google review strategy",
    "Monthly performance reporting aligned to participant enquiry growth",
  ],
  benefits: [
    { icon: Heart, title: "NDIS-Compliant Strategy", desc: "We understand NDIS Commission marketing guidelines. No promises of outcomes, no misleading claims — just ethical, effective digital marketing." },
    { icon: MapPin, title: "Queensland Coverage", desc: "Specialists in the QLD NDIS market — Logan, Ipswich, Redlands, Moreton Bay, Gold Coast, Sunshine Coast, and Greater Brisbane." },
    { icon: Users, title: "Reach Plan Managers Too", desc: "We target both participants/carers and support coordinators/plan managers — the gatekeepers who refer providers most frequently." },
  ],
  process: [
    { step: "01", title: "NDIS Audit", desc: "Review your current online presence, NDIS Commission compliance, and identify keyword gaps in your service areas." },
    { step: "02", title: "Strategy Build", desc: "Build a suburb-level SEO and Google Ads strategy targeting the right support categories and participant demographics." },
    { step: "03", title: "Content & Technical", desc: "Create NDIS service pages, GBP listings, and ensure WCAG accessibility across your website." },
    { step: "04", title: "Grow & Report", desc: "Scale participant enquiries month-over-month with transparent reporting on calls, form fills, and conversions." },
  ],
  stats: [
    { value: "623K+", label: "active NDIS participants across Australia — growing 10% YoY", source: "NDIA" },
    { value: "#1", label: "digital channel for NDIS provider discovery is Google Search", source: "NDIA Research" },
    { value: "68%", label: "of NDIS plan managers use Google to find and vet new providers", source: "Disability Support Guide" },
  ],
  faqs: [
    { q: "Is Google Ads allowed for NDIS providers?", a: "Yes — NDIS providers can advertise via Google Ads. You must not make misleading claims about outcomes or pricing. We ensure all ad copy is NDIS Commission-compliant." },
    { q: "Do I need to be a registered NDIS provider to use digital marketing?", a: "No. Both registered and unregistered NDIS providers can benefit from SEO and digital marketing. The strategy differs based on the participants you can serve." },
    { q: "What support categories do you specialise in marketing for?", a: "We've worked with providers across Daily Activities, Supported Independent Living (SIL), Community Participation, Support Coordination, Allied Health, and Early Childhood supports." },
    { q: "How long until we see more participant enquiries?", a: "Google Ads can generate enquiries within the first week. SEO typically produces compounding results within 3–6 months. Most NDIS clients see a meaningful increase in enquiries within 60 days." },
  ],
};

const suburbsServed = [
  "Logan City", "Ipswich", "Redland City", "Moreton Bay", "Gold Coast",
  "Sunshine Coast", "Toowoomba", "Rockhampton", "Townsville", "Cairns",
];

const NdisDigitalMarketing = () => (
  <Layout>
    <SEO
      title="NDIS Digital Marketing Brisbane — Grow Your Participant Numbers"
      description="Specialist NDIS digital marketing for Brisbane and Queensland providers. NDIS-compliant SEO, Google Ads, and web design that drives participant enquiries. Logan, Ipswich, Gold Coast, Sunshine Coast."
      canonical="/industry/ndis-digital-marketing"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Industries", url: "https://nexttabagency.com/services" },
        { name: "NDIS Digital Marketing", url: "https://nexttabagency.com/industry/ndis-digital-marketing" },
      ]}
      serviceSchema={{ name: "NDIS Digital Marketing", description: "NDIS-compliant digital marketing for Brisbane and Queensland providers — SEO, Google Ads, and web design.", areaServed: "Brisbane, Queensland, Australia" }}
    />

    {/* ── Hero ── */}
    <section aria-labelledby="ndis-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="NDIS Digital Marketing Brisbane" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to all services
        </Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
            <Heart className="w-3 h-3" /> NDIS Specialists
          </span>
          <h1 id="ndis-hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free NDIS Marketing Review</Link></Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/services/seo-audits">Free Website Audit</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* ── Trust Hook ── */}
    <section className="py-16 bg-muted/30">
      <div className="container max-w-4xl">
        <motion.blockquote {...fadeUp} className="text-xl md:text-2xl font-heading font-medium leading-relaxed text-foreground/80 border-l-4 border-accent pl-6">
          "QLD has the highest concentration of NDIS participants outside NSW. Every day, families in Logan, Ipswich, and the Redlands are searching for NDIS providers — and finding your competitors first. We help NDIS disability service providers get found, get enquiries, and grow their participant numbers without violating NDIS marketing guidelines."
        </motion.blockquote>
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
          eyebrow="Why Next Tab"
          title="NDIS Marketing That Respects the Rules — and Gets Results"
          subtitle="We understand the unique compliance requirements for NDIS providers. Every strategy we build is NDIS Commission-aware."
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

    {/* ── Services List ── */}
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading
              eyebrow="What's Included"
              title="Full NDIS Digital Marketing Service"
              subtitle="Everything you need to grow participant enquiries and build your provider reputation in Queensland."
            />
            <ul className="mt-8 space-y-3">
              {service.features.map((f, i) => (
                <motion.li key={i} {...fadeUp} transition={{ delay: i * 0.04 }} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  {f}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Suburbs We Target" title="Queensland NDIS Service Areas" />
            <div className="mt-8 grid grid-cols-2 gap-3">
              {suburbsServed.map((s, i) => (
                <div key={i} className="flex items-center gap-2 p-3 rounded-xl border border-border bg-card text-sm font-medium">
                  <MapPin className="w-4 h-4 text-accent shrink-0" />{s}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* ── Process ── */}
    <section className="py-24">
      <div className="container">
        <SectionHeading eyebrow="Our Process" title="How We Grow Your NDIS Participant Enquiries" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {service.process.map((p, i) => (
            <motion.div key={i} {...fadeUp} transition={{ delay: i * 0.1 }} className="relative">
              <div className="text-6xl font-heading font-black text-accent/10 mb-4">{p.step}</div>
              <h3 className="font-heading font-bold text-lg mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* ── AI Insights Panel ── */}
    <section className="py-16 bg-muted/30">
      <div className="container max-w-4xl">
        <AIInsightsPanel title="What AI Says About NDIS Provider Marketing">
          <InsightDL items={[
            ["Top search intent", "Participants and carers searching 'NDIS [support type] [suburb]' — hyper-local intent"],
            ["Fastest growing category", "Supported Independent Living (SIL) and Support Coordination have 3× search growth YoY in QLD"],
            ["Compliance consideration", "NDIS Commission rules prohibit misleading claims about outcomes, price guarantees, or participant benefits"],
            ["Plan manager influence", "68% of participant-provider matches involve a plan manager recommendation — reputation signals matter"],
          ]} />
          <InsightList heading="Key NDIS SEO Opportunities" items={[
            "Suburb-level service pages ('NDIS daily activities Logan', 'SIL Ipswich')",
            "Support coordinator referral content and directory listings",
            "Google Business Profile with correct NDIS service categories",
            "WCAG 2.1 AA accessibility for NDIS Commission compliance",
            "Review strategy targeting plan managers and support coordinators",
          ]} />
        </AIInsightsPanel>
      </div>
    </section>

    {/* ── FAQs ── */}
    <section className="py-24">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="NDIS Digital Marketing — Common Questions" />
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
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Ready to Grow Your NDIS Participant Numbers?</h2>
        <p className="text-primary-foreground/70 mb-8">Free NDIS marketing review — no obligation, no lock-in contracts.</p>
        <Button variant="accent" size="lg" asChild><Link to="/contact">Book Your Free Review</Link></Button>
      </div>
    </section>

    <LiveTeardownForm />
  </Layout>
);

export default NdisDigitalMarketing;
