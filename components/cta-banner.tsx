import { Phone, MessageCircle } from 'lucide-react'
import { branches } from '@/data/siteData'

export function CtaBanner({
  title = 'Sedia Untuk Penjagaan Yang Lebih Baik?',
  subtitle = 'Hubungi kami hari ini. Pasukan Klinik Hejaz sedia membantu anda dan keluarga.',
}: {
  title?: string
  subtitle?: string
}) {
  const branch = branches[0]

  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-logo text-3xl font-extrabold italic leading-[1.15] tracking-[-0.039em] text-brand-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty text-brand-foreground/70">
            {subtitle}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${branch.phoneRaw}`}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-foreground px-6 py-3 text-base font-semibold text-brand transition-opacity hover:opacity-90"
            >
              <Phone className="h-5 w-5" />
              {branch.phone}
            </a>
            <a
              href={branch.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-orange px-6 py-3 text-base font-semibold text-accent-orange-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
