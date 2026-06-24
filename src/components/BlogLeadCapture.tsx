import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const BlogLeadCapture = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const trigger = useCallback(() => {
    if (hasTriggered) return;
    setIsOpen(true);
    setHasTriggered(true);
  }, [hasTriggered]);

  useEffect(() => {
    if (hasTriggered) return;

    // Trigger at 30% scroll
    const handleScroll = () => {
      const scrollPct =
        window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight);
      if (scrollPct >= 0.3) trigger();
    };

    // Exit-intent trigger (mouse toward top of browser chrome)
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 10) trigger();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasTriggered, trigger]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setIsOpen(false), 2800);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center p-0 sm:p-4 bg-background/80 backdrop-blur-md"
        >
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ type: "spring", stiffness: 280, damping: 26 }}
            className="relative w-full sm:max-w-lg overflow-hidden border-t sm:border border-border/40 shadow-2xl bg-card sm:rounded-2xl"
          >
            {/* Gradient accent bar */}
            <div className="h-1.5 bg-gradient-to-r from-accent via-teal-DEFAULT to-accent/50" />

            {/* Australian trust badge strip */}
            <div className="flex items-center justify-center gap-3 px-6 py-2 bg-muted/60 border-b border-border/30 text-xs text-muted-foreground font-medium">
              <span>🇦🇺 Australian Business</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <span>✅ Free — No Credit Card</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <span>⚡ Delivered in 24 hrs</span>
            </div>

            <div className="p-7 sm:p-8">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute p-2 transition-colors rounded-full top-4 right-4 text-muted-foreground hover:bg-muted hover:text-foreground"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {!submitted ? (
                <>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center justify-center flex-shrink-0 w-11 h-11 rounded-xl bg-accent/10">
                      <Video className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-accent mb-0.5">Free Video Audit</p>
                      <p className="text-xs text-muted-foreground">Sydney · Melbourne · Brisbane · Perth</p>
                    </div>
                  </div>

                  <h3 className="mb-2 text-xl sm:text-2xl font-bold leading-tight font-heading text-foreground">
                    Is your website losing to competitors in Sydney or Melbourne?
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
                    Enter your URL and we'll send you a <strong className="text-foreground">60-second personalised video audit</strong> showing exactly why you're not ranking — and how to fix it.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-3">
                    <Input
                      type="url"
                      placeholder="🌐  Your Website URL (e.g. yourbusiness.com.au)"
                      required
                      className="h-12 text-sm"
                    />
                    <Input
                      type="email"
                      placeholder="📧  Your Business Email"
                      required
                      className="h-12 text-sm"
                    />
                    <Button
                      type="submit"
                      variant="accent"
                      className="w-full h-12 text-base font-bold rounded-xl"
                    >
                      Send Me My Free Video Audit →
                    </Button>
                  </form>

                  <p className="mt-4 text-[11px] text-center text-muted-foreground/50">
                    🔒 Zero spam. Used by 200+ Australian businesses. Unsubscribe any time.
                  </p>
                </>
              ) : (
                <div className="py-6 text-center">
                  <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10">
                    <span className="text-3xl">🎉</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold font-heading text-foreground">
                    Your Video Audit is on the way!
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Our team will record and send your personalised SEO video within <strong>24 hours</strong>. Check your inbox!
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BlogLeadCapture;
