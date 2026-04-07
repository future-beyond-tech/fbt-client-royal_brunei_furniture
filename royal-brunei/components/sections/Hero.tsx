'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowRight, MoveDown } from 'lucide-react'
import { STATS } from '@/lib/constants'

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18, delayChildren: 0.2 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
}

export function Hero() {
  return (
    <section
      id="top"
      className="grain relative isolate flex min-h-screen items-center overflow-hidden bg-[var(--walnut)] text-[var(--cream)]"
    >
      {/* Radial layers */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            'radial-gradient(1000px 600px at 20% 30%, rgba(212,168,83,0.18), transparent 60%), radial-gradient(800px 500px at 85% 70%, rgba(92,46,26,0.45), transparent 60%)',
        }}
      />

      {/* Decorative spinning ring */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-200px] top-1/2 h-[720px] w-[720px] -translate-y-1/2 rounded-full border border-[var(--gold)]/15"
        style={{ animation: 'spin 40s linear infinite' }}
      >
        <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--gold)]" />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-120px] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full border border-[var(--gold)]/10"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 md:px-10 md:pt-40">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-3xl"
        >
          <motion.p
            variants={itemVariants}
            className="mb-6 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)]"
          >
            <span className="h-px w-10 bg-[var(--gold)]" />
            Porur · Chennai · Est. 2012
          </motion.p>

          <motion.h1
            variants={itemVariants}
            className="font-display text-5xl leading-[1.05] tracking-tight text-[var(--cream)] sm:text-6xl md:text-[6.5rem]"
          >
            Crafted for
            <br />
            <span className="italic text-[var(--gold)]">Living Well.</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-xl text-base leading-relaxed text-[var(--cream)]/75 md:text-lg"
          >
            Hand-selected sofa sets, dining tables, office chairs and modular
            beds — alongside imported luxury pieces and authorised Kurl-On &amp;
            Peps mattresses. Delivered across Chennai with twelve years of
            craft behind every piece.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <a
              href="#categories"
              className="group inline-flex items-center gap-3 rounded-full bg-[var(--gold)] px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--walnut)] transition-transform hover:-translate-y-0.5"
            >
              Explore Collections
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-full border border-[var(--gold)]/50 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--cream)] transition-colors hover:bg-[var(--gold)]/10"
            >
              Book a Visit
            </a>
          </motion.div>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.7 }}
          className="mt-20 hidden items-end justify-between border-t border-[var(--gold)]/20 pt-8 lg:flex"
        >
          {STATS.slice(0, 3).map((s) => (
            <div key={s.label}>
              <div className="font-display text-5xl text-[var(--gold)]">
                {s.value}
              </div>
              <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--cream)]/60">
                {s.label}
              </div>
            </div>
          ))}
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-[var(--cream)]/60">
            Scroll
            <MoveDown className="h-4 w-4 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
