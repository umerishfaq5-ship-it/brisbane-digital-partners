/**
 * ClientLogoStrip — "Trusted By" brand credibility section.
 * Displays client/industry logos in a subtle horizontal marquee.
 * Colors are intentionally muted — this should NOT compete visually with the hero.
 */

import { motion } from "framer-motion";

const clients = [
  { name: "MyFitnessCoach", abbr: "MFC", image: "partner_logo_mfc_1775912631967.png" },
  { name: "CircleIt",        abbr: "CI" },
  { name: "Vacancies",       abbr: "VAC" },
  { name: "Mr. Blackbird",   abbr: "MB" },
  { name: "Davidson Plumbing", abbr: "DP" },
  { name: "Coastal Living QLD", abbr: "CLQ" },
];

// Duplicate for seamless loop
const loopClients = [...clients, ...clients];

export default function ClientLogoStrip() {
  return (
    <section className="py-14 border-y border-border/50 overflow-hidden bg-background">
      <div className="container mb-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
          Trusted by Australian businesses
        </p>
      </div>

      {/* Marquee track */}
      <div className="relative flex overflow-hidden">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          className="flex gap-10 items-center whitespace-nowrap"
        >
          {loopClients.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl border border-border/40 bg-card/40 backdrop-blur-sm shrink-0 opacity-40 hover:opacity-100 hover:border-accent/40 hover:bg-card transition-all duration-500 group"
            >
              {client.image ? (
                <img 
                  src={`/assets/partner_logo_mfc.png`} 
                  alt={client.name} 
                  className="w-10 h-10 object-contain grayscale filter group-hover:grayscale-0 transition-all duration-500"
                />
              ) : (
                <div className="w-8 h-8 rounded-lg bg-primary/5 border border-primary/10 flex items-center justify-center shrink-0 group-hover:bg-accent/10 group-hover:border-accent/20 transition-all">
                  <span className="text-[10px] font-black text-primary group-hover:text-accent leading-none tracking-tighter">{client.abbr}</span>
                </div>
              )}
              <span className="text-sm font-bold text-foreground/50 group-hover:text-foreground font-heading tracking-tight transition-colors">
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
