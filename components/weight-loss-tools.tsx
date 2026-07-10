'use client'

import { useMemo, useState } from 'react'
import { Activity, Scale, MessageCircle, CheckCircle2, Flame } from 'lucide-react'
import { branches, daerahGroups } from '@/data/siteData'
import { submitToSheet } from '@/lib/submit-to-sheet'

const activityOptions = [
  { value: '1.2', label: 'Tidak aktif (kerja meja)' },
  { value: '1.375', label: 'Ringan (senaman 1-3 hari/minggu)' },
  { value: '1.55', label: 'Sederhana (senaman 3-5 hari/minggu)' },
  { value: '1.725', label: 'Aktif (senaman 6-7 hari/minggu)' },
  { value: '1.9', label: 'Sangat aktif (kerja fizikal berat)' },
]

type Tone = 'good' | 'warn' | 'bad'

const toneBox: Record<Tone, string> = {
  good: 'border-whatsapp/40 bg-whatsapp/10',
  warn: 'border-accent-orange/50 bg-accent-orange/10',
  bad: 'border-destructive/50 bg-destructive/10',
}
const toneText: Record<Tone, string> = {
  good: 'text-whatsapp',
  warn: 'text-accent-orange',
  bad: 'text-destructive',
}

function bmiCategory(bmi: number): { label: string; tone: Tone } {
  if (bmi < 18.5) return { label: 'Kurang Berat', tone: 'bad' }
  if (bmi < 25) return { label: 'Normal / Sihat', tone: 'good' }
  if (bmi < 30) return { label: 'Berlebihan Berat', tone: 'warn' }
  return { label: 'Obes', tone: 'bad' }
}

