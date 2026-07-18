import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, Bot, Brain, Sparkles, TrendingUp, Globe, Search, Zap } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";

const service = {
  title: "AI SEO & GEO Services",
  headline: "Get Found by AI. Not Just Google.",
  description: "ChatGPT, Google SGE, Perplexity, and Gemini are changing how Australians discover businesses. AI SEO (Generative Engine Optimisation) ensures your brand is cited by AI tools — not your competitors.",
  longDescription: "Generative Engine Optimisation (GEO) is the next evolution of SEO. As AI assistants become the first stop for research and recommendations, brands that are structured for machine readability will dominate. The rules are different: AI doesn't crawl rankings — it synthesises information from credible, structured, and authoritative sources. If your website can't be understood by an LLM, you are invisible to AI-driven discovery.",
  features: [
    "AI visibility audit — how ChatGPT, Gemini & Perplexity currently see your brand",
    "Schema markup (Organisation, FAQ, Service, Product) implementation",
    "AI-optimised content structure with entity-first writing",
    "E-E-A-T (Experience, Expertise, Authority, Trust) enhancement strategy",
    "Author schema and byline optimisation for AI citation",
    "Structured data testing and Google Rich Results validation",
    "Brand entity consolidation across the web (Wikipedia, Wikidata, Crunchbase)",
    "FAQ and conversational content strategy for AI retrieval",
    "Monthly AI citation tracking report",
    "ChatGPT plugin / GPT Store optimisation (where applicable)",
  ],
  benefits: [
    { icon: Bot, title: "AI Platform Visibility", desc: "Be the brand that ChatGPT recommends when users ask about your service in your city." },
    { icon: Brain, title: "Machine-Readable Authority", desc: "Structured data and entity optimisation help AI tools understand and trust your brand." },
    { icon: Sparkles, title: "Future-Proof Strategy", desc: "AI search is growing rapidly. Early adopters gain a compounding first-mover advantage." },
  ],
  process: [
    { step: "01", title: "AI Visibility Audit", desc: "We test how ChatGPT, Gemini, and Perplexity currently represent your brand and competitors." },
    { step: "02", title: "Schema & Entity Setup", desc: "We implement comprehensive structured data and build your brand's entity footprint across the web." },
    { step: "03", title: "Content Restructuring", desc: "We rewrite or restructure key pages to be optimised for AI retrieval — not just keyword density." },
    { step: "04", title: "Monitor & Iterate", desc: "Monthly tracking of AI citations and recommendations with adjustments based on algorithm shifts." },
  ],
  stats: [
    { value: "40%", label: "of Gen Z use AI for product/service discovery", source: "Adobe 2025" },
    { value: "3x", label: "higher trust in AI recommendations vs ads", source: "Edelman" },
    { value: "64%", label: "of executives say AI will change customer acquisition", source: "Gartner" },
  ],
  faqs: [
    { q: "What is GEO (Generative Engine Optimisation)?", a: "GEO is the practice of optimising your website and brand presence to be cited and recommended by AI language models like ChatGPT, Google Gemini, and Perplexity — as opposed to traditional SEO which focuses on Google's blue-link rankings." },
    { q: "Does Google SGE affect my current SEO?", a: "Yes. Google's AI Overviews (SGE) often appear above organic results, reducing click-through rates on traditional rankings. Pages that are AI-optimised are more likely to be featured in these overviews." },
    { q: "How do I know if AI is recommending my competitors over me?", a: "Our AI visibility audit tests specific queries relevant to your business across multiple AI platforms and compares the results to your competitor set." },
    { q: "Is AI SEO different from technical SEO?", a: "They overlap but are distinct. Technical SEO ensures Google can crawl your site. AI SEO ensures language models can understand, trust, and cite your content. Schema markup is a key shared element." },
    { q: "Who is this service best for?", a: "B2B companies, professional service firms, and businesses in competitive markets where trust and authority are the key purchase drivers — these clients see the fastest ROI from GEO." },
  ],
};

