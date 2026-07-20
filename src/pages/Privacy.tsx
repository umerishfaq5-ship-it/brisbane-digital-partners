import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const Privacy = () => (
  <Layout>
    <SEO
      title="Privacy Policy"
      description="Next Tab Agency's Privacy Policy — how we collect, use, and protect your personal information in accordance with the Australian Privacy Act 1988."
      canonical="/privacy/"
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Privacy Policy", url: "https://nexttabagency.com/privacy" },
      ]}
    />

    {/* Hero */}
    <section className="bg-primary pt-40 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 pattern-dots opacity-20" />
      <div className="container relative z-10 max-w-4xl">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold uppercase tracking-[0.15em] mb-6 border border-accent/20">
          Legal
        </span>
        <h1 className="font-heading font-black text-4xl md:text-5xl text-primary-foreground mb-4 leading-tight">
          Privacy Policy
        </h1>
        <p className="text-primary-foreground/60 text-lg max-w-xl">
          Last updated: 16 April 2026
        </p>
      </div>
    </section>

    {/* Content */}
    <section className="py-20 md:py-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container max-w-4xl"
      >
        <div className="prose prose-lg max-w-none text-foreground space-y-10">

          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">1. Introduction</h2>
            <p className="text-muted-foreground leading-relaxed">
              Next Tab Agency ("we", "our", "us") is committed to protecting your personal information and your right to privacy. This policy outlines how we collect, use, store, and protect your personal information in accordance with the <strong>Australian Privacy Act 1988 (Cth)</strong> and the Australian Privacy Principles (APPs).
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              We operate from Brisbane, Queensland, Australia and serve clients across Australia and internationally. By using our website or engaging our services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">2. What Information We Collect</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We may collect the following types of personal information:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Contact information:</strong> Your name, email address, phone number, and business name when you fill in our contact form or engage our services.</li>
              <li><strong>Project details:</strong> Information you provide about your business, goals, and requirements during project scoping.</li>
              <li><strong>Usage data:</strong> Anonymous analytics data about how you use our website (pages visited, time on site, browser type) via Google Analytics.</li>
              <li><strong>Communication records:</strong> Copies of email correspondence, meeting notes, and project-related communications.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">3. How We Use Your Information</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We use your personal information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Respond to your enquiries and provide the services you've requested</li>
              <li>Prepare project proposals, scopes of work, and service agreements</li>
              <li>Send you project updates and invoices relevant to your engagement</li>
              <li>Improve our website and services using anonymised usage analytics</li>
              <li>Comply with legal and regulatory obligations under Australian law</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              We do <strong>not</strong> sell, rent, or share your personal information with third parties for marketing purposes.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">4. Third-Party Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">We use the following third-party services that may process your data:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li><strong>Google Analytics 4:</strong> For anonymous website usage statistics. Data is stored by Google and governed by Google's Privacy Policy.</li>
              <li><strong>FormSubmit:</strong> To process contact form submissions securely.</li>
              <li><strong>Google Workspace:</strong> For email and document storage related to your project.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">5. Data Storage &amp; Security</h2>
            <p className="text-muted-foreground leading-relaxed">
              Your personal information is stored securely on Australian-based and cloud infrastructure. We implement industry-standard security measures including HTTPS encryption, access controls, and regular security reviews. We retain your information only for as long as necessary to provide services and meet our legal obligations under Australian law.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">6. Your Rights</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">Under the Australian Privacy Act 1988, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access the personal information we hold about you</li>
              <li>Request corrections to inaccurate or incomplete information</li>
              <li>Request deletion of your personal information (subject to legal retention requirements)</li>
              <li>Lodge a complaint with the Office of the Australian Information Commissioner (OAIC)</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              To exercise any of these rights, contact us at{" "}
              <a href="mailto:info@nexttabagency.com" className="text-accent hover:underline">
                info@nexttabagency.com
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">7. Cookies</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our website uses cookies for analytics purposes (Google Analytics). Cookies are small text files stored on your device. You can disable cookies in your browser settings, though this may affect some website functionality.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">8. Contact &amp; Complaints</h2>
            <p className="text-muted-foreground leading-relaxed">
              If you have any questions about this Privacy Policy or believe we have not complied with our obligations, please contact us:
            </p>
            <address className="not-italic mt-4 space-y-1 text-muted-foreground">
              <p><strong>Next Tab Agency</strong></p>
              <p>Taylor Street, Eagleby, QLD 4207, Brisbane, Australia</p>
              <p>Email: <a href="mailto:info@nexttabagency.com" className="text-accent hover:underline">info@nexttabagency.com</a></p>
              <p>Phone: <a href="tel:+61491000094" className="text-accent hover:underline">0491 000 094</a></p>
            </address>
            <p className="text-muted-foreground leading-relaxed mt-4">
              You may also contact the Office of the Australian Information Commissioner (OAIC) at{" "}
              <a href="https://www.oaic.gov.au" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">
                www.oaic.gov.au
              </a>{" "}
              or call 1300 363 992.
            </p>
          </div>

          <div className="pt-6 border-t border-border">
            <Link to="/contact" className="inline-flex items-center gap-2 text-accent font-semibold hover:underline">
              ← Back to Contact
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  </Layout>
);

export default Privacy;
