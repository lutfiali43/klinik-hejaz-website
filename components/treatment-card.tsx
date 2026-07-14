import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import type { Treatment } from '@/data/siteData'

export function TreatmentCard({ treatment }: { treatment: Treatment }) {
  const Icon = treatment.icon

  if (treatment.cardBg) {
    return (
      <Link
        href={`/rawatan/${treatment.slug}`}
        className="group relative isolate flex min-h-[300px] flex-col overflow-hidden rounded-2xl border border-brand bg-brand p-6 shadow-sm transition-all hover:shadow-lg sm:min-h-[280px]"
      >
        {/* Background image */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-cover bg-right transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url('${treatment.cardBg}')` }}
        />
        {/* Navy gradient for legibility on all screen sizes */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-r from-brand via-brand/80 to-brand/20"
        />

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-foreground/15 text-brand-foreground backdrop-blur-sm transition-colors group-hover:bg-accent-orange group-hover:text-accent-orange-foreground">
          <Icon className="h-6 w-6" />
        </div>
        <div className="mt-4 flex items-center gap-2">
          <h3 className="text-lg font-bold text-brand-foreground">
            {treatment.title}
          </h3>
          {treatment.hero && (
            <span className="rounded-full bg-accent-orange px-2 py-0.5 text-xs font-semibold text-accent-orange-foreground">
              Utama
            </span>
          )}
        </div>
        <p className="mt-2 flex-1 max-w-[78%] text-sm leading-relaxed text-brand-foreground/85">
          {treatment.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-foreground">
          Lihat butiran
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </span>
      </Link>
    )
  }

  return (
    <Link
      href={`/rawatan/${treatment.slug}`}
      className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-accent-orange hover:shadow-md"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-accent-orange group-hover:text-accent-orange-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <div className="mt-4 flex items-center gap-2">
        <h3 className="text-lg font-bold text-foreground">{treatment.title}</h3>
        {treatment.hero && (
          <span className="rounded-full bg-accent-orange/15 px-2 py-0.5 text-xs font-semibold text-accent-orange-foreground">
            Utama
          </span>
        )}
      </div>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {treatment.description}
      </p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand transition-colors group-hover:text-accent-orange-foreground">
        Lihat butiran
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
