import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, Star, CheckCircle, Clock, MapPin, ShieldCheck, ArrowRight, Heart, Users, Home, Thermometer, Wrench, Droplets, Flame } from "lucide-react";

/**
 * Concept builds: fictional businesses designed by Next Tab Agency to show what we build for
 * tradies, NDIS providers and US home-service companies. Clearly labelled, noindex.
 * Phone numbers use reserved fictional ranges (ACMA 0491 570 xxx, US 555-01xx).
 */

type Demo = {
  slug: string;
  name: string;
  tagline: string;
  place: string;
  phone: string;
  tel: string;
  color: string;      // primary brand colour
  soft: string;       // light tint
  heroImg: string;
  heroTitle: string;
  heroSub: string;
  badges: string[];
  services: { icon: any; title: string; desc: string }[];
  areas: string[];
  reviews: { name: string; text: string }[];
  rating: string;
  reviewCount: string;
  cta: string;
  formTitle: string;
  formFields: string[];
  footer: string;
};

export const demos: Record<string, Demo> = {
  "riverbend-plumbing": {
    slug: "riverbend-plumbing",
    name: "Riverbend Plumbing",
    tagline: "Licensed plumbers for Logan & Beenleigh",
    place: "Logan, QLD",
    phone: "0491 570 006",
    tel: "+61491570006",
    color: "#0b5cab",
    soft: "#e8f1fb",
    heroImg: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=1600&fm=webp&fit=crop",
    heroTitle: "Blocked drain or burst pipe? We can be there today.",
    heroSub: "Local, licensed plumbers covering Beenleigh, Eagleby, Springwood and all of Logan. Upfront price before we start. No call-out surprises.",
    badges: ["QBCC licensed", "Upfront pricing", "7am–7pm, 7 days"],
    services: [
      { icon: Droplets, title: "Blocked drains", desc: "CCTV camera inspection and jetting. We show you the footage before we quote." },
      { icon: Flame, title: "Hot water systems", desc: "Gas, electric and heat-pump. Same-day replacement on most models." },
      { icon: Wrench, title: "Leaks & burst pipes", desc: "Leak detection without ripping out walls. Insurance reports supplied." },
      { icon: Home, title: "Bathroom & kitchen", desc: "Tapware, toilets, renovations and rough-ins for builders." },
    ],
    areas: ["Beenleigh", "Eagleby", "Springwood", "Loganholme", "Shailer Park", "Browns Plains", "Waterford", "Yarrabilba"],
    reviews: [
      { name: "Sarah K., Eagleby", text: "Hot water died on a Sunday. They texted a price first, turned up within two hours and had it running by lunch." },
      { name: "Daniel P., Springwood", text: "Showed me the camera footage of the drain before doing anything. Honest and tidy." },
      { name: "Mel T., Beenleigh", text: "Fixed a leak another plumber said needed the wall opened. Took 40 minutes." },
    ],
    rating: "4.9",
    reviewCount: "126",
    cta: "Call for a same-day plumber",
    formTitle: "Get a price by text",
    formFields: ["Your name", "Mobile", "Suburb", "What's the problem?"],
    footer: "Riverbend Plumbing · QBCC 0000000 · Servicing the City of Logan",
  },
  "brightpath-support": {
    slug: "brightpath-support",
    name: "BrightPath Support",
    tagline: "NDIS supports in Logan, Ipswich & Brisbane South",
    place: "Logan, QLD",
    phone: "0491 570 110",
    tel: "+61491570110",
    color: "#6b3fa0",
    soft: "#f3eefa",
    heroImg: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1600&fm=webp&fit=crop",
    heroTitle: "Support that fits your plan and your week.",
    heroSub: "Daily living, community access and respite for NDIS participants across Logan, Ipswich and Brisbane South. Talk to a real person about what you need. No pressure, no lock-in.",
    badges: ["Registered NDIS provider (demo)", "Self, plan & agency managed", "Female & male support workers"],
    services: [
      { icon: Home, title: "Daily living", desc: "Help at home with routines, meals, personal care and household tasks." },
      { icon: Users, title: "Community access", desc: "Getting to work, shops, sport, appointments and social groups." },
      { icon: Heart, title: "Short-term respite", desc: "Planned breaks for families and carers, in home or out and about." },
      { icon: ShieldCheck, title: "Support coordination", desc: "Help using your plan, finding providers and preparing for reviews." },
    ],
    areas: ["Logan Central", "Beenleigh", "Springwood", "Browns Plains", "Ipswich", "Goodna", "Sunnybank", "Mount Gravatt"],
    reviews: [
      { name: "Parent of participant, Browns Plains", text: "They matched us with a worker who actually shares my son's interests. He looks forward to Tuesdays now." },
      { name: "Support coordinator, Ipswich", text: "Fast replies, clear service agreements and invoices that match the plan. Easy to refer to." },
      { name: "Participant, Springwood", text: "I can text my worker directly to change times. Nobody made me feel like a number." },
    ],
    rating: "5.0",
    reviewCount: "48",
    cta: "Ask about available times",
    formTitle: "Make an enquiry",
    formFields: ["Your name", "Phone or email", "Participant's suburb", "Supports you're looking for"],
    footer: "BrightPath Support · Concept site · Accessible design (WCAG 2.1 AA contrast, keyboard friendly)",
  },
  "lonestar-air": {
    slug: "lonestar-air",
    name: "Lone Star Air & Heat",
    tagline: "AC repair & installation in Austin, TX",
    place: "Austin, TX",
    phone: "(512) 555-0142",
    tel: "+15125550142",
    color: "#c2410c",
    soft: "#fff3eb",
    heroImg: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=1600&fm=webp&fit=crop",
    heroTitle: "AC out in Texas heat? Same-day repair across Austin.",
    heroSub: "Family-run HVAC company serving Austin, Round Rock and Cedar Park. Flat-rate pricing, financing on new systems, and techs who explain the fix before they start.",
    badges: ["TACLA licensed (demo)", "Flat-rate pricing", "Financing available"],
    services: [
      { icon: Thermometer, title: "AC repair", desc: "Most repairs finished on the first visit. Trucks stocked with common parts." },
      { icon: Home, title: "New system installs", desc: "Right-sized systems with load calculation, not guesswork. Rebates handled." },
      { icon: Flame, title: "Heating & heat pumps", desc: "Furnace and heat-pump service before the cold snaps hit." },
      { icon: ShieldCheck, title: "Maintenance plans", desc: "Two tune-ups a year, priority booking and 15% off repairs." },
    ],
    areas: ["Austin", "Round Rock", "Cedar Park", "Pflugerville", "Georgetown", "Leander", "Kyle", "Buda"],
    reviews: [
      { name: "Jessica R., Round Rock", text: "102 degrees outside and they had us cool again by dinner. Price matched the quote exactly." },
      { name: "Mark D., Cedar Park", text: "Talked me out of a full replacement I didn't need. That's why they'll get the install when it's time." },
      { name: "Priya S., Austin", text: "Booked online at 8am, tech arrived at 11. Clear, polite, no upsell." },
    ],
    rating: "4.8",
    reviewCount: "312",
    cta: "Book a same-day visit",
    formTitle: "Schedule service",
    formFields: ["Name", "Phone", "ZIP code", "What's going on with your system?"],
    footer: "Lone Star Air & Heat · Concept site · Serving Greater Austin",
  },
};

