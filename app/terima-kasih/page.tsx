import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Home, MessageCircle, Phone } from 'lucide-react'
import { branches } from '@/data/siteData'
import { PageHeader } from '@/components/page-header'
import { ConversionTracker } from '@/components/conversion-tracker'

export const metadata: Metadata = {
  title: 'Terima Kasih',
  description:
    'Terima kasih kerana menghubungi Klinik Hejaz Kuala Nerus. Permohonan anda telah diterima dan kami akan menghubungi anda melalui WhatsApp.',
  alternates: { canonical: '/terima-kasih' },
  robots: { index: false, follow: true },
}

export default function ThankYouPage() {
  const branch = branches[0]

  return (
    <>
      <ConversionTracker />
      <PageHeader
        eyebrow="Terima Kasih"
        title="Permohonan Anda Diterima"
        description="Terima kasih kerana menghubungi Klinik Hejaz Kuala Nerus. Pastikan tetingkap WhatsApp yang terbuka dihantar supaya pasukan kami dapat membalas anda."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-sm sm:p-12">
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
              <CheckCircle2 className="h-9 w-9 text-brand" />
            </span>
            <h2 className="mt-6 text-2xl font-bold text-brand">
              Kami Akan Hubungi Anda Segera
            </h2>
            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              Jika tetingkap WhatsApp tidak terbuka secara automatik, anda boleh
              menghubungi kami terus melalui butang di bawah.
            </p>

            <div className="mt-8 flex w-full flex-col gap-3 sm:flex-row">
              <a
                href={`tel:${branch.phoneRaw}`}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-brand-foreground transition-opacity hover:opacity-90"
              >
                <Phone className="h-4 w-4" />
                {branch.phone}
              </a>
              <a
                href={branch.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-accent-orange px-5 py-3 text-sm font-semibold text-accent-orange-foreground transition-opacity hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Kami
              </a>
            </div>

            <Link
              href="/"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-accent-orange-foreground"
            >
              <Home className="h-4 w-4" />
              Kembali ke Laman Utama
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
