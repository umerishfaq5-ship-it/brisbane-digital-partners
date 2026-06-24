import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import BlogPostLayout, {
  Blockquote, Stat, ActionItem, GoodBad, StepBadge, SectionH2, InlineImage
} from "@/components/BlogPostLayout";

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nexttabagency.com/blog/seo-for-small-business-zero-time" },
  "headline": "SEO for Small Business Owners: Where to Start When You Have Zero Time",
  "description": "Busy running your business? Here is the 'Minimum Viable SEO' plan for small business owners to rank on Google without wasting 40 hours a week.",
  "image": "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070",
  "author": { "@type": "Organization", "name": "Next Tab Agency" },
  "publisher": {
    "@type": "Organization", "name": "Next Tab Agency",
    "logo": { "@type": "ImageObject", "url": "https://nexttabagency.com/logo.png" }
  },
  "datePublished": "2025-06-07"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "What is a Money Keyword?", "acceptedAnswer": { "@type": "Answer", "text": "A Money Keyword is a search phrase with strong commercial intent — meaning the person searching it is actively looking to hire or buy. Examples: 'Emergency Plumber Brisbane' or 'Divorce Lawyer Melbourne.' These are worth far more than broad, generic terms." } },
    { "@type": "Question", "name": "How long does the Minimum Viable SEO Plan take per week?", "acceptedAnswer": { "@type": "Answer", "text": "Following this plan requires roughly 1–2 hours per week. One blog post per month (approx 1 hour), plus 20 minutes per week asking happy customers for reviews and checking your Google Business Profile." } },
    { "@type": "Question", "name": "When will I see results from this plan?", "acceptedAnswer": { "@type": "Answer", "text": "Most small businesses following this plan start seeing an uptick in Google Search Console impressions within 4–8 weeks, and meaningful phone call increases within 3–6 months." } }
  ]
};

