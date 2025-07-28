import AboutCTA from '@/components/about/AboutCTA'
import AboutHero from '@/components/about/AboutHero'
import LeadershipTeam from '@/components/about/LeadershipTeam'
import OurMission from '@/components/about/OurMission'
import OurStory from '@/components/about/OurStory'
import OurValues from '@/components/about/OurValues'
import StatsSection from '@/components/about/StatsSection'
import React from 'react'

export default function page() {
  return (
    <>
      <AboutHero />
      <OurMission />
      <OurStory />
      <LeadershipTeam />
      <OurValues />
      <StatsSection />
      <AboutCTA />
    </>
  )
}
