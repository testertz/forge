import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router'
import { Calendar, Target, ArrowLeft, Check, Clock, Flame } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WorkoutCard from '@/components/WorkoutCard'
import CTASection from '@/components/CTASection'
import Reveal from '@/components/Reveal'
import { getProgramById } from '@/data/programs'
import { workouts } from '@/data/workouts'
import { difficultyStyles } from '@/lib/utils'

export default function ProgramDetail() {
  const { id } = useParams<{ id: string }>()
  const program = id ? getProgramById(id) : undefined

  useEffect(() => {
    document.title = program ? `${program.title} — FORGE` : 'FORGE'
  }, [program])

  if (!program) {
    return <Navigate to="/programs" replace />
  }

  const diff = difficultyStyles(program.level)
  const programWorkouts = program.workoutIds
    .map((wid) => workouts.find((w) => w.id === wid))
    .filter(Boolean) as typeof workouts

  return (
    <main className="min-h-screen bg-ink">
      <Navbar />

      {/* Hero banner */}
      <section className="relative h-[55vh] min-h-[380px] overflow-hidden">
        <img src={program.image} alt={program.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-5xl px-5 pb-12 md:px-8 md:pb-16">
            <Link
              to="/programs"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-lime"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to programs
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <span className={`rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wide ${diff.classes}`}>
                {program.level}
              </span>
              <span className="rounded-md bg-ink/80 px-3 py-1 text-xs font-medium text-lime backdrop-blur-sm">
                {program.duration}
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
              {program.title}
            </h1>
            <p className="mt-4 max-w-xl text-base text-white/60">{program.description}</p>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-white/10 bg-charcoal py-6">
        <div className="mx-auto flex max-w-5xl items-center justify-center gap-8 px-5 md:gap-16 md:px-8">
          <div className="flex items-center gap-2.5">
            <Calendar className="h-5 w-5 text-lime" />
            <div>
              <div className="text-xl font-black text-white">{program.duration}</div>
              <div className="text-xs text-white/40">duration</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Target className="h-5 w-5 text-lime" />
            <div>
              <div className="text-xl font-black text-white">{program.workoutsPerWeek}×</div>
              <div className="text-xs text-white/40">per week</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Clock className="h-5 w-5 text-lime" />
            <div>
              <div className="text-xl font-black text-white">{programWorkouts.length}</div>
              <div className="text-xs text-white/40">workouts</div>
            </div>
          </div>
        </div>
      </section>

      {/* Goals + workouts */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
            {/* Goals sidebar */}
            <div className="lg:sticky lg:top-24 lg:self-start">
              <Reveal>
                <h2 className="text-2xl font-black text-white md:text-3xl">Program goals</h2>
              </Reveal>
              <Reveal delay={100}>
                <ul className="mt-6 space-y-3">
                  {program.goals.map((g) => (
                    <li
                      key={g}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-charcoal px-4 py-3.5"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-lime/10">
                        <Check className="h-4 w-4 text-lime" />
                      </span>
                      <span className="text-sm font-medium text-white">{g}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
              <Reveal delay={200}>
                <div className="mt-6 rounded-xl border border-lime/30 bg-lime/5 p-5">
                  <div className="flex items-center gap-2 text-lime">
                    <Flame className="h-5 w-5" />
                    <span className="font-bold">Ready to commit?</span>
                  </div>
                  <p className="mt-2 text-sm text-white/50">
                    {program.workoutsPerWeek} sessions per week for {program.duration.toLowerCase()}. No excuses.
                  </p>
                  <Link
                    to="/workouts"
                    className="mt-4 flex items-center justify-center rounded-lg bg-lime py-3 text-sm font-bold text-ink transition-all hover:bg-lime-dark active:scale-95"
                  >
                    Start Training
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Workouts */}
            <div>
              <Reveal>
                <h2 className="mb-6 text-2xl font-black text-white md:text-3xl">Included workouts</h2>
              </Reveal>
              <div className="grid gap-5 sm:grid-cols-2">
                {programWorkouts.map((w, i) => (
                  <Reveal key={w.id} delay={i * 80}>
                    <WorkoutCard workout={w} />
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Your transformation starts now."
        subtitle="Commit to the plan, trust the process, and put in the work. Results will follow."
        buttonText="Explore More Workouts"
        buttonTo="/workouts"
      />

      <Footer />
    </main>
  )
}
