import React from "react";
import {
  Carousel,
  Slider,
  SliderContainer,
  SliderDotButton,
  SliderPrevButton,
  SliderNextButton,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Star, Quote, CheckCircle2 } from "lucide-react";

export const CLIENT_REVIEWS = [
  {
    id: 1,
    quote:
      "We are extremely happy with the services provided by Webivifam Agency. The team is kind, professional, and incredibly cooperative in every situation. Communication was smooth and efficient despite being in different countries, and every project was delivered before the timeline. Their support, responsiveness, and commitment truly stood out. We highly recommend Webivifam Agency to anyone looking for a reliable and results-driven digital partner.",
    name: "Minette Mudimbi",
    role: "CEO & Co-Founder",
    company: "Global Enterprise",
    location: "International",
    avatar: "/Images/Profile.jpg",
    rating: 5,
    tag: "Timeline Delivery",
    highlight: "Delivered Before Timeline",
  },
  {
    id: 2,
    quote:
      "We received excellent service from Webivi Agency. The service was fast and efficient with great communication considering they are in India and we are in Canada. We are happy with the service provided and would recommend them without hesitation.",
    name: "Mr. Yannick",
    role: "CEO & Co-Founder",
    company: "Tech Venture",
    location: "Canada",
    avatar: "/Images/Profile.jpg",
    rating: 5,
    tag: "International Reach",
    highlight: "Fast & Efficient Execution",
  },
  {
    id: 3,
    quote:
      "Excellent Work — Highly Recommended! I hired Webivifam Agency to build my real estate platform Prop Dealer and I'm genuinely impressed with the quality of their work. As a founder based in the US managing everything remotely, I needed a team I could trust completely. Webivifam delivered exactly what I envisioned — a clean, professional and fully functional platform built to my requirements. What stood out most was their patience, clear communication throughout the process, and attention to detail. If you're looking for a reliable web development agency that delivers quality work on time — Webivifam Agency is the one.",
    name: "Rahul Tejli",
    role: "Founder & Owner",
    company: "Brokyfy & Prop Dealer",
    location: "United States",
    avatar: "/Images/Profile.jpg",
    rating: 5,
    tag: "Custom Platform",
    highlight: "Real Estate Tech Platform",
  },
];

export default function ClientReviewsSection() {
  const OPTIONS = { loop: true };

  return (
    <section
      id="reviews"
      className="relative w-full overflow-hidden py-20 lg:py-28 bg-black select-none"
    >
      {/* Deep Atmospheric Cosmic Glow Background */}
      <div className="absolute inset-0 m-auto w-[600px] h-[400px] rounded-full bg-[#1A2870]/18 blur-[160px] pointer-events-none -z-0" />
      <div className="absolute right-10 top-1/3 w-[350px] h-[350px] rounded-full bg-cyan-500/10 blur-[130px] pointer-events-none -z-0" />

      <div className="relative z-10 mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16 text-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center mb-12 sm:mb-16">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-semibold mb-4 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.25)]">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Client Testimonials
          </span>

          <h2 className="font-[Poppins] font-bold text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight mb-4 bg-gradient-to-b from-white via-[#E0E0E0] to-[#707070] bg-clip-text text-transparent leading-tight">
            Trusted by Founders Across the Globe
          </h2>

          <p className="font-[Poppins] text-base sm:text-lg text-slate-300 max-w-xl mx-auto leading-relaxed">
            Real outcomes and long-term partnerships built with businesses across the USA, Canada, and worldwide.
          </p>
        </div>

        {/* Embla Auto-Slider Carousel */}
        <div className="relative w-full max-w-4xl mx-auto">
          <Carousel
            options={OPTIONS}
            className="w-full"
            plugins={[
              Autoplay({
                playOnInit: true,
                delay: 1850, // Snappy & engaging auto-scroll transition
                stopOnMouseEnter: true,
                stopOnInteraction: false,
              }),
            ]}
          >
            <SliderContainer className="gap-6 items-stretch">
              {CLIENT_REVIEWS.map((item) => (
                <Slider key={item.id} className="w-full flex">
                  <div className="relative w-full min-h-[390px] sm:min-h-[360px] md:min-h-[340px] flex flex-col justify-between rounded-2xl border border-[#2B3E94]/70 bg-gradient-to-br from-[#0c1538]/90 via-[#070d24]/95 to-[#030612] p-6 sm:p-10 text-left backdrop-blur-xl shadow-[0_0_50px_rgba(43,179,255,0.15)] transition-all duration-300 hover:border-[#2BB3FF] hover:shadow-[0_0_40px_rgba(43,179,255,0.3)]">
                    
                    {/* Atmospheric Watermark Quote Icon */}
                    <Quote className="absolute right-6 top-6 w-14 h-14 sm:w-20 sm:h-20 text-[#2B3E94]/20 pointer-events-none" />

                    {/* Top Row: Stars Rating & Location Pill */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6 relative z-10">
                      <div className="flex items-center gap-1 text-amber-400">
                        {[...Array(item.rating)].map((_, i) => (
                          <Star key={i} size={18} fill="#FBBF24" stroke="none" />
                        ))}
                        <span className="ml-2 text-xs font-mono text-slate-300 font-bold">5.0 / 5.0</span>
                      </div>

                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-cyan-300 text-xs font-mono font-medium">
                        <CheckCircle2 size={13} className="text-cyan-400" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Review Quote Text */}
                    <p className="font-[Poppins] text-[15px] sm:text-[17px] text-gray-200 leading-[1.75] mb-6 relative z-10 font-normal flex-1">
                      "{item.quote}"
                    </p>

                    {/* Bottom Row: Client Profile & Highlight Tag */}
                    <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#2B3E94]/40 relative z-10 mt-auto">
                      <div className="flex items-center gap-3.5">
                        <div className="relative">
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="w-12 h-12 rounded-full object-cover border-2 border-cyan-400/80 shadow-[0_0_12px_rgba(34,211,238,0.5)]"
                          />
                          <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-emerald-400 border-2 border-black" />
                        </div>

                        <div>
                          <h4 className="font-[Poppins] text-white font-bold text-base tracking-wide">
                            {item.name}
                          </h4>
                          <p className="text-xs text-slate-400 font-sans">
                            {item.role} &bull; <span className="text-cyan-300">{item.company}</span>
                          </p>
                        </div>
                      </div>

                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-300 bg-[#0c1538] border border-blue-500/30 px-3 py-1 rounded-full">
                        {item.highlight}
                      </span>
                    </div>

                  </div>
                </Slider>
              ))}
            </SliderContainer>

            {/* Navigation Dots & Controls */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <SliderPrevButton aria-label="Previous review" />
              <SliderDotButton />
              <SliderNextButton aria-label="Next review" />
            </div>
          </Carousel>
        </div>

      </div>
    </section>
  );
}
