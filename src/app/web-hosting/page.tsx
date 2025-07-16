import Cta from '@/components/homepage/Cta'
import Performance from '@/components/homepage/Performance'
import Features from '@/components/web-hosting/Features'
import Pricing from '@/components/web-hosting/Pricing'
import WebHostingHero from '@/components/web-hosting/WebHostingHero'
import React from 'react'

export default function page() {
  return (
    <>
      <WebHostingHero />
      <Features />
      <Pricing />
      <Performance />
      <Cta />
    </>
  )
}
