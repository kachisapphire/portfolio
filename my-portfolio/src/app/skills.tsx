"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Backend Web Development",
    children: [
      "NodeJs/ ExpressJs",
      "NestJs",
      "CRUD Api",
      "C#"
    ]
  },
  {
    icon: FingerPrintIcon,
    title: "Database",
    children: [
      "POSTGRES",
      "MYSQL"
    ],
  },
  {
    icon: SwatchIcon,
    title: "Version Control",
    children: [
      "Github",
      "GIT"]
  },
];

export function Skills() {
  return (
    <section className="px-8 py-10">
      <div className="container col-span-1">
        <Typography variant="h2" color="blue-gray" className="mb-2">
          My Tech Stack
        </Typography>
      </div>
      <div className="h-1 w-60 bg-[#808000] mt-2"></div>
      <div className="container grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
