'use client'

import { useEffect } from 'react'

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

/**
 * Tolak event konversi ke dataLayer apabila halaman terima kasih dimuat.
 * Guna event ini sebagai pencetus konversi di Google Tag Manager (GTM-5QZZQG22)
 * atau di Google Ads. Halaman /terima-kasih juga boleh dijadikan URL konversi.
 */
export function ConversionTracker() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'form_submit_hubungi' })
  }, [])

  return null
}
