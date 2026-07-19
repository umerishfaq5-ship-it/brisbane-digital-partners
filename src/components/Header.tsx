import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const seoMenu = {
  label: "SEO", href: "/services",
  groups: [
    { heading: "SEO Services", items: [
      { label: "Local SEO Brisbane",       href: "/services/local-seo",               desc: "Google Map Pack & GBP rankings" },
      { label: "Technical SEO",            href: "/services/technical-seo",           desc: "Crawl, speed & indexation fixes" },
      { label: "On-Page SEO",              href: "/services/on-page-seo",             desc: "Title tags, headings & content" },
      { label: "SEO Audits & Strategy",    href: "/services/seo-audits",              desc: "Data-driven ranking roadmaps" },
      { label: "Link Building",            href: "/services/link-building",           desc: "Editorial backlinks & digital PR" },
      { label: "Content Marketing",        href: "/services/content-marketing",       desc: "SEO-driven blog & topic clusters" },
      { label: "AI SEO / GEO",             href: "/services/ai-seo",                  desc: "Get cited by ChatGPT & Gemini" },
      { label: "SEO Migrations",           href: "/services/seo-migration",           desc: "Zero-loss website migrations" },
      { label: "Google Business Profile",  href: "/services/google-business-profile", desc: "Map Pack & GBP optimisation" },
      { label: "SEO Consulting",           href: "/services/seo-consulting",          desc: "Fractional Head of SEO" },
      { label: "SEO Packages",             href: "/services/seo-packages",            desc: "Local, Growth & Enterprise tiers" },
    ]},
    { heading: "Platform SEO", items: [
      { label: "Shopify SEO",        href: "/services/shopify-seo",        desc: "Fix Shopify SEO limitations" },
      { label: "WordPress SEO",      href: "/services/wordpress-seo",      desc: "Yoast, RankMath & WP architecture" },
      { label: "WooCommerce SEO",    href: "/services/woocommerce-seo",    desc: "eCommerce SEO for WooCommerce" },
      { label: "eCommerce SEO",      href: "/services/ecommerce-seo",      desc: "Product & category page rankings" },
      { label: "Small Business SEO", href: "/services/small-business-seo", desc: "Affordable SEO for SMBs" },
      { label: "Enterprise SEO",     href: "/services/enterprise-seo",     desc: "Large-scale organic strategy" },
      { label: "B2B SEO",            href: "/services/b2b-seo",            desc: "Pipeline-quality organic leads" },
    ]},
  ],
};
const ppcMenu = {
  label: "PPC", href: "/services/ppc-google-ads",
  groups: [{ heading: "Paid Media", items: [
    { label: "Google Ads Management",       href: "/services/ppc-google-ads",               desc: "Search, Shopping & Display Ads" },
    { label: "PPC Agency Brisbane",          href: "/services/ppc-brisbane",                 desc: "Local Brisbane PPC management" },
    { label: "Google Ads Brisbane",          href: "/services/google-ads-brisbane",          desc: "Brisbane-specific Google Ads" },
    { label: "Facebook & Meta Ads",          href: "/services/facebook-ads",                 desc: "Full-funnel Facebook & Instagram" },
    { label: "Social Media Ads",             href: "/services/social-media-ads",             desc: "Multi-platform paid social" },
    { label: "LinkedIn Advertising",         href: "/services/linkedin-ads",                 desc: "B2B precision targeting" },
    { label: "Email Marketing",              href: "/services/email-marketing",              desc: "Automated sequences & campaigns" },
    { label: "Conversion Rate Optimisation", href: "/services/conversion-rate-optimisation", desc: "Turn more visitors into leads" },
  ]}],
};
const webMenu = {
  label: "Web & Growth", href: "/services/web-development",
  groups: [{ heading: "Web Development", items: [
    { label: "Custom Web Development", href: "/services/web-development",         desc: "React, Next.js & modern frameworks" },
    { label: "Mobile App Development", href: "/services/mobile-apps",             desc: "React Native iOS & Android" },
    { label: "WordPress",              href: "/services/wordpress-development",   desc: "Custom themes & WooCommerce" },
    { label: "Shopify",                href: "/services/shopify-development",     desc: "Shopify & Shopify Plus stores" },
    { label: "WooCommerce",            href: "/services/woocommerce-development", desc: "Flexible WordPress e-commerce" },
    { label: "BigCommerce",            href: "/services/bigcommerce-development", desc: "Enterprise e-commerce platform" },
    { label: "Magento",                href: "/services/magento-development",     desc: "Adobe Commerce enterprise builds" },
    { label: "Squarespace / Wix",      href: "/services/squarespace-development", desc: "Premium creative websites" },
    { label: "Speed Optimisation",     href: "/services/speed-optimization",      desc: "Sub-1s Core Web Vitals scores" },
  ]}],
};
const industriesMenu = {
  label: "Industries", href: "/services",
  groups: [{ heading: "Industry SEO", items: [
    { label: "SEO for Tradies",        href: "/industry/seo-for-tradies",        desc: "Plumbers, electricians & builders" },
    { label: "NDIS Digital Marketing", href: "/industry/ndis-digital-marketing", desc: "NDIS provider growth QLD" },
    { label: "SEO for Dentists",       href: "/industry/seo-for-dentists",       desc: "Dental clinic local SEO" },
    { label: "SEO for Lawyers",        href: "/industry/seo-for-lawyers",        desc: "Law firm lead generation" },
    { label: "Healthcare SEO",         href: "/industry/healthcare-seo",         desc: "Medical & allied health SEO" },
    { label: "Real Estate SEO",        href: "/industry/seo-for-real-estate",    desc: "Property & agency rankings" },
    { label: "Accountant SEO",         href: "/industry/accountant-seo",         desc: "Lead gen for accounting firms" },
    { label: "Education SEO",          href: "/industry/education-seo",          desc: "Schools, RTOs & online courses" },
    { label: "Retail / eCommerce",     href: "/industry/retail-seo",             desc: "Online store growth" },
    { label: "Hospitality SEO",        href: "/industry/hospitality-seo",        desc: "Hotels, restaurants & venues" },
    { label: "B2B & SaaS SEO",         href: "/industry/saas-seo",               desc: "Organic pipeline for tech companies" },
  ]}],
};
const locationsMenu = {
  label: "Locations", href: "/locations/brisbane-seo",
  groups: [{ heading: "Service Locations", items: [
    { label: "SEO Brisbane",       href: "/locations/brisbane-seo",       desc: "Our home base - QLD experts" },
    { label: "SEO Gold Coast",     href: "/locations/gold-coast-seo",     desc: "South-east QLD coverage" },
    { label: "SEO Sunshine Coast", href: "/locations/sunshine-coast-seo", desc: "Noosa to Caloundra" },
    { label: "SEO Sydney",         href: "/locations/sydney-seo",         desc: "NSW organic growth" },
    { label: "SEO Melbourne",      href: "/locations/melbourne-seo",      desc: "VIC digital marketing" },
    { label: "SEO Perth",          href: "/locations/perth-seo",          desc: "WA search specialists" },
    { label: "SEO Adelaide",       href: "/locations/adelaide-seo",       desc: "SA organic rankings" },
    { label: "SEO Canberra",       href: "/locations/canberra-seo",       desc: "ACT government & B2B" },
    { label: "SEO Hobart",         href: "/locations/hobart-seo",         desc: "TAS digital presence" },
  ]}],
};
const siloMenus = [seoMenu, ppcMenu, webMenu, industriesMenu, locationsMenu];
const plainLinks = [
  { label: "About",     href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blog",      href: "/blog" },
  { label: "Contact",   href: "/contact" },
];

const Header = () => {
  const [mobileOpen,     setMobileOpen]     = useState(false);
  const [openSilo,       setOpenSilo]       = useState<string | null>(null);
  const [mobileSiloOpen, setMobileSiloOpen] = useState<string | null>(null);
  const [scrolled,       setScrolled]       = useState(false);
  const location   = useLocation();
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => { setMobileOpen(false); setOpenSilo(null); }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome       = location.pathname === "/";
  const forceScrolled = !isHome || scrolled;
  const navBase      = `text-sm font-semibold transition-colors duration-200`;
  const navColor     = (active: boolean) =>
    active ? "text-accent" : forceScrolled ? "text-foreground hover:text-accent" : "text-primary-foreground hover:text-accent";
  const navCls = (active: boolean) => `${navBase} ${navColor(active)} px-3 py-2`;

  const openMenu = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenSilo(label);
  };
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setOpenSilo(null), 180); };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${forceScrolled ? "glass border-b shadow-sm" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-16">

        <Link to="/" aria-label="Next Tab Agency" className="flex items-center gap-2 shrink-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none"
            className={`h-7 w-auto ${forceScrolled ? "stroke-foreground" : "stroke-white"}`} aria-hidden="true">
            <path d="M40 150 L95 40 L160 40 L105 150 L155 150" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M165 40 L170 40" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span className={`font-heading font-bold text-lg ${forceScrolled ? "text-foreground" : "text-primary-foreground"}`}>Next Tab</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main Navigation">
          <Link to="/" className={navCls(location.pathname === "/")}>Home</Link>

          {siloMenus.map((silo) => (
            <div key={silo.label} className="relative"
              onMouseEnter={() => openMenu(silo.label)} onMouseLeave={scheduleClose}>
              <button
                className={`${navBase} ${navColor(location.pathname.startsWith(silo.href) && silo.href !== "/services")} flex items-center gap-1 px-3 py-2`}
                aria-haspopup="true" aria-expanded={openSilo === silo.label}
                onClick={() => setOpenSilo(openSilo === silo.label ? null : silo.label)}>
                {silo.label}
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${openSilo === silo.label ? "rotate-180" : ""}`}/>
              </button>

              <AnimatePresence>
                {openSilo === silo.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }} transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-0 mt-1 bg-card border border-border rounded-2xl shadow-xl overflow-hidden z-50"
                    style={{ minWidth: silo.groups.length > 1 ? "600px" : "260px" }}
                    onMouseEnter={() => openMenu(silo.label)} onMouseLeave={scheduleClose}
                    role="menu">
                    <div className={`grid ${silo.groups.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                      {silo.groups.map((group) => (
                        <div key={group.heading} className="p-5">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-3 px-1">{group.heading}</p>
                          <div className="space-y-0.5">
                            {group.items.map((item) => (
                              <Link key={item.href} to={item.href} role="menuitem"
                                className="block px-2 py-2 rounded-lg hover:bg-muted transition-colors group">
                                <p className="text-[12px] font-semibold text-foreground group-hover:text-accent leading-tight">{item.label}</p>
                                <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">{item.desc}</p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-border/50 px-5 py-3 flex items-center justify-between bg-muted/20">
                      <p className="text-xs text-muted-foreground">Brisbane-based. Serving all of Australia.</p>
                      <Link to={silo.href} className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-accent/80 transition-colors">
                        View all <ArrowRight className="w-3.5 h-3.5"/>
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          {plainLinks.map((link) => (
            <Link key={link.label} to={link.href} className={navCls(location.pathname === link.href)}>{link.label}</Link>
          ))}

          <Button variant="accent" size="sm" className="ml-3 rounded-full" asChild>
            <Link to="/contact">Free Consultation</Link>
          </Button>
        </nav>

        <button aria-label={mobileOpen ? "Close navigation" : "Open navigation"} aria-expanded={mobileOpen}
          className={`lg:hidden p-2 rounded-lg transition-colors ${forceScrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden glass border-b">
            <nav className="container py-6 flex flex-col gap-1 max-h-[80vh] overflow-y-auto" aria-label="Mobile Navigation">

              <Link to="/" onClick={() => setMobileOpen(false)} className="px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors">Home</Link>

              {siloMenus.map((silo) => (
                <div key={silo.label}>
                  <button className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted rounded-lg transition-colors"
                    onClick={() => setMobileSiloOpen(mobileSiloOpen === silo.label ? null : silo.label)}>
                    {silo.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileSiloOpen === silo.label ? "rotate-180" : ""}`}/>
                  </button>
                  <AnimatePresence>
                    {mobileSiloOpen === silo.label && (
                      <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }}
                        transition={{ duration: 0.25 }} className="overflow-hidden">
                        {silo.groups.map((group) => (
                          <div key={group.heading} className="mt-1 mb-1">
                            <p className="px-6 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">{group.heading}</p>
                            {group.items.map((item) => (
                              <Link key={item.href} to={item.href} onClick={() => setMobileOpen(false)}
                                className="block px-8 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition-colors">{item.label}</Link>
                            ))}
                          </div>
                        ))}
                        <Link to={silo.href} onClick={() => setMobileOpen(false)}
                          className="flex items-center gap-1.5 px-6 py-2 text-sm font-bold text-accent hover:bg-muted rounded-lg transition-colors mt-1">
                          View all {silo.label} <ArrowRight className="w-3.5 h-3.5"/>
                        </Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {plainLinks.map((link) => (
                <Link key={link.label} to={link.href} onClick={() => setMobileOpen(false)}
                  className="px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors">{link.label}</Link>
              ))}

              <Button variant="accent" className="mt-3 rounded-full" asChild>
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Free Consultation</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;