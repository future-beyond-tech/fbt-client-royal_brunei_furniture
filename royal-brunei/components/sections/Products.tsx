'use client'

import { AnimatePresence, motion, type Variants } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { PRODUCT_CATEGORIES, TOTAL_PRODUCT_LINES } from '@/lib/products'
import { getPhoto } from '@/lib/unsplash-map'
import type { ProductCategory, ProductItem } from '@/types'

const FIRST_CATEGORY: ProductCategory = PRODUCT_CATEGORIES[0]!

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] },
  },
  exit: { opacity: 0, y: -16, transition: { duration: 0.25 } },
}

interface ProductCardProps {
  item: ProductItem
  categoryName: string
}

function ProductCard({ item, categoryName }: ProductCardProps) {
  const handleEnquire = () => {
    const select =
      document.querySelector<HTMLSelectElement>('#enquiry-category')
    if (select) {
      const nativeSetter = Object.getOwnPropertyDescriptor(
        window.HTMLSelectElement.prototype,
        'value',
      )?.set
      nativeSetter?.call(select, categoryName)
      select.dispatchEvent(new Event('change', { bubbles: true }))
    }
    document
      .querySelector('#contact')
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative cursor-pointer overflow-hidden border border-[var(--border)] bg-[var(--ivory)]"
    >
      {item.tag && (
        <span className="absolute right-3 top-3 z-10 bg-[var(--gold)] px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[var(--walnut)]">
          {item.tag}
        </span>
      )}

      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--espresso)]">
        <Image
          src={getPhoto(item.id, 600, 450)}
          alt={`${item.name} — Royal Brunei Furniture Chennai`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="mb-2 font-display text-lg font-semibold leading-tight text-[var(--walnut)]">
          {item.name}
        </h3>
        <p className="mb-4 line-clamp-2 text-[13px] font-light leading-relaxed text-[var(--muted)]">
          {item.description}
        </p>
        <button
          type="button"
          onClick={handleEnquire}
          className="flex items-center gap-2 border-b border-[var(--amber)]/30 pb-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--amber)] transition-colors duration-200 hover:border-[var(--amber)]"
        >
          Enquire Now
          <span aria-hidden className="text-xs">
            →
          </span>
        </button>
      </div>
    </motion.article>
  )
}

function CategoryHero({ category }: { category: ProductCategory }) {
  return (
    <div className="relative mb-8 h-[260px] w-full overflow-hidden md:h-[340px]">
      <Image
        src={getPhoto(category.id, 1400, 500)}
        alt={`${category.name} collection — Royal Brunei Furniture Chennai`}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--walnut)]/90 via-[var(--walnut)]/60 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-14">
        <span className="mb-3 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[var(--gold)]">
          <span className="block h-px w-8 bg-[var(--gold)]" />
          {category.tag}
        </span>
        <h2 className="mb-3 font-display text-3xl font-light italic leading-tight text-[var(--ivory)] md:text-5xl">
          {category.name}
        </h2>
        <p className="max-w-md text-sm font-light leading-relaxed text-[var(--champagne)]/70">
          {category.description}
        </p>
      </div>
    </div>
  )
}

export default function Products() {
  const [activeSlug, setActiveSlug] = useState<string>(FIRST_CATEGORY.slug)

  const activeCategory: ProductCategory =
    PRODUCT_CATEGORIES.find((c) => c.slug === activeSlug) ?? FIRST_CATEGORY

  return (
    <section id="products" className="bg-[var(--cream)] py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-14">
        {/* Section header */}
        <div className="mb-12">
          <p className="mb-5 flex items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-[var(--amber)]">
            <span className="block h-px w-7 bg-[var(--amber)]" />
            Complete Range
          </p>
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <h2 className="font-display text-4xl font-light leading-tight text-[var(--walnut)] md:text-6xl">
              Our <em className="italic text-[var(--amber)]">Products</em>
            </h2>
            <p className="max-w-sm text-sm font-light leading-relaxed text-[var(--muted)]">
              {PRODUCT_CATEGORIES.length} categories · {TOTAL_PRODUCT_LINES}{' '}
              product lines. Every piece crafted or curated for Chennai homes
              and offices.
            </p>
          </div>
        </div>

        {/* Tab bar */}
        <div className="mb-8 -mx-6 overflow-x-auto px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div
            role="tablist"
            aria-label="Product categories"
            className="flex min-w-max gap-0 border-b border-[var(--border)]"
          >
            {PRODUCT_CATEGORIES.map((cat) => {
              const isActive = activeSlug === cat.slug
              return (
                <button
                  key={cat.slug}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveSlug(cat.slug)}
                  className={`relative whitespace-nowrap px-6 py-4 text-[11px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                    isActive
                      ? 'text-[var(--walnut)]'
                      : 'text-[var(--muted)] hover:text-[var(--walnut)]'
                  }`}
                >
                  {cat.name}
                  <span className="ml-2 text-[9px] text-[var(--gold)]/70">
                    ({cat.products.length})
                  </span>
                  {isActive && (
                    <motion.span
                      layoutId="products-tab-underline"
                      className="absolute inset-x-0 bottom-0 h-[2px] bg-[var(--gold)]"
                      transition={{
                        type: 'spring',
                        bounce: 0.2,
                        duration: 0.5,
                      }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Active category content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          >
            <CategoryHero category={activeCategory} />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {activeCategory.products.map((product) => (
                <ProductCard
                  key={product.id}
                  item={product}
                  categoryName={activeCategory.name}
                />
              ))}
            </motion.div>

            <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-[var(--border)] pt-8 sm:flex-row sm:items-center">
              <p className="text-sm font-light text-[var(--muted)]">
                Showing {activeCategory.products.length} products in{' '}
                {activeCategory.name}
              </p>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  const select =
                    document.querySelector<HTMLSelectElement>(
                      '#enquiry-category',
                    )
                  if (select) {
                    const nativeSetter = Object.getOwnPropertyDescriptor(
                      window.HTMLSelectElement.prototype,
                      'value',
                    )?.set
                    nativeSetter?.call(select, activeCategory.name)
                    select.dispatchEvent(new Event('change', { bubbles: true }))
                  }
                  document
                    .querySelector('#contact')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="bg-[var(--gold)] px-7 py-3.5 text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--walnut)] transition-colors duration-300 hover:bg-[var(--champagne)]"
              >
                Enquire About {activeCategory.name}
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
