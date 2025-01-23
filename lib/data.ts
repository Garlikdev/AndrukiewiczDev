import klikImg from "@public/klik.webp"
import eloImg from "@public/elopokrowce_small.webp"
import kanbanImg from "@public/trollo_small.webp"
import coffeepandaImg from "@public/coffeepanda.webp"
import oldroadImg from "@public/oldroad.webp"
import kackyImg from "@public/kacky.webp"
import dnbonthebikeImg from "@public/dnbonthebike.webp"
import portfolioImg from "@public/portfolio.webp"
import maprequestbotImg from "@public/maprequestbot.webp"

export const links = [
  {
    name: "Home",
    hash: "/#home",
  },
  {
    name: "Stack",
    hash: "/#stack"
  },
  {
    name: "About",
    hash: "/#about",
  },
  {
    name: "Projects",
    hash: "/#projects",
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
    hash: "/#contact",
  },
] as const

export const projectsData = [
  {
    title: "Discord bot",
    time: "March 2024 - now",
    description: "Bot is gathering specific links from trackmania exchange so streamer can later copy all unplayed map ids.",
    tags: [
      "JavaScript",
      "CommandKit",
      "Discord.js",
      "PostgreSQL",
      "Sequelize",
      "Custom VPS",
    ],
    version: "Live",
    available: false,
    siteUrl: "",
    codeUrl: "https://github.com/Garlikdev/kacky-eventpage-frontend",
    imageUrl: maprequestbotImg,
  },{
    title: "Kacky.gg",
    time: "March 2024 - now",
    description: "Trackmania event site. Built by players for players. Group of amazing people spread worldwide creating amazing content for streamers and casual gamers.",
    tags: [
      "TypeScript",
      "React",
      "TailwindCSS",
      "Framer motion",
      "Python REST API",
      "Custom VPS",
      "CI/CD"
    ],
    version: "Live",
    available: true,
    siteUrl: "https://kacky.gg",
    codeUrl: "https://github.com/Garlikdev/kacky-eventpage-frontend",
    imageUrl: kackyImg,
  },
  {
    title: "Dnb On The Bike",
    time: "July 2024",
    description: "Fan page for Dom Whiting / DJ, Youtuber with tracklist/player functionality.",
    tags: ["Next.js", "React", "Tailwind", "Shadcn/UI", "React Player"],
    version: "Demo",
    available: true,
    siteUrl: "https://dnbonthebike.vercel.app/",
    codeUrl: "https://github.com/Garlikdev/dnbonthebike",
    imageUrl: dnbonthebikeImg,
  },
  {
    title: "Barber Shop",
    time: "January 2024",
    description: "Clean, original site for local Barber Shop.",
    tags: ["Next.js", "React", "Tailwind", "Framer motion"],
    version: "Demo",
    available: true,
    siteUrl: "https://oldroadbarbershop.vercel.app/",
    codeUrl: "https://github.com/Garlikdev/Barbershop",
    imageUrl: oldroadImg,
  },
  {
    title: "Café web design",
    time: "December 2023",
    description: "Beautiful, animated website idea for your Café.",
    tags: ["Next.js", "React", "Tailwind", "Framer motion"],
    version: "Demo",
    available: true,
    siteUrl: "https://coffeepanda.vercel.app/",
    codeUrl: "https://github.com/Garlikdev/CoffeePanda",
    imageUrl: coffeepandaImg,
  },
  {
    title: "Must have Todo App",
    time: "October 2023",
    description: "Come on. Everyone has to have To Do app in portfolio.",
    tags: ["Next.js", "React", "Tailwind", "Beautiful-dnd"],
    version: "Demo",
    available: true,
    siteUrl: "https://trollo-self.vercel.app/",
    codeUrl: "https://github.com/Garlikdev/todolist",
    imageUrl: kanbanImg,
  },
  {
    title: "This portfolio",
    time: "June 2023",
    description: "The website you are currently looking at. It's mine.",
    tags: ["Next.js", "React", "Tailwind", "Framer motion", "React Icons"],
    version: "Demo",
    available: true,
    siteUrl: "https://andrukiewiczdev.vercel.app",
    codeUrl: "https://github.com/Garlikdev/AndrukiewiczDev",
    imageUrl: portfolioImg,
  },
  {
    title: "Fullstack e-commerce",
    time: "March 2023 - June 2023",
    description:
      "An automated shipping system generates packages for every order and manages products, saving the client about 70% of the time compared to their previous system where packages had to be created manually.",
    tags: ["React", "Tailwind", "Node.js", "Express", "Hotpay", "PostgreSQL"],
    version: "Demo",
    available: true,
    siteUrl: "https://elopokrowce.pl/",
    codeUrl: "https://github.com/Garlikdev/EloReact",
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
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Stripe",
    ],
    version: "Demo",
    available: false,
    siteUrl: "",
    codeUrl: "https://github.com/Andrukiewicz/FreshCuisine",
    imageUrl: klikImg,
  },
] as const

export const skillsData = [
  { name: "TypeScript", description: "JavaScript but better", icon: "typescript" },
  { name: "React", description: "JavaScript Library", icon: "react" },
  { name: "Next.js", description: "React Framework", icon: "nextjs" },
  { name: "Tailwind", description: "CSS Framework", icon: "tailwind" },
  { name: "Node.js", description: "Runtime Environment", icon: "nodejs" },
  { name: "Express", description: "Web Framework", icon: "express" },
  { name: "Git", description: "Version Control", icon: "git" },
  { name: "MongoDB", description: "Database", icon: "mongodb" },
  { name: "PostgreSQL", description: "Database", icon: "postgresql" },
] as const;
