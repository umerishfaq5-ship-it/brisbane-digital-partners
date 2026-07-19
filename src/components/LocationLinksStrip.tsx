import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const locations = [
  { city: "Brisbane", href: "/locations/brisbane-seo", state: "QLD" },
  { city: "Gold Coast", href: "/locations/gold-coast-seo", state: "QLD" },
  { city: "Sunshine Coast", href: "/locations/sunshine-coast-seo", state: "QLD" },
  { city: "Sydney", href: "/locations/sydney-seo", state: "NSW" },
  { city: "Melbourne", href: "/locations/melbourne-seo", state: "VIC" },
  { city: "Perth", href: "/locations/perth-seo", state: "WA" },
  { city: "Adelaide", href: "/locations/adelaide-seo", state: "SA" },
  { city: "Canberra", href: "/locations/canberra-seo", state: "ACT" },
  { city: "Hobart", href: "/locations/hobart-seo", state: "TAS" },
];

interface LocationLinksStripProps {
  currentCity?: string;
  heading?: string;
  sub?: string;
  className?: string;
}

const LocationLinksStrip = ({
  currentCity,
  heading = "Serving Businesses Across Australia",
  sub = "We deliver expert digital marketing services for businesses in every major Australian city.",
  className = "",
}: LocationLinksStripProps) => (
  <section
    aria-labelledby="location-strip-heading"
    className={`py-14 md:py-16 surface-warm relative overflow-hidden ${className}`}
  >
    <div className="absolute inset-0 pattern-dots opacity-30" />
    <div className="container relative z-10">
      <div className="text-center mb-8">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-bold uppercase tracking-[0.15em] mb-3">
          <MapPin className="w-3 h-3" /> Where We Work
        </span>
        <h2
          id="location-strip-heading"
          className="font-heading font-bold text-2xl md:text-3xl text-foreground mb-2"
        >
          {heading}
        </h2>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">{sub}</p>
      </div>
      <div className="flex flex-wrap gap-3 justify-center max-w-3xl mx-auto">
        {locations.map(({ city, href, state }) => {
          const isActive = currentCity?.toLowerCase() === city.toLowerCase();
          return isActive ? (
            <span
              key={city}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-bold border border-accent shadow-sm shadow-accent/20 cursor-default"
            >
              <MapPin className="w-3.5 h-3.5" />
              {city}
              <span className="text-accent-foreground/60 text-[10px] font-medium">{state}</span>
            </span>
          ) : (
            <Link
              key={city}
              to={href}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border/60 text-sm font-semibold text-foreground/70 hover:text-accent hover:border-accent/40 hover:bg-accent/5 transition-all duration-200 shadow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-accent" />
              {city}
              <span className="text-muted-foreground text-[10px] font-medium">{state}</span>
            </Link>
          );
        })}
      </div>
    </div>
  </section>
);

export default LocationLinksStrip;
