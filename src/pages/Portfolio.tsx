import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const projects = [
  {
    title: "MyFitnessCoach",
    category: "Mobile App",
    tech: "React Native · iOS · Android",
    description: "A comprehensive fitness coaching platform with personalised workout plans, progress tracking, and video demonstrations.",
  },
  {
    title: "CircleIt",
    category: "Mobile App",
    tech: "React Native · Firebase",
    description: "A social networking app connecting local communities through shared interests and events with real-time chat.",
  },
  {
    title: "Vacancies",
    category: "Mobile App",
    tech: "React Native · Node.js",
    description: "An intelligent job matching platform that connects employers with candidates using smart recommendation algorithms.",
  },
  {
    title: "Mr. Blackbird",
    category: "SEO Transformation",
    tech: "Technical SEO · Local SEO · Content Strategy",
    description: "From page 5 to page 1 of Google within 6 months. Achieved a 300% increase in organic traffic.",
  },
];

const Portfolio = () => (
  <Layout>
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-primary/90" />
      <div className="container relative z-10 py-32 md:py-40 pt-40">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-bold uppercase tracking-[0.15em] mb-6 border border-accent/20">
            Portfolio
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-[3.25rem] leading-[1.1] text-primary-foreground max-w-2xl">
            Work that speaks for itself
          </h1>
          <p className="mt-6 text-primary-foreground/60 max-w-xl text-lg leading-relaxed">
            Real projects, real results. Here's a look at some of the work we've delivered for our clients.
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="py-24 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-premium rounded-2xl overflow-hidden"
            >
              <div className="h-52 hero-gradient relative flex items-center justify-center">
                <span className="font-heading font-extrabold text-3xl text-primary-foreground/20">{p.title}</span>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-block text-[10px] font-bold text-accent uppercase tracking-[0.15em] px-2.5 py-1 bg-accent/10 rounded-full">{p.category}</span>
                  <span className="text-xs text-muted-foreground">{p.tech}</span>
                </div>
                <h3 className="font-heading font-bold text-xl text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="surface-warm py-20 relative">
      <div className="absolute top-0 left-0 right-0 divider-gradient" />
      <div className="container text-center">
        <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-foreground mb-3">Have a project in mind?</h2>
        <p className="text-muted-foreground mb-8">We'd love to hear about it. Let's make something great together.</p>
        <Button variant="accent" size="lg" asChild>
          <Link to="/contact">Start a Conversation</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Portfolio;
