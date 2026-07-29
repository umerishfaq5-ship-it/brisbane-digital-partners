import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import BlogPostLayout, {
  Stat, Blockquote, ActionItem, SectionH2, ChecklistItem
} from "@/components/BlogPostLayout";

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nexttabagency.com/blog/choose-digital-marketing-agency-brisbane" },
  "headline": "How to Choose a Digital Marketing Agency in Brisbane: 10 Questions That Separate the Good From the Dodgy",
  "description": "Most Brisbane businesses hire the wrong agency and waste 6-12 months finding out. Here's exactly how to vet a Brisbane digital agency before signing anything.",
  "image": "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&fm=webp&fit=crop",
  "author": { "@type": "Organization", "name": "Next Tab Agency" },
  "publisher": {
    "@type": "Organization", "name": "Next Tab Agency",
    "logo": { "@type": "ImageObject", "url": "https://nexttabagency.com/logo.png" }
  },
  "datePublished": "2026-07-29",
  "dateModified": "2026-07-29"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How do I choose a digital marketing agency in Brisbane?", "acceptedAnswer": { "@type": "Answer", "text": "Look for a Brisbane agency with verifiable case studies from Australian clients, transparent pricing, no lock-in contracts, and a founder or senior person who will personally manage your account. Avoid agencies that guarantee rankings, outsource all work offshore, or can't explain their process in plain English." } },
    { "@type": "Question", "name": "How much should I pay a Brisbane digital marketing agency?", "acceptedAnswer": { "@type": "Answer", "text": "SEO retainers in Brisbane typically range from $1,200-$4,000/month depending on competitiveness. Google Ads management is usually $600-$2,000/month in management fees. Be wary of agencies charging under $800/month for SEO — at that price point, the work is almost certainly being done offshore with minimal strategy." } },
    { "@type": "Question", "name": "Should I use a local Brisbane agency or a national agency?", "acceptedAnswer": { "@type": "Answer", "text": "For most Brisbane businesses, a local agency is a significant advantage. They understand Brisbane search behaviour, local competitors, and the Queensland business environment. They're also accountable in person. A national agency managing hundreds of clients rarely gives a Brisbane SMB the same attention as a local boutique agency." } },
    { "@type": "Question", "name": "What are red flags when choosing a Brisbane SEO agency?", "acceptedAnswer": { "@type": "Answer", "text": "Red flags include: guaranteed ranking promises (no legitimate agency can guarantee Google positions), no examples of real Australian client results, lock-in contracts over 6 months, vague reporting that doesn't show actual keyword movement, and agencies that can't explain what they'll actually do each month." } }
  ]
};

