import React from "react";
import Hero from "@/components/homepage/Hero";
import Mission from "@/components/homepage/Mission";
import Performance from "@/components/homepage/Performance";
import Services from "@/components/homepage/Services";
import Cta from "@/components/homepage/Cta";


export default function Home() {
  return (
    <>
      <Hero /> 
      <Mission />
      <Performance />
      <Services />
      <Cta />
    </>
  );
}
