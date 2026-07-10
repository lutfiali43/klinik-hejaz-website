import { Phone, MessageCircle } from 'lucide-react'
import { branches } from '@/data/siteData'

export function CtaBanner({
  title = 'Sedia Untuk Penjagaan Yang Lebih Baik?',
  subtitle = 'Hubungi cawangan terdekat anda hari ini. Pasukan kami sedia membantu anda.',
}: {
  title?: string
  subtitle?: string
}) {
  return (
    <section className="bg-brand">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-balance text-3xl font-bold text-brand-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-brand-foreground/70">
            {subtitle}
          </p>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:mx-auto lg:max-w-3xl">
          {branches.map((branch) => (
            <div
              key={branch.slug}
              className="rounded-2xl bg-brand-foreground/5 p-5 ring-1 ring-brand-foreground/10"
            >
              <p className="font-semibold text-brand-foreground">
                {branch.shortName}
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <a
                  href={`tel:${branch.phoneRaw}`}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-foreground px-4 py-2.5 text-sm font-semibold text-brand transition-opacity hover:opacity-90"
                >
                  <Phone className="h-4 w-4" />
                  Telefon
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
          ))}
        </div>
      </div>
    </section>
  )
}
