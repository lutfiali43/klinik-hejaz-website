import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, HeartHandshake, ShieldCheck, Smile, Users } from 'lucide-react'
import type { Branch } from '@/data/siteData'

const teamValues = [
  { label: 'Mesra Pelanggan', icon: HeartHandshake },
  { label: 'Servis dengan senyuman', icon: Smile },
  { label: 'Rawatan Selamat', icon: ShieldCheck },
]

export function BranchTeamSection({ branch }: { branch: Branch }) {
  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* Left: text content */}
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-orange/20 px-4 py-1.5 text-sm font-semibold text-accent-orange-foreground">
              <Users className="h-4 w-4" />
              Pasukan Kami
            </span>
            <h2 className="mt-4 text-balance font-heading text-3xl font-black leading-[1.1] tracking-[-0.03em] text-brand sm:text-4xl lg:text-5xl">
              Pasukan mesra Klinik Nurani{' '}
              <span className="text-accent-orange">{branch.shortName}.</span>
            </h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Barisan doktor dan staf Klinik Nurani {branch.shortName} sentiasa
              bersedia melayani anda dengan mesra, penuh kesabaran dan
              profesional — memastikan setiap kunjungan anda di {branch.locality}{' '}
              terasa selesa dan dipercayai.
            </p>

            <Link
              href={`/permohonan?cawangan=${branch.slug}`}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent-orange px-6 py-3 text-base font-semibold text-accent-orange-foreground transition-opacity hover:opacity-90"
            >
              Buat Temujanji di {branch.shortName}
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          {/* Right: team photo with frosted value cards */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-brand">
              <Image
                src={`/team-${branch.slug}.jpeg`}
                alt={`Pasukan Klinik Nurani ${branch.shortName} — doktor dan staf yang mesra dan profesional`}
                width={1200}
                height={900}
                className="h-auto w-full object-cover"
              />
              {/* navy gradient for frosted-card legibility */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-brand via-brand/60 to-transparent"
              />

              {/* frosted value cards (style like Komitmen Kami) */}
              <div className="absolute inset-x-4 bottom-4 grid grid-cols-3 gap-2 sm:inset-x-6 sm:bottom-6 sm:gap-3">
                {teamValues.map((value) => {
                  const Icon = value.icon
                  return (
                    <div
                      key={value.label}
                      className="flex flex-col items-center gap-2 rounded-2xl border border-brand-foreground/15 bg-brand/40 p-3 text-center backdrop-blur-sm sm:flex-row sm:text-left"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-orange text-accent-orange-foreground">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-xs font-semibold leading-tight text-brand-foreground sm:text-sm">
                        {value.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