const ChooseDigitalAgencyBrisbane = () => (
  <>
    <Helmet>
      <title>How to Choose a Digital Marketing Agency in Brisbane | Next Tab Agency</title>
      <meta name="description" content="Most Brisbane businesses hire the wrong agency and waste 6-12 months finding out. Here's exactly how to vet a Brisbane digital agency before signing anything." />
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>

    <BlogPostLayout
      title="How to Choose a Digital Marketing Agency in Brisbane: 10 Questions That Separate the Good From the Dodgy"
      subtitle="Most Brisbane businesses hire the wrong agency and waste 6-12 months finding out. Here's how to vet them properly before you sign anything."
      date="July 29, 2026"
      readTime="10 min read"
      category="Agency Selection"
      heroImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&fm=webp&fit=crop"
      heroImageAlt="Team meeting at a Brisbane digital marketing agency"
      schema={schema}
      ctaHeading="See How We're Different"
      ctaSub="We'll give you a free strategy session — no pitch decks, no fluff. Just honest advice about what would actually work for your business."
      ctaBtn="Book a Free Strategy Call with Next Tab Agency →"
    >
      <p className="mb-6 text-xl font-semibold leading-relaxed text-foreground">
        In Brisbane, there are hundreds of businesses calling themselves "digital marketing agencies." Some are brilliant. Many are mediocre. A few are outright bad. The problem is they all look the same on their websites.
      </p>

      <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
        We've spoken to hundreds of Brisbane business owners who've been burned by agencies that promised rankings, delivered nothing, locked them into 12-month contracts, and then disappeared. This guide gives you the exact questions to ask — and what the answers should (and shouldn't) sound like.
      </p>

      <div className="grid gap-6 mb-10 md:grid-cols-3">
        <Stat value="67%" label="of Brisbane SMBs have changed agencies at least once in 3 years" source="Digital Agency Association AU" />
        <Stat value="$14K" label="Average money wasted on the wrong agency before switching" source="Industry research" />
        <Stat value="9 months" label="Average time before a business realises their agency isn't performing" source="Marketing Week AU" />
      </div>

      <SectionH2>The 10 Questions to Ask Every Brisbane Agency</SectionH2>

      {[
        {
          n: "01",
          q: "Can you show me 3 Brisbane client case studies with actual keyword ranking data?",
          good: "They show you Google Search Console screenshots or ranking reports with real keyword movement for identifiable businesses (even anonymised). They can name the industry and explain the strategy.",
          bad: "They show you vague 'traffic increased by 200%' statements with no context, or only offshore/international case studies, or won't share any data at all.",
        },
        {
          n: "02",
          q: "Who will actually be working on my account day-to-day?",
          good: "They name a specific person — ideally a senior strategist or founder — who will manage your campaign. They explain how often you'll speak to that person directly.",
          bad: "'Our team' or 'our specialists' with no specific name. This usually means your account will be managed by a junior or offshore team with no one accountable.",
        },
        {
          n: "03",
          q: "What does your reporting look like and how often do I receive it?",
          good: "Monthly report with keyword position changes, organic traffic from Google Search Console, leads generated, and specific actions taken that month. They can tell you exactly which keywords moved and why.",
          bad: "A PDF with 'impressions went up' and 'we posted 12 times on social.' Vanity metrics with no connection to actual business outcomes.",
        },
        {
          n: "04",
          q: "Do you lock clients into long-term contracts?",
          good: "Month-to-month or 3-month minimum. SEO legitimately takes time to show results, but there's no reason for 12-month lock-ins. Confident agencies don't need them.",
          bad: "12-month minimum contract required upfront. This often protects the agency more than the client. If an agency insists on 12 months, ask why.",
        },
        {
          n: "05",
          q: "Can you guarantee my rankings on Google?",
          good: "No — and they should tell you that immediately. Google's algorithm is proprietary. Any agency that guarantees 'Page 1 in 30 days' is either lying or using black-hat tactics that will eventually get your site penalised.",
          bad: "Yes, we guarantee top 3 positions. Run. This is either dishonest or they're using tactics that violate Google's terms of service.",
        },
        {
          n: "06",
          q: "Where is your team based? Is any work outsourced offshore?",
          good: "Honest answer — either fully onshore in Brisbane/Australia, or transparent about which parts are handled offshore and by who. Strategy and account management should always be onshore.",
          bad: "Evasive answer. Some agencies present as Brisbane locals but have all content and technical work done in Pakistan or India for $5/hour, with an Australian face as the account manager.",
        },
        {
          n: "07",
          q: "What will you actually do in the first 90 days?",
          good: "Specific deliverables: technical audit, keyword research document, 5 pages optimised, 3 blog posts written, Google Business Profile updated, 4 backlinks acquired. Named actions with dates.",
          bad: "'We'll review your site and create a strategy.' This is too vague. If they can't tell you exactly what 90 days looks like before you sign, they're figuring it out as they go.",
        },
        {
          n: "08",
          q: "Do you manage Google Ads separately from SEO, and do you recommend both?",
          good: "They explain the strategic difference — Ads for immediate leads, SEO for long-term compounding growth. They recommend a combined approach where budget allows, but are honest about which to prioritise based on your situation.",
          bad: "They push all-in on Ads and dismiss SEO, or recommend SEO only and ignore paid. Any agency saying one channel is always better than the other doesn't understand digital strategy.",
        },
        {
          n: "09",
          q: "What happens to my website and content if I leave?",
          good: "You own everything — all website files, content, backlinks, Google accounts, Search Console data. They provide full handover with no restrictions.",
          bad: "Vague answer, or they mention keeping ownership of content or proprietary systems. You should own 100% of everything your budget paid for.",
        },
        {
          n: "10",
          q: "Can I speak to one of your current Brisbane clients as a reference?",
          good: "They give you a direct name and mobile number. The client confirms the agency communicates regularly, delivers on what they promised, and doesn't hide bad news.",
          bad: "They can only provide written testimonials, or the 'reference' is a generic Google review, or they're unwilling to put you directly in touch with a real client.",
        },
      ].map((item) => (
        <div key={item.n} className="mb-8 rounded-2xl border border-border bg-card p-6 md:p-8">
          <div className="flex items-start gap-4 mb-4">
            <span className="text-accent font-heading font-bold text-2xl shrink-0">{item.n}</span>
            <h3 className="font-heading font-bold text-lg text-foreground leading-snug">{item.q}</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-green-500/5 border border-green-500/20 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-green-500 mb-2">Good answer sounds like</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.good}</p>
            </div>
            <div className="rounded-xl bg-red-500/5 border border-red-500/20 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-red-500 mb-2">Red flag answer sounds like</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.bad}</p>
            </div>
          </div>
        </div>
      ))}

      <SectionH2>What Should a Brisbane Digital Marketing Agency Cost?</SectionH2>

      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        Pricing in Brisbane varies enormously — and low price is almost never a bargain in digital marketing. Here's what to expect at different investment levels:
      </p>

      <div className="overflow-x-auto mb-10 rounded-2xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-muted/50">
            <tr>
              <th className="text-left p-4 font-bold text-foreground">Budget</th>
              <th className="text-left p-4 font-bold text-foreground">What You Get</th>
              <th className="text-left p-4 font-bold text-foreground">Verdict</th>
            </tr>
          </thead>
          <tbody className="text-muted-foreground divide-y divide-border">
            <tr className="bg-red-500/5"><td className="p-4 font-medium">Under $800/mo SEO</td><td className="p-4">Offshore content, minimal strategy, templated reports</td><td className="p-4 text-red-500 font-semibold">Avoid</td></tr>
            <tr><td className="p-4 font-medium">$800–$1,500/mo SEO</td><td className="p-4">Basic local SEO, some on-page work, monthly reporting</td><td className="p-4 text-yellow-500 font-semibold">Acceptable for low-competition markets</td></tr>
            <tr className="bg-accent/5"><td className="p-4 font-medium">$1,500–$3,500/mo SEO</td><td className="p-4">Full strategy, content, technical, link building, senior oversight</td><td className="p-4 text-green-500 font-semibold">Recommended for most Brisbane businesses</td></tr>
            <tr><td className="p-4 font-medium">$3,500+/mo SEO</td><td className="p-4">Enterprise-level, dedicated team, aggressive link acquisition</td><td className="p-4 text-green-500 font-semibold">Required for competitive industries (law, finance, health)</td></tr>
            <tr><td className="p-4 font-medium">$600–$1,500/mo Google Ads mgmt</td><td className="p-4">Campaign setup, monitoring, monthly optimisation</td><td className="p-4 text-green-500 font-semibold">Standard for Brisbane SMBs</td></tr>
          </tbody>
        </table>
      </div>

      <Blockquote>
        The best time to scrutinise an agency is before you hire them. The worst time is 6 months in when you've paid $15,000 and your rankings haven't moved.
        <footer>— Hamza Ishfaq, Founder, Next Tab Agency</footer>
      </Blockquote>

      <SectionH2>Brisbane Local vs National vs Global Agency: Which is Best?</SectionH2>

      <div className="grid md:grid-cols-3 gap-6 mb-10">
        {[
          {
            type: "Local Brisbane Agency",
            pros: ["Understands Brisbane search behaviour", "Accountable in person", "Knows local competitors", "AEST timezone alignment", "Relationships with Brisbane media"],
            cons: ["Smaller team — may not cover all services", "May be more expensive than offshore"],
            verdict: "Best for most Brisbane SMBs",
            color: "border-green-500/30 bg-green-500/5",
          },
          {
            type: "National Australian Agency",
            pros: ["Larger team and more specialists", "Experience across all Australian markets", "May have lower rates than boutique local"],
            cons: ["Less Brisbane-specific knowledge", "Account may be passed to juniors", "Less personal accountability"],
            verdict: "Good for larger businesses",
            color: "border-border bg-card",
          },
          {
            type: "Offshore / Global Agency",
            pros: ["Lower price point", "Capacity at scale"],
            cons: ["No local market knowledge", "Timezone and communication challenges", "Content often not Australian-specific", "Quality control issues"],
            verdict: "High risk for most businesses",
            color: "border-red-500/30 bg-red-500/5",
          },
        ].map((col) => (
          <div key={col.type} className={`rounded-2xl border p-6 ${col.color}`}>
            <h3 className="font-heading font-bold text-base text-foreground mb-4">{col.type}</h3>
            <div className="mb-3">
              <p className="text-xs font-bold uppercase tracking-wider text-green-500 mb-2">Pros</p>
              <ul className="space-y-1 text-sm text-muted-foreground">{col.pros.map(p => <li key={p}>✓ {p}</li>)}</ul>
            </div>
            <div className="mb-4">
              <p className="text-xs font-bold uppercase tracking-wider text-red-500 mb-2">Cons</p>
              <ul className="space-y-1 text-sm text-muted-foreground">{col.cons.map(c => <li key={c}>✗ {c}</li>)}</ul>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-accent">{col.verdict}</p>
          </div>
        ))}
      </div>

      <SectionH2>Related Resources</SectionH2>
      <ul className="mb-10 space-y-2 text-muted-foreground">
        <li>→ <Link to="/locations/brisbane-seo" className="text-accent underline">SEO Agency Brisbane — What We Do & Why It Works</Link></li>
        <li>→ <Link to="/services/ppc-google-ads" className="text-accent underline">PPC Agency Brisbane — Google Ads Management</Link></li>
        <li>→ <Link to="/blog/seo-vs-google-ads-aussie-tradies" className="text-accent underline">SEO vs Google Ads: Which Gets Better ROI for Brisbane Businesses?</Link></li>
        <li>→ <Link to="/services/seo-packages" className="text-accent underline">SEO Packages Brisbane — Transparent Pricing, No Lock-In Contracts</Link></li>
        <li>→ <Link to="/blog/why-your-website-needs-seo" className="text-accent underline">Why Your Brisbane Business Needs SEO in 2026</Link></li>
      </ul>

      <ActionItem>
        Not sure if we're the right fit? We prefer to earn your trust first. Book a free 30-minute strategy call — no sales pitch, just honest feedback on your current digital situation. <Link to="/contact" className="text-accent underline font-semibold">Book your free call →</Link>
      </ActionItem>

    </BlogPostLayout>
  </>
);

export default ChooseDigitalAgencyBrisbane;
