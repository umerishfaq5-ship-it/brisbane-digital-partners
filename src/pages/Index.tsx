import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, Smartphone, Globe, ArrowRight, Star, Users, Briefcase, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

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

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="hero-gradient text-primary-foreground relative overflow-hidden">
      <div className="container py-24 md:py-36 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <span className="inline-block text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-4">
            Brisbane Digital Agency
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-6xl leading-[1.1] mb-6">
            We build digital experiences that{" "}
            <span className="text-gradient">grow your business</span>
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-xl mb-8 leading-relaxed">
            Practical SEO strategies and expert web & mobile development for Australian businesses that want real results — not jargon.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button variant="accent" size="lg" asChild>
              <Link to="/contact">Let's Discuss Your Project</Link>
            </Button>
            <Button variant="accent-outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground" asChild>
              <Link to="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </motion.div>
      </div>
      {/* Decorative gradient orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl translate-y-1/2" />
    </section>

    {/* Stats */}
    <section className="border-b">
      <div className="container py-12">
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
              <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
              <p className="font-heading font-bold text-3xl text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 md:py-28">
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
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={service.href}
                className="group block p-8 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 h-full"
              >
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-3 text-foreground group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.description}</p>
                <span className="inline-flex items-center gap-1 text-accent text-sm font-medium">
                  Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Portfolio Preview */}
    <section className="surface-warm py-20 md:py-28">
      <div className="container">
        <SectionHeading
          eyebrow="Our Work"
          title="Projects we're proud of"
          description="From mobile apps to SEO transformations, here's a snapshot of the work we've delivered."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolioItems.map((item, i) => (
            <motion.div
              key={item.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card rounded-xl p-6 border hover:shadow-md transition-shadow"
            >
              <span className="text-xs font-semibold text-accent uppercase tracking-wider">{item.category}</span>
              <h3 className="font-heading font-semibold text-foreground mt-2 mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Button variant="outline" asChild>
            <Link to="/portfolio">View All Projects <ArrowRight className="w-4 h-4 ml-1" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-20 md:py-28">
      <div className="container">
        <SectionHeading eyebrow="Testimonials" title="What our clients say" />
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card border rounded-xl p-8"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 italic">"{t.quote}"</p>
              <footer>
                <p className="font-heading font-semibold text-foreground text-sm">{t.author}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="hero-gradient text-primary-foreground py-20 md:py-28">
      <div className="container text-center">
        <motion.div {...fadeUp}>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Ready to grow your business?</h2>
          <p className="opacity-80 max-w-lg mx-auto mb-8">
            Let's have a straightforward conversation about what you need and how we can help. No obligations, no jargon.
          </p>
          <Button variant="accent" size="lg" asChild>
            <Link to="/contact">Get a Free Audit</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Index;
