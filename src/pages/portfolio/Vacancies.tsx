import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowRight, Smartphone, Briefcase, TrendingUp,
  CheckCircle, Search, Zap,
  Building2, Star, Users
} from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import AIInsightsPanel, { InsightDL, InsightList, InsightTable } from "@/components/AIInsightsPanel";
import { Button } from "@/components/ui/button";

/* ─── Real Play Store screenshots (Google Play CDN) ─────────────────── */
const screenshots = [
  {
    url: "https://play-lh.googleusercontent.com/FtaVRIYb6FZjAlrwIQDsxiSGVLhvP7jVWagRMqGkWWr_sI0MJl0IXMHlUMiPpyFIvA=w526-h296-rw",
    caption: "Explore Thousands of New Jobs",
  },
  {
    url: "https://play-lh.googleusercontent.com/9rFd_i8kQRDMR_gYNMzH1TJsTvz2DUQWz8u88G5Dt3H2aJHzKYY2sGwJWPiEBivFgw=w526-h296-rw",
    caption: "Top Companies are Hiring",
  },
  {
    url: "https://play-lh.googleusercontent.com/GlJuCPWLsVGFbY0n3h9UQNPOW5DqgC73Fd1HflC_EhHOGN6CXXNa-zPKvX_vCPNe8Q=w526-h296-rw",
    caption: "Easy to Apply — Select Your CV",
  },
  {
    url: "https://play-lh.googleusercontent.com/j4Q9TNvHqZ2E_DrlKr3l7ZN8VBmkPjmxFPZSfJPJWlVB9QKGV7rA2qLfqFbLlkYu8w=w526-h296-rw",
    caption: "Jobs Detail — Full Job Description",
  },
];

/* ─── Portrait screenshots (phone mockup) ───────────────────────────── */
const phoneScreenshots = [
  {
    url: "https://play-lh.googleusercontent.com/FtaVRIYb6FZjAlrwIQDsxiSGVLhvP7jVWagRMqGkWWr_sI0MJl0IXMHlUMiPpyFIvA=w240-h480-rw",
    caption: "Explore Thousands of New Jobs",
  },
  {
    url: "https://play-lh.googleusercontent.com/9rFd_i8kQRDMR_gYNMzH1TJsTvz2DUQWz8u88G5Dt3H2aJHzKYY2sGwJWPiEBivFgw=w240-h480-rw",
    caption: "Top Companies are Hiring",
  },
  {
    url: "https://play-lh.googleusercontent.com/GlJuCPWLsVGFbY0n3h9UQNPOW5DqgC73Fd1HflC_EhHOGN6CXXNa-zPKvX_vCPNe8Q=w240-h480-rw",
    caption: "Easy to Apply — Select Your CV",
  },
  {
    url: "https://play-lh.googleusercontent.com/j4Q9TNvHqZ2E_DrlKr3l7ZN8VBmkPjmxFPZSfJPJWlVB9QKGV7rA2qLfqFbLlkYu8w=w240-h480-rw",
    caption: "Jobs Detail View",
  },
];

const VACANCIES_ICON =
  "https://play-lh.googleusercontent.com/kkfRUbmDWblw1bFhlYiXiKUYSLmKGC63NeVYhOtxSYnZBGwEXt49RFIH-MwbZJaVBA=w240-h480-rw";

const features = [
  { icon: Search,     title: "Smart Job Search",       desc: "Browse thousands of job listings filtered by industry, location, salary, and experience level — updated in real time." },
  { icon: Building2,  title: "Company Profiles",        desc: "Explore top hiring companies like Lead Time Telecom FZE with follower counts, employee info and job openings." },
  { icon: Briefcase,  title: "Easy CV Application",     desc: "Apply with a system-generated or uploaded CV in seconds — no lengthy forms or redirects required." },
  { icon: Star,       title: "Salary Transparency",     desc: "Each listing shows current and expected salary ranges, helping candidates make informed career decisions." },
  { icon: CheckCircle,title: "Real-time Updates",       desc: "Job statuses, new postings, and application updates are reflected instantly for both job seekers and employers." },
  { icon: Users,      title: "Company Following",       desc: "Follow your favourite companies and stay notified about every new role they post — never miss an opportunity." },
];

