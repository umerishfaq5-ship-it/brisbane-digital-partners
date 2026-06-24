import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileStickyBar from "./MobileStickyBar";
import BackToTop from "./BackToTop";
import WhatsAppButton from "./WhatsAppButton";
import LeadCaptureModal from "./LeadCaptureModal";
import TechSummaryBlock from "./TechSummaryBlock";

interface LayoutProps {
  children: ReactNode;
  /** Optional page-specific 2-sentence summary for AI/bot optimization block */
  aiSummary?: string;
}

const Layout = ({ children, aiSummary }: LayoutProps) => (
  <div className="min-h-screen flex flex-col">
    <Header />
    <main className="flex-1">{children}</main>
    <TechSummaryBlock summary={aiSummary} />
    <Footer />
    <MobileStickyBar />
    <WhatsAppButton />
    <BackToTop />
    <LeadCaptureModal />
  </div>
);

export default Layout;
