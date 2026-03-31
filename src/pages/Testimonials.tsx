import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Layout from "@/components/Layout";
import heroBg from "@/assets/hero-bg.jpg";

const testimonials = [
  {
    quote: "Next Tab completely transformed our online presence. Our organic traffic increased by 300% in just six months. They explained everything in plain English and delivered exactly what they promised.",
    author: "Sarah Mitchell",
    role: "Owner, Mr. Blackbird",
  },
  {
    quote: "The mobile app they built for us is fast, reliable, and our users absolutely love it. The React Native approach meant we got both iOS and Android without paying for two separate apps.",
    author: "James Chen",
    role: "Founder, MyFitnessCoach",
  },
  {
    quote: "We've worked with three different agencies before finding Next Tab. The difference is night and day — they actually know what they're doing technically, and they don't oversell.",
    author: "Laura Nguyen",
    role: "Director, CircleIt",
  },
  {
    quote: "Their local SEO work got us into the Google Map Pack within three months. We're now getting calls from customers who never would have found us before.",
    author: "Mark Davidson",
    role: "Owner, Davidson Plumbing",
  },
  {
    quote: "What I appreciate most is their honesty. They told us upfront which ideas would work and which wouldn't, saving us time and money. That kind of transparency is rare.",
    author: "Emma Roberts",
    role: "Marketing Manager, Vacancies",
  },
  {
    quote: "The website they built loads incredibly fast and looks amazing on every device. Since launch, our conversion rate has doubled.",
    author: "Tom Williams",
    role: "CEO, Coastal Living QLD",
  },
];

const Testimonials = () => (
  <Layout>
    <section className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-primary/90" />
      <div className="container relative z-10 py-32 md:py-40 pt-40">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-bold uppercase tracking-[0.15em] mb-6 border border-accent/20">
            Testimonials
          </span>
          <h1 className="font-heading font-extrabold text-4xl md:text-[3.25rem] leading-[1.1] text-primary-foreground max-w-2xl">
            Don't take our word for it
          </h1>
          <p className="mt-6 text-primary-foreground/60 max-w-xl text-lg leading-relaxed">
            Hear from the businesses we've helped grow. Real feedback from real Australian clients.
          </p>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="py-24 md:py-32">
      <div className="container">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="card-premium rounded-2xl p-7 flex flex-col relative"
            >
              <span className="absolute top-5 right-7 text-5xl font-heading text-accent/10 leading-none">"</span>
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 flex-1 text-sm relative z-10">"{t.quote}"</p>
              <footer className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center">
                  <span className="font-heading font-bold text-accent text-xs">{t.author[0]}</span>
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-sm">{t.author}</p>
                  <p className="text-muted-foreground text-xs">{t.role}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>

    <section className="relative overflow-hidden">
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
      <div className="absolute inset-0 bg-primary/90" />
      <div className="container text-center py-20 relative z-10">
        <h2 className="font-heading font-extrabold text-2xl md:text-3xl text-primary-foreground mb-4">Ready to be our next success story?</h2>
        <p className="text-primary-foreground/60 max-w-md mx-auto mb-8">Let's discuss how we can help your business grow.</p>
        <Button variant="hero-primary" size="xl" asChild>
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default Testimonials;
