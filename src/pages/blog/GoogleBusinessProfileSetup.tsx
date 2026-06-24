import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import BlogPostLayout, {
  Blockquote, Stat, ActionItem, SectionH2, StepBadge, InlineImage
} from "@/components/BlogPostLayout";

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nexttabagency.com/blog/google-business-profile-setup" },
  "headline": "The 'Near Me' Secret: How to Set Up Your Google Business Profile Like a Pro",
  "description": "76% of people who do a local search visit a business within 24 hours. Learn how to set up your Google Business Profile to capture every single one of those customers.",
  "image": "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=2027",
  "author": { "@type": "Organization", "name": "Next Tab Agency" },
  "publisher": {
    "@type": "Organization", "name": "Next Tab Agency",
    "logo": { "@type": "ImageObject", "url": "https://nexttabagency.com/logo.png" }
  },
  "datePublished": "2025-05-17"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Is Google Business Profile free?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, creating and managing a Google Business Profile is completely free. It is one of the highest-ROI free tools available to local businesses." } },
    { "@type": "Question", "name": "How often should I post on my Google Business Profile?", "acceptedAnswer": { "@type": "Answer", "text": "Aim for at least one post per week. Regular posting signals to Google that your business is active, which can improve your ranking in the Map Pack." } },
    { "@type": "Question", "name": "What is NAP consistency?", "acceptedAnswer": { "@type": "Answer", "text": "NAP stands for Name, Address, Phone Number. Keeping these identical across every online listing (website, directories, social media) is critical for Local SEO." } }
  ]
};

