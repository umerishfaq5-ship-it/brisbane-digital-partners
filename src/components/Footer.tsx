import { Link } from "react-router-dom";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => (
  <footer className="surface-teal text-primary-foreground relative overflow-hidden">
    <div className="absolute inset-0 pattern-lines opacity-30" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

    <div className="container py-20 relative z-10">
      <div className="grid md:grid-cols-12 gap-12 mb-16">
        <div className="md:col-span-4">
          <div className="flex items-center gap-2 mb-5">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <span className="font-heading font-bold text-accent-foreground text-sm">N</span>
            </div>
            <span className="font-heading font-bold text-xl">Next Tab</span>
          </div>
          <p className="text-sm opacity-60 leading-relaxed max-w-xs mb-6">
            Brisbane-based digital agency delivering premium SEO and development solutions for Australian businesses.
          </p>
          <div className="flex gap-3">
            <div className="w-10 h-10 rounded-full border border-primary-foreground/15 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all cursor-pointer">
              <span className="text-xs font-bold">Li</span>
            </div>
            <div className="w-10 h-10 rounded-full border border-primary-foreground/15 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all cursor-pointer">
              <span className="text-xs font-bold">Fb</span>
            </div>
            <div className="w-10 h-10 rounded-full border border-primary-foreground/15 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all cursor-pointer">
              <span className="text-xs font-bold">Ig</span>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-heading font-semibold mb-5 text-xs uppercase tracking-[0.2em] text-accent">Services</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services/seo-audits" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">SEO Audits</Link></li>
            <li><Link to="/services/local-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Local SEO</Link></li>
            <li><Link to="/services/mobile-apps" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Mobile Apps</Link></li>
            <li><Link to="/services/web-development" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Web Development</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-heading font-semibold mb-5 text-xs uppercase tracking-[0.2em] text-accent">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/about" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">About Us</Link></li>
            <li><Link to="/portfolio" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Portfolio</Link></li>
            <li><Link to="/testimonials" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Testimonials</Link></li>
            <li><Link to="/contact" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-heading font-semibold mb-5 text-xs uppercase tracking-[0.2em] text-accent">Contact</h4>
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

      <div className="h-px bg-primary-foreground/10 mb-6" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-40">
        <span>© {new Date().getFullYear()} Next Tab Agency. All rights reserved.</span>
        <span>Proudly made in Brisbane, Australia 🇦🇺</span>
      </div>
    </div>
  </footer>
);

export default Footer;
