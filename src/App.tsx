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
// SEO Service Pages
import TechnicalSeo from "./pages/services/TechnicalSeo.tsx";
import EcommerceSeo from "./pages/services/EcommerceSeo.tsx";
import LinkBuilding from "./pages/services/LinkBuilding.tsx";
import AiSeo from "./pages/services/AiSeo.tsx";
import WordPressSeo from "./pages/services/WordPressSeo.tsx";
import ShopifySeo from "./pages/services/ShopifySeo.tsx";
import WooCommerceSeo from "./pages/services/WooCommerceSeo.tsx";
import EnterpriseSeo from "./pages/services/EnterpriseSeo.tsx";
import SmallBusinessSeo from "./pages/services/SmallBusinessSeo.tsx";
import B2bSeo from "./pages/services/B2bSeo.tsx";
import SeoConsulting from "./pages/services/SeoConsulting.tsx";
import FacebookAds from "./pages/services/FacebookAds.tsx";
import ContentMarketing from "./pages/services/ContentMarketing.tsx";
import PpcBrisbane from "./pages/services/PpcBrisbane.tsx";
import GoogleAdsBrisbane from "./pages/services/GoogleAdsBrisbane.tsx";
import ConversionRateOptimisation from "./pages/services/ConversionRateOptimisation.tsx";
import EmailMarketing from "./pages/services/EmailMarketing.tsx";
import OnPageSeo from "./pages/services/OnPageSeo.tsx";
import SeoPackages from "./pages/services/SeoPackages.tsx";
import GoogleShopping from "./pages/services/GoogleShopping.tsx";
import OffPageSeo from "./pages/services/OffPageSeo.tsx";
import LinkedInAds from "./pages/services/LinkedInAds.tsx";
// Industry Pages
import SeoForTradies from "./pages/industry/SeoForTradies.tsx";
import SeoForDentists from "./pages/industry/SeoForDentists.tsx";
import SeoForLawyers from "./pages/industry/SeoForLawyers.tsx";
import SeoForRealEstate from "./pages/industry/SeoForRealEstate.tsx";
import RetailSeo from "./pages/industry/RetailSeo.tsx";
import HospitalitySeo from "./pages/industry/HospitalitySeo.tsx";
import HealthcareSeo from "./pages/industry/HealthcareSeo.tsx";
import AccountantSeo from "./pages/industry/AccountantSeo.tsx";
import MortgageBrokerSeo from "./pages/industry/MortgageBrokerSeo.tsx";
import EducationSeo from "./pages/industry/EducationSeo.tsx";
import NdisDigitalMarketing from "./pages/industry/NdisDigitalMarketing.tsx";
import TradieDigitalMarketing from "./pages/industry/TradieDigitalMarketing.tsx";
import SaasSeo from "./pages/industry/SaasSeo.tsx";
import BrisbaneSeo  from "./pages/locations/BrisbaneSeo.tsx";
import SydneySeo    from "./pages/locations/SydneySeo.tsx";
import MelbourneSeo from "./pages/locations/MelbourneSeo.tsx";
import PerthSeo     from "./pages/locations/PerthSeo.tsx";
import AdelaideSeo  from "./pages/locations/AdelaideSeo.tsx";
import CanberraSeo  from "./pages/locations/CanberraSeo.tsx";
import GoldCoastSeo from "./pages/locations/GoldCoastSeo.tsx";
import SunshineCoastSeo from "./pages/locations/SunshineCoastSeo.tsx";
import HobartSeo from "./pages/locations/HobartSeo.tsx";
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
import LocalSeoMapPack from "./pages/blog/LocalSeoMapPack.tsx";
import AiSearchSgeAustralia from "./pages/blog/AiSearchSgeAustralia.tsx";
import SeoVsGoogleAdsCost from "./pages/blog/SeoVsGoogleAdsCost.tsx";
import ShopifyVsWooCommerceSeo from "./pages/blog/ShopifyVsWooCommerceSeo.tsx";
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
            {/* SEO Service Pages */}
            <Route path="/services/technical-seo" element={<TechnicalSeo />} />
            <Route path="/services/ecommerce-seo" element={<EcommerceSeo />} />
            <Route path="/services/link-building" element={<LinkBuilding />} />
            <Route path="/services/ai-seo" element={<AiSeo />} />
            <Route path="/services/wordpress-seo" element={<WordPressSeo />} />
            <Route path="/services/shopify-seo" element={<ShopifySeo />} />
            <Route path="/services/woocommerce-seo" element={<WooCommerceSeo />} />
            <Route path="/services/enterprise-seo" element={<EnterpriseSeo />} />
            <Route path="/services/small-business-seo" element={<SmallBusinessSeo />} />
            <Route path="/services/b2b-seo" element={<B2bSeo />} />
            <Route path="/services/seo-consulting" element={<SeoConsulting />} />
            <Route path="/services/facebook-ads" element={<FacebookAds />} />
            <Route path="/services/content-marketing" element={<ContentMarketing />} />
            <Route path="/services/ppc-brisbane" element={<PpcBrisbane />} />
            <Route path="/services/google-ads-brisbane" element={<GoogleAdsBrisbane />} />
            <Route path="/services/conversion-rate-optimisation" element={<ConversionRateOptimisation />} />
            <Route path="/services/email-marketing" element={<EmailMarketing />} />
            <Route path="/services/on-page-seo" element={<OnPageSeo />} />
            <Route path="/services/seo-packages" element={<SeoPackages />} />
            <Route path="/services/google-shopping" element={<GoogleShopping />} />
            <Route path="/services/off-page-seo" element={<OffPageSeo />} />
            <Route path="/services/linkedin-ads" element={<LinkedInAds />} />
            {/* Industry Pages */}
            <Route path="/industry/seo-for-tradies" element={<SeoForTradies />} />
            <Route path="/industry/seo-for-dentists" element={<SeoForDentists />} />
            <Route path="/industry/seo-for-lawyers" element={<SeoForLawyers />} />
            <Route path="/industry/seo-for-real-estate" element={<SeoForRealEstate />} />
            <Route path="/industry/retail-seo" element={<RetailSeo />} />
            <Route path="/industry/hospitality-seo" element={<HospitalitySeo />} />
            <Route path="/industry/healthcare-seo" element={<HealthcareSeo />} />
            <Route path="/industry/accountant-seo" element={<AccountantSeo />} />
            <Route path="/industry/mortgage-broker-seo" element={<MortgageBrokerSeo />} />
            <Route path="/industry/education-seo" element={<EducationSeo />} />
            <Route path="/industry/ndis-digital-marketing" element={<NdisDigitalMarketing />} />
            <Route path="/industry/tradie-digital-marketing" element={<TradieDigitalMarketing />} />
            <Route path="/industry/saas-seo" element={<SaasSeo />} />
            {/* Location Pages */}
            <Route path="/locations/brisbane-seo"  element={<BrisbaneSeo />} />
            <Route path="/locations/sydney-seo"    element={<SydneySeo />} />
            <Route path="/locations/melbourne-seo" element={<MelbourneSeo />} />
            <Route path="/locations/perth-seo"     element={<PerthSeo />} />
            <Route path="/locations/adelaide-seo"  element={<AdelaideSeo />} />
            <Route path="/locations/canberra-seo"  element={<CanberraSeo />} />
            <Route path="/locations/gold-coast-seo" element={<GoldCoastSeo />} />
            <Route path="/locations/sunshine-coast-seo" element={<SunshineCoastSeo />} />
            <Route path="/locations/hobart-seo" element={<HobartSeo />} />
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
            <Route path="/blog/local-seo-map-pack" element={<LocalSeoMapPack />} />
            <Route path="/blog/ai-search-sge-australia" element={<AiSearchSgeAustralia />} />
            <Route path="/blog/seo-vs-google-ads-cost" element={<SeoVsGoogleAdsCost />} />
            <Route path="/blog/shopify-vs-woocommerce-seo" element={<ShopifyVsWooCommerceSeo />} />
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
