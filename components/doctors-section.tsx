import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Check, Stethoscope } from 'lucide-react'

const expertise = [
  'Rawatan Tulang & Sendi',
  'Penjagaan Ibu & Anak',
  'Rawatan Saraf & Lutut',
  'Pengurusan Berat Badan',
  'Rawatan Luka Diabetik',
  'Kesihatan Keluarga',
]

export function DoctorsSection() {
  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: text content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-orange/20 px-4 py-1.5 text-sm font-semibold text-accent-orange-foreground">
              <Stethoscope className="h-4 w-4" />
              Doktor Kami
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-black leading-[1.1] tracking-[-0.03em] text-brand sm:text-4xl lg:text-5xl">
              Memperkenalkan barisan{' '}
              <span className="text-accent-orange">doktor kami.</span>
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Pasukan doktor Klinik Hejaz yang berpengalaman dan berdedikasi
              komited memberikan penjagaan yang menyeluruh, mesra dan dipercayai
              untuk anda serta keluarga di Kuala Nerus.
            </p>

            <div className="mt-8">
              <h3 className="text-sm font-bold uppercase tracking-wider text-brand">
                Bidang Kepakaran
              </h3>
              <div className="mt-4 grid gap-x-6 gap-y-3 sm:grid-cols-2">
                {expertise.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-orange text-accent-orange-foreground">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/permohonan"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-orange px-6 py-3 text-base font-semibold text-accent-orange-foreground transition-opacity hover:opacity-90"
            >
              Buat Temujanji
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Right: photo with floating name cards */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-brand">
              <Image
                src="/doktor-kami.jpeg"
                alt="Barisan doktor Klinik Hejaz Kuala Nerus"
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
                priority
              />
              {/* gradient for card legibility */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand/70 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
