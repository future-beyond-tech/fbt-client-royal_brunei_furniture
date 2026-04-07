interface MarqueeInnerProps {
  items: readonly string[]
}

export function MarqueeInner({ items }: MarqueeInnerProps) {
  const doubled = [...items, ...items]
  return (
    <div className="flex w-max animate-marquee items-center gap-12 whitespace-nowrap">
      {doubled.map((item, idx) => (
        <span
          key={`${item}-${idx}`}
          className="flex items-center gap-12 font-display text-2xl italic text-[var(--walnut)]"
        >
          {item}
          <span aria-hidden className="text-[var(--walnut)]/60">
            ✦
          </span>
        </span>
      ))}
    </div>
  )
}
