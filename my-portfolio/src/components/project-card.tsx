import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
}

export function ProjectCard({ img, title, desc }: ProjectCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardHeader floated={false} className="mx-0 mt-6 mb-6 h-48">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0">
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h4" className="mb-2">
            {title}
          </Typography>
        </a>
        <Typography
          variant="h6"
          className="mb-6 font-normal !text-gray-500">
          {desc}
        </Typography>
        <Button className="bg-[#808000] hover:bg-[#6B6B00] text-white" size="sm">
          see details
        </Button>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
