// Hantar data borang ke Google Sheet melalui Google Apps Script Web App.
// URL Web App disimpan dalam env var NEXT_PUBLIC_SHEETS_URL.
// Kerana laman ini static export, panggilan dibuat terus dari pelayar
// menggunakan mod "no-cors" supaya tiada masalah CORS.

export async function submitToSheet(
  sheet: string,
  data: Record<string, string>,
): Promise<void> {
  const url = process.env.NEXT_PUBLIC_SHEETS_URL
  if (!url) {
    console.log('[v0] NEXT_PUBLIC_SHEETS_URL tidak ditetapkan, langkau hantar ke Sheet')
    return
  }

  try {
    await fetch(url, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify({
        sheet,
        ...data,
        timestamp: new Date().toLocaleString('ms-MY', {
          timeZone: 'Asia/Kuala_Lumpur',
        }),
      }),
    })
  } catch (err) {
    // Senyap sahaja — jangan halang aliran WhatsApp jika Sheet gagal.
    console.log('[v0] Gagal hantar ke Sheet:', (err as Error).message)
  }
}
