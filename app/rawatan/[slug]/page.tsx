import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import {
  Check,
  Phone,
  MessageCircle,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react'
import {
  treatments,
  getTreatment,
  branches,
} from '@/data/siteData'
import { FaqAccordion } from '@/components/faq-accordion'
import { WeightLossTools } from '@/components/weight-loss-tools'
import {
  FaqJsonLd,
  TreatmentJsonLd,
  BreadcrumbJsonLd,
} from '@/components/json-ld'

export function generateStaticParams() {
  return treatments.map((t) => ({ slug: t.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const treatment = getTreatment(slug)
  if (!treatment) return { title: 'Rawatan Tidak Dijumpai' }
  const description = `${treatment.tagline}. ${treatment.description} Tersedia di Klinik Hejaz Kuala Nerus, Terengganu.`
  return {
    title: treatment.title,
    description,
    keywords: [
      treatment.title,
      treatment.shortTitle,
      `${treatment.shortTitle} Kuala Nerus`,
      `${treatment.shortTitle} Kuala Terengganu`,
      'Klinik Hejaz',
      'klinik Terengganu',
    ],
    alternates: { canonical: `/rawatan/${treatment.slug}` },
    openGraph: {
      title: `${treatment.title} | Klinik Hejaz`,
      description,
      type: 'article',
      locale: 'ms_MY',
      url: `https://klinikhejaz.com/rawatan/${treatment.slug}`,
    },
  }
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const treatment = getTreatment(slug)
  if (!treatment) notFound()

  const Icon = treatment.icon
  const related = treatments.filter((t) => t.slug !== treatment.slug).slice(0, 3)
  const branch = branches[0]
  const heroImage = treatment.heroImage ?? treatment.cardBg

  return (
    <>
      <TreatmentJsonLd treatment={treatment} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Utama', url: '/' },
          { name: 'Rawatan', url: '/rawatan' },
          { name: treatment.title, url: `/rawatan/${treatment.slug}` },
        ]}
      />
      <FaqJsonLd faqs={treatment.faqs} />

      {/* Hero */}
      <section className="bg-brand">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <Link
            href="/rawatan"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-foreground/70 transition-colors hover:text-accent-orange"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke senarai rawatan
          </Link>

          <div className="mt-6 grid gap-5 lg:grid-cols-[3fr_1fr] lg:gap-6">
            {/* Text card */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-3xl bg-brand-light p-8 sm:p-10 lg:p-12">
              {/* Islamic pattern — golden lattice at 20% opacity */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-[url('/hejaz-pattern-bg.png')] bg-cover bg-center bg-no-repeat opacity-20"
              />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-foreground/15 px-4 py-1.5 text-sm font-semibold text-brand-foreground">
                  <Icon className="h-4 w-4" />
                  {treatment.category}
                </span>
                <h1 className="mt-6 text-balance font-logo text-4xl font-extrabold italic leading-[1.05] tracking-[-0.039em] text-brand-foreground sm:text-5xl">
                  {treatment.title}
                </h1>
                <p className="mt-5 max-w-2xl text-pretty font-logo text-lg italic leading-relaxed text-accent-orange">
                  {treatment.tagline}
                </p>
                <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-brand-foreground/85">
                  {treatment.description}
                </p>
              </div>

              <div className="relative mt-10 flex flex-col gap-3 sm:flex-row">
                <a
                  href={branch.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-orange px-6 py-3 text-base font-semibold text-accent-orange-foreground transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Kami
                </a>
                <a
                  href={`tel:${branch.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-foreground/40 bg-transparent px-6 py-3 text-base font-semibold text-brand-foreground transition-colors hover:bg-brand-foreground/10"
                >
                  <Phone className="h-5 w-5" />
                  {branch.phone}
                </a>
              </div>
            </div>

            {/* Treatment image */}
            {heroImage && (
              <div className="relative min-h-[260px] overflow-hidden rounded-3xl bg-brand-light lg:min-h-0">
                <Image
                  src={heroImage || "/placeholder.svg"}
                  alt={`Rawatan ${treatment.title} di Klinik Hejaz Kuala Nerus`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 25vw"
                  className="object-cover"
                  priority
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Kalkulator BMI & Kalori (khas program berat badan) */}
      {treatment.slug === 'program-berat-badan' && <WeightLossTools />}

      {/* Content */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-brand">Mengenai Rawatan</h2>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {treatment.longDescription}
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold text-foreground">Apa Yang Anda Dapat</h3>
                <ul className="mt-4 space-y-3">
                  {treatment.benefits.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent-orange-foreground" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6">
                <h3 className="font-bold text-foreground">Tanda &amp; Simptom</h3>
                <ul className="mt-4 space-y-3">
                  {treatment.symptoms.map((s) => (
                    <li key={s} className="flex gap-3 text-sm text-muted-foreground">
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQ */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold text-brand">
                Soalan Lazim
              </h2>
              <p className="mt-2 text-muted-foreground">
                Jawapan kepada soalan yang sering ditanya tentang{' '}
                {treatment.title.toLowerCase()}.
              </p>
              <div className="mt-6">
                <FaqAccordion faqs={treatment.faqs} />
              </div>
            </div>
          </div>

          {/* Sidebar booking */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="text-lg font-bold text-brand">
                Tempah Temujanji
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Hubungi cawangan terdekat untuk mendapatkan rawatan ini.
              </p>
              <div className="mt-5 space-y-5">
                {branches.map((branch) => (
                  <div
                    key={branch.slug}
                    className="rounded-xl bg-secondary p-4"
                  >
                    <p className="font-semibold text-foreground">
                      {branch.shortName}
                    </p>
                    <div className="mt-3 flex flex-col gap-2">
                      <a
                        href={`tel:${branch.phoneRaw}`}
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
                      >
                        <Phone className="h-4 w-4" />
                        {branch.phone}
                      </a>
                      <a
                        href={branch.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-orange px-4 py-2.5 text-sm font-semibold text-accent-orange-foreground transition-opacity hover:opacity-90"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Related */}
      <section className="bg-secondary py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-brand">Rawatan Lain</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((t) => {
              const RelIcon = t.icon
              return (
                <Link
                  key={t.slug}
                  href={`/rawatan/${t.slug}`}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent-orange hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors group-hover:bg-accent-orange group-hover:text-accent-orange-foreground">
                    <RelIcon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-foreground">
                    {t.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {t.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand">
                    Lihat butiran
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
