import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Users, Award, Heart, MapPin } from "lucide-react";

const values = [
  { icon: Heart, title: "Honest Work", description: "We don't over-promise. We set realistic expectations and then exceed them." },
  { icon: Award, title: "Technical Excellence", description: "Our team holds advanced IT qualifications and stays on top of the latest technology." },
  { icon: Users, title: "Long-term Relationships", description: "We build partnerships, not transactions. Many of our clients have been with us for years." },
  { icon: MapPin, title: "Brisbane Roots", description: "We're proudly based in Brisbane and understand the unique needs of Australian businesses." },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const About = () => (
  <Layout>
    <section className="hero-gradient text-primary-foreground py-20 md:py-28">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">About Us</span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl leading-tight max-w-2xl">
            A small team with big technical skills
          </h1>
          <p className="mt-6 opacity-80 max-w-xl text-lg leading-relaxed">
            We're a Brisbane-based digital agency built on a foundation of deep IT expertise and a genuine passion for helping Australian businesses succeed online.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div {...fadeUp}>
            <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Next Tab Agency was founded with a simple idea: Australian businesses deserve digital partners who actually understand the technology, not just the sales pitch.
              </p>
              <p>
                With a Master's level IT background and hands-on experience in React Native mobile development, our team brings a rare combination of academic depth and practical skill to every project.
              </p>
              <p>
                We've built everything from complex mobile applications to complete SEO overhauls that took businesses from invisible to the first page of Google. And we've done it all by focusing on what matters — clear communication, honest timelines, and work we're genuinely proud of.
              </p>
            </div>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.5, delay: 0.15 }}>
            <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why Choose Us</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We don't do confusing jargon. When we explain our strategy, you'll understand exactly what we're doing and why. That's a promise.
              </p>
              <p>
                Our clients stay with us because we deliver consistently. We treat every project like it's our own business on the line, because in a way, it is — our reputation depends on your success.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="surface-warm py-20 md:py-28">
      <div className="container">
        <SectionHeading eyebrow="Our Values" title="What drives us" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-card rounded-xl p-6 border"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <v.icon className="w-5 h-5 text-accent" />
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
