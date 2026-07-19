import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, Linkedin, TrendingUp, Zap, Globe, Search, Users, Target } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "LinkedIn Advertising",
  headline: "Reach Decision-Makers Where They Work.",
  description: "LinkedIn Ads management for Australian B2B businesses — precise job title, company, and industry targeting that puts your offer in front of the right professionals.",
  longDescription: "LinkedIn is the only advertising platform where you can target by job title, seniority level, company size, industry, and professional skills simultaneously. For B2B businesses selling to marketing directors, CFOs, HR managers, or business owners, LinkedIn Ads delivers the most precise audience targeting available — with a professional context that's receptive to business offers. We manage your LinkedIn Ads strategy, creative, targeting, and lead generation campaigns to generate pipeline-quality B2B leads.",
  features: [
    "LinkedIn Ads strategy and campaign architecture",
    "Sponsored Content (single image, carousel, video ads)",
    "Sponsored InMail / Message Ads campaigns",
    "Lead Gen Forms — capture leads without leaving LinkedIn",
    "LinkedIn retargeting — website visitors, video viewers, and event attendees",
    "Lookalike audience targeting from your customer list",
    "Job title, seniority, company, and industry targeting",
    "ABM (Account-Based Marketing) targeting by company name",
    "LinkedIn Insight Tag setup and event tracking",
    "A/B testing of ad copy, creative, and targeting",
    "Monthly LinkedIn Ads performance reporting",
    "Integration with CRM for lead attribution",
  ],
  stats: [
    { value: "4x", label: "higher conversion rate for B2B leads from LinkedIn vs other social platforms", source: "LinkedIn" },
    { value: "80%", label: "of B2B social media leads come from LinkedIn", source: "LinkedIn Business" },
    { value: "2x", label: "higher purchase intent among LinkedIn users exposed to brand content", source: "LinkedIn" },
  ],
  faqs: [
    { q: "Is LinkedIn Ads right for my business?", a: "LinkedIn Ads works best for B2B businesses, professional services, SaaS, recruitment, and any company selling to specific professional audiences. If your target customer has a specific job title (e.g., CFO, Marketing Director, HR Manager), LinkedIn provides targeting precision unavailable on any other platform." },
    { q: "How much does LinkedIn Advertising cost in Australia?", a: "LinkedIn CPCs are higher than other platforms (typically $8–15 AUD) because of the audience quality and precision. Minimum recommended daily budgets are $30–50 to generate statistically meaningful data. We scope budgets based on your target audience size and lead volume goals." },
    { q: "What's the best LinkedIn ad format for B2B leads?", a: "Lead Gen Forms (built-in LinkedIn forms) consistently outperform click-through-to-website campaigns for lead volume because they remove friction. For brand awareness and ABM, Sponsored Content video and carousel formats perform well. We test multiple formats and allocate budget to the highest performers." },
    { q: "Can LinkedIn Ads target specific companies?", a: "Yes — LinkedIn's Company Targeting lets you upload a list of target companies and serve ads exclusively to employees of those businesses. This is a cornerstone of Account-Based Marketing (ABM) and ideal for enterprise sales with long buying cycles." },
  ],
};

const LinkedInAds = () => (
  <Layout>
    <SEO
      title="LinkedIn Advertising Agency Australia — LinkedIn Ads Management"
      description="LinkedIn Ads management for Australian B2B businesses. Precise job title, company, and industry targeting that generates pipeline-quality leads from decision-makers."
      canonical="/services/linkedin-ads"
      faqs={service.faqs}
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Services", url: "https://nexttabagency.com/services" },
        { name: "LinkedIn Advertising", url: "https://nexttabagency.com/services/linkedin-ads" },
      ]}
      serviceSchema={{ name: "LinkedIn Advertising Services", description: "LinkedIn Ads management for Australian B2B businesses — Sponsored Content, Lead Gen Forms, and ABM targeting.", areaServed: "Australia" }}
    />
    <section aria-labelledby="hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
      <img src={heroBg} alt="LinkedIn Advertising Agency Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
      <div className="container relative z-10 py-32 md:py-48 pt-44">
        <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><Linkedin className="w-3 h-3" /> LinkedIn Advertising</span>
          <h1 id="hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
          <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
          <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Button variant="accent" size="lg" asChild><Link to="/contact">Request a LinkedIn Ads Audit</Link></Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/b2b-seo">B2B SEO</Link></Button>
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
            <h2 className="font-heading font-bold text-3xl mb-6 text-foreground">The Only Platform That Targets by Job Title</h2>
            <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
            <p className="text-muted-foreground leading-relaxed mt-4">LinkedIn Ads pairs naturally with <Link to="/services/b2b-seo" className="text-accent font-semibold">B2B SEO</Link> for inbound organic leads and <Link to="/services/content-marketing" className="text-accent font-semibold">Content Marketing</Link> to fuel your LinkedIn thought leadership.</p>
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="lg:col-span-2">
            <div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10">
              <h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">Key Benefits</h3>
              {[{ icon: Target, title: "Unmatched B2B Targeting", desc: "Target by job title, seniority, company, industry, and skills — simultaneously." }, { icon: Users, title: "Decision-Maker Reach", desc: "4 in 5 LinkedIn members drive business decisions. No other platform matches this." }, { icon: TrendingUp, title: "Pipeline-Quality Leads", desc: "LinkedIn leads convert to revenue at 2x the rate of other social platforms for B2B." }].map((b) => (<div key={b.title} className="flex gap-3 mb-5 last:mb-0"><b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" /><div><h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4><p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p></div></div>))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots" />
      <div className="container max-w-5xl relative z-10">
        <SectionHeading eyebrow="What's Included" title="Complete LinkedIn Ads management" />
        <ul className="grid sm:grid-cols-2 gap-4">
          {service.features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}
        </ul>
      </div>
    </section>
    <section className="py-20 md:py-28 bg-muted/30">
      <div className="container max-w-3xl">
        <SectionHeading eyebrow="FAQs" title="LinkedIn Ads questions answered" />
        <div className="space-y-4">
          {service.faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}
        </div>
      </div>
    </section>
    <section className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>
    <AIInsightsPanel pageTitle="LinkedIn Advertising - Next Tab Agency" tabs={[
      { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot", content: (<InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "LinkedIn Advertising Services" }, { label: "Provider", value: "Next Tab Agency Brisbane" }, { label: "Formats", value: "Sponsored Content, Lead Gen Forms, InMail, ABM" }, { label: "Service Area", value: "Australia-wide" }]} />) },
      { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<InsightList heading="LinkedIn Advertising Overview" items={["LinkedIn Ads management for Australian B2B businesses.", "Services include: Sponsored Content, Lead Gen Forms, InMail, retargeting, and ABM company targeting.", "Ideal for B2B, professional services, SaaS, and enterprise sales."]} />) },
      { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<InsightDL items={[{ term: "Service", def: "LinkedIn Advertising" }, { term: "Best For", def: "B2B, professional services, SaaS, enterprise" }, { term: "Provider", def: "Next Tab Agency, Brisbane, Australia" }]} />) },
      { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides LinkedIn Ads management for Australian B2B businesses — Sponsored Content, Lead Gen Forms, and ABM targeting that puts your offer in front of decision-makers.</p>) },
    ]} />
  </Layout>
);

export default LinkedInAds;