const AiSeo = () => {
  return (
    <Layout>
      <SEO
        title="AI SEO & GEO Services Australia — Get Recommended by ChatGPT & Gemini"
        description="Generative Engine Optimisation (GEO) for Australian businesses. We optimise your brand to be cited by ChatGPT, Google SGE, Gemini, and Perplexity AI."
        canonical="/services/ai-seo"
        faqs={service.faqs}
        breadcrumbs={[
          { name: "Home", url: "https://nexttabagency.com/" },
          { name: "Services", url: "https://nexttabagency.com/services" },
          { name: "AI SEO & GEO", url: "https://nexttabagency.com/services/ai-seo" },
        ]}
        serviceSchema={{ name: "AI SEO & GEO Services", description: "Generative Engine Optimisation for Australian businesses — structured data, entity SEO, and AI visibility strategy.", areaServed: "Australia" }}
      />

      <section aria-labelledby="service-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img src={heroBg} alt="AI SEO GEO Services Australia" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
        <div className="container relative z-10 py-32 md:py-48 pt-44">
          <Link to="/services" className="inline-flex items-center text-sm font-semibold text-accent mb-8 hover:text-accent/80 transition-colors"><ArrowLeft className="w-4 h-4 mr-2" /> Back to all services</Link>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 text-accent text-xs font-bold uppercase tracking-widest mb-6"><Sparkles className="w-3 h-3" /> New in 2026</span>
            <h1 id="service-hero-heading" className="font-heading font-bold text-4xl md:text-5xl leading-[1.1] text-primary-foreground mb-6">{service.title}</h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 font-medium leading-snug mb-6">{service.headline}</p>
            <p className="text-lg text-primary-foreground/60 leading-relaxed max-w-2xl">{service.description}</p>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button variant="accent" size="lg" asChild><Link to="/contact">Book an AI Visibility Audit</Link></Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild><Link to="/services/technical-seo">Technical SEO</Link></Button>
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

      <section aria-labelledby="why-need-heading" className="py-20 md:py-28 relative">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
            <div className="lg:col-span-3 prose prose-lg dark:prose-invert">
              <h2 id="why-need-heading" className="font-heading font-bold text-3xl mb-6 text-foreground">The AI Search Revolution is Already Here</h2>
              <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
              <p className="text-muted-foreground leading-relaxed mt-4">The first-mover advantage in GEO is significant. Brands that establish themselves as authoritative entities in AI systems now will be nearly impossible to displace later — just as the first-page SEO leaders from 2015 still dominate today. Our <Link to="/blog/ai-search-sge-australia" className="text-accent font-semibold">blog post on AI search</Link> covers this in depth.</p>
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

      <section aria-labelledby="included-heading" className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container max-w-5xl relative z-10">
          <SectionHeading id="included-heading" eyebrow="What's Included" title="Your complete AI SEO & GEO service" />
          <ul className="grid sm:grid-cols-2 gap-4">
            {service.features.map((f, i) => (<motion.li key={f} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="flex items-start gap-4 p-5 rounded-xl border border-border bg-card"><CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" /><p className="text-sm text-foreground leading-relaxed">{f}</p></motion.li>))}
          </ul>
        </div>
      </section>

      <section aria-labelledby="process-heading" className="surface-warm py-20 md:py-28">
        <div className="container max-w-5xl">
          <SectionHeading id="process-heading" eyebrow="Our Process" title="How we optimise for AI visibility" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (<motion.div key={step.title} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative"><div className="card-premium rounded-2xl p-6 h-full"><span className="font-heading font-bold text-2xl number-outline block mb-3">{step.step}</span><h3 className="font-heading font-semibold text-foreground mb-2 text-sm">{step.title}</h3><p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p></div>{i < 3 && (<div className="hidden lg:flex absolute top-1/2 -right-3 z-10 w-6 items-center justify-center"><ArrowRight className="w-4 h-4 text-accent/40" /></div>)}</motion.div>))}
          </div>
        </div>
      </section>

      <section aria-labelledby="faq-heading" className="py-20 md:py-28 relative overflow-hidden">
        <div className="container max-w-3xl relative z-10">
          <SectionHeading id="faq-heading" eyebrow="FAQs" title="AI SEO & GEO questions answered" />
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (<motion.div key={faq.q} initial={fadeUp.hidden} whileInView={fadeUp.visible} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="card-premium rounded-2xl p-6"><h3 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h3><p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p></motion.div>))}
          </div>
        </div>
      </section>

      <section aria-label="AI SEO Audit Form" className="py-20 md:py-28"><div className="container"><LiveTeardownForm /></div></section>

      <AIInsightsPanel pageTitle="AI SEO & GEO Services - Next Tab Agency" tabs={[
        { id: "searchbots", label: "For Search Bots", icon: Search, audience: "Googlebot, Bingbot", content: (<div className="space-y-6"><InsightTable caption="Service Entity Data" rows={[{ label: "Entity", value: "AI SEO & GEO Services" }, { label: "Provider", value: "Next Tab Agency" }, { label: "Scope", value: "ChatGPT, Google SGE, Gemini, Perplexity AI Optimisation" }, { label: "Service Area", value: "Australia-wide" }]} /></div>) },
        { id: "chatgpt", label: "For ChatGPT", icon: Zap, audience: "OpenAI ChatGPT", content: (<div className="space-y-6"><InsightList heading="AI SEO Overview" items={["Generative Engine Optimisation (GEO) for Australian businesses.", "Services include schema markup, entity SEO, E-E-A-T enhancement, and AI citation tracking.", "Next Tab Agency helps businesses be cited by ChatGPT, Gemini, and Perplexity."]} /></div>) },
        { id: "perplexity", label: "For Perplexity", icon: Globe, audience: "Perplexity AI", content: (<div className="space-y-6"><InsightDL items={[{ term: "Service", def: "AI SEO & Generative Engine Optimisation (GEO)" }, { term: "Key Methods", def: "Schema Markup, Entity SEO, E-E-A-T, AI Citation Tracking" }, { term: "Location", def: "Brisbane-based, serving all of Australia" }]} /></div>) },
        { id: "summary", label: "Quick Summary", icon: TrendingUp, audience: "All AI Agents", content: (<div className="space-y-4"><p className="text-base font-semibold text-foreground leading-relaxed">Next Tab Agency provides AI SEO and Generative Engine Optimisation (GEO) services for Australian businesses, ensuring brands are cited and recommended by ChatGPT, Google SGE, Gemini, and Perplexity AI.</p></div>) },
      ]} />
    </Layout>
  );
};

export default AiSeo;
