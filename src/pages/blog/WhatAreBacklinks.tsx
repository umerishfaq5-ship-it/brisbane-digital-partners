import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import BlogPostLayout, {
  Blockquote, Stat, ActionItem, SectionH2, GoodBad, InlineImage
} from "@/components/BlogPostLayout";

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nexttabagency.com/blog/what-are-backlinks" },
  "headline": "What Are Backlinks? Think of Them as Digital 'Votes of Confidence'",
  "description": "Why do some websites rank higher with less content? It comes down to Authority. Learn why backlinks are the 'doctor recommendations' of the internet, and how to earn the right ones.",
  "image": "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2074",
  "author": { "@type": "Organization", "name": "Next Tab Agency" },
  "publisher": {
    "@type": "Organization", "name": "Next Tab Agency",
    "logo": { "@type": "ImageObject", "url": "https://nexttabagency.com/logo.png" }
  },
  "datePublished": "2025-05-31"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is a backlink?", "acceptedAnswer": { "@type": "Answer", "text": "A backlink is a link from another website pointing to yours. Google treats each backlink as a 'vote of confidence,' with links from high-authority sites counting as much stronger votes." } },
    { "@type": "Question", "name": "How many backlinks do I need to rank?", "acceptedAnswer": { "@type": "Answer", "text": "There is no magic number. 10 high-quality backlinks from reputable, relevant websites will outperform 1,000 links from low-quality directories. Quality is everything." } },
    { "@type": "Question", "name": "Are all backlinks good?", "acceptedAnswer": { "@type": "Answer", "text": "No. Backlinks from spammy, irrelevant, or penalised websites can actively hurt your rankings. These are called 'toxic backlinks' and they can trigger a Google manual penalty." } }
  ]
};

