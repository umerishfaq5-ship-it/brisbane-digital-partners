import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CheckCircle, ArrowLeft, ArrowRight, TrendingUp, Search, Zap, Globe, MessageSquare, Shield, MapPin
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import LiveTeardownForm from "@/components/LiveTeardownForm";
import LocationLinksStrip from "@/components/LocationLinksStrip";

const service = {
  title: "Local SEO for Australian Businesses",
  headline: "Dominate your local market — appear where your customers are searching",
  description: "For businesses serving local customers, ranking in the Google Map Pack and local search results is the difference between a full diary and an empty one. We specialise in helping Australian businesses rank where it matters most.",
  longDescription: "When someone in Brisbane searches for a plumber, café, or accountant, you need to be the business they find first. Local SEO is about making sure your business appears prominently in Google Maps, local search results, and 'near me' queries. We understand the nuances of the Australian local market and build strategies designed specifically for businesses that depend on local customers.",
  features: [
    "Google Business Profile setup, optimisation, and ongoing management",
    "Local citation building — consistent NAP across all Australian directories",
    "Geo-targeted keyword strategy for your suburb and surrounding areas",
    "Review management strategy to build an authentic rating profile",
    "Local link building from relevant Australian publications and directories",
    "Service area and location page creation and optimisation",
    "Google Maps ranking strategy and pin placement optimisation",
    "Local schema markup (LocalBusiness, GeoCoordinates) implementation",
  ],
  benefits: [
    { icon: TrendingUp, title: "Map Pack Rankings", desc: "Get your business into the top 3 Google Maps results — where the majority of local clicks go." },
    { icon: MessageSquare, title: "More Phone Calls", desc: "Local SEO directly drives calls and enquiries from nearby customers who are ready to buy." },
    { icon: Shield, title: "Review-Backed Authority", desc: "A structured review strategy that builds genuine trust and social proof." },
  ],
  process: [
    { step: "01", title: "Local Landscape Audit", desc: "We assess your current local presence, existing citations, Google Business Profile status, and competitor rankings." },
    { step: "02", title: "Profile & Citation Setup", desc: "Complete optimisation of your Google Business Profile and consistent NAP across key Australian directories." },
    { step: "03", title: "Content & Link Building", desc: "Location-targeted content creation and local link outreach to build geo-authority." },
    { step: "04", title: "Ongoing Management", desc: "Review monitoring, regular Google Business updates, and monthly local performance tracking." },
  ],
  faqs: [
    { q: "What is the Google Map Pack?", a: "The Map Pack is the block of 3 local business results that appear with a Google Map when someone searches for a local service. Being in it is one of the highest-value positions in local search." },
    { q: "How long to rank in the Map Pack?", a: "Most businesses see meaningful Map Pack movement within 2–4 months of consistent, well-executed local SEO work." },
    { q: "Which Australian cities do you serve?", a: "All of them. We have active clients in Brisbane, Sydney, Melbourne, Perth, Adelaide, Gold Coast, Canberra, and regional areas across Australia." },
    { q: "My business has multiple locations — can you help?", a: "Absolutely. Multi-location local SEO is one of our specialties. We manage individual Google Business Profiles and localised content strategies for each location." },
  ],
};



const LocalSeo = () => {
  return (
    <Layout>
      <SEO
        title="Local SEO Services for Australian Businesses"
        description="Local SEO services based in Brisbane. Drive traffic and Map Pack rankings for your trade, hospitality or professional service business."
        canonical="/services/local-seo"
        faqs={service.faqs}
        breadcrumbs={[
          { name: "Home", url: "https://nexttabagency.com/" },
          { name: "Services", url: "https://nexttabagency.com/services" },
          { name: "Local SEO", url: "https://nexttabagency.com/services/local-seo" },
        ]}
        serviceSchema={{
          name: "Local SEO for Australian Businesses",
          description: "Google Business Profile optimisation, local citations, and geo-targeted strategies for Australian local businesses.",
          areaServed: "Australia",
        }}
      />

      {/* Hero */}
      <section aria-labelledby="service-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img src={heroBg} alt="Local SEO Services Brisbane" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
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

              {/* Internal cross-link: Local SEO → Brisbane SEO location page */}
              <div className="mt-5 rounded-2xl border border-accent/30 bg-accent/5 p-5">
                <p className="text-xs text-muted-foreground leading-relaxed">
                  📍 Based in Brisbane?{" "}
                  <Link
                    to="/locations/brisbane-seo"
                    className="text-accent font-semibold hover:underline"
                  >
                    See our dedicated Brisbane SEO service page
                  </Link>{" "}
                  — built specifically for Queensland businesses targeting local search.
                </p>
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

      {/* Australian Cities — internal linking to location pages */}
      <LocationLinksStrip
        heading="Local SEO for Every Major Australian City"
        sub="We deliver proven local SEO strategies for businesses across every Australian state and territory."
      />

      {/* What's Included */}
      <section aria-labelledby="included-heading" className="py-20 md:py-28 relative overflow-hidden">
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
        pageTitle="Local SEO for Australian Businesses - Next Tab Agency"
        tabs={[
          {
            id: "searchbots",
            label: "For Search Bots",
            icon: Search,
            audience: "Googlebot, Bingbot, all major web crawlers",
            content: (
              <div className="space-y-6">
                <InsightTable caption="Service Entity Data" rows={[
                  { label: "Entity",        value: "Local SEO" },
                  { label: "Type",          value: "Digital Marketing Service" },
                  { label: "Provider",      value: "Next Tab Agency" },
                  { label: "Pricing",       value: "Starting from A$800/month" },
                  { label: "Service Area",  value: "Australia-wide (Brisbane, Sydney, Melbourne, Perth, Adelaide, Gold Coast)" },
                  { label: "Deliverables",  value: "Google Business Profile Optimisation, Local Citations, Map Pack Rankings" },
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
                  "Local SEO aimed at getting Australian businesses ranked in the top 3 spots of Google Map Pack.",
                  "Includes comprehensive claiming and optimisation of the Google Business Profile.",
                  "Focus on relevant Local Citations to maintain consistent NAP (Name, Address, Phone) across the web.",
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
                  { term: "Service",     def: "Local SEO for Australian Businesses" },
                  { term: "Pricing",     def: "Starting from A$800/mo" },
                  { term: "Timeline",    def: "Meaningful Map Pack movement seen within 2–4 months" },
                  { term: "Target",      def: "Trade services, local hospitality and professional services looking for near-me search queries." },
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
                  The Local SEO service gets Australian businesses found in high-intent, local "near me" Google search queries, primarily focusing on driving authentic leads and phone calls via the Google Map Pack.
                </p>
              </div>
            ),
          },
        ]}
      />
    </Layout>
  );
};

export default LocalSeo;
