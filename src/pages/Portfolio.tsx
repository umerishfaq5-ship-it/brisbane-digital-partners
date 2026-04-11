import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const projects = [
  {
    title: "MyFitnessCoach",
    category: "Mobile App",
    tech: "React Native · iOS · Android",
    description: "A comprehensive fitness coaching platform with personalised workout plans, progress tracking, and video demonstrations. Built with React Native for seamless cross-platform performance.",
    stat: "10K+ Downloads",
    color: "from-teal to-ocean",
  },
  {
    title: "CircleIt",
    category: "Mobile App",
    tech: "React Native · Firebase · Real-time",
    description: "A social networking app connecting local communities through shared interests and events, featuring real-time chat, event discovery, and community boards.",
    stat: "5K+ Active Users",
    color: "from-eucalyptus to-teal",
  },
  {
    title: "Vacancies",
    category: "Mobile App",
    tech: "React Native · Node.js · AI Matching",
    description: "An intelligent job matching platform that connects employers with candidates using smart recommendation algorithms and location-based search.",
    stat: "95% Match Rate",
    color: "from-ocean to-teal-light",
  },
  {
    title: "Mr. Blackbird",
    category: "SEO Transformation",
    tech: "Technical SEO · Local SEO · Content Strategy",
    description: "From page 5 to page 1 of Google within 6 months. Achieved a 300% increase in organic traffic through comprehensive technical SEO, content optimisation, and local search strategy.",
    stat: "300% Traffic Increase",
    color: "from-teal-light to-eucalyptus",
  },
];

const Portfolio = () => (
  <Layout>
    <section className="relative min-h-[55vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="absolute bottom-1/3 right-[10%] w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      <div className="container relative z-10 py-32 md:py-40 pt-40">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Portfolio
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-[3.5rem] leading-[1.08] text-primary-foreground">
            Work that{" "}
            <span className="text-gradient">speaks for itself</span>
          </h1>
          <p className="mt-6 text-primary-foreground/55 max-w-xl text-lg leading-relaxed">
            Real projects, real results. Here's a look at the work we've delivered for Australian businesses.
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="py-24 md:py-32">
      <div className="container">
        <div className="space-y-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-premium rounded-2xl overflow-hidden"
            >
              <div className="grid lg:grid-cols-5">
                <div className="lg:col-span-2 hero-gradient relative flex items-center justify-center min-h-[200px] lg:min-h-0">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-primary/20" />
                  <div className="relative z-10 p-8 text-center">
                    <span className="font-heading font-bold text-3xl lg:text-4xl text-primary-foreground/15">{p.title}</span>
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold border border-accent/20">
                      <TrendingUp className="w-3 h-3" /> {p.stat}
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="inline-block text-[10px] font-bold text-accent uppercase tracking-[0.15em] px-2.5 py-1 bg-accent/10 rounded-full">{p.category}</span>
                    <span className="text-xs text-muted-foreground">{p.tech}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">{p.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="surface-teal rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 pattern-lines opacity-20" />
          <div className="relative z-10">
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-3">Have a project in mind?</h2>
            <p className="text-primary-foreground/50 mb-8">We'd love to hear about it. Let's make something great together.</p>
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
              <Link to="/contact">Start a Conversation</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Portfolio;
