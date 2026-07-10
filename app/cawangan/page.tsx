import type { Metadata } from 'next'
import { branches } from '@/data/siteData'
import { PageHeader } from '@/components/page-header'
import { BranchSelectorCard } from '@/components/branch-selector-card'
import { CtaBanner } from '@/components/cta-banner'
import { MedicalClinicJsonLd } from '@/components/json-ld'

export const metadata: Metadata = {
  title: 'Cawangan Kami',
  description:
    'Lawati Klinik Nurani di Sabak Bernam atau Sungai Buloh, Selangor. Lihat lokasi, waktu operasi dan hubungi kami terus melalui telefon atau WhatsApp.',
  alternates: { canonical: '/cawangan' },
  openGraph: {
    title: 'Cawangan Kami | Klinik Nurani',
    description:
      'Lokasi, waktu operasi dan hubungan setiap cawangan Klinik Nurani di Selangor.',
    type: 'website',
    locale: 'ms_MY',
    url: 'https://kliniknurani.com/cawangan',
  },
}

export default function BranchesPage() {
  return (
    <>
      <MedicalClinicJsonLd />
      <PageHeader
        eyebrow="Lokasi Kami"
        title="Cawangan Klinik Nurani"
        description="Dua cawangan strategik di Selangor untuk memudahkan anda mendapatkan penjagaan kesihatan berkualiti."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {branches.map((branch) => (
              <BranchSelectorCard key={branch.slug} branch={branch} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Ada Soalan Sebelum Berkunjung?"
        subtitle="Hubungi cawangan pilihan anda dan pasukan kami akan membantu menjawab segala pertanyaan."
      />
    </>
  )
}
