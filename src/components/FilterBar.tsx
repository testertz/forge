import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

interface FilterBarProps<T extends string> {
  label: string
  options: readonly T[]
  value: T
  onChange: (value: T) => void
}

export default function FilterBar<T extends string>({
  label,
  options,
  value,
  onChange,
}: FilterBarProps<T>) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-bold uppercase tracking-wider text-white/40">{label}</span>
      <Tabs
        value={value}
        onValueChange={(v) => onChange(v as T)}
      >
        <TabsList className="flex w-full flex-wrap gap-1.5 border border-white/10 bg-charcoal p-1.5">
          {options.map((opt) => (
            <TabsTrigger
              key={opt}
              value={opt}
              className="rounded-md border border-transparent px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-white/60 transition-all data-[state=active]:border-lime/40 data-[state=active]:bg-lime/10 data-[state=active]:text-lime data-[state=active]:shadow-none hover:text-white"
            >
              {opt}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  )
}
