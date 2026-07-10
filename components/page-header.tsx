export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string
  title: string
  description?: string
}) {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-7xl px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-20">
        {eyebrow && (
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-orange">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-2 text-balance text-4xl font-extrabold text-brand-foreground sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-brand-foreground/80">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
