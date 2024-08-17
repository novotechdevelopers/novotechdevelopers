import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import Navbar from '@/components/Common/Navbar';
import PagesHeader from '@/components/Headers/PagesHeader';
import AboutIntro from '@/components/AboutUs/AboutIntro';
import Services from '@/components/Services/Services4';
import TestimonialsWithVideo from '@/components/Testimonials/TestimonialsWithVideo';
import SkillsCircle from '@/components/Skills/SkillsCircle';
import Team from '@/components/Team/Team1';
import MinimalArea from '@/components/Others/MinimalArea1';
import Clients from '@/components/Clients/Clients1';
import CallToAction from '@/components/Others/CallToAction';
import Footer from '@/components/Common/Footer';

export const metadata = {
  title: 'Novotech - About Us'
}

function AboutDark() {
  return (
    <>
      <Loading />
      <Navbar />
      <PagesHeader imageLink="/img/slid/about.jpg">Empowering The Tech World, One Project At A Time—Our Dedicated Team Delivers Advanced Development Services, Driving Innovation And Excellence In Technology.</PagesHeader>
      <AboutIntro />
      <Services style="4item" />
      <TestimonialsWithVideo />
      <SkillsCircle from="aboutPage" />
      <Team />
      <MinimalArea />
      
      <CallToAction />
      <Footer />
    </>
  )
}

export default AboutDark