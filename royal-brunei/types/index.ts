import type { ComponentType, SVGProps } from 'react'

export type IconComponent = ComponentType<SVGProps<SVGSVGElement>>

export interface NavLink {
  readonly label: string
  readonly href: string
}

export interface Category {
  readonly id: string
  readonly name: string
  readonly tag: string
  readonly count: string
  readonly description: string
  readonly icon: IconComponent
  readonly featured?: boolean
}

export type ProductBadge = 'Bestseller' | 'Imported' | 'New' | 'Premium'

export interface Product {
  readonly id: string
  readonly name: string
  readonly description: string
  readonly priceFromInr: number
  readonly category: string
  readonly icon: IconComponent
  readonly badge?: ProductBadge
}

export interface Pillar {
  readonly index: string
  readonly title: string
  readonly description: string
}

export interface Stat {
  readonly value: string
  readonly label: string
}

export interface Testimonial {
  readonly id: string
  readonly rating: number
  readonly quote: string
  readonly author: string
  readonly location: string
}

export interface BusinessHours {
  readonly days: string
  readonly hours: string
}

export interface ProductItem {
  readonly id: string
  readonly name: string
  readonly description: string
  readonly keyword: string
  readonly tag: string | null
}

export interface ProductCategory {
  readonly id: string
  readonly name: string
  readonly slug: string
  readonly tag: string
  readonly description: string
  readonly heroKeyword: string
  readonly accentClass: string
  readonly products: readonly ProductItem[]
}

export interface BusinessInfo {
  readonly name: string
  readonly proprietor: string
  readonly coProprietor: string
  readonly addressLine1: string
  readonly addressLine2: string
  readonly city: string
  readonly state: string
  readonly postalCode: string
  readonly country: string
  readonly phone: string
  readonly whatsappNumber: string
  readonly email: string
  readonly gstin: string
  readonly udyam: string
  readonly establishedYear: number
  readonly hours: readonly BusinessHours[]
  readonly mapsUrl: string
  readonly mapsEmbedUrl: string
}
