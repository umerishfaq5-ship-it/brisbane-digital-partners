import { Link } from "react-router-dom";
import { ArrowRight, Smartphone, Dumbbell, Utensils, TrendingUp, Bell, Flame, Check, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

/**
 * Concept build: "FitPath Coach", a fictional fitness coaching app designed by Next Tab Agency.
 * Kept at the original /portfolio/my-fitness-coach/ URL. Clearly labelled as a concept.
 */

const Phone = ({ children, label }: { children: React.ReactNode; label: string }) => (
  <figure className="flex flex-col items-center">
    <div className="w-[230px] h-[470px] rounded-[38px] bg-slate-900 p-2.5 shadow-2xl">
      <div className="w-full h-full rounded-[30px] bg-white overflow-hidden flex flex-col text-slate-800">
        <div className="h-6 flex items-center justify-between px-5 text-[9px] font-semibold text-slate-500"><span>9:41</span><span>●●● 5G</span></div>
        {children}
      </div>
    </div>
    <figcaption className="mt-3 text-xs font-semibold text-muted-foreground">{label}</figcaption>
  </figure>
);

const Bar = ({ v, d }: { v: number; d: string }) => (
  <div className="flex flex-col items-center gap-1 flex-1">
    <div className="w-full rounded-t bg-emerald-500" style={{ height: `${v}px` }} />
    <span className="text-[8px] text-slate-400">{d}</span>
  </div>
);

export default function MyFitnessCoach() {
  return (
    <Layout aiSummary="FitPath Coach is a concept fitness coaching app designed by Next Tab Agency to show how we plan and design mobile apps: workouts, meal logging and progress tracking in one React Native app. It is a fictional product used as a portfolio example.">
      <SEO
        title="FitPath Coach – Fitness App Concept Build"
        description="Concept build by Next Tab Agency: a fitness coaching app with daily workouts, meal logging and progress tracking. See the screens, the brief and how we would build it in React Native."
        canonical="/portfolio/my-fitness-coach"
        breadcrumbs={[
          { name: "Home", url: "https://nexttabagency.com/" },
          { name: "Portfolio", url: "https://nexttabagency.com/portfolio/" },
          { name: "FitPath Coach (concept)", url: "https://nexttabagency.com/portfolio/my-fitness-coach/" },
        ]}
      />

      <div className="bg-slate-900 text-white text-xs sm:text-sm px-4 py-2 text-center mt-16">
        <strong>Concept build</strong> by Next Tab Agency. FitPath Coach is a fictional app used to show how we design mobile apps.
      </div>

      {/* Hero */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-background to-background dark:from-emerald-950/20">
        <div className="container grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold uppercase tracking-[0.2em] mb-6">
              <Smartphone className="w-3.5 h-3.5" /> Mobile App · Concept Build
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl leading-tight text-foreground mb-6">
              FitPath Coach: a personal trainer in your pocket
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              A fitness coaching app for gyms and personal trainers who want to keep clients training between sessions.
              Today's workout, what to eat and how you're progressing, all on one screen each. Designed by Next Tab Agency
              as a concept to show how we plan and build apps.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="accent" size="lg" asChild><Link to="/contact/">Talk about your app idea <ArrowRight className="w-4 h-4 ml-2" /></Link></Button>
              <Button variant="outline" size="lg" asChild><Link to="/services/mobile-apps/">Mobile app development</Link></Button>
            </div>
          </div>
          <div className="flex justify-center gap-5 overflow-hidden">
            <Phone label="Today's workout">
              <div className="px-4 pt-2 pb-3 bg-emerald-600 text-white">
                <p className="text-[10px] opacity-80">Tuesday · Week 3</p>
                <p className="text-sm font-bold">Upper body strength</p>
                <p className="text-[10px] opacity-80 flex items-center gap-1"><Clock className="w-3 h-3" /> 45 min · 6 exercises</p>
              </div>
              <div className="p-3 space-y-2 flex-1">
                {[["Bench press", "4 × 8 · 60 kg", true], ["Bent-over row", "4 × 10 · 40 kg", true], ["Shoulder press", "3 × 10 · 20 kg", false], ["Pull-ups", "3 × max", false], ["Face pulls", "3 × 15", false]].map(([n, s, done]) => (
                  <div key={n as string} className="flex items-center gap-2 p-2 rounded-xl border border-slate-200">
                    <span className={`w-5 h-5 rounded-full grid place-items-center ${done ? "bg-emerald-500 text-white" : "border border-slate-300"}`}>{done ? <Check className="w-3 h-3" /> : null}</span>
                    <div><p className="text-[11px] font-semibold">{n}</p><p className="text-[9px] text-slate-500">{s}</p></div>
                  </div>
                ))}
              </div>
              <div className="m-3 py-2 rounded-xl bg-emerald-600 text-white text-center text-xs font-bold">Start next set</div>
            </Phone>
            <div className="hidden sm:block">
              <Phone label="Progress">
                <div className="p-4 flex-1">
                  <p className="text-sm font-bold mb-1">This week</p>
                  <p className="text-[10px] text-slate-500 mb-4">4 of 5 sessions done</p>
                  <div className="flex items-end gap-1.5 h-28 mb-4">
                    <Bar v={60} d="M" /><Bar v={85} d="T" /><Bar v={20} d="W" /><Bar v={95} d="T" /><Bar v={70} d="F" /><Bar v={10} d="S" /><Bar v={10} d="S" />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 rounded-xl bg-emerald-50"><p className="text-[9px] text-slate-500">Streak</p><p className="text-sm font-black flex items-center gap-1"><Flame className="w-3.5 h-3.5 text-orange-500" />12 days</p></div>
                    <div className="p-2 rounded-xl bg-emerald-50"><p className="text-[9px] text-slate-500">Bench PB</p><p className="text-sm font-black">62.5 kg</p></div>
                    <div className="p-2 rounded-xl bg-emerald-50"><p className="text-[9px] text-slate-500">Calories avg</p><p className="text-sm font-black">2,140</p></div>
                    <div className="p-2 rounded-xl bg-emerald-50"><p className="text-[9px] text-slate-500">Protein avg</p><p className="text-sm font-black">142 g</p></div>
                  </div>
                </div>
              </Phone>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl space-y-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">The brief</p>
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">Keep clients training between sessions</h2>
            <p className="text-muted-foreground leading-relaxed">
              Personal trainers and small gyms lose most clients in the first 90 days, and usually in the gaps between
              sessions: no plan on the days alone, no idea what to eat, no sign they're improving. Generic fitness apps don't
              help, because the program doesn't come from their coach. The brief for this concept: one app a trainer can hand
              to every client, with the coach's own program, simple meal logging and progress the client can actually see.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">What we designed</p>
            <h2 className="font-heading font-bold text-3xl text-foreground mb-6">Three screens that do the job</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                { icon: Dumbbell, t: "Today's workout", d: "The coach's program for today only. Sets, reps and weight, tick as you go, rest timer between sets." },
                { icon: Utensils, t: "Meal logging", d: "Photo or quick-add, with a daily protein and calorie target set by the coach, not a generic formula." },
                { icon: TrendingUp, t: "Progress", d: "Sessions this week, streak, personal bests and averages. The proof that keeps people coming back." },
                { icon: Bell, t: "Coach check-ins", d: "Reminders on training days and a weekly message from the coach when a client goes quiet." },
              ].map((f) => (
                <div key={f.t} className="p-5 rounded-2xl border border-border bg-card">
                  <f.icon className="w-6 h-6 text-accent mb-3" />
                  <h3 className="font-heading font-bold text-foreground mb-1">{f.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{f.d}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">How we would build it</p>
            <h2 className="font-heading font-bold text-3xl text-foreground mb-4">One codebase, both app stores</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              React Native for iOS and Android from a single codebase, a simple web dashboard for the coach to write programs,
              and push notifications for reminders. A first version with the three core screens is a 10 to 14 week build;
              meal photos and payments for memberships come in version two.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Have an app idea for your gym, clinic or business? See our{" "}
              <Link to="/services/mobile-apps/" className="text-accent font-semibold underline underline-offset-4">mobile app development</Link>{" "}
              service, the{" "}
              <Link to="/demos/ironbark-fitness/" className="text-accent font-semibold underline underline-offset-4">Ironbark Fitness gym website concept</Link>, or our real client work in the{" "}
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
