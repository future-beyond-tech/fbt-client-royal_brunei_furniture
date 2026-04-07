import { Facebook, Instagram, MapPin, Phone } from 'lucide-react'
import { BUSINESS_INFO, CATEGORIES, NAV_LINKS } from '@/lib/constants'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[var(--walnut)] text-[var(--cream)]">
      <div className="mx-auto max-w-7xl px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <a href="#top" className="font-display text-3xl">
              Royal <span className="text-[var(--gold)]">Brunei</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--cream)]/70">
              Chennai&apos;s trusted furniture destination since{' '}
              {BUSINESS_INFO.establishedYear}. Crafted, imported and delivered
              with care.
            </p>
            <div className="mt-6 flex items-center gap-4 text-[var(--cream)]/70">
              <a
                href="#"
                aria-label="Instagram"
                className="transition-colors hover:text-[var(--gold)]"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="transition-colors hover:text-[var(--gold)]"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
              Collections
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-[var(--cream)]/80">
              {CATEGORIES.map((c) => (
                <li key={c.id}>
                  <a
                    href="#categories"
                    className="transition-colors hover:text-[var(--gold)]"
                  >
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
              Services
            </h3>
            <ul className="mt-5 flex flex-col gap-3 text-sm text-[var(--cream)]/80">
              <li>Retail Sales</li>
              <li>Import Supply</li>
              <li>Repair &amp; Restoration</li>
              <li>Bulk / Office Orders</li>
              <li>Home Visit Consultation</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-[var(--gold)]">
              Reach Us
            </h3>
            <ul className="mt-5 flex flex-col gap-4 text-sm text-[var(--cream)]/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[var(--gold)]" />
                <span>
                  {BUSINESS_INFO.addressLine1}
                  <br />
                  {BUSINESS_INFO.addressLine2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-[var(--gold)]" />
                <span>{BUSINESS_INFO.phone}</span>
              </li>
            </ul>
            <nav aria-label="Footer" className="mt-6">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs text-[var(--cream)]/60">
                {NAV_LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      className="uppercase tracking-[0.15em] transition-colors hover:text-[var(--gold)]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-[var(--gold)]/15 pt-8 text-xs text-[var(--cream)]/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {year} {BUSINESS_INFO.name}. Proprietor:{' '}
            {BUSINESS_INFO.proprietor}. All rights reserved.
          </p>
          <p className="font-mono">
            GSTIN {BUSINESS_INFO.gstin} · Udyam {BUSINESS_INFO.udyam}
          </p>
        </div>
      </div>
    </footer>
  )
}