const GoogleBusinessProfileSetup = () => (
  <>
    <Helmet>
      <title>The 'Near Me' Secret: Set Up Your Google Business Profile Like a Pro | Next Tab Agency</title>
      <meta name="description" content="76% of people who do a local search visit a business within 24 hours. Learn how to set up your Google Business Profile to capture every single one of those customers." />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>

    <BlogPostLayout
      title="The 'Near Me' Secret: How to Set Up Your Google Business Profile Like a Pro"
      subtitle="When a customer searches for 'best [your service] near me,' do you show up — or does your competitor down the street get the call?"
      date="May 17, 2025"
      readTime="7 min read"
      category="Local SEO"
      heroImage="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=2027&auto=format&fit=crop"
      heroImageAlt="Customer searching Google Maps on a smartphone for a local business"
      schema={schema}
      ctaHeading="Want Us to Optimise Your GBP For You?"
      ctaSub="We'll fully set up and optimise your Google Business Profile so you start showing up in the Map Pack. Book a free strategy call today."
      ctaBtn="Optimise My Google Profile →"
    >
      <p className="mb-6 text-xl font-semibold leading-relaxed text-foreground">
        Right now, a customer is searching Google for exactly what you sell. The only question is: will they find you, or your competitor?
      </p>
      <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
        The answer depends almost entirely on whether your <strong className="text-foreground">Google Business Profile (GBP)</strong> is set up correctly. This is the free tool that controls whether you appear in Google Maps, the "3-Pack" of local results, and "near me" searches.
      </p>

      <div className="grid grid-cols-1 gap-4 my-10 sm:grid-cols-3">
        <Stat value="76%" label="of local mobile searchers visit a business within 24 hours" source="Think with Google" />
        <Stat value="28%" label="of local searches result in a purchase" source="Google" />
        <Stat value="4x" label="more likely to be considered reputable with a complete GBP" source="Google Research" />
      </div>

      <Blockquote
        quote="Local SEO is the most cost-effective way to attract customers in your area. Your Google Business Profile is your single most powerful local SEO asset."
        author="Rand Fishkin, Founder of Moz"
      />

      <SectionH2>The Real-World Example: The Bakery That Found 40% More Customers</SectionH2>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        A local bakery in Melbourne was getting decent foot traffic — mostly regulars. They decided to properly set up their Google Business Profile, adding <strong className="text-foreground">high-quality photos of their daily specials</strong> every morning.
      </p>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        Within 90 days, their "Directions requests" from Google Maps increased by <strong className="text-foreground">40%</strong>. New customers were walking in saying "I saw your croissant on Google Maps and had to try it." That's the power of a fully optimised profile.
      </p>

      <InlineImage
        src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop"
        alt="Small business owner photographing products for their Google Business Profile"
      />

      <SectionH2>The 5-Step Setup Guide</SectionH2>
      <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
        Follow these steps in order. Do not skip ahead — each step builds on the last.
      </p>

      <StepBadge n={1} title="Claim and Verify Your Profile" />
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        Go to <strong className="text-foreground">business.google.com</strong> and search for your business. If it already exists (many do, created automatically by Google), claim it. If not, create it from scratch. Google will send a <strong className="text-foreground">postcard or call</strong> to your business address to verify you are the real owner.
      </p>
      <ActionItem>
        <p>Do this right now: search your business name on Google Maps. If a profile already exists but is "unclaimed," click on it and hit "Claim this business" before a competitor does it instead.</p>
      </ActionItem>

      <StepBadge n={2} title="Upload Real Photos — Not Stock Images" />
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        This is the single most impactful action you can take. Google data shows businesses with photos receive <strong className="text-foreground">42% more requests for directions</strong> and <strong className="text-foreground">35% more website clicks</strong>.
      </p>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        Upload real photos of: your premises, your team, your products/services in action, before-and-after results, and happy customers (with permission). Stock photos actively hurt your ranking — Google can detect them.
      </p>

      <StepBadge n={3} title="Standardise Your NAP (Name, Address, Phone)" />
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        NAP stands for Name, Address, Phone Number. Your NAP must be <strong className="text-foreground">100% identical</strong> everywhere it appears online — your website, your GBP, Yelp, Yellow Pages, Facebook, LinkedIn. Even a small inconsistency (e.g. "St" vs "Street") confuses Google and tanks your local ranking.
      </p>
      <ActionItem>
        <p>Search your business name on Google right now. Check that the name, address, and phone match your website exactly. Our <Link to="/services/local-seo" className="font-semibold text-accent hover:underline">Local SEO Management</Link> package includes a full NAP audit across 40+ directories.</p>
      </ActionItem>

      <StepBadge n={4} title="Write a Keyword-Rich Business Description" />
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        You get 750 characters for your business description. Use the first 250 wisely — that's what Google shows before the "read more" cut-off. Include your main service, your location, and what makes you different. Write it for a human, not a robot.
      </p>
      <p className="mb-3 text-sm font-semibold text-foreground">Example for a plumber:</p>
      <div className="p-5 border rounded-xl bg-card border-border/60 text-sm text-muted-foreground italic leading-relaxed">
        "Rapid Response Plumbing has served the Brisbane area since 2010. We specialise in emergency callouts, hot water systems, and blocked drains across Brisbane, Ipswich, and the Gold Coast. Available 24/7. No call-out fee before 6pm."
      </div>

      <StepBadge n={5} title="Collect and Respond to Reviews — Every Week" />
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        Reviews are a confirmed <Link to="/services/google-business-profile" className="font-semibold text-accent hover:underline">Google ranking factor</Link>. The quantity, quality, and recency of reviews all affect your Map Pack position. More importantly, <strong className="text-foreground">98% of consumers read reviews</strong> before choosing a local business.
      </p>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        Respond to every review — positive and negative. Google actively rewards businesses that engage with their customers.
      </p>

      <InlineImage
        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
        alt="Customer leaving a 5-star review on a smartphone for a local business"
      />

      {/* FAQ */}
      <SectionH2>Frequently Asked Questions</SectionH2>
      <div className="space-y-4">
        {[
          { q: "Is Google Business Profile free?", a: "Yes, creating and managing a Google Business Profile is completely free. It is one of the highest-ROI free tools available to local businesses." },
          { q: "How often should I post on my Google Business Profile?", a: "Aim for at least one post per week. Regular posting signals to Google that your business is active, which can improve your ranking in the Map Pack." },
          { q: "What is NAP consistency?", a: "NAP stands for Name, Address, Phone Number. Keeping these identical across every online listing is critical for Local SEO rankings." }
        ].map(({ q, a }) => (
          <details key={q} className="p-5 border cursor-pointer group border-border/60 rounded-xl bg-card">
            <summary className="flex items-center justify-between font-semibold list-none text-foreground">
              {q}
              <span className="ml-3 text-accent group-open:rotate-45 transition-transform duration-200 text-xl leading-none">+</span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a}</p>
          </details>
        ))}
      </div>

    </BlogPostLayout>
  </>
);

export default GoogleBusinessProfileSetup;
