import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import BlogPostLayout, {
  Blockquote, Stat, ActionItem, GoodBad, SectionH2, InlineImage
} from "@/components/BlogPostLayout";

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nexttabagency.com/blog/why-your-website-needs-seo" },
  "headline": "Is Your Business Invisible? 5 Reasons Why Your Website Needs SEO in 2025",
  "description": "Having a website without SEO is like printing 5,000 business cards and keeping them in your desk drawer. Find out why SEO is non-negotiable for small businesses.",
  "image": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074",
  "author": { "@type": "Organization", "name": "Next Tab Agency" },
  "publisher": {
    "@type": "Organization", "name": "Next Tab Agency",
    "logo": { "@type": "ImageObject", "url": "https://nexttabagency.com/logo.png" }
  },
  "datePublished": "2025-05-10"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Why does my small business need SEO?", "acceptedAnswer": { "@type": "Answer", "text": "75% of users never scroll past page 1 of Google. Without SEO, you are effectively invisible to anyone searching for your service online." } },
    { "@type": "Question", "name": "How long does SEO take to work?", "acceptedAnswer": { "@type": "Answer", "text": "Most small businesses start seeing meaningful results within 3–6 months of consistent SEO work. It is a long-term investment, not a quick fix." } },
    { "@type": "Question", "name": "Is SEO expensive for small businesses?", "acceptedAnswer": { "@type": "Answer", "text": "SEO is one of the highest ROI marketing channels available. Unlike paid ads, the traffic you earn through SEO is free and compound over time." } }
  ]
};

