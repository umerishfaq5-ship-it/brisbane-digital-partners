import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Search, Globe, Smartphone, BarChart3, TrendingUp, Star, ArrowRight, Users, Zap, DollarSign } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import LocationLinksStrip from "@/components/LocationLinksStrip";
import EntityTrustAccordion from "@/components/EntityTrustAccordion";

const services = [
  { icon: Search, title: "SEO Audits & Strategy", href: "/services/seo-audits", desc: "Technical SEO audits, keyword research & actionable ranking roadmaps tailored to the Sydney NSW market." },
  { icon: MapPin, title: "Local SEO Sydney", href: "/services/local-seo", desc: "Google Business Profile optimisation, citation building & Map Pack rankings for Sydney businesses." },
  { icon: Globe, title: "Google Business Profile", href: "/services/google-business-profile", desc: "Complete GBP setup, photo strategy, review management & weekly posting for Sydney listings." },
  { icon: BarChart3, title: "PPC & Google Ads", href: "/services/ppc-google-ads", desc: "Google Search, Shopping & Display campaigns for Sydney — managed for maximum ROI." },
  { icon: Users, title: "Social Media Ads", href: "/services/social-media-ads", desc: "Facebook, Instagram, LinkedIn & TikTok advertising targeting Sydney audiences." },
  { icon: Globe, title: "Web Development", href: "/services/web-development", desc: "Fast, SEO-ready websites for Sydney businesses — built to convert visitors into customers." },
];

const suburbs = ["Sydney CBD", "North Sydney", "Parramatta", "Chatswood", "Bondi", "Surry Hills", "Newtown", "Pyrmont", "Manly", "Cronulla", "Liverpool", "Bankstown", "Blacktown", "Penrith", "Castle Hill", "Hornsby", "Mascot", "Ultimo"];

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } };

const SydneySeo = () => (
  <Layout>
    <SEO
      title="SEO Agency Sydney NSW — Local SEO, Google Ads & Web Development"
      description="Expert SEO & digital marketing for Sydney businesses. Local SEO, Google Ads, social media advertising & high-performance web development. Get a free consultation today."
      canonical="/locations/sydney-seo"
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Locations", url: "https://nexttabagency.com/locations/sydney-seo" },
        { name: "Sydney SEO", url: "https://nexttabagency.com/locations/sydney-seo" },
      ]}
    />
    <section aria-labelledby="sydney-hero-heading" className="relative min-h-[60vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="SEO Agency Sydney NSW" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/96 via-primary/85 to-transparent" />
      <div className="absolute bottom-1/4 right-[8%] w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="container relative z-10 py-32 md:py-40 pt-40">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">
            <MapPin className="w-3.5 h-3.5" />Sydney, NSW
          </span>
          <h1 id="sydney-hero-heading" className="font-heading font-bold text-4xl md:text-[3.5rem] leading-[1.08] text-primary-foreground mb-6">
            SEO & digital marketing for{" "}<span className="text-gradient">Sydney businesses</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/60 max-w-2xl mb-10 leading-relaxed">
            Sydney's most competitive market demands best-in-class SEO, paid ads, and web strategy. We deliver measurable results for NSW businesses of every size.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
              <Link to="/contact">Get a Free Sydney SEO Audit <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button variant="hero-secondary" size="xl" className="rounded-full" asChild>
              <Link to="/services">All Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* Unique Sydney Content */}
    <section aria-labelledby="sydney-why-heading" className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <h2 id="sydney-why-heading" className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">Why Sydney businesses can't afford to ignore SEO</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Sydney is Australia's largest city and its most expensive media market. Cost-per-click in competitive Sydney categories like legal, real estate, and finance can exceed A$80 per click on Google Ads. Organic SEO is the only scalable strategy that allows Sydney businesses to generate consistent leads without burning through a paid budget every month.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Sydney consumers are device-first, review-dependent, and search with high commercial intent — especially in the CBD, North Sydney, and the Inner West. A business that ranks in the top 3 positions for its target keyword in Sydney captures 54% of available clicks. Our Sydney-specific keyword strategy focuses on suburb-level queries ("accountant Surry Hills", "plumber Parramatta") and intent-rich terms that indicate purchase-ready behaviour.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We work with Sydney businesses entirely remotely — seamlessly integrated into your internal team's rhythm with regular reporting calls and transparent dashboards. With Sydney's unique competitive pressures across its diverse business districts — from the financial services of the CBD to the creative industries of Surry Hills and the trades of Penrith — we build hyper-targeted strategies that outperform generic agency approaches.
          </p>
        </div>
      </div>
    </section>

    <section aria-labelledby="sydney-services-heading" className="py-12 md:py-16">
      <div className="container">
        <SectionHeading id="sydney-services-heading" eyebrow="Services in Sydney" title="Full-service digital marketing for Sydney businesses" description="Every service tailored for NSW's unique market, search behaviour, and competitive landscape." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}>
              <Link to={s.href} className="group card-premium rounded-2xl p-7 block h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-500">
                  <s.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-accent text-xs font-semibold">Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section aria-labelledby="sydney-suburbs-heading" className="py-16 surface-warm relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container relative z-10">
        <h2 id="sydney-suburbs-heading" className="font-heading font-bold text-2xl text-foreground mb-3 text-center">Serving all Sydney suburbs & Greater NSW</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">From the CBD to the outer west, north shore, and eastern beaches — we build strategies that work for your specific Sydney location.</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {suburbs.map((s) => (<span key={s} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-sm text-foreground/70"><MapPin className="w-3 h-3 text-accent" />{s}</span>))}
        </div>
      </div>
    </section>

        {/* Localised Trust Accordion */}
    <section aria-label="Sydney SEO FAQs" className="py-16 bg-muted/10 border-t border-border/40">
      <div className="container">
        <EntityTrustAccordion city="Sydney" />
      </div>
    </section>
    {/* Internal linking — all Australian location pages */}
    <LocationLinksStrip currentCity="Sydney" />

    <section aria-labelledby="sydney-cta-heading" className="py-20 pb-28">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="surface-teal rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 pattern-lines opacity-20" />
          <div className="relative z-10">
            <h2 id="sydney-cta-heading" className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">Ready to outrank your Sydney competitors?</h2>
            <p className="text-primary-foreground/50 max-w-md mx-auto mb-8">Get a free SEO & digital strategy session for your Sydney business. No obligations, just honest advice.</p>
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild><Link to="/contact">Book Your Free Sydney Consultation</Link></Button>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default SydneySeo;

