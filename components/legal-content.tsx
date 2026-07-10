import type { ReactNode } from 'react'

export function LegalSection({
  title,
  children,
}: {
  title: string
  children: ReactNode
}) {
  return (
    <section className="mt-8 first:mt-0">
      <h2 className="text-xl font-bold text-brand sm:text-2xl">{title}</h2>
      <div className="mt-3 space-y-3 text-pretty leading-relaxed text-muted-foreground">
        {children}
      </div>
    </section>
  )
}

export function LegalList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="ml-1 space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-orange" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}
