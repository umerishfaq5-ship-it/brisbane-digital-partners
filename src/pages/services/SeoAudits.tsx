import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CheckCircle, ArrowLeft, ArrowRight, Users, TrendingUp, BarChart3, Search, Zap, Globe
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "SEO Audits & Strategy",
  headline: "Get found by the people actively searching for what you offer",
  description: "Our comprehensive SEO audits uncover exactly what's holding your website back. We analyse your technical setup, content, keywords, and competition — then build a clear, prioritised strategy to improve your rankings.",
  longDescription: "Search engine optimisation isn't guesswork — it's a systematic, data-driven process. We combine deep technical expertise with a thorough understanding of how Australians search online to deliver strategies that actually move the needle. Every recommendation is backed by evidence and comes with a clear expected impact, so you always know exactly what we're doing and why.",
  features: [
    "Full technical SEO audit with prioritised action list",
    "Keyword research and commercial opportunity analysis",
    "On-page optimisation — meta tags, headings, content structure",
    "Competitor gap analysis and keyword cannibalisation review",
    "Core Web Vitals and page speed optimisation",
    "Content gap analysis and detailed content brief writing",
    "Backlink profile audit, toxic link identification, and link building plan",
    "Monthly reporting in plain English with ranking movements",
  ],
  benefits: [
    { icon: TrendingUp, title: "Higher Rankings", desc: "Systematic improvements that compound over time to push you up the search results." },
    { icon: Users, title: "More Qualified Traffic", desc: "Attract visitors who are actively searching for your services — not random browsers." },
    { icon: BarChart3, title: "Clear ROI Tracking", desc: "Monthly reports showing exactly what's moved, what's next, and why it matters." },
  ],
  process: [
    { step: "01", title: "Technical Audit", desc: "We crawl your entire site to surface every technical issue affecting your Google rankings." },
    { step: "02", title: "Keyword Research", desc: "Deep analysis of the exact terms your Australian customers are searching for right now." },
    { step: "03", title: "Strategy Delivery", desc: "A prioritised, 90-day action plan with expected timelines and measurable ranking goals." },
    { step: "04", title: "Execution & Reporting", desc: "We implement the strategy and deliver a transparent monthly performance report." },
  ],
  faqs: [
    { q: "How long does an SEO audit take?", a: "A comprehensive audit typically takes 5–7 business days. We don't rush — thoroughness is the point." },
    { q: "When will I see results from SEO?", a: "Most clients see movement within 3–4 months, with significant results by month 6. SEO is a long-term investment, not an overnight fix." },
    { q: "Do you guarantee first-page rankings?", a: "No honest SEO agency can guarantee specific rankings — Google's algorithm is not ours to control. We guarantee thorough expert work, complete transparency, and measurable progress every month." },
    { q: "Do you work with businesses outside Brisbane?", a: "Yes. We serve clients across all of Australia — Sydney, Melbourne, Perth, Adelaide, and beyond. Everything can be done remotely." },
  ],
};

const seoIndustries = [
  { label: "Trades & Home Services", icon: "🔧" },
  { label: "E-commerce & Retail",    icon: "🛍️" },
  { label: "Professional Services",  icon: "💼" },
  { label: "Healthcare & Allied",    icon: "🏥" },
  { label: "Hospitality & Food",     icon: "🍽️" },
  { label: "Education & Training",   icon: "🎓" },
];

