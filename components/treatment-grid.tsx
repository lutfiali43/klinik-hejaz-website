'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import {
  treatments,
  treatmentCategories,
  type Treatment,
} from '@/data/siteData'

type Tone = 'dark' | 'mid' | 'light' | 'accent'

const toneClasses: Record<
  Tone,
  { card: string; chip: string; title: string; excerpt: string; link: string }
> = {
  dark: {
    card: 'bg-brand',
    chip: 'bg-brand-foreground/15 text-brand-foreground group-hover:bg-accent-orange group-hover:text-accent-orange-foreground',
    title: 'text-brand-foreground',
    excerpt: 'text-brand-foreground/90',
    link: 'text-brand-foreground',
  },
  mid: {
    card: 'bg-brand-light',
    chip: 'bg-brand-foreground/20 text-brand-foreground group-hover:bg-accent-orange group-hover:text-accent-orange-foreground',
    title: 'text-brand-foreground',
    excerpt: 'text-brand-foreground/90',
    link: 'text-brand-foreground',
  },
  light: {
    card: 'bg-secondary',
    chip: 'bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground',
    title: 'text-brand',
    excerpt: 'text-muted-foreground',
    link: 'text-brand',
  },
  accent: {
    card: 'bg-accent-orange',
    chip: 'bg-accent-orange-foreground/15 text-accent-orange-foreground group-hover:bg-accent-orange-foreground group-hover:text-accent-orange',
    title: 'text-accent-orange-foreground',
    excerpt: 'text-accent-orange-foreground/80',
    link: 'text-accent-orange-foreground',
  },
}

// Corak tona & ketinggian berselang-seli untuk membentuk mozek masonry.
const tonePattern: Tone[] = [
  'dark',
  'light',
  'mid',
  'accent',
  'mid',
  'light',
  'dark',
  'light',
  'mid',
  'dark',
  'light',
  'mid',
]
const heightPattern = [
  'h-72',
  'h-52',
  'h-44',
  'h-72',
  'h-56',
  'h-48',
  'h-72',
  'h-56',
  'h-44',
  'h-72',
  'h-52',
  'h-48',
]

export function TreatmentGrid() {
  const [active, setActive] = useState<(typeof treatmentCategories)[number]>(
    'Semua',
  )

  const filtered: Treatment[] =
    active === 'Semua'
      ? treatments
      : treatments.filter((t) => t.category === active)

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2">
        {treatmentCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-medium transition-colors',
              active === cat
                ? 'border-brand bg-brand text-brand-foreground'
                : 'border-border bg-card text-muted-foreground hover:border-brand hover:text-brand',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-10 gap-4 sm:columns-2 lg:columns-3">
        {filtered.map((treatment, i) => {
          const Icon = treatment.icon
          const tone = tonePattern[i % tonePattern.length]
          const h = heightPattern[i % heightPattern.length]
          const big = h === 'h-72'
          const t = toneClasses[tone]

          return (
            <Link
              key={treatment.slug}
              href={`/rawatan/${treatment.slug}`}
              className={`group mb-4 flex break-inside-avoid flex-col justify-between overflow-hidden rounded-2xl p-5 transition-transform duration-300 hover:-translate-y-1 ${h} ${t.card}`}
            >
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${t.chip}`}
              >
                <Icon className="h-5 w-5" />
              </span>

              <div>
                <h3
                  className={`font-logo font-extrabold italic leading-tight tracking-[-0.039em] ${t.title} ${
                    big ? 'text-2xl sm:text-3xl' : 'text-lg'
                  }`}
                >
                  {treatment.title}
                </h3>
                <p
                  className={`mt-2 text-pretty text-sm leading-snug ${t.excerpt} ${
                    big ? 'line-clamp-3' : 'line-clamp-2'
                  }`}
                >
                  {treatment.tagline}
                </p>
                <span
                  className={`mt-3 inline-flex items-center gap-1 text-sm font-semibold ${t.link}`}
                >
                  Lihat butiran
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
