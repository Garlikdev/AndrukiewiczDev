import klikImg from "@public/klik.png"
import eloImg from "@public/elopokrowce_small.png"
import kanbanImg from "@public/trollo_small.png"
import coffeepandaImg from "@public/coffeepanda.webp"

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

export const projectsData = [
  {
    title: "Café web design",
    time: "December 2023",
    description: "Beautiful, animated website idea for your Café.",
    tags: ["Next.js", "React", "Tailwind", "Framer motion"],
    available: true,
    siteUrl: "https://coffeepanda.vercel.app/",
    codeUrl: "https://github.com/Andrukiewicz/CoffeePanda",
    imageUrl: coffeepandaImg,
  },
  {
    title: "Must have Todo App",
    time: "October 2023",
    description: "Come on. Everyone has to have To Do app in portfolio.",
    tags: ["Next.js", "React", "Tailwind", "Beautiful-dnd"],
    available: true,
    siteUrl: "https://trollo-self.vercel.app/",
    codeUrl: "https://github.com/Andrukiewicz/todolist",
    imageUrl: kanbanImg,
  },
  {
    title: "Fullstack e-commerce",
    time: "March 2023 - June 2023",
    description:
      "An automated shipping system generates packages for every order and manages products, saving the client about 70% of the time compared to their previous system where packages had to be created manually.",
    tags: ["React", "Tailwind", "Node.js", "Express", "Hotpay", "PostgreSQL"],
    available: true,
    siteUrl: "https://elopokrowce.pl/",
    codeUrl: "",
    imageUrl: eloImg,
  },
  {
    title: "Fullstack e-commerce",
    time: "September 2021 - March 2023",
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
