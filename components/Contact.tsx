"use client";
import React, { useState } from "react";
import SectionHeading from "./SectionHeading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmailSchema } from "@/lib/validationSchema";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

type sendEmailFormData = z.infer<typeof sendEmailSchema>;
const Contact = () => {
  const { ref } = useSectionInView("Contact", 0.3);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<sendEmailFormData>({
    resolver: zodResolver(sendEmailSchema),
  });

  const onSubmit = async (data: sendEmailFormData) => {
    try {
      const response = await axios.post("/api/send", data);
      if (response.status === 201) {
        toast.success("Email sent successfully! Thanks for contacting me.");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center scroll-m-28"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:xyue614@gmail.com">
          xyue614@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form className="mt-10 flex flex-col dark:text-black " onSubmit={handleSubmit(onSubmit)}>
        <input
          type="email"
          placeholder="Your email"
          className="h-14 px-4 rounded-lg borderBlack 
          dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required
          maxLength={500}
          {...register("email")}
        ></input>
        {/* {errors.email && (
          <p className="text-red-700 ">{errors.email.message}</p>
        )} */}
        <textarea
          placeholder="Your message"
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          {...register("message")}
        />
        {/* {errors.message && (
          <p className="text-red-700 ">{errors.message.message}</p>
        )} */}

        <button
          className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem]
        bg-gray-900 text-white rounded-full outline-none transition-all hover:scale-110
        hover:bg-gray-950 active:scale-105 disabled:bg-opacity-75
         dark:bg-white dark:bg-opacity-10"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
          ) : (
            <>
              Submit
              <FaPaperPlane
                className="text-xs opacity-70 transition-all
         group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </>
          )}
        </button>
      </form>
    </motion.section>
  );
};

export default Contact;
