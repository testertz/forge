import { ArrowRight } from 'lucide-react'
import type { Exercise } from '@/data/exercises'
import { difficultyStyles } from '@/lib/utils'

interface ExerciseCardProps {
  exercise: Exercise
  onClick: () => void
}

export default function ExerciseCard({ exercise, onClick }: ExerciseCardProps) {
  const diff = difficultyStyles(exercise.difficulty)

  return (
    <button
      onClick={onClick}
      className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-charcoal text-left transition-all duration-300 hover:-translate-y-1 hover:border-lime/50 hover:shadow-glow"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={exercise.image}
          alt={exercise.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
        <span
          className={`absolute top-3 left-3 rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${diff.classes}`}
        >
          {exercise.difficulty}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-white transition-colors group-hover:text-lime">
          {exercise.name}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-white/50">
          {exercise.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {exercise.targetMuscles.map((m) => (
            <span
              key={m}
              className="rounded-md bg-lime/10 px-2 py-0.5 text-xs font-medium text-lime"
            >
              {m}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-white/40">{exercise.equipment}</span>
          <span className="flex items-center gap-1.5 text-sm font-bold text-lime">
            Details
            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </button>
  )
}
