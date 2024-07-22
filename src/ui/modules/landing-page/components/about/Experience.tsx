import { Typography } from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const educations = [
  {
    title: "Project Developer – University Projects",
    year: "Ecole Nationale d’Informatique, Fianarantsoa | 2021 - 2024",
    description:
      "Throughout my studies, I participated in several university projects, including developing a note management application using ReactJS and ExpressJS, and collaborating with peers to deliver high-quality, functional projects within deadlines.",
  },
  {
    title: "Internship at Nitidæ NGO",
    year: "Antananarivo, Madagascar | September 2023 - November 2023",
    description:
      "During my internship at Nitidæ, I contributed to various projects aimed at enhancing the NGO's digital presence. My responsibilities included deploying a web application using Docker.",
  },
];

export const Experience = () => {
  return (
    <div className="w-[600px] max-md:w-full">
      <div className="absolute top-1/2 left-5 -translate-y-1/2 opacity-20">
        <Image
          src="/assets/images/experience.png"
          alt=""
          height={500}
          width={500}
          priority
        />
      </div>
      <div className="flex flex-col gap-5 dark:bg-gray/50 bg-gray-300/50 p-10 max-sm:px-3">
        {educations.map((value) => {
          return (
            <div key={uuidv4()} className="flex flex-col gap-2">
              <Typography
                variant="lead"
                component="h5"
                theme="secondary"
                weight="bold"
              >
                {value.title}
              </Typography>
              <Typography
                variant="body-sm"
                theme="gray"
                className="dark:text-gray-600"
                component="p"
              >
                {value.year}
              </Typography>
              <Typography variant="caption1" component="p">
                {value.description}
              </Typography>
            </div>
          );
        })}
      </div>
    </div>
  );
};
