"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  // const { ref } = useSectionInView("About");

  return (
    <motion.section
      // ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      {/* <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am a Master’s student in AI and Language at Stockholm University and a
        BS Computer Science graduate from the University of Engineering and
        Technology. I have hands-on experience as a Software Engineer
        and team lead at Square One Ventures, where I built scalable web
        applications from scratch using React, Javascript ,TypeScript, MERN Stack, and
        Firebase. I designed and developed major applications for my last company taking full ownership
        from architecture and frontend development to deployment using clean and
        modular architecture. I also gained professional experience through
        internships at Inventive Tech Energy and The Dev Corporate, focusing on
        frontend development, performance optimization, and building
        user-friendly interfaces. My technical skills span fullstack
        development, real-time data applications, AI integration, and multiple
        programming languages including TypeScript, C, C++, Python, and Assembly
        Language. I am passionate about building user-centric, high-performing
        applications and continuously exploring new technologies, especially in
        AI and web development. I am currently seeking a full-time software
        developer role where I can contribute to impactful projects and grow
        professionally. Outside of coding, I enjoy playing video games and
        watching movies, which help me stay creative and energized.
      </p> */}
    </motion.section>
  );
}
