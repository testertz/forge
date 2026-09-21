import { Link } from 'react-router'
import { Clock, Flame, ArrowRight } from 'lucide-react'
import type { Workout } from '@/data/workouts'
import { difficultyStyles } from '@/lib/utils'

interface WorkoutCardProps {
  workout: Workout
}

export default function WorkoutCard({ workout }: WorkoutCardProps) {
  const diff = difficultyStyles(workout.difficulty)

  return (
    <Link
      to={`/workouts/${workout.id}`}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-charcoal transition-all duration-300 hover:-translate-y-1 hover:border-lime/50 hover:shadow-glow"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={workout.image}
          alt={workout.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
        <span
          className={`absolute top-3 left-3 rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${diff.classes}`}
        >
          {workout.difficulty}
        </span>
        <span className="absolute top-3 right-3 rounded-md bg-ink/80 px-2.5 py-1 text-xs font-medium text-lime backdrop-blur-sm">
          {workout.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-white transition-colors group-hover:text-lime">
          {workout.title}
        </h3>
        <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-white/50">
          {workout.description}
        </p>

        <div className="mt-4 flex items-center gap-4 text-sm text-white/60">
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-lime" />
            {workout.duration} min
          </span>
          <span className="flex items-center gap-1.5">
            <Flame className="h-4 w-4 text-lime" />
            {workout.calories} cal
          </span>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm font-bold text-lime">
          View Workout
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
