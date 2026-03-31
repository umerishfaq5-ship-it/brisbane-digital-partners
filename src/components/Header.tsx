import { useState } from "react";
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
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-heading font-bold text-xl md:text-2xl text-foreground tracking-tight">
          Next Tab<span className="text-accent">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative group"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted ${location.pathname.startsWith("/services") ? "text-accent" : "text-foreground"}`}>
                  {link.label} <ChevronDown className="w-3.5 h-3.5" />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 w-72 bg-card rounded-lg shadow-lg border p-2 mt-1"
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          to={child.href}
                          className="block px-3 py-2.5 text-sm rounded-md hover:bg-muted transition-colors text-foreground"
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
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors hover:bg-muted ${location.pathname === link.href ? "text-accent" : "text-foreground"}`}
              >
                {link.label}
              </Link>
            )
          )}
          <Button variant="accent" size="sm" className="ml-3" asChild>
            <Link to="/contact">Get a Free Audit</Link>
          </Button>
        </nav>

        {/* Mobile toggle */}
        <button className="lg:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
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
            className="lg:hidden overflow-hidden bg-card border-b"
          >
            <nav className="container py-4 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label}>
                    <p className="px-3 py-2 text-sm font-semibold text-muted-foreground">{link.label}</p>
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        to={child.href}
                        onClick={() => setMobileOpen(false)}
                        className="block px-6 py-2 text-sm text-foreground hover:bg-muted rounded-md"
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
                    className="px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md"
                  >
                    {link.label}
                  </Link>
                )
              )}
              <Button variant="accent" className="mt-2" asChild>
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