export function WeightLossTools() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    gender: 'perempuan',
    age: '',
    height: '',
    weight: '',
    activity: '1.375',
    name: '',
    phone: '',
    daerah: '',
    branch: '',
  })

  const h = Number(form.height)
  const w = Number(form.weight)
  const age = Number(form.age)

  const bmi = useMemo(() => {
    if (h > 0 && w > 0) return w / (h / 100) ** 2
    return null
  }, [h, w])

  const calorie = useMemo(() => {
    if (!(h > 0 && w > 0 && age > 0)) return null
    const bmr =
      form.gender === 'lelaki'
        ? 10 * w + 6.25 * h - 5 * age + 5
        : 10 * w + 6.25 * h - 5 * age - 161
    const tdee = bmr * Number(form.activity)
    return { maintain: Math.round(tdee), target: Math.round(tdee - 500) }
  }, [h, w, age, form.gender, form.activity])

  const bmiCat = bmi !== null ? bmiCategory(bmi) : null

  const selectedBranch = useMemo(
    () => branches.find((b) => b.slug === form.branch),
    [form.branch],
  )

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!selectedBranch) return

    const phone = form.phone.replace(/^0+/, '').replace(/\s+/g, '')
    const lines = [
      '*Borang Program Berat Badan*',
      `Nama Pesakit: ${form.name}`,
      `Telefon: +60${phone}`,
      `Daerah: ${form.daerah}`,
      `Cawangan: ${selectedBranch.name}`,
      '',
      '*Keputusan Kalkulator*',
      `Jantina: ${form.gender === 'lelaki' ? 'Lelaki' : 'Perempuan'}`,
      `Umur: ${form.age} tahun`,
      `Tinggi: ${form.height} cm`,
      `Berat: ${form.weight} kg`,
      bmi !== null
        ? `BMI: ${bmi.toFixed(1)} (${bmiCat?.label})`
        : 'BMI: -',
      calorie
        ? `Kalori Penyelenggaraan: ${calorie.maintain} kcal/hari`
        : 'Kalori Penyelenggaraan: -',
      calorie
        ? `Kalori Sasaran Turun Berat: ${calorie.target} kcal/hari`
        : 'Kalori Sasaran Turun Berat: -',
    ]
    void submitToSheet('BMI Kalori', {
      Nama: form.name,
      Telefon: `+60${phone}`,
      Daerah: form.daerah,
      Cawangan: selectedBranch.name,
      Jantina: form.gender === 'lelaki' ? 'Lelaki' : 'Perempuan',
      Umur: form.age,
      'Tinggi (cm)': form.height,
      'Berat (kg)': form.weight,
      BMI: bmi !== null ? `${bmi.toFixed(1)} (${bmiCat?.label})` : '-',
      'Kalori Penyelenggaraan': calorie ? `${calorie.maintain} kcal` : '-',
      'Kalori Sasaran': calorie ? `${calorie.target} kcal` : '-',
    })

    const text = encodeURIComponent(lines.join('\n'))
    const base = selectedBranch.whatsapp.split('?')[0]
    window.open(`${base}?text=${text}`, '_blank', 'noopener,noreferrer')
    setSubmitted(true)
  }

  const inputClass =
    'w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-ring/20 focus:border-brand focus:ring-2'
  const labelClass = 'mb-1.5 block text-sm font-medium text-foreground'
  const reqMark = <span className="text-destructive"> *</span>

  return (
    <section className="bg-secondary py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent-orange/20 px-4 py-1.5 text-sm font-semibold text-accent-orange-foreground">
            <Activity className="h-4 w-4" />
            Alat Penilaian Percuma
          </span>
          <h2 className="mt-4 text-balance font-heading text-3xl font-black leading-[1.1] tracking-[-0.03em] text-brand sm:text-4xl">
            Semak BMI &amp; Keperluan Kalori Anda
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
            Isi maklumat anda untuk mengira BMI dan kalori harian, kemudian
            hantar keputusan terus ke WhatsApp cawangan untuk konsultasi program
            berat badan.
          </p>
        </div>

        {/* 2 calculators */}
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {/* BMI Calculator */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Scale className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-brand">Kalkulator BMI</h3>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="bmi-height" className={labelClass}>
                  Tinggi (cm){reqMark}
                </label>
                <input
                  id="bmi-height"
                  type="number"
                  inputMode="numeric"
                  min={50}
                  max={250}
                  value={form.height}
                  onChange={(e) => setForm({ ...form, height: e.target.value })}
                  className={inputClass}
                  placeholder="Cth: 165"
                />
              </div>
              <div>
                <label htmlFor="bmi-weight" className={labelClass}>
                  Berat (kg){reqMark}
                </label>
                <input
                  id="bmi-weight"
                  type="number"
                  inputMode="numeric"
                  min={20}
                  max={300}
                  value={form.weight}
                  onChange={(e) => setForm({ ...form, weight: e.target.value })}
                  className={inputClass}
                  placeholder="Cth: 70"
                />
              </div>
            </div>

            {bmi !== null && bmiCat ? (
              <div className={`mt-6 rounded-xl border p-5 ${toneBox[bmiCat.tone]}`}>
                <p className="text-sm font-medium text-muted-foreground">
                  Indeks Jisim Badan (BMI) anda
                </p>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className={`text-4xl font-black ${toneText[bmiCat.tone]}`}>
                    {bmi.toFixed(1)}
                  </span>
                  <span className={`text-sm font-bold ${toneText[bmiCat.tone]}`}>
                    {bmiCat.label}
                  </span>
                </div>
              </div>
            ) : (
              <p className="mt-6 rounded-xl border border-dashed border-border p-5 text-sm text-muted-foreground">
                Masukkan tinggi dan berat untuk melihat BMI anda.
              </p>
            )}
          </div>

          {/* Calorie Calculator */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-orange/20 text-accent-orange-foreground">
                <Flame className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-brand">
                Kalkulator Kalori Harian
              </h3>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="gender" className={labelClass}>
                  Jantina{reqMark}
                </label>
                <select
                  id="gender"
                  value={form.gender}
                  onChange={(e) => setForm({ ...form, gender: e.target.value })}
                  className={inputClass}
                >
                  <option value="perempuan">Perempuan</option>
                  <option value="lelaki">Lelaki</option>
                </select>
              </div>
              <div>
                <label htmlFor="age" className={labelClass}>
                  Umur (tahun){reqMark}
                </label>
                <input
                  id="age"
                  type="number"
                  inputMode="numeric"
                  min={10}
                  max={100}
                  value={form.age}
                  onChange={(e) => setForm({ ...form, age: e.target.value })}
                  className={inputClass}
                  placeholder="Cth: 35"
                />
              </div>
              <div>
                <label htmlFor="cal-height" className={labelClass}>
                  Tinggi (cm){reqMark}
                </label>
                <input
                  id="cal-height"
                  type="number"
                  inputMode="numeric"
                  min={50}
                  max={250}
                  value={form.height}
                  onChange={(e) => setForm({ ...form, height: e.target.value })}
                  className={inputClass}
                  placeholder="Cth: 165"
                />
              </div>
              <div>
                <label htmlFor="cal-weight" className={labelClass}>
                  Berat (kg){reqMark}
                </label>
                <input
                  id="cal-weight"
                  type="number"
                  inputMode="numeric"
                  min={20}
                  max={300}
                  value={form.weight}
                  onChange={(e) => setForm({ ...form, weight: e.target.value })}
                  className={inputClass}
                  placeholder="Cth: 70"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="activity" className={labelClass}>
                  Tahap Aktiviti{reqMark}
                </label>
                <select
                  id="activity"
                  value={form.activity}
                  onChange={(e) => setForm({ ...form, activity: e.target.value })}
                  className={inputClass}
                >
                  {activityOptions.map((a) => (
                    <option key={a.value} value={a.value}>
                      {a.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {calorie ? (
              <div
                className={`mt-6 rounded-xl border p-5 ${
                  bmiCat ? toneBox[bmiCat.tone] : 'border-brand/30 bg-brand/5'
                }`}
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Penyelenggaraan
                    </p>
                    <p className="text-2xl font-black text-brand">
                      {calorie.maintain}
                      <span className="text-sm font-medium text-muted-foreground">
                        {' '}
                        kcal
                      </span>
                    </p>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-muted-foreground">
                      Sasaran turun berat
                    </p>
                    <p
                      className={`text-2xl font-black ${
                        bmiCat ? toneText[bmiCat.tone] : 'text-accent-orange-foreground'
                      }`}
                    >
                      {calorie.target}
                      <span className="text-sm font-medium text-muted-foreground">
                        {' '}
                        kcal
                      </span>
                    </p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-muted-foreground">
                  Anggaran berdasarkan formula Mifflin-St Jeor. Sasaran ialah
                  defisit ~500 kcal/hari (≈0.5 kg seminggu).
                </p>
              </div>
            ) : (
              <p className="mt-6 rounded-xl border border-dashed border-border p-5 text-sm text-muted-foreground">
                Masukkan jantina, umur, tinggi dan berat untuk melihat keperluan
                kalori anda.
              </p>
            )}
          </div>
        </div>

        {/* WhatsApp form with results */}
        <div className="mt-6">
          {submitted ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
              <CheckCircle2 className="h-14 w-14 text-whatsapp" />
              <h3 className="mt-4 text-xl font-bold text-brand">
                Terima kasih, {form.name || 'rakan'}!
              </h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Tetingkap WhatsApp telah dibuka dan keputusan BMI &amp; kalori
                anda sedia untuk dihantar ke {selectedBranch?.name}.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-6 rounded-full border border-brand px-5 py-2.5 text-sm font-semibold text-brand transition-colors hover:bg-brand hover:text-brand-foreground"
              >
                Hantar Permohonan Lain
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
            >
              <h3 className="text-xl font-bold text-brand">
                Hantar Keputusan ke WhatsApp Cawangan
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Keputusan BMI dan kalori di atas akan disertakan secara automatik.
                Medan bertanda <span className="text-destructive">*</span> wajib
                diisi.
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
                        setForm({
                          ...form,
                          phone: e.target.value.replace(/[^\d]/g, ''),
                        })
                      }
                      className={`${inputClass} rounded-l-none`}
                      placeholder="12 345 6789"
                    />
                  </div>
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

                <div className="sm:col-span-2">
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

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-base font-semibold text-whatsapp-foreground transition-opacity hover:opacity-90 sm:col-span-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Hantar Keputusan ke WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
