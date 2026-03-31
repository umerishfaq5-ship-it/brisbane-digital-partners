import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for reaching out! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">Contact Us</span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl leading-tight max-w-2xl">
              Let's start a conversation
            </h1>
            <p className="mt-6 opacity-80 max-w-xl text-lg leading-relaxed">
              Whether you've got a detailed brief or just a rough idea, we're happy to chat. No pressure, no obligations.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Name *</label>
                    <Input
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                    <Input
                      required
                      type="email"
                      maxLength={255}
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                  <Input
                    type="tel"
                    maxLength={20}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+61 4XX XXX XXX"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Tell us about your project *</label>
                  <Textarea
                    required
                    maxLength={2000}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="What are you looking to achieve?"
                  />
                </div>
                <Button variant="accent" size="lg" type="submit">
                  Send Message
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="lg:col-span-2"
            >
              <h2 className="font-heading font-bold text-2xl text-foreground mb-6">Get in touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-foreground">Location</p>
                    <p className="text-sm text-muted-foreground">Brisbane, QLD, Australia</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-foreground">Phone</p>
                    <p className="text-sm text-muted-foreground">+61 4XX XXX XXX</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-foreground">Email</p>
                    <p className="text-sm text-muted-foreground">hello@nexttab.com.au</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-sm text-foreground">Business Hours</p>
                    <p className="text-sm text-muted-foreground">Mon – Fri: 9am – 5pm AEST</p>
                  </div>
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
