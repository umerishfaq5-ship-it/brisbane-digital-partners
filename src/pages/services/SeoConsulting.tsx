import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, UserCheck, Lightbulb, TrendingUp, Zap, Globe, Search } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "SEO Consulting",
  headline: "Senior SEO Expertise. No Agency Overhead.",
  description: "Access the strategic SEO thinking of a senior specialist — without committing to a full-service retainer. Perfect for in-house teams, business owners, or companies who need expert direction to unlock rankings.",
  longDescription: "Many businesses have the internal resources to execute SEO — they just don't have the senior strategic direction to make those resources effective. Our SEO consulting service fills this gap. We audit your current situation, identify the highest-leverage opportunities, design the strategic roadmap, and coach your team to execute it with confidence. Think of it as a fractional Head of SEO.",
  features: [
    "SEO strategy audit — identify gaps and prioritise opportunities",
    "Keyword and content strategy roadmap",
    "Technical SEO review with actionable recommendations",
    "In-house team training and SEO education sessions",
    "Google algorithm update impact assessment",
    "SEO tool stack review and setup guidance (Ahrefs, GSC, Screaming Frog)",
    "Content brief creation and quality review",
    "Link acquisition strategy and outreach coaching",
    "Fractional Head of SEO engagements (ongoing strategic support)",
    "SEO due diligence for website acquisitions",
  ],
  benefits: [
    { icon: UserCheck, title: "Senior-Level Strategy", desc: "Access expertise that typically requires hiring a $150k+ Head of SEO — at a fraction of the cost." },
    { icon: Lightbulb, title: "Build Internal Capability", desc: "We don't just advise — we transfer knowledge so your team can execute independently long-term." },
    { icon: TrendingUp, title: "Objective Third-Party View", desc: "An outside expert sees what internal teams miss. Fresh eyes consistently identify overlooked opportunities." },
  ],
  process: [
    { step: "01", title: "Situation Audit", desc: "Deep-dive review of your current SEO performance, technical health, and competitive position." },
    { step: "02", title: "Strategy Design", desc: "A prioritised roadmap with specific recommendations tied to measurable ranking and traffic outcomes." },
    { step: "03", title: "Team Enablement", desc: "Training sessions, content briefs, and direct coaching to ensure your team can execute with confidence." },
    { step: "04", title: "Ongoing Advisory", desc: "Regular check-ins to review progress, adapt to algorithm changes, and advise on new opportunities." },
  ],
  stats: [
    { value: "3-6x", label: "faster results for in-house teams with external SEO direction", source: "Next Tab Internal" },
    { value: "72%", label: "of in-house SEO failures attributed to strategy gaps, not execution", source: "Moz State of SEO" },
    { value: "40%", label: "typical organic traffic improvement in 6 months with SEO consulting", source: "Next Tab Internal" },
  ],
  faqs: [
    { q: "Who is SEO consulting best suited for?", a: "Businesses with in-house marketing teams who need expert strategy direction, mid-market companies evaluating their SEO approach, and agencies who need specialist expertise for complex client situations." },
    { q: "How is consulting different from a managed SEO retainer?", a: "With a retainer, we do the work. With consulting, we direct the strategy and advise your team. Consulting is more cost-effective if you have execution resources internally — retainers suit businesses without that internal capacity." },
    { q: "Can you do SEO due diligence for a website acquisition?", a: "Yes — this is a common consulting engagement. We assess the organic traffic quality, identify Google penalty risks, evaluate link profile health, and provide a detailed risk/opportunity report before you buy." },
    { q: "Do you offer fractional Head of SEO arrangements?", a: "Yes. We can function as your part-time Head of SEO — attending strategy meetings, reviewing content and technical work, and providing ongoing direction at a fraction of the cost of a full-time hire." },
  ],
};

