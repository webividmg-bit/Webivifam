import React, { useRef, useState, useEffect } from "react";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Components
import Line from "../Common/Line";
import Button from "../Common/Buttons/Button";
import ContactUsForm from "../Common/ContactUsForm";

const reviews = [
  {
    review:
      "We are extremely happy with the services provided by Webifam Agency. The team is kind, professional, and incredibly cooperative in every situation. Communication was smooth and efficient despite being in different countries, and every project was delivered before the timeline. Their support, responsiveness, and commitment truly stood out. We highly recommend Webifam Agency to anyone looking for a reliable and results-driven digital partner.",
    name: "Minette Mudimbi",
    role: "CEO & Co-Founder",
    image: "/Images/Profile.jpg",
  },
  {
    review:
      "We received excellent service from Webivi Agency. The service was fast and efficient with great communication considering they are in India and we are in Canada. We are happy with the service provided and would recommend them.",
    name: "Mr. Yannick",
    role: "CEO & Co-Founder",
    image: "/Images/Profile.jpg",
  },
  {
    review:
      "Excellent Work — Highly Recommended! I hired Webivifam Agency to build my real estate platform Prop Dealer and I’m genuinely impressed with the quality of their work. As a founder based in the US managing everything remotely, I needed a team I could trust completely. Webivifam delivered exactly what I envisioned — a clean, professional and fully functional platform built to my requirements. What stood out most was their patience in understanding my vision, clear communication throughout the process, and attention to detail in the final product. If you’re looking for a reliable web development agency that delivers quality work on time — Webivifam Agency is the one. I’ll definitely be working with them again as Prop Deal grows. Highly recommended for anyone looking to build there startup or business website.",
    name: "Rahul Tejli (USA)",
    role: "Owner Brokyfy",
    image: "/Images/Profile.jpg",
  },
];

function Reviews() {
  const sectionRef = useRef(null);

  const [currentReview, setCurrentReview] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const reviewRef = useRef();
  const review = reviews[currentReview];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused]);

  useGSAP(
    () => {
      gsap.fromTo(
        reviewRef.current,
        {
          opacity: 0,
          y: 40,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
      );
    },
    { dependencies: [currentReview] },
  );

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          // markers: true,
        },
      });

      tl.from(".reviews-heading", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".reviews-line",
          {
            scaleX: 0,
            transformOrigin: "center",
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".left",
          {
            x: -100,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .from(
          ".right",
          {
            x: 100,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "-=0.6",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black py-16 sm:py-20 lg:py-24"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-0 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-[#3C4BBF20] blur-[150px] sm:h-[600px] sm:w-[600px] lg:h-[700px] lg:w-[700px]" />

      <div
        className="
        z-10
        mx-auto
        relative
        max-w-[1400px]
        flex
        flex-col
        gap-10
        px-6
        sm:px-10
        lg:px-20
        xl:flex-row
        xl:items-start
        xl:gap-16
      "
      >
        <div className="left">
          <div ref={reviewRef} className="review-panel flex-1">
            <h2
              className="
            reviews-heading
            mx-auto
            mb-5
            w-fit
            bg-gradient-to-b
            from-white
            via-[#D8D8D8]
            to-[#4D4D4D]
            bg-clip-text
            text-center
            font-[Poppins]
            font-bold
            text-transparent
            text-3xl
            sm:text-4xl
            lg:text-[48px]
          "
            >
              CLIENT REVIEWS
            </h2>

            <Line className="reviews-line mx-auto mb-10 lg:mb-14" />

            <div
              className="
            rounded-[24px]
            lg:rounded-[30px]
            border
            border-[#3C4BBF40]
            bg-gradient-to-b
            from-[#11162E]
            to-[#090B15]
            p-6
            sm:p-8
            lg:p-12
            shadow-[0_0_50px_rgba(43,179,255,.15)]
          "
            >
              <p
                className="
              text-gray-300
              italic
              text-base
              lg:text-[18px]
              leading-8
              lg:leading-[36px]
            "
              >
                {review.review}
              </p>

              <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-4 sm:gap-5">
                  <img
                    src={review.image}
                    className="h-16 w-16 rounded-2xl object-cover sm:h-20 sm:w-20"
                  />

                  <div>
                    <h3 className="text-xl font-semibold text-white lg:text-[26px]">
                      {review.name}
                    </h3>

                    <p className="text-sm text-gray-400 lg:text-base">
                      {review.role}
                    </p>
                  </div>
                </div>

                <span className="self-end text-6xl text-[#2BB3FF] opacity-30 lg:text-[90px]">
                  "
                </span>
              </div>
            </div>

            {/* DOTS */}
            <div className="mt-8 flex justify-center gap-3">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`rounded-full transition-all duration-300 ${
                    currentReview === index
                      ? "h-4 w-4 bg-[#2BB3FF]"
                      : "h-3 w-3 bg-[#3C4BBF]"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="right">
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
}

export default Reviews;
