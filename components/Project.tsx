"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import { MdOutlineArrowOutward } from "react-icons/md";

type ProjectProps = (typeof projectsData)[number];

const Project = ({ title, description, tags, imageUrl, projectUrl }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      className="group mb-3 sm:mb-8 last:mb-0 "
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: scrollYProgress,
      }}
    >
      <section
        className="bg-gray-100 max-w-[48rem] border border-black/5 overflow-hidden
        sm:pr-8 relative sm:h-[20rem] sm:group-even:pl-8 hover:bg-gray-200 transition rounded-lg
         dark:bg-white/10 dark:hover:bg-white/20 dark:text-white"
      >
        <div
          className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full
        sm:group-even:ml-[20rem]"
        >
          <div className="group flex gap-2 items-center">
            <a href={projectUrl} target="_blank">
              <h3 className="text-2xl font-semibold group-hover:text-gray-500">{title}</h3>
            </a >
            <MdOutlineArrowOutward className="group-hover:scale-115 group-hover:translate-x-1 group-hover:-translate-y-1 " />
          </div>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                key={index}
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] capitalize text-white rounded-full dark:text-white/70"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="hidden sm:block absolute top-24 scale-[1.3] -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
          group-even:right-[initial] group-even:-left-44
           transition group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.3]
           group-even:group-hover:translate-x-3 group-even:group-hover:-translate-y-3 group-even:group-hover:rotate-2
           "
        />
        {/* className="hidden sm:block absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
          group-odd:right-[initial] group-odd:-left-40
           transition group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 group-hover:scale-[1.05]
           group-odd:group-hover:translate-x-3 group-odd:group-hover:translate-y-3 group-odd:group-hover:rotate-2
           " */}
      </section>
    </motion.div>
  );
};

export default Project;
