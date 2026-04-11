import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Users, Award, Heart, MapPin, GraduationCap, Handshake } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const values = [
  { icon: Heart, title: "Honest Work", description: "We don't over-promise. We set realistic expectations and then exceed them every time." },
  { icon: GraduationCap, title: "Technical Excellence", description: "Master's level IT qualifications and deep hands-on experience with modern technology." },
  { icon: Handshake, title: "Long-term Partnerships", description: "We build relationships, not transactions. Many of our clients have been with us for years." },
  { icon: MapPin, title: "Brisbane Proud", description: "Proudly based in Brisbane and deeply understand the unique needs of Australian businesses." },
  { icon: Award, title: "Quality First", description: "Every line of code, every SEO recommendation — we never cut corners on quality." },
  { icon: Users, title: "Client Focused", description: "Your success is our success. We treat every project like our own business depends on it." },
];

const milestones = [
  { year: "2019", title: "Founded in Brisbane", desc: "Started with a vision to bring honest, expert digital services to Australian businesses." },
  { year: "2020", title: "First Mobile App Launched", desc: "Shipped MyFitnessCoach to both App Store and Google Play." },
  { year: "2021", title: "SEO Division Expanded", desc: "Added dedicated SEO services after seeing the massive impact on client businesses." },
  { year: "2023", title: "30+ Happy Clients", desc: "Reached a milestone of 30+ long-term clients across Australia." },
  { year: "2024", title: "50+ Projects Delivered", desc: "Celebrating over 50 successful project deliveries with a 4.9 star rating." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[55vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="absolute bottom-1/3 right-[10%] w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      <div className="container relative z-10 py-32 md:py-40 pt-40">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            About Us
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-[3.5rem] leading-[1.08] text-primary-foreground">
            A small team with{" "}
            <span className="text-gradient">big technical skills</span>
          </h1>
          <p className="mt-6 text-primary-foreground/55 max-w-xl text-lg leading-relaxed">
            Brisbane-based digital agency built on deep IT expertise and a genuine passion for helping Australian businesses thrive online.
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* Story - Split */}
    <section className="py-24 md:py-32">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold uppercase tracking-[0.15em] mb-4 border border-primary/10">
              Our Story
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-foreground leading-tight">Built on expertise,<br />driven by results</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Next Tab Agency was founded with a simple idea: Australian businesses deserve digital partners who actually understand the technology, not just the sales pitch.
              </p>
              <p>
                With a Master's level IT background and hands-on experience in React Native mobile development, our team brings a rare combination of academic depth and practical skill to every project.
              </p>
              <p>
                We've built everything from complex mobile applications to complete SEO overhauls that took businesses from invisible to the first page of Google. And we've done it all while keeping things simple, transparent, and jargon-free.
              </p>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.15 } } }}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold uppercase tracking-[0.15em] mb-4 border border-primary/10">
              Why Choose Us
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-foreground leading-tight">Clear communication,<br />consistent delivery</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                We don't do confusing jargon. When we explain our strategy, you'll understand exactly what we're doing and why. That's a promise.
              </p>
              <p>
                Our clients stay with us because we deliver consistently. We treat every project like it's our own business on the line — because in a way, it is. Our reputation depends on your success.
              </p>
            </div>
            <Button variant="accent" size="lg" className="mt-8 rounded-full" asChild>
              <Link to="/contact">Work With Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="surface-warm py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container relative z-10">
        <SectionHeading eyebrow="Our Journey" title="Milestones along the way" />
        <div className="max-w-3xl mx-auto">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-6 mb-8 last:mb-0"
            >
              <div className="shrink-0 w-16 text-right">
                <span className="font-heading font-bold text-accent text-sm">{m.year}</span>
              </div>
              <div className="relative pb-8 last:pb-0 border-l-2 border-accent/20 pl-6">
                <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-accent" />
                <h3 className="font-heading font-semibold text-foreground mb-1">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-24 md:py-32">
      <div className="container">
        <SectionHeading eyebrow="Our Values" title="What drives us every day" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-premium rounded-2xl p-7"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-5">
                <v.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
