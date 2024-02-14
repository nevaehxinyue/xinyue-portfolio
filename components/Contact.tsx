'use client'
import React from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion"
import { useSectionInView } from "@/lib/hooks";

const Contact = () => {
    const { ref } = useSectionInView("Contact", 0.3)
  return (
    <motion.section ref={ref} id="contact" className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
    initial={{
        opacity: 0
    }}
    whileInView={{
        opacity: 1
    }}
    transition={{
        duration: 1
    }}
    // viewport={{
    //     once: true
    // }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:xyue614@gmail.com">
          xyue614@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col ">
        <input type="email" placeholder="Your email" className="h-14 px-4 rounded-lg borderBlack"></input>
        <textarea placeholder="Your message" className="h-52 my-3 rounded-lg borderBlack p-4"/>
        <button className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem]
        bg-gray-900 text-white rounded-full outline-none transition-all hover:scale-110
        hover:bg-gray-950 active:scale-105" type="submit">Submit <FaPaperPlane className="text-xs opacity-70 transition-all
         group-hover:translate-x-1 group-hover:-translate-y-1"/></button>

      </form>
    </motion.section>
  );
};

export default Contact;
