import GPUCTA from '@/components/gpu-cloud/GPUCTA'
import GPUFAQ from '@/components/gpu-cloud/GPUFAQ'
import GPUHero from '@/components/gpu-cloud/GPUHero'
import GPUIntegration from '@/components/gpu-cloud/GPUIntegration'
import GPUPricing from '@/components/gpu-cloud/GPUPricing'
import GPUSpecs from '@/components/gpu-cloud/GPUSpecs'
import GPUTechnicalFeatures from '@/components/gpu-cloud/GPUTechnicalFeatures'
import GPUTestimonials from '@/components/gpu-cloud/GPUTestimonials'
import GPUUseCases from '@/components/gpu-cloud/GPUUseCases'
import GPUWhySection from '@/components/gpu-cloud/GPUWhySection'
import React from 'react'

export default function page() {
  return (
    <>
       <GPUHero />
      <GPUWhySection />
      <GPUSpecs />
      <GPUUseCases />
      <GPUTechnicalFeatures />
      <GPUPricing />
      <GPUIntegration />
      <GPUTestimonials />
      <GPUCTA />
      <GPUFAQ />
    </>
  )
}
