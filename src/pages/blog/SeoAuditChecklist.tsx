import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import BlogPostLayout, {
  Blockquote, Stat, ActionItem, ChecklistItem, SectionH2, InlineImage
} from "@/components/BlogPostLayout";

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nexttabagency.com/blog/seo-audit-checklist" },
  "headline": "The 10-Point SEO Audit: Why Your Website Isn't Ranking on Page 1",
  "description": "You have a beautiful website, but zero traffic. It's like owning a Ferrari with no engine. Here is a 10-point checklist to diagnose every hidden SEO problem costing you rankings.",
  "image": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070",
  "author": { "@type": "Organization", "name": "Next Tab Agency" },
  "publisher": {
    "@type": "Organization", "name": "Next Tab Agency",
    "logo": { "@type": "ImageObject", "url": "https://nexttabagency.com/logo.png" }
  },
  "datePublished": "2025-05-24"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How often should I do an SEO audit?", "acceptedAnswer": { "@type": "Answer", "text": "A comprehensive SEO audit should be done at least once every 6 months, or after any major website changes, Google algorithm updates, or if you notice a sudden drop in traffic." } },
    { "@type": "Question", "name": "What does a page load speed audit involve?", "acceptedAnswer": { "@type": "Answer", "text": "A speed audit checks your Core Web Vitals (LCP, CLS, FID), image sizes, server response time, and JavaScript bloat. Google uses Core Web Vitals as an official ranking factor." } },
    { "@type": "Question", "name": "Can I do an SEO audit myself?", "acceptedAnswer": { "@type": "Answer", "text": "You can run basic checks yourself using free tools like Google Search Console, PageSpeed Insights, and Screaming Frog. However, a professional audit finds issues that free tools miss and provides a prioritised action plan." } }
  ]
};

const auditItems = [
  {
    n: "01", label: "Site Speed", icon: "⚡",
    desc: "Does your site load in under 3 seconds? A 1-second delay causes a 7% drop in conversions. Google also uses Core Web Vitals as a direct ranking factor.",
    tool: "Test at: PageSpeed Insights (pagespeed.web.dev)"
  },
  {
    n: "02", label: "Mobile Friendliness", icon: "📱",
    desc: "Over 60% of all Google searches happen on mobile. Google's index is now 'mobile-first' — meaning your mobile site is the version it uses for ranking.",
    tool: "Test at: search.google.com/test/mobile-friendly"
  },
  {
    n: "03", label: "Broken Links (404 Errors)", icon: "🔗",
    desc: "Broken links waste Google's 'crawl budget' and destroy user experience. Every '404 Not Found' page is a dead end that tells Google your site is poorly maintained.",
    tool: "Test at: Screaming Frog SEO Spider (free up to 500 URLs)"
  },
  {
    n: "04", label: "Missing Title Tags & Meta Descriptions", icon: "🏷️",
    desc: "Every single page needs a unique title tag and meta description. These are what Google displays in search results — they directly affect your click-through rate.",
    tool: "Check in: Google Search Console → Coverage"
  },
  {
    n: "05", label: "Duplicate Content", icon: "📄",
    desc: "If two pages on your site cover the same topic, Google gets confused about which one to rank. This splits your authority and weakens both pages.",
    tool: "Check for: Similar titles, copied category descriptions, product page duplication"
  },
  {
    n: "06", label: "HTTPS / SSL Certificate", icon: "🔒",
    desc: "If your website still shows 'http://' instead of 'https://', Google will mark it as 'Not Secure.' This destroys trust and is a confirmed negative ranking factor.",
    tool: "Check: Look for the padlock icon in your browser's address bar"
  },
  {
    n: "07", label: "Image Optimisation", icon: "🖼️",
    desc: "Uncompressed images are the #1 cause of slow websites. Every image must have a descriptive alt-text (for Google Image Search) and be compressed to under 200KB.",
    tool: "Compress at: Squoosh.app"
  },
  {
    n: "08", label: "Keyword Cannibalisation", icon: "🎯",
    desc: "Are multiple pages targeting the same keyword? They are competing against each other, which means neither ranks as well as one focused, authoritative page would.",
    tool: "Check by: Searching site:yourdomain.com '[keyword]' in Google"
  },
  {
    n: "09", label: "XML Sitemap & Robots.txt", icon: "🗺️",
    desc: "Your XML sitemap tells Google which pages to index. Your robots.txt tells it which to ignore. If these are misconfigured, you may have important pages invisible to Google.",
    tool: "Check at: yourdomain.com/sitemap.xml and yourdomain.com/robots.txt"
  },
  {
    n: "10", label: "Backlink Profile Quality", icon: "🏛️",
    desc: "Toxic backlinks from spammy websites can trigger a Google penalty. Your backlink profile should be checked regularly to disavow harmful links before they hurt your rankings.",
    tool: "Check at: Google Search Console → Links"
  },
];

