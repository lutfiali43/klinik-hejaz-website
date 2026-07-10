import type { Metadata } from 'next'
import { Suspense } from 'react'
import { Clock, MapPin, ShieldCheck, MessageCircleQuestion } from 'lucide-react'
import { branches } from '@/data/siteData'
import { PageHeader } from '@/components/page-header'
import { WhatsAppForm } from '@/components/whatsapp-form'

export const metadata: Metadata = {
  title: 'Borang Permohonan Rawatan',
  description:
    'Hantar permohonan rawatan terus ke WhatsApp Klinik Hejaz Kuala Nerus. Pilih jenis rawatan untuk tindakan segera.',
  alternates: { canonical: '/permohonan' },
  openGraph: {
    title: 'Borang Permohonan Rawatan | Klinik Hejaz',
    description:
      'Hantar permohonan rawatan terus ke WhatsApp Klinik Hejaz Kuala Nerus untuk tindakan segera.',
    type: 'website',
    locale: 'ms_MY',
    url: 'https://klinikhejaz.com/permohonan',
  },
}

const sidebarItems = [
  {
    icon: Clock,
    title: 'Respon Pantas',
    desc: 'Mesej terus ke WhatsApp cawangan untuk tindakan segera.',
  },
  {
    icon: MapPin,
    title: `${branches.length} Cawangan`,
    desc: 'Pilih cawangan terdekat dengan lokasi anda.',
  },
  {
    icon: ShieldCheck,
    title: 'Rahsia Terjamin',
    desc: 'Maklumat anda hanya dikongsi dengan cawangan pilihan.',
  },
  {
    icon: MessageCircleQuestion,
    title: 'Konsultasi Mudah',
    desc: 'Nyatakan tahap sakit untuk penilaian awal.',
  },
]

export default function PermohonanPage() {
  return (
    <>
      <PageHeader
        eyebrow="WhatsApp Kami"
        title="Hantar Permohonan Rawatan"
        description="Lengkapkan borang dan ia akan dihantar terus ke WhatsApp cawangan pilihan anda untuk tindakan segera."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
          {/* Form */}
          <Suspense
            fallback={
              <div className="rounded-2xl border border-border bg-card p-8 text-sm text-muted-foreground shadow-sm">
                Memuatkan borang...
              </div>
            }
          >
            <WhatsAppForm />
          </Suspense>

          {/* Sidebar */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-brand p-6 text-brand-foreground">
              <h2 className="text-lg font-bold">Kenapa Hantar Permohonan?</h2>
              <p className="mt-2 text-sm leading-relaxed text-brand-foreground/80">
                Permohonan anda terus sampai kepada pasukan cawangan pilihan
                melalui WhatsApp, membolehkan kami menyusun temujanji dan
                rawatan dengan lebih cepat.
              </p>
            </div>

            {sidebarItems.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand">
                    <Icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-foreground">{item.title}</h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
