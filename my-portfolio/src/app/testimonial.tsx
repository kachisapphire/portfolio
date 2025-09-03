"use client";

import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

export function Testimonial() {
  const [active, setActive] = React.useState(3);

  return (
    <section className="py-10 px-8 lg:py-20">
      <div className="container mx-auto">
        {/* Section Heading */}
        <div className="mb-8 lg:mb-12">
          <Typography variant="h2" color="blue-gray" className="mb-4">
            What Clients Say
          </Typography>
          <Typography
            variant="lead"
            className="px-0 font-normal !text-gray-500 lg:w-8/12"
          >
            Discover what clients have to say about their experiences working
            with me. My client&apos;s satisfaction is my greatest achievement!
          </Typography>
        </div>

        {/* Testimonial Card */}
        <Card color="transparent" shadow={false} className="py-8">
          <CardBody className="w-full lg:flex lg:gap-10 justify-between items-start">

            {/* Testimonial Text */}
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
              >
                Mobile App Development
              </Typography>
              <Typography className="mb-3 w-full lg:w-10/12 font-normal !text-gray-500">
                I had the pleasure of working with Lily on a critical web
                development project, and I can confidently say that their
                expertise and professionalism exceeded my expectations.
              </Typography>
              <Typography variant="h6" color="blue-gray" className="mb-0.5">
                Michael - Technical Manager
              </Typography>
              <Typography variant="small" className="font-normal mb-5 !text-gray-500">
                Marketing @ APPLE INC.
              </Typography>

              {/* Avatar Selector */}
              <div className="flex items-center gap-4 mt-4">
                {[1, 2, 3].map((id) => (
                  <React.Fragment key={id}>
                    <Avatar
                      variant="rounded"
                      src={`/image/avatar${id}.jpg`}
                      alt={`avatar${id}`}
                      size="sm"
                      className={`cursor-pointer ${active === id ? "opacity-100" : "opacity-50"}`}
                      onClick={() => setActive(id)}
                    />
                    {id !== 3 && <div className="w-[1px] h-9 bg-blue-gray-100" />}
                  </React.Fragment>
                ))}
              </div>
            </div>

            {/* Testimonial Image */}
            <div className="h-[21rem] rounded-lg w-full lg:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                alt="testimonial image"
                src={`/image/avatar${active}.jpg`}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>

          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
