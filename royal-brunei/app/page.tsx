import { Brands } from '@/components/sections/Brands'
import { Categories } from '@/components/sections/Categories'
import { Contact } from '@/components/sections/Contact'
import { FeaturedProducts } from '@/components/sections/FeaturedProducts'
import { Hero } from '@/components/sections/Hero'
import { MarqueeStrip } from '@/components/sections/MarqueeStrip'
import { Testimonials } from '@/components/sections/Testimonials'
import { WhyUs } from '@/components/sections/WhyUs'

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <Categories />
      <FeaturedProducts />
      <WhyUs />
      <Brands />
      <Testimonials />
      <Contact />
    </>
  )
}
