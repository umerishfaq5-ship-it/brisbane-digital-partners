import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Dumbbell, ListChecks, TrendingUp, Watch, Star, Download, Users } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

/**
 * JEFIT – app development work. URL kept at /portfolio/my-fitness-coach/ on purpose (existing links).
 * JEFIT is owned and published by Jefit Inc.; Next Tab Agency worked on its development.
 * Store figures are public Google Play numbers (Nov 2026), not results we claim.
 */

const PLAY_URL = "https://play.google.com/store/apps/details?id=je.fit";

const storeStats = [
  { icon: Star, value: "4.6★", label: "Google Play rating" },
  { icon: Users, value: "90K+", label: "Google Play reviews" },
  { icon: Download, value: "5M+", label: "Downloads on Google Play" },
];

const features = [
  { icon: ListChecks, t: "Workout tracker", d: "Log sets, reps and weights for every exercise, with rest timers and progressive overload built in." },
  { icon: Dumbbell, t: "Plans and exercise library", d: "1,500+ exercises with HD form videos and 850+ ready-made gym plans, plus a planner for custom routines." },
  { icon: TrendingUp, t: "Progress tracking", d: "Charts for strength gains, personal records and training history so users can see they're improving." },
  { icon: Watch, t: "Wear OS app", d: "Log workouts straight from a smartwatch without reaching for the phone between sets." },
];

export default function MyFitnessCoach() {
  return (
    <Layout aiSummary="JEFIT Gym Workout Tracker is a fitness app published by Jefit Inc. with 5M+ downloads and a 4.6-star Google Play rating. Next Tab Agency worked on the app's development; Next Tab Agency does not own the app.">
      <SEO
        title="JEFIT Workout App – App Development Work"
        description="Next Tab Agency worked on the development of JEFIT, the gym workout tracker app by Jefit Inc. with 5M+ downloads and a 4.6★ rating on Google Play. See the app and what it does."
        canonical="/portfolio/my-fitness-coach"
        breadcrumbs={[
          { name: "Home", url: "https://nexttabagency.com/" },
          { name: "Portfolio", url: "https://nexttabagency.com/portfolio/" },
          { name: "JEFIT Workout App", url: "https://nexttabagency.com/portfolio/my-fitness-coach/" },
        ]}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-br from-sky-50 via-background to-background dark:from-sky-950/20">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-6">
              <Smartphone className="w-3.5 h-3.5" /> Mobile App · Development Work
            </span>
            <div className="flex items-center gap-4 mb-6">
              <img src="/assets/jefit-icon.png" alt="JEFIT app icon" width={72} height={72} className="w-18 h-18 rounded-2xl shadow-lg" />
              <div>
                <h1 className="font-heading font-bold text-3xl md:text-5xl leading-tight text-foreground">JEFIT Gym Workout Tracker</h1>
                <p className="text-sm text-muted-foreground mt-1">App by Jefit Inc. · Development work by Next Tab Agency</p>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              JEFIT is one of the best-known gym workout apps: a workout planner, tracker and exercise library used by
              millions of people. We worked on the development of the app. JEFIT is owned and published by Jefit Inc.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="accent" size="lg" asChild>
                <a href={PLAY_URL} target="_blank" rel="noopener noreferrer">View on Google Play <ArrowRight className="w-4 h-4 ml-2" /></a>
              </Button>
              <Button variant="outline" size="lg" asChild><Link to="/contact/">Talk about your app</Link></Button>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            {[1, 2, 3].map((n) => (
              <img
                key={n}
                src={`/assets/jefit-shot-${n}.webp`}
                alt={`JEFIT app screenshot ${n} from Google Play`}
                width={185}
                height={400}
                className={`w-[30%] max-w-[185px] rounded-2xl shadow-2xl border border-border ${n === 2 ? "-translate-y-6" : ""}`}
                loading={n === 1 ? "eager" : "lazy"}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Store stats */}
      <section className="border-y border-border bg-muted/30 py-8">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-3 gap-6 text-center">
            {storeStats.map((s) => (
              <div key={s.label}>
                <s.icon className="w-5 h-5 text-accent mx-auto mb-2" />
                <p className="font-heading font-black text-3xl text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-muted-foreground/70 text-center mt-4">Public Google Play figures for JEFIT, November 2026.</p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl space-y-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">The app</p>
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">A gym app people open every training day</h2>
            <p className="text-muted-foreground leading-relaxed">
              JEFIT helps gym-goers plan workouts, log every set and see their strength go up over time. An app like this
              lives or dies on the moments between sets: logging has to take one tap, the next exercise has to be ready, and
              nothing can lag when someone is standing at a rack with a phone in one hand. Working on an app at this scale
              taught us what matters in fitness apps: speed, offline reliability, and screens simple enough to use mid-workout.
            </p>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">What the app does</p>
            <h2 className="font-heading font-bold text-3xl text-foreground mb-6">Core features</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((f) => (
                <div key={f.t} className="p-5 rounded-2xl border border-border bg-card">
                  <f.icon className="w-6 h-6 text-accent mb-3" />
                  <h3 className="font-heading font-bold text-foreground mb-1">{f.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">What this means for your project</p>
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Building a fitness or booking app?</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We bring the same lessons to apps for gyms, personal trainers, clinics and service businesses: fast logging,
              clear progress screens, reminders that bring people back, and one codebase for iOS and Android.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              See our{" "}
              <Link to="/services/mobile-apps/" className="text-accent font-semibold underline underline-offset-4">mobile app development</Link>{" "}
              service, the{" "}
              <Link to="/demos/ironbark-fitness/" className="text-accent font-semibold underline underline-offset-4">gym website concept for Ironbark Fitness</Link>, or more work in our{" "}
              <Link to="/portfolio/" className="text-accent font-semibold underline underline-offset-4">portfolio</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 surface-teal text-primary-foreground">
        <div className="container max-w-2xl text-center">
          <h2 className="font-heading font-bold text-3xl mb-4">Got an app idea?</h2>
          <p className="text-primary-foreground/70 mb-8">Tell Hamza what it should do. You'll get a plain-English plan, a timeline and a price.</p>
          <Button variant="accent" size="lg" asChild><Link to="/contact/">Start a conversation <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
        </div>
      </section>
    </Layout>
  );
}
