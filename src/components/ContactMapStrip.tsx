import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail, Shield, Zap, Star } from "lucide-react";
import { toast } from "sonner";

/* ─────────────────────────────────────────────────────────────────
   Full-Width Contact + Map Conversion Zone
   Sits between <main> and <Footer> on every page (via Layout.tsx)
───────────────────────────────────────────────────────────────── */
const ContactMapStrip = () => {
  const [form, setForm] = useState({
    name: "",
    businessEmail: "",
    website: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
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
            _subject: "🚀 New SEO Audit Lead — Contact Map Strip",
            _template: "table",
          }),
        }),
        fetch(
          "https://script.google.com/macros/s/AKfycbzQqu9re6Gsg-fuQxhzh3uJn1TG4wG60OVTcmfC8ja6fL1kk0H-qEcRJ3fubUa59DSU/exec",
          {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(form),
          }
        ),
      ]);
      toast.success("🎉 Request received! We'll send your free SEO audit within 24 hours.");
      setForm({ name: "", businessEmail: "", website: "", service: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again or call us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      aria-labelledby="cta-map-heading"
      className="relative w-full overflow-hidden"
      style={{ minHeight: 560 }}
    >
      {/* ── Google Map (full bleed background) ───────────────────── */}
      <div className="absolute inset-0 z-0">
        <iframe
          title="Next Tab Agency — Eagleby, Brisbane location map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3537.2!2d153.208!3d-27.7105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQyJzM3LjgiUyAxNTMCsDEyJzI4LjgiRQ!5e0!3m2!1sen!2sau!4v1700000000000!5m2!1sen!2sau"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: "grayscale(100%) brightness(0.55) contrast(1.1)",
            minHeight: 560,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          aria-label="Google Maps showing Next Tab Agency office in Eagleby, Brisbane"
        />
        {/* Overlay gradient to blend with site theme */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 via-transparent to-transparent" />
      </div>

      {/* ── Content container ─────────────────────────────────────── */}
      <div className="relative z-10 container py-16 md:py-20 flex flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-16">

        {/* ── Left: Hero copy + contact details ────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1 flex flex-col justify-center max-w-lg"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-5 border border-accent/30 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            Free SEO Audit — Brisbane's #1 Team
          </span>

          <h2
            id="cta-map-heading"
            className="font-heading font-black text-3xl md:text-4xl lg:text-[2.75rem] text-white leading-[1.1] mb-3"
          >
            Stop Guessing. Start Growing.
            <span className="block text-gradient">Get Your Free Brisbane SEO Blueprint.</span>
          </h2>

          <p className="font-heading font-bold text-xl text-white/80 mb-4 leading-tight">
            20 Specialists. 1 Strategy. Infinite Growth.
          </p>

          <p className="text-white/65 text-base leading-relaxed mb-8 max-w-md">
            Get a free, no-BS technical SEO audit from Brisbane's most experienced
            digital team. We'll show you exactly where you're losing rankings —
            and how to fix it in 30 days.
          </p>

          {/* Trust signals */}
          <div className="space-y-3 mb-8">
            {[
              { icon: Shield, text: "No lock-in contracts — ever" },
              { icon: Zap, text: "Audit delivered within 24–48 hours" },
              { icon: Star, text: "4.9★ rated by 200+ Australian businesses" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0">
                  <Icon className="w-3.5 h-3.5 text-accent" />
                </div>
                <span className="text-white/70 text-sm">{text}</span>
              </div>
            ))}
          </div>

          {/* Quick contact */}
          <div className="space-y-2.5 pt-6 border-t border-white/15">
            <p className="text-xs text-white/40 uppercase tracking-widest font-semibold mb-3">Or reach us directly</p>
            <a
              href="tel:+61491000094"
              className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors text-sm group"
            >
              <Phone className="w-4 h-4 text-accent/70 group-hover:text-accent" />
              0491 000 094
            </a>
            <a
              href="mailto:info@nexttabagency.com"
              className="flex items-center gap-3 text-white/70 hover:text-accent transition-colors text-sm group"
            >
              <Mail className="w-4 h-4 text-accent/70 group-hover:text-accent" />
              info@nexttabagency.com
            </a>
            <div className="flex items-start gap-3 text-white/50 text-sm">
              <MapPin className="w-4 h-4 text-accent/70 mt-0.5 shrink-0" />
              Taylor Street, Eagleby QLD 4207, Brisbane
            </div>
          </div>
        </motion.div>

        {/* ── Right: Lead Form card ─────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="w-full lg:w-[480px] shrink-0"
        >
          <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 overflow-hidden">
            {/* Gradient accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary/60" />

            <div className="p-7 md:p-8">
              <div className="mb-6">
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-1">
                  It's 100% free
                </p>
                <h3 className="font-heading font-bold text-xl md:text-2xl text-foreground leading-tight">
                  Get My Free SEO Audit
                </h3>
                <p className="text-sm text-muted-foreground mt-1.5">
                  Fill in your details and we'll get back to you within one business day.
                </p>
              </div>

              <form
                id="contact-map-strip-form"
                onSubmit={handleSubmit}
                className="space-y-4"
                noValidate
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="cms-name"
                    className="text-xs font-semibold text-foreground/80 mb-1.5 block"
                  >
                    Your Name *
                  </label>
                  <input
                    id="cms-name"
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Smith"
                    className="w-full h-11 rounded-xl border border-border/60 bg-background px-4 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                {/* Business Email */}
                <div>
                  <label
                    htmlFor="cms-email"
                    className="text-xs font-semibold text-foreground/80 mb-1.5 block"
                  >
                    Business Email *
                    <span className="ml-2 text-[10px] text-muted-foreground font-normal normal-case">
                      (business address preferred)
                    </span>
                  </label>
                  <input
                    id="cms-email"
                    type="email"
                    required
                    maxLength={255}
                    value={form.businessEmail}
                    onChange={(e) => setForm({ ...form, businessEmail: e.target.value })}
                    placeholder="you@yourbusiness.com.au"
                    className="w-full h-11 rounded-xl border border-border/60 bg-background px-4 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                {/* Website URL */}
                <div>
                  <label
                    htmlFor="cms-website"
                    className="text-xs font-semibold text-foreground/80 mb-1.5 block"
                  >
                    Your Website URL *
                  </label>
                  <input
                    id="cms-website"
                    type="url"
                    required
                    maxLength={500}
                    value={form.website}
                    onChange={(e) => setForm({ ...form, website: e.target.value })}
                    placeholder="https://yourbusiness.com.au"
                    className="w-full h-11 rounded-xl border border-border/60 bg-background px-4 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  />
                </div>

                {/* Service Dropdown */}
                <div>
                  <label
                    htmlFor="cms-service"
                    className="text-xs font-semibold text-foreground/80 mb-1.5 block"
                  >
                    Service Needed
                  </label>
                  <select
                    id="cms-service"
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full h-11 rounded-xl border border-border/60 bg-background px-4 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                  >
                    <option value="">Select a service...</option>
                    <option value="seo-audit">SEO Audit & Strategy</option>
                    <option value="local-seo">Local SEO (Map Pack)</option>
                    <option value="woocommerce">WooCommerce Development</option>
                    <option value="ppc">PPC / Google Ads</option>
                    <option value="web-dev">Custom Web Development</option>
                    <option value="social-ads">Social Media Ads</option>
                    <option value="wordpress">WordPress Development</option>
                    <option value="shopify">Shopify Development</option>
                    <option value="not-sure">Not sure yet — need advice</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="cms-message"
                    className="text-xs font-semibold text-foreground/80 mb-1.5 block"
                  >
                    Quick Message (optional)
                  </label>
                  <textarea
                    id="cms-message"
                    rows={3}
                    maxLength={1000}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us briefly about your business goals..."
                    className="w-full rounded-xl border border-border/60 bg-background px-4 py-3 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                  />
                </div>

                {/* CTA */}
                <button
                  id="cms-submit-btn"
                  type="submit"
                  disabled={submitting}
                  className="w-full h-12 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg shadow-accent/25 hover:shadow-accent/40 disabled:opacity-60 disabled:cursor-not-allowed group"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-accent-foreground/30 border-t-accent-foreground animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Get My Free SEO Audit
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-center text-[11px] text-muted-foreground leading-relaxed">
                  🔒 100% confidential · No spam · No lock-in contracts · Brisbane-based team
                </p>
              </form>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactMapStrip;
