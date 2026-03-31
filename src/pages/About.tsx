import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Users, Award, Heart, MapPin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const values = [
  { icon: Heart, title: "Honest Work", description: "We don't over-promise. We set realistic expectations and then exceed them." },
  { icon: Award, title: "Technical Excellence", description: "Our team holds advanced IT qualifications and stays on top of the latest technology." },
  { icon: Users, title: "Long-term Relationships", description: "We build partnerships, not transactions. Many of our clients have been with us for years." },
  { icon: MapPin, title: "Brisbane Roots", description: "We're proudly based in Brisbane and understand the unique needs of Australian businesses." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const About = () => (
  <Layout>
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-primary/90" />
      <div className="container relative z-10 py-32 md:py-40 pt-40">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-bold uppercase tracking-[0.15em] mb-6 border border-accent/20">
            About Us
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-[3.25rem] leading-[1.1] text-primary-foreground max-w-2xl">
            A small team with big technical skills
          </h1>
          <p className="mt-6 text-primary-foreground/60 max-w-xl text-lg leading-relaxed">
            We're a Brisbane-based digital agency built on deep IT expertise and a genuine passion for helping Australian businesses succeed online.
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="py-24 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-20 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block text-accent font-heading font-bold text-xs uppercase tracking-[0.2em] mb-3">Our Story</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-foreground">Built on expertise,<br />driven by results</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Next Tab Agency was founded with a simple idea: Australian businesses deserve digital partners who actually understand the technology, not just the sales pitch.
              </p>
              <p>
                With a Master's level IT background and hands-on experience in React Native mobile development, our team brings a rare combination of academic depth and practical skill to every project.
              </p>
              <p>
                We've built everything from complex mobile applications to complete SEO overhauls that took businesses from invisible to the first page of Google.
              </p>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.15 } } }}>
            <span className="inline-block text-accent font-heading font-bold text-xs uppercase tracking-[0.2em] mb-3">Why Choose Us</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-8 text-foreground">Clear communication,<br />consistent delivery</h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                We don't do confusing jargon. When we explain our strategy, you'll understand exactly what we're doing and why. That's a promise.
              </p>
              <p>
                Our clients stay with us because we deliver consistently. We treat every project like it's our own business on the line, because in a way, it is — our reputation depends on your success.
              </p>
            </div>
            <Button variant="accent" size="lg" className="mt-8" asChild>
              <Link to="/contact">Work With Us</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="surface-warm py-24 md:py-32 relative">
      <div className="absolute top-0 left-0 right-0 divider-gradient" />
      <div className="container">
        <SectionHeading eyebrow="Our Values" title="What drives us" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-premium rounded-2xl p-7"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-5">
                <v.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
