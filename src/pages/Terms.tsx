import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";

const Terms = () => (
  <Layout>
    <SEO
      title="Terms of Service"
      description="Next Tab Agency's Terms of Service — the terms governing our digital agency services including SEO, web development, and mobile app development in Australia."
      canonical="/terms/"
      breadcrumbs={[
        { name: "Home", url: "https://nexttabagency.com/" },
        { name: "Terms of Service", url: "https://nexttabagency.com/terms" },
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
          Terms of Service
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
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">1. Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms of Service ("Terms") govern your use of Next Tab Agency's website and services. By accessing our website or engaging our services, you agree to be bound by these Terms. These Terms are governed by the laws of Queensland, Australia, and you consent to the jurisdiction of the courts of Queensland.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">2. Services</h2>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Next Tab Agency provides digital marketing and development services including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>SEO Audits &amp; Strategy</li>
              <li>Local SEO for Australian Businesses</li>
              <li>Mobile App Development (React Native)</li>
              <li>Custom Website Design &amp; Development</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed mt-3">
              The specific scope, deliverables, timeline, and pricing for each engagement are agreed in a separate Statement of Work (SOW) or Service Agreement provided before work commences.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">3. Payment Terms</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>All prices are in Australian Dollars (AUD) and inclusive of GST where applicable.</li>
              <li>Project work typically requires a deposit (50%) before work commences, with the balance due on completion.</li>
              <li>Monthly retainer invoices are issued at the start of each service month and are due within 14 days.</li>
              <li>Late payments may incur interest at the rate of 10% per annum as permitted under Queensland law.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">4. Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed">
              Upon receipt of full payment, all deliverables created specifically for you (website code, design assets, content) become your property. We retain the right to display completed work in our portfolio unless you request otherwise in writing. Pre-existing tools, frameworks, and methodologies remain the property of Next Tab Agency.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">5. Client Responsibilities</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide accurate and complete information required for the delivery of services.</li>
              <li>Provide timely feedback and approvals to avoid project delays.</li>
              <li>Ensure any third-party material provided to us does not infringe on any intellectual property rights.</li>
              <li>Maintain appropriate logins, credentials, and access permissions for platforms we require access to.</li>
            </ul>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">6. Limitation of Liability</h2>
            <p className="text-muted-foreground leading-relaxed">
              To the maximum extent permitted by Australian Consumer Law, Next Tab Agency's total liability for any claim arising from our services is limited to the fees paid for the specific service in the preceding 3 months. We are not liable for indirect, consequential, or incidental damages including lost profits or revenue.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">7. Australian Consumer Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nothing in these Terms limits any rights you have under the Australian Consumer Law (Schedule 2 of the Competition and Consumer Act 2010). Our services come with consumer guarantees that cannot be excluded. If a service fails to meet a consumer guarantee, you are entitled to a remedy under the Australian Consumer Law.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">8. SEO Disclaimer</h2>
            <p className="text-muted-foreground leading-relaxed">
              While we apply best practices and deep expertise to all SEO engagements, search engine rankings are determined by third-party algorithms (Google, Bing) that we do not control. We do not guarantee specific ranking positions. We do guarantee thorough, ethical work conducted in accordance with Google's Webmaster Guidelines.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">9. Termination</h2>
            <p className="text-muted-foreground leading-relaxed">
              Either party may terminate a monthly retainer with 30 days' written notice. Project engagements may be terminated with written notice, in which case payment is due for all work completed to date. We reserve the right to terminate services immediately if a client engages in conduct we reasonably consider unethical or unlawful.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground leading-relaxed">
              These Terms are governed by the laws of Queensland, Australia. Any disputes are subject to the exclusive jurisdiction of the courts of Queensland.
            </p>
          </div>

          <div>
            <h2 className="font-heading font-bold text-2xl text-foreground mb-4">11. Contact</h2>
            <address className="not-italic text-muted-foreground space-y-1">
              <p><strong>Next Tab Agency</strong></p>
              <p>Taylor Street, Eagleby, QLD 4207, Brisbane, Australia</p>
              <p>Email: <a href="mailto:info@nexttabagency.com" className="text-accent hover:underline">info@nexttabagency.com</a></p>
              <p>Phone: <a href="tel:+61491000094" className="text-accent hover:underline">0491 000 094</a></p>
            </address>
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

export default Terms;
