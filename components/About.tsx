'use client'
import { motion} from "framer-motion"
import SectionHeading from "./SectionHeading";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useEffect } from "react";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
 const { ref } = useSectionInView("About")
  
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{ opacity: 0, y: 100}}
    animate={{ opacity: 1, y: 0}}
    transition={{ delay: 0.175}}
    id="about"
    ref={ref}>
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in Psychology, I decided to pursue my passion for programming. I have learned a lot about
        <strong> full-stack web development</strong> during my current master program. My favorite part of programming is <strong>the problem-solving aspect</strong>. 
        I love the feeling of building a solution to a problem step by step, during which I always witness how my knonwlege is expanded. 
        My core tech stack is <strong>React, Next.js, Node.js, and MySQL.</strong> I'm also proficient with <strong>TypeScript and Prisma</strong>. I consider work as
        <strong> a blend of contribution and continuous learning</strong>. I'm always looking to learn new technologies. I'm currently looking
        for <strong>a full-time position</strong> as a <strong>software engineer</strong>. 
      </p>
      <p>
        When I’m not in front of a computer screen, I’m usually reading
        books, hiking, watching movies, playing video games (PS), and cooking. I also enjoy learning new things. I'm curently learning how to make cocktails.
      </p>
    </motion.section>
  );
};

export default About;
