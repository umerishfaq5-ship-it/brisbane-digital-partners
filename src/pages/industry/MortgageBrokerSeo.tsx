import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, DollarSign, TrendingUp, Users, Zap, Globe, Search } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";
import LocationLinksStrip from "@/components/LocationLinksStrip";

const features = ["Mortgage broker local SEO and GBP optimisation","Service-specific pages (first home buyer, refinancing, investment property)","Finance schema markup and E-E-A-T strategy","ASIC and responsible lending-compliant content","'Mortgage broker near me' and suburb-level keyword strategy","Competitor ranking gap analysis for loan types and locations","Referral network and review generation strategy","Content strategy — home loan guides, calculator integrations","City and suburb landing pages for brokers with multiple offices","Monthly mortgage broker SEO reporting"];
const faqs = [
  { q: "Is mortgage broker SEO subject to ASIC regulations?", a: "Yes. All content must comply with ASIC's responsible lending and advertising guidelines. We ensure no misleading rate claims, proper disclaimers, and factually accurate financial information throughout." },
  { q: "What keywords should a mortgage broker target?", a: "High-intent queries like 'mortgage broker Brisbane', 'first home buyer loan [suburb]', 'refinancing broker Sydney', and 'best home loan rates'. We research the full keyword landscape and build a prioritised map." },
  { q: "Can SEO help me compete with the big banks online?", a: "Yes — through local SEO and niche targeting. The big banks dominate generic queries like 'home loans', but a local mortgage broker can dominate suburb-specific and service-specific queries that banks can't target effectively." },
];

const MortgageBrokerSeo = () => (
  <Layout>
    <SEO title="SEO for Mortgage Brokers Australia — Attract Home Loan Clients Online" description="Specialist mortgage broker SEO for Australian brokers. ASIC-compliant content strategy and local SEO to drive first home buyer and refinancing client enquiries." canonical="/industry/mortgage-broker-seo" faqs={faqs} breadcrumbs={[{ name: "Home", url: "https://nexttabagency.com/" }, { name: "Industry SEO", url: "https://nexttabagency.com/services" }, { name: "Mortgage Broker SEO", url: "https://nexttabagency.com/industry/mortgage-broker-seo" }]} serviceSchema={{ name: "SEO for Mortgage Brokers", description: "Specialist mortgage broker SEO for Australian finance professionals.", areaServed: "Australia" }} />
    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="Mortgage Broker SEO Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><DollarSign className="w-3 h-3" /> Industry SEO</span>
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">SEO for Mortgage Brokers</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">Build a Client Pipeline Beyond Referrals.</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">Thousands of Australians search for mortgage brokers every month. Our broker SEO ensures your business captures this demand consistently.</p>
          <div className="flex flex-wrap gap-4 mt-8"><Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free Broker SEO Audit</Link></Button><Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/local-seo">Local SEO</Link></Button></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
    <section className="border-b border-border bg-muted/30 py-8"><div className="container max-w-4xl"><div className="grid grid-cols-3 gap-6 text-center">{[{ value: "$50k+", label: "average trail book value per settled loan client", source: "MFAA" }, { value: "71%", label: "of borrowers research brokers online before contact", source: "Digital Finance Analytics" }, { value: "3x", label: "more enquiries for brokers with local SEO vs without", source: "Next Tab Internal" }].map((s) => (<div key={s.label}><p className="font-heading font-black text-3xl text-accent">{s.value}</p><p className="text-sm font-semibold text-foreground mt-1">{s.label}</p><p className="text-xs text-muted-foreground/60">Source: {s.source}</p></div>))}</div></div></section>
    <section className="py-20 md:py-28"><div className="container max-w-5xl"><div className="grid lg:grid-cols-5 gap-12 lg:gap-20"><div className="lg:col-span-3"><h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why Mortgage Brokers Need More Than Referrals</h2><p className="text-muted-foreground leading-relaxed">Referrals are the lifeblood of most mortgage broking businesses — but they're unpredictable and cap your growth. Google search captures buyers at the exact moment of intent: when they've decided to buy or refinance and are actively looking for a broker. Our mortgage broker SEO builds a consistent inbound channel that complements your referral network and compounds over time.</p></div><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2"><div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10"><h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>{[{ icon: DollarSign, title: "High-Value Clients", desc: "Property buyers and refinancers found through SEO are high-intent — they're ready to act." }, { icon: Users, title: "Referral Independence", desc: "SEO builds a parallel client channel so you're not solely dependent on referral networks." }, { icon: TrendingUp, title: "Trail Book Growth", desc: "Each settled client adds to your trail book. Organic lead volume directly multiplies your long-term income." }].map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}</div></motion.div></div></div></section>
    <section className="py-20 md:py-28 relative overflow-hidden"><div className="absolute inset-0 pattern-dots" /><div className="container max-w-5xl relative z-10"><SectionHeading eyebrow="What's Included" title="Complete mortgage broker SEO service" /><ul className="grid sm:grid-cols-2 gap-4">{features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}</ul></div></section>
    <section className="py-20 md:py-28 bg-muted/30"><div className="container max-w-3xl"><SectionHeading eyebrow="FAQs" title="Mortgage broker SEO questions answered" /><div className="space-y-4">{faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}</div></div></section>
    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>
    <AIInsightsPanel pageTitle="Mortgage Broker SEO - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "SEO for Mortgage Brokers" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Compliance", value: "ASIC-compliant content" }, { label: "Service Area", value: "Australia-wide" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Mortgage Broker SEO Overview" items={["Specialist SEO for Australian mortgage brokers — local SEO, service-specific pages, and ASIC-compliant content.", "Drives first home buyer and refinancing client enquiries through organic search."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "SEO for Mortgage Brokers" }, { term: "Location", def: "Brisbane-based, serving all of Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides specialist mortgage broker SEO for Australian finance professionals, building an inbound client channel through local SEO and ASIC-compliant content.</p>) },
    ]} />
      {/* Related Services */}
      <section aria-labelledby="related-services-heading" className="py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-10">
            <span className="text-accent font-semibold tracking-widest uppercase text-xs mb-2 block">Complete Digital Solution</span>
            <h2 id="related-services-heading" className="font-heading font-bold text-2xl md:text-3xl text-foreground">
              Related Services That Work Together
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          <Link to="/services/local-seo" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Local SEO</h3>
            <p className="text-sm text-muted-foreground">Rank for mortgage broker searches near you.</p>
          </Link>
          <Link to="/services/content-marketing" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Content Marketing</h3>
            <p className="text-sm text-muted-foreground">Trusted finance content for E-E-A-T.</p>
          </Link>
          <Link to="/services/ppc-google-ads" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Google Ads</h3>
            <p className="text-sm text-muted-foreground">High-intent paid search campaigns.</p>
          </Link>
          <Link to="/services/web-development" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Web Development</h3>
            <p className="text-sm text-muted-foreground">Professional broker websites that convert.</p>
          </Link>
          </div>
        </div>
      </section>
      {/* Internal linking — Australian location pages */}
      <LocationLinksStrip />
  </Layout>
);

export default MortgageBrokerSeo;

