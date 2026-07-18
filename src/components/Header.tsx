import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* ─────────────────────────────────────────────────────────────────
   Navigation Data — grouped for mega-menu
───────────────────────────────────────────────────────────────── */
const serviceGroups = [
  {
    label: "Core SEO Services",
    desc: "Full-spectrum SEO for Australian businesses",
    items: [
      { label: "Technical SEO",          href: "/services/technical-seo",       desc: "Crawl, speed & indexation fixes" },
      { label: "Local SEO",              href: "/services/local-seo",            desc: "Google Map Pack & GBP rankings" },
      { label: "eCommerce SEO",          href: "/services/ecommerce-seo",        desc: "Product & category page rankings" },
      { label: "Link Building",          href: "/services/link-building",        desc: "Editorial backlinks & digital PR" },
      { label: "SEO Audits & Strategy",  href: "/services/seo-audits",           desc: "Data-driven ranking roadmaps" },
      { label: "SEO Migrations",         href: "/services/seo-migration",        desc: "Zero-loss website migrations" },
      { label: "AI SEO / GEO",           href: "/services/ai-seo",              desc: "Get cited by ChatGPT & Gemini" },
      { label: "Google Business Profile", href: "/services/google-business-profile", desc: "Map Pack & GBP optimisation" },
    ],
  },
  {
    label: "Platform SEO",
    desc: "CMS-specific SEO expertise",
    items: [
      { label: "WordPress SEO",     href: "/services/wordpress-seo",    desc: "Yoast, RankMath & WP architecture" },
      { label: "WooCommerce SEO",   href: "/services/woocommerce-seo",  desc: "eCommerce SEO for WooCommerce" },
      { label: "Shopify SEO",       href: "/services/shopify-seo",      desc: "Fix Shopify's SEO limitations" },
      { label: "Magento SEO",       href: "/services/magento-seo",      desc: "Enterprise Magento SEO" },
      { label: "BigCommerce SEO",   href: "/services/bigcommerce-seo",  desc: "BigCommerce organic rankings" },
    ],
  },
  {
    label: "Industry SEO",
    desc: "Sector-specific SEO strategies",
    items: [
      { label: "SEO for Tradies",        href: "/industry/seo-for-tradies",      desc: "Plumbers, electricians & builders" },
      { label: "SEO for Dentists",       href: "/industry/seo-for-dentists",     desc: "Dental clinic local SEO" },
      { label: "SEO for Lawyers",        href: "/industry/seo-for-lawyers",      desc: "Law firm lead generation" },
      { label: "SEO for Real Estate",    href: "/industry/seo-for-real-estate",  desc: "Property & agency rankings" },
      { label: "SEO for Healthcare",     href: "/industry/healthcare-seo",       desc: "Medical & allied health SEO" },
      { label: "SEO for E-Commerce",     href: "/industry/retail-seo",           desc: "Retail & online store growth" },
    ],
  },
  {
    label: "Web Development",
    desc: "Premium builds across all platforms",
    items: [
      { label: "Custom Web Development",  href: "/services/web-development",         desc: "React, Next.js & modern frameworks" },
      { label: "Mobile App Development",  href: "/services/mobile-apps",             desc: "React Native iOS & Android" },
      { label: "WordPress",               href: "/services/wordpress-development",    desc: "Custom themes & WooCommerce" },
      { label: "Shopify",                 href: "/services/shopify-development",      desc: "Shopify & Shopify Plus stores" },
      { label: "WooCommerce",             href: "/services/woocommerce-development",  desc: "Flexible WordPress e-commerce" },
      { label: "BigCommerce",             href: "/services/bigcommerce-development",  desc: "Enterprise e-commerce platform" },
      { label: "Magento",                 href: "/services/magento-development",      desc: "Adobe Commerce enterprise builds" },
      { label: "Squarespace / Wix",       href: "/services/squarespace-development",  desc: "Premium creative websites" },
    ],
  },
];

