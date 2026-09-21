import { useEffect, useMemo, useState } from 'react'
import { SearchX } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import WorkoutCard from '@/components/WorkoutCard'
import SearchBar from '@/components/SearchBar'
import FilterBar from '@/components/FilterBar'
import Reveal from '@/components/Reveal'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  workouts,
  workoutCategories,
  difficulties,
  type WorkoutCategory,
} from '@/data/workouts'
import type { Difficulty } from '@/data/exercises'

type DurationFilter = 'All' | 'short' | 'medium' | 'long'
const durationOptions: DurationFilter[] = ['All', 'short', 'medium', 'long']
const durationLabels: Record<DurationFilter, string> = {
  All: 'Any duration',
  short: 'Under 20 min',
  medium: '20–40 min',
  long: '40+ min',
}

export default function Workouts() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<'All' | WorkoutCategory>('All')
  const [difficulty, setDifficulty] = useState<'All' | Difficulty>('All')
  const [duration, setDuration] = useState<DurationFilter>('All')

  useEffect(() => {
    document.title = 'Workouts — FORGE'
  }, [])

  const filtered = useMemo(() => {
    return workouts.filter((w) => {
      if (search && !w.title.toLowerCase().includes(search.toLowerCase())) return false
      if (category !== 'All' && w.category !== category) return false
      if (difficulty !== 'All' && w.difficulty !== difficulty) return false
      if (duration === 'short' && w.duration >= 20) return false
      if (duration === 'medium' && (w.duration < 20 || w.duration > 40)) return false
      if (duration === 'long' && w.duration < 40) return false
      return true
    })
  }, [search, category, difficulty, duration])

  return (
    <main className="min-h-screen bg-ink">
      <Navbar />

      <PageHeader
        eyebrow="Workouts"
        title="Every workout. Every level."
        subtitle="Filter by category, difficulty, and duration to find the session that fits your goals — and your schedule."
      />

      {/* Filters */}
      <section className="border-b border-white/10 bg-charcoal py-8">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/40">Search</span>
              <SearchBar value={search} onChange={setSearch} placeholder="Search workouts..." />
            </div>
            <FilterBar
              label="Category"
              options={workoutCategories}
              value={category}
              onChange={setCategory}
            />
            <FilterBar
              label="Difficulty"
              options={difficulties}
              value={difficulty}
              onChange={setDifficulty}
            />
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white/40">Duration</span>
              <Select
                value={duration}
                onValueChange={(v) => setDuration(v as DurationFilter)}
              >
                <SelectTrigger className="w-full border-white/10 bg-charcoal text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="border-white/10 bg-charcoal">
                  {durationOptions.map((d) => (
                    <SelectItem key={d} value={d} className="text-white focus:bg-white/10 focus:text-lime">
                      {durationLabels[d]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between">
            <p className="text-sm text-white/40">
              <span className="font-bold text-lime">{filtered.length}</span> workout{filtered.length !== 1 ? 's' : ''} found
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {filtered.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((w, i) => (
                <Reveal key={w.id} delay={i * 60}>
                  <WorkoutCard workout={w} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 text-white/30">
                <SearchX className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-white">No results found</h3>
              <p className="mt-2 text-sm text-white/40">
                Try adjusting your filters or search term.
              </p>
              <button
                onClick={() => {
                  setSearch('')
                  setCategory('All')
                  setDifficulty('All')
                  setDuration('All')
                }}
                className="mt-6 rounded-lg border border-lime/40 px-5 py-2.5 text-sm font-bold text-lime transition-all hover:bg-lime hover:text-ink"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
