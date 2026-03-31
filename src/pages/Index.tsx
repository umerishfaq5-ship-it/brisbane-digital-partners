import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, Smartphone, Globe, ArrowRight, Star, Users, Briefcase, Clock, CheckCircle } from "lucide-react";
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
    title: "Search Engine Optimisation",
    description: "Technical audits, keyword research, and on-page optimisation that actually moves the needle for your rankings.",
    href: "/services/seo-audits",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Hybrid apps built with React Native for smooth, native-like performance on both iOS and Android.",
    href: "/services/mobile-apps",
  },
  {
    icon: Globe,
    title: "Custom Web Solutions",
    description: "Scalable, fast, and secure websites designed to grow with your business.",
    href: "/services/web-development",
  },
];

const portfolioItems = [
  { title: "MyFitnessCoach", category: "Mobile App", description: "A comprehensive fitness coaching app built with React Native." },
  { title: "CircleIt", category: "Mobile App", description: "Social networking platform connecting local communities." },
  { title: "Mr. Blackbird", category: "SEO Success", description: "From page 5 to page 1 — a complete local SEO transformation." },
  { title: "Vacancies", category: "Mobile App", description: "Job matching platform with intelligent recommendation engine." },
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

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />

      <div className="container relative z-10 py-32 md:py-40">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-2xl"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-bold uppercase tracking-[0.15em] mb-6 border border-accent/20"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Brisbane Digital Agency
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-heading font-extrabold text-4xl sm:text-5xl md:text-[3.5rem] leading-[1.08] text-primary-foreground mb-6"
          >
            We build digital experiences that{" "}
            <span className="text-gradient">grow your business</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-lg md:text-xl text-primary-foreground/60 max-w-lg mb-10 leading-relaxed"
          >
            Practical SEO strategies and expert web & mobile development for Australian businesses that want real results — not jargon.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
            <Button variant="hero-primary" size="xl" asChild>
              <Link to="/contact">Let's Discuss Your Project</Link>
            </Button>
            <Button variant="hero-secondary" size="xl" asChild>
              <Link to="/portfolio">View Our Work <ArrowRight className="w-4 h-4 ml-1" /></Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative gradient orbs */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* Stats */}
    <section className="relative -mt-16 z-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl shadow-premium p-8 md:p-10 border"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <stat.icon className="w-5 h-5 text-accent mx-auto mb-3" />
                <p className="font-heading font-extrabold text-3xl md:text-4xl text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground mt-1 font-medium uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Services */}
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          eyebrow="What We Do"
          title="Services built for results"
          description="We focus on what actually works — no fluff, no over-promising. Just solid technical work that helps your business grow."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
            >
              <Link
                to={service.href}
                className="group card-premium block p-8 rounded-2xl h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3 text-foreground group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-5">{service.description}</p>
                <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Portfolio Preview */}
    <section className="surface-warm py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 divider-gradient" />
      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Our Work"
          title="Projects we're proud of"
          description="From mobile apps to SEO transformations, here's a snapshot of the work we've delivered."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-premium rounded-2xl p-6"
            >
              <span className="inline-block text-[10px] font-bold text-accent uppercase tracking-[0.15em] px-2.5 py-1 bg-accent/10 rounded-full">{item.category}</span>
              <h3 className="font-heading font-bold text-foreground mt-4 mb-2 text-lg">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/portfolio">View All Projects <ArrowRight className="w-4 h-4 ml-2" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHeading eyebrow="Testimonials" title="What our clients say" />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="card-premium rounded-2xl p-8 relative"
            >
              {/* Quote mark */}
              <span className="absolute top-6 right-8 text-6xl font-heading text-accent/10 leading-none">"</span>
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 relative z-10">"{t.quote}"</p>
              <footer className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="font-heading font-bold text-accent text-sm">{t.author[0]}</span>
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-sm">{t.author}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0 bg-primary/90" />
      <div className="container text-center py-24 md:py-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-accent font-heading font-bold text-xs uppercase tracking-[0.2em] mb-4">Ready?</span>
          <h2 className="font-heading font-extrabold text-3xl md:text-[2.75rem] text-primary-foreground mb-5 leading-tight">
            Let's build something great together
          </h2>
          <p className="text-primary-foreground/60 max-w-lg mx-auto mb-10 leading-relaxed">
            A straightforward conversation about what you need and how we can help. No obligations, no jargon — just real talk.
          </p>
          <Button variant="hero-primary" size="xl" asChild>
            <Link to="/contact">Get a Free Audit</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
