import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, Briefcase, TrendingUp, DollarSign, Zap, Globe, Search } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const features = ["Accounting firm local SEO and GBP optimisation","Service-specific landing pages (tax, BAS, SMSF, bookkeeping)","Keyword strategy for high-intent queries ('accountant Brisbane tax return')","Accounting schema markup (AccountingService, LocalBusiness)","E-E-A-T content strategy demonstrating CPA/CA expertise","Client review generation and testimonial strategy","Blog content — tax updates, ATO guides, financial tips","Competitor ranking gap analysis by service and suburb","Suburb-level service pages for multiple office locations","Monthly accounting SEO performance reporting"];
const faqs = [
  { q: "What keywords should an accounting firm target?", a: "High-intent queries like 'tax accountant Brisbane', 'SMSF accountant Sydney', 'BAS agent Melbourne', and 'small business accountant [suburb]'. We research the full opportunity and build a prioritised keyword map." },
  { q: "Is there a difference between SEO for small accounting firms vs large ones?", a: "Yes. Small firms benefit most from local/suburb-level SEO and service-specific pages. Larger firms with multiple offices need a multi-location strategy with city and suburb pages for each location." },
  { q: "Does accounting SEO need to comply with any advertising standards?", a: "Yes — accounting firms must comply with APES 110 and ASIC advertising rules. We ensure all content is factually accurate and avoids prohibited claims." },
];

const AccountantSeo = () => (
  <Layout>
    <SEO title="SEO for Accountants Australia — Attract Tax & Accounting Clients Online" description="Specialist accounting firm SEO for Australian accountants, CPAs, and tax agents. We rank service pages to drive qualified client enquiries." canonical="/industry/accountant-seo" faqs={faqs} breadcrumbs={[{ name: "Home", url: "https://nexttabagency.com/" }, { name: "Industry SEO", url: "https://nexttabagency.com/services" }, { name: "Accountant SEO", url: "https://nexttabagency.com/industry/accountant-seo" }]} serviceSchema={{ name: "SEO for Accountants", description: "Specialist accounting SEO for Australian CPA firms and tax agents.", areaServed: "Australia" }} />
    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="SEO for Accountants Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><Briefcase className="w-3 h-3" /> Industry SEO</span>
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">SEO for Accountants</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">Attract High-Value Clients Who Are Already Searching for You.</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">Thousands of Australians search for accountants every month. Our accounting firm SEO puts your practice in front of them at the exact moment of intent.</p>
          <div className="flex flex-wrap gap-4 mt-8"><Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free Accounting SEO Audit</Link></Button><Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/local-seo">Local SEO</Link></Button></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
    <section className="border-b border-border bg-muted/30 py-8"><div className="container max-w-4xl"><div className="grid grid-cols-3 gap-6 text-center">{[{ value: "68%", label: "of people search online to find an accountant", source: "Hinge Research" }, { value: "$5k+", label: "average annual client value for accounting firms", source: "IBISWorld" }, { value: "3x", label: "more clients for firms with strong organic rankings", source: "Next Tab Internal" }].map((s) => (<div key={s.label}><p className="font-heading font-black text-3xl text-accent">{s.value}</p><p className="text-sm font-semibold text-foreground mt-1">{s.label}</p><p className="text-xs text-muted-foreground/60">Source: {s.source}</p></div>))}</div></div></section>
    <section className="py-20 md:py-28"><div className="container max-w-5xl"><div className="grid lg:grid-cols-5 gap-12 lg:gap-20"><div className="lg:col-span-3"><h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why Accounting Firms Can't Ignore Google</h2><p className="text-muted-foreground leading-relaxed">Most accounting firms rely on referrals — but referrals are unpredictable and slow to scale. Google search is the modern equivalent of referrals at massive scale. When a small business owner searches 'accountant for small business Brisbane', they're ready to hire. Our accounting SEO service captures this intent and converts it into client enquiries systematically.</p></div><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2"><div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10"><h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>{[{ icon: Briefcase, title: "Service-Specific Rankings", desc: "Rank separately for tax, SMSF, BAS, and bookkeeping — each with distinct client intent." }, { icon: DollarSign, title: "High-Value Clients", desc: "Clients found through SEO tend to be higher intent and better matches for your services." }, { icon: TrendingUp, title: "Scalable Enquiries", desc: "Unlike referrals, SEO scales. More rankings = more enquiries without increasing your network effort." }].map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}</div></motion.div></div></div></section>
    <section className="py-20 md:py-28 relative overflow-hidden"><div className="absolute inset-0 pattern-dots" /><div className="container max-w-5xl relative z-10"><SectionHeading eyebrow="What's Included" title="Complete accounting firm SEO service" /><ul className="grid sm:grid-cols-2 gap-4">{features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}</ul></div></section>
    <section className="py-20 md:py-28 bg-muted/30"><div className="container max-w-3xl"><SectionHeading eyebrow="FAQs" title="Accounting firm SEO questions answered" /><div className="space-y-4">{faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}</div></div></section>
    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>
    <AIInsightsPanel pageTitle="Accountant SEO - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "SEO for Accountants" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Service Area", value: "Australia-wide" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Accountant SEO Overview" items={["Specialist SEO for Australian accounting firms, CPAs, and tax agents.", "Service-specific landing pages, E-E-A-T content, and local SEO for client acquisition."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "SEO for Accountants" }, { term: "Location", def: "Brisbane-based, serving all of Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides specialist accounting firm SEO for Australian CPAs and tax agents, driving qualified client enquiries through service-specific page rankings and local SEO.</p>) },
    ]} />
  </Layout>
);

export default AccountantSeo;
