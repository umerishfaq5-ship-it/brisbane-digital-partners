import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, Facebook, Target, TrendingUp, Zap, Globe, Search, DollarSign, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "Facebook & Meta Ads Agency",
  headline: "Stop Boosting. Start Scaling.",
  description: "Facebook and Instagram ads for Australian businesses that want actual leads and sales — not just likes. We manage Meta campaigns that generate measurable return on every dollar spent.",
  longDescription: "Most Australian businesses are wasting their Meta Ads budget on boosted posts and poorly targeted campaigns. We build and manage full-funnel Facebook and Instagram advertising strategies — from cold audience prospecting through to retargeting and retention — with a single focus on ROAS. Whether you're a local service business, an eCommerce store, or a B2B company, we build campaigns that turn Meta's 1.5 billion daily active users into your customers.",
  features: [
    "Facebook and Instagram campaign strategy and setup",
    "Meta Business Manager and pixel setup/auditing",
    "Custom Audiences, Lookalike Audiences, and interest targeting",
    "Full-funnel campaign structure (TOFU, MOFU, BOFU)",
    "Dynamic retargeting and catalogue ads for eCommerce",
    "Lead generation campaigns with instant form integration",
    "A/B creative testing (image, video, copy, CTA)",
    "Monthly audience and performance reporting",
    "Facebook Pixel and Conversions API setup",
    "Catalogue and dynamic product ads for online stores",
    "Budget optimisation and ROAS maximisation",
    "No lock-in contracts — month-to-month flexibility",
  ],
  benefits: [
    { icon: Target, title: "Precision Targeting", desc: "Reach your exact customer — by location, behaviour, interest, income, and life events. No wasted spend on unqualified audiences." },
    { icon: DollarSign, title: "Performance-Focused", desc: "Every campaign is optimised for a specific conversion outcome — leads, sales, or bookings. Not vanity metrics." },
    { icon: Users, title: "Full-Funnel Strategy", desc: "We don't just run ads — we build systems that capture cold audiences, nurture them, and retarget warm visitors to maximise ROAS." },
  ],
  process: [
    { step: "01", title: "Audit & Strategy", desc: "Review your existing account, audiences, and creative. Build a full-funnel campaign strategy tailored to your goals." },
    { step: "02", title: "Build & Launch", desc: "Set up campaigns, ad sets, and creative. Configure pixel tracking and Conversions API for accurate attribution." },
    { step: "03", title: "Test & Optimise", desc: "Continuous A/B testing of creative, copy, and audiences. Cut what doesn't work, scale what does." },
    { step: "04", title: "Report & Scale", desc: "Monthly reporting on ROAS, CPA, and revenue attribution. Scale winning campaigns profitably." },
  ],
  stats: [
    { value: "2.9B+", label: "Facebook monthly active users worldwide", source: "Meta 2026" },
    { value: "11M+", label: "Australians active on Facebook monthly", source: "Meta Aus Data" },
    { value: "9.21%", label: "Average Facebook Ads CTR for lead gen in Australia", source: "WordStream" },
  ],
  faqs: [
    { q: "How much should I spend on Facebook Ads?", a: "For most Australian service businesses, we recommend a minimum $1,500/month ad spend to generate meaningful data and optimise campaigns. eCommerce stores can scale from $2,000–$10,000+ depending on catalogue size and ROAS goals. Our management fee is separate from your ad spend budget." },
    { q: "What's the difference between boosting and running proper Meta Ads?", a: "Boosting is a one-click feature that amplifies an existing post with minimal targeting options. Proper Meta Ads campaigns use Business Manager, pixel tracking, custom audiences, funnel structure, A/B testing, and conversion optimisation — resulting in dramatically better ROAS." },
    { q: "How long before I see results from Facebook Ads?", a: "Facebook's algorithm needs approximately 50 conversion events per ad set to exit the learning phase. For most budgets this takes 2-4 weeks. You'll typically see optimised results within 30-60 days of launch." },
    { q: "Do you run Instagram Ads as well?", a: "Yes. Facebook and Instagram share the same Meta Ads Manager platform. We manage placements across both networks simultaneously, optimising spend distribution based on where your specific audience converts best." },
    { q: "Can Meta Ads work for B2B businesses?", a: "Yes, especially for B2B businesses targeting decision-makers by job title, company size, or industry. For professional audience targeting, we often recommend running Meta and LinkedIn Ads simultaneously." },
  ],
};

