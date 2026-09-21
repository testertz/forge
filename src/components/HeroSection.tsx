import { Link } from 'react-router'
import { ArrowRight, ChevronDown } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/17956264/pexels-photo-17956264.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Athlete training"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-5 pt-20 text-center md:px-8">
        <div className="animate-fade-in-up">
          <span className="inline-block rounded-full border border-lime/30 bg-lime/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-lime">
            100% Free Forever
          </span>
        </div>

        <h1 className="mt-8 animate-fade-in-up text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl" style={{ animationDelay: '100ms' }}>
          TRAIN HARDER.
          <br />
          <span className="text-gradient-lime">LIVE STRONGER.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl animate-fade-in-up text-base text-white/60 md:text-lg" style={{ animationDelay: '250ms' }}>
          Premium workouts, expert exercises, and structured programs —
          built for every level, designed to push you to your limits.
        </p>

        <div className="mt-10 flex animate-fade-in-up flex-col items-center justify-center gap-4 sm:flex-row" style={{ animationDelay: '400ms' }}>
          <Link
            to="/workouts"
            className="flex items-center gap-2 rounded-lg bg-lime px-8 py-4 text-base font-bold text-ink transition-all duration-200 hover:bg-lime-dark hover:shadow-glow active:scale-95"
          >
            Explore Workouts
            <ArrowRight className="h-5 w-5" />
          </Link>
          <Link
            to="/programs"
            className="flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-base font-bold text-white transition-all duration-200 hover:border-lime hover:text-lime active:scale-95"
          >
            View Programs
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <ChevronDown className="h-6 w-6 text-white/30" />
      </div>
    </section>
  )
}
