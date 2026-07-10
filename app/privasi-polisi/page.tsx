import type { Metadata } from 'next'
import { SITE } from '@/data/siteData'
import { PageHeader } from '@/components/page-header'
import { LegalSection, LegalList } from '@/components/legal-content'

export const metadata: Metadata = {
  title: 'Dasar Privasi',
  description:
    'Dasar Privasi Klinik Hejaz selaras dengan Akta Perlindungan Data Peribadi 2010 (PDPA) Malaysia. Ketahui cara kami mengumpul, menggunakan dan melindungi maklumat peribadi anda.',
  alternates: { canonical: '/privasi-polisi' },
  openGraph: {
    title: 'Dasar Privasi | Klinik Hejaz',
    description:
      'Dasar Privasi Klinik Hejaz selaras dengan Akta Perlindungan Data Peribadi 2010 (PDPA) Malaysia.',
    type: 'website',
    locale: 'ms_MY',
    url: `${SITE.url}/privasi-polisi`,
  },
}

const lastUpdated = '25 Jun 2026'

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Dasar Privasi"
        title="Dasar Privasi"
        description="Komitmen kami melindungi maklumat peribadi anda selaras dengan Akta Perlindungan Data Peribadi 2010 (PDPA) Malaysia."
      />

      <section className="bg-background py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-sm text-muted-foreground">
            Kemas kini terakhir: {lastUpdated}
          </p>

          <div className="mt-8">
            <LegalSection title="1. Pengenalan">
              <p>
                {SITE.name} (&ldquo;kami&rdquo;) komited untuk melindungi
                privasi dan maklumat peribadi anda. Dasar Privasi ini
                menerangkan cara kami mengumpul, menggunakan, menyimpan dan
                melindungi maklumat peribadi anda selaras dengan{' '}
                <strong className="text-foreground">
                  Akta Perlindungan Data Peribadi 2010 (Akta 709)
                </strong>{' '}
                yang berkuat kuasa di Malaysia.
              </p>
              <p>
                Dengan menggunakan laman web kami atau memberikan maklumat
                peribadi kepada kami, anda bersetuju dengan terma yang
                dinyatakan dalam Dasar Privasi ini.
              </p>
            </LegalSection>

            <LegalSection title="2. Maklumat Yang Kami Kumpul">
              <p>
                Kami mungkin mengumpul maklumat peribadi berikut apabila anda
                menghubungi kami, mengisi borang permohonan, atau menggunakan
                kalkulator kesihatan di laman web kami:
              </p>
              <LegalList
                items={[
                  'Nama penuh',
                  'Nombor telefon dan butiran hubungan',
                  'Daerah atau kawasan tempat tinggal',
                  'Maklumat kesihatan asas yang anda berikan secara sukarela (seperti umur, jantina, tinggi, berat, dan jenis rawatan yang diminati)',
                  'Cawangan yang anda pilih untuk dihubungi',
                ]}
              />
            </LegalSection>

            <LegalSection title="3. Tujuan Pengumpulan Maklumat">
              <p>Maklumat peribadi anda dikumpul untuk tujuan berikut:</p>
              <LegalList
                items={[
                  'Menghubungi anda melalui WhatsApp atau telefon berkaitan pertanyaan dan temujanji',
                  'Menyediakan maklumat rawatan dan perkhidmatan kesihatan yang sesuai',
                  'Memproses permohonan temujanji di cawangan pilihan anda',
                  'Menambah baik perkhidmatan dan kandungan laman web kami',
                  'Mematuhi keperluan undang-undang dan peraturan yang berkaitan',
                ]}
              />
            </LegalSection>

            <LegalSection title="4. Cara Maklumat Dihantar">
              <p>
                Borang di laman web kami menghantar maklumat anda terus kepada
                kami melalui WhatsApp dan/atau direkodkan dalam sistem dalaman
                kami untuk tujuan susulan. Kami tidak menjual, menyewa atau
                berkongsi maklumat peribadi anda dengan pihak ketiga untuk
                tujuan pemasaran.
              </p>
            </LegalSection>

            <LegalSection title="5. Perkongsian dengan Pihak Ketiga">
              <p>
                Kami mungkin menggunakan perkhidmatan pihak ketiga yang
                dipercayai untuk operasi laman web (seperti Google Analytics
                untuk statistik trafik dan Google Sheets untuk penyimpanan
                rekod pertanyaan). Penyedia ini terikat dengan dasar privasi
                masing-masing. Kami hanya berkongsi maklumat apabila dikehendaki
                oleh undang-undang atau pihak berkuasa yang sah.
              </p>
            </LegalSection>

            <LegalSection title="6. Keselamatan Data">
              <p>
                Kami mengambil langkah munasabah untuk melindungi maklumat
                peribadi anda daripada akses tanpa kebenaran, kehilangan,
                penyalahgunaan atau pendedahan. Walau bagaimanapun, tiada kaedah
                penghantaran melalui internet yang 100% selamat, dan kami tidak
                dapat menjamin keselamatan mutlak.
              </p>
            </LegalSection>

            <LegalSection title="7. Hak Anda di Bawah PDPA">
              <p>
                Selaras dengan Akta Perlindungan Data Peribadi 2010, anda
                berhak untuk:
              </p>
              <LegalList
                items={[
                  'Mengakses maklumat peribadi anda yang kami simpan',
                  'Meminta pembetulan maklumat yang tidak tepat atau tidak lengkap',
                  'Menarik balik persetujuan anda untuk pemprosesan data pada bila-bila masa',
                  'Mengehadkan pemprosesan maklumat peribadi anda',
                ]}
              />
            </LegalSection>

            <LegalSection title="8. Kuki (Cookies)">
              <p>
                Laman web kami mungkin menggunakan kuki dan teknologi serupa
                untuk meningkatkan pengalaman pengguna dan menganalisis trafik
                laman. Anda boleh mengawal atau memadam kuki melalui tetapan
                pelayar anda.
              </p>
            </LegalSection>

            <LegalSection title="9. Perubahan kepada Dasar Ini">
              <p>
                Kami berhak mengemas kini Dasar Privasi ini dari semasa ke
                semasa. Sebarang perubahan akan dipaparkan di halaman ini dengan
                tarikh kemas kini yang dikemaskinikan.
              </p>
            </LegalSection>

            <LegalSection title="10. Hubungi Kami">
              <p>
                Jika anda mempunyai sebarang pertanyaan tentang Dasar Privasi
                ini atau ingin melaksanakan hak anda, sila hubungi kami di:
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
