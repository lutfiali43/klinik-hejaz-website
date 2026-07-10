import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { TrackingScripts, TrackingNoScript } from '@/components/tracking'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['700', '800', '900'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://kliniknurani.com'),
  title: {
    default: 'Klinik Nurani | Klinik Pakar di Sabak Bernam & Sungai Buloh',
    template: '%s | Klinik Nurani',
  },
  description:
    'Klinik Nurani menawarkan rawatan sakit lutut, sendi, belakang, gout, program berat badan dan rawatan ibu & anak di Sabak Bernam dan Sungai Buloh, Selangor.',
  keywords: [
    'Klinik Nurani',
    'klinik Sabak Bernam',
    'klinik Sungai Buloh',
    'rawatan sakit lutut',
    'rawatan gout',
    'rawatan sakit belakang',
    'rawatan saraf',
    'klinik pakar Selangor',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Klinik Nurani | Klinik Pakar di Sabak Bernam & Sungai Buloh',
    description:
      'Rawatan profesional untuk sakit lutut, sendi, belakang, gout dan lebih lagi. Dua cawangan di Selangor.',
    type: 'website',
    locale: 'ms_MY',
    url: 'https://kliniknurani.com',
    siteName: 'Klinik Nurani',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Klinik Nurani | Klinik Pakar di Sabak Bernam & Sungai Buloh',
    description:
      'Rawatan profesional untuk sakit lutut, sendi, belakang, gout dan lebih lagi. Dua cawangan di Selangor.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  // Tambah kod pengesahan di sini apabila tersedia (Google Search Console, dll.)
  // verification: { google: 'kod-anda' },
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ms" className={`${inter.variable} ${montserrat.variable} bg-background`}>
      <body className="font-sans antialiased">
        <TrackingNoScript />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
        <TrackingScripts />
      </body>
    </html>
  )
}
