'use client'

import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { NAV_LINKS } from '@/lib/constants'

export function Navbar() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 40)
  })

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'border-b border-[var(--border)] bg-[var(--ivory)]/90 backdrop-blur-xl'
            : 'bg-transparent'
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10"
        >
          <a
            href="#top"
            className={`font-display text-2xl tracking-wide transition-colors ${
              scrolled ? 'text-[var(--walnut)]' : 'text-[var(--cream)]'
            }`}
          >
            Royal <span className="text-[var(--gold)]">Brunei</span>
          </a>

          <ul className="hidden items-center gap-10 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link text-sm uppercase tracking-[0.2em] transition-colors ${
                    scrolled
                      ? 'text-[var(--walnut)] hover:text-[var(--amber)]'
                      : 'text-[var(--cream)] hover:text-[var(--gold)]'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-[var(--gold)] bg-[var(--gold)] px-6 py-3 text-xs font-medium uppercase tracking-[0.2em] text-[var(--walnut)] transition-transform hover:-translate-y-0.5"
            >
              Get a Quote
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className={`md:hidden ${scrolled ? 'text-[var(--walnut)]' : 'text-[var(--cream)]'}`}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay */}
      <motion.div
        initial={false}
        animate={{
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'auto' : 'none',
        }}
        transition={{ duration: 0.35 }}
        className="fixed inset-0 z-30 flex flex-col bg-[var(--walnut)] pt-24 md:hidden"
      >
        <ul className="flex flex-col gap-8 px-10">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-4xl text-[var(--cream)]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex rounded-full bg-[var(--gold)] px-7 py-3 text-xs uppercase tracking-[0.2em] text-[var(--walnut)]"
            >
              Get a Quote
            </a>
          </li>
        </ul>
      </motion.div>
    </>
  )
}
