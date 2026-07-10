import type { Metadata } from 'next'
import { Phone, MessageCircle, MapPin, Clock } from 'lucide-react'
import { branches } from '@/data/siteData'
import { PageHeader } from '@/components/page-header'
import { ContactForm } from '@/components/contact-form'
import { MedicalClinicJsonLd } from '@/components/json-ld'

export const metadata: Metadata = {
  title: 'Hubungi Kami',
  description:
    'Hubungi Klinik Hejaz di Kuala Nerus, Kuala Terengganu. Telefon, WhatsApp, lokasi peta dan borang pertanyaan tersedia.',
  alternates: { canonical: '/hubungi' },
  openGraph: {
    title: 'Hubungi Kami | Klinik Hejaz',
    description:
      'Telefon, WhatsApp dan lokasi peta Klinik Hejaz di Kuala Nerus, Terengganu.',
    type: 'website',
    locale: 'ms_MY',
    url: 'https://klinikhejaz.com/hubungi',
  },
}

export default function ContactPage() {
  return (
    <>
      <MedicalClinicJsonLd />
      <PageHeader
        eyebrow="Hubungi Kami"
        title="Hubungi Kami"
        description="Ada soalan tentang rawatan kami? Hubungi terus melalui telefon, WhatsApp atau hantar pertanyaan melalui borang di bawah."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          {/* Branch contact details */}
          <div>
            <h2 className="text-2xl font-bold text-brand">
              Lokasi Klinik Kami
            </h2>
            <div className="mt-6 space-y-6">
              {branches.map((branch) => (
                <div
                  key={branch.slug}
                  className="overflow-hidden rounded-2xl border border-border bg-card"
                >
                  <div className="aspect-[16/9] w-full bg-secondary">
                    <iframe
                      src={branch.mapEmbed}
                      title={`Peta ${branch.name}`}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="h-full w-full border-0"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-brand">
                      {branch.name}
                    </h3>
                    <ul className="mt-3 space-y-2.5 text-sm text-muted-foreground">
                      <li className="flex gap-2.5">
                        <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-orange" />
                        {branch.address}
                      </li>
                      <li className="flex items-center gap-2.5">
                        <Clock className="h-4 w-4 shrink-0 text-accent-orange" />
                        {branch.hours}
                      </li>
                    </ul>
                    <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                      <a
                        href={`tel:${branch.phoneRaw}`}
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
                      >
                        <Phone className="h-4 w-4" />
                        {branch.phone}
                      </a>
                      <a
                        href={branch.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent-orange px-4 py-2.5 text-sm font-semibold text-accent-orange-foreground transition-opacity hover:opacity-90"
                      >
                        <MessageCircle className="h-4 w-4" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Inquiry form */}
          <div>
            <h2 className="text-2xl font-bold text-brand">
              Hantar Pertanyaan
            </h2>
            <p className="mt-2 text-muted-foreground">
              Isi borang dan kami akan menghubungi anda melalui WhatsApp.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
