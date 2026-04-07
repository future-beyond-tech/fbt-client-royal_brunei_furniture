import {
  SofaIcon,
  ChairIcon,
  DiningTableIcon,
  BedIcon,
  WardrobeIcon,
  StudyDeskIcon,
  PillowIcon,
  BenchIcon,
  RecliningSofaIcon,
  ExecutiveChairIcon,
} from '@/components/icons/FurnitureIcons'
import type {
  BusinessInfo,
  Category,
  NavLink,
  Pillar,
  Product,
  Stat,
  Testimonial,
} from '@/types'

export const NAV_LINKS: readonly NavLink[] = [
  { label: 'Collections', href: '#categories' },
  { label: 'Featured', href: '#featured' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Brands', href: '#brands' },
  { label: 'Contact', href: '#contact' },
] as const

export const CATEGORIES: readonly Category[] = [
  {
    id: 'sofa-sets',
    name: 'Sofa Sets',
    tag: 'Living Room',
    count: '11 styles',
    description: 'L-shaped, corner, designer, PU and traditional wooden sofa sets crafted for Indian homes.',
    icon: SofaIcon,
    featured: true,
  },
  {
    id: 'office-chairs',
    name: 'Office Chairs',
    tag: 'Workspace',
    count: '9 models',
    description: 'Executive, high-back, low-back and visitor chairs for corporate offices.',
    icon: ExecutiveChairIcon,
  },
  {
    id: 'dining-tables',
    name: 'Dining Tables',
    tag: 'Dining',
    count: '4 designs',
    description: '4, 6 and 8 seater wooden and glass-top dining sets for families.',
    icon: DiningTableIcon,
  },
  {
    id: 'modular-beds',
    name: 'Modular Beds',
    tag: 'Bedroom',
    count: '6 models',
    description: 'Wooden, designer, double and stylish cane beds with built-in storage options.',
    icon: BedIcon,
  },
  {
    id: 'residential',
    name: 'Residential Furniture',
    tag: 'Whole Home',
    count: '5+ lines',
    description: 'Steel cots, wooden dressing tables, pooja stands and accent pieces.',
    icon: WardrobeIcon,
  },
] as const

export const PRODUCTS: readonly Product[] = [
  {
    id: 'l-shaped-corner-sofa',
    name: 'L-Shaped Corner Sofa',
    description: 'Solid hardwood frame with premium foam and cotton-blend upholstery.',
    priceFromInr: 38500,
    category: 'Sofa Sets',
    icon: SofaIcon,
    badge: 'Bestseller',
  },
  {
    id: 'executive-high-back-chair',
    name: 'Executive High-Back Chair',
    description: 'Mesh and leatherette ergonomic recliner with lumbar support.',
    priceFromInr: 12750,
    category: 'Office Chairs',
    icon: ExecutiveChairIcon,
    badge: 'Premium',
  },
  {
    id: 'six-seater-dining-set',
    name: '6-Seater Wooden Dining Set',
    description: 'Sheesham wood dining table with cushioned high-back chairs.',
    priceFromInr: 42900,
    category: 'Dining Tables',
    icon: DiningTableIcon,
    badge: 'New',
  },
  {
    id: 'queen-storage-bed',
    name: 'Queen Storage Bed',
    description: 'Hydraulic-lift queen bed with premium teak veneer headboard.',
    priceFromInr: 36500,
    category: 'Modular Beds',
    icon: BedIcon,
    badge: 'Bestseller',
  },
  {
    id: 'imported-recliner-sofa',
    name: 'Imported Recliner 3+1+1',
    description: 'Power recliner suite imported from Malaysia with USB charging.',
    priceFromInr: 89000,
    category: 'Sofa Sets',
    icon: RecliningSofaIcon,
    badge: 'Imported',
  },
  {
    id: 'kids-study-desk',
    name: 'Kids Study Desk & Chair',
    description: 'Height-adjustable study station with bookshelf and storage drawer.',
    priceFromInr: 8950,
    category: 'Kids Furniture',
    icon: StudyDeskIcon,
    badge: 'New',
  },
] as const

export const PILLARS: readonly Pillar[] = [
  {
    index: '01',
    title: 'Twelve Years of Craft',
    description:
      'Family-run since 2012, every piece passes through hands that know wood, fabric and the homes of Chennai.',
  },
  {
    index: '02',
    title: 'Authorised Brand Partner',
    description:
      'Official dealer for Kurl-On and Peps mattresses — genuine warranty and direct factory pricing.',
  },
  {
    index: '03',
    title: 'Repair & Restoration',
    description:
      'Full in-house repair, polishing and reupholstery service. We breathe new life into well-loved furniture.',
  },
  {
    index: '04',
    title: 'Bulk & B2B Friendly',
    description:
      'Office, hostel, school and project orders fulfilled across Tamil Nadu with home-visit consultation.',
  },
] as const

export const STATS: readonly Stat[] = [
  { value: '500+', label: 'Happy Homes' },
  { value: '12+', label: 'Years in Business' },
  { value: '35+', label: 'Product Lines' },
  { value: '7', label: 'Days a Week' },
] as const

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    id: 't1',
    rating: 5,
    quote:
      'Bought a complete sofa set for our new flat in Porur. Quality of the wood and finishing is excellent and they delivered within three days.',
    author: 'Priya Ramesh',
    location: 'Porur, Chennai',
  },
  {
    id: 't2',
    rating: 5,
    quote:
      'Akbar bhai personally helped us pick chairs for our office. Genuine Kurl-On mattresses, fair price and honest after-sales support.',
    author: 'Suresh Kannan',
    location: 'Vadapalani, Chennai',
  },
  {
    id: 't3',
    rating: 4,
    quote:
      'Got our old teak dining table re-polished and re-cushioned the chairs. Looks brand new for a fraction of replacement cost.',
    author: 'Lakshmi Iyer',
    location: 'Mugalivakkam, Chennai',
  },
] as const

export const BRANDS: readonly string[] = ['KURL · ON', 'PEPS'] as const

export const BUSINESS_INFO: BusinessInfo = {
  name: 'Royal Brunei Furniture',
  proprietor: 'Akbar M.',
  coProprietor: 'Ibramsha Jagirhussin',
  addressLine1: 'No. 146, Kundrathur Main Road',
  addressLine2: 'Porur, Chennai – 600 116',
  city: 'Chennai',
  state: 'Tamil Nadu',
  postalCode: '600116',
  country: 'India',
  phone: '+91 99411 78678',
  whatsappNumber: '919941178678',
  email: 'enquiry@royalbruneifurniture.in',
  gstin: '33ASYPJ9498H1ZQ',
  udyam: 'UDYAM-TN-02-0032621',
  establishedYear: 2012,
  hours: [
    { days: 'Monday – Saturday', hours: '9:00 AM – 8:00 PM' },
    { days: 'Sunday', hours: '10:00 AM – 6:00 PM' },
  ],
  mapsUrl:
    'https://maps.google.com/?q=Royal+Brunei+Furniture+Kundrathur+Main+Road+Porur+Chennai',
  mapsEmbedUrl:
    'https://maps.google.com/maps?q=Royal%20Brunei%20Furniture%20Porur%20Chennai&t=&z=15&ie=UTF8&iwloc=&output=embed',
} as const

export const MARQUEE_ITEMS: readonly string[] = [
  'Sofa Sets',
  'Office Chairs',
  'Dining Tables',
  'Modular Beds',
  'Kids Furniture',
  'Imported Furniture',
  'Home Furniture',
  'Residential Sets',
  'Pillows & Covers',
  'School Benches',
] as const

export { PillowIcon, BenchIcon }
