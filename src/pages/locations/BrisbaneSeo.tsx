import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";
import { MapPin, Search, Globe, Smartphone, BarChart3, TrendingUp, Star, ArrowRight, CheckCircle, Users, Zap, DollarSign, Map } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import LocationLinksStrip from "@/components/LocationLinksStrip";
import EntityTrustAccordion from "@/components/EntityTrustAccordion";

const services = [
  { icon: Search, title: "SEO Audits & Strategy", href: "/services/seo-audits", desc: "Technical SEO audits, keyword research & actionable ranking roadmaps tailored to the Brisbane market." },
  { icon: MapPin, title: "Local SEO", href: "/services/local-seo", desc: "Google Business Profile optimisation, citation building & Map Pack rankings for Brisbane businesses." },
  { icon: Globe, title: "Google Business Profile", href: "/services/google-business-profile", desc: "Complete GBP setup, photo strategy, review management & weekly posting for Brisbane listings." },
  { icon: BarChart3, title: "PPC & Google Ads", href: "/services/ppc-google-ads", desc: "Google Search, Shopping & Display campaigns for Brisbane businesses — managed for maximum ROI." },
  { icon: Users, title: "Social Media Ads", href: "/services/social-media-ads", desc: "Facebook, Instagram, LinkedIn & TikTok advertising campaigns targeting Brisbane audiences." },
  { icon: Globe, title: "Web Development", href: "/services/web-development", desc: "Fast, SEO-ready websites and e-commerce stores for Brisbane businesses." },
  { icon: Smartphone, title: "Mobile App Development", href: "/services/mobile-apps", desc: "React Native iOS & Android apps — built and launched right here in Brisbane." },
];

const whyUs = [
  { icon: TrendingUp, title: "Local Brisbane Expertise", desc: "We understand Brisbane's business landscape, suburbs, and the way locals search online — from Fortitude Valley to the Gold Coast." },
  { icon: Zap, title: "Proven Results", desc: "300%+ traffic increases, Map Pack #1 placements, and award-winning mobile apps — all delivered for Queensland businesses." },
  { icon: DollarSign, title: "Transparent Pricing", desc: "No lock-in contracts. Month-to-month retainers with clear deliverables and plain-English reporting every month." },
  { icon: Star, title: "5-Star Rated", desc: "4.9/5 average across 30+ Australian clients. Our results speak for themselves." },
];

