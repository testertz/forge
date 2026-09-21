import { Search, X } from 'lucide-react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export default function SearchBar({
  value,
  onChange,
  placeholder = 'Search...',
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      <Search className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-white/40" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border border-white/10 bg-charcoal py-3 pr-10 pl-10 text-sm text-white placeholder-white/40 outline-none transition-all duration-200 focus:border-lime/50 focus:ring-1 focus:ring-lime/30"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="absolute top-1/2 right-3 flex h-5 w-5 -translate-y-1/2 items-center justify-center text-white/40 transition-colors hover:text-white"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  )
}
