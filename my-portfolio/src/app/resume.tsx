"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: ChartBarIcon,
    children: "Backend Web Development",
  },
  {
    icon: PuzzlePieceIcon,
    children: "Junior Backend Engineer - Rvysion",
  }
];

export function Resume() {
  const handleViewAndDownload = () => {
    // Open in a new tab
    window.open("/documents/resume.pdf", "_blank");

    // Trigger a download
    const link = document.createElement("a");
    link.href = "/documents/resume.pdf";
    link.download = "resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="px-8 py-10">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        {/* Left Section */}
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            My Resume
          </Typography>
          <div className="h-1 w-60 bg-[#808000] mt-2"></div>
          <Typography
            variant="lead"
            className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            Highly skilled and detail-oriented Backend Engineer with 2+ years of experience in building scalable, secure, and efficient server-side applications. Proficient in designing APIs, managing databases, and optimizing system performance to deliver reliable and high-quality solutions.
          </Typography>

          {/* Button that does both */}
          <Button
            onClick={handleViewAndDownload}
            variant="filled"
            className="bg-[#808000] hover:bg-[#6B6B00] flex items-center gap-2"
          >
            View Resume
            <ArrowDownTrayIcon className="h-4 w-4 text-white" />
          </Button>
        </div>

        {/* Right Section */}
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
