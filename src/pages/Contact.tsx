import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import heroBg from "@/assets/hero-bg.jpg";

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Brisbane, QLD, Australia" },
  { icon: Phone, label: "Phone", value: "+61 4XX XXX XXX" },
  { icon: Mail, label: "Email", value: "hello@nexttab.com.au" },
  { icon: Clock, label: "Business Hours", value: "Mon – Fri: 9am – 5pm AEST" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for reaching out! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <section className="relative min-h-[45vh] flex items-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-primary/90" />
        <div className="container relative z-10 py-32 md:py-40 pt-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-bold uppercase tracking-[0.15em] mb-6 border border-accent/20">
              Contact Us
            </span>
            <h1 className="font-heading font-extrabold text-4xl md:text-[3.25rem] leading-[1.1] text-primary-foreground max-w-2xl">
              Let's start a conversation
            </h1>
            <p className="mt-6 text-primary-foreground/60 max-w-xl text-lg leading-relaxed">
              Whether you've got a detailed brief or just a rough idea, we're happy to chat. No pressure, no obligations.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      <section className="py-24 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <span className="inline-block text-accent font-heading font-bold text-xs uppercase tracking-[0.2em] mb-3">Send a Message</span>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">Tell us about your project</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Name *</label>
                    <Input
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="h-12 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Email *</label>
                    <Input
                      required
                      type="email"
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="h-12 rounded-xl"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                  <Input
                    type="tel"
                    maxLength={20}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+61 4XX XXX XXX"
                    className="h-12 rounded-xl"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Tell us about your project *</label>
                  <Textarea
                    required
                    maxLength={2000}
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What are you looking to achieve?"
                    className="rounded-xl"
                  />
                </div>
                <Button variant="accent" size="lg" type="submit">
                  Send Message <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="lg:col-span-2"
            >
              <span className="inline-block text-accent font-heading font-bold text-xs uppercase tracking-[0.2em] mb-3">Get in Touch</span>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">Contact details</h2>
              <div className="space-y-6">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="font-heading font-bold text-sm text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badge */}
              <div className="mt-10 p-6 rounded-2xl border bg-muted/50">
                <p className="font-heading font-bold text-sm text-foreground mb-2">💬 Free consultation</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Every conversation starts with a free, no-obligation discussion. We'll give you honest advice on what will actually help your business.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
