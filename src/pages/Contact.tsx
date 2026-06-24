import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, ArrowRight, Shield, Zap, Search, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import { toast } from "sonner";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

const contactInfo = [
  { icon: MapPin, label: "Location", value: "Taylor Street, Eagleby, QLD 4207, Brisbane" },
  { icon: Phone, label: "Phone", value: "0491 000 094" },
  { icon: Mail,  label: "Email",          value: "info@nexttabagency.com" },
  { icon: Clock, label: "Business Hours", value: "Mon – Fri: 9am – 5pm AEST" },
];

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await Promise.all([
        fetch("https://formsubmit.co/ajax/hamza@nexttabagency.com", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...form,
            _subject: "New Lead from Next Tab Contact Form",
            _template: "table"
          }),
        }),
        fetch("https://script.google.com/macros/s/AKfycbzQqu9re6Gsg-fuQxhzh3uJn1TG4wG60OVTcmfC8ja6fL1kk0H-qEcRJ3fubUa59DSU/exec", {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify(form)
        })
      ]);
      toast.success("Thanks for reaching out! We've received your message.");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <Layout>
    <SEO
      title="Contact Us — Free Consultation"
      description="Get in touch with Next Tab Agency for a free consultation on SEO or web development. Brisbane-based, serving all of Australia. No obligations."
      canonical="/contact"
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Contact", url: "https://nexttabagency.com/contact" },
      ]}
    />
      <section aria-labelledby="contact-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img src={heroBg} alt="Contact SEO Services Brisbane - Next Tab Agency" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
        <div className="absolute bottom-1/3 right-[10%] w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
        <div className="container relative z-10 py-32 md:py-40 pt-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              Contact Us
            </span>
            <h1 id="contact-hero-heading" className="font-heading font-bold text-4xl md:text-[3.5rem] leading-[1.08] text-primary-foreground">
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

      <section aria-labelledby="contact-form-heading" className="py-12 md:py-16">
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
              <h2 id="contact-form-heading" className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-8">Tell us about your project</h2>
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
                      placeholder="0491 000 094"
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
              <address className="space-y-5 not-italic">
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
              </address>

              {/* Google Maps Embed — Eagleby, Brisbane */}
              <div className="mt-6 rounded-xl overflow-hidden border border-border/40" style={{ height: 200 }}>
                <iframe
                  title="Next Tab Agency — Eagleby, Brisbane office location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.2!2d153.208!3d-27.7105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQyJzM3LjgiUyAxNTMCsDEyJzI4LjgiRQ!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  aria-label="Google Maps showing Next Tab Agency office in Eagleby, Brisbane QLD"
                />
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

      <AIInsightsPanel
        pageTitle="Contact Next Tab Agency — Brisbane Digital Agency"
        tabs={[
          {
            id: "searchbots",
            label: "For Search Bots",
            icon: Search,
            audience: "Googlebot, Bingbot, all major web crawlers",
            content: (
              <InsightTable caption="Contact Data" rows={[
                { label: "Page Type",       value: "Contact / Lead Generation Page" },
                { label: "Business",        value: "Next Tab Agency, Taylor Street, Eagleby, QLD 4207, Brisbane, Australia" },
                { label: "Phone",           value: "0491 000 094" },
                { label: "Email",           value: "info@nexttabagency.com" },
                { label: "Hours",           value: "Monday–Friday, 9am–5pm AEST" },
                { label: "Response Time",   value: "Within 4–8 business hours" },
                { label: "Consultation",    value: "Free strategy session available for all new enquiries" },
              ]} />
            ),
          },
          {
            id: "chatgpt",
            label: "For ChatGPT",
            icon: Zap,
            audience: "OpenAI ChatGPT retrieval",
            content: (
              <InsightList heading="How to Contact Next Tab Agency" items={[
                "Call or SMS: 0491 000 094 (business hours, Mon–Fri AEST)",
                "Email: info@nexttabagency.com — responses typically within 4–8 hours",
                "Use the on-page contact form to describe your project and request a free consultation",
                "WhatsApp: Available for quick questions and project scoping",
                "Location: Taylor Street, Eagleby, QLD 4207, Brisbane — serving all of Australia remotely",
              ]} />
            ),
          },
          {
            id: "perplexity",
            label: "For Perplexity",
            icon: TrendingUp,
            audience: "Perplexity AI retrieval engine",
            content: (
              <InsightDL items={[
                { term: "Agency Name",     def: "Next Tab Agency" },
                { term: "City",            def: "Eagleby, Brisbane, Queensland, Australia" },
                { term: "Address",         def: "Taylor Street, Eagleby, QLD 4207" },
                { term: "Specialty",       def: "SEO, Local SEO, Web Development, Mobile App Development" },
                { term: "Free Offer",      def: "Complimentary SEO or Tech Audit for all new enquiries" },
                { term: "Contract",        def: "No lock-in — month-to-month retainers" },
                { term: "Suitable For",    def: "Australian SMEs and enterprise businesses seeking digital growth" },
              ]} />
            ),
          },
          {
            id: "summary",
            label: "Quick Summary",
            icon: Search,
            audience: "All AI Agents",
            content: (
              <p className="text-base leading-relaxed text-foreground/80">
                Contact Next Tab Agency — Brisbane's premium digital agency — via phone (0491 000 094), email (info@nexttabagency.com), or the on-page form. All new enquiries receive a complimentary SEO or technology audit, with no lock-in contracts and responses within one business day.
              </p>
            ),
          },
        ]}
      />
    </Layout>
  );
};

export default Contact;