const WhyYourWebsiteNeedsSeo = () => (
  <>
    <Helmet>
      <title>Is Your Business Invisible? 5 Reasons Why Your Website Needs SEO | Next Tab Agency</title>
      <meta name="description" content="Having a website without SEO is like printing 5,000 business cards and keeping them in your desk drawer. Find out why SEO is non-negotiable for small businesses." />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>

    <BlogPostLayout
      title="Is Your Business Invisible? 5 Reasons Why Your Website Needs SEO in 2025"
      subtitle="Having a website without SEO is like printing 5,000 business cards and keeping them in your desk drawer. Here's what you're missing."
      date="May 10, 2025"
      readTime="6 min read"
      category="SEO Strategy"
      heroImage="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop"
      heroImageAlt="Small business owner looking at laptop with SEO strategy"
      schema={schema}
      ctaHeading="Get a Free Visibility Report"
      ctaSub="Find out exactly where you stand on Google today — no cost, no obligation."
      ctaBtn="Get My Free Visibility Report →"
    >
      <p className="mb-6 text-xl font-semibold leading-relaxed text-foreground">
        Imagine printing 5,000 business cards, then locking them all in your desk drawer. No one sees them. No calls. No customers.
      </p>
      <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
        That's exactly what a website without SEO does. It exists, but nobody can find it. And if nobody can find it, it cannot make you money.
      </p>

      <div className="grid grid-cols-1 gap-4 my-10 sm:grid-cols-3">
        <Stat value="75%" label="of users never scroll past page 1 of Google" source="HubSpot, 2024" />
        <Stat value="93%" label="of online experiences begin with a search engine" source="Search Engine Journal" />
        <Stat value="3.5B+" label="Google searches happen every single day" source="Internet Live Stats" />
      </div>

      <Blockquote
        quote="SEO is not about tricking Google. It's about partnering with Google to provide the best search result for the user."
        author="Phil Frost, Main Street ROI"
      />

      <SectionH2>Reason 1: Your Competitors on Page 1 Are Taking Your Clients</SectionH2>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        Think about this specific scenario. You are a <strong className="text-foreground">Lawyer in Brisbane</strong>. Your firm is genuinely excellent. But you are sitting on page 2 of Google.
      </p>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        Your competitor — who is on Page 1 — is receiving approximately <strong className="text-foreground">90% of all the clicks</strong> for that search term. Every single day. That's not a small gap; that is the difference between a thriving practice and an empty waiting room.
      </p>

      <GoodBad
        bad='"Lawyer in Brisbane" — Page 2. Result: You receive roughly 1–2% of all clicks for this term.'
        good='"Family Lawyer Brisbane Divorce Specialist" — Page 1. Result: You own this niche and capture clients who are ready to hire immediately.'
        badLabel="📍 Ranking on Page 2"
        goodLabel="🏆 Ranking on Page 1"
      />

      <SectionH2>Reason 2: Search Is Where Buying Decisions Are Made</SectionH2>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        People don't search Google to browse for fun. When someone types "emergency plumber near me" at 11pm, <strong className="text-foreground">they are ready to pay</strong>. That is intent-driven traffic — worth 10x more than a social media ad that interrupts someone's scrolling.
      </p>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        Our <Link to="/services/seo-audits" className="font-semibold text-accent hover:underline">SEO strategy</Link> is specifically designed to put your business in front of people at exactly this moment.
      </p>

      <InlineImage
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop"
        alt="Team reviewing SEO analytics and search rankings on a monitor"
      />

      <SectionH2>Reason 3: Your Website Is a 24/7 Salesperson — If It Ranks</SectionH2>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        A salesperson sleeps. Your website doesn't. Once a page ranks on Google, it generates enquiries around the clock — on weekends, on public holidays, even at 3am. <strong className="text-foreground">SEO is the only marketing channel that pays you back while you sleep.</strong>
      </p>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        Paid ads stop the moment you stop paying. SEO compounds — the work you do this month makes next month's rankings stronger.
      </p>

      <SectionH2>Reason 4: Your Website's Technical Health Is Invisible to You</SectionH2>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        You might have a beautiful website, but Google sees something completely different. Slow load times, broken links, missing meta tags, poorly structured headings — these are invisible to the human eye but completely visible to a search engine crawler.
      </p>
      <ActionItem>
        <p>Run a quick test right now: go to <strong>PageSpeed Insights</strong> (pagespeed.web.dev) and type in your URL. If your score is below 70 on mobile, you have a serious problem. Our <Link to="/services/seo-audits" className="font-semibold text-accent hover:underline">professional SEO audit</Link> finds every hidden issue.</p>
      </ActionItem>

      <SectionH2>Reason 5: If You Don't Do SEO, Your Competitors Will</SectionH2>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        SEO is not optional anymore. Your competitors are already investing in it. Every month you wait is another month they move further up the page and take clients that should have been yours.
      </p>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        The good news? It is never too late to start. And with a proper <Link to="/services/local-seo" className="font-semibold text-accent hover:underline">Local SEO strategy</Link>, small businesses can rank above large national chains because Google rewards relevance and proximity.
      </p>

      <div className="p-8 my-12 text-center border bg-muted/40 rounded-2xl border-border/50">
        <h3 className="mb-3 text-2xl font-bold font-heading text-foreground">Ready to stop being invisible?</h3>
        <p className="mb-5 text-muted-foreground">We'll analyse your site and show you exactly what needs to fix — completely free.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 font-bold rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
          Get My Free Visibility Report →
        </Link>
      </div>

      {/* FAQ Section */}
      <SectionH2>Frequently Asked Questions</SectionH2>
      <div className="space-y-4">
        {[
          { q: "Why does my small business need SEO?", a: "75% of users never scroll past page 1 of Google. Without SEO, you are effectively invisible to anyone searching for your service online." },
          { q: "How long does SEO take to work?", a: "Most small businesses start seeing meaningful results within 3–6 months of consistent SEO work. It is a long-term investment that compounds over time." },
          { q: "Is SEO expensive for small businesses?", a: "SEO is one of the highest ROI marketing channels available. Unlike paid ads, the traffic you earn through SEO is free and grows every month." }
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

export default WhyYourWebsiteNeedsSeo;
