"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8 ">
      <div className="h-2 w-full bg-[#808000] mb-10"></div>
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-7xl !leading-tight text-4xl"
          >
            Hi there, I&apos;m Michael Esther, a creative backend engineer.<br />
          </Typography>
          <Typography
            variant="lead"
            className="text-2xl font-normal mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            Here,
            you&apos;ll get a glimpse of my journey in the world of web
            development, where creativity meets functionality.
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/IMG_E0997.JPG"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
