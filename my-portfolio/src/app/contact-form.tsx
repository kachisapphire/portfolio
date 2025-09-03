"use client";

import { Typography, IconButton } from "@material-tailwind/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export function ContactForm() {
  return (
    <section className="px-8 py-10">
      <div className="container mx-auto col-span-1">
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Meet Me
        </Typography>
        <div className="h-1 w-40 bg-[#808000] mt-2"></div>
        <Typography
          variant="lead"
          className="w-5/12 !text-gray-500 mb-4 mt-2"
        >
          Let&apos;s connect! You can reach me on social media or directly by email.
        </Typography>

        {/* Social Links */}
        <div className="flex justify-center gap-8">
          {/* Twitter */}
          <a
            href="https://twitter.com/esthermichael03"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton variant="text" color="blue">
              <i className="fa-brands fa-twitter text-3xl" />
            </IconButton>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/kachisapphire"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton variant="text" color="gray">
              <i className="fa-brands fa-github text-3xl" />
            </IconButton>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/kachisaffire"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton variant="text" color="pink">
              <i className="fa-brands fa-instagram text-3xl" />
            </IconButton>
          </a>

          {/* Email */}
          <a href="mailto:mychaelesther99@gmail.com">
            <IconButton variant="text" color="text-gray-900">
              <EnvelopeIcon className="h-7 w-7" />
            </IconButton>
          </a>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
