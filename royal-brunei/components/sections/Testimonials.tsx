'use client'

import { motion, type Variants } from 'framer-motion'
import { Star } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { TESTIMONIALS } from '@/lib/constants'
import type { Testimonial } from '@/types'

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
}

function TestimonialCard({ t }: { t: Testimonial }) {
  return (
    <motion.article
      variants={cardVariants}
      className="group relative flex h-full flex-col gap-6 rounded-2xl border border-[var(--gold)]/15 bg-white/[0.03] p-8 transition-colors hover:border-[var(--gold)]/40"
    >
      <span
        aria-hidden
        className="absolute right-6 top-4 select-none font-display text-7xl leading-none text-[var(--gold)]/20"
      >
        &ldquo;
      </span>
      <div className="flex items-center gap-1 text-[var(--gold)]">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className="h-4 w-4"
            fill={i < t.rating ? 'currentColor' : 'none'}
          />
        ))}
      </div>
      <p className="font-display text-xl italic leading-snug text-[var(--cream)]/85">
        {t.quote}
      </p>
      <div className="mt-auto border-t border-[var(--gold)]/15 pt-5">
        <p className="text-sm font-medium text-[var(--cream)]">{t.author}</p>
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--cream)]/50">
          {t.location}
        </p>
      </div>
    </motion.article>
  )
}

export function Testimonials() {
  return (
    <section className="bg-[var(--walnut)] px-6 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mb-16 text-center">
          <p className="mb-4 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
            <span className="h-px w-10 bg-[var(--gold)]" />
            What Customers Say
            <span className="h-px w-10 bg-[var(--gold)]" />
          </p>
          <h2 className="mx-auto max-w-3xl font-display text-5xl leading-[1.05] text-[var(--cream)] md:text-6xl">
            Loved by Chennai
            <br />
            <span className="italic text-[var(--gold)]">homes & offices.</span>
          </h2>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-6 md:grid-cols-3"
        >
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} t={t} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
