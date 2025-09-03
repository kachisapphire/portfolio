import { Card, CardBody, Typography } from "@material-tailwind/react";

interface SkillCardProps {
  title: string;
  icon: React.ElementType;
  children: string | string[];
}

export function SkillCard({ icon: Icon, title, children }: SkillCardProps) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-20 w-20 place-items-center rounded-full bg-[#808000] p-2.5 text-white shadow">
          <Icon className="h-12 w-12" strokeWidth={2} />
        </div>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {title}
        </Typography>
        <div className="px-8 font-normal !text-gray-500">
          {Array.isArray(children) ? (
            <ul className="list-disc list-inside space-y-1 text-left">
              {children.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            <Typography className="text-lg !text-gray-500">{children}</Typography>
          )}
        </div>
      </CardBody>
    </Card>
  );
}

export default SkillCard;
