import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Search, Globe, Smartphone, BarChart3, ArrowRight, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import LocationLinksStrip from "@/components/LocationLinksStrip";
import EntityTrustAccordion from "@/components/EntityTrustAccordion";

const services = [
  { icon: Search, title: "SEO Audits & Strategy", href: "/services/seo-audits", desc: "Technical SEO audits & ranking roadmaps tailored to the Melbourne VIC market." },
  { icon: MapPin, title: "Local SEO Melbourne", href: "/services/local-seo", desc: "Google Business Profile optimisation & Map Pack rankings for Melbourne businesses." },
  { icon: Globe, title: "Google Business Profile", href: "/services/google-business-profile", desc: "Complete GBP setup, review management & weekly posting for Melbourne listings." },
  { icon: BarChart3, title: "PPC & Google Ads", href: "/services/ppc-google-ads", desc: "Google Search, Shopping & Display campaigns for Melbourne — managed for maximum ROI." },
  { icon: Users, title: "Social Media Ads", href: "/services/social-media-ads", desc: "Facebook, Instagram, LinkedIn & TikTok advertising targeting Melbourne audiences." },
  { icon: Globe, title: "Web Development", href: "/services/web-development", desc: "Fast, SEO-ready websites for Melbourne businesses built to convert." },
];

const suburbs = ["Melbourne CBD", "Southbank", "St Kilda", "Richmond", "Fitzroy", "Collingwood", "Carlton", "Brunswick", "Footscray", "Docklands", "South Yarra", "Prahran", "Glen Waverley", "Box Hill", "Dandenong", "Frankston", "Essendon", "Moonee Ponds"];

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } };

const MelbourneSeo = () => (
  <Layout>
    <SEO
      title="SEO Agency Melbourne VIC — Local SEO, Google Ads & Web Development"
      description="Expert SEO & digital marketing for Melbourne businesses. Local SEO, Google Ads, social media advertising & web development. Free consultation for Victorian businesses."
      canonical="/locations/melbourne-seo"
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Locations", url: "https://nexttabagency.com/locations/melbourne-seo" },
        { name: "Melbourne SEO", url: "https://nexttabagency.com/locations/melbourne-seo" },
      ]}
    />
    <section aria-labelledby="melbourne-hero-heading" className="relative min-h-[60vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="SEO Agency Melbourne VIC" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/96 via-primary/85 to-transparent" />
      <div className="absolute bottom-1/4 right-[8%] w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="container relative z-10 py-32 md:py-40 pt-40">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">
            <MapPin className="w-3.5 h-3.5" />Melbourne, VIC
          </span>
          <h1 id="melbourne-hero-heading" className="font-heading font-bold text-4xl md:text-[3.5rem] leading-[1.08] text-primary-foreground mb-6">
            SEO & digital marketing for{" "}<span className="text-gradient">Melbourne businesses</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/60 max-w-2xl mb-10 leading-relaxed">
            Melbourne is Australia's most competitive business city. We help VIC businesses cut through the noise with proven SEO, targeted ads, and conversion-focused websites.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
              <Link to="/contact">Get a Free Melbourne SEO Audit <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button variant="hero-secondary" size="xl" className="rounded-full" asChild>
              <Link to="/services">All Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* Unique Melbourne Content */}
    <section aria-labelledby="melbourne-why-heading" className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <h2 id="melbourne-why-heading" className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">Why Melbourne businesses need a specialist digital agency</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Melbourne is Australia's most competitive SEO landscape. With a population of 5.2 million and an exceptionally high density of professional services, hospitality, retail and healthcare businesses, standing out in Google search isn't optional — it's the difference between a growing business and a stagnant one.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Victorian businesses face unique search behaviour: Melbourne consumers research heavily before buying, expect mobile-first experiences, and respond well to locally-credible businesses with strong review profiles. Our Melbourne-specific keyword research accounts for inner-city micro-markets — from Fitzroy's hospitality belt to Richmond's professional services corridor and the rapidly growing south-east corridor through Glen Waverley and Dandenong.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We serve Melbourne-based clients remotely from our Brisbane headquarters, with no drop in service quality. Every strategy is built around Melbourne's specific search volumes, seasonal patterns (AFL Grand Final, Melbourne Cup, summer CBD traffic), and the competitive dynamics of Victoria's business districts. Whether you're a St Kilda café, a Collins Street law firm, or a Brunswick creative agency — we build campaigns that position you for local search dominance.
          </p>
        </div>
      </div>
    </section>

    <section aria-labelledby="melbourne-services-heading" className="py-12 md:py-16">
      <div className="container">
        <SectionHeading id="melbourne-services-heading" eyebrow="Services in Melbourne" title="Digital marketing services for Melbourne & Victoria" description="From local SEO to paid campaigns and custom websites — all tailored for the Melbourne market." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}>
              <Link to={s.href} className="group card-premium rounded-2xl p-7 block h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-500"><s.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" /></div>
                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-accent text-xs font-semibold">Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section aria-labelledby="melbourne-suburbs-heading" className="py-16 surface-warm relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container relative z-10">
        <h2 id="melbourne-suburbs-heading" className="font-heading font-bold text-2xl text-foreground mb-3 text-center">Serving all Melbourne suburbs & Greater Victoria</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">Inner city to the outer suburbs — we understand Melbourne's diverse neighbourhoods and build hyper-local strategies that work.</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {suburbs.map((s) => (<span key={s} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-sm text-foreground/70"><MapPin className="w-3 h-3 text-accent" />{s}</span>))}
        </div>
      </div>
    </section>

    <section aria-labelledby="melbourne-other-locations-heading" className="py-16">
      <div className="container">
        <h2 id="melbourne-other-locations-heading" className="font-heading font-bold text-xl text-foreground mb-6 text-center">We also serve businesses across Australia</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {[{ city: "Brisbane", href: "/locations/brisbane-seo" }, { city: "Sydney", href: "/locations/sydney-seo" }, { city: "Perth", href: "/locations/perth-seo" }, { city: "Adelaide", href: "/locations/adelaide-seo" }, { city: "Canberra", href: "/locations/canberra-seo" }].map((l) => (
            <Link key={l.href} to={l.href} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 text-sm text-foreground/70 hover:text-accent hover:border-accent/40 transition-all"><MapPin className="w-3.5 h-3.5" />{l.city}</Link>
          ))}
        </div>
      </div>
    </section>

    {/* Localised Trust Accordion */}
    <section aria-label="Melbourne SEO FAQs" className="py-16 bg-muted/10 border-t border-border/40">
      <div className="container">
        <EntityTrustAccordion city="Melbourne" />
      </div>
    </section>
    {/* Internal linking — all Australian location pages */}
    <LocationLinksStrip currentCity="Melbourne" />

    <section aria-labelledby="melbourne-cta-heading" className="py-20 pb-28">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="surface-teal rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 pattern-lines opacity-20" />
          <div className="relative z-10">
            <h2 id="melbourne-cta-heading" className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">Ready to grow your Melbourne business online?</h2>
            <p className="text-primary-foreground/50 max-w-md mx-auto mb-8">Free strategy session for Melbourne businesses. We'll analyse your online presence and show you how to beat your competitors in local search.</p>
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild><Link to="/contact">Book Your Free Melbourne SEO Consultation</Link></Button>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default MelbourneSeo;

