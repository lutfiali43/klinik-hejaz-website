'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import {
  treatments,
  treatmentCategories,
  type Treatment,
} from '@/data/siteData'
import { TreatmentCard } from '@/components/treatment-card'

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

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((treatment) => (
          <TreatmentCard key={treatment.slug} treatment={treatment} />
        ))}
      </div>
    </div>
  )
}
