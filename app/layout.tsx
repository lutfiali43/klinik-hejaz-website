import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Montserrat, Be_Vietnam_Pro } from 'next/font/google'
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
const beVietnam = Be_Vietnam_Pro({
  variable: '--font-be-vietnam',
  subsets: ['latin'],
  weight: ['800'],
  style: ['italic'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://klinikhejaz.com'),
  title: {
    default: 'Klinik Hejaz | Klinik Kesihatan di Kuala Nerus, Terengganu',
    template: '%s | Klinik Hejaz',
  },
  description:
    'Klinik Hejaz menawarkan rawatan sakit lutut, sendi, belakang, gout, program berat badan dan rawatan ibu & anak di Kuala Nerus, Kuala Terengganu, Terengganu.',
  keywords: [
    'Klinik Hejaz',
    'klinik Kuala Nerus',
    'klinik Kuala Terengganu',
    'klinik Terengganu',
    'rawatan sakit lutut',
    'rawatan gout',
    'rawatan sakit belakang',
    'rawatan saraf',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Klinik Hejaz | Klinik Kesihatan di Kuala Nerus, Terengganu',
    description:
      'Rawatan profesional untuk sakit lutut, sendi, belakang, gout dan lebih lagi di Kuala Nerus, Terengganu.',
    type: 'website',
    locale: 'ms_MY',
    url: 'https://klinikhejaz.com',
    siteName: 'Klinik Hejaz',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Klinik Hejaz | Klinik Kesihatan di Kuala Nerus, Terengganu',
    description:
      'Rawatan profesional untuk sakit lutut, sendi, belakang, gout dan lebih lagi di Kuala Nerus, Terengganu.',
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
    <html
      lang="ms"
      className={`${inter.variable} ${montserrat.variable} ${beVietnam.variable} bg-background`}
    >
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
