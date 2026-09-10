import React from "react";
import HeroSection from "../Components/Landing/HeroSection";
import TransformationSection from "../Components/Landing/TransformationSection";
import GrowthRoadmapSection from "../Components/Landing/GrowthRoadmapSection";
import IndustriesSection from "../Components/Landing/IndustriesSection";
import EcosystemSection from "../Components/Landing/EcosystemSection";
import SEOSection from "../Components/Landing/SEOSection";
import ServicesSection from "../Components/Landing/ServicesSection";
import WhyWebivifamSection from "../Components/Landing/WhyWebivifamSection";
import ClientReviewsSection from "../Components/Landing/ClientReviewsSection";
import GrowingHaryanaSection from "../Components/Landing/GrowingHaryanaSection";
import ScrollJourneyIndicator from "../Components/Landing/ScrollJourneyIndicator";
import Footer from "../Components/Sections/Common/Footer";

function Landing() {
  return (
    <div className="w-full relative overflow-hidden bg-black">
      <ScrollJourneyIndicator />
      <HeroSection />
      <TransformationSection />
      <GrowthRoadmapSection />
      <IndustriesSection />
      <EcosystemSection />
      <SEOSection />
      <ServicesSection />
      <WhyWebivifamSection />
      <ClientReviewsSection />
      <GrowingHaryanaSection />
      <Footer />
    </div>
  );
}

export default Landing;

