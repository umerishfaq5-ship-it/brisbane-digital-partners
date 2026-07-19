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
  { icon: Search, title: "SEO Audits & Strategy", href: "/services/seo-audits", desc: "Technical SEO audits & ranking roadmaps for the Adelaide SA market." },
  { icon: MapPin, title: "Local SEO Adelaide", href: "/services/local-seo", desc: "Google Business Profile optimisation & Map Pack rankings for Adelaide businesses." },
  { icon: Globe, title: "Google Business Profile", href: "/services/google-business-profile", desc: "Complete GBP setup, review management & posting for Adelaide listings." },
  { icon: BarChart3, title: "PPC & Google Ads", href: "/services/ppc-google-ads", desc: "Google Ads campaigns for Adelaide businesses — profitable, transparent management." },
  { icon: Users, title: "Social Media Ads", href: "/services/social-media-ads", desc: "Facebook, Instagram & LinkedIn advertising targeting Adelaide & SA audiences." },
  { icon: Globe, title: "Web Development", href: "/services/web-development", desc: "Fast, conversion-focused websites for Adelaide businesses." },
];

const suburbs = ["Adelaide CBD", "Glenelg", "Norwood", "Port Adelaide", "Prospect", "Unley", "Burnside", "Campbelltown", "Tea Tree Gully", "Mount Barker", "Salisbury", "Elizabeth", "Morphett Vale", "Onkaparinga", "Mitcham", "Holdfast Bay", "Charles Sturt", "West Torrens"];

const fadeUp = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } } };

const AdelaideSeo = () => (
  <Layout>
    <SEO
      title="SEO Agency Adelaide SA — Local SEO, Google Ads & Web Development"
      description="Expert SEO & digital marketing for Adelaide businesses. Local SEO, Google Ads, social media advertising & web development. Free consultation for South Australian businesses."
      canonical="/locations/adelaide-seo"
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Locations", url: "https://nexttabagency.com/locations/adelaide-seo" },
        { name: "Adelaide SEO", url: "https://nexttabagency.com/locations/adelaide-seo" },
      ]}
    />
    <section aria-labelledby="adelaide-hero-heading" className="relative min-h-[60vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="SEO Agency Adelaide SA" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/96 via-primary/85 to-transparent" />
      <div className="absolute bottom-1/4 right-[8%] w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="container relative z-10 py-32 md:py-40 pt-40">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">
            <MapPin className="w-3.5 h-3.5" />Adelaide, SA
          </span>
          <h1 id="adelaide-hero-heading" className="font-heading font-bold text-4xl md:text-[3.5rem] leading-[1.08] text-primary-foreground mb-6">
            SEO & digital marketing for{" "}<span className="text-gradient">Adelaide businesses</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/60 max-w-2xl mb-10 leading-relaxed">
            Adelaide is one of Australia's fastest-growing technology and innovation hubs. We help SA businesses rank higher, attract local customers, and build a strong online presence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
              <Link to="/contact">Get a Free Adelaide SEO Audit <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button variant="hero-secondary" size="xl" className="rounded-full" asChild><Link to="/services">All Services</Link></Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* Unique Adelaide Content */}
    <section aria-labelledby="adelaide-why-heading" className="py-20 md:py-28">
      <div className="container max-w-4xl">
        <h2 id="adelaide-why-heading" className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">Adelaide's growing digital economy rewards early movers</h2>
        <div className="prose prose-lg max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-4">
            Adelaide is one of Australia's fastest-digitising cities. South Australia's government investment in tech, defence, and food & wine sectors is creating new clusters of high-value businesses with sophisticated digital marketing needs — but the SEO competition hasn't fully caught up yet. For Adelaide businesses, this means the window to achieve first-page rankings with well-executed content and technical SEO is genuinely more accessible than in Sydney or Melbourne.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            The Adelaide market has distinct search patterns built around its festival economy (Adelaide Fringe, Tour Down Under, WOMADelaide), its wine industry (Barossa Valley, McLaren Vale), and its growing manufacturing and defence sector around Osborne. Our Adelaide keyword strategy captures both the city's consumer market and its increasingly prominent B2B services sector.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From the flagship CBD strips on Rundle Street and Hutt Street to North Adelaide's professional services cluster and the outer suburbs of Glenelg, St Peters and Salisbury — we build hyper-local campaigns that respect the nuances of each Adelaide precinct's customer demographics and search behaviour.
          </p>
        </div>
      </div>
    </section>

    <section aria-labelledby="adelaide-services-heading" className="py-12 md:py-16">
      <div className="container">
        <SectionHeading id="adelaide-services-heading" eyebrow="Services in Adelaide" title="Digital marketing services for Adelaide & South Australia" description="Strategies tailored for SA's growing digital economy and local search landscape." />
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

    <section aria-labelledby="adelaide-suburbs-heading" className="py-16 surface-warm relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container relative z-10">
        <h2 id="adelaide-suburbs-heading" className="font-heading font-bold text-2xl text-foreground mb-3 text-center">Serving all Adelaide suburbs & Greater SA</h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">From the beachside suburbs to the Adelaide Hills — we understand the local search landscape across all of South Australia.</p>
        <div className="flex flex-wrap gap-2 justify-center">
          {suburbs.map((s) => (<span key={s} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-sm text-foreground/70"><MapPin className="w-3 h-3 text-accent" />{s}</span>))}
        </div>
      </div>
    </section>

    <section aria-labelledby="adelaide-other-locations-heading" className="py-16">
      <div className="container">
        <h2 id="adelaide-other-locations-heading" className="font-heading font-bold text-xl text-foreground mb-6 text-center">We also serve businesses across Australia</h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {[{ city: "Brisbane", href: "/locations/brisbane-seo" }, { city: "Sydney", href: "/locations/sydney-seo" }, { city: "Melbourne", href: "/locations/melbourne-seo" }, { city: "Perth", href: "/locations/perth-seo" }, { city: "Canberra", href: "/locations/canberra-seo" }].map((l) => (
            <Link key={l.href} to={l.href} className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border/60 text-sm text-foreground/70 hover:text-accent hover:border-accent/40 transition-all"><MapPin className="w-3.5 h-3.5" />{l.city}</Link>
          ))}
        </div>
      </div>
    </section>

    {/* Localised Trust Accordion */}
    <section aria-label="Adelaide SEO FAQs" className="py-16 bg-muted/10 border-t border-border/40">
      <div className="container">
        <EntityTrustAccordion city="Adelaide" />
      </div>
    </section>
    {/* Internal linking — all Australian location pages */}
    <LocationLinksStrip currentCity="Adelaide" />

    <section aria-labelledby="adelaide-cta-heading" className="py-20 pb-28">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="surface-teal rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 pattern-lines opacity-20" />
          <div className="relative z-10">
            <h2 id="adelaide-cta-heading" className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">Ready to grow your Adelaide business online?</h2>
            <p className="text-primary-foreground/50 max-w-md mx-auto mb-8">Free SEO strategy session for Adelaide businesses — we'll show you what's holding you back from ranking and how to fix it fast.</p>
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild><Link to="/contact">Book Your Free Adelaide Consultation</Link></Button>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default AdelaideSeo;

