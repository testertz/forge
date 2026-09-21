import { useEffect } from 'react'
import { FlaskConical, Dumbbell, Users, Award, Zap, Heart } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import CTASection from '@/components/CTASection'
import Reveal from '@/components/Reveal'

const values = [
  {
    icon: FlaskConical,
    title: 'Science-Based',
    desc: 'Every workout and program is built on proven training principles — progressive overload, proper volume, and intelligent programming.',
  },
  {
    icon: Dumbbell,
    title: 'No Equipment Needed',
    desc: 'Many of our workouts require zero equipment. Whether you train at a gym or in your bedroom, FORGE has you covered.',
  },
  {
    icon: Users,
    title: 'For All Levels',
    desc: 'From your first push-up to your heaviest deadlift, our library scales with you. Beginner, intermediate, or advanced — you belong here.',
  },
]

const whyUsStats = [
  { value: '50+', label: 'Workouts' },
  { value: '20+', label: 'Exercises' },
  { value: '4', label: 'Programs' },
  { value: '0', label: 'Paywalls' },
]

const features = [
  {
    icon: Zap,
    title: 'Fast & Effective',
    desc: 'Sessions from 15 to 55 minutes. No wasted time, no fluff — just efficient training that fits your life.',
  },
  {
    icon: Award,
    title: 'Expert Programming',
    desc: 'Programs designed by certified trainers with years of experience building athletes from scratch.',
  },
  {
    icon: Heart,
    title: '100% Free',
    desc: 'No subscriptions, no hidden fees, no premium tiers. Quality fitness content should be accessible to everyone.',
  },
]

export default function About() {
  useEffect(() => {
    document.title = 'About — FORGE'
  }, [])

  return (
    <main className="min-h-screen bg-ink">
      <Navbar />

      <PageHeader
        eyebrow="About"
        title="Built by athletes, for athletes."
        subtitle="FORGE was created with one mission: make premium, science-based training accessible to everyone — completely free, no strings attached."
      />

      {/* Mission / Values */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.25em] text-lime">Our Values</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mb-14 text-center text-3xl font-black text-white md:text-5xl">
              What we stand for.
            </h2>
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 120}>
                <div className="group h-full rounded-2xl border border-white/10 bg-charcoal p-8 transition-all duration-300 hover:border-lime/50 hover:shadow-glow">
                  <span className="flex h-14 w-14 items-center justify-center rounded-xl bg-lime/10 text-lime transition-all duration-300 group-hover:bg-lime/20">
                    <v.icon className="h-6 w-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-black text-white">{v.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/50">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="border-y border-white/10 bg-charcoal py-20 md:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <h2 className="mb-3 text-center text-3xl font-black text-white md:text-5xl">Why FORGE?</h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mx-auto mb-14 max-w-xl text-center text-base text-white/50">
              We believe fitness shouldn't be behind a paywall. Here's what you get — completely free.
            </p>
          </Reveal>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {whyUsStats.map((s, i) => (
              <Reveal key={s.label} delay={i * 100}>
                <div className="text-center">
                  <div className="text-4xl font-black text-lime md:text-6xl">{s.value}</div>
                  <div className="mt-2 text-xs font-bold uppercase tracking-[0.2em] text-white/40">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 120}>
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-charcoal p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-lime/10 text-lime">
                      <f.icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-lg font-black text-white">{f.title}</h3>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/50">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Start training today."
        subtitle="No signup, no fees, no excuses. Just pick a workout and get to work."
        buttonText="Browse Workouts"
        buttonTo="/workouts"
      />

      <Footer />
    </main>
  )
}