const SeoAuditChecklist = () => (
  <>
    <Helmet>
      <title>The 10-Point SEO Audit: Why Your Website Isn't Ranking on Page 1 | Next Tab Agency</title>
      <meta name="description" content="You have a beautiful website, but zero traffic. It's like owning a Ferrari with no engine. Here is a 10-point checklist to find every hidden SEO problem costing you rankings." />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>

    <BlogPostLayout
      title="The 10-Point SEO Audit: Why Your Website Isn't Ranking on Page 1"
      subtitle="You have a beautiful website, but zero traffic. It's like owning a Ferrari with no engine. This checklist diagnoses exactly what's broken."
      date="May 24, 2025"
      readTime="8 min read"
      category="SEO Audit"
      heroImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
      heroImageAlt="Developer running an SEO audit on a laptop with analytics data visible"
      schema={schema}
      ctaHeading="Stop Guessing. Get a Professional Audit Today."
      ctaSub="Our expert team will run a full technical audit and give you a clear, prioritised action plan — no jargon, just results."
      ctaBtn="Book My Professional SEO Audit →"
    >
      <p className="mb-6 text-xl font-semibold leading-relaxed text-foreground">
        You spent thousands on a beautiful website. The design is stunning. The copy is perfect. And yet... Google refuses to rank it.
      </p>
      <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
        This is one of the most frustrating situations in business. The problem is almost always invisible — technical issues buried inside your code that Google's robots see but human eyes never would. This is exactly what an SEO audit is designed to find.
      </p>

      <div className="grid grid-cols-1 gap-4 my-10 sm:grid-cols-3">
        <Stat value="7%" label="reduction in conversions for every 1-second page load delay" source="Aberdeen Group" />
        <Stat value="53%" label="of mobile users abandon a site that takes 3+ seconds to load" source="Google Research" />
        <Stat value="61%" label="of marketers say improving SEO is their top inbound priority" source="HubSpot" />
      </div>

      <Blockquote
        quote="The best place to hide a dead body is page two of Google search results."
        author="Classic SEO Industry Proverb"
      />

      <SectionH2>The 10-Point SEO Audit Checklist</SectionH2>
      <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
        Work through each of these 10 areas. If you tick every box, your technical SEO is solid. If you don't, each unchecked item is a ranking opportunity you are leaving on the table. Need a professional to do this for you? <Link to="/services/seo-audits" className="font-semibold text-accent hover:underline">Book a professional SEO audit</Link> and we'll handle everything.
      </p>

      <div className="space-y-4 my-8">
        {auditItems.map((item) => (
          <div key={item.n} className="p-6 border rounded-2xl bg-card border-border/60 group hover:border-accent/40 transition-colors">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent text-lg">
                {item.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold tracking-widest text-accent/60 uppercase">#{item.n}</span>
                  <h3 className="text-lg font-bold text-foreground">{item.label}</h3>
                </div>
                <p className="mb-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                <span className="inline-block px-3 py-1 text-xs font-mono rounded-md bg-muted text-muted-foreground">{item.tool}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <InlineImage
        src="https://images.unsplash.com/photo-1518186285589-2f7649de83e0?q=80&w=2074&auto=format&fit=crop"
        alt="SEO audit results showing ranking improvements on a computer screen"
      />

      <SectionH2>Quick Self-Assessment: How Does Your Site Score?</SectionH2>
      <div className="p-6 my-8 border border-border/60 rounded-2xl bg-card">
        <p className="mb-4 text-sm font-semibold text-foreground">Count how many of these you can answer YES to:</p>
        <ul className="divide-y divide-border/40">
          <ChecklistItem>My website loads in under 3 seconds on mobile</ChecklistItem>
          <ChecklistItem>Every page has a unique title tag and meta description</ChecklistItem>
          <ChecklistItem>My website is secured with HTTPS (has a padlock icon)</ChecklistItem>
          <ChecklistItem>I have no broken links or 404 error pages</ChecklistItem>
          <ChecklistItem>All my images have descriptive alt-text</ChecklistItem>
          <ChecklistItem>I can see my site in Google Search Console</ChecklistItem>
          <ChecklistItem>My XML sitemap is submitted to Google</ChecklistItem>
        </ul>
        <div className="mt-5 p-4 rounded-xl bg-accent/5 border border-accent/20 text-sm text-muted-foreground">
          <strong className="text-foreground">Score 0–4?</strong> Your website has critical SEO issues. <Link to="/services/seo-audits" className="font-semibold text-accent hover:underline">Book an audit now</Link> before you lose more ground to competitors.
        </div>
      </div>

      {/* FAQ */}
      <SectionH2>Frequently Asked Questions</SectionH2>
      <div className="space-y-4">
        {[
          { q: "How often should I do an SEO audit?", a: "At least every 6 months, or after any major website update or if you notice a sudden traffic drop." },
          { q: "What does a page speed audit involve?", a: "A speed audit checks your Core Web Vitals (LCP, CLS, FID), image sizes, server response times, and JavaScript bloat — all of which are official Google ranking factors." },
          { q: "Can I do an SEO audit myself?", a: "Basic checks are possible with free tools like Google Search Console and PageSpeed Insights. But a professional audit finds the deeper issues and gives you a prioritised fix list." }
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

export default SeoAuditChecklist;
