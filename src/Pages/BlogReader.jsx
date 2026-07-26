import React, { useRef, useMemo } from "react";
import { useParams } from "react-router";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Components
import Badge from "../Components/Common/Badge";
import Footer from "../Components/Sections/Common/Footer";
import NavBar from "../Components/Sections/Common/NavBar";

// Data
import blogs from "../Data/blogs.json";

function BlogReader() {
  const sectionRef = useRef(null);
  const { index } = useParams();

  const parsedIndex = Number(index);

  if (!Number.isInteger(parsedIndex) || parsedIndex < 0) {
    return null;
  }

  const blog = blogs[parsedIndex];

  if (!blog) {
    return null;
  }

  // Rendered Content
  const renderedContent = useMemo(() => {
    return blog.content.map((block, index) => {
      switch (block.type) {
        case "heading":
          return (
            <h2
              key={index}
              className="
              mt-16
              blog-block
              mb-6
              font-[Poppins]
              text-3xl
              font-bold
              tracking-tight
              text-white
              lg:text-4xl
            "
            >
              {block.text}
            </h2>
          );

        case "paragraph":
          return (
            <p
              key={index}
              className="
              blog-block
              mb-7
              text-lg
              leading-9
              text-gray-300
            "
            >
              {block.text}
            </p>
          );

        case "image":
          return (
            <img
              key={index}
              src={block.url}
              alt={block.alt}
              className="
              blog-block
              my-12
              w-full
              rounded-[24px]
              border
              border-[#3C4BBF40]
              object-cover
              shadow-[0_0_35px_rgba(43,179,255,.12)]
            "
            />
          );

        case "quote":
          return (
            <blockquote
              key={index}
              className="
              my-12
              blog-block
              rounded-[24px]
              border-l-4
              border-[#2BB3FF]
              bg-[#0E1328]
              px-8
              py-6
              font-[Poppins]
              text-xl
              italic
              leading-9
              text-white
            "
            >
              "{block.text}"
            </blockquote>
          );

        case "list":
          return (
            <ul
              key={index}
              className="
              mb-10
              blog-block
              list-disc
              space-y-4
              pl-8
              text-lg
              leading-8
              text-gray-300
              marker:text-[#2BB3FF]
            "
            >
              {block.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          );

        case "table":
          return (
            <div
              key={index}
              className="
              blog-block
              my-12
              overflow-hidden
              rounded-[24px]
              border
              border-[#3C4BBF40]
            "
            >
              <table className="w-full border-collapse">
                <thead className="bg-[#0D1225]">
                  <tr>
                    {block.headers.map((header, i) => (
                      <th
                        key={i}
                        className="
                        px-6
                        py-5
                        text-left
                        font-[Poppins]
                        text-lg
                        font-semibold
                        text-white
                      "
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {block.rows.map((row, r) => (
                    <tr
                      key={r}
                      className="
                      border-t
                      border-[#3C4BBF40]
                      odd:bg-[#10142B]
                      even:bg-[#0D1122]
                    "
                    >
                      {row.map((cell, c) => (
                        <td
                          key={c}
                          className="
                          px-6
                          py-5
                          text-gray-300
                        "
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );

        case "faq":
          return (
            <div
              key={index}
              className="
              blog-block
              my-8
              rounded-[24px]
              border
              border-[#3C4BBF40]
              bg-[#10142B]
              p-7
            "
            >
              <h3
                className="
                font-[Poppins]
                text-2xl
                font-semibold
                text-white
              "
              >
                {block.question}
              </h3>

              <p
                className="
                mt-4
                leading-8
                text-gray-300
              "
              >
                {block.answer}
              </p>
            </div>
          );

        default:
          return null;
      }
    });
  }, [blog.content]);

  useGSAP(
    () => {
      // Hero
      gsap.from(".blog-badge", {
        y: 25,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
      });

      gsap.from(".blog-title", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
      });

      gsap.from(".blog-meta", {
        y: 25,
        opacity: 0,
        duration: 0.6,
        delay: 0.25,
        ease: "power3.out",
      });

      gsap.from(".blog-hero", {
        y: 60,
        opacity: 0,
        scale: 0.97,
        duration: 1,
        delay: 0.35,
        ease: "power3.out",
      });

      // Every article block
      gsap.utils.toArray(".blog-block").forEach((block, index) => {
        gsap.from(block, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.05,
          ease: "power3.out",
          scrollTrigger: {
            trigger: block,
            start: "top 88%",
          },
        });
      });
    },
    { scope: sectionRef },
  );

  return (
    <div ref={sectionRef} className="w-full relative overflow-hidden bg-black">
      <NavBar />
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        {/* Header */}

        <div className="mb-16">
          <Badge className="blog-badge" label={blog.category} />

          <h1
            className="
            blog-title
            mt-6
            font-[Poppins]
            text-5xl
            font-bold
            leading-tight
            text-white
            lg:text-6xl
            "
          >
            {blog.title}
          </h1>

          <div className="blog-meta mt-6 flex flex-wrap gap-6 text-base text-gray-400">
            <span>By {blog.author}</span>
            <span>•</span>
            <span>{blog.readTime}</span>
            <span>•</span>
            <span>
              {blog.month} {blog.year}
            </span>
          </div>
        </div>

        {/* Hero Image */}

        {blog.thumbnail && (
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="
            blog-hero
            mb-12
            h-[280px]
            w-full
            rounded-[32px]
            border
            border-[#3C4BBF40]
            object-cover
            shadow-[0_0_45px_rgba(43,179,255,.15)]
            md:h-[420px]
            lg:h-[520px]
            "
          />
        )}

        {/* Article */}

        <article
          className="
          rounded-[32px]
          border
          border-[#3C4BBF40]
          bg-gradient-to-b
          from-[#10142B]
          to-[#090B15]
          px-8
          py-12
          shadow-[0_0_45px_rgba(43,179,255,.08)]
          lg:px-16
          "
        >
          {renderedContent}
        </article>
      </section>

      <Footer />
    </div>
  );
}

export default BlogReader;
