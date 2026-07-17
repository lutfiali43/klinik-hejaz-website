import Link from 'next/link'
import { Phone, MapPin, Clock, MessageCircle } from 'lucide-react'
import { branches, treatments } from '@/data/siteData'

export function Footer() {
  return (
    <footer className="bg-brand text-brand-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <span className="font-logo text-2xl font-extrabold italic leading-none tracking-[-0.039em] text-brand-foreground">
              Klinik Hejaz
            </span>
            <p className="mt-4 text-sm leading-relaxed text-brand-foreground/70">
              Penjagaan kesihatan profesional yang anda boleh percaya di Kuala
              Nerus, Kuala Terengganu, Terengganu.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-orange">
              Rawatan Utama
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
              {treatments.map((t) => (
                <li key={t.slug}>
                  <Link
                    href={`/rawatan/${t.slug}`}
                    className="text-brand-foreground/70 transition-colors hover:text-accent-orange"
                  >
                    {t.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {branches.map((branch) => (
            <div key={branch.slug}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-orange">
                <Link href="/hubungi" className="hover:text-brand-foreground">
                  Klinik Hejaz {branch.shortName}
                </Link>
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                <li className="flex gap-2 text-brand-foreground/70">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-orange" />
                  <span>{branch.address}</span>
                </li>
                <li>
                  <a
                    href={`tel:${branch.phoneRaw}`}
                    className="flex items-center gap-2 text-brand-foreground/70 transition-colors hover:text-accent-orange"
                  >
                    <Phone className="h-4 w-4 shrink-0 text-accent-orange" />
                    {branch.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={branch.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-brand-foreground/70 transition-colors hover:text-accent-orange"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0 text-accent-orange" />
                    WhatsApp
                  </a>
                </li>
                <li className="flex items-center gap-2 text-brand-foreground/70">
                  <Clock className="h-4 w-4 shrink-0 text-accent-orange" />
                  {branch.hours}
                </li>
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-brand-foreground/15 pt-6 text-sm text-brand-foreground/80 sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Klinik Hejaz. Hak cipta
            terpelihara.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            <Link href="/rawatan" className="hover:text-accent-orange">
              Rawatan
            </Link>
            <Link href="/hubungi" className="hover:text-accent-orange">
              Hubungi
            </Link>
            <span aria-hidden="true" className="h-4 w-px bg-brand-foreground/25" />
            <Link href="/privasi-polisi" className="hover:text-accent-orange">
              Dasar Privasi
            </Link>
            <Link href="/terma-syarat" className="hover:text-accent-orange">
              Terma &amp; Syarat
            </Link>
          </div>
        </div>

        <p className="mt-6 max-w-4xl text-xs font-light leading-relaxed text-brand-foreground/70">
          Penafian: Maklumat yang disediakan di laman web ini adalah untuk
          tujuan maklumat am dan pendidikan sahaja, serta tidak bertujuan untuk
          menggantikan nasihat, diagnosis, atau rawatan perubatan profesional.
          Pasukan Klinik Hejaz mengesyorkan agar anda sentiasa dapatkan nasihat
          doktor atau penyedia penjagaan kesihatan yang bertauliah untuk sebarang
          pertanyaan mengenai keadaan perubatan anda.
        </p>
      </div>
    </footer>
  )
}
