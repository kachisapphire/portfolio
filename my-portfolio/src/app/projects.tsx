"use client";

import { ProjectCard } from "@/components";
import { Typography } from "@material-tailwind/react";

const PROJECTS = [
  {
    img: "/image/blog-1.svg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  },

];

export function Projects() {
  return (
    <section className="py-10 px-8">
      <div className="container mx-auto col-span-1">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          My Projects
        </Typography>
      </div>
      <div className="h-1 w-60 bg-[#808000] mt-2"></div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