const navLinks = [
  { label: "Home",         href: "/" },
  { label: "About",        href: "/about" },
  { label: "Services",     href: "/services", hasMegaMenu: true },
  { label: "Case Studies", href: "/portfolio" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Blog",         href: "/blog" },
  { label: "Contact",      href: "/contact" },
];


/* ─────────────────────────────────────────────────────────────────
   Header Component
───────────────────────────────────────────────────────────────── */
const Header = () => {
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [megaOpen,     setMegaOpen]     = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled,     setScrolled]     = useState(false);
  const location  = useLocation();
  const megaTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* Close menus on route change */
  useEffect(() => {
    setMobileOpen(false);
    setMegaOpen(false);
  }, [location.pathname]);

  /* Scroll listener */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Delay-close mega-menu so it doesn't snap shut on mouse move */
  const handleMegaEnter = () => {
    if (megaTimer.current) clearTimeout(megaTimer.current);
    setMegaOpen(true);
  };
  const handleMegaLeave = () => {
    megaTimer.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const isServicesActive = location.pathname.startsWith("/services");
  // Portfolio sub-pages have dark hero — keep header transparent on dark bg, switch to glass on scroll
  const isPortfolioSubPage = location.pathname.startsWith("/portfolio/");
  const isSolidBlackPage = false; // no longer force solid — glass on scroll is sufficient

  const forceScrolled = scrolled || isPortfolioSubPage;

  const navTextClass = (active: boolean) =>
    `link-underline px-3.5 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 ${
      forceScrolled
        ? active
          ? "text-accent"
          : "text-foreground/70 hover:text-foreground"
        : active
        ? "text-accent"
        : "text-primary-foreground/70 hover:text-primary-foreground"
    }`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isPortfolioSubPage && !scrolled
          ? "bg-transparent"
          : forceScrolled
          ? "glass shadow-sm border-b"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-[72px]">

        {/* ── Logo ──────────────────────────────────────────── */}
        <Link to="/" className="flex items-center gap-3" aria-label="Next Tab Agency — Home">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            fill="none"
            className={`h-[28px] w-auto transition-colors duration-300 ${
              forceScrolled ? "stroke-[#0B302D]" : "stroke-white"
            }`}
          >
            <path d="M40 150 L95 40 L160 40 L105 150 L155 150" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M165 40 L170 40" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span
            className={`font-heading font-bold text-xl tracking-tight transition-colors duration-300 ${
              forceScrolled ? "text-[#0B302D]" : "text-primary-foreground"
            }`}
          >
            Next Tab
          </span>
        </Link>

        {/* ── Desktop Nav ───────────────────────────────────── */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main Navigation">

          {navLinks.map((link) =>
            link.hasMegaMenu ? (

              /* ── Services Mega-Menu Trigger ─────────────── */
              <div
                key={link.label}
                className="relative"
                onMouseEnter={handleMegaEnter}
                onMouseLeave={handleMegaLeave}
              >
                <button
                  aria-haspopup="true"
                  aria-expanded={megaOpen}
                  className={`${navTextClass(isServicesActive)} flex items-center gap-1`}
                >
                  {link.label}
                  <ChevronDown
                    className={`w-3 h-3 transition-transform duration-300 ${megaOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* ── Mega-Menu Panel ──────────────────────── */}
                <AnimatePresence>
                  {megaOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[900px] bg-card rounded-2xl shadow-premium border border-border overflow-hidden"
                      onMouseEnter={handleMegaEnter}
                      onMouseLeave={handleMegaLeave}
                    >
                      <div className="grid grid-cols-4 divide-x divide-border/50">

                        {/* ── Service Groups ─────────────── */}
                        {serviceGroups.map((group) => (
                          <div key={group.label} className="p-5">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent mb-1 px-1">{group.label}</p>
                            {group.desc && <p className="text-[10px] text-muted-foreground mb-3 px-1 leading-tight">{group.desc}</p>}
                            <div className="space-y-0.5">
                              {group.items.map((item) => (
                                <Link
                                  key={item.href}
                                  to={item.href}
                                  className="block px-2 py-2 rounded-lg hover:bg-muted transition-colors duration-200 group"
                                >
                                  <p className="text-[12px] font-semibold text-foreground group-hover:text-accent transition-colors leading-tight">{item.label}</p>
                                  <p className="text-[10px] text-muted-foreground leading-tight mt-0.5">{item.desc}</p>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}

                      </div>

                      {/* ── Footer Row ──────────────────────── */}
                      <div className="border-t border-border/50 px-5 py-3 flex items-center justify-between bg-muted/20">
                        <p className="text-xs text-muted-foreground">30+ specialist services across SEO, web & e-commerce</p>
                        <Link
                          to="/services"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-accent/80 transition-colors"
                        >
                          View all services <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

            ) : (

              /* ── Regular Nav Link ───────────────────────── */
              <Link
                key={link.label}
                to={link.href}
                className={navTextClass(location.pathname === link.href)}
              >
                {link.label}
              </Link>

            )
          )}

          <Button variant="accent" size="sm" className="ml-3 rounded-full" asChild>
            <Link to="/contact">Free Consultation</Link>
          </Button>
        </nav>

        {/* ── Mobile Toggle ─────────────────────────────────── */}
        <button
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
          className={`lg:hidden p-2 rounded-lg transition-colors ${
            forceScrolled ? "text-foreground" : "text-primary-foreground"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* ── Mobile Nav Panel ──────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden glass border-b"
          >
            <nav
              className="container py-6 flex flex-col gap-1"
              aria-label="Mobile Navigation"
            >
              {navLinks.map((link) =>
                link.hasMegaMenu ? (

                  /* ── Mobile Services Accordion ──── */
                  <div key={link.label}>
                    <button
                      className="w-full flex items-center justify-between px-4 py-2.5 text-sm font-semibold text-foreground hover:bg-muted rounded-lg transition-colors"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    >
                      Services
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          mobileServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence>
                      {mobileServicesOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: "auto" }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden"
                        >
                          {serviceGroups.map((group) => (
                            <div key={group.label} className="mt-2 mb-1">
                              <p className="px-6 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                                {group.label}
                              </p>
                              {group.items.map((item) => (
                                <Link
                                  key={item.href}
                                  to={item.href}
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-8 py-2 text-sm text-foreground hover:bg-muted rounded-lg transition-colors"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          ))}
                          <Link
                            to="/services"
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-1.5 px-6 py-2 text-sm font-bold text-accent hover:bg-muted rounded-lg transition-colors mt-1"
                          >
                            View all services <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                ) : (

                  /* ── Regular Mobile Link ─────────── */
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-2.5 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                  >
                    {link.label}
                  </Link>

                )
              )}

              <Button variant="accent" className="mt-3 rounded-full" asChild>
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Free Consultation
                </Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
