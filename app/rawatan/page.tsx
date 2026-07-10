import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { TreatmentGrid } from '@/components/treatment-grid'
import { CtaBanner } from '@/components/cta-banner'
import { treatments } from '@/data/siteData'

export const metadata: Metadata = {
  title: 'Rawatan Kami',
  description:
    'Senarai lengkap rawatan di Klinik Hejaz — sakit lutut, sendi, belakang, gout, program berat badan, rawatan ibu & anak dan banyak lagi di Kuala Nerus, Terengganu.',
  alternates: { canonical: '/rawatan' },
  openGraph: {
    title: 'Rawatan Kami | Klinik Hejaz',
    description:
      'Senarai lengkap rawatan profesional di Klinik Hejaz, Kuala Nerus, Terengganu.',
    type: 'website',
    locale: 'ms_MY',
    url: 'https://klinikhejaz.com/rawatan',
  },
}

export default function TreatmentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Katalog Rawatan"
        title="Rawatan Kami"
        description={`${treatments.length} jenis rawatan profesional di bawah satu bumbung. Tapis mengikut kategori untuk mencari rawatan yang anda perlukan.`}
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <TreatmentGrid />
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
