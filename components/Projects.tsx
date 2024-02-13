import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";


export default function Projects() {
  return (
    <div>
      <SectionHeading>My projects</SectionHeading>
      {projectsData.map((project) => (
        <React.Fragment key={project.title}>
          <Project {...project} />
        </React.Fragment>
      ))}
    </div>
  );
}


