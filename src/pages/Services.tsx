import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Search, MapPin, Smartphone, Globe, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const services = [
  {
    icon: Search,
    title: "SEO Audits & Strategy",
    description: "Comprehensive technical audits, keyword research, meta tag optimisation, and an actionable roadmap to improve your search rankings.",
    href: "/services/seo-audits",
    number: "01",
  },
  {
    icon: MapPin,
    title: "Local SEO for Australian Businesses",
    description: "Google Business Profile optimisation, local citations, and geo-targeted strategies to dominate your local market.",
    href: "/services/local-seo",
    number: "02",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile apps built with React Native, delivering native performance on iOS and Android from a single codebase.",
    href: "/services/mobile-apps",
    number: "03",
  },
  {
    icon: Globe,
    title: "Custom Website Design & Development",
    description: "Fast, responsive, and SEO-friendly websites built with modern technology stacks that scale with your business.",
    href: "/services/web-development",
    number: "04",
  },
];

const Services = () => (
  <Layout>
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-primary/90" />
      <div className="container relative z-10 py-32 md:py-40 pt-40">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-bold uppercase tracking-[0.15em] mb-6 border border-accent/20">
            Our Services
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-[3.25rem] leading-[1.1] text-primary-foreground max-w-2xl">
            Everything you need to succeed online
          </h1>
          <p className="mt-6 text-primary-foreground/60 max-w-xl text-lg leading-relaxed">
            From getting found on Google to building the app your customers will love, we've got the technical skills to make it happen.
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="py-24 md:py-32">
      <div className="container max-w-4xl">
        <div className="space-y-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to={s.href}
                className="group card-premium flex flex-col md:flex-row items-start gap-6 p-8 md:p-10 rounded-2xl"
              >
                <div className="flex items-center gap-5 shrink-0">
                  <span className="font-heading font-extrabold text-3xl text-accent/20">{s.number}</span>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <s.icon className="w-7 h-7 text-accent" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="font-heading font-bold text-xl text-foreground group-hover:text-accent transition-colors duration-300 mb-2">
                    {s.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-4 text-[15px]">{s.description}</p>
                  <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold">
                    Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0 bg-primary/90" />
      <div className="container text-center py-20 relative z-10">
        <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-primary-foreground mb-4">Not sure what you need?</h2>
        <p className="text-primary-foreground/60 max-w-md mx-auto mb-8">Let's chat. We'll give you an honest assessment and recommend only what will actually help.</p>
        <Button variant="hero-primary" size="xl" asChild>
          <Link to="/contact">Let's Discuss Your Project</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Services;
