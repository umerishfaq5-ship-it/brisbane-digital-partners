import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, Calendar, Tag } from "lucide-react";
import Layout from "@/components/Layout";

const posts = [
  {
    slug: "core-update-may-2026",
    title: "Google’s May 2026 Core Update is Complete: What Australian Businesses Need to Know",
    excerpt: "The second major Google core update of 2026 has officially finished rolling out. Here is what happened and what you should do next.",
    category: "SEO Updates",
    date: "June 10, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    featured: true,
  },
  {
    slug: "content-strategy-core-update",
    title: "Hit by the May 2026 Core Update? Why 'Good' Content Isn't Enough Anymore",
    excerpt: "Google no longer cares if your content is just 'good.' It demands content that solves the user's exact problem faster and better than anyone else.",
    category: "Content Strategy",
    date: "June 11, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead2708?q=80&w=2073&auto=format&fit=crop",
  },
  {
    slug: "technical-seo-core-update",
    title: "The Technical SEO Checklist to Recover from the 2026 Core Updates",
    excerpt: "If your content is highly relevant but your rankings are sinking, you likely have a technical bottleneck blocking Google.",
    category: "Technical SEO",
    date: "June 12, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "local-entity-core-update",
    title: "Losing Organic Traffic? Use the Google Map Pack to Bypass Core Update Drops",
    excerpt: "If your traditional website rankings fluctuate, your Google Business Profile (GBP) is your ultimate safety net.",
    category: "Local SEO",
    date: "June 13, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop",
  },
  {
    slug: "why-your-website-needs-seo",
    title: "Is Your Business Invisible? 5 Reasons Why Your Website Needs SEO in 2025",
    excerpt: "Having a website without SEO is like printing 5,000 business cards and keeping them in your desk drawer. Here's exactly what you're missing.",
    category: "SEO Strategy",
    date: "May 10, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "seo-for-small-business-zero-time",
    title: "SEO for Small Business Owners: Where to Start When You Have Zero Time",
    excerpt: "The Minimum Viable SEO Plan — the 20% of work that delivers 80% of the results. Built for busy Australian business owners.",
    category: "SEO Tips",
    date: "June 7, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "seo-vs-google-ads-aussie-tradies",
    title: "SEO vs Google Ads for Australian Tradies: Which One Actually Pays Off?",
    excerpt: "Google Ads cost Aussie tradies $15–50 per click. SEO earns those same clicks for free — and compounds every month. Here's the honest comparison.",
    category: "SEO Strategy",
    date: "June 14, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "google-business-profile-setup",
    title: "The 'Near Me' Secret: How to Set Up Your Google Business Profile Like a Pro",
    excerpt: "76% of people who do a local search visit a business within 24 hours. Here's the full 5-step GBP setup guide.",
    category: "Local SEO",
    date: "May 17, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "seo-audit-checklist",
    title: "The 10-Point SEO Audit: Why Your Website Isn't Ranking on Page 1",
    excerpt: "You have a beautiful website, but zero traffic. It's like owning a Ferrari with no engine. This checklist finds every hidden problem.",
    category: "SEO Audit",
    date: "May 24, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "com-vs-com-au-australia",
    title: ".com vs .com.au — Which Domain Actually Ranks Better in Australia?",
    excerpt: "84% of Australians trust a .com.au website more. But which domain actually ranks better on Google Australia? The definitive answer, with real data.",
    category: "SEO Strategy",
    date: "June 21, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "what-are-backlinks",
    title: "What Are Backlinks? Think of Them as Digital 'Votes of Confidence'",
    excerpt: "Why do some websites outrank competitors with less content? It's about Authority. Backlinks are the doctor recommendations of the internet.",
    category: "Authority Building",
    date: "May 31, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "shopify-seo-australia",
    title: "SEO for E-Commerce: How to Boost Your Shopify Sales in Australia",
    excerpt: "Your Shopify store is live but traffic is dead. Here's the 5-step SEO playbook for Australian e-commerce businesses to rank on Google.",
    category: "E-Commerce SEO",
    date: "June 28, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=800&auto=format&fit=crop",
  },
];

