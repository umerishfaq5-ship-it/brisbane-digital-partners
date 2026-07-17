import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Users, Award, Heart, MapPin, GraduationCap, Handshake, Search, Zap, TrendingUp, ShieldCheck, Star } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

/* ─── Audit Booking Form (15-min call) ───────────────────────── */
const AuditForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", website: "" });
  const [sending, setSending] = useState(false);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("https://formsubmit.co/ajax/hamza@nexttabagency.com", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: "New 15-Min Audit Request — About Page", _template: "table" }),
      });
      toast.success("Booked! We'll confirm your audit time within 2 hours.");
      setForm({ name: "", email: "", phone: "", website: "" });
    } catch { toast.error("Something went wrong. Please try again."); }
    setSending(false);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <Input
        placeholder="Your Full Name"
        value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
        required
        className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
      />
      <Input
        type="email" placeholder="Business Email Address"
        value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
        required
        className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
      />
      <Input
        type="tel" placeholder="Phone (Optional)"
        value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
        className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
      />
      <Input
        placeholder="Your Website URL"
        value={form.website} onChange={e => setForm(f => ({ ...f, website: e.target.value }))}
        className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-accent"
      />
      <Button type="submit" variant="accent" className="w-full rounded-xl font-bold" disabled={sending}>
        {sending ? "Booking..." : "Book My Free 15-Min Audit →"}
      </Button>
      <p className="text-[10px] text-primary-foreground/40 text-center">No lock-in. No sales pressure. Just actionable insights.</p>
    </form>
  );
};

/* ─── Team Data ─────────────────────────────────────────────────────────── */
const divisions = [
  {
    name: "Leadership & Strategy Hub",
    color: "from-primary to-primary/70",
    members: [
      { name: "Hamza Ishfaq",    role: "Founder & CEO",              expertise: "ROI-Driven Growth Frameworks for Australian SMEs" },
      { name: "Sarah McLellan",  role: "Operations Director",        expertise: "Technical Precision & High-Level Project Management" },
    ],
  },
  {
    name: "Search & Growth Department",
    color: "from-teal to-ocean",
    members: [
      { name: "Marcus Thorne",   role: "Senior Technical SEO Auditor", expertise: "Core Web Vitals & Schema Specialist" },
      { name: "Elena Rodriguez", role: "Head of Topical Authority",     expertise: "Semantic SEO & Internal Linking Silos" },
      { name: "Liam O'Connor",   role: "Local SEO & GMB Specialist",    expertise: "Brisbane/Gold Coast Map Pack Dominance" },
      { name: "Priya Das",       role: "SEO Data Analyst",              expertise: "Search Traffic Data & Growth Roadmaps" },
      { name: "Ethan Hunt",      role: "PPC & Meta Ads Strategist",     expertise: "Conversion-Optimised Ad Bidding" },
      { name: "Nathaniel Wu",    role: "Digital PR & Link Strategist",  expertise: "High-Authority AU Domain Mentions" },
      { name: "Chloe Bennett",   role: "SEO Quality Assurance",         expertise: "On-Page Optimisation & Latest Updates" },
      { name: "Aiden Brooks",    role: "Local Entity Specialist",       expertise: "AU Local Citation Networks" },
    ],
  },
  {
    name: "Engineering & UX Lab",
    color: "from-ocean to-teal-light",
    members: [
      { name: "Rohan Gupta",     role: "Lead Web Developer",           expertise: "Antigravity Framework & React Builds" },
      { name: "Isabella Rossi",  role: "Senior WooCommerce Architect",  expertise: "AU Shipping & Payment Integrations" },
      { name: "Tom Harrison",    role: "Head of Website Performance",   expertise: "<1s Page Load & Server Optimisation" },
      { name: "Yuki Tanaka",     role: "UI/UX Conversion Expert",       expertise: "User Journeys That Lead to 'Add to Cart'" },
      { name: "Oliver Smith",    role: "App Development Lead",          expertise: "iOS/Android Cross-Platform Solutions" },
      { name: "Sophie Taylor",   role: "Shopify Migration Expert",      expertise: "Moving Retailers to WooCommerce Ecosystems" },
    ],
  },
  {
    name: "Content & Success Squad",
    color: "from-eucalyptus to-teal",
    members: [
      { name: "Grace Williams",  role: "Head of Content Strategy",      expertise: "AU Consumer Psychology & Brand Voice" },
      { name: "Noah Walker",     role: "Senior Technical SEO Writer",   expertise: "2,500-Word Topical Authority Pillars" },
      { name: "Ava Martinez",    role: "Client Success Executive",       expertise: "Daily Updates & Transparency" },
      { name: "Mia Henderson",   role: "Content Marketing Manager",     expertise: "Cross-Channel Blog Promotion" },
    ],
  },
];


