import React from "react"
import { CgWorkAlt } from "react-icons/cg"
import { FaReact } from "react-icons/fa"
import { LuGraduationCap } from "react-icons/lu"
import klikImg from "@public/klik.png"
import eloImg from "@public/elopokrowce_small.png"
import kanbanImg from "@public/trollo_small.png"

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
  // {
  //   name: "Skills",
  //   hash: "#skills",
  // },
  // {
  //   name: "Experience",
  //   hash: "#experience",
  // },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const

export const projectsData = [
  {
    title: "Must have Todo App",
    time: "October 2023",
    description: "Come on. Everyone has to have To Do app in portfolio.",
    tags: ["React", "Next.js", "Tailwind", "Beautiful-dnd"],
    available: true,
    siteUrl: "https://trollo-self.vercel.app/",
    codeUrl: "https://github.com/Andrukiewicz/todolist",
    imageUrl: kanbanImg,
  },
  {
    title: "E-commerce",
    time: "June 2023",
    description:
      "An automated shipping system generates packages for every order and manages products, saving the client about 70% of the time compared to their previous system where packages had to be created manually.",
    tags: ["React", "Tailwind", "Node.js", "Express", "Hotpay", "PostgreSQL"],
    available: true,
    siteUrl: "https://elopokrowce.pl/",
    codeUrl: "",
    imageUrl: eloImg,
  },
  {
    title: "E-commerce",
    time: "March 2023",
    description:
      "Precise price, weight and amount calculation panel per meal sets, enabling efficient wholesaler orders at the end of the week, reducing the need for user intervention down to one click.",
    tags: [
      "React",
      "Redux",
      "Tailwind",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
    ],
    available: false,
    siteUrl: "https://3klik.pl/",
    codeUrl: "",
    imageUrl: klikImg,
  },
] as const

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const
