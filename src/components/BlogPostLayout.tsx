import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Clock, Calendar, ChevronRight } from "lucide-react";
import Layout from "@/components/Layout";
import BlogLeadCapture from "@/components/BlogLeadCapture";

/* ─── Shared sub-components ─────────────────────────────────────── */

export const Stat = ({ value, label, source }: { value: string; label: string; source: string }) => (
  <div className="flex flex-col items-center p-6 text-center border rounded-2xl bg-accent/5 border-accent/20">
    <span className="mb-1 text-4xl font-black text-accent font-heading">{value}</span>
    <span className="mb-1 text-sm font-semibold text-foreground">{label}</span>
    <span className="text-xs text-muted-foreground/60">Source: {source}</span>
  </div>
);

export const Blockquote = ({ quote, author }: { quote: string; author: string }) => (
  <blockquote className="p-6 my-10 border-l-4 rounded-r-2xl border-accent bg-accent/5">
    <p className="mb-3 text-xl italic font-medium leading-relaxed text-foreground">"{quote}"</p>
    <footer className="text-sm font-bold tracking-widest uppercase text-accent">— {author}</footer>
  </blockquote>
);

export const ActionItem = ({ children }: { children: ReactNode }) => (
  <div className="relative p-6 my-8 overflow-hidden border bg-card border-accent/20 rounded-2xl">
    <div className="absolute top-0 left-0 w-1.5 h-full rounded-l-2xl bg-accent" />
    <h3 className="flex items-center gap-2 mb-2 text-base font-bold text-foreground">
      <span className="text-lg">🚀</span> Action Item
    </h3>
    <div className="text-muted-foreground">{children}</div>
  </div>
);

export const GoodBad = ({
  bad, good, badLabel = "❌ Don't Do This", goodLabel = "✅ Do This Instead"
}: { bad: string; good: string; badLabel?: string; goodLabel?: string }) => (
  <div className="grid gap-4 my-8 md:grid-cols-2">
    <div className="p-5 border rounded-2xl bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-900/40">
      <h4 className="mb-2 text-sm font-bold text-red-600 dark:text-red-400">{badLabel}</h4>
      <p className="text-sm leading-relaxed text-red-700 dark:text-red-300/80">{bad}</p>
    </div>
    <div className="p-5 border rounded-2xl bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-900/40">
      <h4 className="mb-2 text-sm font-bold text-emerald-600 dark:text-emerald-400">{goodLabel}</h4>
      <p className="text-sm leading-relaxed text-emerald-700 dark:text-emerald-300/80">{good}</p>
    </div>
  </div>
);

export const ChecklistItem = ({ children }: { children: ReactNode }) => (
  <li className="flex items-start gap-3 py-3 border-b border-border/50 last:border-0">
    <span className="flex items-center justify-center flex-shrink-0 w-6 h-6 mt-0.5 rounded-full bg-accent/10 text-accent text-xs font-bold">✓</span>
    <span className="text-muted-foreground">{children}</span>
  </li>
);

export const InlineImage = ({ src, alt }: { src: string; alt: string }) => (
  <div className="my-10 overflow-hidden rounded-2xl shadow-lg aspect-video">
    <img src={src} alt={alt} className="object-cover w-full h-full" loading="lazy" />
  </div>
);

export const SectionH2 = ({ children }: { children: ReactNode }) => (
  <h2 className="pb-3 mt-16 mb-6 text-3xl font-bold border-b text-foreground font-heading border-border">
    {children}
  </h2>
);

export const StepBadge = ({ n, title }: { n: number; title: string }) => (
  <div className="flex items-center gap-4 pb-3 mt-16 mb-6 border-b border-border">
    <span className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-lg font-black rounded-full bg-accent text-accent-foreground font-heading">
      {n}
    </span>
    <h2 className="text-3xl font-bold text-foreground font-heading">{title}</h2>
  </div>
);

export const CtaSection = ({ heading, sub, btnText = "Book My Free Consultation" }: { heading: string; sub: string; btnText?: string }) => (
  <section className="py-20 surface-teal text-primary-foreground">
    <div className="container max-w-3xl text-center">
      <h2 className="mb-4 text-3xl font-bold md:text-4xl font-heading">{heading}</h2>
      <p className="mb-8 text-lg text-primary-foreground/80">{sub}</p>
      <Link
        to="/contact"
        className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-bold transition-all rounded-full bg-accent text-accent-foreground hover:bg-accent/90 hover:scale-105"
      >
        {btnText} <ChevronRight className="w-5 h-5" />
      </Link>
    </div>
  </section>
);

/* ─── Main Layout ────────────────────────────────────────────────── */

interface Props {
  title: string;
  subtitle: string;
  date: string;
  readTime: string;
  category: string;
  heroImage: string;
  heroImageAlt: string;
  schema: object;
  children: ReactNode;
  ctaHeading: string;
  ctaSub: string;
  ctaBtn?: string;
}

const BlogPostLayout = ({
  title, subtitle, date, readTime, category,
  heroImage, heroImageAlt, schema, children,
  ctaHeading, ctaSub, ctaBtn
}: Props) => (
  <Layout>
    {/* JSON-LD BlogPosting Schema */}
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />

    {/* Hero */}
    <section className="relative pt-32 pb-16 overflow-hidden md:pt-40 md:pb-20 bg-muted/30">
      <div className="absolute inset-0 opacity-30 pattern-grid" />
      <div className="container relative z-10 max-w-4xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 mb-8 text-sm font-medium transition-colors text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>

        <div className="flex flex-wrap items-center gap-3 mb-6 text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {date}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {readTime}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
          <span className="px-3 py-1 text-xs font-bold tracking-widest uppercase rounded-full text-accent bg-accent/10">{category}</span>
        </div>

        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-5xl font-heading text-foreground">
          {title}
        </h1>
        <p className="text-xl leading-relaxed text-muted-foreground md:text-2xl">{subtitle}</p>
      </div>
    </section>

    {/* Hero image — slightly overlapping hero */}
    <div className="container max-w-5xl px-4 mx-auto -mt-8 md:-mt-12 relative z-20 mb-4">
      <div className="overflow-hidden shadow-2xl rounded-2xl aspect-video ring-1 ring-border/40">
        <img src={heroImage} alt={heroImageAlt} className="object-cover w-full h-full" loading="eager" />
      </div>
    </div>

    {/* Content */}
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">{children}</div>
    </section>

    {/* CTA */}
    <CtaSection heading={ctaHeading} sub={ctaSub} btnText={ctaBtn} />

    {/* Pop-up */}
    <BlogLeadCapture />
  </Layout>
);

export default BlogPostLayout;
