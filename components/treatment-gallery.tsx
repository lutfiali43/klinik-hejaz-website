import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getTreatment } from '@/data/siteData'

type Tone = 'dark' | 'mid' | 'light' | 'accent'

// 9 rawatan disusun secara masonry berselang-seli (staggered) merentas 3 kolum.
// Setiap kolum ada campuran jubin tinggi, sederhana & pendek supaya membentuk mozek.
// `big` = jubin tumpuan yang lebih besar; tiada gambar, hanya jubin berwarna.
const tiles: { slug: string; big?: boolean; h: string; tone: Tone }[] = [
  // Kolum 1
  { slug: 'rawatan-sakit-lutut', big: true, h: 'h-72', tone: 'dark' },
  { slug: 'luka-diabetes', h: 'h-52', tone: 'light' },
  { slug: 'rawatan-gout', h: 'h-44', tone: 'mid' },
  // Kolum 2
  { slug: 'rawatan-sakit-belakang', h: 'h-44', tone: 'mid' },
  { slug: 'program-berat-badan', big: true, h: 'h-72', tone: 'accent' },
  { slug: 'rawatan-saraf', h: 'h-56', tone: 'light' },
  // Kolum 3
  { slug: 'kutil-dan-ketuat', big: true, h: 'h-72', tone: 'dark' },
  { slug: 'diabetes-dan-darah-tinggi', h: 'h-56', tone: 'mid' },
  { slug: 'rawatan-sakit-kulit', h: 'h-48', tone: 'light' },
]

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
  )
}
