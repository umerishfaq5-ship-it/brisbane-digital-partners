import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import BlogPostLayout, {
  Blockquote, Stat, ActionItem, SectionH2, GoodBad, InlineImage
} from "@/components/BlogPostLayout";

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "mainEntityOfPage": { "@type": "WebPage", "@id": "https://nexttabagency.com/blog/seo-vs-google-ads-aussie-tradies" },
  "headline": "SEO vs Google Ads for Australian Tradies: Which One Actually Pays Off?",
  "description": "Google Ads in Australia cost $15–50 per click for tradies. SEO earns the same clicks for free — and compounds over time. Here's the honest comparison every Aussie tradie needs to read.",
  "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076",
  "author": { "@type": "Organization", "name": "Next Tab Agency" },
  "publisher": {
    "@type": "Organization", "name": "Next Tab Agency",
    "logo": { "@type": "ImageObject", "url": "https://nexttabagency.com/logo.png" }
  },
  "datePublished": "2025-06-14"
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How much do Google Ads cost for Australian tradies?", "acceptedAnswer": { "@type": "Answer", "text": "In major Australian cities, the average cost-per-click (CPC) for tradie-related keywords ranges from $8 to $55, with plumbers and electricians in Sydney and Melbourne typically paying at the higher end. SEO eliminates this ongoing cost entirely once rankings are achieved." } },
    { "@type": "Question", "name": "How long does SEO take compared to Google Ads?", "acceptedAnswer": { "@type": "Answer", "text": "Google Ads delivers traffic instantly but stops the moment you stop paying. SEO takes 3–6 months to build momentum but then delivers free, compounding traffic indefinitely. Think of Ads as renting and SEO as owning." } },
    { "@type": "Question", "name": "Should I run both SEO and Google Ads?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — ideally, run Google Ads to generate immediate leads while investing in SEO for long-term growth. As your SEO rankings build, you can progressively reduce ad spend. This is the recommended strategy for Australian tradies." } }
  ]
};