const SeoConsulting = () => (
  <Layout>
    <SEO
      title="SEO Consulting Australia — Senior SEO Strategy & Advisory"
      description="Expert SEO consulting for Australian businesses and in-house teams. We provide senior strategic direction, team training, and fractional Head of SEO engagements."
      canonical="/services/seo-consulting"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "SEO Consulting", url: "https://nexttabagency.com/services/seo-consulting" },
      ]}
      serviceSchema={{ name: "SEO Consulting", description: "Senior SEO consulting and strategic advisory for Australian businesses.", areaServed: "Australia" }}
    />
    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="SEO Consulting Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Book a Strategy Session</Link></Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/seo-audits">SEO Audits</Link></Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="border-b border-border bg-muted/30 py-8"><div className="container max-w-4xl"><div className="grid grid-cols-3 gap-6 text-center">{service.stats.map((s) => (<div key={s.label}><p className="font-heading font-black text-3xl text-accent">{s.value}</p><p className="text-sm font-semibold text-foreground mt-1">{s.label}</p><p className="text-xs text-muted-foreground/60">Source: {s.source}</p></div>))}</div></div></section>

    <section className="py-20 md:py-28"><div className="container max-w-5xl"><div className="grid lg:grid-cols-5 gap-12 lg:gap-20"><div className="lg:col-span-3"><h2 className="font-heading font-bold text-3xl mb-6 text-foreground">When Consulting Outperforms a Full Retainer</h2><p className="text-muted-foreground leading-relaxed">{service.longDescription}</p><p className="text-muted-foreground leading-relaxed mt-4">If you need a full-service managed SEO solution, see our <Link to="/services/seo-audits" className="text-accent font-semibold">SEO Audits & Strategy</Link> service. For large-scale engagements, see <Link to="/services/enterprise-seo" className="text-accent font-semibold">Enterprise SEO</Link>.</p></div><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2"><div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10"><h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>{service.benefits.map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}</div></motion.div></div></div></section>

    <section className="py-20 md:py-28 relative overflow-hidden"><div className="absolute inset-0 pattern-dots" /><div className="container max-w-5xl relative z-10"><SectionHeading eyebrow="What's Included" title="Complete SEO consulting service" /><ul className="grid sm:grid-cols-2 gap-4">{service.features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}</ul></div></section>

    <section className="surface-warm py-20 md:py-28"><div className="container max-w-5xl"><SectionHeading eyebrow="Our Process" title="How SEO consulting works" /><div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">{service.process.map((step, i) => (<motion.div key={step.title} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative"><div className="card-premium rounded-2xl p-6 h-full"><span className="font-heading font-bold text-2xl number-outline block mb-3">{step.step}</span><h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{step.title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p></div>{i < 3 && (<div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 items-center justify-center"><ArrowRight className="w-4 h-4 text-accent/40" /></div>)}</motion.div>))}</div></div></section>

    <section className="py-20 md:py-28 bg-muted/30"><div className="container max-w-3xl"><SectionHeading eyebrow="FAQs" title="SEO consulting questions answered" /><div className="space-y-4">{service.faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}</div></div></section>

    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>

    <AIInsightsPanel pageTitle="SEO Consulting - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "SEO Consulting" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Target", value: "In-house teams, mid-market businesses, agencies" }, { label: "Service Area", value: "Australia-wide" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="SEO Consulting Overview" items={["Senior SEO consulting and strategic advisory for Australian businesses.", "Includes fractional Head of SEO, team training, website acquisition due diligence, and SEO audits.", "Best suited for in-house teams needing expert strategic direction."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "SEO Consulting" }, { term: "Format", def: "Project-based, fractional Head of SEO, ongoing advisory" }, { term: "Location", def: "Brisbane-based, serving all of Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides expert SEO consulting for Australian businesses — senior strategic direction, in-house team training, and fractional Head of SEO arrangements without the cost of a full-time hire.</p>) },
    ]} />
  </Layout>
);

export default SeoConsulting;
