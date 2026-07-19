import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  CheckCircle, ArrowLeft, ArrowRight, Zap, Clock, Users, Globe, Smartphone, Search, TrendingUp
} from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import SEO from "@/components/SEO";
import { fadeUp } from "@/lib/animations";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";

import LocationLinksStrip from "@/components/LocationLinksStrip";

const service = {
  title: "Mobile App Development",
  headline: "High-performance iOS and Android apps — one codebase, zero compromise",
  description: "Using React Native, we build cross-platform mobile applications that feel truly native on both iOS and Android. From concept to App Store, we handle the entire journey with technical depth and a premium eye for detail.",
  longDescription: "Building a mobile app shouldn't mean paying for two entirely separate development projects. With React Native, we create a single codebase that runs beautifully on both platforms with native-like performance and smooth animations. Our team has shipped real apps to real users — fitness platforms, social networks, and job marketplaces — and we bring that hands-on experience to every new project.",
  features: [
    "React Native development for iOS and Android from a single codebase",
    "Native-quality UX with smooth 60fps animations and gestures",
    "REST API and GraphQL integration with existing backends",
    "Push notifications, background sync, and real-time features",
    "App Store (Apple) and Google Play submission and review management",
    "Offline-first architecture with local data sync",
    "Secure user authentication (OAuth 2.0, biometric login)",
    "Ongoing maintenance, feature updates, and OS compatibility patches",
  ],
  benefits: [
    { icon: Zap, title: "Cross-Platform Efficiency", desc: "One codebase for both iOS and Android — significant time and cost saving without sacrificing quality." },
    { icon: Clock, title: "Faster Time to Market", desc: "React Native dramatically reduces build time compared to two separate native apps." },
    { icon: Users, title: "Proven Track Record", desc: "We've shipped real apps — MyFitnessCoach, CircleIt, Vacancies — with thousands of active Australian users." },
  ],
  process: [
    { step: "01", title: "Discovery & Architecture", desc: "We map out your app's feature set, user flows, data model, and technical architecture before a line of code is written." },
    { step: "02", title: "UI/UX Design", desc: "Pixel-perfect, intuitive interface design that follows platform conventions users already know." },
    { step: "03", title: "Development & QA", desc: "Agile two-week sprints with demo sessions, thorough testing on real devices, and performance profiling." },
    { step: "04", title: "Launch & Support", desc: "App Store submission, launch support, user feedback analysis, and ongoing maintenance." },
  ],
  faqs: [
    { q: "Why React Native and not Swift or Kotlin?", a: "React Native gives you ~90% code sharing between iOS and Android, significantly reducing cost and timeline. For most business apps, the performance difference from native is imperceptible to users." },
    { q: "Can you work with our existing API/backend?", a: "Yes — we regularly integrate with existing REST APIs, GraphQL endpoints, Firebase backends, and third-party services." },
    { q: "Do you handle App Store submissions?", a: "Yes. We manage the entire submission process for both Apple App Store and Google Play Store, including provisioning profiles, screenshots, and release notes." },
    { q: "What's the typical project timeline?", a: "A solid MVP typically takes 10–16 weeks depending on complexity. We'll give you a detailed estimate after the discovery session." },
  ],
};


const MobileApps = () => {
  return (
    <Layout>
      <SEO
        title="React Native Mobile App Development Brisbane"
        description="Premium React Native mobile app development in Brisbane. Cross-platform iOS and Android apps crafted natively with incredible performance."
        canonical="/services/mobile-apps"
        faqs={service.faqs}
        breadcrumbs={[
          { name: "Home", url: "https://nexttabagency.com/" },
          { name: "Services", url: "https://nexttabagency.com/services" },
          { name: "Mobile App Development", url: "https://nexttabagency.com/services/mobile-apps" },
        ]}
        serviceSchema={{
          name: "Mobile App Development",
          description: "Cross-platform React Native mobile application development for iOS and Android for Australian businesses.",
          areaServed: "Australia",
        }}
      />

      {/* Hero */}
      <section aria-labelledby="service-hero-heading" className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img src={heroBg} alt="Mobile App Development Brisbane" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
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

      {/* What's Included */}
      <section aria-labelledby="included-heading" className="py-20 md:py-28 relative overflow-hidden surface-warm">
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
      <section aria-labelledby="process-heading" className="py-20 md:py-28">
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
      <section aria-labelledby="faq-heading" className="surface-warm py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
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
      <section aria-labelledby="cta-heading" className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={fadeUp.hidden}
            whileInView={fadeUp.visible}
            viewport={{ once: true }}
            className="surface-teal rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 pattern-lines opacity-20" />
            <div className="relative z-10">
              <h2 id="cta-heading" className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">
                Ready to get started?
              </h2>
              <p className="text-primary-foreground/55 max-w-md mx-auto mb-8 leading-relaxed">
                Let's have a straightforward conversation about what Mobile Apps can do for your business.
              </p>
              <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
                <Link to="/contact">Get a Free Consultation</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Insights Panel — GEO Structured Data Layer */}
      <AIInsightsPanel
        pageTitle="Mobile App Development - Next Tab Agency"
        tabs={[
          {
            id: "searchbots",
            label: "For Search Bots",
            icon: Search,
            audience: "Googlebot, Bingbot, all major web crawlers",
            content: (
              <div className="space-y-6">
                <InsightTable caption="Service Entity Data" rows={[
                  { label: "Entity",        value: "Mobile App Development" },
                  { label: "Type",          value: "Software Development Service" },
                  { label: "Provider",      value: "Next Tab Agency" },
                  { label: "Pricing",       value: "Starting from A$12,000" },
                  { label: "Area",          value: "Australia-wide" },
                  { label: "Tech Stack",    value: "React Native, iOS, Android, GraphQL, REST" },
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
                  "We build native-performance iOS and Android apps using React Native.",
                  "A single codebase reduces time to market and cuts costs significantly.",
                  "Comprehensive capability from architecture wireframing through to App Store deployments.",
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
                  { term: "Service",     def: "Mobile App Development" },
                  { term: "Pricing",     def: "Starting from A$12,000" },
                  { term: "Timeline",    def: "Solid MVP takes 10-16 weeks" },
                  { term: "Framework",   def: "React Native (Cross-platform)" },
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
                  Next Tab Agency develops high-performance, cross-platform mobile applications serving users on iOS and Android platforms via React Native.
                </p>
              </div>
            ),
          },
        ]}
      />
      {/* Internal linking — Australian city location pages */}
      <LocationLinksStrip />
    </Layout>
  );
};

export default MobileApps;

