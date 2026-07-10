import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
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
  const description = `${treatment.tagline}. ${treatment.description} Tersedia di Klinik Nurani Sabak Bernam & Sungai Buloh.`
  return {
    title: treatment.title,
    description,
    keywords: [
      treatment.title,
      treatment.shortTitle,
      `${treatment.shortTitle} Sabak Bernam`,
      `${treatment.shortTitle} Sungai Buloh`,
      'Klinik Nurani',
      'klinik Selangor',
    ],
    alternates: { canonical: `/rawatan/${treatment.slug}` },
    openGraph: {
      title: `${treatment.title} | Klinik Nurani`,
      description,
      type: 'article',
      locale: 'ms_MY',
      url: `https://kliniknurani.com/rawatan/${treatment.slug}`,
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
      <section className="relative overflow-hidden bg-brand">
        {treatment.cardBg && (
          <>
            {/* Soft parallax treatment photo */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-cover bg-right bg-scroll md:bg-fixed"
              style={{ backgroundImage: `url('${treatment.cardBg}')` }}
            />
            {/* Navy gradient for text legibility */}
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-brand via-brand/85 to-brand/40"
            />
            {/* Soft white line-pattern overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[url('/line-pattern-white.png')] bg-[length:1200px_auto] bg-repeat opacity-5"
            />
          </>
        )}
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <Link
            href="/rawatan"
            className="inline-flex items-center gap-2 text-sm font-medium text-brand-foreground/70 transition-colors hover:text-accent-orange"
          >
            <ArrowLeft className="h-4 w-4" />
            Kembali ke senarai rawatan
          </Link>

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-accent-orange text-accent-orange-foreground">
              <Icon className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-balance text-4xl font-extrabold text-brand-foreground sm:text-5xl">
                {treatment.title}
              </h1>
              <p className="mt-2 text-pretty text-lg text-accent-orange">
                {treatment.tagline}
              </p>
            </div>
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
