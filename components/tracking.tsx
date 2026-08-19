import Script from 'next/script'

/**
 * Google Tag Manager + Facebook (Meta) Pixel scaffolding.
 *
 * Nothing is injected until the matching environment variable is set, so the
 * site stays clean until the real IDs are provided. To activate, set these in
 * the Vercel project (Settings -> Environment Variables) or .env:
 *
 *   NEXT_PUBLIC_GTM_ID       e.g. GTM-XXXXXXX
 *   NEXT_PUBLIC_FB_PIXEL_ID  e.g. 123456789012345
 *
 * NOTE: For static export these are inlined at build time, so set them before
 * running the production build.
 */
const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID

/** GA4 (gtag.js) — sentiasa aktif site-wide untuk Klinik Hejaz. */
const GA4_ID = 'G-P16PLHVEJP'

/** Google Tag Manager — sentiasa aktif site-wide untuk Klinik Hejaz. */
const GTM_ID = 'GTM-5QZZQG22'

/** Scripts to render near the top of <body>. */
export function TrackingScripts() {
  return (
    <>
      <Script
        id="ga4-src"
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA4_ID}');`}
      </Script>

      {GTM_ID ? (
        <Script id="gtm-base" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
      ) : null}

      {FB_PIXEL_ID ? (
        <Script id="fb-pixel-base" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${FB_PIXEL_ID}');
fbq('track', 'PageView');`}
        </Script>
      ) : null}
    </>
  )
}

/** No-script fallbacks to render immediately after the opening <body> tag. */
export function TrackingNoScript() {
  return (
    <>
      {GTM_ID ? (
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
            title="Google Tag Manager"
          />
        </noscript>
      ) : null}

      {FB_PIXEL_ID ? (
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      ) : null}
    </>
  )
}
