'use client'

import { motion, type Variants } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PRODUCTS } from '@/lib/constants'
import type { Product } from '@/types'

const formatINR = (n: number) =>
  new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(n)

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon
  return (
    <motion.article
      variants={cardVariants}
      className="group relative flex flex-col gap-6 border border-[var(--gold)]/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[var(--gold)]/30"
    >
      {product.badge && (
        <span className="absolute right-6 top-6 inline-flex items-center rounded-full border border-[var(--gold)]/40 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[var(--gold)]">
          {product.badge}
        </span>
      )}
      <div className="flex h-32 w-full items-center justify-center text-[var(--gold)]">
        <Icon className="h-28 w-28" aria-hidden />
      </div>
      <div className="flex flex-1 flex-col gap-3">
        <p className="text-[10px] uppercase tracking-[0.2em] text-[var(--cream)]/50">
          {product.category}
        </p>
        <h3 className="font-display text-2xl text-[var(--cream)]">
          {product.name}
        </h3>
        <p className="text-sm leading-relaxed text-[var(--cream)]/65">
          {product.description}
        </p>
      </div>
      <div className="flex items-center justify-between border-t border-[var(--gold)]/10 pt-5">
        <div>
          <p className="text-[10px] uppercase tracking-[0.18em] text-[var(--cream)]/50">
            Starting at
          </p>
          <p className="font-display text-2xl text-[var(--gold)]">
            {formatINR(product.priceFromInr)}
          </p>
        </div>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[var(--cream)] transition-colors hover:text-[var(--gold)]"
        >
          Enquire <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.article>
  )
}

export function FeaturedProducts() {
  return (
    <section
      id="featured"
      className="bg-[var(--walnut)] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <AnimatedSection className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-4 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
              <span className="h-px w-10 bg-[var(--gold)]" />
              Featured Pieces
            </p>
            <h2 className="font-display text-5xl leading-[1.05] text-[var(--cream)] md:text-6xl">
              Hand-picked <span className="italic text-[var(--gold)]">favourites.</span>
            </h2>
          </div>
          <p className="max-w-md text-base leading-relaxed text-[var(--cream)]/65">
            A glimpse of what&apos;s on our showroom floor right now. All
            pieces available to view in Porur — prices indicative of starting
            range.
          </p>
        </AnimatedSection>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 gap-px bg-[var(--gold)]/10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
