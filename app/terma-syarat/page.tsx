import type { Metadata } from 'next'
import { SITE } from '@/data/siteData'
import { PageHeader } from '@/components/page-header'
import { LegalSection, LegalList } from '@/components/legal-content'

export const metadata: Metadata = {
  title: 'Terma & Syarat',
  description:
    'Terma & Syarat penggunaan laman web Klinik Nurani. Sila baca dengan teliti sebelum menggunakan perkhidmatan dan maklumat di laman web ini.',
  alternates: { canonical: '/terma-syarat' },
  openGraph: {
    title: 'Terma & Syarat | Klinik Nurani',
    description:
      'Terma & Syarat penggunaan laman web dan perkhidmatan Klinik Nurani.',
    type: 'website',
    locale: 'ms_MY',
    url: `${SITE.url}/terma-syarat`,
  },
}

const lastUpdated = '25 Jun 2026'

export default function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Terma & Syarat"
        title="Terma & Syarat"
        description="Sila baca terma dan syarat ini dengan teliti sebelum menggunakan laman web dan perkhidmatan Klinik Nurani."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            Kemas kini terakhir: {lastUpdated}
          </p>

          <div className="mt-8">
            <LegalSection title="1. Penerimaan Terma">
              <p>
                Dengan mengakses dan menggunakan laman web {SITE.name}, anda
                bersetuju untuk terikat dengan Terma &amp; Syarat ini. Jika anda
                tidak bersetuju dengan mana-mana bahagian terma ini, sila
                berhenti menggunakan laman web kami.
              </p>
            </LegalSection>

            <LegalSection title="2. Penggunaan Laman Web">
              <p>
                Anda bersetuju untuk menggunakan laman web ini hanya untuk
                tujuan yang sah dan dengan cara yang tidak melanggar hak orang
                lain. Anda tidak dibenarkan:
              </p>
              <LegalList
                items={[
                  'Menggunakan laman web untuk tujuan penipuan atau menyalahi undang-undang',
                  'Cuba mengakses sistem atau data tanpa kebenaran',
                  'Menghantar maklumat palsu, mengelirukan, atau berniat jahat melalui borang kami',
                  'Mengganggu atau merosakkan fungsi laman web',
                ]}
              />
            </LegalSection>

            <LegalSection title="3. Maklumat Perubatan &mdash; Penafian">
              <p>
                Maklumat yang disediakan di laman web ini, termasuk kalkulator
                BMI dan kalori, adalah untuk{' '}
                <strong className="text-foreground">
                  tujuan maklumat am dan pendidikan sahaja
                </strong>{' '}
                dan tidak bertujuan untuk menggantikan nasihat, diagnosis atau
                rawatan perubatan profesional.
              </p>
              <p>
                Keputusan kalkulator kesihatan adalah anggaran sahaja dan
                mungkin tidak tepat untuk setiap individu. Sentiasa dapatkan
                nasihat doktor atau penyedia penjagaan kesihatan bertauliah
                untuk sebarang keadaan perubatan. Jangan abaikan nasihat
                perubatan profesional kerana sesuatu yang anda baca di laman web
                ini.
              </p>
            </LegalSection>

            <LegalSection title="4. Temujanji & Perkhidmatan">
              <p>
                Permohonan temujanji melalui laman web ini adalah pertanyaan dan
                tidak mengesahkan temujanji secara automatik. Pengesahan
                temujanji akan dibuat oleh kakitangan cawangan melalui WhatsApp
                atau telefon. Perkhidmatan, harga dan ketersediaan rawatan
                tertakluk kepada perubahan tanpa notis terlebih dahulu.
              </p>
            </LegalSection>

            <LegalSection title="5. Harta Intelek">
              <p>
                Semua kandungan di laman web ini, termasuk teks, logo, imej dan
                reka bentuk, adalah hak milik {SITE.name} dan dilindungi oleh
                undang-undang harta intelek Malaysia. Anda tidak dibenarkan
                menyalin, mengedar atau menggunakan kandungan ini tanpa
                kebenaran bertulis daripada kami.
              </p>
            </LegalSection>

            <LegalSection title="6. Pautan Pihak Ketiga">
              <p>
                Laman web kami mungkin mengandungi pautan ke laman web pihak
                ketiga (seperti WhatsApp dan Google Maps). Kami tidak
                bertanggungjawab terhadap kandungan, dasar privasi atau amalan
                laman web pihak ketiga tersebut.
              </p>
            </LegalSection>

            <LegalSection title="7. Had Liabiliti">
              <p>
                {SITE.name} tidak akan bertanggungjawab terhadap sebarang
                kerugian atau kerosakan yang timbul daripada penggunaan laman
                web ini atau pergantungan kepada maklumat yang terkandung di
                dalamnya, setakat yang dibenarkan oleh undang-undang Malaysia.
              </p>
            </LegalSection>

            <LegalSection title="8. Perlindungan Data Peribadi">
              <p>
                Pengumpulan dan penggunaan maklumat peribadi anda adalah
                tertakluk kepada Dasar Privasi kami, yang selaras dengan Akta
                Perlindungan Data Peribadi 2010 (PDPA) Malaysia.
              </p>
            </LegalSection>

            <LegalSection title="9. Undang-Undang Yang Mentadbir">
              <p>
                Terma &amp; Syarat ini ditadbir dan ditafsirkan mengikut
                undang-undang Malaysia. Sebarang pertikaian yang timbul akan
                tertakluk kepada bidang kuasa eksklusif mahkamah Malaysia.
              </p>
            </LegalSection>

            <LegalSection title="10. Hubungi Kami">
              <p>
                Untuk sebarang pertanyaan mengenai Terma &amp; Syarat ini, sila
                hubungi kami di:
              </p>
              <LegalList
                items={[
                  <>E-mel: {SITE.email}</>,
                  <>Laman web: {SITE.url}</>,
                ]}
              />
            </LegalSection>
          </div>
        </div>
      </section>
    </>
  )
}
