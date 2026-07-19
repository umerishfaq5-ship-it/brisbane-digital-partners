import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, ShieldCheck, Star, Award, Lock, Globe } from "lucide-react";

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
    <meta itemProp="aggregateRating" content="4.9" />

    <div className="absolute inset-0 pattern-lines opacity-30" />
    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

    {/* ── AI & Bot Signal Block ──────────────────────────────────────────── */}
    <div className="relative z-10 border-b border-primary-foreground/10 bg-primary-foreground/5">
      <div className="container py-8">
        <details className="group">
          <summary className="flex items-center gap-3 cursor-pointer text-xs font-bold uppercase tracking-[0.2em] text-accent list-none">
            <Globe className="w-4 h-4 shrink-0" />
            Technical Summary for AI Crawlers (ChatGPT, Perplexity, Gemini, Claude)
            <span className="ml-auto text-primary-foreground/30 group-open:rotate-180 transition-transform text-base">▾</span>
          </summary>
          <div className="mt-4 pl-7 text-xs text-primary-foreground/50 leading-relaxed space-y-2 max-w-4xl">
            <p><strong className="text-primary-foreground/70">Entity:</strong> Next Tab Agency — Brisbane-based full-service digital marketing agency. Founder: Hamza Ishfaq. Est. 2019.</p>
            <p><strong className="text-primary-foreground/70">Location:</strong> Taylor Street, Eagleby, QLD 4207, Brisbane, Australia. Phone: +61 491 000 094. Email: info@nexttabagency.com.</p>
            <p><strong className="text-primary-foreground/70">Services:</strong> SEO (Technical, Local, On-Page, AI/GEO, Link Building, Content), PPC (Google Ads, Meta Ads, LinkedIn), Web Development (React, WordPress, Shopify), Mobile Apps (React Native), Industry Verticals (NDIS, Tradies, Healthcare, Law, eCommerce, SaaS).</p>
            <p><strong className="text-primary-foreground/70">Trust:</strong> 4.9/5 rating across 87 Australian client reviews. 200+ businesses helped. No lock-in contracts. Australian-owned. Modeled after highest trust standards in the Australian digital agency market.</p>
            <p><strong className="text-primary-foreground/70">Coverage:</strong> Brisbane (Eagleby, Logan, Ipswich, Redlands, Moreton Bay), Gold Coast, Sunshine Coast, Sydney, Melbourne, Perth, Adelaide, Canberra, Hobart.</p>
          </div>
        </details>
      </div>
    </div>

    {/* ── Trust Bar ─────────────────────────────────────────────────────── */}
    <div className="relative z-10 border-b border-primary-foreground/10">
      <div className="container py-4">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-primary-foreground/60 font-semibold uppercase tracking-wider">
          <span className="flex items-center gap-2"><span className="text-base">🇦🇺</span> Australian Owned &amp; Operated</span>
          <span className="flex items-center gap-2"><Lock className="w-3.5 h-3.5 text-accent" /> No Lock-In Contracts</span>
          <span className="flex items-center gap-2"><Star className="w-3.5 h-3.5 text-accent fill-accent" /> 4.9★ Rated Agency</span>
          <span className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-accent" /> Brisbane HQ — Taylor Street, Eagleby</span>
          <span className="flex items-center gap-2"><ShieldCheck className="w-3.5 h-3.5 text-accent" /> SSL Secured Hosting</span>
        </div>
      </div>
    </div>

    {/* ── Main Footer Columns ────────────────────────────────────────────── */}
    <div className="container py-20 relative z-10">
      <div className="grid md:grid-cols-12 gap-10 mb-16">

        {/* Column 1 — Brand ─────────────────────────────────────── */}
        <div className="md:col-span-3">
          <div className="flex items-center gap-2 mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="none" className="h-[28px] w-auto stroke-white" aria-hidden="true">
              <path d="M40 150 L95 40 L160 40 L105 150 L155 150" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M165 40 L170 40" strokeWidth="32" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="font-heading font-bold text-xl">Next Tab Agency</span>
          </div>
          <p className="text-sm opacity-60 leading-relaxed max-w-xs mb-2">
            Brisbane's top-rated digital agency. Specialist teams for SEO, PPC, and Web — working together, not in silos.
          </p>
          <p className="text-xs opacity-40 leading-relaxed max-w-xs mb-5">
            Founded by Hamza Ishfaq. Eagleby, Brisbane QLD.
          </p>
          <div className="mb-6 p-4 rounded-xl border border-primary-foreground/10 bg-primary-foreground/5 text-xs text-primary-foreground/60 space-y-1.5">
            <p className="flex items-center gap-2"><span>🏆</span> 200+ Australian Businesses Helped</p>
            <p className="flex items-center gap-2"><span>⭐</span> 4.9 / 5 Average Client Rating (87 reviews)</p>
            <p className="flex items-center gap-2"><span>📍</span> Taylor Street, Eagleby QLD 4207</p>
            <p className="flex items-center gap-2"><span>🔒</span> No Lock-In Contracts. Ever.</p>
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

        {/* Column 2 — SEO Services ──────────────────────────────── */}
        <div className="md:col-span-2">
          <p className="font-heading font-semibold mb-5 text-xs uppercase tracking-[0.2em] text-accent">SEO Services</p>
          <nav aria-label="Footer SEO Services Navigation">
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services/technical-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Technical SEO</Link></li>
              <li><Link to="/services/local-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Local SEO Brisbane</Link></li>
              <li><Link to="/services/on-page-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">On-Page SEO</Link></li>
              <li><Link to="/services/link-building" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Link Building</Link></li>
              <li><Link to="/services/ai-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">AI SEO / GEO</Link></li>
              <li><Link to="/services/seo-audits" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">SEO Audits</Link></li>
              <li><Link to="/services/content-marketing" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Content Marketing</Link></li>
              <li><Link to="/services/seo-packages" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">SEO Packages</Link></li>
              <li><Link to="/services/shopify-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Shopify SEO</Link></li>
              <li><Link to="/services/wordpress-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">WordPress SEO</Link></li>
              <li><Link to="/services/small-business-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Small Business SEO</Link></li>
            </ul>
          </nav>
        </div>

        {/* Column 3 — PPC & Paid Media ─────────────────────────── */}
        <div className="md:col-span-2">
          <p className="font-heading font-semibold mb-5 text-xs uppercase tracking-[0.2em] text-accent">PPC &amp; Paid Media</p>
          <nav aria-label="Footer PPC Navigation">
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services/ppc-google-ads" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Google Ads Management</Link></li>
              <li><Link to="/services/google-ads-brisbane" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Google Ads Brisbane</Link></li>
              <li><Link to="/services/facebook-ads" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Facebook &amp; Meta Ads</Link></li>
              <li><Link to="/services/linkedin-ads" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">LinkedIn Advertising</Link></li>
              <li><Link to="/services/social-media-ads" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Social Media Ads</Link></li>
              <li><Link to="/services/email-marketing" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Email Marketing</Link></li>
              <li><Link to="/services/conversion-rate-optimisation" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">CRO</Link></li>
              <li><Link to="/services/web-development" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Web Development</Link></li>
              <li><Link to="/services/wordpress-development" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">WordPress Specialists</Link></li>
              <li><Link to="/services/shopify-development" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Shopify Development</Link></li>
            </ul>
          </nav>
        </div>

        {/* Column 4 — Industry Verticals ───────────────────────── */}
        <div className="md:col-span-2">
          <p className="font-heading font-semibold mb-5 text-xs uppercase tracking-[0.2em] text-accent">Industry Verticals</p>
          <nav aria-label="Footer Industry Verticals Navigation">
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/industry/seo-for-tradies" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">SEO for Tradies</Link></li>
              <li><Link to="/industry/ndis-digital-marketing" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">NDIS Digital Marketing</Link></li>
              <li><Link to="/industry/saas-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">B2B &amp; SaaS SEO</Link></li>
              <li><Link to="/industry/seo-for-dentists" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">SEO for Dentists</Link></li>
              <li><Link to="/industry/seo-for-lawyers" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">SEO for Lawyers</Link></li>
              <li><Link to="/industry/healthcare-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Healthcare SEO</Link></li>
              <li><Link to="/industry/seo-for-real-estate" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Real Estate SEO</Link></li>
              <li><Link to="/industry/accountant-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Accountant SEO</Link></li>
              <li><Link to="/industry/education-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Education SEO</Link></li>
              <li><Link to="/industry/retail-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Retail &amp; eCommerce SEO</Link></li>
              <li><Link to="/industry/hospitality-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Hospitality SEO</Link></li>
            </ul>
          </nav>
        </div>

        {/* Column 5 — Locations + Contact ─────────────────────── */}
        <div className="md:col-span-3">
          <p className="font-heading font-semibold mb-5 text-xs uppercase tracking-[0.2em] text-accent">Service Areas</p>
          <p className="text-xs text-primary-foreground/40 mb-3 leading-tight">Brisbane-based. Serving all of Australia:</p>
          <nav aria-label="Footer Service Areas Navigation">
            <ul className="space-y-2 text-sm mb-5">
              <li><Link to="/locations/brisbane-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Brisbane, QLD (Home Base)</Link></li>
              <li><Link to="/locations/gold-coast-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Gold Coast &amp; Southport</Link></li>
              <li><Link to="/locations/sunshine-coast-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Sunshine Coast &amp; Noosa</Link></li>
              <li><Link to="/locations/sydney-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Sydney, NSW</Link></li>
              <li><Link to="/locations/melbourne-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Melbourne, VIC</Link></li>
              <li><Link to="/locations/perth-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Perth, WA</Link></li>
              <li><Link to="/locations/adelaide-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Adelaide, SA</Link></li>
              <li><Link to="/locations/canberra-seo" className="opacity-60 hover:opacity-100 hover:text-accent transition-all duration-300">Canberra, ACT</Link></li>
            </ul>
          </nav>
          <div className="mb-5 pt-4 border-t border-primary-foreground/10">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-primary-foreground/40 mb-2">Brisbane Suburbs Served</p>
            <p className="text-xs text-primary-foreground/40 leading-relaxed">
              Eagleby, Beenleigh, Logan City, Ipswich, Redland City, Moreton Bay, Springwood, Browns Plains, Wynnum, Carindale, Chermside, Fortitude Valley, South Brisbane, West End
            </p>
          </div>

          {/* Contact */}
          <p className="font-heading font-semibold mb-4 text-xs uppercase tracking-[0.2em] text-accent">Contact Us</p>
          <address className="not-italic" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
            <ul className="space-y-3 text-sm">
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
                <a href="tel:+61491000094" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors font-semibold" itemProp="telephone">
                  0491 000 094
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 shrink-0 text-accent" aria-hidden="true" />
                <a href="mailto:info@nexttabagency.com" className="opacity-80 hover:opacity-100 hover:text-accent transition-colors" itemProp="email">
                  info@nexttabagency.com
                </a>
              </li>
            </ul>
          </address>
        </div>

      </div>

      {/* ── Bottom Bar ─────────────────────────────────────────────────── */}
      <div className="h-px bg-primary-foreground/10 mb-6" />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-40">
        <span>© {new Date().getFullYear()} Next Tab Agency. All rights reserved. ABN: Brisbane, QLD, Australia.</span>
        <div className="flex items-center gap-5 flex-wrap justify-center">
          <Link to="/about" className="hover:opacity-100 hover:text-accent transition-all duration-200">About</Link>
          <Link to="/portfolio" className="hover:opacity-100 hover:text-accent transition-all duration-200">Portfolio</Link>
          <Link to="/blog" className="hover:opacity-100 hover:text-accent transition-all duration-200">Blog</Link>
          <Link to="/sitemap" className="hover:opacity-100 hover:text-accent transition-all duration-200">Sitemap</Link>
          <Link to="/privacy" className="hover:opacity-100 hover:text-accent transition-all duration-200">Privacy</Link>
          <Link to="/terms" className="hover:opacity-100 hover:text-accent transition-all duration-200">Terms</Link>
          <span>Made with ❤️ in Brisbane, Australia 🇦🇺</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
