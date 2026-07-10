import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { getTreatment } from '@/data/siteData'

// 9 rawatan dalam susunan masonry. `big` = jubin lebih besar/tinggi.
// Disusun berselang supaya jubin besar tersebar merentas kolum.
const layout: { slug: string; big?: boolean }[] = [
  { slug: 'rawatan-sakit-lutut', big: true },
  { slug: 'luka-diabetes' },
  { slug: 'rawatan-gout' },
  { slug: 'program-berat-badan', big: true },
  { slug: 'diabetes-dan-darah-tinggi' },
  { slug: 'rawatan-sakit-belakang' },
  { slug: 'kutil-dan-ketuat', big: true },
  { slug: 'rawatan-sakit-kulit' },
  { slug: 'rawatan-saraf' },
]

export function TreatmentGallery() {
  return (
    <div className="mt-10 gap-4 space-y-4 sm:columns-2 lg:columns-3">
      {layout.map(({ slug, big }) => {
        const treatment = getTreatment(slug)
        if (!treatment) return null
        const Icon = treatment.icon

        return (
          <Link
            key={slug}
            href={`/rawatan/${treatment.slug}`}
            className={`group relative mb-4 block break-inside-avoid overflow-hidden rounded-2xl ${
              big ? 'h-80 sm:h-[26rem]' : 'h-56 sm:h-60'
            }`}
          >
            <Image
              src={treatment.cardBg || '/placeholder.svg'}
              alt={treatment.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Gradient untuk kebolehbacaan teks */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent"
            />

            <div className="absolute inset-x-0 top-0 p-5">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15 text-white backdrop-blur-sm transition-colors group-hover:bg-accent-orange group-hover:text-accent-orange-foreground">
                <Icon className="h-5 w-5" />
              </span>
            </div>

            <div className="absolute inset-x-0 bottom-0 p-5">
              <h3
                className={`font-heading font-bold leading-tight text-white ${
                  big ? 'text-2xl sm:text-3xl' : 'text-lg'
                }`}
              >
                {treatment.title}
              </h3>
              <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-accent-orange">
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
