import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";
import travel from "@/public/travel.jpeg";
import social from "@/public/social.jpg";
import AI from "@/public/AI.jpeg";
import Cpp from "@/public/c++.png";
import wabapi from "@/public/wabaip.png";
import ite from "@/public/ite.png";
import sqoneAcquire from "@/public/sqone acquire.webp";
import sqoneGrow from "@/public/sqone grow.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  // {
  //   name: "About",
  //   hash: "#about",
  // },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer - Square One Ventures",
    location: "",
    description: [
      "Worked as a Lead and Software Engineer, supervising a cross-functional team and driving end-to-end software development.",
      "Responsible for frontend and full-stack development, focusing on React/TypeScript interfaces and backend integrations.",
      "Built web applications with user-centric design, emphasizing real-time data and performance.",
      "Designed and developed Square One Acquire and Square One Grow using MERN Stack and Firebase.",
      "Used Clean and Modular Architecture to separate business logic, UI, data, and domain layers.",
      "Products were designed from scratch, ensuring scalability and performance.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "June 2024 - Sep 2025",
  },
  {
    title: "Software Engineer Intern — Inventive Tech Energy",
    location: "",
    description: [
      "Worked as a Web Developer Intern at Inventive Tech Energy, contributing to website development projects.",
      "Focused on frontend development with modern JavaScript frameworks, collaborating closely with senior engineers on design, implementation, and performance improvements.",
      "Strengthened practical skills in building user-friendly interfaces and gained a deeper understanding of frontend best practices in a professional environment.",
    ],
    icon: React.createElement(LuGraduationCap),
    date: "July-Sep 2023",
  },
  {
    title: "Software Engineer Intern — The Dev Corporate",
    location: "",
    description: [
      "Worked as a Front-End Developer Intern at The Dev Corporate, mastering HTML, CSS, JavaScript, TypeScript, and React JS.",
      "Crafted user interfaces for a project, consolidating expertise in web development and frontend design.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Jan-Mar 2023",
  },
  {
    title: "Teacher Assistant",
    location: "",
    description: [
      "Assisted new students in programming, logic building, and problem-solving.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "Dec 2023-Mar 2024",
  },
] as const;

export const projectsData = [
  {
    title: " Square One Acquire",
    description:
      " Designed the Web application for companies, the key features included managing the hiring process on a centralized platform from job posting to candidate connections, making it easier for companies to connect with fresh graduates. Designed the architecture and developed it from scratch with no legacy code. Took full ownership from design through deployment, ensuring a clean, scalable, and high-performing solution.",
    tags: [
      "MERN Stack",
      "Firebase",
      "Firebase Cloud Functions",
      ,
      "Tailwind CSS",
      "Modular Architecture",
      "Clean Architecture",
    ],
    imageUrl: sqoneAcquire,
  },
  {
    title: " Square One Grow",
    description:
      "Designed the web application for Business Owners, I built features to create ads, run campaigns, amount credited and debited from the user’s account, and track engagement, helping them grow their businesses digitally. I designed the architecture, and developed it from scratch with no legacy code. Took full ownership from design through deployment, ensuring a clean, scalable, and high-performing solution",
    tags: [
      "MERN Stack",
      "Firebase",
      "Firebase Cloud Functions",
      ,
      "Tailwind CSS",
      "Modular Architecture",
      "Clean Architecture",
    ],
    imageUrl: sqoneGrow,
  },
  {
    title: "Final Year Project",
    description:
      "To create a comprehensive website for tourists seeking a unique travel experience. The project merges cutting-edge AI with a user-friendly interface.",
    tags: ["React", "Next.js", "NodeJS", "ExpressJs", "MongoDB", "Tailwind"],
    imageUrl: travel,
  },
  {
    title: "Crud Applications",
    description:
      "Crud Applications using MERN stack and using the styling framework Material-UI.",
    tags: [
      "React",
      "Next.js",
      "NodeJS",
      "ExpressJs",
      "MongoDB",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
    // imageUrl: wabapi,
  },
  {
    title: "WaBusinessAPI",
    description: "I worked on Company's live project",
    tags: ["React", "Next.js", "NodeJS", "ExpressJs", "MongoDB", "Tailwind"],
    imageUrl: wabapi,
  },
  {
    title: "Inventive Tech Energy",
    description:
      " Worked on some of the features of the company’s own website as a front-end developer",
    tags: ["React", "Next.js", "Tailwind CSS"],
    imageUrl: ite,
  },
  {
    title: "Student Learning Management",
    description:
      "Mini LMS like system in which student,Teachers can signIn/signOut and other basic functions for student and teachers. Admin can remove/add teacher/student/course",
    tags: ["C++"],
    imageUrl: Cpp,
  },
  {
    title: "Dummy social Media Application",
    description:
      "A dummy social media application with CLI interface. User can post and send friend request to other users, can comment etc.",
    tags: ["C++"],
    imageUrl: social,
  },
  {
    title: "Artificial Intelligence and Machine Learning Projects",
    description:
      " worked on some Semester Based Projects using me skills in Artificial Intelligence and Implemented some Machine learning algorithms.",
    tags: ["Python"],
    imageUrl: AI,
  },
] as const;

export const skillsData = [
  "OOP",
  "DSA",
  "DB/SQL Server",
  "NoSQL",
  "HTML",
  "CSS",
  "Tailwind CSS",
  "BOOTSTRAP",
  "Material-UI",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "MongoDB",
  "Express",
  "PHP",
  "Firebase",
  "Firebase Cloud Functions",
  "C",
  "C++",
  "Git",
  "Github",
  "Gitlab",
  "Firebase",
  "Python",
  "Assembly Language",
] as const;
