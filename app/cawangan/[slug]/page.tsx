import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Navigation,
  CheckCircle2,
  ArrowRight,
  Building2,
  Stethoscope,
  Landmark,
  ExternalLink,
} from 'lucide-react'
import { branches, getBranch, heroTreatments } from '@/data/siteData'
import { FaqAccordion } from '@/components/faq-accordion'
import { CtaBanner } from '@/components/cta-banner'
import { BranchJsonLd, FaqJsonLd, BreadcrumbJsonLd } from '@/components/json-ld'
import { BranchTeamSection } from '@/components/branch-team-section'
import { BranchGallery } from '@/components/branch-gallery'

export function generateStaticParams() {
  return branches.map((branch) => ({ slug: branch.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const branch = getBranch(slug)
  if (!branch) return {}
  return {
    title: { absolute: branch.metaTitle },
    description: branch.metaDescription,
    alternates: { canonical: `/cawangan/${branch.slug}` },
    openGraph: {
      title: branch.metaTitle,
      description: branch.metaDescription,
    },
  }
}

export default async function BranchPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const branch = getBranch(slug)
  if (!branch) notFound()

  return (
    <>
      <BranchJsonLd branch={branch} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Utama', url: '/' },
          { name: 'Cawangan', url: '/cawangan' },
          { name: branch.shortName, url: `/cawangan/${branch.slug}` },
        ]}
      />
      <FaqJsonLd faqs={branch.localFaqs} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-brand">
        {/* Soft parallax storefront photo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed"
          style={{ backgroundImage: `url('/hero-clinic.png')` }}
        />
        {/* Navy gradient for text legibility */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-brand/95 via-brand/70 to-brand/40"
        />
        {/* Soft white line-pattern overlay */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[url('/line-pattern-white.png')] bg-[length:1200px_auto] bg-repeat opacity-5"
        />
        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-6 text-sm text-brand-foreground/70">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-accent-orange">
                  Utama
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/cawangan" className="hover:text-accent-orange">
                  Cawangan
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="text-brand-foreground">{branch.shortName}</li>
            </ol>
          </nav>
          <span className="text-sm font-semibold uppercase tracking-wider text-accent-orange">
            Klinik di {branch.locality}
          </span>
          <h1 className="mt-2 max-w-3xl text-balance text-4xl font-extrabold text-brand-foreground sm:text-5xl">
            {branch.name}
          </h1>
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-brand-foreground/80">
            {branch.heroIntro}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={`tel:${branch.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-orange px-6 py-3 text-sm font-semibold text-accent-orange-foreground transition-opacity hover:opacity-90"
            >
              <Phone className="h-4 w-4" />
              {branch.phone}
            </a>
            <Link
              href={`/permohonan?cawangan=${branch.slug}`}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-foreground/30 px-6 py-3 text-sm font-semibold text-brand-foreground transition-colors hover:bg-brand-foreground/10"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Kami
            </Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <BranchTeamSection branch={branch} />

      {/* Main content + sidebar */}
      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-brand sm:text-3xl">
              Penjagaan Kesihatan untuk Komuniti {branch.locality}
            </h2>
            <div className="mt-5 space-y-4 text-pretty leading-relaxed text-muted-foreground">
              {branch.localContent.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Galeri gambar cawangan */}
            <BranchGallery branch={branch} />

            {/* Why choose this branch */}
            <h3 className="mt-10 text-xl font-bold text-brand">
              Mengapa Pilih Klinik Hejaz {branch.shortName}?
            </h3>
            <div className="mt-5 grid gap-5 sm:grid-cols-3">
              {branch.whyLocal.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-border bg-card p-5"
                >
                  <h4 className="font-semibold text-brand">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Areas served */}
            <h3 className="mt-10 text-xl font-bold text-brand">
              Kawasan Yang Kami Layani
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Pesakit dari kawasan berikut kerap berkunjung ke cawangan{' '}
              {branch.shortName}:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {branch.areasServed.map((area) => (
                <li
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                >
                  <MapPin className="h-3.5 w-3.5 text-accent-orange" />
                  {area}
                </li>
              ))}
            </ul>

            {/* Nearby landmarks */}
            <h3 className="mt-10 text-xl font-bold text-brand">
              Lokasi Berhampiran Klinik Hejaz {branch.shortName}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Klinik Hejaz {branch.shortName} terletak berhampiran dengan
              mercu tanda berikut, memudahkan anda mencari kami:
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {branch.landmarks.map((landmark) => (
                <li
                  key={landmark}
                  className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium text-foreground"
                >
                  <Landmark className="h-4 w-4 shrink-0 text-accent-orange" />
                  {landmark}
                </li>
              ))}
            </ul>

            {/* Treatments at this branch */}
            <h3 className="mt-10 text-xl font-bold text-brand">
              Rawatan Utama di {branch.shortName}
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {heroTreatments.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/rawatan/${t.slug}`}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors hover:border-accent-orange"
                  >
                    <span className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-accent-orange" />
                      {t.title}
                    </span>
                    <ArrowRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Directions */}
            <h3 className="mt-10 text-xl font-bold text-brand">
              Cara Ke Klinik
            </h3>
            <div className="mt-4 flex gap-3 rounded-2xl border border-border bg-card p-5">
              <Navigation className="mt-0.5 h-5 w-5 shrink-0 text-accent-orange" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                {branch.directions}
              </p>
            </div>

            {/* Local FAQ */}
            <h3 className="mt-10 text-xl font-bold text-brand">
              Soalan Lazim — {branch.shortName}
            </h3>
            <div className="mt-5">
              <FaqAccordion faqs={branch.localFaqs} />
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <div className="aspect-video w-full overflow-hidden bg-secondary">
                  <iframe
                    src={branch.mapEmbed}
                    title={`Peta lokasi ${branch.name}`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full border-0"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-lg font-bold text-brand">Maklumat Cawangan</h2>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <Building2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-orange" />
                      <span className="font-semibold leading-relaxed text-brand">
                        {branch.name}
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-accent-orange" />
                      <span className="leading-relaxed">{branch.address}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Clock className="h-5 w-5 shrink-0 text-accent-orange" />
                      <span>{branch.hours}</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Phone className="h-5 w-5 shrink-0 text-accent-orange" />
                      <a href={`tel:${branch.phoneRaw}`} className="hover:text-brand">
                        {branch.phone}
                      </a>
                    </li>
                  </ul>
                  <div className="mt-6 flex flex-col gap-3">
                    <a
                      href={`tel:${branch.phoneRaw}`}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
                    >
                      <Phone className="h-4 w-4" />
                      Telefon Klinik
                    </a>
                    <a
                      href={branch.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-orange px-4 py-3 text-sm font-semibold text-accent-orange-foreground transition-opacity hover:opacity-90"
                    >
                      <MessageCircle className="h-4 w-4" />
                      WhatsApp
                    </a>
                    <a
                      href={branch.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-foreground/20 bg-brand px-4 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
                    >
                      <Navigation className="h-4 w-4" />
                      Buka di Google Maps
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Doktor Bertugas */}
              <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
                <h2 className="text-lg font-bold text-brand">Doktor Bertugas</h2>
                <div className="mt-4 flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-accent-orange/15">
                    <Stethoscope className="h-5 w-5 text-accent-orange" />
                  </span>
                  <div>
                    <p className="font-semibold text-brand">{branch.doctor}</p>
                    <p className="text-sm text-muted-foreground">
                      Klinik Hejaz {branch.shortName}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                href="/cawangan"
                className="flex items-center justify-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 text-sm font-medium text-brand transition-colors hover:border-accent-orange"
              >
                Lihat Semua Cawangan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </aside>
        </div>
      </section>

      <CtaBanner
        title={`Tempah Rawatan di ${branch.shortName}`}
        subtitle={`Hubungi cawangan ${branch.locality} hari ini untuk penilaian dan rawatan oleh pasukan kami.`}
      />
    </>
  )
}
