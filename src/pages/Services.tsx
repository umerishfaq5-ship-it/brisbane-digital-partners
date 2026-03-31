import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Smartphone, Globe, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";

const services = [
  {
    icon: Search,
    title: "SEO Audits & Strategy",
    description: "Comprehensive technical audits, keyword research, meta tag optimisation, and an actionable roadmap to improve your search rankings.",
    href: "/services/seo-audits",
  },
  {
    icon: MapPin,
    title: "Local SEO for Australian Businesses",
    description: "Google Business Profile optimisation, local citations, and geo-targeted strategies to dominate your local market.",
    href: "/services/local-seo",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps built with React Native, delivering native performance on iOS and Android from a single codebase.",
    href: "/services/mobile-apps",
  },
  {
    icon: Globe,
    title: "Custom Website Design & Development",
    description: "Fast, responsive, and SEO-friendly websites built with modern technology stacks that scale with your business.",
    href: "/services/web-development",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Services = () => (
  <Layout>
    <section className="hero-gradient text-primary-foreground py-20 md:py-28">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">Our Services</span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl leading-tight max-w-2xl">
            Everything you need to succeed online
          </h1>
          <p className="mt-6 opacity-80 max-w-xl text-lg leading-relaxed">
            From getting found on Google to building the app your customers will love, we've got the technical skills to make it happen.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid gap-8">
          {services.map((s, i) => (
            <motion.div key={s.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <Link
                to={s.href}
                className="group flex flex-col md:flex-row items-start gap-6 p-8 rounded-xl border bg-card hover:shadow-lg transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                  <s.icon className="w-7 h-7 text-accent" />
                </div>
                <div className="flex-1">
                  <h2 className="font-heading font-semibold text-xl text-foreground group-hover:text-accent transition-colors mb-2">
                    {s.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">{s.description}</p>
                  <span className="inline-flex items-center gap-1 text-accent text-sm font-medium">
                    Learn more <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="hero-gradient text-primary-foreground py-16">
      <div className="container text-center">
        <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">Not sure what you need?</h2>
        <p className="opacity-80 max-w-md mx-auto mb-6">Let's chat. We'll give you an honest assessment and recommend only what will actually help.</p>
        <Button variant="accent" size="lg" asChild>
          <Link to="/contact">Let's Discuss Your Project</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Services;
