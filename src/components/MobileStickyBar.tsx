/**
 * MobileStickyBar — persistent CTA bar for mobile users.
 * Visible only on screens < lg breakpoint.
 * Fades in after the user has scrolled past the hero fold (300px).
 * Provides a persistent conversion path when the in-page CTAs are out of view.
 */

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight } from "lucide-react";

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
        >
          {/* Top border accent */}
          <div className="h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

          <div className="glass border-t border-border/50 px-4 py-3 flex items-center gap-3">
            <a
              href="tel:0491000094"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-semibold flex-1 justify-center hover:bg-primary/10 transition-colors"
              aria-label="Call us"
            >
              <Phone className="w-4 h-4 shrink-0" />
              Call Us
            </a>
            <Link
              to="/contact"
              className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-accent text-accent-foreground text-sm font-semibold flex-1 justify-center hover:bg-accent/90 transition-colors shadow-sm"
            >
              Free Consultation
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>

          {/* Safe area padding for iOS home indicator */}
          <div className="bg-card/95 backdrop-blur-sm h-safe-bottom" style={{ height: "env(safe-area-inset-bottom)" }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
