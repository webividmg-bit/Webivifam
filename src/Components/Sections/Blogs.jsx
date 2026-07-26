import React, { useRef } from "react";
import { useNavigate } from "react-router";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

// Components
import Line from "../Common/Line";
import Button from "../Common/Buttons/Button";
import BlogCard from "../Common/Cards/BlogCard";

// Data
import blogs from "../../Data/blogs.json";

function Blogs() {
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          // markers: true,
        },
      });

      tl.from(".blogs-heading", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".blogs-line",
          {
            scaleX: 0,
            transformOrigin: "center",
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4",
        )
        .from(
          ".blog-card",
          {
            y: 80,
            opacity: 0,
            scale: 0.92,
            stagger: 0.15,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.2",
        );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* Heading */}
      <div className="blogs-heading relative z-10 mb-5 flex flex-col items-center leading-none text-center">
        <span
          className="
            font-[Poppins]
            font-bold
            text-white
            text-4xl
            sm:text-5xl
            lg:text-[64px]
          "
        >
          CHECK OUT
        </span>

        <span
          className="
            bg-gradient-to-b
            from-white
            to-[#4D4D4D]
            bg-clip-text
            text-transparent
            font-[Poppins]
            font-bold
            text-4xl
            sm:text-5xl
            lg:text-[64px]
          "
        >
          OUR BLOG
        </span>
      </div>

      {/* Accent Line */}
      <Line className="blogs-line mx-auto mb-12 lg:mb-20" />

      {/* Cards */}
      <div
        className="
          mx-auto
          grid
          max-w-[1450px]
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
          lg:gap-10
          px-6
          sm:px-10
          lg:px-20
        "
      >
        {blogs?.map((blog, index) => (
          <div key={index} className="blog-card overflow-hidden rounded-2xl">
            {/* Actual Card */}
            <BlogCard
              image={blog.thumbnail}
              day={blog.year}
              month={blog.month}
              author={blog.author}
              title={blog.title}
              description={blog.metaDescription}
              onReadNow={() => navigate(`/blogs/read_blog/${index}`)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blogs;