const categoryColors: Record<string, string> = {
  "SEO Strategy":       "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Local SEO":          "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "SEO Audit":          "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  "Authority Building": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  "SEO Tips":           "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  "E-Commerce SEO":     "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400",
  "SEO Updates":        "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  "Content Strategy":   "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-400",
  "Technical SEO":      "bg-teal-100 text-teal-700 dark:bg-teal-900/30 dark:text-teal-400",
};

const Blog = () => {
  const [featured, ...rest] = posts;

  return (
    <Layout>
      <Helmet>
        <title>Blog &amp; Insights | Next Tab Agency</title>
        <meta name="description" content="Actionable SEO tips, local marketing strategies, and digital growth insights for Australian small businesses — from the team at Next Tab Agency Brisbane." />
      </Helmet>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden surface-teal text-primary-foreground md:pt-40 md:pb-28">
        <div className="absolute inset-0 opacity-20 pattern-grid" />
        <div className="container relative z-10 text-center max-w-3xl">
          <span className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-xs font-bold tracking-widest uppercase border rounded-full border-primary-foreground/20 text-primary-foreground/60">
            <Tag className="w-3.5 h-3.5" /> For Australian Small Businesses
          </span>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl font-heading">
            Grow Your Business <br className="hidden md:block" />
            <span className="text-accent">With Smarter SEO</span>
          </h1>
          <p className="text-xl leading-relaxed text-primary-foreground/80">
            Jargon-free guides, real stats, real Aussie examples — written for busy business owners, not SEO nerds.
          </p>
          <div className="flex flex-wrap justify-center gap-2 mt-8 text-xs">
            {["Brisbane", "Sydney", "Melbourne", "Perth", "Adelaide", "Canberra"].map(city => (
              <span key={city} className="px-3 py-1.5 rounded-full border border-primary-foreground/20 text-primary-foreground/60">
                📍 {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container py-8 md:py-12">
        <p className="mb-6 text-xs font-bold tracking-widest uppercase text-accent">⭐ Featured Article</p>
        <Link
          to={`/blog/${featured.slug}`}
          className="group grid gap-0 overflow-hidden border rounded-2xl shadow-premium bg-card border-border/50 md:grid-cols-2 hover:border-accent/40 transition-all duration-300"
        >
          <div className="overflow-hidden">
            <img
              src={featured.image}
              alt={featured.title}
              className="object-cover w-full h-64 transition-transform duration-700 md:h-full group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className={`self-start px-3 py-1 mb-4 text-xs font-bold rounded-full ${categoryColors[featured.category]}`}>
              {featured.category}
            </span>
            <h2 className="mb-4 text-2xl font-bold leading-tight md:text-3xl font-heading text-foreground group-hover:text-accent transition-colors">
              {featured.title}
            </h2>
            <p className="mb-6 text-muted-foreground leading-relaxed">{featured.excerpt}</p>
            <div className="flex items-center gap-4 mb-6 text-xs text-muted-foreground/70">
              <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {featured.date}</span>
              <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featured.readTime}</span>
            </div>
            <span className="inline-flex items-center gap-2 font-bold text-accent group-hover:gap-3 transition-all">
              Read Article <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>
      </section>

      {/* All Posts Grid */}
      <section className="pb-24 bg-muted/20">
        <div className="container">
          <p className="mb-8 text-xs font-bold tracking-widest uppercase text-accent">📚 All {posts.length} Articles</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden border rounded-2xl bg-card border-border/50 shadow-sm hover:shadow-premium hover:-translate-y-1.5 hover:border-accent/40 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-52">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full backdrop-blur-sm ${categoryColors[post.category]}`}>
                    {post.category}
                  </span>
                </div>
                <div className="flex flex-col flex-grow p-6">
                  <div className="flex items-center gap-3 mb-3 text-xs text-muted-foreground/60">
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                  </div>
                  <h3 className="mb-3 text-lg font-bold leading-snug transition-colors font-heading text-foreground group-hover:text-accent line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-muted-foreground line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-bold text-accent group-hover:gap-3 transition-all">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 surface-teal text-primary-foreground">
        <div className="container max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading">
            Ready to stop guessing?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/80">
            Get a free, no-jargon SEO audit and find out exactly why your site isn't ranking — in plain English, delivered within 24 hours.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold transition-all rounded-full bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105"
          >
            Get My Free Aussie SEO Audit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
