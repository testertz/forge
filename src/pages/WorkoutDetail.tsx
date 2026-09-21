import { useEffect } from 'react'
import { Link, useParams, Navigate } from 'react-router'
import { Clock, Flame, Dumbbell, Tag, ArrowLeft, ChevronDown } from 'lucide-react'
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '@/components/ui/accordion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WorkoutCard from '@/components/WorkoutCard'
import Reveal from '@/components/Reveal'
import { getWorkoutById, getRelatedWorkouts } from '@/data/workouts'
import { exercises as allExercises } from '@/data/exercises'
import { difficultyStyles } from '@/lib/utils'

export default function WorkoutDetail() {
  const { id } = useParams<{ id: string }>()
  const workout = id ? getWorkoutById(id) : undefined

  useEffect(() => {
    document.title = workout ? `${workout.title} — FORGE` : 'FORGE'
  }, [workout])

  if (!workout) {
    return <Navigate to="/workouts" replace />
  }

  const diff = difficultyStyles(workout.difficulty)
  const related = getRelatedWorkouts(workout)

  const exerciseDetails = workout.exercises.map((ref) => {
    const ex = allExercises.find((e) => e.id === ref.exerciseId)
    return { ref, exercise: ex }
  })

  return (
    <main className="min-h-screen bg-ink">
      <Navbar />

      {/* Hero banner */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src={workout.image}
          alt={workout.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/60 to-transparent" />

        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-5xl px-5 pb-12 md:px-8 md:pb-16">
            <Link
              to="/workouts"
              className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-lime"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to workouts
            </Link>
            <div className="flex flex-wrap items-center gap-3">
              <span className={`rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wide ${diff.classes}`}>
                {workout.difficulty}
              </span>
              <span className="rounded-md bg-ink/80 px-3 py-1 text-xs font-medium text-lime backdrop-blur-sm">
                {workout.category}
              </span>
            </div>
            <h1 className="mt-4 text-4xl font-black leading-tight text-white md:text-6xl">
              {workout.title}
            </h1>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-white/10 bg-charcoal py-6">
        <div className="mx-auto flex max-w-5xl items-center justify-center gap-8 px-5 md:gap-16 md:px-8">
          <div className="flex items-center gap-2.5">
            <Clock className="h-5 w-5 text-lime" />
            <div>
              <div className="text-xl font-black text-white">{workout.duration}</div>
              <div className="text-xs text-white/40">minutes</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Flame className="h-5 w-5 text-lime" />
            <div>
              <div className="text-xl font-black text-white">{workout.calories}</div>
              <div className="text-xs text-white/40">calories</div>
            </div>
          </div>
          <div className="flex items-center gap-2.5">
            <Dumbbell className="h-5 w-5 text-lime" />
            <div>
              <div className="text-xl font-black text-white">{workout.exercises.length}</div>
              <div className="text-xs text-white/40">exercises</div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview + exercises */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <Reveal>
            <h2 className="text-2xl font-black text-white md:text-3xl">Overview</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-4 text-base leading-relaxed text-white/60">{workout.description}</p>
          </Reveal>

          <Reveal delay={200}>
            <div className="mt-6 flex flex-wrap gap-2">
              {workout.tags.map((t) => (
                <span
                  key={t}
                  className="flex items-center gap-1.5 rounded-md border border-white/10 px-3 py-1.5 text-xs font-medium text-white/60"
                >
                  <Tag className="h-3 w-3 text-lime" />
                  {t}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={300}>
            <h2 className="mt-14 text-2xl font-black text-white md:text-3xl">
              Exercise List
            </h2>
          </Reveal>

          <div className="mt-6">
            <Accordion type="single" collapsible className="flex flex-col gap-3">
              {exerciseDetails.map(({ ref, exercise }, i) => (
                <AccordionItem
                  key={ref.exerciseId}
                  value={`ex-${i}`}
                  className="overflow-hidden rounded-xl border border-white/10 bg-charcoal"
                >
                  <AccordionTrigger className="group flex items-center justify-between gap-4 px-5 py-5 text-left hover:no-underline">
                    <div className="flex items-center gap-4">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-lime/10 text-sm font-black text-lime">
                        {i + 1}
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-white group-hover:text-lime">
                          {exercise?.name ?? 'Unknown Exercise'}
                        </h3>
                        <p className="mt-0.5 text-xs text-white/40">
                          {exercise?.targetMuscles.join(' · ')}
                        </p>
                      </div>
                    </div>
                    <div className="hidden items-center gap-4 text-sm sm:flex">
                      <span className="font-bold text-white">
                        {ref.sets} × {ref.reps}
                      </span>
                      <span className="text-white/40">{ref.restTime}s rest</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-5 pb-5">
                    {exercise && (
                      <div className="pt-2">
                        <p className="text-sm leading-relaxed text-white/60">{exercise.description}</p>

                        <div className="mt-4 flex flex-wrap gap-3 text-xs">
                          <span className="rounded-md bg-white/5 px-3 py-1.5 text-white/60">
                            Equipment: <span className="font-bold text-white">{exercise.equipment}</span>
                          </span>
                          <span className="rounded-md bg-white/5 px-3 py-1.5 text-white/60">
                            Difficulty: <span className="font-bold text-white">{exercise.difficulty}</span>
                          </span>
                        </div>

                        <div className="mt-5">
                          <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-lime">Instructions</h4>
                          <ol className="space-y-2.5">
                            {exercise.instructions.map((step, si) => (
                              <li key={si} className="flex gap-3 text-sm text-white/60">
                                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-lime/10 text-xs font-bold text-lime">
                                  {si + 1}
                                </span>
                                {step}
                              </li>
                            ))}
                          </ol>
                        </div>

                        <Link
                          to="/exercises"
                          className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-lime transition-colors hover:text-lime-dark"
                        >
                          View all exercises
                          <ChevronDown className="h-4 w-4 -rotate-90" />
                        </Link>
                      </div>
                    )}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Mobile sets/reps summary */}
          <div className="mt-6 space-y-2 sm:hidden">
            {exerciseDetails.map(({ ref, exercise }, i) => (
              <div key={i} className="flex items-center justify-between rounded-lg border border-white/10 bg-charcoal px-4 py-3">
                <span className="text-sm font-medium text-white">{exercise?.name}</span>
                <span className="text-sm text-white/60">{ref.sets} × {ref.reps}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related workouts */}
      {related.length > 0 && (
        <section className="border-t border-white/10 bg-charcoal py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <Reveal>
              <h2 className="mb-10 text-2xl font-black text-white md:text-3xl">Related workouts</h2>
            </Reveal>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((w, i) => (
                <Reveal key={w.id} delay={i * 100}>
                  <WorkoutCard workout={w} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  )
}
