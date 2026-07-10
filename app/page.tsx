import Link from 'next/link'
import {
  Phone,
  MessageCircle,
  ShieldCheck,
  Clock,
  MapPin,
  ArrowRight,
  Stethoscope,
  Plus,
  CreditCard,
} from 'lucide-react'
import { branches, heroTreatments, treatments } from '@/data/siteData'
import { TreatmentCard } from '@/components/treatment-card'
import { BranchSelectorCard } from '@/components/branch-selector-card'
import { DoctorsSection } from '@/components/doctors-section'
import { HeroSlideshow } from '@/components/hero-slideshow'
import { CtaBanner } from '@/components/cta-banner'
import {
  MedicalClinicJsonLd,
  OrganizationJsonLd,
  WebSiteJsonLd,
} from '@/components/json-ld'

const credibility = [
  {
    title: 'Doktor Berpengalaman',
    desc: 'Pasukan perubatan terlatih.',
  },
  {
    title: 'Rawatan Dipercayai',
    desc: 'Klinikal, selamat & berbukti.',
  },
  {
    title: 'Penjagaan Menyeluruh',
    desc: 'Semua rawatan satu bumbung.',
  },
  {
    title: 'Mesra Keluarga',
    desc: 'Selesa untuk semua umur.',
  },
]

const commitmentHighlights = [
  { icon: Stethoscope, label: 'Doktor yang berpengalaman' },
  { icon: ShieldCheck, label: 'Rawatan yang selamat dan mudah' },
  { icon: CreditCard, label: 'Cara bayar fleksibel' },
]

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <MedicalClinicJsonLd />

      {/* Hero */}
      <section className="bg-brand">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr] lg:gap-6">
            {/* Title card — brighter olive */}
            <div className="flex flex-col justify-between rounded-3xl bg-brand-light p-8 sm:p-10 lg:p-12">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-foreground/15 px-4 py-1.5 text-sm font-semibold text-brand-foreground">
                  <MapPin className="h-4 w-4" />
                  Kuala Nerus, Terengganu
                </span>
                <h1 className="mt-6 text-balance font-logo text-4xl font-extrabold italic leading-[1.05] tracking-[-0.039em] text-brand-foreground sm:text-5xl lg:text-6xl">
                  Klinik utama di Kuala Terengganu. Insyallah kita ikhtiar.
                </h1>
                <p className="mt-6 max-w-xl text-pretty font-logo text-base italic leading-relaxed text-brand-foreground/85 sm:text-lg">
                  Jadikan Klinik Hejaz sebagai pilihan keluarga anda. Bersama
                  dengan doktor yang terlatih dan servis terbaik.
                </p>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/permohonan"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-orange px-6 py-3 text-base font-semibold text-accent-orange-foreground transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Kami
                </Link>
                <Link
                  href="/rawatan"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-foreground/40 bg-transparent px-6 py-3 text-base font-semibold text-brand-foreground transition-colors hover:bg-brand-foreground/10"
                >
                  Lihat Semua Rawatan
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </div>

            {/* Image slideshow */}
            <HeroSlideshow />
          </div>

          {/* Credibility strip */}
          <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:mt-6 lg:grid-cols-4 lg:gap-4">
            {credibility.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-brand-light p-5 text-center"
              >
                <h3 className="font-bold text-brand-foreground">
                  {item.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-brand-foreground/80">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero services */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-orange-foreground">
              Rawatan Utama
            </span>
            <h2 className="mt-2 text-balance text-3xl font-bold text-brand sm:text-4xl">
              Pilihan Utama Dalam Penjagaan Tulang, Sendi &amp; Keluarga
            </h2>
            <p className="mt-3 text-pretty text-muted-foreground">
              Rawatan paling diminati di Klinik Hejaz, disokong pendekatan
              klinikal yang teliti dan penuh penjagaan.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {heroTreatments.map((treatment) => (
              <TreatmentCard key={treatment.slug} treatment={treatment} />
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/rawatan"
              className="inline-flex items-center gap-2 rounded-full border border-brand px-6 py-3 text-base font-semibold text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
            >
              Lihat Kesemua {treatments.length} Rawatan
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Commitment */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative isolate overflow-hidden rounded-3xl bg-brand">
            {/* Background photo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[url('/commitment-doctor-family.jpeg')] bg-cover bg-center"
            />
            {/* Top + bottom navy gradient — keeps faces in the middle visible */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-b from-brand/90 via-brand/25 to-brand/95"
            />
            {/* Soft white line-pattern overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[url('/line-pattern-white.png')] bg-[length:1200px_auto] bg-repeat opacity-5"
            />

            <div className="relative flex min-h-[600px] flex-col justify-between gap-12 p-8 sm:p-12 lg:min-h-[660px]">
              {/* Heading block (top — above the doctor's face) */}
              <div className="max-w-2xl">
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-accent-orange">
                  <Plus className="h-4 w-4" strokeWidth={3} />
                  Komitmen Kami
                </span>
                <h2 className="mt-3 text-balance font-heading text-3xl font-black leading-[1.1] tracking-[-0.04em] text-brand-foreground sm:text-4xl lg:text-5xl">
                  <span className="text-accent-orange">Klinik Hejaz</span>{' '}
                  komited memberikan perkhidmatan terbaik{' '}
                  <span className="text-accent-orange">kepada semua.</span>
                </h2>
                <p className="mt-4 max-w-xl text-pretty leading-relaxed text-brand-foreground/85">
                  Dari kanak-kanak hingga warga emas, kami melayani setiap
                  pesakit dengan penuh penjagaan, ketelitian dan rasa hormat —
                  kerana kesihatan anda adalah amanah kami.
                </p>
              </div>

              {/* Highlights (bottom) */}
              <div className="grid gap-4 sm:grid-cols-3">
                {commitmentHighlights.map((item) => {
                  const Icon = item.icon
                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-2xl border border-brand-foreground/15 bg-brand/40 p-4 backdrop-blur-sm"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-orange text-accent-orange-foreground">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-semibold text-brand-foreground">
                        {item.label}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branch locator */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent-orange-foreground">
              Cawangan Kami
            </span>
            <h2 className="mt-2 text-balance text-3xl font-bold text-brand sm:text-4xl">
              Cari Cawangan Berhampiran Anda
            </h2>
            <p className="mt-3 text-pretty text-muted-foreground">
              Dua lokasi strategik untuk memudahkan anda mendapatkan rawatan.
            </p>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {branches.map((branch) => (
              <BranchSelectorCard key={branch.slug} branch={branch} />
            ))}
          </div>
        </div>
      </section>

      <DoctorsSection />

      <CtaBanner />
    </>
  )
}
