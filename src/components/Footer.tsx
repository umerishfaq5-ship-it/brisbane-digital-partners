import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="hero-gradient text-primary-foreground">
    <div className="container py-16">
      <div className="grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <p className="font-heading font-bold text-xl mb-3">
            Next Tab<span className="text-accent">.</span>
          </p>
          <p className="text-sm opacity-80 leading-relaxed">
            Brisbane-based digital agency delivering practical SEO and development solutions for Australian businesses.
          </p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Services</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/services/seo-audits" className="hover:opacity-100 transition-opacity">SEO Audits & Strategy</Link></li>
            <li><Link to="/services/local-seo" className="hover:opacity-100 transition-opacity">Local SEO</Link></li>
            <li><Link to="/services/mobile-apps" className="hover:opacity-100 transition-opacity">Mobile App Development</Link></li>
            <li><Link to="/services/web-development" className="hover:opacity-100 transition-opacity">Web Design & Development</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Company</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/about" className="hover:opacity-100 transition-opacity">About Us</Link></li>
            <li><Link to="/portfolio" className="hover:opacity-100 transition-opacity">Portfolio</Link></li>
            <li><Link to="/testimonials" className="hover:opacity-100 transition-opacity">Testimonials</Link></li>
            <li><Link to="/contact" className="hover:opacity-100 transition-opacity">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4 text-sm uppercase tracking-wider opacity-60">Contact</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Brisbane, QLD, Australia</li>
            <li className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" /> +61 4XX XXX XXX</li>
            <li className="flex items-center gap-2"><Mail className="w-4 h-4 shrink-0" /> hello@nexttab.com.au</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} Next Tab Agency. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
