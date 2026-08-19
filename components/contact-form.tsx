'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Send } from 'lucide-react'
import { branches } from '@/data/siteData'

export function ContactForm() {
  const router = useRouter()
  const [form, setForm] = useState({
    name: '',
    phone: '',
    branch: branches[0].slug,
    message: '',
  })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const branch = branches.find((b) => b.slug === form.branch) ?? branches[0]
    const text = encodeURIComponent(
      `Hi ${branch.name}, saya ${form.name} (${form.phone}). ${form.message}`,
    )
    const base = branch.whatsapp.split('?')[0]
    window.open(`${base}?text=${text}`, '_blank', 'noopener,noreferrer')
    router.push('/terima-kasih')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8"
    >
      <div className="grid gap-5">
        <div>
          <label
            htmlFor="name"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Nama Penuh
          </label>
          <input
            id="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-ring/20 focus:border-brand focus:ring-2"
            placeholder="Nama anda"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Nombor Telefon
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-ring/20 focus:border-brand focus:ring-2"
            placeholder="012-345 6789"
          />
        </div>

        <div>
          <label
            htmlFor="branch"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Cawangan Pilihan
          </label>
          <select
            id="branch"
            value={form.branch}
            onChange={(e) => setForm({ ...form, branch: e.target.value })}
            className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-ring/20 focus:border-brand focus:ring-2"
          >
            {branches.map((b) => (
              <option key={b.slug} value={b.slug}>
                {b.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-1.5 block text-sm font-medium text-foreground"
          >
            Mesej / Pertanyaan
          </label>
          <textarea
            id="message"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className="w-full resize-none rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-ring/20 focus:border-brand focus:ring-2"
            placeholder="Saya nak tanya tentang rawatan..."
          />
        </div>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent-orange px-6 py-3 text-base font-semibold text-accent-orange-foreground transition-opacity hover:opacity-90"
        >
          <Send className="h-4 w-4" />
          Hantar melalui WhatsApp
        </button>
      </div>
    </form>
  )
}
