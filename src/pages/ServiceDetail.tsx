import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

const serviceData: Record<string, { title: string; headline: string; description: string; features: string[] }> = {
  "seo-audits": {
    title: "SEO Audits & Strategy",
    headline: "Get found by the people searching for what you offer",
    description: "Our comprehensive SEO audits uncover exactly what's holding your website back. We analyse your technical setup, content, keywords, and competition — then build a clear, prioritised strategy to improve your rankings.",
    features: [
      "Full technical SEO audit with actionable recommendations",
      "Keyword research and opportunity analysis",
      "On-page optimisation (meta tags, headings, content structure)",
      "Competitor benchmarking and gap analysis",
      "Monthly reporting with clear, plain-English insights",
      "Core Web Vitals and site speed optimisation",
    ],
  },
  "local-seo": {
    title: "Local SEO for Australian Businesses",
    headline: "Dominate your local market in search results",
    description: "For businesses serving local customers, appearing in the Google Map Pack and local search results is essential. We specialise in helping Australian businesses rank where it matters most — right in their own backyard.",
    features: [
      "Google Business Profile setup and optimisation",
      "Local citation building and NAP consistency",
      "Geo-targeted keyword strategy",
      "Review management and reputation building",
      "Local link building campaigns",
      "Service area and location page optimisation",
    ],
  },
  "mobile-apps": {
    title: "Mobile App Development",
    headline: "Beautiful, performant apps for iOS and Android",
    description: "Using React Native, we build cross-platform mobile applications that feel truly native. One codebase, two platforms, zero compromise on quality. From concept to App Store, we handle the entire journey.",
    features: [
      "React Native development for iOS and Android",
      "Native-like performance and smooth animations",
      "API integration and backend connectivity",
      "Push notifications and real-time features",
      "App Store and Google Play submission",
      "Ongoing maintenance and feature updates",
    ],
  },
  "web-development": {
    title: "Custom Website Design & Development",
    headline: "Websites that look great and perform even better",
    description: "We design and develop custom websites that are fast, accessible, and built to convert. Every site we create is responsive, SEO-ready from day one, and built with clean, maintainable code.",
    features: [
      "Custom responsive design tailored to your brand",
      "Lightning-fast page load speeds",
      "SEO-optimised structure and content",
      "Content management system integration",
      "Secure HTTPS and modern hosting setup",
      "Ongoing support and maintenance plans",
    ],
  },
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="font-heading font-bold text-2xl mb-4 text-foreground">Service not found</h1>
          <Button asChild><Link to="/services">View All Services</Link></Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="hero-gradient text-primary-foreground py-20 md:py-28">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block text-accent font-heading font-semibold text-sm uppercase tracking-wider mb-3">
              {service.title}
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl leading-tight max-w-3xl">{service.headline}</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">{service.description}</p>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-8">What's included</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {service.features.map((f) => (
                <div key={f} className="flex items-start gap-3 p-4 rounded-lg border bg-card">
                  <CheckCircle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <p className="text-sm text-foreground leading-relaxed">{f}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex flex-wrap gap-4">
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;
