import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    quote: "Next Tab completely transformed our online presence. Our organic traffic increased by 300% in just six months. They explained everything in plain English and delivered exactly what they promised.",
    author: "Sarah Mitchell",
    role: "Owner, Mr. Blackbird",
  },
  {
    quote: "The mobile app they built for us is fast, reliable, and our users absolutely love it. The React Native approach meant we got both iOS and Android without paying for two separate apps. Best investment we've made.",
    author: "James Chen",
    role: "Founder, MyFitnessCoach",
  },
  {
    quote: "We've worked with three different agencies before finding Next Tab. The difference is night and day — they actually know what they're doing technically, and they don't try to oversell you on things you don't need.",
    author: "Laura Nguyen",
    role: "Director, CircleIt",
  },
  {
    quote: "Their local SEO work got us into the Google Map Pack within three months. We're now getting calls from customers who never would have found us before. Absolute game-changer for our Brisbane business.",
    author: "Mark Davidson",
    role: "Owner, Davidson Plumbing",
  },
  {
    quote: "What I appreciate most about Next Tab is their honesty. They told us upfront which ideas would work and which wouldn't, saving us time and money. That kind of transparency is rare in this industry.",
    author: "Emma Roberts",
    role: "Marketing Manager, Vacancies",
  },
  {
    quote: "The website they built loads incredibly fast and looks amazing on every device. Since launch, our conversion rate has doubled. They clearly understand both design and performance.",
    author: "Tom Williams",
    role: "CEO, Coastal Living QLD",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
};

const Testimonials = () => (
  <Layout>
    <section className="hero-gradient text-primary-foreground py-20 md:py-28">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-block text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">Testimonials</span>
          <h1 className="font-heading font-bold text-4xl md:text-5xl leading-tight max-w-2xl">
            Don't take our word for it
          </h1>
          <p className="mt-6 opacity-80 max-w-xl text-lg leading-relaxed">
            Hear from the businesses we've helped grow. Real feedback from real Australian clients.
          </p>
        </motion.div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              {...fadeUp}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card border rounded-xl p-6 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 flex-1 italic text-sm">"{t.quote}"</p>
              <footer>
                <p className="font-heading font-semibold text-foreground text-sm">{t.author}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>

    <section className="hero-gradient text-primary-foreground py-16">
      <div className="container text-center">
        <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">Ready to be our next success story?</h2>
        <p className="opacity-80 max-w-md mx-auto mb-6">Let's discuss how we can help your business grow.</p>
        <Button variant="accent" size="lg" asChild>
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Testimonials;
