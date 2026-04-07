import { BRANDS } from '@/lib/constants'

export function Brands() {
  return (
    <section
      id="brands"
      aria-label="Authorised brand partners"
      className="border-y border-[var(--border)] bg-[var(--ivory)] px-6 py-20 md:px-10"
    >
      <div className="mx-auto max-w-5xl text-center">
        <p className="mb-10 text-xs uppercase tracking-[0.3em] text-[var(--amber)]">
          Authorised Dealer · Trusted Indian Brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-20 gap-y-10">
          {BRANDS.map((brand) => (
            <span
              key={brand}
              className="font-display text-5xl tracking-wide text-[var(--walnut)]/30 transition-colors duration-500 hover:text-[var(--amber)] md:text-6xl"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
