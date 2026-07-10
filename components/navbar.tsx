'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { branches, treatments } from '@/data/siteData'

type DropdownType = 'branches' | 'treatments'

const navLinks: {
  href: string
  label: string
  exact?: boolean
  dropdown?: DropdownType
  badge?: { text: string; variant: 'hot' | 'trending' }
}[] = [
  { href: '/', label: 'Utama' },
  {
    href: '/rawatan/rawatan-sakit-lutut',
    label: 'Rawatan Lutut & Sendi',
    exact: true,
    badge: { text: 'Hot', variant: 'hot' },
  },
  {
    href: '/rawatan/program-berat-badan',
    label: 'Rawatan Berat Badan',
    exact: true,
    badge: { text: 'Trending', variant: 'trending' },
  },
  { href: '/rawatan', label: 'Rawatan', dropdown: 'treatments' },
  { href: '/cawangan', label: 'Cawangan', dropdown: 'branches' },
  { href: '/hubungi', label: 'Hubungi Kami' },
]

const badgeClasses = {
  hot: 'bg-accent-orange text-accent-orange-foreground',
  trending: 'bg-accent-orange text-accent-orange-foreground',
} as const

export function Navbar() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string, exact = false) =>
    href === '/' || exact ? pathname === href : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 bg-brand shadow-[0_6px_16px_-4px_rgba(0,0,0,0.18)]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="Klinik Hejaz — Laman Utama">
          <span className="font-logo text-2xl font-extrabold italic leading-none tracking-[-0.039em] text-brand-foreground">
            Klinik Hejaz
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Navigasi utama">
          {navLinks.map((link) =>
            link.dropdown ? (
              <div key={link.href} className="group relative">
                <Link
                  href={link.href}
                  className={cn(
                    'inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-accent-orange',
                    isActive(link.href) ? 'text-accent-orange' : 'text-brand-foreground',
                  )}
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180" />
                </Link>
                <div className="invisible absolute left-0 top-full z-50 w-64 pt-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100">
                  <div className="max-h-[70vh] overflow-auto rounded-xl border border-border bg-card py-2 shadow-lg">
                    {link.dropdown === 'branches' ? (
                      <>
                        <Link
                          href="/cawangan"
                          className="block px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-brand"
                        >
                          Semua Cawangan
                        </Link>
                        <div className="my-1 border-t border-border" />
                        {branches.map((branch) => (
                          <Link
                            key={branch.slug}
                            href={`/cawangan/${branch.slug}`}
                            className="block px-4 py-2 text-sm text-foreground transition-colors hover:bg-secondary hover:text-brand"
                          >
                            <span className="font-medium">{branch.shortName}</span>
                            <span className="block text-xs text-muted-foreground">
                              {branch.locality}, Terengganu
                            </span>
                          </Link>
                        ))}
                      </>
                    ) : (
                      <>
                        <Link
                          href="/rawatan"
                          className="block px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-secondary hover:text-brand"
                        >
                          Semua Rawatan
                        </Link>
                        <div className="my-1 border-t border-border" />
                        {treatments.map((treatment) => (
                          <Link
                            key={treatment.slug}
                            href={`/rawatan/${treatment.slug}`}
                            className="block px-4 py-2 text-sm text-foreground transition-colors hover:bg-secondary hover:text-brand"
                          >
                            {treatment.shortTitle}
                          </Link>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-accent-orange',
                  isActive(link.href, link.exact) ? 'text-accent-orange' : 'text-brand-foreground',
                )}
              >
                {link.label}
                {link.badge && (
                  <span
                    className={cn(
                      'absolute -right-1 -top-1 rounded-full px-1 py-px text-[8px] font-bold uppercase leading-none tracking-wide',
                      badgeClasses[link.badge.variant],
                    )}
                  >
                    {link.badge.text}
                  </span>
                )}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Link
            href="/permohonan"
            className="inline-flex items-center gap-2 rounded-full bg-accent-orange px-4 py-2 text-sm font-semibold text-accent-orange-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-4 w-4" />
            WhatsApp Kami
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-foreground md:hidden"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-brand-foreground/15 bg-brand md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-3 sm:px-6" aria-label="Navigasi mudah alih">
            {navLinks.map((link) => (
              <div key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'flex items-center gap-2 rounded-md px-3 py-3 text-base font-medium transition-colors',
                    isActive(link.href, link.exact)
                      ? 'bg-brand-foreground/10 text-accent-orange'
                      : 'text-brand-foreground',
                  )}
                >
                  {link.label}
                  {link.badge && (
                    <span
                      className={cn(
                        'rounded-full px-1.5 py-0.5 text-[10px] font-bold uppercase leading-none tracking-wide',
                        badgeClasses[link.badge.variant],
                      )}
                    >
                      {link.badge.text}
                    </span>
                  )}
                </Link>
                {link.dropdown === 'branches' && (
                  <div className="ml-3 flex flex-col border-l border-brand-foreground/15 pl-3">
                    {branches.map((branch) => (
                      <Link
                        key={branch.slug}
                        href={`/cawangan/${branch.slug}`}
                        onClick={() => setOpen(false)}
                        className="rounded-md px-3 py-2 text-sm text-brand-foreground/80 transition-colors hover:text-accent-orange"
                      >
                        {branch.shortName}
                      </Link>
                    ))}
                  </div>
                )}
                {link.dropdown === 'treatments' && (
                  <div className="ml-3 flex flex-col border-l border-brand-foreground/15 pl-3">
                    {treatments.map((treatment) => (
                      <Link
                        key={treatment.slug}
                        href={`/rawatan/${treatment.slug}`}
                        onClick={() => setOpen(false)}
                        className="rounded-md px-3 py-2 text-sm text-brand-foreground/80 transition-colors hover:text-accent-orange"
                      >
                        {treatment.shortTitle}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="/permohonan"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-accent-orange px-4 py-3 text-base font-semibold text-accent-orange-foreground"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp Kami
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