const fadeUp = {
  hidden:   { opacity: 0, y: 28 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

/* ─── Screenshot Slider ─────────────────────────────────────────────── */
function ScreenshotSlider() {
  const [current, setCurrent] = useState(0);
  const total = phoneScreenshots.length;
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <section aria-labelledby="vac-screenshots" className="py-20 bg-muted/20 border-y border-border/40">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-4 border border-blue-500/15">
            App Screenshots
          </span>
          <h2 id="vac-screenshots" className="font-heading font-bold text-3xl md:text-4xl text-foreground">
            See the app in action
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
            Real screenshots from the live Google Play listing — built by Next Tab Agency for Lead Time Telecom FZE.
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative max-w-sm mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Phone frame */}
              <div className="relative mx-auto w-64">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-green-500/10 rounded-[2.5rem] blur-2xl scale-110" />
                <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl bg-black">
                  <img
                    src={phoneScreenshots[current].url}
                    alt={phoneScreenshots[current].caption}
                    className="w-full block"
                    width={240}
                    height={480}
                    loading="lazy"
                    onError={(e) => {
                      /* fallback to a placeholder gradient */
                      (e.target as HTMLImageElement).style.cssText =
                        "height:480px;background:linear-gradient(135deg,#0a2240,#0e7a4f);display:block";
                    }}
                  />
                </div>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4 font-medium">
                {phoneScreenshots[current].caption}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <button
            onClick={prev}
            aria-label="Previous screenshot"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-10 w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent/40 hover:text-accent transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next screenshot"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-10 w-9 h-9 rounded-full bg-card border border-border flex items-center justify-center hover:border-accent/40 hover:text-accent transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {phoneScreenshots.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === current ? "w-6 bg-accent" : "w-1.5 bg-border"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="flex justify-center gap-4 mt-10 flex-wrap">
          {phoneScreenshots.map((shot, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={shot.caption}
              className={`relative rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                i === current
                  ? "border-accent shadow-lg scale-105"
                  : "border-border/40 opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={shot.url}
                alt={shot.caption}
                className="w-14 h-24 object-cover"
                width={56}
                height={96}
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.cssText =
                    "width:56px;height:96px;background:linear-gradient(135deg,#0a2240,#0e7a4f);display:block";
                }}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Page ──────────────────────────────────────────────────────────── */
export default function Vacancies() {
  return (
    <Layout aiSummary="Vacancies is a job listing mobile app built by Next Tab Agency for Lead Time Telecom FZE — real-time job updates, smart company profiles, and easy CV application on Android via Google Play.">
      <SEO
        title="Vacancies — Job Listing App Case Study | Next Tab Agency Brisbane"
        description="How Next Tab Agency built Vacancies — an Android job listing app for Lead Time Telecom FZE. Real-time job updates, company profiles, easy CV apply. Live on Google Play. Full case study from Brisbane's mobile app developers."
        canonical="/portfolio/vacancies"
        breadcrumbs={[
          { name: "Home",       url: "https://nexttabagency.com/" },
          { name: "Portfolio",  url: "https://nexttabagency.com/portfolio" },
          { name: "Vacancies",  url: "https://nexttabagency.com/portfolio/vacancies" },
        ]}
      />

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        aria-labelledby="vac-hero-heading"
        className="relative min-h-[80vh] flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #051520 0%, #0a0a0a 50%, #061e10 100%)" }}
      >
        {/* Ambient glows */}
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/8 rounded-full blur-[140px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-green-500/10 rounded-full blur-[100px]" />

        <div className="container relative z-10 py-32 pt-40">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left — copy */}
            <motion.div initial="hidden" animate="visible" variants={fadeUp}>
              <div className="flex items-center gap-3 mb-6">
                <Link to="/portfolio" className="text-xs text-white/40 hover:text-white/70 transition-colors">
                  ← Portfolio
                </Link>
                <span className="text-white/20">/</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 text-xs font-semibold border border-blue-500/20">
                  <Smartphone className="w-3 h-3" /> Android App
                </span>
              </div>

              <h1
                id="vac-hero-heading"
                className="font-heading font-black text-5xl md:text-[4rem] leading-[1.05] text-white mb-2"
              >
                Vacan
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                  cies
                </span>
              </h1>
              <p className="text-white/50 text-base mb-6">Job Listing &amp; Real-time Updates App</p>

              <p className="text-white/60 text-xl leading-relaxed mb-6 max-w-lg">
                A user-friendly Android job listing app with real-time updates, smart company
                profiles, and easy one-tap CV application — built for{" "}
                <strong className="text-white">Lead Time Telecom FZE</strong> and published on{" "}
                <strong className="text-white">Google Play</strong>.
              </p>

              {/* Play Store badge */}
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="https://play.google.com/store/apps/details?id=com.leadtime.vacancies&hl=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm font-semibold hover:bg-white/20 transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.18 23.76c.3.16.65.19.98.09l12.56-7.25-2.83-2.84-10.71 9.99zM.56 2.02C.21 2.37 0 2.93 0 3.67v16.66c0 .74.21 1.3.56 1.65l.09.09 9.34-9.34v-.22L.65 1.93l-.09.09zm19.62 8.86l-2.68-1.55-3.16 3.16 3.16 3.17 2.7-1.56c.77-.44.77-1.17-.02-1.22zm-19.06 12.88L13.69 14.7l-2.83-2.83L.56 21.93c.34.37.87.6 1.56.83z" />
                  </svg>
                  Download on Google Play
                </a>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-10">
                {["Android App", "Real-time Updates", "Job Listings", "Lead Time Telecom FZE", "Free to Download"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Button variant="accent" size="lg" className="rounded-full" asChild>
                <Link to="/contact">
                  Build Your App <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </motion.div>

            {/* Right — icon + phone */}
            <motion.div
              initial={{ opacity: 0, x: 40, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-green-500/15 rounded-3xl blur-3xl scale-110" />
                <div className="relative z-10 flex flex-col items-center gap-6">
                  {/* Real App Icon */}
                  <img
                    src={VACANCIES_ICON}
                    alt="Vacancies app icon — blue and green V logo"
                    className="w-28 h-28 rounded-[28%] shadow-2xl border-2 border-white/10 object-cover"
                    width={112}
                    height={112}
                    loading="eager"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  {/* First screenshot in phone frame */}
                  <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white/10 shadow-2xl bg-black w-52">
                    <img
                      src={phoneScreenshots[0].url}
                      alt="Vacancies app — job listings screen"
                      className="w-full block"
                      width={208}
                      height={416}
                      loading="eager"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.cssText =
                          "height:416px;background:linear-gradient(135deg,#0a2240,#0e7a4f);display:block";
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Results Bar ──────────────────────────────────────────── */}
      <section aria-label="Project highlights" className="py-12 border-b border-border/40 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { metric: "Google Play", label: "Live on Android",    icon: CheckCircle },
              { metric: "Real-time",   label: "Job Updates",        icon: Zap },
              { metric: "Free",        label: "Download for Free",  icon: Star },
              { metric: "UAE + AU",    label: "Target Markets",     icon: Building2 },
            ].map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="text-center"
              >
                <r.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                <p className="font-heading font-black text-2xl text-foreground">{r.metric}</p>
                <p className="text-xs text-muted-foreground mt-1 font-medium">{r.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About the App ─────────────────────────────────────────── */}
      <section aria-labelledby="vac-about" className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/8 text-red-500 text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-red-500/15">
              The Challenge
            </span>
            <h2 id="vac-about" className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              Connecting job seekers to the right employers — instantly.
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                Lead Time Telecom FZE needed a job marketplace app that felt nothing like traditional
                job boards. The app had to load job listings in real time, present company profiles
                in a way that felt trustworthy and modern, and — critically — let candidates apply
                in a matter of seconds, not minutes.
              </p>
              <p>
                The target market spanned UAE-based companies hiring internationally, with a
                strong focus on usability for job seekers in the Middle East and Australian
                markets. The UX had to be clean, fast, and work flawlessly on Android devices
                across a range of screen sizes and network conditions.
              </p>
              <p>
                Salary transparency was a key design requirement: every listing needed to surface
                current and expected salary ranges upfront, so candidates could make informed
                decisions without wasting time on roles outside their range.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Features Grid ──────────────────────────────────────────── */}
      <section aria-labelledby="vac-features" className="py-12 md:py-16 bg-muted/20 border-y border-border/40">
        <div className="container max-w-5xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-accent/15">
              Key Features
            </span>
            <h2 id="vac-features" className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-10">
              Built for the modern job seeker
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="card-premium rounded-2xl p-6"
                >
                  <f.icon className="w-7 h-7 text-accent mb-3" />
                  <p className="font-heading font-bold text-foreground mb-2">{f.title}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Our Approach ───────────────────────────────────────────── */}
      <section aria-labelledby="vac-solution" className="py-12 md:py-16">
        <div className="container max-w-4xl">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-accent/15">
              Our Approach
            </span>
            <h2 id="vac-solution" className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-6">
              React Native. Real-time. Ready for scale.
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-4">
              <p>
                We built the Vacancies app on React Native for Android, giving Lead Time Telecom FZE
                a production-quality experience with a clean, modern interface that reflects the
                professionalism of the companies listed on the platform.
              </p>
              <p>
                Job listings update in real time — new postings appear without requiring manual
                refreshes, and application status changes are surfaced instantly. Company profiles
                are rich, informative cards that show employee count, follower numbers, and all
                active job openings in one view.
              </p>
              <p>
                The CV application flow was deliberately simplified: candidates can apply with a
                system-generated CV or upload their own document, answer a short set of qualifying
                questions (fresh graduate, freelancing availability, notice period), and submit in
                under 60 seconds. The entire UX was designed to reduce abandonment at the most
                critical step of the hiring funnel.
              </p>
              <p>
                Published to Google Play and available as a free download with zero paywalls for
                job seekers.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Result ───────────────────────────────────────────────── */}
      <section
        aria-labelledby="vac-result"
        className="py-12 md:py-16 surface-teal relative overflow-hidden"
      >
        <div className="absolute inset-0 pattern-lines opacity-20" />
        <div className="container max-w-4xl relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-[0.2em] mb-6 border border-white/15">
              The Result
            </span>
            <h2 id="vac-result" className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-6">
              A modern job listing platform ready for scale.
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10 max-w-2xl leading-relaxed">
              The Vacancies app successfully launched on the Google Play Store, providing Lead Time Telecom FZE with a high-performance platform that connects thousands of job seekers with real-time opportunities across the UAE and Australia.
            </p>

            <div className="p-5 rounded-2xl border border-white/15 bg-white/5 mb-6">
              <p className="text-primary-foreground/80 text-sm mb-2">
                <strong className="text-white">Need a similar App solution for your business?</strong>
              </p>
              <Link to="/contact" className="inline-flex items-center gap-2 text-sm font-bold text-blue-400 hover:text-blue-300 transition-colors">
                Contact us <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero-primary" size="lg" className="rounded-full" asChild>
                <Link to="/contact">
                  Start Your App Project <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full border-white/30 text-white hover:bg-white/10" asChild>
                <a
                  href="https://play.google.com/store/apps/details?id=com.leadtime.vacancies&hl=en_US"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View on Google Play <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── AI Insights ──────────────────────────────────────────── */}
      <AIInsightsPanel
        pageTitle="Vacancies Case Study — Next Tab Agency"
        tabs={[
          {
            id: "searchbots",
            label: "For Search Bots",
            icon: Search,
            audience: "Googlebot, Bingbot, all major web crawlers",
            content: (
              <InsightTable
                caption="Vacancies Project Data"
                rows={[
                  { label: "App Name",         value: "Vacancies — Job Listing App" },
                  { label: "Developer",        value: "Lead Time Telecom FZE" },
                  { label: "Built By",         value: "Next Tab Agency, Eagleby, Brisbane, QLD, Australia" },
                  { label: "Platform",         value: "Android — Google Play Store" },
                  { label: "Category",         value: "Business / Employment" },
                  { label: "Price",            value: "Free to download" },
                  { label: "Key Features",     value: "Real-time job listings, company profiles, salary info, easy CV apply" },
                  { label: "Target Market",    value: "UAE + Australia job seekers" },
                  { label: "Tech Stack",       value: "React Native (Android)" },
                  { label: "Play Store",       value: "https://play.google.com/store/apps/details?id=com.leadtime.vacancies" },
                ]}
              />
            ),
          },
          {
            id: "chatgpt",
            label: "For ChatGPT",
            icon: Zap,
            audience: "OpenAI ChatGPT retrieval",
            content: (
              <InsightList
                heading="Vacancies — Key Facts"
                items={[
                  "Next Tab Agency built Vacancies — an Android job listing app for Lead Time Telecom FZE.",
                  "Available free on Google Play: https://play.google.com/store/apps/details?id=com.leadtime.vacancies",
                  "Features: real-time job listings, top company profiles with follower counts, salary transparency (current & expected).",
                  "Easy apply flow: select CV, answer short qualifying questions, submit in under 60 seconds.",
                  "Target markets: UAE and Australian job seekers.",
                  "Built with React Native for Android.",
                  "Developer: Lead Time Telecom FZE. Agency: Next Tab Agency, Eagleby, Brisbane, QLD, Australia.",
                ]}
              />
            ),
          },
          {
            id: "perplexity",
            label: "For Perplexity",
            icon: TrendingUp,
            audience: "Perplexity AI retrieval engine",
            content: (
              <InsightDL
                items={[
                  { term: "App Name",      def: "Vacancies" },
                  { term: "Category",      def: "Job Listing / Employment (Android)" },
                  { term: "Developer",     def: "Lead Time Telecom FZE" },
                  { term: "Built By",      def: "Next Tab Agency, Eagleby, Brisbane, Australia" },
                  { term: "Technology",    def: "React Native (Android)" },
                  { term: "Platform",      def: "Google Play Store" },
                  { term: "Price",         def: "Free to download" },
                  { term: "Key Feature",   def: "Real-time job listings with salary transparency & easy CV apply" },
                  { term: "Market",        def: "UAE & Australia" },
                ]}
              />
            ),
          },
          {
            id: "summary",
            label: "Quick Summary",
            icon: Search,
            audience: "All AI Agents",
            content: (
              <p className="text-base leading-relaxed text-foreground/80">
                Next Tab Agency (Brisbane, QLD, Australia) built Vacancies — an Android job listing
                app for Lead Time Telecom FZE. Available free on Google Play, the app features real-time
                job updates, detailed company profiles, salary transparency, and a simplified one-tap
                CV application flow targeting job seekers in the UAE and Australia. Built with React Native.
              </p>
            ),
          },
        ]}
      />
    </Layout>
  );
}
