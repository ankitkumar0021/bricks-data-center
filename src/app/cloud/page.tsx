import Architecture from '@/components/cloud/Architecture'
import CloudCta from '@/components/cloud/CloudCta'
import CloudFeatures from '@/components/cloud/CloudFeatures'
import CloudHero from '@/components/cloud/CloudHero'
import CloudPricing from '@/components/cloud/CloudPricing'
import Solutions from '@/components/cloud/Solutions'
import React from 'react'

export default function page() {
  return (
    <>
      <CloudHero />
      <CloudFeatures />
      <Solutions />
      <Architecture />
      <CloudPricing />
      <CloudCta />
    </>
  )
}
