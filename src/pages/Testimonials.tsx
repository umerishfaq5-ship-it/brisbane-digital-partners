import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Quote } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const testimonials = [
  {
    quote: "Next Tab completely transformed our online presence. Our organic traffic increased by 300% in just six months. They explained everything in plain English and delivered exactly what they promised.",
    author: "Sarah Mitchell",
    role: "Owner, Mr. Blackbird",
    highlight: "300% traffic increase",
  },
  {
    quote: "The mobile app they built for us is fast, reliable, and our users absolutely love it. The React Native approach meant we got both iOS and Android without paying for two separate apps.",
    author: "James Chen",
    role: "Founder, MyFitnessCoach",
    highlight: "10K+ app downloads",
  },
  {
    quote: "We've worked with three different agencies before finding Next Tab. The difference is night and day — they actually know what they're doing technically, and they don't oversell.",
    author: "Laura Nguyen",
    role: "Director, CircleIt",
    highlight: "Long-term partner",
  },
  {
    quote: "Their local SEO work got us into the Google Map Pack within three months. We're now getting calls from customers who never would have found us before.",
    author: "Mark Davidson",
    role: "Owner, Davidson Plumbing",
    highlight: "Map Pack in 3 months",
  },
  {
    quote: "What I appreciate most is their honesty. They told us upfront which ideas would work and which wouldn't, saving us time and money. That kind of transparency is rare.",
    author: "Emma Roberts",
    role: "Marketing Manager, Vacancies",
    highlight: "Honest guidance",
  },
  {
    quote: "The website they built loads incredibly fast and looks amazing on every device. Since launch, our conversion rate has doubled.",
    author: "Tom Williams",
    role: "CEO, Coastal Living QLD",
    highlight: "2x conversion rate",
  },
];

const Testimonials = () => (
  <Layout>
    <section className="relative min-h-[55vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="absolute bottom-1/3 right-[10%] w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      <div className="container relative z-10 py-32 md:py-40 pt-40">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            Testimonials
          </span>
          <h1 className="font-heading font-bold text-4xl md:text-[3.5rem] leading-[1.08] text-primary-foreground">
            Don't take our word for it
          </h1>
          <p className="mt-6 text-primary-foreground/55 max-w-xl text-lg leading-relaxed">
            Real feedback from real Australian businesses we've helped grow.
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="py-24 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className={`card-premium rounded-2xl p-7 flex flex-col relative ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                  ))}
                </div>
                <Quote className="w-6 h-6 text-accent/15" />
              </div>
              <p className="text-foreground leading-relaxed mb-4 flex-1 text-sm">"{t.quote}"</p>
              <span className="inline-block text-[10px] font-bold text-accent uppercase tracking-wider px-2.5 py-1 bg-accent/10 rounded-full mb-5 self-start">{t.highlight}</span>
              <footer className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary/5 border border-primary/10 flex items-center justify-center">
                  <span className="font-heading font-bold text-primary text-sm">{t.author[0]}</span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground text-sm">{t.author}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </footer>
            </motion.blockquote>
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
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">Ready to be our next success story?</h2>
            <p className="text-primary-foreground/50 max-w-md mx-auto mb-8">Let's discuss how we can help your business grow.</p>
            <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  </Layout>
);

export default Testimonials;
