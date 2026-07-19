import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MapPin, Search, Globe, BarChart3, ArrowRight, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import LocationLinksStrip from "@/components/LocationLinksStrip";
import EntityTrustAccordion from "@/components/EntityTrustAccordion";

const services = [
  { icon: Search, title: "SEO Audits & Strategy", href: "/services/seo-audits", desc: "Technical SEO & ranking roadmaps for the Canberra ACT government and private sector market." },
  { icon: MapPin, title: "Local SEO Canberra", href: "/services/local-seo", desc: "Google Business Profile optimisation & Map Pack rankings for Canberra businesses." },
  { icon: Globe, title: "Google Business Profile", href: "/services/google-business-profile", desc: "Full GBP setup, review management & posting for ACT businesses." },
  { icon: BarChart3, title: "PPC & Google Ads", href: "/services/ppc-google-ads", desc: "Google Ads campaigns for Canberra businesses and government-adjacent sectors." },
  { icon: Users, title: "Social Media Ads", href: "/services/social-media-ads", desc: "Facebook, LinkedIn & social media advertising targeting Canberra & ACT audiences." },
  { icon: Globe, title: "Web Development", href: "/services/web-development", desc: "Fast, accessible & secure websites for Canberra businesses and government suppliers." },
];

const suburbs = ["Canberra CBD", "Civic", "Braddon", "Kingston", "Manuka", "Forrest", "Dickson", "Belconnen", "Gungahlin", "Tuggeranong", "Woden", "Weston Creek", "Queanbeyan", "Fyshwick", "Barton", "Griffith", "O'Connor", "Yarralumla"];

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } };

const CanberraSeo = () => (
  <Layout>
    <SEO
      title="SEO Agency Canberra ACT — Local SEO, Google Ads & Web Development"
      description="Expert SEO & digital marketing for Canberra businesses. Local SEO, Google Ads, social media advertising & web development tailored for the ACT market. Free consultation available."
      canonical="/locations/canberra-seo"
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Locations", url: "https://nexttabagency.com/locations/canberra-seo" },
        { name: "Canberra SEO", url: "https://nexttabagency.com/locations/canberra-seo" },
      ]}
    />
    <section aria-labelledby="canberra-hero-heading" className="relative min-h-[60vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="SEO Agency Canberra ACT" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/96 via-primary/85 to-transparent" />
      <div className="absolute bottom-1/4 right-[8%] w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="container relative z-10 py-32 md:py-40 pt-40">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">
            <MapPin className="w-3.5 h-3.5" />Canberra, ACT
          </span>
          <h1 id="canberra-hero-heading" className="font-heading font-bold text-4xl md:text-[3.5rem] leading-[1.08] text-primary-foreground mb-6">
            SEO & digital marketing for{" "}<span className="text-gradient">Canberra businesses</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/60 max-w-2xl mb-10 leading-relaxed">
            Canberra's unique mix of government, education, and private sector creates distinct digital marketing opportunities. We help ACT businesses rank higher and attract the right customers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
              <Link to="/contact">Get a Free Canberra SEO Audit <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button variant="hero-secondary" size="xl" className="rounded-full" asChild><Link to="/services">All Services</Link></Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* Unique Canberra Content */}
    <section aria-labelledby="canberra-why-heading" className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <h2 id="canberra-why-heading" className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">Why Canberra businesses are increasingly investing in organic search</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Canberra is Australia's most educated city — with the highest proportion of university-educated residents of any capital. ACT consumers research extensively before making purchasing decisions, which means businesses ranking on page 1 for high-intent keywords earn disproportionately high trust and conversion rates. A well-ranked Canberra business can enjoy lower cost-per-acquisition than almost anywhere else in Australia because the searchers are more qualified.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The ACT's unique market includes a large government and defence procurement sector, which requires specific digital positioning. Businesses supplying services to the APS (Australian Public Service) or to ADF personnel benefit heavily from content and authority strategies that position them as credible, compliant, and locally present. Our Canberra strategies account for this alongside the growing private sector in areas like Braddon, Kingston, and the Gungahlin corridor.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We've built a solid understanding of the Canberra market's seasonal patterns (parlamentary sitting periods, university intake cycles, public sector budget cycles) and how they affect search behaviour. From Civic-based professional services to outer-suburb trades businesses in Tuggeranong and Weston Creek — we build data-driven strategies that deliver Canberra-specific results.
          </p>
        </div>
      </div>
    </section>

    <section aria-labelledby="canberra-services-heading" className="py-12 md:py-16">
      <div className="container">
        <SectionHeading id="canberra-services-heading" eyebrow="Services in Canberra" title="Digital marketing for Canberra & the ACT region" description="Government-supplier or private business — we understand Canberra's market and build strategies that win." />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.07 }}>
              <Link to={s.href} className="group card-premium rounded-2xl p-7 block h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/10 group-hover:border-accent/20 transition-all"><s.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" /></div>
                <h3 className="font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-accent text-xs font-semibold">Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /></span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section aria-labelledby="canberra-suburbs-heading" className="py-16 surface-warm relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container relative z-10">
        <h2 id="canberra-suburbs-heading" className="font-heading font-bold text-2xl text-foreground mb-3 text-center">Serving all Canberra districts & the ACT region</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">From the parliamentary triangle to the outer suburbs — we build SEO and ad strategies that speak to Canberra's highly educated and tech-savvy population.</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {suburbs.map((s) => (<span key={s} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-sm text-foreground/70"><MapPin className="w-3 h-3 text-accent" />{s}</span>))}
        </div>
      </div>
    </section>

    <section aria-labelledby="canberra-other-locations-heading" className="py-16">
      <div className="container">
        <h2 id="canberra-other-locations-heading" className="font-heading font-bold text-xl text-foreground mb-6 text-center">We also serve businesses across Australia</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {[{ city: "Brisbane", href: "/locations/brisbane-seo" }, { city: "Sydney", href: "/locations/sydney-seo" }, { city: "Melbourne", href: "/locations/melbourne-seo" }, { city: "Perth", href: "/locations/perth-seo" }, { city: "Adelaide", href: "/locations/adelaide-seo" }].map((l) => (
            <Link key={l.href} to={l.href} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 text-sm text-foreground/70 hover:text-accent hover:border-accent/40 transition-all"><MapPin className="w-3.5 h-3.5" />{l.city}</Link>
          ))}
        </div>
      </div>
    </section>

    {/* Localised Trust Accordion */}
    <section aria-label="Canberra SEO FAQs" className="py-16 bg-muted/10 border-t border-border/40">
      <div className="container">
        <EntityTrustAccordion city="Canberra" />
      </div>
    </section>
    {/* Internal linking — all Australian location pages */}
    <LocationLinksStrip currentCity="Canberra" />

    <section aria-labelledby="canberra-cta-heading" className="py-20 pb-28">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="surface-teal rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 pattern-lines opacity-20" />
          <div className="relative z-10">
            <h2 id="canberra-cta-heading" className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">Ready to grow your Canberra business online?</h2>
            <p className="text-primary-foreground/50 max-w-md mx-auto mb-8">Free SEO consultation for Canberra businesses — no lock-in contracts, just honest advice on how to rank higher and attract more customers.</p>
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild><Link to="/contact">Book Your Free Canberra Consultation</Link></Button>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default CanberraSeo;

