import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ShieldCheck, Star } from "lucide-react";

const Footer = () => (
  <footer
    className="surface-teal text-primary-foreground relative overflow-hidden"
    itemScope
    itemType="https://schema.org/LocalBusiness"
  >
    <meta itemProp="name" content="Next Tab Agency" />
    <meta itemProp="telephone" content="+61491000094" />
    <meta itemProp="email" content="info@nexttabagency.com" />
    <meta itemProp="address" content="Taylor Street, Eagleby, QLD 4207, Brisbane, Australia" />
    <div className="absolute inset-0 pattern-lines opacity-30" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

    {/* ── Australian Trust Bar ──────────────────────────────────── */}
    <div className="relative z-10 border-b border-primary-foreground/10">
      <div className="container py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-primary-foreground/60 font-medium">
          <span className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent" />
            Get an Aussie-standard SEO Audit — 100% Free
          </span>
          <span className="flex items-center gap-2">
            <Star className="w-4 h-4 text-accent fill-accent" />
            5-Star Rated by Australian Small Businesses
          </span>
          <span className="flex items-center gap-2">
            <span className="text-base">🇦🇺</span>
            Proudly Brisbane-Based. Serving All of Australia.
          </span>
        </div>
      </div>
    </div>

    <div className="container py-20 relative z-10">
      <div className="grid md:grid-cols-12 gap-10 mb-16">

        {/* Brand */}
        <div className="md:col-span-3">
          <div className="flex items-center gap-2 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" className="h-[28px] w-auto stroke-white" aria-hidden="true">
              <path d="M40 150 L95 40 L160 40 L105 150 L155 150" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M165 40 L170 40" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-heading font-bold text-xl">Next Tab</span>
          </div>
          <p className="text-sm opacity-60 leading-relaxed max-w-xs mb-4">
            Brisbane-based digital agency delivering expert SEO, paid ads, high-performance websites, and mobile apps for Australian businesses.
          </p>
          {/* Aussie trust signals */}
          <div className="mb-6 p-3 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 text-xs text-primary-foreground/60 space-y-1.5">
            <p className="flex items-center gap-2"><span>🏆</span> 200+ Australian Businesses Helped</p>
            <p className="flex items-center gap-2"><span>⭐</span> 4.9 / 5 Average Client Rating</p>
            <p className="flex items-center gap-2"><span>📍</span> Based in Eagleby, Brisbane QLD 4207</p>
          </div>
          <div className="flex gap-3">
            <a
              href="https://www.linkedin.com/in/hamza-ishfaq-108268105/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Connect with Hamza Ishfaq on LinkedIn"
              className="w-10 h-10 rounded-full border border-primary-foreground/15 flex items-center justify-center hover:border-accent hover:bg-accent/10 transition-all"
            >
              <span className="text-xs font-bold">in</span>
            </a>
          </div>
        </div>

        {/* SEO Services */}
        <div className="md:col-span-2">
          <p className="font-heading font-semibold mb-5 text-xs uppercase tracking-[0.2em] text-accent">SEO &amp; Ads</p>
          <nav aria-label="Footer SEO Services Navigation">
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/seo-audits" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">SEO Audits</Link></li>
              <li><Link to="/services/local-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Local SEO</Link></li>
              <li><Link to="/services/google-business-profile" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Google Business Profile</Link></li>
              <li><Link to="/services/ppc-google-ads" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">PPC &amp; Google Ads</Link></li>
              <li><Link to="/services/social-media-ads" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Social Media Ads</Link></li>
            </ul>
          </nav>
        </div>

        {/* Web & Apps */}
        <div className="md:col-span-2">
          <p className="font-heading font-semibold mb-5 text-xs uppercase tracking-[0.2em] text-accent">Web &amp; Apps</p>
          <nav aria-label="Footer Web Services Navigation">
            <ul className="space-y-3 text-sm">
              <li><Link to="/services/web-development" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Web Development</Link></li>
              <li><Link to="/services/mobile-apps" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Mobile Apps</Link></li>
              <li><Link to="/services/wordpress-development" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">WordPress</Link></li>
              <li><Link to="/services/shopify-development" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Shopify</Link></li>
              <li><Link to="/services/woocommerce-development" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">WooCommerce</Link></li>
              <li><Link to="/our-team" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Our Team</Link></li>
            </ul>
          </nav>
        </div>


        {/* Locations */}
        <div className="md:col-span-2">
          <p className="font-heading font-semibold mb-5 text-xs uppercase tracking-[0.2em] text-accent">Locations</p>
          <nav aria-label="Footer Locations Navigation">
            <ul className="space-y-3 text-sm">
              <li><Link to="/locations/brisbane-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Brisbane, QLD</Link></li>
              <li><Link to="/locations/sydney-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Sydney, NSW</Link></li>
              <li><Link to="/locations/melbourne-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Melbourne, VIC</Link></li>
              <li><Link to="/locations/perth-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Perth, WA</Link></li>
              <li><Link to="/locations/adelaide-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Adelaide, SA</Link></li>
              <li><Link to="/locations/canberra-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Canberra, ACT</Link></li>
            </ul>
          </nav>
        </div>

        {/* Contact — prominent with Aussie trust copy */}
        <div className="md:col-span-3">
          <p className="font-heading font-semibold mb-5 text-xs uppercase tracking-[0.2em] text-accent">Contact Us</p>

          {/* Trust copy above form */}
          <p className="text-xs leading-relaxed text-primary-foreground/50 mb-4 italic">
            "Get an Aussie-standard SEO Audit — 100% Free. No lock-in contracts."
          </p>

          <address className="not-italic" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <span className="opacity-80">
                  <span itemProp="streetAddress">Taylor Street</span>,{" "}
                  <span itemProp="addressLocality">Eagleby</span>,{" "}
                  <span itemProp="addressRegion">QLD</span>{" "}
                  <span itemProp="postalCode">4207</span>,{" "}
                  Brisbane,{" "}
                  <span itemProp="addressCountry">Australia</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 shrink-0 text-accent" aria-hidden="true" />
                <a
                  href="tel:+61491000094"
                  className="opacity-80 hover:opacity-100 hover:text-accent transition-colors font-semibold"
                  itemProp="telephone"
                >
                  0491 000 094
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-accent" aria-hidden="true" />
                <a
                  href="mailto:info@nexttabagency.com"
                  className="opacity-80 hover:opacity-100 hover:text-accent transition-colors"
                  itemProp="email"
                >
                  info@nexttabagency.com
                </a>
              </li>
            </ul>
          </address>
        </div>

      </div>

      <div className="h-px bg-primary-foreground/10 mb-6" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-40">
        <span>© {new Date().getFullYear()} Next Tab Agency. All rights reserved.</span>
        <div className="flex items-center gap-5 flex-wrap justify-center">
          <Link to="/about" className="hover:opacity-100 hover:text-accent transition-all duration-200">About</Link>
          <Link to="/portfolio" className="hover:opacity-100 hover:text-accent transition-all duration-200">Portfolio</Link>
          <Link to="/blog" className="hover:opacity-100 hover:text-accent transition-all duration-200">Blog</Link>
          <Link to="/sitemap" className="hover:opacity-100 hover:text-accent transition-all duration-200">Sitemap</Link>
          <Link to="/privacy" className="hover:opacity-100 hover:text-accent transition-all duration-200">Privacy Policy</Link>
          <Link to="/terms" className="hover:opacity-100 hover:text-accent transition-all duration-200">Terms of Service</Link>
          <span>Proudly made in Brisbane, Australia 🇦🇺</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