const suburbs = [
  "Brisbane CBD", "Fortitude Valley", "South Brisbane", "West End", "Newstead", "New Farm",
  "Paddington", "Toowong", "Indooroopilly", "Chermside", "Carindale", "Eight Mile Plains",
  "Springwood", "Logan", "Ipswich", "Beenleigh", "Eagleby", "Redlands",
  "Wynnum", "Manly", "Mt Gravatt", "Sunnybank", "Rocklea", "Moorooka",
  "Brendale", "Stafford", "Carseldine", "Aspley", "Gold Coast", "Sunshine Coast",
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const BrisbaneSeo = () => (
  <Layout>
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Next Tab Agency",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Brisbane",
            "addressRegion": "QLD",
            "addressCountry": "AU",
            "postalCode": "4000"
          },
          "areaServed": [
            {"@type": "PostalAddress", "postalCode": "4000", "name": "Brisbane CBD"},
            {"@type": "PostalAddress", "postalCode": "4006", "name": "Fortitude Valley"},
            {"@type": "PostalAddress", "postalCode": "4101", "name": "South Brisbane"},
            {"@type": "PostalAddress", "postalCode": "4101", "name": "West End"},
            {"@type": "PostalAddress", "postalCode": "4006", "name": "Newstead"},
            {"@type": "PostalAddress", "postalCode": "4005", "name": "New Farm"},
            {"@type": "PostalAddress", "postalCode": "4064", "name": "Paddington"},
            {"@type": "PostalAddress", "postalCode": "4207", "name": "Eagleby"}
          ]
        })}
      </script>
    </Helmet>
    <SEO
      title="Result-Oriented SEO Agency Brisbane | No-Link Ranking Experts | Next Tab Agency"
      description="Brisbane's most technical SEO agency. We rank Brisbane businesses without relying on spammy backlinks — using entity authority, content siloing, and technical site architecture. Serving Fortitude Valley, South Brisbane, Eagleby, Beenleigh, and all of QLD."
      canonical="/locations/brisbane-seo"
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Locations", url: "https://nexttabagency.com/locations/brisbane-seo" },
        { name: "Brisbane SEO", url: "https://nexttabagency.com/locations/brisbane-seo" },
      ]}
    />

    {/* Hero */}
    <section aria-labelledby="brisbane-hero-heading" className="relative min-h-[60vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="SEO Agency Brisbane Queensland" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/96 via-primary/85 to-transparent" />
      <div className="absolute bottom-1/4 right-[8%] w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="container relative z-10 py-32 md:py-40 pt-40">
        <motion.div initial="hidden" animate="visible" variants={fadeUp} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">
            <MapPin className="w-3.5 h-3.5" />
            Brisbane, QLD — Home Base
          </span>
          <h1 id="brisbane-hero-heading" className="font-heading font-bold text-4xl md:text-[3.5rem] leading-[1.08] text-primary-foreground mb-6">
            Result-Oriented <span className="text-gradient">SEO Agency Brisbane:</span> No-Link Ranking Experts.
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/60 max-w-2xl mb-10 leading-relaxed">
            We're Brisbane-based and proud of it. We rank local businesses without spammy backlink schemes — using entity authority, content siloing, and technical architecture that out-performs what OMG and Dejan charge 3x more for.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
              <Link to="/contact">Get a Free Brisbane SEO Audit <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
            <Button variant="hero-secondary" size="xl" className="rounded-full" asChild>
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* Services Grid */}
    <section aria-labelledby="brisbane-services-heading" className="py-12 md:py-16">
      <div className="container">
        <SectionHeading
          id="brisbane-services-heading"
          eyebrow="Services in Brisbane"
          title="Everything you need to dominate Brisbane search results"
          description="From technical SEO to paid ads and mobile apps — all designed around how Brisbane customers search, compare, and buy."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Link to={s.href} className="group card-premium rounded-2xl p-7 block h-full">
                <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-5 group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-500">
                  <s.icon className="w-5 h-5 text-primary group-hover:text-accent transition-colors" />
                </div>
                <h2 className="font-heading font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">{s.title}</h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.desc}</p>
                <span className="inline-flex items-center gap-1 text-accent text-xs font-semibold">
                  Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Us */}
    <section aria-labelledby="brisbane-why-heading" className="surface-warm py-24 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container relative z-10">
        <SectionHeading
          id="brisbane-why-heading"
          eyebrow="Why Choose Us"
          title="Why Brisbane businesses choose Next Tab Agency"
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((w, i) => (
            <motion.div
              key={w.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-premium rounded-2xl p-7"
            >
              <w.icon className="w-6 h-6 text-accent mb-4" />
              <h3 className="font-heading font-semibold text-foreground mb-2">{w.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Local Case Study */}
    <section aria-labelledby="local-case-study-heading" className="py-20 bg-muted/20 border-y border-border/40">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-accent/15">
              Brisbane SEO Success Story
            </span>
            <h2 id="local-case-study-heading" className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              My Fitness Coach
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              See how we helped a local Brisbane fitness brand scale their organic traffic and dominate local search rankings through data-driven SEO and high-converting web design.
            </p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                <TrendingUp className="w-5 h-5 text-accent" /> 300% Increase in Organic Traffic
              </li>
              <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                <MapPin className="w-5 h-5 text-accent" /> Dominated Local Map Pack Rankings
              </li>
            </ul>
            <Button variant="outline" size="lg" className="rounded-full bg-card hover:bg-accent/5 hover:text-accent" asChild>
              <Link to="/portfolio/my-fitness-coach">View Full Case Study <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </motion.div>
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="relative rounded-2xl overflow-hidden shadow-2xl border border-border"
          >
            <img src="/assets/myfitnesscoach-mockup.png" alt="My Fitness Coach SEO Case Study Brisbane" className="w-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>

    {/* Suburbs — Local Geofencing */}
    <section aria-labelledby="brisbane-suburbs-heading" className="py-20">
      <div className="container">
        <h2 id="brisbane-suburbs-heading" className="font-heading font-bold text-2xl text-foreground mb-3 text-center">
          We serve all Brisbane suburbs & Greater Queensland
        </h2>
        <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
          Local geofencing is our strategy — we build suburb-specific content and citation signals so Brisbane businesses rank in the exact postcodes their customers search from.
        </p>

        {/* Suburb clusters */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            { zone: "Inner Brisbane", emoji: "🏙️", suburbs: ["Brisbane CBD", "Fortitude Valley", "South Brisbane", "West End", "Newstead", "New Farm", "Paddington"] },
            { zone: "Inner West & South", emoji: "🏡", suburbs: ["Toowong", "Indooroopilly", "Mt Gravatt", "Sunnybank", "Moorooka", "Rocklea", "Eight Mile Plains"] },
            { zone: "North & North-East", emoji: "🌿", suburbs: ["Chermside", "Aspley", "Stafford", "Carseldine", "Brendale", "Wynnum", "Manly", "Carindale"] },
            { zone: "South Corridor", emoji: "📍", suburbs: ["Springwood", "Logan", "Beenleigh", "Eagleby", "Ipswich", "Redlands", "Gold Coast"] },
          ].map((cluster) => (
            <div key={cluster.zone} className="card-premium rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <span>{cluster.emoji}</span>
                <h3 className="font-heading font-semibold text-foreground text-sm">{cluster.zone}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {cluster.suburbs.map((s) => (
                  <span key={s} className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-primary/5 border border-primary/10 text-xs text-foreground/70">
                    <MapPin className="w-2.5 h-2.5 text-accent" />{s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technical SEO Audit CTA */}
        <div className="max-w-2xl mx-auto rounded-2xl border border-accent/30 bg-accent/5 p-6 text-center">
          <p className="text-sm text-muted-foreground leading-relaxed">
            🔍 Not sure why you're not ranking in your suburb?{" "}
            <Link to="/services/seo-audits" className="text-accent font-semibold hover:underline">
              Start with a professional Technical SEO Audit to find your site's bottlenecks
            </Link>
            {" "}— we'll identify every reason Google isn't showing you to customers in your area.
          </p>
        </div>
      </div>
    </section>

        {/* Footer Map Area */}
    <section className="py-20 bg-background border-t border-border/40">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Visit Our Brisbane Office</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We are a proudly Brisbane-based agency. While we work with clients Australia-wide, our core team operates right here in Queensland.
            </p>
            <div className="flex items-start gap-4 mb-4">
              <Map className="w-6 h-6 text-accent shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground">Headquarters</h4>
                <p className="text-muted-foreground text-sm mt-1">
                  Eagleby<br />
                  Brisbane, QLD 4207<br />
                  Australia
                </p>
              </div>
            </div>
            <Button variant="outline" className="mt-4 rounded-full" asChild>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
          <div className="h-[400px] rounded-2xl overflow-hidden shadow-xl border border-border">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113524.37910543202!2d153.1118676!3d-27.7022067!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b914101e4ec9fc7%3A0x502a35af3dead20!2sEagleby%20QLD%204207%2C%20Australia!5e0!3m2!1sen!2sus!4v1718000000000!5m2!1sen!2sus" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Next Tab Agency Brisbane Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

    {/* Localised Trust Accordion */}
    <section aria-label="Brisbane SEO FAQs" className="py-20 bg-muted/10 border-t border-border/40">
      <div className="container">
        <EntityTrustAccordion city="Brisbane" />
      </div>
    </section>

    {/* CTA */}
    {/* Internal linking — all Australian location pages */}
    <LocationLinksStrip currentCity="Brisbane" />
    <section aria-labelledby="brisbane-cta-heading" className="py-20 pb-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="surface-teal rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 pattern-lines opacity-20" />
          <div className="relative z-10">
            <h2 id="brisbane-cta-heading" className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
              Ready to grow your Brisbane business online?
            </h2>
            <p className="text-primary-foreground/50 max-w-md mx-auto mb-8">
              Get a free, no-obligation strategy session. We'll analyse your current online presence and show you exactly how to rank higher and get more local customers.
            </p>
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
              <Link to="/contact">Book Your Free Brisbane SEO Consultation</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default BrisbaneSeo;

