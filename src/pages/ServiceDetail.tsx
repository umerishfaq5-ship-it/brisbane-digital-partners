import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowLeft, ArrowRight, Clock, Users, TrendingUp, Zap, BarChart3, FileText, MessageSquare, Shield } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";

const serviceData: Record<string, {
  title: string;
  headline: string;
  description: string;
  longDescription: string;
  features: string[];
  benefits: { icon: any; title: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}> = {
  "seo-audits": {
    title: "SEO Audits & Strategy",
    headline: "Get found by the people searching for what you offer",
    description: "Our comprehensive SEO audits uncover exactly what's holding your website back. We analyse your technical setup, content, keywords, and competition — then build a clear, prioritised strategy to improve your rankings.",
    longDescription: "Search engine optimisation isn't guesswork — it's a systematic, data-driven process. We combine technical expertise with a deep understanding of how Australians search online to deliver strategies that actually move the needle. Every recommendation comes with clear reasoning and expected impact, so you know exactly what we're doing and why.",
    features: [
      "Full technical SEO audit with actionable recommendations",
      "Keyword research and opportunity analysis",
      "On-page optimisation (meta tags, headings, content structure)",
      "Competitor benchmarking and gap analysis",
      "Monthly reporting with clear, plain-English insights",
      "Core Web Vitals and site speed optimisation",
      "Content gap analysis and content strategy",
      "Backlink profile audit and link building plan",
    ],
    benefits: [
      { icon: TrendingUp, title: "Higher Rankings", desc: "Systematic improvements that compound over time to push you up in search results." },
      { icon: Users, title: "More Qualified Traffic", desc: "Attract the right visitors — people who are actively searching for your services." },
      { icon: BarChart3, title: "Clear ROI Tracking", desc: "Monthly reports in plain English showing exactly what's improving and why." },
    ],
    process: [
      { step: "01", title: "Technical Audit", desc: "We crawl your entire site to identify technical issues affecting your rankings." },
      { step: "02", title: "Keyword Research", desc: "Deep analysis of what your Australian audience is actually searching for." },
      { step: "03", title: "Strategy Development", desc: "A prioritised action plan with expected timelines and measurable goals." },
      { step: "04", title: "Implementation & Reporting", desc: "We execute the strategy and provide transparent monthly progress reports." },
    ],
    faqs: [
      { q: "How long does an SEO audit take?", a: "A comprehensive audit typically takes 5-7 business days. We don't rush this — thoroughness matters." },
      { q: "When will I see results?", a: "SEO is a long game. Most clients see noticeable improvements within 3-4 months, with significant results by 6 months." },
      { q: "Do you guarantee first page rankings?", a: "No honest SEO agency can guarantee specific rankings. We guarantee thorough, expert work and transparent reporting." },
    ],
  },
  "local-seo": {
    title: "Local SEO for Australian Businesses",
    headline: "Dominate your local market in search results",
    description: "For businesses serving local customers, appearing in the Google Map Pack and local search results is essential. We specialise in helping Australian businesses rank where it matters most — right in their own backyard.",
    longDescription: "When someone in Brisbane searches for a plumber, a café, or an accountant, you need to be the business they find first. Local SEO is about making sure your business appears prominently in Google Maps, local search results, and 'near me' searches. We understand the Australian market and build strategies specifically designed for local Australian businesses.",
    features: [
      "Google Business Profile setup and optimisation",
      "Local citation building and NAP consistency",
      "Geo-targeted keyword strategy",
      "Review management and reputation building",
      "Local link building campaigns",
      "Service area and location page optimisation",
      "Google Maps ranking optimisation",
      "Local schema markup implementation",
    ],
    benefits: [
      { icon: TrendingUp, title: "Map Pack Rankings", desc: "Get your business into the top 3 results that show on Google Maps." },
      { icon: MessageSquare, title: "More Phone Calls", desc: "Local SEO drives direct calls and enquiries from nearby customers." },
      { icon: Shield, title: "Reputation Building", desc: "Structured review management to build trust and social proof." },
    ],
    process: [
      { step: "01", title: "Local Audit", desc: "We assess your current local presence, citations, and competitor landscape." },
      { step: "02", title: "Profile Optimisation", desc: "Complete setup and optimisation of your Google Business Profile." },
      { step: "03", title: "Citation Building", desc: "Consistent NAP listings across key Australian directories and platforms." },
      { step: "04", title: "Ongoing Management", desc: "Review monitoring, regular updates, and monthly local performance reports." },
    ],
    faqs: [
      { q: "What's the Google Map Pack?", a: "The Map Pack is the top 3 local business results that appear with a map when someone searches for local services. Being in it dramatically increases calls and visits." },
      { q: "How long to rank in the Map Pack?", a: "It varies, but most businesses see significant local ranking improvements within 2-4 months of consistent work." },
      { q: "Do you work with businesses outside Brisbane?", a: "Absolutely. We help local businesses across all of Australia optimise their local presence." },
    ],
  },
  "mobile-apps": {
    title: "Mobile App Development",
    headline: "Beautiful, performant apps for iOS and Android",
    description: "Using React Native, we build cross-platform mobile applications that feel truly native. One codebase, two platforms, zero compromise on quality. From concept to App Store, we handle the entire journey.",
    longDescription: "Building a mobile app doesn't have to mean paying for two separate development projects. With React Native, we create a single codebase that runs beautifully on both iOS and Android, with native-like performance and smooth animations. Our team has deep hands-on experience shipping real apps to the App Store and Google Play — including fitness platforms, social networks, and job marketplaces.",
    features: [
      "React Native development for iOS and Android",
      "Native-like performance and smooth animations",
      "API integration and backend connectivity",
      "Push notifications and real-time features",
      "App Store and Google Play submission",
      "Ongoing maintenance and feature updates",
      "User authentication and secure data handling",
      "Offline-first architecture and data sync",
    ],
    benefits: [
      { icon: Zap, title: "Cross-Platform Efficiency", desc: "One codebase for both platforms — saving you time and money without sacrificing quality." },
      { icon: Clock, title: "Faster Time to Market", desc: "React Native significantly reduces development time compared to building two separate native apps." },
      { icon: Users, title: "Proven Experience", desc: "We've shipped real apps — MyFitnessCoach, CircleIt, Vacancies — with thousands of active users." },
    ],
    process: [
      { step: "01", title: "Discovery & Planning", desc: "We map out your app's features, user flows, and technical architecture." },
      { step: "02", title: "UI/UX Design", desc: "Creating intuitive, beautiful interfaces that your users will love." },
      { step: "03", title: "Development & Testing", desc: "Agile sprints with regular demos and thorough testing on real devices." },
      { step: "04", title: "Launch & Support", desc: "App Store submission, launch support, and ongoing maintenance." },
    ],
    faqs: [
      { q: "Why React Native instead of native development?", a: "React Native gives you 90%+ code sharing between iOS and Android, significantly reducing cost and timeline while delivering near-native performance." },
      { q: "Can you integrate with our existing backend?", a: "Yes, we regularly integrate with existing APIs, databases, and third-party services." },
      { q: "Do you handle App Store submission?", a: "Yes, we manage the entire submission process for both Apple App Store and Google Play Store." },
    ],
  },
  "web-development": {
    title: "Custom Website Design & Development",
    headline: "Websites that look great and perform even better",
    description: "We design and develop custom websites that are fast, accessible, and built to convert. Every site we create is responsive, SEO-ready from day one, and built with clean, maintainable code.",
    longDescription: "Your website is your most important digital asset. We build sites that don't just look impressive — they load in under 2 seconds, rank well on Google, and convert visitors into customers. Using modern frameworks like React and Next.js, we create websites that are maintainable, scalable, and a genuine pleasure to use on any device.",
    features: [
      "Custom responsive design tailored to your brand",
      "Lightning-fast page load speeds (under 2 seconds)",
      "SEO-optimised structure and content",
      "Content management system integration",
      "Secure HTTPS and modern hosting setup",
      "Ongoing support and maintenance plans",
      "Accessibility compliance (WCAG 2.1)",
      "Analytics and conversion tracking setup",
    ],
    benefits: [
      { icon: Zap, title: "Blazing Fast", desc: "Sites that load in under 2 seconds — because every second of delay costs you customers." },
      { icon: TrendingUp, title: "SEO-Ready", desc: "Built from the ground up with clean code, proper structure, and technical SEO best practices." },
      { icon: FileText, title: "Easy Content Updates", desc: "CMS integration means you can update your own content without needing a developer." },
    ],
    process: [
      { step: "01", title: "Discovery & Wireframes", desc: "Understanding your brand, audience, and goals to create detailed wireframes." },
      { step: "02", title: "Visual Design", desc: "Pixel-perfect designs for desktop and mobile, refined with your feedback." },
      { step: "03", title: "Development", desc: "Clean, modern code with a focus on speed, SEO, and maintainability." },
      { step: "04", title: "Launch & Optimise", desc: "Testing, launch, and post-launch performance optimisation." },
    ],
    faqs: [
      { q: "How long does a website take to build?", a: "A standard 5-7 page website typically takes 4-6 weeks. Larger projects are scoped individually." },
      { q: "Can I update content myself?", a: "Yes — we integrate a content management system so you can update text, images, and pages without technical knowledge." },
      { q: "Do you provide hosting?", a: "We recommend and help set up high-performance hosting, and can manage it for you as part of a maintenance plan." },
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <Layout>
        <div className="container py-40 text-center">
          <h1 className="font-heading font-bold text-2xl mb-4 text-foreground">Service not found</h1>
          <Button asChild><Link to="/services">View All Services</Link></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-center overflow-hidden">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
        <div className="absolute bottom-1/3 right-[15%] w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
        <div className="container relative z-10 py-32 md:py-40 pt-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link to="/services" className="inline-flex items-center gap-2 text-primary-foreground/40 hover:text-primary-foreground text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Services
            </Link>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-4 border border-accent/20">
              {service.title}
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-[3rem] leading-[1.08] text-primary-foreground max-w-3xl">{service.headline}</h1>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Description */}
      <section className="py-20 md:py-28">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-16">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="lg:col-span-3">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">{service.description}</p>
              <p className="text-muted-foreground leading-relaxed">{service.longDescription}</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="lg:col-span-2">
              <div className="surface-teal rounded-2xl p-7 border border-primary-foreground/10">
                <h3 className="font-heading font-semibold text-primary-foreground mb-4">Key Benefits</h3>
                {service.benefits.map((b) => (
                  <div key={b.title} className="flex gap-3 mb-4 last:mb-0">
                    <b.icon className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-primary-foreground text-sm">{b.title}</p>
                      <p className="text-primary-foreground/50 text-xs leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="surface-warm py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container max-w-5xl relative z-10">
          <SectionHeading eyebrow="What's Included" title="Everything in this service" />
          <div className="grid sm:grid-cols-2 gap-4">
            {service.features.map((f, i) => (
              <motion.div
                key={f}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex items-start gap-4 p-5 rounded-xl border bg-card"
              >
                <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <p className="text-sm text-foreground leading-relaxed">{f}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-28">
        <div className="container max-w-5xl">
          <SectionHeading eyebrow="Our Process" title="How we deliver results" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <div className="card-premium rounded-2xl p-6 h-full">
                  <span className="font-heading font-bold text-2xl number-outline block mb-3">{step.step}</span>
                  <h4 className="font-heading font-semibold text-foreground mb-2 text-sm">{step.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="surface-warm py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 pattern-dots" />
        <div className="container max-w-3xl relative z-10">
          <SectionHeading eyebrow="FAQs" title="Common questions" />
          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card-premium rounded-2xl p-6"
              >
                <h4 className="font-heading font-semibold text-foreground mb-2">{faq.q}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="surface-teal rounded-3xl p-12 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 pattern-lines opacity-20" />
            <div className="relative z-10">
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-4">Ready to get started?</h2>
              <p className="text-primary-foreground/50 max-w-md mx-auto mb-8">Let's discuss how {service.title.toLowerCase()} can help your business grow.</p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button variant="hero-primary" size="xl" className="rounded-full" asChild>
                  <Link to="/contact">Get Started <ArrowRight className="w-4 h-4 ml-1" /></Link>
                </Button>
                <Button variant="hero-secondary" size="lg" className="rounded-full" asChild>
                  <Link to="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