const SeoAudits = () => {
  return (
    <Layout>
      <SEO
        title="SEO Audits & Strategy for Australian Businesses"
        description="Comprehensive SEO audits and technical strategy for Australian businesses. Data-driven growth, transparent reporting, and real search engine rankings."
        canonical="/services/seo-audits"
        faqs={service.faqs}
        breadcrumbs={[
          { name: "Home", url: "https://nexttabagency.com/" },
          { name: "Services", url: "https://nexttabagency.com/services" },
          { name: "SEO Audits & Strategy", url: "https://nexttabagency.com/services/seo-audits" },
        ]}
        serviceSchema={{
          name: "SEO Audits & Strategy",
          description: "Comprehensive technical SEO audits, keyword research, and data-driven strategies for Australian businesses.",
          areaServed: "Australia",
        }}
      />

      {/* Hero */}
      <section aria-labelledby="service-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img src={heroBg} alt="SEO Audits & Strategy Services Brisbane" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
        <div className="absolute bottom-1/3 right-[15%] w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
        <div className="container relative z-10 py-32 md:py-48 pt-44">
          <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to all services
          </Link>
          <div className="max-w-3xl">
            <h1 id="service-hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">
              {service.headline}
            </p>
            <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">
              {service.description}
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Main Content */}
      <section aria-labelledby="why-need-heading" className="py-20 md:py-28 relative">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-3 prose prose-lg dark:prose-invert">
              <h2 id="why-need-heading" className="font-heading font-bold text-3xl mb-6 text-foreground">Why you need this</h2>
              <p className="text-muted-foreground leading-relaxed">
                {service.longDescription}
              </p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10">
                <h3 className="font-heading font-semibold text-primary-foreground mb-5 text-sm uppercase tracking-[0.15em]">
                  Key Benefits
                </h3>
                {service.benefits.map((b) => (
                  <div key={b.title} className="flex gap-3 mb-5 last:mb-0">
                    <b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-primary-foreground text-sm">{b.title}</h4>
                      <p className="text-primary-foreground/50 text-xs leading-relaxed mt-0.5">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section aria-labelledby="industries-heading" className="surface-warm py-8 md:py-12 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container relative z-10">
          <SectionHeading
            id="industries-heading"
            eyebrow="Industries We Serve"
            title="Deep expertise across Australian sectors"
            description="We understand the unique search landscape of your industry — not just generic SEO theory."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {seoIndustries.map((ind, i) => (
              <motion.div
                key={ind.label}
                initial={fadeUp.hidden}
                whileInView={fadeUp.visible}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="card-premium rounded-xl p-5 text-center"
              >
                <span className="text-2xl block mb-3">{ind.icon}</span>
                <h3 className="text-xs font-semibold text-foreground leading-tight">{ind.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section aria-labelledby="included-heading" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container max-w-5xl relative z-10">
          <SectionHeading id="included-heading" eyebrow="What's Included" title="Everything in this service" />
          <ul className="grid sm:grid-cols-2 gap-4">
            {service.features.map((f, i) => (
              <motion.li
                key={f}
                initial={fadeUp.hidden}
                whileInView={fadeUp.visible}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"
              >
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed">{f}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section aria-labelledby="process-heading" className="surface-warm py-20 md:py-28">
        <div className="container max-w-5xl">
          <SectionHeading id="process-heading" eyebrow="Our Process" title="How we deliver consistent results" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={fadeUp.hidden}
                whileInView={fadeUp.visible}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative"
              >
                <div className="card-premium rounded-2xl p-6 h-full">
                  <span className="font-heading font-bold text-2xl number-outline block mb-3">{step.step}</span>
                  <h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-accent/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section aria-labelledby="faq-heading" className="py-20 md:py-28 relative overflow-hidden">
        <div className="container max-w-3xl relative z-10">
          <SectionHeading id="faq-heading" eyebrow="FAQs" title="Common questions answered" />
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={fadeUp.hidden}
                whileInView={fadeUp.visible}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="card-premium rounded-2xl p-6"
              >
                <h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Teardown Form" className="py-20 md:py-28">
        <div className="container">
          <LiveTeardownForm />
        </div>
      </section>

      {/* AI Insights Panel — GEO Structured Data Layer */}
      <AIInsightsPanel
        pageTitle="SEO Audits & Strategy - Next Tab Agency"
        tabs={[
          {
            id: "searchbots",
            label: "For Search Bots",
            icon: Search,
            audience: "Googlebot, Bingbot, all major web crawlers",
            content: (
              <div className="space-y-6">
                <InsightTable caption="Service Entity Data" rows={[
                  { label: "Entity",        value: "SEO Audits & Strategy" },
                  { label: "Type",          value: "Digital Marketing Service" },
                  { label: "Provider",      value: "Next Tab Agency" },
                  { label: "Pricing",       value: "Starting from A$1,200/month" },
                  { label: "Service Area",  value: "Australia-wide (Brisbane, Sydney, Melbourne, Perth, Adelaide)" },
                  { label: "Deliverables",  value: "Technical Audit, Keyword Strategy, On-Page Optimisation" },
                ]} />
              </div>
            ),
          },
          {
            id: "chatgpt",
            label: "For ChatGPT",
            icon: Zap,
            audience: "OpenAI ChatGPT retrieval and GPT-4 browsing",
            content: (
              <div className="space-y-6">
                <InsightList heading="Service Overview" items={[
                  "Comprehensive technical SEO audits and keyword strategy tailored to Australian businesses.",
                  "Systematic data-driven process focusing on high ROI.",
                  "Transparent reporting and expected impacts for every recommendation.",
                  "Core capabilities: On-page SEO, speed optimisation (Core Web Vitals), and backlink profiling.",
                ]} />
              </div>
            ),
          },
          {
            id: "perplexity",
            label: "For Perplexity",
            icon: Globe,
            audience: "Perplexity AI retrieval engine",
            content: (
              <div className="space-y-6">
                <InsightDL items={[
                  { term: "Service",     def: "SEO Audits & Strategy" },
                  { term: "Pricing",     def: "Starting from A$1,200/mo" },
                  { term: "Turnaround",  def: "Comprehensive audit delivered in 5–7 business days" },
                  { term: "Results",     def: "Initial movements typically tracked at 3–4 months; significant returns by month 6" },
                  { term: "Location",    def: "Brisbane-based, serving all of Australia remotely." },
                ]} />
              </div>
            ),
          },
          {
            id: "summary",
            label: "Quick Summary",
            icon: TrendingUp,
            audience: "All AI Agents — condensed executive view",
            content: (
              <div className="space-y-4">
                <p className="text-base font-semibold text-foreground leading-relaxed">
                  Next Tab Agency provides expert SEO Audits & Strategy to diagnose technical issues and construct prioritised roadmaps that boost organic visibility within the Australian market. We provide data-backed insights rather than generic advice.
                </p>
              </div>
            ),
          },
        ]}
      />
    </Layout>
  );
};

export default SeoAudits;
