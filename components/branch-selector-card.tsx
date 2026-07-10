import { Phone, MessageCircle, MapPin, Clock, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { Branch } from '@/data/siteData'

export function BranchSelectorCard({ branch }: { branch: Branch }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
      <div className="aspect-video w-full overflow-hidden bg-secondary">
        <iframe
          src={branch.mapEmbed}
          title={`Peta lokasi ${branch.name}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full w-full border-0"
          allowFullScreen
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-bold text-brand">
          <Link href={`/cawangan/${branch.slug}`} className="hover:text-accent-orange">
            {branch.name}
          </Link>
        </h3>

        <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
          <li className="flex gap-3">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-orange" />
            <span className="leading-relaxed">{branch.address}</span>
          </li>
          <li className="flex items-center gap-3">
            <Clock className="h-5 w-5 shrink-0 text-accent-orange" />
            <span>{branch.hours}</span>
          </li>
        </ul>

        <Link
          href={`/cawangan/${branch.slug}`}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand transition-colors hover:text-accent-orange"
        >
          Lihat halaman cawangan {branch.shortName}
          <ArrowRight className="h-4 w-4" />
        </Link>

        <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row">
          <a
            href={`tel:${branch.phoneRaw}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
          >
            <Phone className="h-4 w-4" />
            {branch.phone}
          </a>
          <a
            href={branch.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent-orange px-4 py-3 text-sm font-semibold text-accent-orange-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
