'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { CATEGORIES } from '@/lib/constants'

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export function Categories() {
  return (
    <section
      id="categories"
      className="bg-[var(--ivory)] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--amber)]">
              <span className="h-px w-10 bg-[var(--amber)]" />
              Our Collections
            </p>
            <h2 className="font-display text-5xl leading-[1.05] text-[var(--walnut)] md:text-6xl">
              Furniture for every
              <br />
              <span className="italic">corner of your home.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-[var(--muted)]">
            Five collections curated for Chennai homes — from family sofa sets
            to executive office chairs and imported recliners.
          </p>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.12 }}
          className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-[340px_280px]"
        >
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon
            const isFeatured = cat.featured === true
            return (
              <motion.a
                key={cat.id}
                variants={cardVariants}
                href="#contact"
                className={`group relative isolate flex flex-col justify-between overflow-hidden rounded-2xl border border-[var(--gold)]/15 bg-[var(--walnut)] p-8 text-[var(--cream)] transition-transform hover:-translate-y-1 ${
                  isFeatured ? 'md:row-span-2 md:min-h-full' : 'min-h-[260px]'
                }`}
              >
                <Icon
                  aria-hidden
                  className={`absolute -bottom-6 -right-6 text-[var(--gold)] opacity-15 transition-all duration-700 group-hover:scale-110 group-hover:opacity-30 ${
                    isFeatured ? 'h-72 w-72' : 'h-44 w-44'
                  }`}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--walnut)] via-[var(--walnut)]/60 to-transparent"
                />
                <div className="relative z-10">
                  <span className="inline-flex items-center rounded-full border border-[var(--gold)]/30 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--gold)]">
                    {cat.tag}
                  </span>
                </div>
                <div className="relative z-10 flex items-end justify-between gap-4">
                  <div>
                    <h3
                      className={`font-display leading-tight text-[var(--cream)] ${
                        isFeatured ? 'text-5xl md:text-6xl' : 'text-3xl'
                      }`}
                    >
                      {cat.name}
                    </h3>
                    <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[var(--cream)]/60">
                      {cat.count}
                    </p>
                    {isFeatured && (
                      <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--cream)]/70">
                        {cat.description}
                      </p>
                    )}
                  </div>
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[var(--gold)]/40 text-[var(--gold)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-5 w-5" />
                  </div>
                </div>
              </motion.a>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