const WhatAreBacklinks = () => (
  <>
    <Helmet>
      <title>What Are Backlinks? Think of Them as Digital 'Votes of Confidence' | Next Tab Agency</title>
      <meta name="description" content="Why do some websites rank higher with less content? It comes down to Authority. Learn why backlinks are the 'doctor recommendations' of the internet, and how to earn the right ones." />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>

    <BlogPostLayout
      title="What Are Backlinks? Think of Them as Digital 'Votes of Confidence'"
      subtitle="Why do some websites rank higher with less content? It's all about Authority — and backlinks are how you earn it."
      date="May 31, 2025"
      readTime="7 min read"
      category="Authority Building"
      heroImage="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=2074&auto=format&fit=crop"
      heroImageAlt="Network of connected websites representing backlinks and digital authority"
      schema={schema}
      ctaHeading="Ready to Build Your Digital Authority?"
      ctaSub="Our link building strategies earn you high-quality backlinks from authoritative Australian sources. Let's talk about building your rankings for good."
      ctaBtn="Let's Build My Authority →"
    >
      <p className="mb-6 text-xl font-semibold leading-relaxed text-foreground">
        Have you ever wondered why a competitor with a simpler website — and less content than you — still outranks you on Google? It's almost certainly down to one thing: <strong>Authority</strong>.
      </p>
      <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
        And the currency of authority online is <strong className="text-foreground">backlinks</strong>. This guide will explain exactly what they are, why they matter, and how to get the right ones without getting penalised by Google.
      </p>

      <div className="grid grid-cols-1 gap-4 my-10 sm:grid-cols-3">
        <Stat value="#1" label="factor in Google's ranking algorithm for 10+ years" source="Moz Search Ranking Factors" />
        <Stat value="3.8x" label="more likely to rank on page 1 with strong backlink profiles" source="Backlinko Study, 1M+ searches" />
        <Stat value="91%" label="of all web pages get zero organic traffic — mainly due to no backlinks" source="Ahrefs Content Study" />
      </div>

      <Blockquote
        quote="A link from a relevant, high-authority website is like a recommendation from a trusted expert. Google counts every vote, but some votes count infinitely more than others."
        author="Brian Dean, Founder of Backlinko"
      />

      <SectionH2>The Doctor Analogy: Why Quality Beats Quantity</SectionH2>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        Imagine you need a specific medication. <strong className="text-foreground">10 qualified doctors</strong> all independently recommend the same drug. You trust it completely. Now imagine <strong className="text-foreground">10 random strangers on the street</strong> recommend the same thing. You'd be skeptical, right?
      </p>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        Backlinks work exactly the same way. A single link from a major news site like <strong className="text-foreground">Forbes, The Guardian, or the ABC</strong> is worth more than 1,000 links from unknown "spammy" directories. Google is incredibly sophisticated at judging the quality of a link's source.
      </p>

      <div className="p-6 my-8 border rounded-2xl bg-card border-border/60">
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { label: "Forbes.com", da: "94/100", icon: "🏆", quality: "Premium" },
            { label: "SmallBizBlog.net", da: "28/100", icon: "⚠️", quality: "Low Value" },
            { label: "SpamLinks.xyz", da: "4/100", icon: "🚫", quality: "Dangerous" },
          ].map(link => (
            <div key={link.label} className="p-4 text-center border rounded-xl border-border/40 bg-muted/30">
              <span className="text-3xl mb-2 block">{link.icon}</span>
              <p className="font-bold text-sm text-foreground">{link.label}</p>
              <p className="text-xs text-muted-foreground mb-1">Domain Authority: {link.da}</p>
              <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${link.quality === "Premium" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400" : link.quality === "Low Value" ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"}`}>{link.quality}</span>
            </div>
          ))}
        </div>
      </div>

      <SectionH2>The 3 Types of Backlinks (and Which Ones to Chase)</SectionH2>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">Not all backlinks are created equal. Here's how they break down:</p>

      <GoodBad
        bad="Buying 500 backlinks from a directory site for $20. This will trigger a Google Spam penalty and can de-index your entire website. It's the SEO equivalent of playing Russian roulette with your business."
        good="Getting featured in a local news article, writing a guest post for an industry blog, or being listed as a resource on a relevant .edu or .gov website. These send real authority signals to Google."
        badLabel="🚫 Black Hat Links (Avoid)"
        goodLabel="✅ White Hat Links (Chase These)"
      />

      <InlineImage
        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2074&auto=format&fit=crop"
        alt="Business development team building online authority and partnerships"
      />

      <SectionH2>5 Legitimate Ways to Earn Backlinks for Your Small Business</SectionH2>
      <div className="space-y-4 my-8">
        {[
          { icon: "📰", title: "Get featured in local news or industry publications", desc: "Reach out to local journalists covering your sector. A quote in a local news story earns a high-authority local backlink." },
          { icon: "🤝", title: "Partner with complementary local businesses", desc: "A plumber and an electrician in the same area can link to each other's sites. These are highly relevant, local backlinks that Google rewards." },
          { icon: "📖", title: "Write genuinely useful content", desc: "Create a guide, tool, or resource that other websites naturally want to link to. This is called 'linkable asset' creation." },
          { icon: "🏆", title: "Win local business awards", desc: "Award directories and local business associations often link back to winners — high-quality, trusted sources." },
          { icon: "✍️", title: "Guest post on industry blogs", desc: "Contribute valuable articles to respected industry websites. Most allow a link back to your site in the author bio." },
        ].map(item => (
          <div key={item.title} className="flex gap-4 p-5 border rounded-2xl bg-card border-border/60 hover:border-accent/40 transition-colors">
            <span className="text-2xl flex-shrink-0 mt-1">{item.icon}</span>
            <div>
              <h4 className="mb-1 font-bold text-foreground">{item.title}</h4>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <ActionItem>
        <p>
          Search Google for <strong>"[your city] business directory"</strong> and submit your business to the top 10 free, reputable local directories. This is the fastest legitimate way to start building your backlink profile. For a comprehensive strategy, check out our <Link to="/services/seo-audits" className="font-semibold text-accent hover:underline">SEO Strategy service</Link> — we build your authority plan from the ground up.
        </p>
      </ActionItem>

      {/* FAQ */}
      <SectionH2>Frequently Asked Questions</SectionH2>
      <div className="space-y-4">
        {[
          { q: "What is a backlink?", a: "A backlink is a link from another website pointing to yours. Google treats each backlink as a 'vote of confidence,' with links from high-authority sites counting as much stronger votes." },
          { q: "How many backlinks do I need to rank?", a: "There is no magic number. 10 high-quality backlinks from reputable, relevant websites will outperform 1,000 links from low-quality directories." },
          { q: "Are all backlinks good?", a: "No. Backlinks from spammy or penalised websites can actively hurt your rankings. These are called 'toxic backlinks' and can trigger a Google manual penalty." }
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

export default WhatAreBacklinks;
