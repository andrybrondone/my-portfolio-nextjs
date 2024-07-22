import { Typography } from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const educations = [
  {
    title: "Third Year of Professional License",
    year: "Ecole Nationale d’Informatique, Fianarantsoa | 2023 - 2024",
    description:
      "Currently, I am in my final year of the Professional License program, focusing on advanced web development techniques and technologies. This year, I am working on projects that involve real-world applications and advanced programming concepts.",
  },
  {
    title: "Second Year of Professional License",
    year: "Ecole Nationale d’Informatique, Fianarantsoa | 2022 - 2023",
    description:
      "In my second year, I deepened my knowledge of web development frameworks and back-end technologies. I completed several projects, including a comprehensive CRUD application and a dynamic web portfolio.",
  },
  {
    title: "First Year of Professional License",
    year: "Ecole Nationale d’Informatique, Fianarantsoa | 2021 - 2022",
    description:
      "My first year provided a solid foundation in programming and web technologies. I gained proficiency in HTML, CSS, and JavaScript, and started exploring more advanced topics like ReactJS and NodeJS.",
  },
];

export const Education = () => {
  return (
    <div className="flex flex-col gap-5 w-[600px] max-md:w-full ">
      <div className="absolute top-2/3 left-3/4 -translate-y-5 -translate-x-5 opacity-20">
        <Image
          src="/assets/images/education2.png"
          alt=""
          width={300}
          height={300}
          priority
        />
      </div>
      <div className="w-36 h-36 absolute top-2 left-5 opacity-20">
        <Image
          src="/assets/images/education2.png"
          alt=""
          height={144}
          width={144}
          priority
        />
      </div>
      {educations.map((value) => {
        return (
          <div key={uuidv4()} className="flex flex-col gap-2 z-20">
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
  );
};
