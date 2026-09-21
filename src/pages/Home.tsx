import { useEffect } from 'react'
import { Link } from 'react-router'
import { Dumbbell, Heart, Zap, StretchHorizontal, Target, Home as HomeIcon, ArrowRight } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import WorkoutCard from '@/components/WorkoutCard'
import ProgramCard from '@/components/ProgramCard'
import CTASection from '@/components/CTASection'
import Reveal from '@/components/Reveal'
import { workouts } from '@/data/workouts'
import { programs } from '@/data/programs'

const stats = [
  { value: '50+', label: 'Workouts' },
  { value: '20+', label: 'Exercises' },
  { value: '4', label: 'Programs' },
  { value: '100%', label: 'Free' },
]

const categories = [
  { icon: Dumbbell, label: 'Strength', desc: 'Build raw power' },
  { icon: Heart, label: 'Cardio', desc: 'Boost endurance' },
  { icon: Zap, label: 'HIIT', desc: 'Max burn, min time' },
  { icon: StretchHorizontal, label: 'Flexibility', desc: 'Move better' },
  { icon: Target, label: 'Core', desc: 'Forge stability' },
  { icon: HomeIcon, label: 'Home', desc: 'No gym needed' },
]

export default function Home() {
  const featured = workouts.filter((w) => w.featured).slice(0, 6)

  useEffect(() => {
    document.title = 'FORGE — Train Harder. Live Stronger.'
  }, [])

  return (
    <main className="min-h-screen bg-ink">
      <Navbar />
      <HeroSection />

      {/* Stats bar */}
      <section className="border-y border-white/10 bg-charcoal py-10 md:py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-8 px-5 md:grid-cols-4 md:px-8">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 100}>
              <div className="text-center">
                <div className="text-4xl font-black text-lime md:text-5xl">{s.value}</div>
                <div className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured workouts */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Reveal>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-lime">Featured</p>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
                  Workouts that hit hard.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={240}>
              <Link
                to="/workouts"
                className="flex items-center gap-2 text-sm font-bold text-lime transition-colors hover:text-lime-dark"
              >
                View all workouts
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((w, i) => (
              <Reveal key={w.id} delay={i * 100}>
                <WorkoutCard workout={w} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="border-y border-white/10 bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.25em] text-lime">Categories</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="mb-14 text-center text-3xl font-black text-white md:text-5xl">
              Find your focus.
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((c, i) => (
              <Reveal key={c.label} delay={i * 80}>
                <Link
                  to="/workouts"
                  className="group flex flex-col items-center gap-4 rounded-xl border border-white/10 bg-ink p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-lime/50"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 text-lime transition-all duration-300 group-hover:border-lime group-hover:bg-lime/10">
                    <c.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="font-bold text-white transition-colors group-hover:text-lime">{c.label}</div>
                    <div className="mt-1 text-xs text-white/40">{c.desc}</div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <Reveal>
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-lime">Programs</p>
              </Reveal>
              <Reveal delay={120}>
                <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
                  Structured paths to results.
                </h2>
              </Reveal>
            </div>
            <Reveal delay={240}>
              <Link
                to="/programs"
                className="flex items-center gap-2 text-sm font-bold text-lime transition-colors hover:text-lime-dark"
              >
                View all programs
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {programs.map((p, i) => (
              <Reveal key={p.id} delay={i * 120}>
                <ProgramCard program={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to forge your body?"
        subtitle="Join thousands of athletes training with FORGE. No signup, no paywall — just put in the work."
        buttonText="Start Training"
        buttonTo="/workouts"
      />

      <Footer />
    </main>
  )
}
