import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="hero-gradient text-primary-foreground relative overflow-hidden">
    {/* Subtle decorative elements */}
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

    <div className="container py-20 relative z-10">
      <div className="grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <p className="font-heading font-extrabold text-2xl mb-4">
            Next Tab<span className="text-accent">.</span>
          </p>
          <p className="text-sm opacity-60 leading-relaxed max-w-xs">
            Brisbane-based digital agency delivering practical SEO and development solutions for Australian businesses.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-5 text-xs uppercase tracking-[0.2em] opacity-40">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services/seo-audits" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">SEO Audits & Strategy</Link></li>
            <li><Link to="/services/local-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Local SEO</Link></li>
            <li><Link to="/services/mobile-apps" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Mobile App Development</Link></li>
            <li><Link to="/services/web-development" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Web Design & Development</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-5 text-xs uppercase tracking-[0.2em] opacity-40">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">About Us</Link></li>
            <li><Link to="/portfolio" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Portfolio</Link></li>
            <li><Link to="/testimonials" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Testimonials</Link></li>
            <li><Link to="/contact" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold mb-5 text-xs uppercase tracking-[0.2em] opacity-40">Contact</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3 opacity-60">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" />
              <span>Brisbane, QLD, Australia</span>
            </li>
            <li className="flex items-center gap-3 opacity-60">
              <Phone className="w-4 h-4 shrink-0 text-accent" />
              <span>+61 4XX XXX XXX</span>
            </li>
            <li className="flex items-center gap-3 opacity-60">
              <Mail className="w-4 h-4 shrink-0 text-accent" />
              <span>hello@nexttab.com.au</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="divider-gradient mt-16 mb-6 opacity-20" />
      <div className="text-center text-xs opacity-30">
        © {new Date().getFullYear()} Next Tab Agency. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
