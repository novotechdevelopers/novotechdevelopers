"use client";
import React, { useEffect } from "react";
//= Components
import Services from "@/components/Demos/Services";
import CallToAction from "@/components/Demos/CallToAction";
//= Scripts
import initIsotope from "@/common/initIsotope";
import Navbar from "@/components/Common/Navbar";
import Header from "@/components/Headers/Header4";
import AboutUs from "@/components/AboutUs/AboutUs3";
import Works from "@/components/Works/Works3";
import MinimalArea2 from "@/components/Others/MinimalArea2";
import FullTestimonials from "@/components/Testimonials/FullTestimonials";
import Team from "@/components/Team/Team1";
import Blogs from "@/components/Blogs/Blogs4";

import Footer from "@/components/Common/Footer";

function HomePage() {
  useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 500);
  }, []);

  

  return ( 
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <Works />
      <Services />
      <MinimalArea2 />
      <FullTestimonials classText="pb-0" />
      <Team />
      <Blogs />
      <CallToAction />
      <Footer />
    </>
  );
}

export default HomePage;
