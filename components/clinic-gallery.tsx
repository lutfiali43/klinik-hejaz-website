import Image from 'next/image'
import { ImageIcon } from 'lucide-react'

const galleryImages = [
  {
    src: '/klinik-fasad-depan.jpeg',
    caption: 'Fasad hadapan Klinik Hejaz Kuala Nerus',
    width: 896,
    height: 1195,
  },
  {
    src: '/klinik-kaunter-resepsi.jpeg',
    caption: 'Ruang menunggu yang selesa & mesra',
    width: 896,
    height: 1195,
  },
  {
    src: '/klinik-papan-tanda.jpeg',
    caption: 'Papan tanda Klinik Hejaz',
    width: 896,
    height: 1195,
  },
  {
    src: '/klinik-kaunter-daftar.jpeg',
    caption: 'Kaunter pendaftaran',
    width: 896,
    height: 1195,
  },
  {
    src: '/klinik-bilik-konsultasi.jpeg',
    caption: 'Bilik konsultasi peribadi',
    width: 896,
    height: 1195,
  },
  {
    src: '/klinik-papan-doktor.jpeg',
    caption: 'Bilik konsultasi Dr. Muhammad Irfan',
    width: 896,
    height: 1195,
  },
]

export function ClinicGallery() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-orange/20 px-4 py-1.5 text-sm font-semibold text-accent-orange-foreground">
            <ImageIcon className="h-4 w-4" />
            Galeri Klinik
          </span>
          <h2 className="mt-4 text-balance font-logo text-3xl font-extrabold italic leading-[1.15] tracking-[-0.039em] text-brand sm:text-4xl lg:text-5xl">
            Selamat Datang ke Klinik Hejaz Kuala Nerus
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            Suasana klinik yang bersih, tenang dan mesra keluarga &mdash; direka
            untuk memberikan anda pengalaman rawatan yang selesa.
          </p>
        </div>

        <div className="mt-12 gap-4 [column-count:1] sm:[column-count:2] lg:[column-count:3]">
          {galleryImages.map((img) => (
            <figure
              key={img.src}
              className="group relative isolate mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-brand-light"
            >
              <Image
                src={img.src || '/placeholder.svg'}
                alt={img.caption}
                width={img.width}
                height={img.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-brand/85 via-brand/10 to-transparent"
              />
              <figcaption className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-pretty text-sm font-semibold text-brand-foreground">
                  {img.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
