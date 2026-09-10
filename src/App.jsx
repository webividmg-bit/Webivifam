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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
