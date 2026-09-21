import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router'
import { Menu, X, Dumbbell } from 'lucide-react'

const links = [
  { label: 'Home', to: '/' },
  { label: 'Workouts', to: '/workouts' },
  { label: 'Exercises', to: '/exercises' },
  { label: 'Programs', to: '/programs' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || open
            ? 'bg-ink/95 backdrop-blur-lg border-b border-white/10'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <Link to="/" className="flex items-center gap-2 text-xl font-black tracking-tight text-white">
            <Dumbbell className="h-6 w-6 text-lime" strokeWidth={2.5} />
            FORGE
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-lime' : 'text-white/70 hover:text-white'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    <span
                      className={`absolute bottom-0 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-lime transition-all duration-300 ${
                        isActive ? 'w-6 opacity-100' : 'w-0 opacity-0'
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/workouts"
              className="hidden rounded-lg bg-lime px-5 py-2.5 text-sm font-bold text-ink transition-all duration-200 hover:bg-lime-dark hover:shadow-glow active:scale-95 md:inline-block"
            >
              Get Started
            </Link>

            <button
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="flex h-10 w-10 items-center justify-center rounded-lg text-white transition-colors hover:bg-white/10 lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col bg-ink transition-all duration-300 lg:hidden ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex flex-1 flex-col items-start justify-center gap-2 px-8">
          {links.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-3xl font-black tracking-tight transition-all duration-300 ${
                  isActive ? 'text-lime' : 'text-white/80'
                } ${open ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`
              }
              style={{ transitionDelay: open ? `${100 + i * 60}ms` : '0ms' }}
            >
              {link.label}
            </NavLink>
          ))}

          <Link
            to="/workouts"
            className="mt-8 rounded-lg bg-lime px-6 py-3 text-base font-bold text-ink transition-all duration-200 hover:bg-lime-dark active:scale-95"
          >
            Get Started
          </Link>
        </div>
      </div>
    </>
  )
}
