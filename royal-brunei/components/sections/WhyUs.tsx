'use client'

import { AnimatedSection } from '@/components/ui/AnimatedSection'
import { PILLARS, STATS } from '@/lib/constants'

export function WhyUs() {
  return (
    <section
      id="why-us"
      className="bg-[var(--ivory)] px-6 py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-2 md:gap-16">
          <AnimatedSection direction="left">
            <p className="mb-4 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--amber)]">
              <span className="h-px w-10 bg-[var(--amber)]" />
              Why Royal Brunei
            </p>
            <h2 className="mb-10 font-display text-5xl leading-[1.05] text-[var(--walnut)] md:text-6xl">
              A showroom built on
              <br />
              <span className="italic">trust and craft.</span>
            </h2>

            <ul className="flex flex-col gap-8">
              {PILLARS.map((p) => (
                <li
                  key={p.index}
                  className="flex gap-6 border-t border-[var(--gold)]/20 pt-6"
                >
                  <span className="font-display text-2xl text-[var(--gold)]">
                    {p.index}
                  </span>
                  <div>
                    <h3 className="font-display text-2xl text-[var(--walnut)]">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                      {p.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </AnimatedSection>

          <AnimatedSection
            direction="right"
            className="relative isolate overflow-hidden rounded-2xl bg-[var(--espresso)] p-10 text-[var(--cream)] md:p-14"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 select-none font-display text-[22rem] leading-none text-[var(--gold)]/[0.05]"
            >
              12
            </span>

            <div className="relative z-10">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--gold)]">
                Since 2012
              </p>

              <div className="mt-10 grid grid-cols-2 gap-10">
                {STATS.map((s) => (
                  <div key={s.label}>
                    <div className="font-display text-5xl text-[var(--gold)]">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[var(--cream)]/60">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>

              <p className="mt-12 max-w-md border-l border-[var(--gold)]/40 pl-6 font-display text-xl italic leading-snug text-[var(--cream)]/90">
                &ldquo;Good furniture isn&apos;t sold once — it&apos;s cared
                for, repaired, and loved for decades. That&apos;s what we do
                here.&rdquo;
              </p>
              <p className="mt-4 pl-6 text-xs uppercase tracking-[0.2em] text-[var(--cream)]/50">
                — Akbar M., Proprietor
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
