import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

/** Normalise any URL input — handles naked domains, www, or full URLs */
function normaliseUrl(raw: string): string {
  const trimmed = raw.trim();
  if (!trimmed) return trimmed;
  // Already has a protocol
  if (/^https?:\/\//i.test(trimmed)) return trimmed;
  return `https://${trimmed}`;
}

export default function LeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("hasSeenAuditPopup");
    
    if (!hasSeenPopup) {
      // Trigger it 35 seconds after the very first load
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenAuditPopup", "true");
      }, 35000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg overflow-hidden bg-card rounded-3xl shadow-premium border border-border/50"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 p-2 text-muted-foreground hover:text-foreground transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>
            
            <div className="p-8 pb-0">
              <div className="w-12 h-12 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-foreground mb-3 leading-tight">
                Get Your Free <span className="text-gradient">Technical SEO Audit</span>
              </h2>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                Discover exactly what's holding your Australian business back from ranking #1. No automated junk, just real actionable advice.
              </p>
            </div>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setIsSubmitting(true);
                const normalisedUrl = normaliseUrl(website);
                try {
                  await Promise.all([
                    fetch("https://formsubmit.co/ajax/hamza@nexttabagency.com", {
                      method: "POST",
                      headers: { "Content-Type": "application/json", Accept: "application/json" },
                      body: JSON.stringify({
                        website: normalisedUrl,
                        email,
                        _subject: "New Free Tech Audit Request",
                      }),
                    }),
                    fetch("https://script.google.com/macros/s/AKfycbzQqu9re6Gsg-fuQxhzh3uJn1TG4wG60OVTcmfC8ja6fL1kk0H-qEcRJ3fubUa59DSU/exec", {
                      method: "POST",
                      mode: "no-cors",
                      body: JSON.stringify({ website: normalisedUrl, email, service: "Free SEO Audit" }),
                    })
                  ]);
                  toast.success("Audit request sent! We will evaluate your site shortly.");
                  setIsOpen(false);
                } catch {
                  toast.error("Failed to send request. Try again.");
                } finally {
                  setIsSubmitting(false);
                }
              }}
              className="p-8 pt-4 space-y-4"
            >
              <div>
                <input
                  type="text"
                  required
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder="yourwebsite.com.au"
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm text-foreground"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your Work Email"
                  className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-xl focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all shadow-sm text-foreground"
                />
              </div>
              <Button type="submit" disabled={isSubmitting} size="lg" variant="accent" className="w-full rounded-xl h-12 text-base font-semibold shadow-md">
                {isSubmitting ? "Sending..." : "Claim My Free Audit"} <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground">
                <ShieldCheck className="w-3.5 h-3.5 text-accent" />
                <span>We never spam or share your information.</span>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
