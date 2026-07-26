import React, { useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Components
import Line from "../Common/Line";
import TeamCard from "../Common/Cards/TeamCard";

const TEAM_MEMBERS = [
  {
    name: "Sanjana Verma",
    role: "Founder & Growth Strategist",
    image: "/Images/Team/Sanjana.jpeg",
    description:
      "Sanjana is the Founder of WEBIVIFAM and a Digital Growth Strategist dedicated to helping businesses grow through innovation, marketing, and technology. She leads the agency's vision, client partnerships, and growth strategies, with a focus on building sustainable brands that create lasting impact.",
  },
  {
    name: "Megha",
    role: "Co-Founder & Operations Lead",
    image: "/Images/Team/Megha.jpeg",
    description:
      "The Co-Founder oversees strategic planning, client success, and operations, ensuring seamless collaboration between clients and internal teams. They drive projects from concept to execution while maintaining efficiency, quality, and strong client relationships.",
  },
  {
    name: "Pushkardeep",
    role: "Lead & Full Stack Developer",
    image: "/Images/Team/Pushkardeep.jpeg",
    description:
      "Our Full Stack Development team builds high-performance websites, web applications, e-commerce platforms, and scalable digital solutions. From intuitive front-end experiences to robust back-end systems, we create technology that drives business growth and delivers exceptional user experiences.",
  },
];

function Team() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      // Heading
      gsap.from(".team-heading span", {
        y: 60,
        opacity: 0,
        stagger: 0.15,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".team-heading",
          start: "top 80%",
        },
      });

      // Line
      gsap.from(".team-line", {
        scaleX: 0,
        opacity: 0,
        duration: 0.7,
        transformOrigin: "center",
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".team-line",
          start: "top 85%",
        },
      });

      // Cards
      gsap.utils.toArray(".team-card").forEach((card, index) => {
        gsap.from(card, {
          y: 70,
          opacity: 0,
          duration: 0.8,
          delay: index * 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
          },
        });
      });
    },
    { scope: sectionRef.current },
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          {/* Heading */}
          <div className="team-heading relative z-10 mb-5 flex flex-col items-center leading-none text-center">
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
              Our Leadership
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
              Meet The Team Behind WEBIVIFAM
            </span>
          </div>

          {/* Accent Line */}
          <div className="w-fit team-line relative z-10 mx-auto mb-12 lg:mb-20">
            <Line />
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {TEAM_MEMBERS.map((member, index) => (
            <div key={index} className="team-card">
              <TeamCard
                image={member.image}
                name={member.name}
                role={member.role}
                description={member.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Team;
