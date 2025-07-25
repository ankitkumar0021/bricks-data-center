import React from "react";
// import Hero from "@/components/homepage/Hero";
import Mission from "@/components/homepage/Mission";
import Performance from "@/components/homepage/Performance";
import Services from "@/components/homepage/Services";
import Cta from "@/components/homepage/Cta";
import MainBanner from "@/components/banners/MainBanner";


export default function Home() {
  return (
    <>
      {/* <Hero />  */}
      <MainBanner />
      <Mission />
      <Performance />
      <Services />
      <Cta />
    </>
  );
}
