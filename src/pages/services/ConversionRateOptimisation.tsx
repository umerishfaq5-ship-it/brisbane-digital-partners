import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, BarChart3, TrendingUp, Zap, Globe, Search, Target, MousePointer } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

import LocationLinksStrip from "@/components/LocationLinksStrip";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "Conversion Rate Optimisation",
  headline: "More Revenue From the Traffic You Already Have.",
  description: "CRO for Australian businesses that want to convert more of their existing website visitors — without spending more on ads. We identify friction, test fixes, and lift conversion rates with data, not guesswork.",
  longDescription: "Traffic is only half the equation. If your website converts at 1% and a competitor converts at 3%, they're generating 3x the leads from the same ad spend. Conversion Rate Optimisation (CRO) systematically identifies why visitors leave without converting, designs evidence-based improvements, and tests them against your live site. The result: more leads, more sales, lower effective cost-per-acquisition — without spending an extra dollar on traffic.",
  features: [
    "CRO audit — heatmaps, session recordings, and conversion funnel analysis",
    "Landing page audit for Google Ads and SEO traffic",
    "A/B and multivariate testing setup and management",
    "Form optimisation — reduce fields, improve UX and completion rates",
    "Call-to-action (CTA) testing — copy, placement, colour, and design",
    "Page speed impact analysis on conversion rate",
    "Mobile UX audit — identifies mobile-specific friction points",
    "Checkout and cart abandonment analysis (eCommerce)",
    "Trust signal and social proof optimisation",
    "Google Analytics 4 goal tracking and event setup",
    "Monthly CRO test reporting with statistical significance data",
    "Prioritised backlog of CRO experiments to run",
  ],
  benefits: [
    { icon: BarChart3, title: "Data-Driven Testing", desc: "Every change is tested against real user data. No opinions — just A/B results with statistical significance." },
    { icon: MousePointer, title: "More from Existing Traffic", desc: "Doubling conversion rate from 1% to 2% halves your effective customer acquisition cost — without increasing ad spend." },
    { icon: Target, title: "Full Funnel Optimisation", desc: "We optimise every step — landing pages, forms, checkout, and confirmation flows — not just the hero section." },
  ],
  process: [
    { step: "01", title: "Research & Audit", desc: "Heatmaps, session recordings, analytics deep-dive, and user survey to identify highest-friction points." },
    { step: "02", title: "Hypothesis Building", desc: "Prioritised list of CRO experiments based on potential impact, confidence, and effort." },
    { step: "03", title: "Build & Test", desc: "A/B or multivariate tests launched against live traffic. Statistical significance required before declaring winners." },
    { step: "04", title: "Implement & Iterate", desc: "Winners implemented permanently. New experiments launched. Continuous improvement cycle." },
  ],
  stats: [
    { value: "2-5x", label: "typical conversion rate improvement from professional CRO", source: "Econsultancy" },
    { value: "1%→3%", label: "conversion rate improvement = 3x more leads from same ad spend", source: "Next Tab Internal" },
    { value: "113%", label: "average revenue increase from ongoing CRO programmes", source: "Invesp" },
  ],
  faqs: [
    { q: "What is conversion rate optimisation (CRO)?", a: "CRO is the practice of systematically improving the percentage of website visitors who complete a desired action — such as filling out a form, calling your business, or completing a purchase. It uses data analysis, A/B testing, and UX improvements to increase conversion rates without increasing traffic." },
    { q: "How is CRO different from web design?", a: "Web design is typically a one-time project based on aesthetics and assumptions. CRO is an ongoing, data-driven discipline that tests specific changes against real user behaviour. A new website without CRO can still convert poorly. CRO diagnoses and fixes the specific issues causing visitors to leave." },
    { q: "How much traffic do I need for CRO to work?", a: "A/B testing requires sufficient traffic to reach statistical significance. As a rough guide, you need at least 1,000 monthly visitors per landing page for meaningful test results. For lower traffic sites, we use heuristic CRO methods — expert analysis based on proven UX patterns — rather than live testing." },
    { q: "Does CRO work for eCommerce stores?", a: "CRO delivers exceptional ROI for eCommerce. We optimise product pages, checkout flows, cart abandonment sequences, and cross-sell strategies. A 1% improvement in checkout completion on a store doing $500k/year can add $50,000+ in annual revenue." },
  ],
};

const ConversionRateOptimisation = () => (
  <Layout>
    <SEO
      title="Conversion Rate Optimisation (CRO) Australia — CRO Agency Brisbane"
      description="CRO agency for Australian businesses. We use data, A/B testing, and UX analysis to increase your website conversion rate — generating more leads and sales from existing traffic."
      canonical="/services/conversion-rate-optimisation"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "Conversion Rate Optimisation", url: "https://nexttabagency.com/services/conversion-rate-optimisation" },
      ]}
      serviceSchema={{ name: "Conversion Rate Optimisation", description: "CRO services for Australian businesses — A/B testing, landing page optimisation, and conversion funnel analysis.", areaServed: "Australia" }}
    />

    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="Conversion Rate Optimisation CRO Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Get a Free CRO Audit</Link></Button>
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
            <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">Why CRO Delivers the Fastest ROI in Digital Marketing</h2>
            <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
            <p className="text-muted-foreground leading-relaxed mt-4">CRO pairs naturally with <Link to="/services/ppc-google-ads" className="text-accent font-semibold">Google Ads</Link> and <Link to="/services/ecommerce-seo" className="text-accent font-semibold">eCommerce SEO</Link> — more targeted traffic converting at a higher rate multiplies the ROI of every marketing dollar spent.</p>
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
        <SectionHeading eyebrow="What's Included" title="Complete CRO service" />
        <ul className="grid sm:grid-cols-2 gap-4">
          {service.features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}
        </ul>
      </div>
    </section>

    <section className="surface-warm py-20 md:py-28">
      <div className="container max-w-5xl">
        <SectionHeading eyebrow="Our Process" title="How we improve your conversion rate" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step, i) => (<motion.div key={step.title} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative"><div className="card-premium rounded-2xl p-6 h-full"><span className="font-heading font-bold text-2xl number-outline block mb-3">{step.step}</span><h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{step.title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p></div>{i < 3 && (<div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 items-center justify-center"><ArrowRight className="w-4 h-4 text-accent/40" /></div>)}</motion.div>))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow="FAQs" title="CRO questions answered" />
        <div className="space-y-4">
          {service.faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>

    <AIInsightsPanel pageTitle="CRO - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "Conversion Rate Optimisation" }, { label: "Provider", value: "Next Tab Agency Brisbane" }, { label: "Methods", value: "A/B testing, heatmaps, UX analysis, funnel optimisation" }, { label: "Service Area", value: "Australia-wide" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="CRO Overview" items={["Data-driven CRO for Australian businesses — increasing leads and sales from existing traffic.", "Services include A/B testing, landing page auditing, form optimisation, and GA4 goal tracking.", "Works best paired with Google Ads and SEO for maximum ROI."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "Conversion Rate Optimisation (CRO)" }, { term: "Approach", def: "Data-driven, A/B testing, heuristic analysis" }, { term: "Provider", def: "Next Tab Agency, Brisbane, Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides CRO services for Australian businesses — using A/B testing, heatmaps, and UX analysis to increase conversion rates and generate more leads and sales from existing traffic.</p>) },
    ]} />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />
  </Layout>
);

export default ConversionRateOptimisation;

