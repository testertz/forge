import { useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ProgramCard from '@/components/ProgramCard'
import CTASection from '@/components/CTASection'
import Reveal from '@/components/Reveal'
import { programs } from '@/data/programs'

export default function Programs() {
  useEffect(() => {
    document.title = 'Programs — FORGE'
  }, [])

  return (
    <main className="min-h-screen bg-ink">
      <Navbar />

      <PageHeader
        eyebrow="Programs"
        title="Follow the plan. Get results."
        subtitle="Structured multi-week programs designed by fitness experts. Pick your level, commit to the schedule, and watch yourself transform."
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {programs.map((p, i) => (
              <Reveal key={p.id} delay={i * 120}>
                <ProgramCard program={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Not sure where to start?"
        subtitle="Begin with the Beginner Foundation program — it's designed to build habits and strength from day one."
        buttonText="Browse All Workouts"
        buttonTo="/workouts"
      />

      <Footer />
    </main>
  )
}
