"use client";

import Image from "next/image";
import ProfilePicture from "@public/profile.jpg";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload, HiArrowRight } from "react-icons/hi";
import { useSectionInView } from "@lib/hooks";
import { useActiveSectionContext } from "@context/active-section-context";
import { skillsData } from "@lib/data";

export default function Stack() {
  const { ref } = useSectionInView("Stack", 0.5);
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();

  return (
    <section
      id="stack"
      ref={ref}
      className="h-fit lg:h-screen items-center justify-center flex flex-col gap-4 sm:gap-8 lg:gap-8"
    >
      <div className="mt-24 lg:mt-0 flex items-center justify-center">
        <div className="max-w-full flex flex-col relative">
          <motion.div
            className="mb-4 mt-4 sm:mt-0 text-center gap-4 flex flex-col relative"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <div className="rounded-full absolute h-48 lg:h-72 w-72 lg:w-[35rem] bg-gradient-radial blur-xl -top-10 left-20 from-orange-500 opacity-10 to-neutral-900 -z-10"></div>
            <div className="rounded-full absolute h-48 w-96 bg-gradient-radial blur-xl -left-20 -top-20 from-green-500 opacity-10 rotate-12 to-neutral-900 -z-10"></div>
            <div className="text-xl sm:text-2xl lg:text-4xl font-bold leading-[1.2] [text-wrap:balance]">
              Current stack
            </div>
            <div className="[text-wrap:balance] leading-7 text-lg my-4">
              <p>
                I stay up to date with the latest technologies and enjoy
                exploring new tools and libraries. Here are some of the main
                technologies I use.💻
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.2,
        }}
        className="flex flex-col sm:flex-row items-center justify-center w-full gap-4"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center justify-between gap-4">
      {skillsData.map((skill) => (
        <div
          key={skill.name}
          className="flex flex-1 gap-5 p-2.5 rounded-xl items-center bg-gray-100 shadow-highlight text-gray-950 dark:bg-gray-900 dark:text-gray-50  transition-colors duration-200"
        >
          <div className="p-3 rounded-lg w-16 h-16">
            <Image
              width={128}
              height={128}
              alt={`${skill.name} icon`}
              src={`https://skillicons.dev/icons?i=${skill.icon}`}
            />
          </div>
          <div className="items-center justify-center">
            <h4 className="text-lg font-medium">{skill.name}</h4>
            <p className="text-dark-200/70 dark:text-white/70 text-sm">
              {skill.description}
            </p>
          </div>
        </div>
      ))}
    </div>
      </motion.div>
    </section>
  );
}
