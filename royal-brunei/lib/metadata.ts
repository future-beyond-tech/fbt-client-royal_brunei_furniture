import type { Metadata } from 'next'
import { BUSINESS_INFO } from '@/lib/constants'

const SITE_URL = 'https://royalbruneifurniture.in'

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      'Royal Brunei Furniture | Premium Furniture Store in Porur, Chennai',
    template: '%s | Royal Brunei Furniture',
  },
  description:
    "Chennai's trusted furniture destination since 2012. Sofa sets, office chairs, dining tables, modular beds & imported furniture in Porur. Authorised Kurl-On & Peps dealer.",
  keywords: [
    'furniture store chennai',
    'sofa sets porur',
    'office chairs chennai',
    'kurl-on dealer porur',
    'peps mattress chennai',
    'dining table chennai',
    'imported furniture chennai',
    'modular beds porur',
    'royal brunei furniture',
  ],
  authors: [{ name: BUSINESS_INFO.proprietor }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  robots: { index: true, follow: true },
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: BUSINESS_INFO.name,
    title: 'Royal Brunei Furniture | Premium Furniture Store in Chennai',
    description:
      'Sofa sets, office chairs, dining tables, modular beds & imported furniture in Porur, Chennai. Authorised Kurl-On & Peps dealer since 2012.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royal Brunei Furniture | Premium Furniture Store in Chennai',
    description:
      'Sofa sets, dining tables, office chairs and imported furniture from Porur, Chennai since 2012.',
  },
  category: 'Furniture',
}

export function buildLocalBusinessJsonLd(): string {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FurnitureStore',
    '@id': SITE_URL,
    name: BUSINESS_INFO.name,
    image: `${SITE_URL}/og-image.png`,
    url: SITE_URL,
    telephone: BUSINESS_INFO.phone,
    priceRange: '₹₹',
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.addressLine1,
      addressLocality: 'Porur',
      addressRegion: BUSINESS_INFO.state,
      postalCode: BUSINESS_INFO.postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 13.0379,
      longitude: 80.1565,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '09:00',
        closes: '20:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Sunday'],
        opens: '10:00',
        closes: '18:00',
      },
    ],
    hasMap: BUSINESS_INFO.mapsUrl,
    foundingDate: String(BUSINESS_INFO.establishedYear),
    founder: { '@type': 'Person', name: BUSINESS_INFO.proprietor },
    areaServed: { '@type': 'State', name: 'Tamil Nadu' },
    identifier: [
      { '@type': 'PropertyValue', name: 'GSTIN', value: BUSINESS_INFO.gstin },
      { '@type': 'PropertyValue', name: 'Udyam', value: BUSINESS_INFO.udyam },
    ],
  }
  return JSON.stringify(data)
}

export const SITE_URL_CONST = SITE_URL
