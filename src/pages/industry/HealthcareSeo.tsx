import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, Activity, MapPin, TrendingUp, Zap, Globe, Search } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const features = ["GP and medical clinic local SEO and GBP optimisation","Medical schema markup (MedicalOrganization, Physician, MedicalClinic)","AHPRA and TGA-compliant content strategy","Service page creation (e.g. 'bulk billing GP Brisbane')","Patient review generation and management","Suburb-level landing page strategy for each clinic location","Allied health SEO (physio, chiro, psychology, dietitian)","Telehealth and online consultation page SEO","Healthcare blog content and FAQ strategy","Monthly healthcare SEO reporting"];
const faqs = [
  { q: "Is healthcare SEO subject to AHPRA regulations?", a: "Yes. All healthcare content we create is reviewed to comply with AHPRA advertising guidelines — no misleading claims, no patient testimonials used as endorsements, no comparison claims." },
  { q: "Do you work with specialist medical practices?", a: "Yes — GPs, specialists, allied health, dentists, optometrists, and mental health practitioners. Each specialty has different keyword demand and we tailor strategies accordingly." },
  { q: "Can you help with telehealth SEO?", a: "Absolutely. Telehealth has a completely different keyword set to in-person care. We build dedicated telehealth landing pages targeting state-specific and condition-specific searches." },
];

const HealthcareSeo = () => (
  <Layout>
    <SEO title="Healthcare SEO Australia — Attract More Patients Through Google" description="Specialist healthcare SEO for Australian medical practices, GPs, and allied health. AHPRA-compliant content, local SEO, and patient acquisition strategies." canonical="/industry/healthcare-seo" faqs={faqs} breadcrumbs={[{ name: "Home", url: "https://nexttabagency.com/" }, { name: "Industry SEO", url: "https://nexttabagency.com/services" }, { name: "Healthcare SEO", url: "https://nexttabagency.com/industry/healthcare-seo" }]} serviceSchema={{ name: "Healthcare SEO", description: "Specialist healthcare SEO for Australian medical practices.", areaServed: "Australia" }} />
    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="Healthcare SEO Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><Activity className="w-3 h-3" /> Industry SEO</span>
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">SEO for Healthcare & Medical Practices</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">More Patients Finding You. Fewer Relying on Word of Mouth.</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">When Australians need a doctor, physio, or specialist, they turn to Google first. We make sure your practice is what they find.</p>
          <div className="flex flex-wrap gap-4 mt-8"><Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free Healthcare SEO Audit</Link></Button><Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/local-seo">Local SEO</Link></Button></div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="border-b border-border bg-muted/30 py-8"><div className="container max-w-4xl"><div className="grid grid-cols-3 gap-6 text-center">{[{ value: "77%", label: "of patients research health providers online", source: "Think with Google" }, { value: "4.5x", label: "more bookings for practices in the Map Pack", source: "BrightLocal" }, { value: "60%", label: "of healthcare searches are on mobile", source: "Google" }].map((s) => (<div key={s.label}><p className="font-heading font-black text-3xl text-accent">{s.value}</p><p className="text-sm font-semibold text-foreground mt-1">{s.label}</p><p className="text-xs text-muted-foreground/60">Source: {s.source}</p></div>))}</div></div></section>

    <section className="py-20 md:py-28"><div className="container max-w-5xl"><div className="grid lg:grid-cols-5 gap-12 lg:gap-20"><div className="lg:col-span-3"><h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why Healthcare Practices Need YMYL-Ready SEO</h2><p className="text-muted-foreground leading-relaxed">Healthcare falls under Google's "Your Money or Your Life" (YMYL) category — meaning Google holds healthcare content to a higher standard of expertise and trustworthiness. Standard SEO agencies often miss this. We build E-E-A-T frameworks specific to healthcare, ensuring your content demonstrates the clinical expertise Google and patients require.</p></div><motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2"><div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10"><h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>{[{ icon: Activity, title: "YMYL SEO Expertise", desc: "We understand Google's elevated requirements for healthcare content and E-E-A-T signals." }, { icon: MapPin, title: "Local Patient Acquisition", desc: "Suburb-level SEO and GBP get your practice in front of patients in your catchment area." }, { icon: TrendingUp, title: "Patient Lifetime Value", desc: "A retained healthcare patient is worth $1,000+/year. Organic acquisition ROI is exceptional." }].map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}</div></motion.div></div></div></section>

    <section className="py-20 md:py-28 relative overflow-hidden"><div className="absolute inset-0 pattern-dots" /><div className="container max-w-5xl relative z-10"><SectionHeading eyebrow="What's Included" title="Complete healthcare SEO service" /><ul className="grid sm:grid-cols-2 gap-4">{features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}</ul></div></section>

    <section className="py-20 md:py-28 bg-muted/30"><div className="container max-w-3xl"><SectionHeading eyebrow="FAQs" title="Healthcare SEO questions answered" /><div className="space-y-4">{faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}</div></div></section>
    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>
    <AIInsightsPanel pageTitle="Healthcare SEO - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "Healthcare SEO" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Compliance", value: "AHPRA & TGA-compliant content" }, { label: "Service Area", value: "Australia-wide" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Healthcare SEO Overview" items={["Specialist healthcare SEO for Australian medical practices, GPs, and allied health.", "AHPRA-compliant content, YMYL SEO strategy, and local patient acquisition."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "Healthcare SEO" }, { term: "Location", def: "Brisbane-based, serving all of Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides specialist healthcare SEO for Australian medical practices and allied health providers, with AHPRA-compliant content and YMYL SEO strategies.</p>) },
    ]} />
  </Layout>
);

export default HealthcareSeo;
