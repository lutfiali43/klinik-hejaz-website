import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getTreatment } from '@/data/siteData'

type Tone = 'dark' | 'mid' | 'light' | 'accent'

// 9 rawatan disusun secara masonry rawak (ketinggian berselang-seli).
// `big` = jubin lebih besar; tiada gambar, hanya jubin berwarna.
const tiles: { slug: string; big?: boolean; h: string; tone: Tone }[] = [
  { slug: 'rawatan-sakit-lutut', big: true, h: 'h-72', tone: 'dark' },
  { slug: 'luka-diabetes', h: 'h-52', tone: 'light' },
  { slug: 'rawatan-gout', h: 'h-44', tone: 'mid' },
  { slug: 'program-berat-badan', big: true, h: 'h-72', tone: 'accent' },
  { slug: 'diabetes-dan-darah-tinggi', h: 'h-56', tone: 'light' },
  { slug: 'rawatan-sakit-belakang', h: 'h-44', tone: 'mid' },
  { slug: 'kutil-dan-ketuat', big: true, h: 'h-72', tone: 'dark' },
  { slug: 'rawatan-sakit-kulit', h: 'h-52', tone: 'light' },
  { slug: 'rawatan-saraf', h: 'h-60', tone: 'mid' },
]

const toneClasses: Record<
  Tone,
  { card: string; chip: string; title: string; link: string }
> = {
  dark: {
    card: 'bg-brand',
    chip: 'bg-brand-foreground/15 text-brand-foreground group-hover:bg-accent-orange group-hover:text-accent-orange-foreground',
    title: 'text-brand-foreground',
    link: 'text-accent-orange',
  },
  mid: {
    card: 'bg-brand-light',
    chip: 'bg-brand-foreground/20 text-brand-foreground group-hover:bg-accent-orange group-hover:text-accent-orange-foreground',
    title: 'text-brand-foreground',
    link: 'text-brand-foreground',
  },
  light: {
    card: 'bg-secondary',
    chip: 'bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground',
    title: 'text-brand',
    link: 'text-brand',
  },
  accent: {
    card: 'bg-accent-orange',
    chip: 'bg-accent-orange-foreground/15 text-accent-orange-foreground group-hover:bg-accent-orange-foreground group-hover:text-accent-orange',
    title: 'text-accent-orange-foreground',
    link: 'text-accent-orange-foreground',
  },
}

export function TreatmentGallery() {
  return (
    <div className="mt-10 gap-4 sm:columns-2 lg:columns-3">
      {tiles.map(({ slug, big, h, tone }) => {
        const treatment = getTreatment(slug)
        if (!treatment) return null
        const Icon = treatment.icon
        const t = toneClasses[tone]

        return (
          <Link
            key={slug}
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
                className={`font-heading font-bold leading-tight ${t.title} ${
                  big ? 'text-2xl sm:text-3xl' : 'text-lg'
                }`}
              >
                {treatment.title}
              </h3>
              <span
                className={`mt-2 inline-flex items-center gap-1 text-sm font-semibold ${t.link}`}
              >
                Lihat butiran
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