const usps = [
  {
    icon: ShieldCheck,
    title: "Fast Turnaround, No Fluff",
    desc: "Most Brisbane agencies take 3 months to start delivering. We begin with wins in week one. Clear deliverables, rapid execution, transparent reporting.",
  },
  {
    icon: Search,
    title: "No-Backlink Ranking Strategy",
    desc: "While competitors chase spammy link schemes, we rank through technical excellence — site architecture, entity authority, and content siloing. Sustainable, penalty-proof rankings.",
  },
  {
    icon: MapPin,
    title: "100% Local Australian Support",
    desc: "Your account manager, strategist, and developer are all in Australia. No offshore outsourcing. No 48-hour response delays. Call us, email us, Slack us.",
  },
];

const milestones = [
  { year: "2019", title: "Founded in Brisbane", desc: "Started with a vision to bring honest, expert digital services to Australian businesses." },
  { year: "2020", title: "First Mobile App Launched", desc: "Shipped MyFitnessCoach to both App Store and Google Play — 4.8★ rating." },
  { year: "2021", title: "SEO Division Expanded", desc: "Added dedicated SEO services after seeing the massive impact on client businesses." },
  { year: "2023", title: "200+ Businesses Served", desc: "Reached a milestone of 200+ Brisbane businesses with a 4.9★ average rating." },
  { year: "2024", title: "20-Specialist Team", desc: "Grew to a 20-person in-house team across SEO, Web, Content, Ads, and Client Success." },
  { year: "2025", title: "Australia's Speed Experts", desc: "Recognised for sub-1.5s load times and 100/100 Lighthouse scores using Antigravity framework." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const About = () => (
  <Layout>
    <SEO
      title="About Next Tab Agency | 20+ Experts, One Goal — Your Growth"
      description="Next Tab Agency: 20+ in-house Brisbane specialists delivering Data-Driven ROI through technical SEO, high-performance web development (Antigravity), and ethical digital growth strategies for Australian businesses."
      canonical="/about"
    />

    {/* Hero */}
    <section aria-labelledby="about-hero-heading" className="relative min-h-[55vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="Next Tab Agency Brisbane Team — 20 Digital Experts" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="absolute bottom-1/3 right-[10%] w-80 h-80 bg-accent/10 rounded-full blur-[100px]" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            20 Specialists. Zero Outsourcing.
          </span>
          <h1 id="about-hero-heading" className="font-heading font-black text-4xl md:text-[4rem] lg:text-[4.5rem] leading-[1.05] text-primary-foreground tracking-tight">
            The Technology Behind<br />
            <span className="text-gradient">Brisbane's Highest-Ranking Brands.</span>
          </h1>
          <p className="mt-4 text-primary-foreground/70 max-w-2xl text-xl font-medium leading-snug">
            We don't just build websites. We engineer digital assets that rank.
          </p>
          <p className="mt-4 text-primary-foreground/55 max-w-xl text-base leading-relaxed">
            Founded by Hamza Ishfaq, Next Tab Agency is a specialist team of 20 SEOs, Developers, and Growth Architects — delivering extreme speed and performance where other agencies settle for 'good enough.'
          </p>
          {/* Live stats */}
          <div className="mt-8 flex flex-wrap gap-8">
            {[
              { v: "20+", l: "In-House Specialists" },
              { v: "200+", l: "AU Businesses Served" },
              { v: "4.9★", l: "Average Client Rating" },
              { v: "Sub-1s", l: "Avg. Site Speed" },
            ].map((s) => (
              <div key={s.v}>
                <p className="font-heading font-black text-2xl text-accent">{s.v}</p>
                <p className="text-xs text-primary-foreground/50 mt-0.5">{s.l}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    {/* ── CEO Message ────────────────────────────────────────────── */}
    <section aria-labelledby="ceo-message-heading" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/3 to-transparent" />
      <div className="container max-w-5xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden border border-border/50 bg-card shadow-2xl"
        >
          {/* Decorative gradient bar */}
          <div className="h-1.5 bg-gradient-to-r from-primary via-accent to-primary/60" />

          <div className="p-8 md:p-14">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">

              {/* Photo column */}
              <div className="shrink-0 flex flex-col items-center lg:items-start text-center lg:text-left">
                <div className="relative mb-4">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/30 to-primary/30 blur-lg scale-110 opacity-60" />
                  <img
                    src="/assets/hamza-ceo.png?v=2"
                    alt="Hamza Ishfaq — Founder & CEO, Next Tab Agency Brisbane"
                    className="relative w-40 h-40 rounded-2xl object-cover ring-2 ring-border shadow-xl"
                    width={160}
                    height={160}
                  />
                </div>
                <div>
                  <p className="font-heading font-bold text-foreground text-base">Hamza Ishfaq</p>
                  <p className="text-xs text-accent font-semibold mt-0.5">Founder & CEO</p>
                  <p className="text-xs text-muted-foreground mt-0.5">Next Tab Agency</p>
                  {/* Stars */}
                  <div className="flex gap-0.5 mt-2 justify-center lg:justify-start">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Quote column */}
              <div className="flex-1">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">
                  <Award className="w-3 h-3" /> A Message from our Founder & CEO
                </span>
                <h2 id="ceo-message-heading" className="sr-only">A Message from Hamza Ishfaq, Founder & CEO</h2>
                <blockquote className="space-y-4 text-muted-foreground leading-relaxed text-base md:text-lg">
                  <p className="text-foreground font-medium text-xl md:text-2xl leading-snug">
                    "At Next Tab Agency, we don't believe in 'just another website' or 'generic SEO packages.'
                    <span className="text-accent"> We believe in digital ecosystems that act as revenue engines.</span>"
                  </p>
                  <p>
                    My vision for this agency was built on a simple observation: many Australian businesses have incredible products but lack the technical performance to compete in a search-first world.
                  </p>
                  <p>
                    I built this team of 20 specialists to bridge that gap. We are more than your service providers; we are your technical partners. Whether we are optimizing a WooCommerce store for a Brisbane retailer or architecting a complex SEO strategy, our goal remains the same: <strong className="text-foreground">transparent communication, data-backed results, and measurable growth.</strong>
                  </p>
                  <p className="text-sm text-muted-foreground/80 italic">
                    At the end of the day, our success is measured entirely by your ROI.
                  </p>
                </blockquote>
                <div className="mt-6 pt-6 border-t border-border/40 flex items-center gap-4">
                  <div className="w-10 h-0.5 bg-accent rounded-full" />
                  <p className="text-sm font-semibold text-foreground">Hamza Ishfaq, Founder & CEO — Next Tab Agency</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Mission: Origin Story */}
    <section aria-labelledby="mission-heading" className="py-16 md:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 text-primary text-xs font-semibold uppercase tracking-[0.15em] mb-4 border border-primary/10">
              Our Origin Story
            </span>
            <h2 id="mission-heading" className="font-heading font-bold text-3xl md:text-4xl mb-6 text-foreground leading-tight">
              We Saw What Big Agencies<br />Were Doing to Brisbane Businesses
            </h2>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Founded by Hamza Ishfaq, Next Tab Agency is a specialist team of 20 SEOs, Developers, and Growth Architects. Our core philosophy is built on the <strong className="text-foreground">Antigravity Framework</strong> — delivering extreme speed and performance where other agencies settle for 'good enough.'
              </p>
              <p>
                While most agencies chase empty traffic, we focus on <strong className="text-foreground">ROI-Driven Growth</strong>. From technical SEO audits that uncover crawl bottlenecks to custom WooCommerce architectures for high-volume retailers, every decision we make is backed by data.
              </p>
              <p>
                Based in Brisbane and serving the greater Australian market, we provide the enterprise-level expertise of a big firm with the agility of a specialised partner. No offshore outsourcing. No cookie-cutter strategies. Just 20 dedicated specialists obsessed with your results.
              </p>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.15 } } }}>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "📊", title: "Data-Driven", desc: "Every strategy decision is backed by Search Console, GA4, and Ahrefs data — not intuition." },
                { icon: "⚡", title: "Speed-First", desc: "Antigravity framework delivers sub-1.5s load times that meet Australian CDN standards." },
                { icon: "🎯", title: "ROI Focused", desc: "We measure success in leads, calls, and revenue — not vanity metrics." },
                { icon: "🇦🇺", title: "100% Australian", desc: "Every team member is based in Australia. No offshore outsourcing. No midnight time zones." },
              ].map((card) => (
                <div key={card.title} className="card-premium rounded-2xl p-5">
                  <span className="text-2xl block mb-3">{card.icon}</span>
                  <h3 className="font-heading font-semibold text-foreground mb-1 text-sm">{card.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Trust Signals Banner */}
    <section aria-label="Trust Signals" className="py-12 border-y border-border/40 bg-muted/20">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <p className="font-heading font-black text-3xl text-foreground">5.8M+</p>
            <p className="text-xs text-muted-foreground mt-1 font-medium">Local Search Impressions Generated</p>
          </div>
          <div className="text-center">
            <p className="font-heading font-black text-3xl text-foreground">10,000+</p>
            <p className="text-xs text-muted-foreground mt-1 font-medium">Native App Downloads</p>
          </div>
          <div className="text-center">
            <p className="font-heading font-black text-3xl text-foreground">Sub-1.5s</p>
            <p className="text-xs text-muted-foreground mt-1 font-medium">Average Website Load Speeds</p>
          </div>
          <div className="text-center">
            <p className="font-heading font-black text-3xl text-foreground">100%</p>
            <p className="text-xs text-muted-foreground mt-1 font-medium">Australian-Managed Strategies</p>
          </div>
        </div>
      </div>
    </section>

    {/* Team Section — By Division */}
    <section aria-labelledby="team-heading" className="py-20 md:py-28">
      <div className="container">
        <SectionHeading
          id="team-heading"
          eyebrow="The Power Team"
          title="20 In-House Specialists. 0 Outsourcing."
          description="Organised into 5 expert divisions so you always work with the right specialist — not a generalist who does everything mediocrely."
        />
        <div className="space-y-12">
          {divisions.map((div, di) => (
            <motion.div
              key={div.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: di * 0.08 }}
            >
              {/* Division Header */}
              <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r ${div.color} mb-6`}>
                <Users className="w-4 h-4 text-white" />
                <span className="font-heading font-bold text-white text-sm uppercase tracking-[0.12em]">{div.name}</span>
              </div>
              {/* Members Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {div.members.map((member, mi) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: mi * 0.05 }}
                    className="card-premium rounded-2xl p-5 flex flex-col items-center text-center group hover:border-accent/30 transition-colors"
                  >
                    {/* DiceBear Avatar */}
                    <img
                      src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(member.name)}&backgroundColor=b6e3f4,c0aede,d1d4f9&radius=50`}
                      alt={`${member.name} — ${member.role}`}
                      className="w-16 h-16 rounded-full mb-3 bg-muted"
                      loading="lazy"
                      width={64}
                      height={64}
                    />
                    <h3 className="font-heading font-semibold text-foreground text-sm mb-0.5">{member.name}</h3>
                    <p className="text-xs text-accent font-medium mb-1">{member.role}</p>
                    <p className="text-[11px] text-muted-foreground leading-snug">{member.expertise}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Want to see our team in action?{" "}
            <Link to="/our-team" className="text-accent font-semibold hover:underline">Visit our full Team page →</Link>
          </p>
        </div>
      </div>
    </section>

    {/* USP Section */}
    <section aria-labelledby="usp-heading" className="surface-warm py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container relative z-10">
        <SectionHeading
          id="usp-heading"
          eyebrow="Why We're Different"
          title="Why Brisbane Small Businesses Trust Us"
          description="Three reasons Brisbane businesses choose Next Tab Agency over larger national agencies."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {usps.map((usp, i) => (
            <motion.div
              key={usp.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-premium rounded-2xl p-7"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center mb-5">
                <usp.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-3">{usp.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{usp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section aria-labelledby="timeline-heading" className="py-16 md:py-20">
      <div className="container">
        <SectionHeading id="timeline-heading" eyebrow="Our Journey" title="Milestones along the way" />
        <div className="max-w-3xl mx-auto">
          {milestones.map((m, i) => (
            <motion.div
              key={m.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex gap-6 mb-8 last:mb-0"
            >
              <div className="shrink-0 w-16 text-right">
                <span className="font-heading font-bold text-accent text-sm">{m.year}</span>
              </div>
              <div className="relative pb-8 last:pb-0 border-l-2 border-accent/20 pl-6">
                <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-accent" />
                <h3 className="font-heading font-semibold text-foreground mb-1">{m.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Authority Paragraph with Internal Links */}
    <section aria-labelledby="authority-heading" className="surface-warm py-16 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container relative z-10 max-w-4xl">
        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="surface-teal rounded-3xl p-10 md:p-14 text-center relative overflow-hidden mb-10"
        >
          <div className="absolute inset-0 pattern-lines opacity-20" />
          <div className="relative z-10">
            <Star className="w-8 h-8 text-accent mx-auto mb-4 fill-accent" />
            <p className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground leading-tight mb-4">
              "At Next Tab Agency, we don't believe in 'just another website' or 'generic SEO packages.' We believe in digital ecosystems that act as revenue engines — and our success is measured entirely by your ROI."
            </p>
            <p className="text-primary-foreground/60 text-sm">— Hamza Ishfaq, Founder & CEO, Next Tab Agency</p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {[
            { v: "20+", l: "In-House Specialists" },
            { v: "200+", l: "Australian Businesses" },
            { v: "4.9★", l: "Average Rating" },
            { v: "5.8M+", l: "Search Impressions" },
          ].map((s) => (
            <div key={s.v} className="card-premium rounded-2xl p-5 text-center">
              <p className="font-heading font-black text-2xl text-accent mb-1">{s.v}</p>
              <p className="text-xs text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>

        {/* Internal Links Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="card-premium rounded-2xl p-8"
        >
          <h2 id="authority-heading" className="font-heading font-bold text-xl text-foreground mb-4">See Our Team In Action</h2>
          <p className="text-muted-foreground leading-relaxed">
            The best way to understand what Next Tab Agency delivers is to look at what we've actually built. Check out our{" "}
            <Link to="/services/web-development" className="text-accent font-semibold hover:underline">
              Custom Web Development Services
            </Link>
            {" "}to see the technical standards we hold every project to — React, Next.js, and Antigravity frameworks delivering sub-1.5s load times. Then explore our{" "}
            <Link to="/portfolio" className="text-accent font-semibold hover:underline">
              Brisbane SEO Case Studies
            </Link>
            {" "}to see real, measurable results: organic impressions up 340%, direct bookings up 62%, and Lighthouse scores of 100/100. That's not agency brochure copy — that's documented, verifiable client work.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="accent" size="sm" className="rounded-full" asChild>
              <Link to="/services/web-development">View Web Dev Services</Link>
            </Button>
            <Button variant="outline" size="sm" className="rounded-full" asChild>
              <Link to="/portfolio">See Case Studies</Link>
            </Button>
            <Button variant="outline" size="sm" className="rounded-full" asChild>
              <Link to="/contact">Work With Us</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>

    {/* ── Full-Width Map & Audit Booking Section ─────────────────── */}
    <section aria-labelledby="map-audit-heading" className="py-0 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row min-h-[520px]">

        {/* Left — Google Map (60%) */}
        <div className="relative w-full lg:w-[60%] min-h-[340px] lg:min-h-[520px]">
          <div className="absolute inset-0 ring-1 ring-inset ring-border/20 z-10 pointer-events-none" />
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3539.7777694088167!2d153.19120031513764!3d-27.68259298279541!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b9147fb4eef1c5b%3A0x1234567890abcdef!2sTaylor%20St%2C%20Eagleby%20QLD%204207!5e0!3m2!1sen!2sau!4v1696000000000!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.8) brightness(0.9)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Next Tab Agency Brisbane Office — Taylor Street, Eagleby QLD 4207"
            className="absolute inset-0 w-full h-full"
          />
          {/* Office pin label overlay */}
          <div className="absolute top-4 left-4 z-20 bg-primary/95 backdrop-blur-sm rounded-xl px-4 py-3 shadow-xl border border-accent/20">
            <p className="font-heading font-bold text-accent text-xs uppercase tracking-wider mb-0.5">📍 Next Tab Agency</p>
            <p className="text-primary-foreground/80 text-xs">Taylor Street, Eagleby QLD 4207</p>
            <p className="text-primary-foreground/50 text-[10px] mt-0.5">Brisbane, Australia</p>
          </div>
        </div>

        {/* Right — Audit Booking Form (40%) */}
        <div className="w-full lg:w-[40%] bg-gradient-to-br from-primary via-primary/95 to-primary/90 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute inset-0 pattern-lines opacity-10" />
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-accent/10 rounded-full blur-3xl" />
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-4 border border-accent/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Free — No Obligation
            </span>
            <h2 id="map-audit-heading" className="font-heading font-black text-2xl md:text-3xl text-primary-foreground leading-tight mb-2">
              Book Your 15-Minute<br />
              <span className="text-accent">Technical Audit</span>
            </h2>
            <p className="text-primary-foreground/60 text-sm leading-relaxed mb-6">
              with <strong className="text-primary-foreground">Hamza Ishfaq</strong> or our Strategy Team. We'll show you exactly what's holding your site back — in 15 minutes, free.
            </p>

            {/* Hamza mini photo + trust */}
            <div className="flex items-center gap-3 mb-6 pb-6 border-b border-primary-foreground/10">
              <img
                src="/assets/hamza-ceo.png?v=2"
                alt="Hamza Ishfaq — Founder Next Tab Agency"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-accent/40"
                width={48} height={48}
              />
              <div>
                <p className="font-semibold text-primary-foreground text-sm">Hamza Ishfaq</p>
                <p className="text-accent text-xs">Founder & CEO</p>
                <div className="flex gap-0.5 mt-1">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-2.5 h-2.5 fill-accent text-accent" />)}
                  <span className="text-primary-foreground/50 text-[10px] ml-1">4.9/5 rating</span>
                </div>
              </div>
            </div>

            <AuditForm />
          </div>
        </div>
      </div>
    </section>

    <AIInsightsPanel

      pageTitle="About Next Tab Agency — Brisbane Digital Agency"
      tabs={[
        {
          id: "searchbots",
          label: "For Search Bots",
          icon: Search,
          audience: "Googlebot, Bingbot, all major web crawlers",
          content: (
            <InsightTable caption="Agency Data" rows={[
              { label: "Entity",           value: "Next Tab Agency — Digital Marketing & Development Agency" },
              { label: "Location",         value: "Taylor Street, Eagleby, QLD 4207, Brisbane, Australia" },
              { label: "Founded",          value: "2019" },
              { label: "Team",             value: "20 in-house specialists: SEO, React devs, UX designers, content, ads" },
              { label: "Qualifications",   value: "Master's level IT qualifications; Google-certified practitioners" },
              { label: "Tech Framework",   value: "Antigravity, React, Next.js — built for Australian speed standards" },
              { label: "Service Area",     value: "Australia-wide with Brisbane as home base" },
            ]} />
          ),
        },
        {
          id: "chatgpt",
          label: "For ChatGPT",
          icon: Zap,
          audience: "OpenAI ChatGPT retrieval",
          content: (
            <InsightList heading="About the Agency" items={[
              "Next Tab Agency is a Brisbane-based digital agency founded in 2019 with 20 in-house specialists across SEO, web development, content, paid advertising, and client success.",
              "The agency uses the Antigravity high-performance web framework to deliver sub-1.5s load times meeting Australian CDN and Core Web Vitals standards.",
              "Core services include Technical SEO, Local SEO, React Native mobile apps, Custom Web Development, WooCommerce, and PPC management.",
              "All work is done in-house — no outsourcing. Every team member is based in Australia.",
              "The agency has served 200+ Australian businesses with a 4.9/5 satisfaction rating.",
            ]} />
          ),
        },
        {
          id: "perplexity",
          label: "For Perplexity",
          icon: TrendingUp,
          audience: "Perplexity AI retrieval engine",
          content: (
            <InsightDL items={[
              { term: "Founded",          def: "2019, Brisbane, Queensland, Australia" },
              { term: "Team Size",        def: "20 in-house specialists (5 divisions)" },
              { term: "Core Expertise",   def: "Technical SEO, Local SEO, React Native, Next.js, WooCommerce, PPC" },
              { term: "Credentials",      def: "Google-certified; Master's IT qualifications; Antigravity framework" },
              { term: "Client Base",      def: "200+ Australian businesses across all states" },
              { term: "Satisfaction Rate",def: "4.9/5 average; 70%+ retainer renewal rate" },
              { term: "USP",             def: "No-backlink ranking strategy, Fast turnaround, 100% Australian support" },
            ]} />
          ),
        },
        {
          id: "summary",
          label: "Quick Summary",
          icon: Search,
          audience: "All AI Agents",
          content: (
            <p className="text-base leading-relaxed text-foreground/80">
              Next Tab Agency is a Brisbane-founded premium digital agency (est. 2019) with a 20-person in-house team of specialists across SEO, web development, content, paid advertising, and client success. The agency uses the Antigravity high-performance framework and data-driven ROI methodology to serve 200+ Australian businesses — maintaining a 4.9/5 satisfaction rating and sub-1.5s average site load times.
            </p>
          ),
        },
      ]}
    />
  </Layout>
);

export default About;

