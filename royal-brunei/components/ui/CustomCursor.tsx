'use client'

import { useEffect, useRef, useState } from 'react'

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(pointer: coarse)').matches) return

    setEnabled(true)
    document.body.classList.add('has-custom-cursor')

    let rafId = 0
    let mx = 0
    let my = 0
    let rx = 0
    let ry = 0

    const move = (e: MouseEvent) => {
      mx = e.clientX
      my = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mx - 4}px, ${my - 4}px, 0)`
      }
    }

    const tick = () => {
      rx += (mx - rx) * 0.18
      ry += (my - ry) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${rx - 18}px, ${ry - 18}px, 0)`
      }
      rafId = requestAnimationFrame(tick)
    }

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null
      if (!target) return
      const interactive = target.closest('a, button, [role="button"], input, textarea, select, label')
      setHovering(Boolean(interactive))
    }

    window.addEventListener('mousemove', move, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    rafId = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(rafId)
      document.body.classList.remove('has-custom-cursor')
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      <div
        ref={dotRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-2 w-2 rounded-full bg-[var(--gold)] mix-blend-difference"
      />
      <div
        ref={ringRef}
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 rounded-full border border-[var(--gold)] transition-[width,height,border-width,opacity] duration-200"
        style={{
          opacity: 0.7,
          transform: 'translate3d(-100px,-100px,0)',
          ...(hovering ? { width: '52px', height: '52px', borderWidth: '2px' } : {}),
        }}
      />
    </>
  )
}
