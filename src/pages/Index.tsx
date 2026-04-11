import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, Smartphone, Globe, MapPin, ArrowRight, Star, Users, Briefcase, Clock, CheckCircle, TrendingUp, Zap, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Briefcase, value: "50+", label: "Projects Delivered" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Clock, value: "5+", label: "Years Experience" },
  { icon: Star, value: "4.9", label: "Average Rating" },
];

const services = [
  {
    icon: Search,
    title: "SEO Audits & Strategy",
    description: "Technical audits, keyword research, and data-driven strategies that boost your Google rankings and organic traffic.",
    href: "/services/seo-audits",
    color: "from-teal to-ocean",
  },
  {
    icon: MapPin,
    title: "Local SEO",
    description: "Dominate your local market with Google Business Profile optimisation and geo-targeted strategies for Australian businesses.",
    href: "/services/local-seo",
    color: "from-eucalyptus to-teal",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform React Native apps with native performance on iOS and Android — one codebase, zero compromise.",
    href: "/services/mobile-apps",
    color: "from-ocean to-teal-light",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Lightning-fast, responsive websites built with modern tech stacks, SEO-ready from day one.",
    href: "/services/web-development",
    color: "from-teal-light to-eucalyptus",
  },
];

const portfolioItems = [
  { title: "MyFitnessCoach", category: "Mobile App", description: "A comprehensive fitness coaching app built with React Native.", stat: "10K+ Downloads" },
  { title: "CircleIt", category: "Mobile App", description: "Social networking platform connecting local communities.", stat: "5K+ Users" },
  { title: "Mr. Blackbird", category: "SEO Success", description: "From page 5 to page 1 — a complete local SEO transformation.", stat: "300% Traffic ↑" },
  { title: "Vacancies", category: "Mobile App", description: "Job matching platform with intelligent recommendation engine.", stat: "95% Match Rate" },
];

const testimonials = [
  {
    quote: "Next Tab completely transformed our online presence. Our organic traffic increased by 300% in just six months.",
    author: "Sarah Mitchell",
    role: "Owner, Mr. Blackbird",
  },
  {
    quote: "The mobile app they built for us is fast, reliable, and our users love it. Best investment we've made.",
    author: "James Chen",
    role: "Founder, MyFitnessCoach",
  },
];

const whyUs = [
  { icon: TrendingUp, title: "Results-Driven", desc: "Every strategy is backed by data and measured by outcomes, not vanity metrics." },
  { icon: Zap, title: "Technical Depth", desc: "Master's-level IT expertise — we build things properly, the first time." },
  { icon: Shield, title: "Transparent Pricing", desc: "No hidden costs, no surprises. You know exactly what you're paying for." },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-transparent" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-[5%] w-64 h-64 bg-ocean/15 rounded-full blur-[100px]" />

      <div className="container relative z-10 py-32 md:py-40">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="lg:col-span-7"
          >
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Brisbane's Premium Digital Agency
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="font-heading font-bold text-4xl sm:text-5xl md:text-[3.75rem] lg:text-[4.25rem] leading-[1.05] text-primary-foreground mb-6"
            >
              Digital solutions{" "}
              <span className="text-gradient">crafted</span>
              <br />
              for Australian
              <br />
              businesses
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-primary-foreground/55 max-w-xl mb-10 leading-relaxed"
            >
              Expert SEO strategies and world-class web & mobile development. Real results, no jargon — just honest work that grows your business.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
              <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
                <Link to="/contact">Start Your Project <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
              <Button variant="hero-secondary" size="xl" className="rounded-full" asChild>
                <Link to="/portfolio">View Our Work</Link>
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-6 mt-12">
              <div className="flex -space-x-2">
                {["S","J","L","M"].map((l, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-accent/20 border-2 border-primary flex items-center justify-center">
                    <span className="text-xs font-bold text-accent">{l}</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5 mb-0.5">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-3 h-3 fill-accent text-accent" />)}
                </div>
                <p className="text-xs text-primary-foreground/50">Trusted by 30+ Australian businesses</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Bento stats */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat, i) => (
                <div key={stat.label} className={`glass-dark rounded-2xl p-6 border border-primary-foreground/10 ${i === 0 ? "row-span-1" : ""}`}>
                  <stat.icon className="w-5 h-5 text-accent mb-3" />
                  <p className="font-heading font-bold text-3xl text-primary-foreground">{stat.value}</p>
                  <p className="text-xs text-primary-foreground/40 mt-1 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* Mobile Stats */}
    <section className="lg:hidden relative -mt-16 z-20">
      <div className="container">
        <div className="glass rounded-2xl shadow-premium p-6 border grid grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="w-4 h-4 text-accent mx-auto mb-2" />
              <p className="font-heading font-bold text-2xl text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-0.5">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Us */}
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 md:py-28 surface-warm relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="What We Do"
          title="Services built for Australian businesses"
          description="From getting found on Google to building the mobile app your customers deserve — we handle it all with deep technical expertise."
        />
        <div className="grid md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={service.href}
                className="group card-premium block p-8 rounded-2xl h-full relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-[80px] transition-all duration-500 group-hover:w-40 group-hover:h-40" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-6 group-hover:bg-accent/10 group-hover:border-accent/20 transition-all duration-500">
                    <service.icon className="w-6 h-6 text-primary group-hover:text-accent transition-colors duration-500" />
                  </div>
                  <h3 className="font-heading font-semibold text-lg mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
                  <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold">
                    Explore service <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Portfolio Preview - Bento Grid */}
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="Our Work"
          title="Projects we're proud of"
          description="From mobile apps to SEO transformations — real results for real Australian businesses."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`card-premium rounded-2xl overflow-hidden ${i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-1" : ""}`}
            >
              <div className={`${i === 0 ? "h-48" : "h-36"} hero-gradient relative flex items-end p-5`}>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="relative z-10">
                  <span className="inline-block text-[10px] font-bold text-accent uppercase tracking-[0.15em] px-2.5 py-1 bg-accent/15 rounded-full border border-accent/20">{item.category}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">{item.description}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent">
                  <TrendingUp className="w-3 h-3" /> {item.stat}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full" asChild>
            <Link to="/portfolio">View All Projects <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="surface-teal py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pattern-lines opacity-20" />
      <div className="container relative z-10">
        <SectionHeading eyebrow="Client Stories" title="What our clients say" light />
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-dark rounded-2xl p-8 relative border border-primary-foreground/10"
            >
              <span className="absolute top-5 right-7 text-6xl font-heading text-accent/15 leading-none">"</span>
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-primary-foreground/80 leading-relaxed mb-6 relative z-10">"{t.quote}"</p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center border border-accent/20">
                  <span className="font-heading font-bold text-accent text-sm">{t.author[0]}</span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-primary-foreground text-sm">{t.author}</p>
                  <p className="text-primary-foreground/40 text-xs">{t.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-24 md:py-32">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
          <div className="absolute inset-0 bg-primary/90" />
          <div className="relative z-10 text-center py-20 md:py-28 px-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">
              Ready to grow?
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-[2.75rem] text-primary-foreground mb-5 leading-tight max-w-2xl mx-auto">
              Let's build something great
              <br />
              <span className="text-gradient">together</span>
            </h2>
            <p className="text-primary-foreground/50 max-w-lg mx-auto mb-10 leading-relaxed">
              A straightforward conversation about what you need. No obligations, no jargon — just honest advice from a team that cares.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
                <Link to="/contact">Get a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
