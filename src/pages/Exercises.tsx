import { useEffect, useMemo, useState } from 'react'
import { Dumbbell } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import ExerciseCard from '@/components/ExerciseCard'
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
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import {
  exercises,
  exerciseCategories,
  type Exercise,
  type ExerciseCategory,
} from '@/data/exercises'
import { difficultyStyles } from '@/lib/utils'

export default function Exercises() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState<'All' | ExerciseCategory>('All')
  const [muscle, setMuscle] = useState<string>('All')
  const [selected, setSelected] = useState<Exercise | null>(null)

  useEffect(() => {
    document.title = 'Exercises — FORGE'
  }, [])

  const allMuscles = useMemo(() => {
    const set = new Set<string>()
    exercises.forEach((e) => e.targetMuscles.forEach((m) => set.add(m)))
    return ['All', ...Array.from(set).sort()]
  }, [])

  const filtered = useMemo(() => {
    return exercises.filter((e) => {
      if (search && !e.name.toLowerCase().includes(search.toLowerCase())) return false
      if (category !== 'All' && e.category !== category) return false
      if (muscle !== 'All' && !e.targetMuscles.includes(muscle)) return false
      return true
    })
  }, [search, category, muscle])

  const selectedDiff = selected ? difficultyStyles(selected.difficulty) : null

  return (
    <main className="min-h-screen bg-ink">
      <Navbar />

      <PageHeader
        eyebrow="Exercises"
        title="Master every movement."
        subtitle="Browse our complete exercise library with detailed instructions, target muscles, and equipment guides."
      />

      {/* Filters */}
      <section className="border-b border-white/10 bg-charcoal py-8">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="grid gap-5 md:grid-cols-3">
            <div>
              <span className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/40">Search</span>
              <SearchBar value={search} onChange={setSearch} placeholder="Search exercises..." />
            </div>
            <FilterBar
              label="Category"
              options={['All', ...exerciseCategories] as const}
              value={category}
              onChange={setCategory}
            />
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-white/40">Target Muscle</span>
              <Select value={muscle} onValueChange={setMuscle}>
                <SelectTrigger className="w-full border-white/10 bg-charcoal text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="border-white/10 bg-charcoal">
                  {allMuscles.map((m) => (
                    <SelectItem key={m} value={m} className="text-white focus:bg-white/10 focus:text-lime">
                      {m}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-5">
            <p className="text-sm text-white/40">
              <span className="font-bold text-lime">{filtered.length}</span> exercise{filtered.length !== 1 ? 's' : ''} found
            </p>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          {filtered.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filtered.map((e, i) => (
                <Reveal key={e.id} delay={i * 50}>
                  <ExerciseCard exercise={e} onClick={() => setSelected(e)} />
                </Reveal>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 text-white/30">
                <Dumbbell className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-xl font-bold text-white">No exercises found</h3>
              <p className="mt-2 text-sm text-white/40">Try adjusting your filters or search term.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />

      {/* Exercise detail dialog */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-h-[90vh] overflow-y-auto border-white/10 bg-charcoal p-0 sm:max-w-lg">
          {selected && selectedDiff && (
            <>
              <div className="relative h-56 overflow-hidden rounded-t-lg">
                <img src={selected.image} alt={selected.name} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent" />
                <span className={`absolute top-4 left-4 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wide ${selectedDiff.classes}`}>
                  {selected.difficulty}
                </span>
              </div>
              <DialogHeader className="px-6 pt-5">
                <DialogTitle className="text-2xl font-black text-white">{selected.name}</DialogTitle>
                <DialogDescription className="text-sm text-white/50">
                  {selected.description}
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-5 px-6 pb-6">
                <div className="flex flex-wrap gap-2">
                  {selected.targetMuscles.map((m) => (
                    <span key={m} className="rounded-md bg-lime/10 px-2.5 py-1 text-xs font-medium text-lime">
                      {m}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-white/10 bg-ink p-4">
                    <div className="text-xs text-white/40">Equipment</div>
                    <div className="mt-1 font-bold text-white">{selected.equipment}</div>
                  </div>
                  <div className="rounded-lg border border-white/10 bg-ink p-4">
                    <div className="text-xs text-white/40">Category</div>
                    <div className="mt-1 font-bold text-white">{selected.category}</div>
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-lime">Instructions</h4>
                  <ol className="space-y-3">
                    {selected.instructions.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-white/70">
                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-lime/10 text-xs font-bold text-lime">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </main>
  )
}
