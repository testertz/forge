import { Link } from 'react-router'
import { Dumbbell, Instagram, Youtube, Twitter, Facebook } from 'lucide-react'

const quickLinks = [
  { label: 'Workouts', to: '/workouts' },
  { label: 'Exercises', to: '/exercises' },
  { label: 'Programs', to: '/programs' },
]

const pageLinks = [
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
  { label: 'Home', to: '/' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 text-xl font-black tracking-tight text-white">
              <Dumbbell className="h-6 w-6 text-lime" strokeWidth={2.5} />
              FORGE
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Train harder, live stronger. Premium workouts and programs for every level — 100% free, forever.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-lime">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-lime">Pages</h4>
            <ul className="space-y-3">
              {pageLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="text-sm text-white/60 transition-colors duration-200 hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="mb-4 text-xs font-bold uppercase tracking-wider text-lime">Follow Us</h4>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Youtube, label: 'YouTube' },
                { Icon: Twitter, label: 'Twitter' },
                { Icon: Facebook, label: 'Facebook' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-white/60 transition-all duration-200 hover:border-lime hover:text-lime"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} FORGE. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Built for athletes, by athletes.
          </p>
        </div>
      </div>
    </footer>
  )
}