const SeoForSmallBusiness = () => (
  <>
    <Helmet>
      <title>SEO for Small Business Owners: Where to Start When You Have Zero Time | Next Tab Agency</title>
      <meta name="description" content="Busy running your business? Here is the 'Minimum Viable SEO' plan for small business owners to rank on Google without wasting 40 hours a week." />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>

    <BlogPostLayout
      title="SEO for Small Business Owners: Where to Start When You Have Zero Time"
      subtitle="You run a business. You don't have time to become an SEO expert. Here is the 'Minimum Viable SEO' plan — the 20% that delivers 80% of the results."
      date="June 7, 2025"
      readTime="6 min read"
      category="SEO Tips"
      heroImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
      heroImageAlt="Small business owner looking at a laptop with a growth graph — SEO strategy for small businesses"
      schema={schema}
      ctaHeading="I Don't Even Have Time for These 4 Steps!"
      ctaSub="We get it. You run the business; we'll run the Google rankings. Book a free 15-minute strategy call with Next Tab Agency."
      ctaBtn="Book My Free Consultation →"
    >

      <p className="mb-6 text-xl font-semibold leading-relaxed text-foreground">
        You run a plumbing business, a law firm, a bakery, an accounting practice. You wear 15 hats every day. The last thing you want is to become an SEO expert on top of everything else.
      </p>
      <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
        The good news: you don't need to be. You just need to do the right 20% of things that deliver 80% of the results. This is the <strong className="text-foreground">Minimum Viable SEO Plan</strong> — built specifically for business owners who are short on time but can't afford to be invisible on Google.
      </p>

      <Blockquote
        quote="SEO is a marathon, not a sprint. But you can't even start the race if your shoes aren't tied."
        author="Neil Patel, Co-Founder of NP Digital"
      />

      <div className="grid grid-cols-1 gap-4 my-10 sm:grid-cols-3">
        <Stat value="46%" label="of all Google searches seek local information" source="HubSpot" />
        <Stat value="98%" label="of consumers read online reviews before choosing a local business" source="BrightLocal 2024" />
        <Stat value="0%" label="of users go to Page 2 of Google for local services" source="Advanced Web Ranking" />
      </div>

      <SectionH2>The 4-Step Minimum Viable SEO Plan</SectionH2>
      <p className="mb-8 text-lg leading-relaxed text-muted-foreground">
        These four steps require no technical knowledge, no agency contract, and less than 2 hours per week. Do them consistently and you will see results.
      </p>

      {/* Step 1 */}
      <StepBadge n={1} title="Pick 3–5 'Money Keywords'" />
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        You don't need 100 keywords. You need 3 to 5 that indicate a customer is ready to hire or buy <strong className="text-foreground">right now</strong>. These are called <strong className="text-foreground">Money Keywords</strong> — because the person searching them has their credit card in their hand.
      </p>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        The formula is simple: <strong className="text-foreground">[Specific Service] + [Your City]</strong>. The more specific and local you get, the less competition you face and the more motivated the searcher is.
      </p>

      <GoodBad
        bad='"Construction" — You are competing with global companies spending millions on SEO. You have zero chance of ranking for this.'
        good='"Home Renovation Brisbane Southside" — You are competing with a handful of local tradies. A well-optimised website can rank here within months.'
        badLabel="❌ Too Broad — Unwinnable"
        goodLabel="✅ Money Keyword — Winnable"
      />

      <ActionItem>
        <p>Write down your top 5 Money Keywords right now using this template: <strong>[Your Exact Service] + [Your Suburb/City]</strong>. Make sure your homepage title tag includes your #1 Money Keyword. Not sure if you've got it right? Our <Link to="/services/seo-audits" className="font-semibold text-accent hover:underline">SEO Audit</Link> maps this out for you professionally.</p>
      </ActionItem>

      <InlineImage
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
        alt="Analysing SEO keyword data on a computer screen to find money keywords"
      />

      {/* Step 2 */}
      <StepBadge n={2} title="Optimise Your Digital Storefront" />
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        Your homepage is your digital shopfront window. If someone walks past a shop with a dirty window and no sign, they keep walking. The same applies online.
      </p>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        Three things need to be immediately visible and crystal clear on your homepage:
      </p>
      <div className="space-y-3 my-6">
        {[
          { icon: "🏷️", title: "Title Tag", desc: "The blue clickable text in Google results. Must include your #1 Money Keyword and your city." },
          { icon: "📝", title: "Meta Description", desc: "The grey text below the title in Google. Should clearly state what you do, where you do it, and include a call to action." },
          { icon: "📞", title: "Phone Number", desc: "Must be visible in the top right corner of your website on mobile — without any scrolling required." },
        ].map(item => (
          <div key={item.title} className="flex gap-4 p-4 rounded-xl bg-muted/50 border border-border/50">
            <span className="text-xl flex-shrink-0">{item.icon}</span>
            <div>
              <h4 className="font-bold text-sm text-foreground">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <ActionItem>
        <p>Grab your phone right now. Open your website. Can you see your phone number without scrolling? Is it immediately clear what you do and where? If you need a site built correctly from scratch, our <Link to="/services/web-development" className="font-semibold text-accent hover:underline">Web Development</Link> team builds sites engineered for SEO performance from day one.</p>
      </ActionItem>

      {/* Step 3 */}
      <StepBadge n={3} title="The 'One Post' Rule" />
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        Stop worrying about publishing 10 articles a month. Google would rather you publish one brilliant article than ten mediocre ones. AI-generated junk content is now actively flagged by Google's Helpful Content algorithm.
      </p>

      <Blockquote
        quote="The best place to hide a dead body is page two of Google search results."
        author="Classic SEO Industry Proverb"
      />

      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        <strong className="text-foreground">Your content strategy in one sentence:</strong> Once a month, write a 500–800 word article that answers the most common question your customers ask you on the phone. That's it. Consistently doing this builds topical authority and attracts organic traffic.
      </p>
      <p className="mb-4 text-sm font-semibold text-foreground">Real examples of high-converting blog posts for small businesses:</p>
      <ul className="space-y-2 mb-6 text-sm text-muted-foreground">
        {[
          "Plumber: 'How Much Does It Cost to Replace a Hot Water System in Brisbane?'",
          "Accountant: 'What Business Expenses Can I Claim as a Sole Trader in Australia?'",
          "Lawyer: 'How Long Does a Divorce Take in Queensland? A Step-by-Step Guide'",
          "Bakery: '5 Custom Cake Options Under $150 for Brisbane Birthday Parties'",
        ].map(ex => (
          <li key={ex} className="flex items-start gap-2">
            <span className="text-accent font-bold mt-0.5">→</span>
            <span>{ex}</span>
          </li>
        ))}
      </ul>
      <ActionItem>
        <p>Write down the single most common question your customers ask you this week. That is your next blog post. Publish it before the month is out.</p>
      </ActionItem>

      <InlineImage
        src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop"
        alt="Small business team reviewing content strategy and blog posts"
      />

      {/* Step 4 */}
      <StepBadge n={4} title="The Review Engine" />
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        Reviews are the single most powerful signal for <Link to="/services/local-seo" className="font-semibold text-accent hover:underline">Local SEO</Link>. They tell Google you are a real, trusted, active business. They tell potential customers the same thing.
      </p>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        According to BrightLocal's 2024 Consumer Review Survey, <strong className="text-foreground">98% of consumers read online reviews for local businesses</strong>, and <strong className="text-foreground">78% trust them as much as personal recommendations</strong> from friends and family.
      </p>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        The secret is <strong className="text-foreground">consistency</strong>. Getting 52 reviews over a year (one per week) is far better for rankings than getting 100 reviews in January and nothing else. Google rewards ongoing, fresh social proof.
      </p>
      <ActionItem>
        <p>After your next 5 happy customers leave your shop, call, or appointment — send them a direct link to leave a review on your <Link to="/services/google-business-profile" className="font-semibold text-accent hover:underline">Google Business Profile</Link>. Make it one tap. Remove every possible barrier. Then make this a habit, every single week.</p>
      </ActionItem>

      {/* FAQ */}
      <SectionH2>Frequently Asked Questions</SectionH2>
      <div className="space-y-4">
        {[
          { q: "What is a Money Keyword?", a: "A Money Keyword is a search phrase with strong commercial intent — meaning the person searching it is actively looking to hire or buy. Examples: 'Emergency Plumber Brisbane' or 'Divorce Lawyer Melbourne.'" },
          { q: "How long does the Minimum Viable SEO Plan take per week?", a: "Roughly 1–2 hours per week: one blog post per month (~1 hour), plus 20 minutes per week asking happy customers for reviews and checking your Google Business Profile." },
          { q: "When will I see results from this plan?", a: "Most small businesses see an uptick in Google Search Console impressions within 4–8 weeks, and meaningful phone call increases within 3–6 months." }
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

export default SeoForSmallBusiness;