const SeoVsGoogleAds = () => (
  <>
    <Helmet>
      <title>SEO vs Google Ads for Australian Tradies: Which One Actually Pays Off? | Next Tab Agency</title>
      <meta name="description" content="Google Ads in Australia cost $15–50 per click for tradies. SEO earns the same clicks for free and compounds over time. Here's the honest comparison every Aussie tradie needs to read." />
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
    </Helmet>

    <BlogPostLayout
      title="SEO vs Google Ads for Australian Tradies: Which One Actually Pays Off?"
      subtitle="Google Ads cost Australian tradies $15–50 per click. SEO earns those same clicks for free — and the results compound every month. Here's the honest comparison."
      date="June 14, 2025"
      readTime="7 min read"
      category="SEO Strategy"
      heroImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2076&auto=format&fit=crop"
      heroImageAlt="Australian tradie looking at their phone checking Google rankings for their business"
      schema={schema}
      ctaHeading="Ready to Stop Paying Per Click?"
      ctaSub="Let's build your SEO rankings so leads come in organically — without a monthly Google Ads bill. Book a free strategy call with our Brisbane team."
      ctaBtn="Get My Free SEO Strategy Call →"
    >
      <p className="mb-6 text-xl font-semibold leading-relaxed text-foreground">
        If you're a tradie in Sydney, Melbourne, or Brisbane, you've probably tried Google Ads. And you've probably noticed that the bill keeps climbing while the leads stay inconsistent.
      </p>
      <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
        Here's the honest truth: Google Ads can work. But for most Australian tradies, <strong className="text-foreground">SEO is a far better long-term investment</strong>. This is the comparison no one in the industry will give you straight.
      </p>

      <div className="grid grid-cols-1 gap-4 my-10 sm:grid-cols-3">
        <Stat value="$35" label="average cost-per-click for plumber keywords in Sydney" source="Google Keyword Planner 2024" />
        <Stat value="89%" label="of Australians use Google to find a local tradie" source="Think with Google AU" />
        <Stat value="0%" label="ongoing cost per click once you achieve SEO rankings" source="Industry standard" />
      </div>

      <Blockquote
        quote="Paid ads are like a tap — turn it off and the water stops. SEO is like a well — invest in digging it once, and it gives you water for years."
        author="Rand Fishkin, Founder of SparkToro"
      />

      <SectionH2>The Real Cost of Google Ads for Aussie Tradies</SectionH2>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        Let's look at what Australian tradies are actually paying for Google Ads in 2025. These figures are from Google's own Keyword Planner for high-intent keywords in major cities:
      </p>

      <div className="overflow-x-auto my-8">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-border/60 text-left">
              <th className="pb-3 pr-6 font-bold text-foreground">Trade / Keyword</th>
              <th className="pb-3 pr-6 font-bold text-foreground">Sydney CPC</th>
              <th className="pb-3 pr-6 font-bold text-foreground">Melbourne CPC</th>
              <th className="pb-3 font-bold text-foreground">Brisbane CPC</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border/40 text-muted-foreground">
            {[
              ["Emergency Plumber", "$38–55", "$32–48", "$22–35"],
              ["Electrician Near Me", "$22–40", "$18–36", "$15–28"],
              ["Local Accountant", "$18–32", "$15–28", "$12–22"],
              ["Divorce Lawyer", "$45–80", "$40–70", "$35–55"],
              ["Home Renovation", "$12–22", "$10–20", "$8–16"],
            ].map(([trade, syd, mel, bris]) => (
              <tr key={String(trade)}>
                <td className="py-3 pr-6 font-medium text-foreground">{trade}</td>
                <td className="py-3 pr-6">{syd}</td>
                <td className="py-3 pr-6">{mel}</td>
                <td className="py-3">{bris}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        If you spend $1,000/month on Google Ads and your average CPC is $35, you get approximately <strong className="text-foreground">28 clicks</strong>. If your website converts at 10%, that's <strong className="text-foreground">2–3 leads per month</strong>. And when your budget runs out mid-month, the phone goes silent.
      </p>

      <SectionH2>How SEO Changes the Equation</SectionH2>

      <GoodBad
        bad="$1,200/month Google Ads budget. Generates ~35 clicks/month for 'Plumber Sydney'. 10% conversion = 3-4 leads. Stop paying → zero leads immediately. No compounding effect."
        good="$1,200/month invested in SEO for 6 months. Ranks for 'Emergency Plumber Sydney' organically. Same 35 clicks/month — but now FREE. Traffic compounds every month. Leads continue with no ad spend."
        badLabel="💸 Google Ads — Renting Traffic"
        goodLabel="🏆 SEO — Owning Traffic"
      />

      <InlineImage
        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
        alt="Australian business owner reviewing organic SEO traffic growth on analytics dashboard"
      />

      <SectionH2>When Google Ads IS the Right Answer</SectionH2>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        Google Ads isn't always wrong. Here are the specific scenarios where Ads make sense for an Australian tradie:
      </p>
      <div className="space-y-3 my-6">
        {[
          { icon: "⚡", title: "You just launched and need leads immediately", desc: "SEO takes 3–6 months to build. If you need the phone ringing this week, Ads can bridge the gap while SEO builds in the background." },
          { icon: "🎯", title: "You have a specific promotion to run", desc: "A 'Winter HVAC Service Special' or 'End of Financial Year Accounting Offer' is a perfect short-term Ad campaign." },
          { icon: "🔬", title: "You want to test which keywords convert", desc: "Running Ads first tells you which keywords your customers actually click on before you invest in SEO for them." },
        ].map(item => (
          <div key={item.title} className="flex gap-4 p-5 rounded-2xl bg-card border border-border/60">
            <span className="text-2xl flex-shrink-0">{item.icon}</span>
            <div>
              <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <SectionH2>The Recommended Strategy for Australian Tradies</SectionH2>
      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        The smartest approach is a <strong className="text-foreground">hybrid strategy</strong>: use Google Ads to generate immediate leads while you build your SEO foundation. As your rankings grow over 6–12 months, progressively reduce your ad budget. Eventually, your organic rankings generate leads for free — and you only run Ads for specific campaigns.
      </p>
      <ActionItem>
        <p>
          Check your current Google Ads cost per lead. If it's over $150 per conversion, your budget is better invested in <Link to="/services/local-seo" className="font-semibold text-accent hover:underline">Local SEO</Link> combined with a <Link to="/services/seo-audits" className="font-semibold text-accent hover:underline">technical SEO audit</Link> to fix the gaps that are costing you organic rankings.
        </p>
      </ActionItem>

      <SectionH2>Frequently Asked Questions</SectionH2>
      <div className="space-y-4">
        {[
          { q: "How much do Google Ads cost for Australian tradies?", a: "In major Australian cities, average cost-per-click for tradie keywords ranges from $8 to $55, with plumbers and electricians in Sydney and Melbourne typically at the higher end." },
          { q: "How long does SEO take compared to Google Ads?", a: "Google Ads delivers traffic instantly but stops when you stop paying. SEO takes 3–6 months to build momentum but delivers free, compounding traffic indefinitely — like renting vs owning." },
          { q: "Should I run both SEO and Google Ads?", a: "Yes — run Ads for immediate leads while building SEO for long-term growth. As your SEO rankings build, progressively reduce your ad spend. This is the recommended strategy for Australian tradies." }
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

export default SeoVsGoogleAds;
