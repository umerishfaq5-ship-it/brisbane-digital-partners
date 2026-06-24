import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Video, CheckCircle2 } from "lucide-react";

export default function LiveTeardownForm() {
  const [url, setUrl] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (url.trim()) {
      // In a real app, send to API. For now, show success.
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="surface-teal rounded-3xl p-8 md:p-12 text-center max-w-3xl mx-auto"
      >
        <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8 text-green-400" />
        </div>
        <h3 className="font-heading font-bold text-2xl text-primary-foreground mb-4">
          Request Received
        </h3>
        <p className="text-primary-foreground/70 mb-0">
          Our lead SEO expert will review {url} and send your private teardown video within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="surface-teal rounded-3xl p-8 md:p-12 relative overflow-hidden max-w-4xl mx-auto"
    >
      <div className="absolute inset-0 pattern-lines opacity-20" />
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-white/15">
            <Video className="w-3.5 h-3.5" /> Free Teardown
          </div>
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            Live Technical Teardown
          </h2>
          <p className="text-primary-foreground/70 text-lg leading-relaxed mb-6">
            Our lead SEO expert will manually review your domain and send you a private, jargon-free video breaking down exactly why your competitors are outranking you in Australia.
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
            <label htmlFor="domain-url" className="block text-sm font-semibold text-white mb-2">
              Enter your URL to request a 5-Minute Technical Teardown Video
            </label>
            <div className="flex flex-col gap-3">
              <input
                id="domain-url"
                type="url"
                placeholder="https://yourwebsite.com.au"
                required
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button type="submit" variant="hero-primary" size="lg" className="w-full rounded-xl">
                Request Video Teardown <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
            <p className="text-xs text-white/50 text-center mt-4">
              100% free. No sales pitch, just actionable technical advice.
            </p>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
