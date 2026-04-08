import type { ProductCategory } from '@/types'

export const PRODUCT_CATEGORIES: readonly ProductCategory[] = [
  {
    id: 'office-chair',
    name: 'Office Chair',
    slug: 'office-chair',
    tag: 'Workspace',
    description:
      'Ergonomic seating solutions for every office — from executive suites to open-plan workspaces.',
    heroKeyword: 'office chair furniture',
    accentClass: 'from-[#1E0F07] to-[#3D1F0F]',
    products: [
      {
        id: 'oc-01',
        name: 'Office Visitors Chair',
        description:
          'Comfortable padded seating for reception and waiting areas. Available in fabric and leatherette.',
        keyword: 'visitor office chair',
        tag: null,
      },
      {
        id: 'oc-02',
        name: 'Executive Office Chair',
        description:
          'High-back executive chair with armrests, lumbar support, and premium leatherette finish.',
        keyword: 'executive office chair leather',
        tag: 'Popular',
      },
      {
        id: 'oc-03',
        name: 'High Back Office Chair',
        description:
          'Tall backrest for full spine support. Ideal for long work hours. Available in mesh and fabric.',
        keyword: 'high back office chair ergonomic',
        tag: null,
      },
      {
        id: 'oc-04',
        name: 'Low Back Office Chair',
        description:
          'Compact, lightweight chair for tight spaces. Swivel base, height-adjustable, easy mobility.',
        keyword: 'low back office chair',
        tag: null,
      },
    ],
  },
  {
    id: 'dining-table',
    name: 'Dining Table',
    slug: 'dining-table',
    tag: 'Dining Room',
    description:
      'Elegant dining sets for family meals, formal dinners, and daily gatherings — in every size.',
    heroKeyword: 'luxury dining table wood',
    accentClass: 'from-[#2C1810] to-[#4A2010]',
    products: [
      {
        id: 'dt-01',
        name: '4 Seater Wooden Dining Table Set',
        description:
          'Compact solid wood dining set — perfect for apartments and small dining rooms.',
        keyword: '4 seater wooden dining table set',
        tag: 'Compact',
      },
      {
        id: 'dt-02',
        name: '8 Seater Dining Table',
        description:
          'Large family dining table with matching chairs. Solid wood frame with durable finish.',
        keyword: '8 seater dining table family',
        tag: null,
      },
      {
        id: 'dt-03',
        name: '6 Seater Dining Table',
        description:
          'The most popular size — versatile, seats a family of six comfortably in any room.',
        keyword: '6 seater dining table wood',
        tag: 'Bestseller',
      },
      {
        id: 'dt-04',
        name: 'Glass Top Dining Table',
        description:
          'Contemporary glass-top dining table with steel or wooden legs. Modern, sleek, easy to clean.',
        keyword: 'glass top dining table modern',
        tag: 'Imported',
      },
    ],
  },
  {
    id: 'residential-furniture',
    name: 'Residential Furniture',
    slug: 'residential-furniture',
    tag: 'Home',
    description:
      'Everything your home needs — from cots and dressing tables to prayer stands and single sofas.',
    heroKeyword: 'residential home furniture interior',
    accentClass: 'from-[#1A0F07] to-[#3D2010]',
    products: [
      {
        id: 'rf-01',
        name: 'Steel Cot',
        description:
          'Sturdy, rust-resistant steel cot with powder-coated finish. Available in single and double sizes.',
        keyword: 'steel cot bed frame',
        tag: null,
      },
      {
        id: 'rf-02',
        name: 'Wooden Dressing Table',
        description:
          'Premium wooden dressing table with large mirror, side drawers, and smooth-glide finish.',
        keyword: 'wooden dressing table mirror',
        tag: null,
      },
      {
        id: 'rf-03',
        name: 'Single Seater Sofa',
        description:
          'Plush single-seater accent sofa — perfect for bedrooms, reading nooks, and hallways.',
        keyword: 'single seater sofa chair',
        tag: null,
      },
      {
        id: 'rf-04',
        name: 'Wooden Pooja Stand',
        description:
          'Handcrafted wooden pooja mandir stand — traditional design with lacquered finish.',
        keyword: 'wooden pooja stand mandir',
        tag: 'Handcrafted',
      },
    ],
  },
  {
    id: 'pillow-cover',
    name: 'Pillow Cover',
    slug: 'pillow-cover',
    tag: 'Accessories',
    description:
      'Soft, decorative pillow covers to complete your living room and bedroom aesthetic.',
    heroKeyword: 'decorative pillow covers home',
    accentClass: 'from-[#2A1508] to-[#1E0A04]',
    products: [
      {
        id: 'pc-01',
        name: 'Printed Pillow Cover',
        description:
          'Vibrant printed pillow covers in cotton and polyester blends. Available in a variety of patterns.',
        keyword: 'printed decorative pillow covers',
        tag: null,
      },
      {
        id: 'pc-02',
        name: 'Fancy Pillow Cover',
        description:
          'Premium embroidered and textured pillow covers for a luxurious look on sofas and beds.',
        keyword: 'fancy embroidered pillow cushion cover',
        tag: 'Premium',
      },
    ],
  },
  {
    id: 'sofa-set',
    name: 'Sofa Set',
    slug: 'sofa-set',
    tag: 'Living Room',
    description:
      'Premium sofa sets for every living room — from luxury PU leather to designer fabric collections.',
    heroKeyword: 'luxury sofa set living room',
    accentClass: 'from-[#3D1F0F] to-[#2C1505]',
    products: [
      {
        id: 'ss-01',
        name: 'PU Sofa Set',
        description:
          'Leatherette-finish PU sofa set — easy to clean, scratch-resistant, and long-lasting. Ideal for families.',
        keyword: 'PU leather sofa set living room',
        tag: 'Popular',
      },
      {
        id: 'ss-02',
        name: 'Designer Sofa Set',
        description:
          'Curated designer sofa sets with premium fabric upholstery and sculpted wooden frames.',
        keyword: 'designer fabric sofa set',
        tag: 'Premium',
      },
      {
        id: 'ss-03',
        name: 'Corner Sofa Set',
        description:
          'L-shaped corner sofa that maximises seating in any room layout. Deep cushioning and wide seats.',
        keyword: 'corner sofa set L shape',
        tag: null,
      },
      {
        id: 'ss-04',
        name: 'L Shaped Sofa Set',
        description:
          'Contemporary L-shaped sofa sets available in multiple configurations and upholstery options.',
        keyword: 'L shaped sectional sofa',
        tag: 'Bestseller',
      },
    ],
  },
  {
    id: 'modular-bed',
    name: 'Modular Bed',
    slug: 'modular-bed',
    tag: 'Bedroom',
    description:
      'Beautifully crafted modular beds with storage options — built for modern Indian bedrooms.',
    heroKeyword: 'modular bed bedroom design',
    accentClass: 'from-[#2C1810] to-[#1A0803]',
    products: [
      {
        id: 'mb-01',
        name: 'Stylish Bed',
        description:
          'Contemporary styled bed with upholstered headboard and clean lines. Available in queen and king.',
        keyword: 'stylish modern bed frame',
        tag: 'New',
      },
      {
        id: 'mb-02',
        name: 'Wooden Bed',
        description:
          'Solid wood bed frame with premium finish — durable, traditional, and timeless in design.',
        keyword: 'solid wooden bed frame teak',
        tag: null,
      },
      {
        id: 'mb-03',
        name: 'Double Bed',
        description:
          'Classic double bed frame with under-bed storage compartments and anti-slam hydraulic lift.',
        keyword: 'double bed with storage hydraulic',
        tag: 'Bestseller',
      },
      {
        id: 'mb-04',
        name: 'Designer Bed',
        description:
          'Statement designer beds with padded panels, chrome accents, and luxury velvet headboards.',
        keyword: 'designer bed velvet headboard luxury',
        tag: 'Premium',
      },
    ],
  },
  {
    id: 'kids-table',
    name: 'Kids Table',
    slug: 'kids-table',
    tag: 'Children',
    description:
      "Safe, colourful, and durable furniture designed specifically for children's study and dining.",
    heroKeyword: 'kids children study table furniture',
    accentClass: 'from-[#3D1F0F] to-[#2C1008]',
    products: [
      {
        id: 'kt-01',
        name: 'Kids Study Table',
        description:
          'Height-adjustable study table with anti-glare surface, storage shelf, and book rack for children.',
        keyword: 'kids study table desk children',
        tag: 'Popular',
      },
      {
        id: 'kt-02',
        name: 'Kids Dining Table',
        description:
          'Compact, rounded-edge kids dining table set with matching chairs. Safe, stable, easy to clean.',
        keyword: 'kids dining table set children',
        tag: null,
      },
    ],
  },
] as const

export const TOTAL_PRODUCT_LINES = PRODUCT_CATEGORIES.reduce(
  (sum, c) => sum + c.products.length,
  0,
)
