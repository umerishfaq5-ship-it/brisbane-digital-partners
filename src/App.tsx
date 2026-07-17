import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import OurTeam from "./pages/OurTeam.tsx";
import Services from "./pages/Services.tsx";
import SeoAudits from "./pages/services/SeoAudits.tsx";
import LocalSeo from "./pages/services/LocalSeo.tsx";
import MobileApps from "./pages/services/MobileApps.tsx";
import WebDevelopment from "./pages/services/WebDevelopment.tsx";
import WordPress    from "./pages/services/WordPress.tsx";
import Squarespace  from "./pages/services/Squarespace.tsx";
import Shopify      from "./pages/services/Shopify.tsx";
import WooCommerce  from "./pages/services/WooCommerce.tsx";
import Wix          from "./pages/services/Wix.tsx";
import BigCommerce  from "./pages/services/BigCommerce.tsx";
import Magento      from "./pages/services/Magento.tsx";
import Maropost     from "./pages/services/Maropost.tsx";
import SpeedOptimization from "./pages/services/SpeedOptimization.tsx";
import SeoMigration from "./pages/services/SeoMigration.tsx";
import SocialMediaAds from "./pages/services/SocialMediaAds.tsx";
import PpcAds       from "./pages/services/PpcAds.tsx";
import GoogleBusinessProfile from "./pages/services/GoogleBusinessProfile.tsx";
import BrisbaneSeo  from "./pages/locations/BrisbaneSeo.tsx";
import SydneySeo    from "./pages/locations/SydneySeo.tsx";
import MelbourneSeo from "./pages/locations/MelbourneSeo.tsx";
import PerthSeo     from "./pages/locations/PerthSeo.tsx";
import AdelaideSeo  from "./pages/locations/AdelaideSeo.tsx";
import CanberraSeo  from "./pages/locations/CanberraSeo.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Testimonials from "./pages/Testimonials.tsx";
import Contact from "./pages/Contact.tsx";
import SitemapPage from "./pages/Sitemap.tsx";
import Privacy from "./pages/Privacy.tsx";
import Terms from "./pages/Terms.tsx";
import NotFound from "./pages/NotFound.tsx";
import Blog from "./pages/Blog.tsx";
import SeoForSmallBusiness from "./pages/blog/SeoForSmallBusiness.tsx";
import WhyYourWebsiteNeedsSeo from "./pages/blog/WhyYourWebsiteNeedsSeo.tsx";
import GoogleBusinessProfileSetup from "./pages/blog/GoogleBusinessProfileSetup.tsx";
import SeoAuditChecklist from "./pages/blog/SeoAuditChecklist.tsx";
import WhatAreBacklinks from "./pages/blog/WhatAreBacklinks.tsx";
import SeoVsGoogleAds from "./pages/blog/SeoVsGoogleAds.tsx";
import ComVsComAu from "./pages/blog/ComVsComAu.tsx";
import ShopifySeoAustralia from "./pages/blog/ShopifySeoAustralia.tsx";
import CoreUpdateMay2026 from "./pages/blog/CoreUpdateMay2026.tsx";
import ContentStrategyCoreUpdate from "./pages/blog/ContentStrategyCoreUpdate.tsx";
import TechnicalSeoCoreUpdate from "./pages/blog/TechnicalSeoCoreUpdate.tsx";
import LocalEntityCoreUpdate from "./pages/blog/LocalEntityCoreUpdate.tsx";
import HamzaInvoice from "./pages/hamza/HamzaInvoice.tsx";
import HamzaRecords from "./pages/hamza/HamzaRecords.tsx";
import HamzaInvoiceView from "./pages/hamza/HamzaInvoiceView.tsx";
import HamzaAuthGuard from "./pages/hamza/HamzaAuthGuard.tsx";
import MyFitnessCoach from "./pages/portfolio/MyFitnessCoach.tsx";
import CircleIt from "./pages/portfolio/CircleIt.tsx";
import VacanciesPage from "./pages/portfolio/Vacancies.tsx";
import HeavenOnMainstreet from "./pages/portfolio/HeavenOnMainstreet.tsx";
import InstitutionalScalper from "./pages/portfolio/InstitutionalScalper.tsx";
import MarkhorAutoCare from "./pages/portfolio/MarkhorAutoCare.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/seo-audits" element={<SeoAudits />} />
            <Route path="/services/local-seo" element={<LocalSeo />} />
            <Route path="/services/mobile-apps" element={<MobileApps />} />
            <Route path="/services/web-development"         element={<WebDevelopment />} />
            <Route path="/services/wordpress-development"   element={<WordPress />} />
            <Route path="/services/squarespace-development" element={<Squarespace />} />
            <Route path="/services/shopify-development"     element={<Shopify />} />
            <Route path="/services/woocommerce-development" element={<WooCommerce />} />
            <Route path="/services/wix-development"         element={<Wix />} />
            <Route path="/services/bigcommerce-development" element={<BigCommerce />} />
            <Route path="/services/magento-development"     element={<Magento />} />
            <Route path="/services/maropost-neto"           element={<Maropost />} />
            <Route path="/services/speed-optimization"      element={<SpeedOptimization />} />
            <Route path="/services/seo-migration"           element={<SeoMigration />} />
            <Route path="/services/social-media-ads"        element={<SocialMediaAds />} />
            <Route path="/services/ppc-google-ads"          element={<PpcAds />} />
            <Route path="/services/google-business-profile" element={<GoogleBusinessProfile />} />
            {/* Location Pages */}
            <Route path="/locations/brisbane-seo"  element={<BrisbaneSeo />} />
            <Route path="/locations/sydney-seo"    element={<SydneySeo />} />
            <Route path="/locations/melbourne-seo" element={<MelbourneSeo />} />
            <Route path="/locations/perth-seo"     element={<PerthSeo />} />
            <Route path="/locations/adelaide-seo"  element={<AdelaideSeo />} />
            <Route path="/locations/canberra-seo"  element={<CanberraSeo />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/my-fitness-coach"         element={<MyFitnessCoach />} />
            <Route path="/portfolio/circle-it"                element={<CircleIt />} />
            <Route path="/portfolio/vacancies"                element={<VacanciesPage />} />
            <Route path="/portfolio/heaven-on-mainstreet"     element={<HeavenOnMainstreet />} />
            <Route path="/portfolio/institutional-scalper"    element={<InstitutionalScalper />} />
            <Route path="/portfolio/markhor-auto-care"        element={<MarkhorAutoCare />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/sitemap" element={<SitemapPage />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/seo-for-small-business-zero-time" element={<SeoForSmallBusiness />} />
            <Route path="/blog/why-your-website-needs-seo" element={<WhyYourWebsiteNeedsSeo />} />
            <Route path="/blog/google-business-profile-setup" element={<GoogleBusinessProfileSetup />} />
            <Route path="/blog/seo-audit-checklist" element={<SeoAuditChecklist />} />
            <Route path="/blog/what-are-backlinks" element={<WhatAreBacklinks />} />
            <Route path="/blog/seo-vs-google-ads-aussie-tradies" element={<SeoVsGoogleAds />} />
            <Route path="/blog/com-vs-com-au-australia" element={<ComVsComAu />} />
            <Route path="/blog/shopify-seo-australia" element={<ShopifySeoAustralia />} />
            <Route path="/blog/core-update-may-2026" element={<CoreUpdateMay2026 />} />
            <Route path="/blog/content-strategy-core-update" element={<ContentStrategyCoreUpdate />} />
            <Route path="/blog/technical-seo-core-update" element={<TechnicalSeoCoreUpdate />} />
            <Route path="/blog/local-entity-core-update" element={<LocalEntityCoreUpdate />} />
            {/* Hamza Invoice System */}
            <Route path="/hamza" element={<HamzaAuthGuard><HamzaInvoice /></HamzaAuthGuard>} />
            <Route path="/hamza/records" element={<HamzaAuthGuard><HamzaRecords /></HamzaAuthGuard>} />
            <Route path="/hamza/invoice/:id" element={<HamzaAuthGuard><HamzaInvoiceView /></HamzaAuthGuard>} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
