import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, Mail, TrendingUp, Zap, Globe, Search, Users, BarChart3 } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

import LocationLinksStrip from "@/components/LocationLinksStrip";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "Email Marketing Agency",
  headline: "Your List is Your Most Valuable Asset. Are You Using It?",
  description: "Email marketing for Australian businesses that want to generate revenue from their existing customer base — with automated sequences, targeted campaigns, and measurable ROI.",
  longDescription: "Email delivers $36 for every $1 spent — more than any other marketing channel. Yet most Australian businesses either don't have an email strategy, or are only sending occasional newsletters with minimal results. We build and manage email marketing systems that nurture leads through the funnel, re-engage inactive customers, drive repeat purchases for eCommerce stores, and automate the most time-consuming parts of your client communication.",
  features: [
    "Email marketing strategy and platform setup (Klaviyo, Mailchimp, ActiveCampaign)",
    "Welcome sequence automation for new subscribers",
    "Lead nurture sequences for enquiry-to-client conversion",
    "Re-engagement campaigns for inactive contacts",
    "Broadcast email campaigns (promotions, announcements, newsletters)",
    "eCommerce automation: abandoned cart, post-purchase, win-back sequences",
    "Email list segmentation and contact scoring",
    "Subject line A/B testing",
    "Email deliverability audit and technical setup (SPF, DKIM, DMARC)",
    "Monthly email performance reporting (open rate, click rate, revenue attributed)",
    "Lead magnet strategy to grow your email list",
    "SPAM Act 2003 compliance (Australian email law)",
  ],
  benefits: [
    { icon: BarChart3, title: "$36 ROI per $1 Spent", desc: "Email consistently outperforms every other marketing channel in ROI. Your list is the highest-leverage asset in your business." },
    { icon: Users, title: "Own Your Audience", desc: "Unlike social media, your email list can't be taken away by an algorithm change. It's a direct, owned channel to your customers." },
    { icon: TrendingUp, title: "Automated Revenue", desc: "Once set up, email automations generate revenue 24/7 — welcome sequences, cart recovery, and post-purchase flows work while you sleep." },
  ],
  process: [
    { step: "01", title: "Audit & Strategy", desc: "Review your existing list, platform, automations, and campaign history. Build a 90-day email strategy." },
    { step: "02", title: "Build Automations", desc: "Design and deploy your core automated sequences — welcome, nurture, abandoned cart, and re-engagement." },
    { step: "03", title: "Campaign Management", desc: "Ongoing broadcast campaigns for promotions, news, and content — all written, designed, and delivered." },
    { step: "04", title: "Optimise & Report", desc: "Monthly reporting on opens, clicks, and revenue. Continuous A/B testing to improve results over time." },
  ],
  stats: [
    { value: "$36", label: "average ROI for every $1 spent on email marketing", source: "Litmus" },
    { value: "4,200%", label: "email marketing ROI — the highest of any digital channel", source: "Hubspot" },
    { value: "91%", label: "of Australian consumers check email daily", source: "Statista AU" },
  ],
  faqs: [
    { q: "Which email marketing platform do you use?", a: "We work with Klaviyo (recommended for eCommerce), Mailchimp, ActiveCampaign, and HubSpot. The right platform depends on your business type, integration requirements, and budget. We'll recommend the best fit during our strategy session." },
    { q: "Does email marketing still work in 2026?", a: "Yes — email remains the highest-ROI digital marketing channel. With iOS privacy changes reducing social media reach and Google Ads costs rising, email is increasingly important as an owned, cost-effective channel that businesses control directly." },
    { q: "How do we grow our email list?", a: "We build list growth strategies using lead magnets (free guides, discount codes, quote calculators), pop-up forms, landing pages, and post-enquiry capture. We can also run paid lead generation campaigns to accelerate list growth." },
    { q: "Is email marketing legal in Australia?", a: "Yes, but it's regulated by the Spam Act 2003. You must have consent, include an unsubscribe mechanism, and identify the sender. All campaigns we manage are fully compliant with Australian email marketing law." },
  ],
};

const EmailMarketing = () => (
  <Layout>
    <SEO
      title="Email Marketing Agency Australia — Email Marketing Brisbane"
      description="Email marketing agency for Australian businesses. We build automated sequences, manage campaigns, and deliver measurable revenue from your email list with full SPAM Act compliance."
      canonical="/services/email-marketing"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "Email Marketing", url: "https://nexttabagency.com/services/email-marketing" },
      ]}
      serviceSchema={{ name: "Email Marketing Services", description: "Email marketing strategy, automation, and campaign management for Australian businesses.", areaServed: "Australia" }}
    />

    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="Email Marketing Agency Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><Mail className="w-3 h-3" /> Email Marketing</span>
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Get an Email Marketing Audit</Link></Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/content-marketing">Content Marketing</Link></Button>
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
            <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">The Highest-ROI Channel Most Businesses Underuse</h2>
            <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
            <p className="text-muted-foreground leading-relaxed mt-4">Email works best as part of a connected strategy. Pair it with <Link to="/services/content-marketing" className="text-accent font-semibold">Content Marketing</Link> to grow your list, and <Link to="/services/conversion-rate-optimisation" className="text-accent font-semibold">CRO</Link> to maximise conversions from email traffic.</p>
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
        <SectionHeading eyebrow="What's Included" title="Complete email marketing service" />
        <ul className="grid sm:grid-cols-2 gap-4">
          {service.features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}
        </ul>
      </div>
    </section>

    <section className="surface-warm py-20 md:py-28">
      <div className="container max-w-5xl">
        <SectionHeading eyebrow="Our Process" title="How we build your email revenue engine" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {service.process.map((step, i) => (<motion.div key={step.title} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative"><div className="card-premium rounded-2xl p-6 h-full"><span className="font-heading font-bold text-2xl number-outline block mb-3">{step.step}</span><h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{step.title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p></div>{i < 3 && (<div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 items-center justify-center"><ArrowRight className="w-4 h-4 text-accent/40" /></div>)}</motion.div>))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow="FAQs" title="Email marketing questions answered" />
        <div className="space-y-4">
          {service.faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>

    <AIInsightsPanel pageTitle="Email Marketing - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "Email Marketing Services" }, { label: "Provider", value: "Next Tab Agency Brisbane" }, { label: "Platforms", value: "Klaviyo, Mailchimp, ActiveCampaign, HubSpot" }, { label: "Service Area", value: "Australia-wide, SPAM Act 2003 compliant" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="Email Marketing Overview" items={["Email marketing strategy, automation, and campaign management for Australian businesses.", "Services include: welcome sequences, lead nurture, abandoned cart, re-engagement, and broadcast campaigns.", "Full SPAM Act 2003 compliance. Works with Klaviyo, Mailchimp, ActiveCampaign."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "Email Marketing" }, { term: "Compliance", def: "Australian SPAM Act 2003" }, { term: "Provider", def: "Next Tab Agency, Brisbane, Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides email marketing services for Australian businesses — building automated sequences, managing campaigns, and delivering measurable revenue from email lists with full SPAM Act compliance.</p>) },
    ]} />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />
  </Layout>
);

export default EmailMarketing;

