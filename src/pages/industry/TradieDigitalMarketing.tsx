import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Wrench, MapPin, Phone, Zap, TrendingUp, Star } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "Tradie Digital Marketing Brisbane",
  headline: "More Leads. Less Time on the Tools.",
  description: "Digital marketing built for Australian tradies — plumbers, electricians, builders, and more. We get your phone ringing with qualified local jobs using Google Ads, SEO, and a website that actually converts.",
  longDescription: "Word-of-mouth built your business — but it won't scale it. In 2025, 97% of Australians search online before calling a tradie. Whether it's an emergency hot water service at 2am or a planned bathroom renovation, your potential customers are on Google right now — and if your competitors come up first, you lose the job. Next Tab Agency specialises in tradie digital marketing across Brisbane, Logan, Ipswich, and the Redlands. We understand seasonal demand spikes, emergency search behaviour, and the need to dominate your suburb before the franchises do.",
  trades: ["Plumbers", "Electricians", "Builders & Concreters", "HVAC & Air Con", "Tilers & Flooring", "Painters", "Roofers", "Landscapers", "Pest Control", "Solar Installers"],
  features: [
    "Google Ads for tradies — emergency search, scheduled work, and seasonal campaigns",
    "Local SEO — rank #1 for '[trade] Brisbane [suburb]' searches",
    "Google Business Profile setup and full Map Pack optimisation",
    "Tradie website design — mobile-first, click-to-call, fast-loading",
    "Review generation strategy to dominate local social proof",
    "Facebook & Instagram — before/after content and suburb retargeting",
    "Service area page creation for every suburb you work in",
    "Competitor analysis — who's ranking above you and why",
    "Citation building — Yellow Pages, True Local, HiPages, ServiceSeeking",
    "Monthly reporting — calls, leads, and cost per job tracked",
  ],
  benefits: [
    { icon: Phone, title: "More Phone Calls", desc: "We optimise for 'call now' conversions — your phone number is front and centre on every touchpoint." },
    { icon: MapPin, title: "Suburb-Level Targeting", desc: "Dominate the areas you actually work in. We build suburb-specific pages and Google Ads targeting your service radius." },
    { icon: Wrench, title: "Tradie-First Expertise", desc: "We know the trades market — emergency demand, seasonal patterns, and what it takes to beat the big franchises in your area." },
  ],
  process: [
    { step: "01", title: "Audit", desc: "We review your website, Google Business Profile, and current rankings to find the biggest opportunities fast." },
    { step: "02", title: "Strategy", desc: "Build a tradie-specific plan covering SEO, Google Ads, and social — targeting your suburbs and trade types." },
    { step: "03", title: "Launch", desc: "Get Google Ads live within 5 days. SEO and GBP optimisation running within 2 weeks." },
    { step: "04", title: "Scale", desc: "Compound your results month-over-month — more reviews, more pages, more calls. We track every lead." },
  ],
  stats: [
    { value: "97%", label: "of Australians search online before contacting a local tradie", source: "Google Australia" },
    { value: "76%", label: "of local mobile searches result in a call within 24 hours", source: "Google" },
    { value: "18×", label: "increase in weekly calls for a Logan plumber after 4 months with Next Tab", source: "Next Tab Case Study" },
  ],
  faqs: [
    { q: "How fast can Google Ads start generating calls?", a: "We can have a Google Ads campaign live within 3–5 business days. Most tradie clients receive their first calls within the first week of going live." },
    { q: "Do I need a new website, or can you work with my existing one?", a: "We can work with most existing websites. We'll assess whether your current site converts traffic into calls — if not, we'll recommend specific fixes or a new build." },
    { q: "What areas do you cover for tradie marketing?", a: "We specialise in Brisbane, Logan, Ipswich, Redlands, Moreton Bay, Gold Coast, and Sunshine Coast. We also work with tradies across all of Australia." },
    { q: "How is this different from HiPages or ServiceSeeking?", a: "Lead generation platforms charge per lead and create a race to the bottom on price. Our strategy builds assets you own — rankings, reviews, and a converting website — that generate free leads for years." },
    { q: "What's your pricing for tradie marketing?", a: "Tradie marketing packages start from $799/month for local SEO and GBP management. Google Ads management starts from $499/month plus your ad spend. Contact us for a custom quote." },
  ],
};

const suburbsServed = [
  "Logan City", "Ipswich", "Redland City", "Moreton Bay Region",
  "Gold Coast", "Sunshine Coast", "Inner Brisbane", "Northside Brisbane",
  "Southside Brisbane", "Bayside Brisbane",
];

