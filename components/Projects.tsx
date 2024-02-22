'use client'
import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useSectionInView } from "@/lib/hooks";


export default function Projects() {
  const { ref } = useSectionInView("Projects")
  
  
  return (
    <section id="projects" className="scroll-mt-28 mb-28" ref={ref}>
      <SectionHeading>My projects</SectionHeading>
      <div>
      {projectsData.map((project) => (
        <React.Fragment key={project.title}>
          <Project {...project} />
        </React.Fragment>
      ))}
      </div>
    </section>
  );
}


