import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Globe, Search, Smartphone, MapPin,
  BarChart3, Target, Star, ShoppingBag, Map,
  FileText, Users, Briefcase, Phone, BookOpen,
} from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import heroBg from "@/assets/hero-bg.jpg";

/* ─────────────────────────────────────────────────────────────
   SEO-segmented sitemap data
   Each section = its own crawl cluster so Google understands
   the site architecture at a glance.
───────────────────────────────────────────────────────────── */
const sections = [
  /* 1 ─── Core / Main Pages */
  {
    id: "main",
    label: "Core Pages",
    icon: Globe,
    color: "text-teal",
    bg: "bg-teal/10",
    description: "The primary entry points for visitors and search engine crawlers.",
    pages: [
      { label: "Home", href: "/", desc: "Agency overview, services & social proof for Australian businesses." },
      { label: "About Us", href: "/about", desc: "Our story, team expertise, values, and why Brisbane businesses choose us." },
      { label: "Services Overview", href: "/services", desc: "Complete catalogue of all services we offer — SEO, ads, web, and apps." },
      { label: "Portfolio & Case Studies", href: "/portfolio", desc: "Real campaign results, mobile apps delivered, and websites built." },
      { label: "Client Testimonials", href: "/testimonials", desc: "Verified reviews from Australian business owners we've worked with." },
      { label: "Contact & Free Consultation", href: "/contact", desc: "Start a project, request a free audit, or simply ask a question." },
    ],
  },

  /* 1b ─── Portfolio Case Studies */
  {
    id: "portfolio",
    label: "Portfolio Case Studies",
    icon: Briefcase,
    color: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-500/10",
    description: "Dedicated story-driven case study pages for our key projects — each covering the Problem, Solution, Tech Stack, and measurable Results.",
    pages: [
      { label: "MyFitnessCoach — Mobile App", href: "/portfolio/my-fitness-coach", desc: "AI-powered fitness app — AI calorie tracker, gym workouts, diet plans. 4.8★ App Store rating. Live on iOS & Android." },
      { label: "CircleIt — Social App", href: "/portfolio/circle-it", desc: "Firebase real-time community platform — social engagement, real-time notifications, interactive features. iOS & Android." },
      { label: "Vacancies — Job Listing App", href: "/portfolio/vacancies", desc: "Android job listing app for Lead Time Telecom FZE — real-time updates, company profiles, easy CV apply. Live on Google Play." },
      { label: "Heaven on Mainstreet — WordPress + SEO", href: "/portfolio/heaven-on-mainstreet", desc: "WordPress rebuild + Technical SEO — massive organic impressions spike, 62% more direct bookings, mobile bounce 74%→28%." },
      { label: "Institutional Scalper — WordPress + SEO", href: "/portfolio/institutional-scalper", desc: "WordPress build + Technical SEO — sub-1.5s load time, 100 Lighthouse score, 42% conversion lift, Top-3 Google rankings." },
    ],
  },

  /* 2 ─── SEO Services */
  {
    id: "seo",
    label: "SEO Services",
    icon: Search,
    color: "text-eucalyptus",
    bg: "bg-eucalyptus/10",
    description: "Organic search, local rankings, and Google Business Profile optimisation.",
    pages: [
      { label: "SEO Audits & Strategy", href: "/services/seo-audits", desc: "Full technical SEO audit, keyword research & a data-backed 90-day ranking roadmap." },
      { label: "Local SEO", href: "/services/local-seo", desc: "Google Business Profile, citation building & Map Pack rankings for Australian businesses." },
      { label: "Google Business Profile Optimisation", href: "/services/google-business-profile", desc: "Complete GBP setup, review management, photo strategy & weekly Google Posts." },
    ],
  },

  /* 3 ─── Paid Advertising */
  {
    id: "ads",
    label: "Paid Advertising (PPC & Social)",
    icon: BarChart3,
    color: "text-ocean",
    bg: "bg-ocean/10",
    description: "Google Ads, Social Media advertising and paid search campaigns.",
    pages: [
      { label: "PPC & Google Ads Management", href: "/services/ppc-google-ads", desc: "Google Search, Shopping, Display & Remarketing campaigns managed for maximum ROAS." },
      { label: "Social Media Advertising", href: "/services/social-media-ads", desc: "Facebook, Instagram, LinkedIn, YouTube & TikTok ad campaigns targeting Australian audiences." },
    ],
  },

  /* 4 ─── Web Development */
  {
    id: "web",
    label: "Web Development",
    icon: Globe,
    color: "text-teal-light",
    bg: "bg-teal-light/10",
    description: "Custom websites, e-commerce stores, and CMS-powered platforms.",
    pages: [
      { label: "Custom Web Development", href: "/services/web-development", desc: "Fast, SEO-ready React & Next.js websites built to convert visitors into customers." },
      { label: "WordPress Development", href: "/services/wordpress-development", desc: "Custom WordPress themes and WooCommerce stores — full admin training included." },
      { label: "Squarespace Design & Development", href: "/services/squarespace-development", desc: "Premium Squarespace websites for creative businesses, consultants & boutique brands." },
      { label: "Shopify Development", href: "/services/shopify-development", desc: "Custom Shopify stores designed and built for Australian e-commerce businesses." },
      { label: "WooCommerce Development", href: "/services/woocommerce-development", desc: "Feature-rich WooCommerce stores on WordPress — scalable and SEO-ready." },
      { label: "Wix Development", href: "/services/wix-development", desc: "Professional Wix websites for Australian small businesses and service providers." },
      { label: "BigCommerce Development", href: "/services/bigcommerce-development", desc: "Enterprise-grade BigCommerce stores for scaling Australian retailers." },
      { label: "Magento Development", href: "/services/magento-development", desc: "Complex Magento e-commerce solutions for established Australian brands." },
      { label: "Maropost / Neto Development", href: "/services/maropost-neto", desc: "Maropost Commerce Cloud (Neto) solutions for Australian wholesale & retail." },
    ],
  },

  /* 5 ─── Mobile App Development */
  {
    id: "apps",
    label: "Mobile App Development",
    icon: Smartphone,
    color: "text-accent",
    bg: "bg-accent/10",
    description: "Cross-platform React Native iOS & Android applications.",
    pages: [
      { label: "Mobile App Development", href: "/services/mobile-apps", desc: "React Native cross-platform apps for iOS & Android — from concept to App Store launch." },
    ],
  },

  /* 6 ─── Location Pages */
  {
    id: "locations",
    label: "Location Pages",
    icon: MapPin,
    color: "text-red-500",
    bg: "bg-red-500/10",
    description: "Dedicated local SEO landing pages for every major Australian city we serve.",
    pages: [
      { label: "SEO Agency Brisbane, QLD", href: "/locations/brisbane-seo", desc: "Our home base — full-service digital marketing for Brisbane and Greater Queensland." },
      { label: "SEO Agency Sydney, NSW", href: "/locations/sydney-seo", desc: "Local SEO, Google Ads & web development for Sydney and New South Wales businesses." },
      { label: "SEO Agency Melbourne, VIC", href: "/locations/melbourne-seo", desc: "Digital marketing services for Melbourne and Victoria — SEO, paid ads & web." },
      { label: "SEO Agency Perth, WA", href: "/locations/perth-seo", desc: "Local SEO, PPC & website services for Perth and Western Australian businesses." },
      { label: "SEO Agency Adelaide, SA", href: "/locations/adelaide-seo", desc: "Full-service digital marketing for Adelaide and South Australia." },
      { label: "SEO Agency Canberra, ACT", href: "/locations/canberra-seo", desc: "Digital marketing for Canberra businesses and the ACT region — SEO & Google Ads." },
    ],
  },

  /* 7 ─── Blog & Resources */
  {
    id: "blog",
    label: "Blog & Resources",
    icon: BookOpen,
    color: "text-yellow-600 dark:text-yellow-400",
    bg: "bg-yellow-500/10",
    description: "Jargon-free SEO guides, local marketing tips, and digital growth insights for Australian small businesses.",
    pages: [
      { label: "Blog Index — All Articles", href: "/blog", desc: "All 12 SEO guides and local marketing articles for Australian small business owners." },
      { label: "Google’s May 2026 Core Update is Complete", href: "/blog/core-update-may-2026", desc: "The second major Google core update of 2026 has officially finished rolling out." },
      { label: "Hit by the May 2026 Core Update? Why 'Good' Content Isn't Enough Anymore", href: "/blog/content-strategy-core-update", desc: "Google no longer cares if your content is just 'good.'" },
      { label: "The Technical SEO Checklist to Recover from the 2026 Core Updates", href: "/blog/technical-seo-core-update", desc: "Technical bottlenecks blocking Google from crawling, rendering, or trusting your site." },
      { label: "Losing Organic Traffic? Use the Google Map Pack to Bypass Core Update Drops", href: "/blog/local-entity-core-update", desc: "If your traditional website rankings fluctuate, your Google Business Profile (GBP) is your ultimate safety net." },
      { label: "Is Your Business Invisible? 5 Reasons You Need SEO", href: "/blog/why-your-website-needs-seo", desc: "Why a website without SEO is like printing 5,000 business cards and keeping them in your desk drawer." },
      { label: "SEO for Small Business Owners: Zero Time Strategy", href: "/blog/seo-for-small-business-zero-time", desc: "The Minimum Viable SEO Plan — the 20% of work that drives 80% of the results." },
      { label: "SEO vs Google Ads for Australian Tradies", href: "/blog/seo-vs-google-ads-aussie-tradies", desc: "Google Ads cost Aussie tradies $15–50 per click. SEO earns those same clicks for free and compounds every month." },
      { label: "Google Business Profile Setup Guide", href: "/blog/google-business-profile-setup", desc: "76% of local searchers visit a business within 24 hours. Here's the complete 5-step GBP setup guide." },
      { label: "The 10-Point SEO Audit Checklist", href: "/blog/seo-audit-checklist", desc: "You have a beautiful website but zero traffic. This checklist diagnoses every hidden SEO problem." },
      { label: ".com vs .com.au — Which Domain Ranks Better in Australia?", href: "/blog/com-vs-com-au-australia", desc: "The definitive answer on domain extensions for Australian businesses, with real ranking data." },
      { label: "What Are Backlinks? Digital Votes of Confidence", href: "/blog/what-are-backlinks", desc: "Why some websites outrank competitors with less content — it's all about Authority and backlinks." },
      { label: "Shopify SEO Australia: Boost Your E-Commerce Sales", href: "/blog/shopify-seo-australia", desc: "The 5-step SEO playbook for Australian Shopify stores to rank on Google and drive consistent free traffic." },
    ],
  },

  /* 8 ─── Legal */
  {
    id: "legal",
    label: "Legal & Compliance",
    icon: FileText,
    color: "text-muted-foreground",
    bg: "bg-muted/50",
    description: "Legal documents, privacy obligations, and terms of engagement.",
    pages: [
      { label: "Privacy Policy", href: "/privacy", desc: "How we collect, use, and protect your data under the Australian Privacy Act 1988." },
      { label: "Terms of Service", href: "/terms", desc: "Terms and conditions governing all Next Tab Agency service engagements." },
      { label: "HTML Sitemap", href: "/sitemap", desc: "This page — a human-readable index of every page on the site." },
    ],
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function Sitemap() {
  const totalPages = sections.reduce((acc, s) => acc + s.pages.length, 0);

  return (
    <Layout>
      <SEO
        title="HTML Sitemap — All Pages | Next Tab Agency Brisbane"
        description="Complete site index for Next Tab Agency — SEO services, Google Ads, social media advertising, web development, location pages and legal documents. Built for humans and search engines."
        canonical="/sitemap"
        noIndex
        breadcrumbs={[
          { name: "Home", url: "https://nexttabagency.com/" },
          { name: "Sitemap", url: "https://nexttabagency.com/sitemap" },
        ]}
      />

      {/* Hero */}
      <section aria-labelledby="sitemap-hero-heading" className="relative min-h-[38vh] flex items-center overflow-hidden">
        <img
          src={heroBg}
          alt="Website HTML Sitemap — Next Tab Agency Brisbane"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-transparent" />
        <div className="absolute bottom-1/3 right-[10%] w-56 h-56 bg-accent/10 rounded-full blur-[90px]" />
        <div className="container relative z-10 py-28 md:py-36 pt-40">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">
              <Map className="w-3 h-3" /> Site Navigation
            </span>
            <h1 id="sitemap-hero-heading" className="font-heading font-black text-4xl md:text-[3.2rem] leading-[1.06] text-primary-foreground mb-4 tracking-tight">
              Full Site Map
            </h1>
            <p className="text-primary-foreground/60 text-lg leading-relaxed">
              {totalPages} pages across {sections.length} sections — every URL on the Next Tab Agency website, organised for humans and search engines.
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Quick-jump nav */}
      <nav aria-label="Sitemap section jump links" className="sticky top-16 z-30 bg-background/95 backdrop-blur border-b border-border/50 py-3">
        <div className="container">
          <div className="flex items-center gap-1 overflow-x-auto pb-0.5 scrollbar-none">
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50 mr-2 shrink-0">Jump to:</span>
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#section-${s.id}`}
                className="shrink-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-border/50 text-foreground/60 hover:text-accent hover:border-accent/40 transition-all"
              >
                <s.icon className={`w-3 h-3 ${s.color}`} />
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Sitemap Sections */}
      <section className="py-16 md:py-24">
        <div className="container max-w-6xl space-y-20">
          {sections.map((section, si) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.id}
                id={`section-${section.id}`}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="scroll-mt-28"
              >
                {/* Section Header */}
                <div className="flex items-start gap-4 mb-6 pb-5 border-b border-border/60">
                  <div className={`w-10 h-10 rounded-2xl ${section.bg} flex items-center justify-center shrink-0 mt-0.5`}>
                    <Icon className={`w-5 h-5 ${section.color}`} />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h2 className="font-heading font-bold text-xl text-foreground">{section.label}</h2>
                      <span className="text-[10px] font-bold text-muted-foreground/50 uppercase tracking-widest bg-muted/60 px-2 py-0.5 rounded-full">
                        {section.pages.length} {section.pages.length === 1 ? "page" : "pages"}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{section.description}</p>
                  </div>
                </div>

                {/* Page Links */}
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {section.pages.map((page) => (
                    <li key={page.href}>
                      <Link
                        to={page.href}
                        className="group flex items-start gap-3 p-4 rounded-xl border border-border/50 bg-card hover:border-accent/40 hover:bg-accent/[0.03] transition-all duration-300 h-full"
                      >
                        <ArrowRight className="w-4 h-4 text-accent shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform duration-300" />
                        <div>
                          <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-200 leading-snug mb-1">
                            {page.label}
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed">{page.desc}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Summary bar */}
      <section aria-label="Sitemap summary" className="py-12 surface-warm border-t border-border/40">
        <div className="container max-w-6xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-center sm:text-left">
              <p className="font-heading font-bold text-foreground text-lg">{totalPages} pages indexed</p>
              <p className="text-sm text-muted-foreground mt-0.5">
                XML Sitemap:{" "}
                <a
                  href="https://nexttabagency.com/sitemap.xml"
                  className="text-accent hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  nexttabagency.com/sitemap.xml
                </a>
                {" "}— Updated {new Date().toLocaleDateString("en-AU", { dateStyle: "long" })}
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#section-${s.id}`}
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${s.bg} ${s.color} border border-current/10`}
                >
                  <s.icon className="w-3 h-3" />
                  {s.pages.length} {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