const TradieDigitalMarketing = () => (
  <Layout>
    <SEO
      title="Tradie Digital Marketing Brisbane — More Jobs From Google"
      description="Digital marketing for Brisbane tradies — plumbers, electricians, builders and more. Google Ads, local SEO, and tradie websites that get your phone ringing. Logan, Ipswich, Redlands, Gold Coast."
      canonical="/industry/tradie-digital-marketing"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Industries", url: "https://nexttabagency.com/services" },
        { name: "Tradie Digital Marketing", url: "https://nexttabagency.com/industry/tradie-digital-marketing" },
      ]}
      serviceSchema={{ name: "Tradie Digital Marketing", description: "Digital marketing for Australian tradies — Google Ads, SEO, and websites that generate qualified job leads.", areaServed: "Brisbane, Queensland, Australia" }}
    />

    {/* ── Hero ── */}
    <section aria-labelledby="tradie-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="Tradie Digital Marketing Brisbane" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to all services
        </Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6">
            <Wrench className="w-3 h-3" /> Tradie Marketing
          </span>
          <h1 id="tradie-hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Get More Tradie Leads</Link></Button>
            <Button variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/services/seo-audits">Free Website Audit</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* ── Trust Story ── */}
    <section className="py-16 bg-muted/30">
      <div className="container max-w-4xl">
        <motion.blockquote {...fadeUp} className="text-xl md:text-2xl font-heading font-medium leading-relaxed text-foreground/80 border-l-4 border-accent pl-6">
          "A plumber in Logan was getting 3 calls a week from their website. Within 4 months of working with Next Tab Agency, they were fielding 18–22 calls per week — and had to hire a second apprentice. We understand the tradie market: seasonal demand spikes, emergency searches at 2am, and the need to dominate your suburb before the bigger franchises do."
        </motion.blockquote>
      </div>
    </section>

    {/* ── Trades We Serve ── */}
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-accent mb-8">Trades We Work With</p>
        <div className="flex flex-wrap justify-center gap-3">
          {service.trades.map((t, i) => (
            <span key={i} className="px-4 py-2 rounded-full border border-primary-foreground/20 text-sm font-medium text-primary-foreground/80">
              {t}
            </span>
          ))}
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
          eyebrow="Why Next Tab"
          title="Built for Tradies, Not Corporate Clients"
          subtitle="We don't do cookie-cutter marketing. Every tradie campaign is built around your trade, your suburbs, and your seasonal demand peaks."
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

    {/* ── Services + Suburbs ── */}
    <section className="py-24 bg-muted/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading eyebrow="What's Included" title="Tradie Digital Marketing Services" />
            <ul className="mt-8 space-y-3">
              {service.features.map((f, i) => (
                <motion.li key={i} {...fadeUp} transition={{ delay: i * 0.04 }} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />{f}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Suburbs We Target" title="Brisbane & South-East QLD Coverage" />
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
        <SectionHeading eyebrow="How It Works" title="From Sign-Up to Phone Ringing" />
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

    {/* ── AI Insights ── */}
    <section className="py-16 bg-muted/30">
      <div className="container max-w-4xl">
        <AIInsightsPanel title="Tradie Marketing Intelligence">
          <InsightDL items={[
            ["Peak search times", "Emergency service searches spike between 7–9am and 5–7pm on weekdays. Ad scheduling to these windows reduces cost-per-lead by 30–40%"],
            ["Top converting keywords", "'Emergency [trade] [suburb]', '[trade] near me', '[trade] [suburb] same day' — all have purchase intent >85%"],
            ["Review impact", "Every 10 new Google reviews increases Map Pack CTR by 15–20% for local service businesses"],
            ["Mobile dominance", "89% of tradie searches are on mobile. Click-to-call optimisation is the single highest ROI improvement"],
          ]} />
          <InsightList heading="Quick Wins for Tradies" items={[
            "Add all service suburbs to Google Business Profile service areas",
            "Set up call tracking to measure which channels drive phone leads",
            "Create one suburb-specific landing page per major work area",
            "Run Google Ads with call extensions and location targeting",
            "Request reviews via SMS immediately after job completion",
          ]} />
        </AIInsightsPanel>
      </div>
    </section>

    {/* ── FAQs ── */}
    <section className="py-24">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow="FAQ" title="Tradie Digital Marketing — Your Questions Answered" />
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
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Ready to Get Your Phone Ringing?</h2>
        <p className="text-primary-foreground/70 mb-8">Free tradie marketing review — we'll show you exactly where you're losing jobs to competitors.</p>
        <Button variant="accent" size="lg" asChild><Link to="/contact">Get My Free Marketing Review</Link></Button>
      </div>
    </section>

    <LiveTeardownForm />
  </Layout>
);

export default TradieDigitalMarketing;
