import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    title: "MyFitnessCoach",
    category: "Mobile App",
    tech: "React Native · iOS · Android",
    description: "A comprehensive fitness coaching platform with personalised workout plans, progress tracking, and video demonstrations. Built with React Native for seamless cross-platform performance.",
  },
  {
    title: "CircleIt",
    category: "Mobile App",
    tech: "React Native · Firebase",
    description: "A social networking app connecting local communities through shared interests and events. Features real-time chat, event management, and location-based discovery.",
  },
  {
    title: "Vacancies",
    category: "Mobile App",
    tech: "React Native · Node.js",
    description: "An intelligent job matching platform that connects employers with candidates using smart recommendation algorithms and a streamlined application process.",
  },
  {
    title: "Mr. Blackbird",
    category: "SEO Transformation",
    tech: "Technical SEO · Local SEO · Content Strategy",
    description: "Took a local Brisbane business from page 5 to page 1 of Google within 6 months. Achieved a 300% increase in organic traffic through comprehensive technical audits and local SEO strategies.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Portfolio = () => (
  <Layout>
    <section className="hero-gradient text-primary-foreground py-20 md:py-28">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">Portfolio</span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl leading-tight max-w-2xl">
            Work that speaks for itself
          </h1>
          <p className="mt-6 opacity-80 max-w-xl text-lg leading-relaxed">
            Real projects, real results. Here's a look at some of the work we've delivered for our clients.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              {...fadeUp}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 hero-gradient flex items-center justify-center">
                <span className="font-heading font-bold text-2xl text-primary-foreground opacity-40">{p.title}</span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-accent uppercase tracking-wider">{p.category}</span>
                  <span className="text-xs text-muted-foreground">· {p.tech}</span>
                </div>
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="surface-warm py-16">
      <div className="container text-center">
        <h2 className="font-heading font-bold text-2xl text-foreground mb-3">Have a project in mind?</h2>
        <p className="text-muted-foreground mb-6">We'd love to hear about it. Let's make something great together.</p>
        <Button variant="accent" size="lg" asChild>
          <Link to="/contact">Start a Conversation</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Portfolio;
