'use client'

import { motion, useInView, type Variants } from 'framer-motion'
import { useRef, type ReactNode } from 'react'

type Direction = 'up' | 'left' | 'right' | 'fade'

interface AnimatedSectionProps {
  children: ReactNode
  delay?: number
  direction?: Direction
  className?: string
  as?: 'div' | 'section' | 'article' | 'header' | 'footer'
}

const variantsFor = (direction: Direction): Variants => {
  const base = { opacity: 0 }
  const map: Record<Direction, Variants> = {
    up: {
      hidden: { ...base, y: 32 },
      visible: { opacity: 1, y: 0 },
    },
    left: {
      hidden: { ...base, x: -32 },
      visible: { opacity: 1, x: 0 },
    },
    right: {
      hidden: { ...base, x: 32 },
      visible: { opacity: 1, x: 0 },
    },
    fade: {
      hidden: { ...base },
      visible: { opacity: 1 },
    },
  }
  return map[direction]
}

export function AnimatedSection({
  children,
  delay = 0,
  direction = 'up',
  className,
  as = 'div',
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  const variants = variantsFor(direction)

  const MotionTag = motion[as]

  return (
    <MotionTag
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </MotionTag>
  )
}
