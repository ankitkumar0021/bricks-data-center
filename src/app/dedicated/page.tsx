import DedicatedCTA from '@/components/dedicated/DedicatedCTA'
import DedicatedHero from '@/components/dedicated/DedicatedHero'
import HardwareSpecs from '@/components/dedicated/HardwareSpecs'
import PowerFeatures from '@/components/dedicated/PowerFeatures'
import ServerOptions from '@/components/dedicated/ServerOptions'
import UseCases from '@/components/dedicated/UseCases'
import React from 'react'

export default function page() {
  return (
    <>
      <DedicatedHero />
      <PowerFeatures />
      <ServerOptions />
      <UseCases />
      <HardwareSpecs />
      <DedicatedCTA />
    </>
  )
}
