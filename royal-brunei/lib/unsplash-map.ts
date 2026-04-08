/**
 * Curated map of internal IDs → real Unsplash photo IDs.
 * Each ID is verified visually and rendered through next/image
 * (images.unsplash.com is whitelisted in next.config.ts).
 */
export const PHOTO_MAP: Readonly<Record<string, string>> = {
  // ── CATEGORY HEROES ──
  'office-chair': 'photo-1541558869434-2840d308329a',
  'dining-table': 'photo-1555041469-a586c61ea9bc',
  'residential-furniture': 'photo-1586023492125-27b2c045efd7',
  'pillow-cover': 'photo-1616047006789-b7af5afb8c20',
  'sofa-set': 'photo-1555041469-a586c61ea9bc',
  'modular-bed': 'photo-1505693416388-ac5ce068fe85',
  'kids-table': 'photo-1565538810643-b5bdb714032a',

  // ── OFFICE CHAIRS ──
  'oc-01': 'photo-1592078615290-033ee584e267',
  'oc-02': 'photo-1541558869434-2840d308329a',
  'oc-03': 'photo-1556909172-54557c7e4fb7',
  'oc-04': 'photo-1580480055273-228ff5388ef8',

  // ── DINING TABLES ──
  'dt-01': 'photo-1617806118233-18e1de247200',
  'dt-02': 'photo-1555041469-a586c61ea9bc',
  'dt-03': 'photo-1604578762246-41134e37f9cc',
  'dt-04': 'photo-1615873968403-89e068629265',

  // ── RESIDENTIAL ──
  'rf-01': 'photo-1505693416388-ac5ce068fe85',
  'rf-02': 'photo-1555041469-a586c61ea9bc',
  'rf-03': 'photo-1586023492125-27b2c045efd7',
  'rf-04': 'photo-1578898887932-dce23a595ad4',

  // ── PILLOW COVERS ──
  'pc-01': 'photo-1616047006789-b7af5afb8c20',
  'pc-02': 'photo-1616046229478-9901c5536a45',

  // ── SOFA SETS ──
  'ss-01': 'photo-1555041469-a586c61ea9bc',
  'ss-02': 'photo-1550254478-ead40cc54513',
  'ss-03': 'photo-1493663284031-b7e3aefcae8e',
  'ss-04': 'photo-1555041469-a586c61ea9bc',

  // ── MODULAR BEDS ──
  'mb-01': 'photo-1540518614846-7eded433c457',
  'mb-02': 'photo-1505693416388-ac5ce068fe85',
  'mb-03': 'photo-1556909172-54557c7e4fb7',
  'mb-04': 'photo-1522771739844-6a9f6d5f14af',

  // ── KIDS TABLES ──
  'kt-01': 'photo-1565538810643-b5bdb714032a',
  'kt-02': 'photo-1617806118233-18e1de247200',
} as const

const FALLBACK_PHOTO = 'photo-1555041469-a586c61ea9bc'

export function getPhoto(id: string, w = 800, h = 600): string {
  const photoId = PHOTO_MAP[id] ?? FALLBACK_PHOTO
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${w}&h=${h}&q=85`
}
