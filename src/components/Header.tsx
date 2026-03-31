import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  { label: "SEO Audits & Strategy", href: "/services/seo-audits" },
  { label: "Local SEO for Australian Businesses", href: "/services/local-seo" },
  { label: "Mobile App Development", href: "/services/mobile-apps" },
  { label: "Custom Website Design & Development", href: "/services/web-development" },
];

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services", children: services },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-sm border-b" : "bg-transparent"}`}>
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="font-heading font-extrabold text-xl tracking-tight">
          <span className={scrolled ? "text-foreground" : "text-primary-foreground"}>Next Tab</span>
          <span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button
                  className={`link-underline flex items-center gap-1 px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 ${
                    scrolled
                      ? location.pathname.startsWith("/services") ? "text-accent" : "text-foreground/80 hover:text-foreground"
                      : location.pathname.startsWith("/services") ? "text-accent" : "text-primary-foreground/80 hover:text-primary-foreground"
                  }`}
                >
                  {link.label}
                  <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.98 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute top-full left-0 w-80 bg-card rounded-xl shadow-premium border p-2 mt-2"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-4 py-3 text-sm rounded-lg hover:bg-muted transition-all duration-200 text-foreground"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                className={`link-underline px-4 py-2 text-[13px] font-medium rounded-lg transition-all duration-300 ${
                  scrolled
                    ? location.pathname === link.href ? "text-accent" : "text-foreground/80 hover:text-foreground"
                    : location.pathname === link.href ? "text-accent" : "text-primary-foreground/80 hover:text-primary-foreground"
                }`}
              >
                {link.label}
              </Link>
            )
          )}
          <Button variant="accent" size="sm" className="ml-4" asChild>
            <Link to="/contact">Get a Free Audit</Link>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden glass border-b"
          >
            <nav className="container py-6 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">{link.label}</p>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-6 py-2.5 text-sm text-foreground hover:bg-muted rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
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
              <Button variant="accent" className="mt-3" asChild>
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Get a Free Audit</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
