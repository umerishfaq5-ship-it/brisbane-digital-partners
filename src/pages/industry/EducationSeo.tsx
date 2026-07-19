import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, GraduationCap, Users, TrendingUp, Zap, Globe, Search } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";
import LocationLinksStrip from "@/components/LocationLinksStrip";

const features = [
  "Course and program-specific landing page SEO",
  "Education schema markup (Course, EducationalOrganization, Event)",
  "Local SEO for campus locations and training centres",
  "Student-intent keyword research ('best [course] in Brisbane')",
  "TEQSA and CRICOS compliant content strategy",
  "Review and testimonial strategy for enrolment trust",
  "Competitor university and RTO ranking gap analysis",
  "Blog content — career guides, industry outlooks, study tips",
  "International student search demand targeting",
  "Monthly education SEO performance reporting",
];

const faqs = [
  { q: "Does education SEO work for RTOs as well as universities?", a: "Yes — we work with RTOs, TAFEs, private colleges, coaching centres, and universities. Each has different keyword demand and enrolment funnel dynamics that we account for in the strategy." },
  { q: "How do students typically search for courses?", a: "Most use course + location searches (e.g. 'nursing diploma Brisbane') or course + attribute searches ('best project management course online Australia'). We research the full demand landscape for your specific offerings." },
  { q: "Can you help with international student recruitment SEO?", a: "Yes. International student searches have distinct keyword patterns and trust signals. We build landing pages and content strategies specifically targeting international study intent." },
  { q: "Is education SEO subject to TEQSA advertising requirements?", a: "Yes for regulated providers. We ensure all content meets TEQSA and CRICOS advertising standards — no misleading employment outcome claims, accurate accreditation statements, and compliant course descriptions." },
];

const EducationSeo = () => (
  <Layout>
    <SEO
      title="SEO for Education Providers Australia — Universities, RTOs & Colleges"
      description="Specialist education SEO for Australian universities, RTOs, TAFEs, and private colleges. We rank course pages to drive student enrolments through organic search."
      canonical="/industry/education-seo"
      faqs={faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Industry SEO", url: "https://nexttabagency.com/services" },
        { name: "Education SEO", url: "https://nexttabagency.com/industry/education-seo" },
      ]}
      serviceSchema={{ name: "SEO for Education", description: "Specialist education SEO for Australian universities, RTOs, and training providers.", areaServed: "Australia" }}
    />
    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="Education SEO Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><GraduationCap className="w-3 h-3" /> Industry SEO</span>
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">SEO for Education Providers</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">Fill Your Courses With Students Who Found You on Google.</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">Prospective students research extensively before enrolling. Our education SEO ensures your institution is present at every stage of that research journey.</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free Education SEO Audit</Link></Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/technical-seo">Technical SEO</Link></Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="border-b border-border bg-muted/30 py-8">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-3 gap-6 text-center">
          {[{ value: "87%", label: "of students research institutions online before applying", source: "Google/Ipsos" }, { value: "3x", label: "more enrolment enquiries with course-specific SEO pages", source: "Next Tab Internal" }, { value: "65%", label: "of education searches are on mobile", source: "Google" }].map((s) => (
            <div key={s.label}><p className="font-heading font-black text-3xl text-accent">{s.value}</p><p className="text-sm font-semibold text-foreground mt-1">{s.label}</p><p className="text-xs text-muted-foreground/60">Source: {s.source}</p></div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <div className="lg:col-span-3">
            <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why Education Providers Win With Course-Level SEO</h2>
            <p className="text-muted-foreground leading-relaxed">Education providers that invest in SEO at the course level — not just the homepage — dramatically outperform those relying only on brand awareness or aggregator sites. A dedicated, keyword-optimised page for each program you offer creates a direct organic funnel from search to enrolment enquiry.</p>
            <p className="text-muted-foreground leading-relaxed mt-4">We work with both domestic and <Link to="/services/ai-seo" className="text-accent font-semibold">international student targeting strategies</Link>, including AI search optimisation for students using ChatGPT and Perplexity to research study options.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2">
            <div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10">
              <h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>
              {[{ icon: GraduationCap, title: "Course-Level Rankings", desc: "Each program needs its own optimised page targeting specific student search queries." }, { icon: Users, title: "International Students", desc: "We target the specific search patterns of international students researching Australian study options." }, { icon: TrendingUp, title: "Enrolment Growth", desc: "Organic rankings create a sustainable enrolment channel that reduces reliance on paid aggregators." }].map((b) => (
                <div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container max-w-5xl relative z-10">
        <SectionHeading eyebrow="What's Included" title="Complete education SEO service" />
        <ul className="grid sm:grid-cols-2 gap-4">
          {features.map((f, i) => (
            <motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card">
              <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow="FAQs" title="Education SEO questions answered" />
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6">
              <h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>

    <AIInsightsPanel pageTitle="Education SEO - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "SEO for Education Providers" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Sectors", value: "Universities, RTOs, TAFEs, Private Colleges" }, { label: "Service Area", value: "Australia-wide" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Education SEO Overview" items={["Specialist SEO for Australian education providers — course page rankings, TEQSA-compliant content, and enrolment growth.", "Works with universities, RTOs, TAFEs, private colleges, and coaching centres."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "Education SEO" }, { term: "Location", def: "Brisbane-based, serving all of Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides specialist education SEO for Australian universities, RTOs, and training providers, driving student enrolment enquiries through course-specific landing pages and organic search rankings.</p>) },
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
          <Link to="/services/content-marketing" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Content Marketing</h3>
            <p className="text-sm text-muted-foreground">Course and enrolment content strategy.</p>
          </Link>
          <Link to="/services/technical-seo" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Technical SEO</h3>
            <p className="text-sm text-muted-foreground">Fix LMS platform crawl issues.</p>
          </Link>
          <Link to="/services/web-development" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Web Development</h3>
            <p className="text-sm text-muted-foreground">Fast, accessible education websites.</p>
          </Link>
          <Link to="/services/social-media-ads" className="group card-premium p-6 rounded-2xl block hover:border-accent/40 transition-all duration-300">
            <h3 className="font-heading font-bold text-foreground group-hover:text-accent transition-colors mb-2 text-base">Social Media Ads</h3>
            <p className="text-sm text-muted-foreground">Enrolment campaigns on Meta and LinkedIn.</p>
          </Link>
          </div>
        </div>
      </section>
      {/* Internal linking — Australian location pages */}
      <LocationLinksStrip />
  </Layout>
);

export default EducationSeo;

