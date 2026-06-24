import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ShieldCheck, MapPin } from "lucide-react";

interface EntityTrustAccordionProps {
  city: string;
}

export default function EntityTrustAccordion({ city }: EntityTrustAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: `How long does it take to rank in ${city}'s competitive legal/tradie niches?`,
      a: `Highly competitive niches in ${city} generally require 3 to 6 months of consistent, high-velocity technical SEO and link building to see page-one movement. We focus heavily on Google Business Profile (GBP) dominance to capture the local 'near me' intent quickly while the broader organic rankings climb.`,
    },
    {
      q: "Do you manage GBP listings for multiple Australian locations simultaneously?",
      a: "Yes. Multi-location local SEO is a core competency. If you operate across multiple states or have several depots, we structure parent-child location schema and manage citations individually so that each location ranks independently in its local Map Pack.",
    },
    {
      q: "How does Next Tab handle technical SEO differently for the Australian market?",
      a: "We don't rely on automated plugins. We manually engineer Core Web Vitals optimizations and structure data according to strict entity SEO principles. Because the Australian market often has less competition than the US, precise technical execution combined with locally relevant backlinks provides an outsized competitive advantage.",
    },
  ];

  return (
    <div className="surface-warm rounded-3xl p-8 md:p-12 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-50" />
      <div className="relative z-10 max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-accent/10 mb-4 text-accent">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-4">
            Localised Entity Trust
          </h2>
          <p className="text-muted-foreground">
            Frequently asked questions about our SEO strategy in {city} and across Australia.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${
                  isOpen ? "bg-card border-accent/30 shadow-sm" : "bg-card/50 border-border hover:border-accent/30"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <span className="font-heading font-semibold pr-4 text-foreground text-sm md:text-base">
                    {faq.q}
                  </span>
                  <div
                    className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-1 text-sm text-muted-foreground leading-relaxed">
                        <div className="pt-4 border-t border-border/50">
                          {faq.a}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