const DemoSite = ({ slug }: { slug: string }) => {
  const d = demos[slug];
  const Stars = () => (
    <span className="inline-flex" aria-label={`${d.rating} stars`}>
      {[0, 1, 2, 3, 4].map((i) => <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />)}
    </span>
  );
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <Helmet>
        <title>{`${d.name} – Concept website by Next Tab Agency`}</title>
        <meta name="robots" content="noindex, follow" />
        <meta name="description" content={`Concept website for a fictional ${d.tagline.toLowerCase()} business, designed and built by Next Tab Agency.`} />
      </Helmet>

      {/* Honest label */}
      <div className="bg-slate-900 text-white text-xs sm:text-sm px-4 py-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center">
        <span><strong>Concept build</strong> by Next Tab Agency. {d.name} is a fictional business used to show our work.</span>
        <Link to="/portfolio/" className="underline font-semibold">Back to portfolio</Link>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 min-w-0">
            <span className="w-9 h-9 rounded-lg grid place-items-center text-white font-black shrink-0" style={{ background: d.color }}>{d.name[0]}</span>
            <div className="min-w-0">
              <p className="font-extrabold leading-tight truncate">{d.name}</p>
              <p className="text-[11px] text-slate-500 truncate">{d.tagline}</p>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-600">
            <a href="#services">Services</a><a href="#areas">Areas</a><a href="#reviews">Reviews</a><a href="#contact">Contact</a>
          </nav>
          <a href={`tel:${d.tel}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm font-bold shrink-0" style={{ background: d.color }}>
            <Phone className="w-4 h-4" /> <span className="hidden sm:inline">{d.phone}</span><span className="sm:hidden">Call</span>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={d.heroImg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ background: `linear-gradient(90deg, ${d.color}f2 0%, ${d.color}cc 45%, ${d.color}33 100%)` }} />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-5 gap-10 items-center">
          <div className="md:col-span-3 text-white">
            <p className="inline-flex items-center gap-2 text-sm font-semibold bg-white/15 rounded-full px-3 py-1 mb-5">
              <Stars /> {d.rating} from {d.reviewCount} Google reviews
            </p>
            <h1 className="text-3xl md:text-5xl font-black leading-tight mb-5">{d.heroTitle}</h1>
            <p className="text-lg text-white/85 mb-7 max-w-xl">{d.heroSub}</p>
            <div className="flex flex-wrap gap-3">
              <a href={`tel:${d.tel}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white font-bold" style={{ color: d.color }}>
                <Phone className="w-5 h-5" /> {d.cta}
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-white/70 text-white font-bold">
                {d.formTitle} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <ul className="flex flex-wrap gap-x-5 gap-y-2 mt-7 text-sm text-white/90">
              {d.badges.map((b) => <li key={b} className="flex items-center gap-1.5"><CheckCircle className="w-4 h-4" />{b}</li>)}
            </ul>
          </div>
          <form id="contact" onSubmit={(e) => e.preventDefault()} className="md:col-span-2 bg-white rounded-2xl shadow-2xl p-6">
            <p className="font-extrabold text-xl mb-1">{d.formTitle}</p>
            <p className="text-sm text-slate-500 mb-4 flex items-center gap-1.5"><Clock className="w-4 h-4" /> Reply within 15 minutes in business hours</p>
            {d.formFields.map((f, i) => (
              <label key={f} className="block mb-3">
                <span className="text-xs font-semibold text-slate-600">{f}</span>
                {i === d.formFields.length - 1
                  ? <textarea rows={3} className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />
                  : <input className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm" />}
              </label>
            ))}
            <button type="submit" className="w-full py-3 rounded-lg text-white font-bold" style={{ background: d.color }}>Send</button>
            <p className="text-[11px] text-slate-400 mt-2 text-center">Demo form: nothing is sent.</p>
          </form>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-black mb-2">What we do</h2>
        <p className="text-slate-500 mb-8">One page per service on the full site, so Google can match each search to the right page.</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {d.services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-shadow">
              <span className="w-11 h-11 rounded-xl grid place-items-center mb-4" style={{ background: d.soft, color: d.color }}><s.icon className="w-6 h-6" /></span>
              <h3 className="font-bold text-lg mb-1">{s.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" style={{ background: d.soft }}>
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-black">What locals say</h2>
            <p className="text-sm font-semibold flex items-center gap-2"><Stars /> {d.rating} · {d.reviewCount} reviews (sample)</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {d.reviews.map((r) => (
              <figure key={r.name} className="bg-white rounded-2xl p-6 shadow-sm">
                <Stars />
                <blockquote className="mt-3 text-slate-700 leading-relaxed">"{r.text}"</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-slate-500">{r.name}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Areas */}
      <section id="areas" className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-black mb-6">Areas we cover</h2>
        <div className="flex flex-wrap gap-3">
          {d.areas.map((a) => (
            <span key={a} className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border border-slate-200 text-sm font-semibold">
              <MapPin className="w-4 h-4" style={{ color: d.color }} /> {a}
            </span>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="text-white" style={{ background: d.color }}>
        <div className="max-w-6xl mx-auto px-4 py-12 flex flex-wrap items-center justify-between gap-6">
          <p className="text-2xl font-black">Need help today in {d.place}?</p>
          <a href={`tel:${d.tel}`} className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white font-bold" style={{ color: d.color }}>
            <Phone className="w-5 h-5" /> {d.phone}
          </a>
        </div>
      </section>

      <footer className="bg-slate-900 text-slate-400 text-sm">
        <div className="max-w-6xl mx-auto px-4 py-8 flex flex-wrap items-center justify-between gap-4">
          <p>{d.footer}</p>
          <p>Designed &amp; built by <Link to="/" className="text-white font-semibold underline">Next Tab Agency</Link></p>
        </div>
      </footer>

      {/* Mobile call bar */}
      <a href={`tel:${d.tel}`} className="md:hidden fixed bottom-0 inset-x-0 z-40 flex items-center justify-center gap-2 py-3 text-white font-bold" style={{ background: d.color }}>
        <Phone className="w-5 h-5" /> Call {d.phone}
      </a>
    </div>
  );
};

export default DemoSite;
