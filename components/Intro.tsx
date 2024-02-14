"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useEffect } from "react";
import { useSectionInView } from "@/lib/hooks";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  
  return (
    <section ref={ref} id="home" className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/Image.jpg"
              alt="portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full bg-white object-contain border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>

        <motion.p className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100}}
        animate={{ opacity: 1, y: 0}}>
          <strong>Hey, I'm Xin.</strong>I'm a final-year master
          student at <strong>University of Auckland</strong> studying
          Information Technology. I have some experience developing and desiging <i>sites and apps</i> . My focus is <u>React(Next.js)</u>.
        </motion.p>

        <motion.div className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
            delay: 0.1
        }}>

        <Link href='#contact' className="group bg-gray-900 text-white px-7 py-3 flex items-center
        gap-2 rounded-full outline-none hover:bg-gray-950 hover:scale-110 active:scale-105
         transition"
         onClick={() => {
          setActiveSection("Contact");
          setTimeOfLastClick(Date.now());
         } }>Contact me here <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" /></Link>

        <a className=" bg-white px-7 py-3 flex items-center
        gap-2 rounded-full outline-none hover:scale-110 active:scale-105
        transition cursor-pointer border border-black/10" href="/CV.pdf" download>Download CV <HiDownload className="opacity-60 group-hover:translate-y-1 transition" /></a>

        <a className="bg-white p-4 text-gray-700 flex items-center
        gap-2 rounded-full outline-none hover:scale-[1.15] hover:text-gray-950
        transition cursor-pointer border border-black/10" href="https://www.linkedin.com/in/xiny99/" target="_blank"><BsLinkedin /></a>

        <a className="bg-white p-4 text-gray-700 flex items-center
        gap-2 text-[1.3rem] rounded-full outline-none hover:scale-[1.15] hover:text-gray-950 active:scale-105
        transition cursor-pointer border border-black/10" href="https://github.com/nevaehxinyue" target="_blank"><FaGithubSquare /></a>
        </motion.div>
      </div>
    </section>
  );
};

export default Intro;
