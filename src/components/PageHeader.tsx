import Reveal from '@/components/Reveal'

interface PageHeaderProps {
  eyebrow: string
  title: string
  subtitle: string
}

export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <div className="relative overflow-hidden bg-ink pt-32 pb-16 md:pt-40 md:pb-20">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(163,230,53,0.08)_0%,transparent_60%)]"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center md:px-8">
        <Reveal>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-lime">{eyebrow}</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="text-4xl font-black leading-tight text-white md:text-6xl">{title}</h1>
        </Reveal>
        <Reveal delay={240}>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/50 md:text-lg">{subtitle}</p>
        </Reveal>
      </div>
    </div>
  )
}
