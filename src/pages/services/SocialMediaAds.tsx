import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Youtube, ArrowRight, CheckCircle, BarChart3, Target, TrendingUp, Zap, DollarSign, Users, Eye, MousePointer } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";

import LocationLinksStrip from "@/components/LocationLinksStrip";

const platforms = [
  {
    icon: Facebook,
    name: "Facebook & Instagram Ads",
    color: "from-blue-600 to-indigo-600",
    description: "Australia's #1 social advertising channel. We create scroll-stopping creative, laser-targeted audiences, and full-funnel campaigns that turn Facebook & Instagram users into paying customers.",
    subServices: [
      "Custom audience & lookalike targeting",
      "Retargeting & dynamic product ads",
      "Lead generation & Messenger campaigns",
      "A/B creative testing & continuous optimisation",
      "Monthly performance reports with ROAS tracking",
    ],
  },
  {
    icon: Linkedin,
    name: "LinkedIn Ads",
    color: "from-sky-600 to-blue-700",
    description: "The definitive B2B advertising platform. We build LinkedIn campaigns that reach decision-makers, generate quality leads, and position your brand as the go-to expert in your industry.",
    subServices: [
      "Sponsored content & InMail campaigns",
      "Account-based marketing (ABM) targeting",
      "Lead gen forms & HubSpot/CRM integration",
      "Thought leadership & brand awareness ads",
      "LinkedIn audience analytics & reporting",
    ],
  },
  {
    icon: Youtube,
    name: "YouTube & Video Ads",
    color: "from-red-500 to-rose-600",
    description: "Video is the fastest-growing ad format in Australia. We script, produce (or repurpose your footage), and place high-impact YouTube campaigns that build brand and drive action.",
    subServices: [
      "Skippable & non-skippable in-stream ads",
      "YouTube bumper & discovery ads",
      "Video script & creative strategy",
      "Audience targeting & placement management",
      "View-through attribution & conversion tracking",
    ],
  },
  {
    icon: Instagram,
    name: "TikTok Ads",
    color: "from-fuchsia-500 to-pink-600",
    description: "TikTok is Australia's fastest-growing platform. We create native-feeling, high-engagement video ads that reach 18–45 year old Australians at massive scale with low cost-per-click.",
    subServices: [
      "In-feed video & TopView ads",
      "Spark Ads to boost organic content",
      "TikTok Pixel setup & e-commerce integration",
      "UGC-style creative production",
      "Trending sound & hashtag strategy",
    ],
  },
];

const results = [
  { icon: TrendingUp, value: "3.8×", label: "Average ROAS across Australian clients" },
  { icon: Users, value: "2M+", label: "Australians reached monthly" },
  { icon: DollarSign, value: "A$50K+", label: "Ad spend managed monthly" },
  { icon: Eye, value: "40%", label: "Average reduction in cost-per-lead" },
];

const process = [
  { step: "01", title: "Audience Research", desc: "We build detailed buyer personas using Australian market data and your own customer base to find your ideal audience online." },
  { step: "02", title: "Creative Strategy", desc: "Compelling ad copy, imagery, and video tailored to each platform's format — designed to stop the scroll and drive action." },
  { step: "03", title: "Campaign Build & Launch", desc: "Precise pixel setup, conversion tracking, audience segmentation, and campaign configuration on every platform." },
  { step: "04", title: "Optimise & Scale", desc: "Weekly bid adjustments, A/B creative testing, and budget reallocation to maximise ROAS and scale what's working." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const SocialMediaAds = () => (
  <Layout>
    <SEO
      title="Social Media Advertising Agency Australia — Facebook, Instagram, TikTok, LinkedIn Ads"
      description="Expert social media advertising for Australian businesses. Facebook Ads, Instagram Ads, LinkedIn Ads, YouTube & TikTok campaigns managed by specialists. Real ROI, transparent reporting."
      canonical="/services/social-media-ads"
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "Social Media Ads", url: "https://nexttabagency.com/services/social-media-ads" },
      ]}
    />

    {/* Hero */}
    <section aria-labelledby="social-ads-hero-heading" className="relative min-h-[60vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="Social Media Advertising Agency Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/96 via-primary/85 to-transparent" />
      <div className="absolute bottom-1/4 right-[8%] w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="container relative z-10 py-32 md:py-40 pt-40">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Paid Social Media
          </span>
          <h1 id="social-ads-hero-heading" className="font-heading font-bold text-4xl md:text-[3.5rem] leading-[1.08] text-primary-foreground mb-6">
            Social media ads that{" "}
            <span className="text-gradient">convert</span>
            , not just impress
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/60 max-w-2xl mb-10 leading-relaxed">
            Facebook, Instagram, LinkedIn, YouTube, and TikTok — managed by Australian specialists who obsess over your cost-per-lead and return on ad spend.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
              <Link to="/contact">Get a Free Ads Audit <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button variant="hero-secondary" size="xl" className="rounded-full" asChild>
              <Link to="/services">All Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* Results Stats */}
    <section aria-label="Social Advertising Results" className="py-16 surface-warm relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container relative z-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((r, i) => (
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

    {/* Platform Sections */}
    <section aria-labelledby="platforms-heading" className="py-12 md:py-16">
      <div className="container">
        <SectionHeading
          id="platforms-heading"
          eyebrow="Platforms We Manage"
          title="Full-service social advertising across every major platform"
          description="One agency, all platforms — seamlessly integrated so your brand message is consistent and your budget goes further."
        />
        <div className="space-y-8">
          {platforms.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="card-premium rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row gap-8"
            >
              <div className="shrink-0">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-lg`}>
                  <p.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="font-heading font-bold text-xl text-foreground mb-3">{p.name}</h2>
                <p className="text-muted-foreground leading-relaxed mb-5">{p.description}</p>
                <ul className="grid sm:grid-cols-2 gap-2">
                  {p.subServices.map((s) => (
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
    <section aria-labelledby="social-process-heading" className="surface-teal py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 pattern-lines opacity-20" />
      <div className="container relative z-10">
        <SectionHeading
          id="social-process-heading"
          eyebrow="Our Approach"
          title="How we run your social campaigns"
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

    {/* Internal Linking — Related Services */}
    <section aria-labelledby="related-services-heading" className="py-20">
      <div className="container">
        <h2 id="related-services-heading" className="font-heading font-bold text-2xl text-foreground mb-8 text-center">Combine social ads with our other services</h2>
        <div className="grid sm:grid-cols-3 gap-5 max-w-3xl mx-auto">
          {[
            { label: "PPC & Google Ads", href: "/services/ppc-google-ads", desc: "Capture high-intent search traffic alongside social." },
            { label: "Local SEO", href: "/services/local-seo", desc: "Dominate local search while running paid campaigns." },
            { label: "Web Development", href: "/services/web-development", desc: "Ensure your landing pages convert ad traffic." },
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
    <section aria-labelledby="social-cta-heading" className="py-16 pb-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="surface-teal rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 pattern-lines opacity-20" />
          <div className="relative z-10">
            <h2 id="social-cta-heading" className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
              Ready to grow with social ads?
            </h2>
            <p className="text-primary-foreground/50 max-w-md mx-auto mb-8">
              Get a free audit of your current social ad performance — or start from scratch. We'll show you exactly where your budget is going and how to get more from it.
            </p>
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
              <Link to="/contact">Book a Free Strategy Call</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />
  </Layout>
);

export default SocialMediaAds;

