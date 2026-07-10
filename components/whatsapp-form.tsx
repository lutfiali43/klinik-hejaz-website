'use client'

import { useMemo, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { MessageCircle, CheckCircle2 } from 'lucide-react'
import { branches, treatments, daerahGroups } from '@/data/siteData'
import { submitToSheet } from '@/lib/submit-to-sheet'

function painLabel(score: number) {
  if (score <= 3) return 'Ringan'
  if (score <= 6) return 'Sederhana'
  return 'Teruk'
}

export function WhatsAppForm() {
  const searchParams = useSearchParams()
  const initialBranch =
    branches.find((b) => b.slug === searchParams.get('cawangan'))?.slug ?? ''

  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    daerah: '',
    branch: initialBranch,
    treatment: '',
    pain: 5,
  })

  const selectedBranch = useMemo(
    () => branches.find((b) => b.slug === form.branch),
    [form.branch],
  )

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!selectedBranch) return

    const phone = form.phone.replace(/^0+/, '').replace(/\s+/g, '')
    const lines = [
      '*Borang Permohonan Rawatan*',
      `Nama Pesakit: ${form.name}`,
      `Telefon: +60${phone}`,
      `Daerah: ${form.daerah}`,
      `Cawangan: ${selectedBranch.name}`,
      `Rawatan: ${form.treatment}`,
      `Skor Tahap Sakit: ${form.pain}/10 (${painLabel(form.pain)})`,
    ]
    void submitToSheet('WhatsApp Kami', {
      Nama: form.name,
      Telefon: `+60${phone}`,
      Daerah: form.daerah,
      Cawangan: selectedBranch.name,
      Rawatan: form.treatment,
      'Skor Sakit': `${form.pain}/10 (${painLabel(form.pain)})`,
    })

    const text = encodeURIComponent(lines.join('\n'))
    const base = selectedBranch.whatsapp.split('?')[0]
    window.open(`${base}?text=${text}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
        <CheckCircle2 className="h-14 w-14 text-whatsapp" />
        <h3 className="mt-4 text-xl font-bold text-brand">
          Terima kasih, {form.name || 'rakan'}!
        </h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          Tetingkap WhatsApp telah dibuka dan permohonan anda sedia untuk
          dihantar ke {selectedBranch?.name}. Jika tidak terbuka, sila cuba
          sekali lagi.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-6 rounded-full border border-brand px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
        >
          Hantar Permohonan Lain
        </button>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-ring/20 focus:border-brand focus:ring-2'
  const labelClass = 'mb-1.5 block text-sm font-medium text-foreground'
  const reqMark = <span className="text-destructive"> *</span>

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <h2 className="text-xl font-bold text-brand">Borang Permohonan Rawatan</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Lengkapkan maklumat berikut. Medan bertanda{' '}
        <span className="text-destructive">*</span> wajib diisi.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className={labelClass}>
            Nama Pesakit{reqMark}
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
            placeholder="Cth: Ahmad bin Ali"
          />
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Nombor Telefon{reqMark}
          </label>
          <div className="flex items-stretch">
            <span className="inline-flex items-center rounded-l-lg border border-r-0 border-input bg-secondary px-3 text-sm font-medium text-foreground">
              +60
            </span>
            <input
              id="phone"
              type="tel"
              inputMode="numeric"
              required
              value={form.phone}
              onChange={(e) =>
                setForm({ ...form, phone: e.target.value.replace(/[^\d]/g, '') })
              }
              className={`${inputClass} rounded-l-none`}
              placeholder="12 345 6789"
            />
          </div>
          <p className="mt-1.5 text-xs text-muted-foreground">
            Masukkan nombor tanpa sifar di hadapan (cth: 12 345 6789).
          </p>
        </div>

        <div>
          <label htmlFor="daerah" className={labelClass}>
            Lokasi (Daerah){reqMark}
          </label>
          <select
            id="daerah"
            required
            value={form.daerah}
            onChange={(e) => setForm({ ...form, daerah: e.target.value })}
            className={inputClass}
          >
            <option value="" disabled>
              Pilih daerah anda
            </option>
            {daerahGroups.map((group) => (
              <optgroup key={group.state} label={group.state}>
                {group.areas.map((d) => (
                  <option key={d} value={`${d}, ${group.state}`}>
                    {d}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="branch" className={labelClass}>
            Pilih Cawangan{reqMark}
          </label>
          <select
            id="branch"
            required
            value={form.branch}
            onChange={(e) => setForm({ ...form, branch: e.target.value })}
            className={inputClass}
          >
            <option value="" disabled>
              Pilih cawangan terdekat
            </option>
            {branches.map((b) => (
              <option key={b.slug} value={b.slug}>
                {b.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="treatment" className={labelClass}>
            Pilih Rawatan{reqMark}
          </label>
          <select
            id="treatment"
            required
            value={form.treatment}
            onChange={(e) => setForm({ ...form, treatment: e.target.value })}
            className={inputClass}
          >
            <option value="" disabled>
              Pilih jenis rawatan
            </option>
            {treatments.map((t) => (
              <option key={t.slug} value={t.title}>
                {t.title}
              </option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <div className="flex items-end justify-between">
            <label htmlFor="pain" className={labelClass}>
              Skor Tahap Sakit (1-10)
            </label>
            <div className="text-right leading-none">
              <span className="text-2xl font-black text-accent-orange-foreground">
                {form.pain}
              </span>
              <span className="block text-xs font-medium text-muted-foreground">
                {painLabel(form.pain)}
              </span>
            </div>
          </div>
          <input
            id="pain"
            type="range"
            min={1}
            max={10}
            step={1}
            value={form.pain}
            onChange={(e) =>
              setForm({ ...form, pain: Number(e.target.value) })
            }
            className="mt-2 w-full accent-brand"
          />
          <div className="mt-1 flex justify-between text-xs text-muted-foreground">
            <span>Ringan</span>
            <span>Sederhana</span>
            <span>Teruk</span>
          </div>
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90 sm:col-span-2"
        >
          <MessageCircle className="h-5 w-5" />
          Hantar ke WhatsApp Cawangan
        </button>
        <p className="text-center text-xs text-muted-foreground sm:col-span-2">
          Borang anda akan dihantar terus ke WhatsApp cawangan yang dipilih
          untuk tindakan segera.
        </p>
      </div>
    </form>
  )
}
