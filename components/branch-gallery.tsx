import Image from 'next/image'
import { ImageIcon } from 'lucide-react'
import type { Branch } from '@/data/siteData'

export function BranchGallery({ branch }: { branch: Branch }) {
  if (!branch.gallery?.length) return null

  return (
    <section aria-labelledby="galeri-heading" className="mt-12">
      <h3
        id="galeri-heading"
        className="flex items-center gap-2 text-xl font-bold text-brand"
      >
        <ImageIcon className="h-5 w-5 shrink-0 text-accent-orange" />
        Galeri Gambar di Klinik Hejaz {branch.shortName}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        Lihat suasana, kemudahan dan persekitaran rawatan di Klinik Hejaz{' '}
        {branch.locality}.
      </p>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
        {branch.gallery.map((photo) => (
          <figure
            key={photo.src}
            className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-secondary"
          >
            <Image
              src={photo.src || '/placeholder.svg'}
              alt={photo.alt}
              fill
              sizes="(max-width: 640px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </figure>
        ))}
      </div>
    </section>
  )
}
