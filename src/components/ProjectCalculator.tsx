/**
 * ProjectCalculator — Australian-market bespoke quote section.
 *
 * Strategy: Based on top-tier AU agencies (Online Marketing Gurus,
 * Prosperity Media, Clearwater Agency), premium clients respond to
 * "Starting from $X" framing paired with a scoped-requirements form.
 * No cheap price tables — a strategic audit request flow instead.
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Shield, Clock, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbzQqu9re6Gsg-fuQxhzh3uJn1TG4wG60OVTcmfC8ja6fL1kk0H-qEcRJ3fubUa59DSU/exec";

const serviceOptions = [
  { id: "seo",    label: "SEO Audit & Strategy",       from: "1,200" },
  { id: "local",  label: "Local SEO Management",        from: "800" },
  { id: "web",    label: "Website Design & Build",      from: "4,500" },
  { id: "app",    label: "Mobile App Development",      from: "12,000" },
  { id: "bundle", label: "Full Digital Transformation", from: "8,000" },
];

const goals = [
  "Rank on Page 1 of Google",
  "Generate more qualified leads",
  "Launch a new product/service",
  "Redesign our website",
  "Build a mobile application",
  "Outrank local competitors",
];

const trustPoints = [
  { icon: Shield,    text: "No lock-in contracts" },
  { icon: Clock,     text: "Response within 24 hours" },
  { icon: CheckCircle, text: "No-obligation strategy session" },
  { icon: Zap,       text: "Audit delivered in 5 business days" },
];

export default function ProjectCalculator() {
  const [website, setWebsite]   = useState("");
  const [service, setService]   = useState("");
  const [goal, setGoal]         = useState("");
  const [email, setEmail]       = useState("");
  const [budget, setBudget]     = useState("");
  const [loading, setLoading]   = useState(false);

  const selectedService = serviceOptions.find((s) => s.id === service);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!website || !service || !email) {
      toast.error("Please fill in your website, service, and email.");
      return;
    }
    setLoading(true);
    try {
      await Promise.all([
        fetch("https://formsubmit.co/ajax/hamza@nexttabagency.com", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({
            website, service, goal, email, budget,
            _subject: `[Next Tab] New Strategy Audit Request — ${service}`,
          }),
        }),
        fetch(GOOGLE_SHEET_URL, {
          method: "POST",
          mode: "no-cors",
          body: JSON.stringify({ website, service, goal, email, budget }),
        }),
      ]);
      toast.success("Request received! Our team will send your complimentary audit within 24 hours.");
      setWebsite(""); setService(""); setGoal(""); setEmail(""); setBudget("");
    } catch {
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      aria-labelledby="calculator-heading"
      className="py-12 md:py-16 surface-warm relative overflow-hidden"
    >
      <div className="absolute inset-0 pattern-dots" />

      <div className="container relative z-10 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-5 border border-accent/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Bespoke Pricing
          </span>
          <h2
            id="calculator-heading"
            className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-4 leading-tight"
          >
            Request a Complimentary{" "}
            <span className="text-gradient">Strategy Audit</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            Premium digital strategy is never one-size-fits-all. Tell us about your project and we'll deliver a no-obligation audit with a scoped, transparent investment range — tailored to the Australian market.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* ── Left: Service Selector + Form ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="card-premium rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>

                {/* Website URL */}
                <div>
                  <label htmlFor="calc-website" className="block text-xs font-bold uppercase tracking-widest text-accent mb-2">
                    Your Website URL *
                  </label>
                  <input
                    id="calc-website"
                    type="url"
                    required
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://yourbusiness.com.au"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-foreground placeholder:text-muted-foreground/50"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                    Service Required *
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2.5">
                    {serviceOptions.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        onClick={() => setService(s.id)}
                        className={`
                          flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all duration-200 group
                          ${service === s.id
                            ? "border-accent bg-accent/5 shadow-sm"
                            : "border-border hover:border-accent/40 hover:bg-muted/50"
                          }
                        `}
                      >
                        <div className={`w-3 h-3 rounded-full border-2 mt-0.5 shrink-0 transition-colors ${service === s.id ? "border-accent bg-accent" : "border-border"}`} />
                        <div>
                          <p className="text-sm font-semibold text-foreground leading-tight">{s.label}</p>
                          <p className="text-[11px] text-muted-foreground mt-0.5">From A${s.from}/mo</p>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Primary Goal */}
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">
                    Primary Business Goal
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {goals.map((g) => (
                      <button
                        key={g}
                        type="button"
                        onClick={() => setGoal(goal === g ? "" : g)}
                        className={`
                          px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200
                          ${goal === g
                            ? "border-accent bg-accent text-white"
                            : "border-border text-muted-foreground hover:border-accent/40 hover:text-foreground"
                          }
                        `}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label htmlFor="calc-budget" className="block text-xs font-bold uppercase tracking-widest text-accent mb-2">
                    Monthly Budget Range (AUD)
                  </label>
                  <select
                    id="calc-budget"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-accent transition-all text-foreground"
                  >
                    <option value="">Select your investment range</option>
                    <option value="under-1500">Under A$1,500/mo</option>
                    <option value="1500-3000">A$1,500 – A$3,000/mo</option>
                    <option value="3000-6000">A$3,000 – A$6,000/mo</option>
                    <option value="6000-10000">A$6,000 – A$10,000/mo</option>
                    <option value="10000+">A$10,000+/mo (Enterprise)</option>
                  </select>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="calc-email" className="block text-xs font-bold uppercase tracking-widest text-accent mb-2">
                    Your Business Email *
                  </label>
                  <input
                    id="calc-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@yourbusiness.com.au"
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-foreground placeholder:text-muted-foreground/50"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  variant="accent"
                  size="lg"
                  className="w-full rounded-xl font-semibold text-base h-12"
                >
                  {loading ? "Sending..." : "Request My Free Strategy Audit"}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <p className="text-center text-xs text-muted-foreground/60">
                  No lock-in. No spam. Audit delivered within 5 business days.
                </p>
              </form>
            </div>
          </motion.div>

          {/* ── Right: Pricing Index + Trust ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Live Pricing Reference */}
            <div className="card-premium rounded-2xl p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-4">
                Investment Reference — Australian Market
              </p>
              <div className="space-y-4">
                {serviceOptions.map((s) => (
                  <div key={s.id} className="flex items-center justify-between gap-4">
                    <span className="text-sm text-foreground/70 leading-snug flex-1">{s.label}</span>
                    <span className="text-sm font-bold text-foreground whitespace-nowrap shrink-0">
                      From A${s.from}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-border/50">
                <p className="text-xs text-muted-foreground/60 leading-relaxed">
                  Indicative starting rates for the Australian market. Final investment is scoped to your specific requirements, competitive landscape, and growth objectives.
                </p>
              </div>
            </div>

            {/* Trust Signals */}
            <div className="card-premium rounded-2xl p-6">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-4">
                Our Commitment to You
              </p>
              <ul className="space-y-3">
                {trustPoints.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-3 text-sm text-foreground/70">
                    <Icon className="w-4 h-4 text-accent shrink-0" />
                    {text}
                  </li>
                ))}
              </ul>
            </div>

            {/* Selected service highlight */}
            {selectedService && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="rounded-2xl border border-accent/30 bg-accent/5 p-5"
              >
                <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-1">Selected</p>
                <p className="font-heading font-semibold text-foreground text-sm mb-1">{selectedService.label}</p>
                <p className="text-2xl font-heading font-black text-foreground">
                  A${selectedService.from}<span className="text-sm font-normal text-muted-foreground">/mo starting</span>
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
