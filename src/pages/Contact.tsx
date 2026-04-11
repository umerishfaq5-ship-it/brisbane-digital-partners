import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ArrowRight, Shield, Zap } from "lucide-react";
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
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for reaching out! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", service: "", message: "" });
  };

  return (
    <Layout>
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
        <div className="absolute bottom-1/3 right-[10%] w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
        <div className="container relative z-10 py-32 md:py-40 pt-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Contact Us
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-[3.5rem] leading-[1.08] text-primary-foreground">
              Let's start a{" "}
              <span className="text-gradient">conversation</span>
            </h1>
            <p className="mt-6 text-primary-foreground/55 max-w-xl text-lg leading-relaxed">
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
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold uppercase tracking-[0.15em] mb-4 border border-primary/10">
                Send a Message
              </span>
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
                      className="h-12 rounded-xl border-border/60 focus:border-accent"
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
                      className="h-12 rounded-xl border-border/60 focus:border-accent"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                    <Input
                      type="tel"
                      maxLength={20}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+61 4XX XXX XXX"
                      className="h-12 rounded-xl border-border/60 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">Service Interested In</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full h-12 rounded-xl border border-border/60 bg-background px-4 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-ring/20"
                    >
                      <option value="">Select a service</option>
                      <option value="seo">SEO Audits & Strategy</option>
                      <option value="local-seo">Local SEO</option>
                      <option value="mobile-app">Mobile App Development</option>
                      <option value="web-dev">Website Design & Development</option>
                      <option value="other">Not sure yet</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">Tell us about your project *</label>
                  <Textarea
                    required
                    maxLength={2000}
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What are you looking to achieve? Any budget or timeline in mind?"
                    className="rounded-xl border-border/60 focus:border-accent"
                  />
                </div>
                <Button variant="accent" size="lg" type="submit" className="rounded-full">
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
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold uppercase tracking-[0.15em] mb-4 border border-primary/10">
                Get in Touch
              </span>
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">Contact details</h2>
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-sm text-foreground">{item.label}</p>
                      <p className="text-sm text-muted-foreground mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust badges */}
              <div className="mt-10 space-y-3">
                <div className="surface-teal rounded-2xl p-5 border border-primary-foreground/10">
                  <div className="flex items-center gap-3 mb-2">
                    <Shield className="w-5 h-5 text-accent" />
                    <p className="font-heading font-semibold text-primary-foreground text-sm">Free Consultation</p>
                  </div>
                  <p className="text-xs text-primary-foreground/50 leading-relaxed">
                    Every conversation starts with a free, no-obligation discussion. We'll give you honest advice on what will actually help.
                  </p>
                </div>
                <div className="card-premium rounded-2xl p-5">
                  <div className="flex items-center gap-3 mb-2">
                    <Zap className="w-5 h-5 text-accent" />
                    <p className="font-heading font-semibold text-foreground text-sm">Quick Response</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    We typically respond within a few hours during business hours. Expect a reply the same business day.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
