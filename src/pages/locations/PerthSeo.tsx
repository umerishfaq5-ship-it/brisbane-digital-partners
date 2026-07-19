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
  { icon: Search, title: "SEO Audits & Strategy", href: "/services/seo-audits", desc: "Technical SEO audits & ranking roadmaps tailored to the Perth WA market." },
  { icon: MapPin, title: "Local SEO Perth", href: "/services/local-seo", desc: "Google Business Profile optimisation & Map Pack rankings for Perth businesses." },
  { icon: Globe, title: "Google Business Profile", href: "/services/google-business-profile", desc: "Complete GBP setup, review management & weekly posting for Perth listings." },
  { icon: BarChart3, title: "PPC & Google Ads", href: "/services/ppc-google-ads", desc: "Google Ads campaigns for Perth businesses — managed for maximum ROAS." },
  { icon: Users, title: "Social Media Ads", href: "/services/social-media-ads", desc: "Facebook, Instagram & LinkedIn advertising targeting Perth & WA audiences." },
  { icon: Globe, title: "Web Development", href: "/services/web-development", desc: "Fast, conversion-focused websites for Perth businesses." },
];

const suburbs = ["Perth CBD", "Fremantle", "Scarborough", "Joondalup", "Rockingham", "Armadale", "Midland", "Mandurah", "Claremont", "Subiaco", "Victoria Park", "Cannington", "Osborne Park", "Balcatta", "Cockburn Central", "Stirling", "Wanneroo", "Kalamunda"];

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } };

const PerthSeo = () => (
  <Layout>
    <SEO
      title="SEO Agency Perth WA — Local SEO, Google Ads & Web Development"
      description="Expert SEO & digital marketing for Perth businesses. Local SEO, Google Ads, social media advertising & web development. Free consultation for Western Australian businesses."
      canonical="/locations/perth-seo"
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Locations", url: "https://nexttabagency.com/locations/perth-seo" },
        { name: "Perth SEO", url: "https://nexttabagency.com/locations/perth-seo" },
      ]}
    />
    <section aria-labelledby="perth-hero-heading" className="relative min-h-[60vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="SEO Agency Perth WA" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/96 via-primary/85 to-transparent" />
      <div className="absolute bottom-1/4 right-[8%] w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="container relative z-10 py-32 md:py-40 pt-40">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">
            <MapPin className="w-3.5 h-3.5" />Perth, WA
          </span>
          <h1 id="perth-hero-heading" className="font-heading font-bold text-4xl md:text-[3.5rem] leading-[1.08] text-primary-foreground mb-6">
            SEO & digital marketing for{" "}<span className="text-gradient">Perth businesses</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/60 max-w-2xl mb-10 leading-relaxed">
            Western Australia's booming economy means fierce online competition. We help Perth businesses rank higher on Google, attract local customers, and grow sustainably.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
              <Link to="/contact">Get a Free Perth SEO Audit <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button variant="hero-secondary" size="xl" className="rounded-full" asChild>
              <Link to="/services">All Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* Unique Perth Content */}
    <section aria-labelledby="perth-why-heading" className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <h2 id="perth-why-heading" className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">Perth's digital market is growing fast — is your business keeping up?</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Perth's economy is booming, driven by mining services, construction, healthcare and a rapidly expanding professional services sector. Western Australia's geographic isolation creates a unique market dynamic: Perth businesses face less interstate competition in local searches, meaning well-executed local SEO can produce faster, more durable results than in Sydney or Melbourne.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Perth consumers are strongly mobile-first — Western Australia has some of Australia's highest smartphone usage rates. "Near me" searches, Google Maps queries, and voice search all play a larger role in how Perth locals discover businesses. Our Perth-specific strategy focuses on optimising for these local intent signals, particularly in high-value suburbs like Subiaco, Scarborough, Joondalup, and the rapidly developing southern corridor.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We work with Perth clients entirely remotely, with communication structured around AWST business hours. Our Perth engagements cover the full digital spectrum — from Map Pack optimisation for tradies in Osborne Park to national SEO campaigns for WA-based mining services companies operating across Australia.
          </p>
        </div>
      </div>
    </section>

    <section aria-labelledby="perth-services-heading" className="py-12 md:py-16">
      <div className="container">
        <SectionHeading id="perth-services-heading" eyebrow="Services in Perth" title="Digital marketing services for Perth & Western Australia" description="Every service tailored for WA's unique market conditions and local search behaviour." />
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

    <section aria-labelledby="perth-suburbs-heading" className="py-16 surface-warm relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container relative z-10">
        <h2 id="perth-suburbs-heading" className="font-heading font-bold text-2xl text-foreground mb-3 text-center">Serving all Perth suburbs & regional WA</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">From the Swan River foreshore to the outer suburbs — we build hyper-local SEO strategies that target how Perth customers search.</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {suburbs.map((s) => (<span key={s} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-sm text-foreground/70"><MapPin className="w-3 h-3 text-accent" />{s}</span>))}
        </div>
      </div>
    </section>

    <section aria-labelledby="perth-other-locations-heading" className="py-16">
      <div className="container">
        <h2 id="perth-other-locations-heading" className="font-heading font-bold text-xl text-foreground mb-6 text-center">We also serve businesses across Australia</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {[{ city: "Brisbane", href: "/locations/brisbane-seo" }, { city: "Sydney", href: "/locations/sydney-seo" }, { city: "Melbourne", href: "/locations/melbourne-seo" }, { city: "Adelaide", href: "/locations/adelaide-seo" }, { city: "Canberra", href: "/locations/canberra-seo" }].map((l) => (
            <Link key={l.href} to={l.href} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 text-sm text-foreground/70 hover:text-accent hover:border-accent/40 transition-all"><MapPin className="w-3.5 h-3.5" />{l.city}</Link>
          ))}
        </div>
      </div>
    </section>

    {/* Localised Trust Accordion */}
    <section aria-label="Perth SEO FAQs" className="py-16 bg-muted/10 border-t border-border/40">
      <div className="container">
        <EntityTrustAccordion city="Perth" />
      </div>
    </section>
    {/* Internal linking — all Australian location pages */}
    <LocationLinksStrip currentCity="Perth" />

    <section aria-labelledby="perth-cta-heading" className="py-20 pb-28">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="surface-teal rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 pattern-lines opacity-20" />
          <div className="relative z-10">
            <h2 id="perth-cta-heading" className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">Ready to grow your Perth business online?</h2>
            <p className="text-primary-foreground/50 max-w-md mx-auto mb-8">Free SEO strategy session for Perth businesses. No lock-in contracts, no jargon — just honest digital advice.</p>
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild><Link to="/contact">Book Your Free Perth SEO Consultation</Link></Button>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default PerthSeo;

