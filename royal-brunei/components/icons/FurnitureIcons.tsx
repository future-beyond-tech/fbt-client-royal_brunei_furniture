import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const baseProps = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  viewBox: '0 0 64 64',
}

export function SofaIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M8 36v10a3 3 0 0 0 3 3h2v3M56 36v10a3 3 0 0 1-3 3h-2v3" />
      <path d="M10 36V24a6 6 0 0 1 6-6h32a6 6 0 0 1 6 6v12" />
      <path d="M10 36c2 0 4 2 4 4v6h36v-6c0-2 2-4 4-4" />
      <path d="M16 30h12M36 30h12" />
    </svg>
  )
}

export function ChairIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M22 10h20a4 4 0 0 1 4 4v20H18V14a4 4 0 0 1 4-4z" />
      <path d="M16 34h32l-2 10H18z" />
      <path d="M22 44v8M42 44v8" />
      <path d="M28 18h8" />
    </svg>
  )
}

export function DiningTableIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M6 24h52" />
      <path d="M10 24v6M54 24v6" />
      <path d="M6 30h52v4H6z" />
      <path d="M14 38v12M50 38v12" />
      <circle cx="20" cy="18" r="3" />
      <circle cx="32" cy="18" r="3" />
      <circle cx="44" cy="18" r="3" />
    </svg>
  )
}

export function BedIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M6 44V22M58 44V22" />
      <path d="M6 30h52" />
      <path d="M6 38h52v6H6z" />
      <path d="M14 30v-6a3 3 0 0 1 3-3h30a3 3 0 0 1 3 3v6" />
      <path d="M18 30v-3M30 30v-3" />
      <path d="M6 50v-6M58 50v-6" />
    </svg>
  )
}

export function WardrobeIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="14" y="8" width="36" height="48" rx="2" />
      <path d="M32 8v48" />
      <circle cx="28" cy="32" r="0.8" />
      <circle cx="36" cy="32" r="0.8" />
    </svg>
  )
}

export function StudyDeskIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M8 26h48v6H8z" />
      <path d="M12 32v22M52 32v22" />
      <path d="M14 40h14v14H14z" />
      <path d="M38 16v10M38 16h12v10H38z" />
    </svg>
  )
}

export function PillowIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M14 18c0-4 4-6 18-6s18 2 18 6v28c0 4-4 6-18 6s-18-2-18-6z" />
      <path d="M22 24c4 4 16 4 20 0M22 40c4-4 16-4 20 0" />
    </svg>
  )
}

export function BenchIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M6 28h52v6H6z" />
      <path d="M12 34v18M52 34v18" />
      <path d="M6 22h52" />
    </svg>
  )
}

export function RecliningSofaIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M6 40v8h52v-8" />
      <path d="M10 40V26a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v14" />
      <path d="M46 30l8-4v14h-8" />
      <path d="M14 48v6M54 48v6" />
    </svg>
  )
}

export function ExecutiveChairIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M22 8h20a3 3 0 0 1 3 3v22H19V11a3 3 0 0 1 3-3z" />
      <path d="M16 33h32l-3 8H19z" />
      <path d="M32 41v8" />
      <path d="M22 49h20" />
      <path d="M22 53l-2 3M42 53l2 3" />
    </svg>
  )
}
