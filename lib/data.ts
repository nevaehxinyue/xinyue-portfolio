import fixflow from '@/public/fixflow.png'
import gamestellar from '@/public/gamestellar.png'
import portfolio from "@/public/portfolio.png"
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
     {
        name: "Home",
        hash: "#home",
     },
     {
        name: "About",
        hash: "#about",
     },
     
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

export const projectsData = [
   {
     title: "Fix Flow",
     description:
       "Web app for project and issue management. Manage your projects and issues in one concise and intuitive interface. Get insights into your issue tracking progress.",
     tags: ["React", "Next.js", "NextAuth.js", "MySQL", "Prisma", "Tailwind", "Vercel" ],
     imageUrl: fixflow,
     projectUrl: "https://www.myfixflow.com/"
   },
   {
     title: "GameStellar",
     description:
       "A web game discovery app for easily searching for games by genre and platform. Explore top games of recent years and find popular and interesting games to play.",
     tags: ["React", "TypeScript", "React Query", "Zustand", "React Router", "Chakra UI" ],
     imageUrl: gamestellar,
     projectUrl: "https://gamestellar.vercel.app/"
   },
   {
     title: "Personal Portfolio",
     description:
       "My first portfolio site.",
     tags: ["React", "Next.js", "TypeScript", "Tailwind", "Resend", "Framer"],
     imageUrl: portfolio,
     projectUrl:"https://www.xinyueportfolio.com/"
   },
 ] as const;

 export const skillsData = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "Git",
  "HTML",
  "CSS",
  "Tailwind",
  "Prisma",
  "MySQL",
  "Java",
  "Python",
  "Framer Motion",
 
] as const;


export const experiencesData = [
  {
    title: "University of Auckland",
    location: "Auckland, New Zealand",
    description:
      "Focused on modern web technologies, Java, and Python. ",
    icon: React.createElement(LuGraduationCap),
    date: "2023-present",
  },
  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2019 - 2021",
  // },
  // {
  //   title: "Full-Stack Developer",
  //   location: "Houston, TX",
  //   description:
  //     "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
  //   icon: React.createElement(FaReact),
  //   date: "2021 - present",
  // },
] as const;