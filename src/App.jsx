import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
// import Lenis from "lenis";

// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// Pages
import Blogs from "./Pages/Blogs";
import About from "./Pages/About";
import Landing from "./Pages/Landing";
import Contact from "./Pages/Contact";
import Services from "./Pages/Services";
import BlogReader from "./Pages/BlogReader";

import ScrollToTop from "./Components/ScrollToTop";
import Preloader from "./Components/Common/Preloader";

// SEO
import SEO from "./Pages/Services/SEO";
import SMM from "./Pages/Services/SMM";
import GraphicDesign from "./Pages/Services/GD";
import AppDevelopment from "./Pages/Services/AD";
import WebsiteDevelopment from "./Pages/Services/WD";
import AIVideoCreations from "./Pages/Services/AVC";
import LogoDesign from "./Pages/Services/LD";
import BusinessConsultation from "./Pages/Services/BC";
import CustomDigitalMarketingServices from "./Pages/Services/CDM";
import BrandIdentity from "./Pages/Services/BI";

function App() {
  // const lenis = new Lenis({
  //   autoRaf: true,
  // });

  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  // lenis.on("scroll", ScrollTrigger.update);

  // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  // gsap.ticker.add((time) => {
  //   lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  // });

  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  // gsap.ticker.lagSmoothing(0);

  return (
    <BrowserRouter>
      <Preloader />
      <ScrollToTop />
      <Routes>
        <Route index element={<Landing />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about_us" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact_us" element={<Contact />} />
        <Route path="/blogs/read_blog/:index" element={<BlogReader />} />

        <Route path="/services/seo" element={<SEO />} />
        <Route path="/services/smm" element={<SMM />} />
        <Route path="/services/logo_design" element={<LogoDesign />} />
        <Route path="/services/brand_identity" element={<BrandIdentity />} />
        <Route path="/services/app_developkment" element={<AppDevelopment />} />
        <Route path="/services/graphics_designing" element={<GraphicDesign />} />
        <Route path="/services/web_development" element={<WebsiteDevelopment />} />
        <Route path="/services/ai_video_creation" element={<AIVideoCreations />} />
        <Route path="/services/business_consultation" element={<BusinessConsultation />} />
        <Route path="/services/custom_digital_marketing" element={<CustomDigitalMarketingServices />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
