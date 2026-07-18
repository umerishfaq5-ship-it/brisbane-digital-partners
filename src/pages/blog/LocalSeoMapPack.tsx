import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import BlogPostLayout, { Stat, Blockquote, ActionItem, SectionH2, ChecklistItem } from "@/components/BlogPostLayout";

const schema = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Why Your Local Competitor is Getting All the Calls (And How the Google Map Pack Fixes It)",
  "image": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&fm=webp&fit=crop",
  "author": {
    "@type": "Organization",
    "name": "Brisbane Digital Partners"
  },
  "publisher": {
    "@type": "Organization", "name": "Brisbane Digital Partners",
    "logo": { "@type": "ImageObject", "url": "https://brisbanedigitalpartners.com.au/logo.png" }
  },
  "datePublished": "2026-07-16"
};

const LocalSeoMapPack = () => (
  <>
    <Helmet>
      <title>Why Your Local Competitor gets all the Calls | Brisbane Digital Partners</title>
      <meta name="description" content="Tired of losing local customers to competitors? Discover how the Google Map Pack drives 46% of local search traffic and how to secure your spot." />
    </Helmet>

    <BlogPostLayout
      title="Why Your Local Competitor is Getting All the Calls (And How the Google Map Pack Fixes It)"
      subtitle="46% of all Google searches have local intent. If your business isn't showing up in the top 3 Map Pack spots, you are essentially invisible to local customers."
      date="July 16, 2026"
      readTime="6 min read"
      category="Local SEO"
      heroImage="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&fm=webp&fit=crop"
      heroImageAlt="Local tradesman on a tablet viewing Google Maps"
      schema={schema}
      ctaHeading="Want to Dominate Your Local Area?"
      ctaSub="Stop letting your competitors take your calls. Let our local SEO experts audit your profile."
      ctaBtn="Get a Free GBP Audit →"
    >
      <p className="mb-6 text-xl font-semibold leading-relaxed text-foreground">
        It’s a frustrating reality for many Australian business owners. You offer better services, have more experienced staff, and your pricing is competitive. Yet, when someone searches for a "Plumber near me" or "Dentist in Brisbane," your competitor gets the call.
      </p>

      <p className="mb-10 text-lg leading-relaxed text-muted-foreground">
        Why does this happen? The answer lies in how Google presents local businesses to its users. If you aren't optimizing for the Google Map Pack, you are leaving money on the table every single day.
      </p>

      <div className="grid gap-6 mb-10 md:grid-cols-2">
        <Stat value="46%" label="of all Google Searches have Local Intent" source="Search Engine Roundtable" />
        <Stat value="78%" label="of Local Mobile Searches Result in Offline Purchases" source="ComScore" />
      </div>

      <SectionH2>The "Near Me" Phenomenon</SectionH2>

      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        When people need a tradie, a clinic, or a local service, they don't want to browse through 10 pages of websites. They want immediate solutions. This is why <strong>"near me"</strong> searches have skyrocketed over the last few years.
      </p>

      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        Google knows this. That's why they push the Google Map Pack (the top 3 local businesses shown on a map) to the very top of the search results, above organic website listings.
      </p>

      <Blockquote
        quote="If your business isn't in the top 3 Map Pack results, you don't exist to 80% of local searchers."
        author="Brisbane Digital Partners Local SEO Team"
      />

      <SectionH2>Why Your Competitor is Winning</SectionH2>

      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        Your competitor isn't getting calls because they are better at what they do. They are getting calls because they have optimized their <Link to="/services/google-business-profile" className="font-semibold underline text-accent hover:text-accent/80">Google Business Profile (GBP)</Link>.
      </p>

      <ul className="mb-8 space-y-2">
        <ChecklistItem>They have consistent Name, Address, and Phone (NAP) citations across the web.</ChecklistItem>
        <ChecklistItem>They are actively collecting and responding to Google Reviews.</ChecklistItem>
        <ChecklistItem>Their website is localized with city-specific landing pages.</ChecklistItem>
        <ChecklistItem>They have optimized their GBP categories and services.</ChecklistItem>
      </ul>

      <SectionH2>How to Reclaim Your Leads</SectionH2>

      <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
        To get back in the game and dominate your local area, you need a targeted <Link to="/services/local-seo" className="font-semibold underline text-accent hover:text-accent/80">Local SEO strategy</Link>. This isn't just about having a website; it's about building local authority and trust signals that Google recognizes.
      </p>

      <ActionItem>
        <strong>Immediate Action:</strong> Audit your Google Business Profile. Ensure all your information is 100% accurate, add high-quality photos of your team and work, and start asking every happy customer for a review. If you need expert help scaling this, explore our <Link to="/locations/brisbane-seo" className="font-semibold underline text-accent hover:text-accent/80">Brisbane SEO</Link> services tailored for local dominance.
      </ActionItem>

    </BlogPostLayout>
  </>
);

export default LocalSeoMapPack;
