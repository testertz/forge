import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import Reveal from '@/components/Reveal'

interface CTASectionProps {
  title: string
  subtitle: string
  buttonText: string
  buttonTo: string
}

export default function CTASection({ title, subtitle, buttonText, buttonTo }: CTASectionProps) {
  return (
    <section className="relative overflow-hidden bg-ink py-20 md:py-28">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(163,230,53,0.12)_0%,transparent_65%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mx-auto mt-5 max-w-xl text-base text-white/50 md:text-lg">
            {subtitle}
          </p>
        </Reveal>
        <Reveal delay={300}>
          <Link
            to={buttonTo}
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-lime px-8 py-4 text-base font-bold text-ink transition-all duration-200 hover:bg-lime-dark hover:shadow-glow active:scale-95"
          >
            {buttonText}
            <ArrowRight className="h-5 w-5" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}
