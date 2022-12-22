import React from 'react'
import AboutUs from '../aboutUs/aboutUs';
import HeroSection from '../heroSection/heroSection';
import UpcomingEvents from '../upcomingEvents/upcomingEvents';
import OurTeam from '../ourTeam/ourTeam';

function home() {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <UpcomingEvents />
      <OurTeam />
    </>
  )
}

export default home