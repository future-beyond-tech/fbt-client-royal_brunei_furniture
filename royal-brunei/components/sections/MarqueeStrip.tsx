import { MarqueeInner } from '@/components/ui/MarqueeInner'
import { MARQUEE_ITEMS } from '@/lib/constants'

export function MarqueeStrip() {
  return (
    <div
      aria-label="Product categories"
      className="relative overflow-hidden border-y border-[var(--walnut)]/20 bg-[var(--gold)] py-6"
    >
      <MarqueeInner items={MARQUEE_ITEMS} />
    </div>
  )
}
