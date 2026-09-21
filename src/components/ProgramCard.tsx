import { Link } from 'react-router'
import { Calendar, Target, ArrowRight } from 'lucide-react'
import type { Program } from '@/data/programs'
import { difficultyStyles } from '@/lib/utils'

interface ProgramCardProps {
  program: Program
}

export default function ProgramCard({ program }: ProgramCardProps) {
  const diff = difficultyStyles(program.level)

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-charcoal transition-all duration-300 hover:-translate-y-1 hover:border-lime/50 hover:shadow-glow">
      <div className="relative h-64 overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        <span
          className={`absolute top-4 left-4 rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wide ${diff.classes}`}
        >
          {program.level}
        </span>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-black text-white">{program.title}</h3>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-sm leading-relaxed text-white/50">{program.description}</p>

        <div className="mt-5 flex items-center gap-4 text-sm text-white/70">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-lime" />
            {program.duration}
          </span>
          <span className="flex items-center gap-1.5">
            <Target className="h-4 w-4 text-lime" />
            {program.workoutsPerWeek}× / week
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {program.goals.slice(0, 3).map((g) => (
            <span
              key={g}
              className="rounded-md border border-white/10 px-2.5 py-1 text-xs text-white/60"
            >
              {g}
            </span>
          ))}
        </div>

        <Link
          to={`/programs/${program.id}`}
          className="mt-6 flex items-center justify-center gap-2 rounded-lg border border-lime/40 py-3 text-sm font-bold text-lime transition-all duration-200 hover:bg-lime hover:text-ink active:scale-95"
        >
          Start Program
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