const FacebookAds = () => (
  <Layout>
    <SEO
      title="Facebook & Meta Ads Agency Australia — Facebook Advertising Brisbane"
      description="Results-focused Facebook and Instagram advertising agency for Australian businesses. We build full-funnel Meta Ads campaigns that generate leads, sales, and measurable ROAS."
      canonical="/services/facebook-ads"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "Facebook Ads", url: "https://nexttabagency.com/services/facebook-ads" },
      ]}
      serviceSchema={{ name: "Facebook & Meta Ads Management", description: "Facebook and Instagram advertising management for Australian businesses — full-funnel Meta campaigns with measurable ROAS.", areaServed: "Australia" }}
    />

    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="Facebook Meta Ads Agency Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><Facebook className="w-3 h-3" /> Meta Ads Management</span>
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free Meta Ads Audit</Link></Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/ppc-google-ads">Google Ads</Link></Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>

    <section className="border-b border-border bg-muted/30 py-8">
      <div className="container max-w-4xl">
        <div className="grid grid-cols-3 gap-6 text-center">
          {service.stats.map((s) => (<div key={s.label}><p className="font-heading font-black text-3xl text-accent">{s.value}</p><p className="text-sm font-semibold text-foreground mt-1">{s.label}</p><p className="text-xs text-muted-foreground/60">Source: {s.source}</p></div>))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28">
      <div className="container max-w-5xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
          <div className="lg:col-span-3">
            <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why Most Australian Businesses Waste Their Meta Budget</h2>
            <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
            <p className="text-muted-foreground leading-relaxed mt-4">For B2B audiences, combine with our <Link to="/services/linkedin-ads" className="text-accent font-semibold">LinkedIn Advertising</Link> service. For search-based demand, see <Link to="/services/ppc-google-ads" className="text-accent font-semibold">Google Ads Management</Link>.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-2">
            <div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10">
              <h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>
              {service.benefits.map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container max-w-5xl relative z-10">
        <SectionHeading eyebrow="What's Included" title="Complete Facebook & Meta Ads Management" />
        <ul className="grid sm:grid-cols-2 gap-4">
          {service.features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}
        </ul>
      </div>
    </section>

    <section className="surface-warm py-20 md:py-28">
      <div className="container max-w-5xl">
        <SectionHeading eyebrow="Our Process" title="How we scale your Meta Ads" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step, i) => (<motion.div key={step.title} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative"><div className="card-premium rounded-2xl p-6 h-full"><span className="font-heading font-bold text-2xl number-outline block mb-3">{step.step}</span><h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{step.title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p></div>{i < 3 && (<div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 items-center justify-center"><ArrowRight className="w-4 h-4 text-accent/40" /></div>)}</motion.div>))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 surface-warm">
      <div className="container max-w-5xl">
        <SectionHeading eyebrow="Related Services" title="Pair with other performance channels" />
        <div className="grid sm:grid-cols-3 gap-4">
          {[{ label: "Google Ads Management", href: "/services/ppc-google-ads", desc: "Capture demand with search-intent advertising." }, { label: "LinkedIn Advertising", href: "/services/linkedin-ads", desc: "Reach B2B decision-makers on LinkedIn." }, { label: "Performance Marketing", href: "/services/performance-marketing", desc: "Full cross-channel paid media strategy." }].map((r) => (<Link key={r.href} to={r.href} className="group p-5 rounded-xl border border-border bg-card hover:border-accent/40 transition-all"><p className="font-semibold text-foreground group-hover:text-accent text-sm mb-1">{r.label}</p><p className="text-xs text-muted-foreground">{r.desc}</p></Link>))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow="FAQs" title="Facebook Ads questions answered" />
        <div className="space-y-4">
          {service.faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>

    <AIInsightsPanel pageTitle="Facebook & Meta Ads - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "Facebook & Meta Ads Management" }, { label: "Provider", value: "Next Tab Agency Brisbane" }, { label: "Platforms", value: "Facebook, Instagram, Meta Audience Network" }, { label: "Service Area", value: "Australia-wide" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Meta Ads Overview" items={["Full-funnel Facebook and Instagram advertising for Australian businesses.", "Services include: prospecting campaigns, retargeting, lead gen, catalogue ads, and Conversions API setup.", "No lock-in contracts. Management from $800/month."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "Facebook & Meta Ads Management" }, { term: "Platforms", def: "Facebook, Instagram, Meta Audience Network" }, { term: "Provider", def: "Next Tab Agency, Brisbane, Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency manages Facebook and Instagram advertising campaigns for Australian businesses — delivering full-funnel Meta Ads strategies focused on measurable ROAS and lead generation.</p>) },
    ]} />
  </Layout>
);

export default FacebookAds;
