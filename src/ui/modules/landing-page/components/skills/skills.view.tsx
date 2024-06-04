import { LinkType } from "@/lib/link-type";
import { Container } from "@/ui/components/container/Container";
import { Button } from "@/ui/design-system/button/Button";
import { Logo } from "@/ui/design-system/logo/Logo";
import { TexteSection } from "@/ui/design-system/text-section/TexteSection";
import { Typography } from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

interface SkillsListInterface {
  imagePath: string;
  imageAlt: string;
  title: string;
}

const skillsData: SkillsListInterface[] = [
  {
    imagePath: "/assets/images/reactjs.png",
    imageAlt: "React JS icon",
    title: "React JS",
  },
  {
    imagePath: "/assets/images/nextjs.png",
    imageAlt: "Next JS icon",
    title: "Next JS",
  },
  {
    imagePath: "/assets/images/typescript.png",
    imageAlt: "TypeScript icon",
    title: "TypeScript",
  },
  {
    imagePath: "/assets/images/tailwind.png",
    imageAlt: "tailwind icon",
    title: "tailwind CSS",
  },
  {
    imagePath: "/assets/images/nodejs.png",
    imageAlt: "NodeJS icon",
    title: "NodeJS",
  },
  {
    imagePath: "/assets/images/mysql.png",
    imageAlt: "MySQL icon",
    title: "MySQL",
  },
];

export const SkillsView = () => {
  const skillsList = skillsData.map((skill) => (
    <div
      key={uuidv4()}
      className=" w-40 h-32 grid grid-rows-2 bg-gray-400/50 p-8 gap-2 rounded hover:bg-alert-warning/30 dark:hover:bg-gray-600/30 dark:bg-black animate"
    >
      <div className="flex justify-center items-center">
        <Image
          src={skill.imagePath}
          alt={skill.imageAlt}
          width={80}
          height={80}
        />
      </div>
      <Typography
        variant="caption1"
        component="p"
        className="mt-5 dark:text-primary-200 text-center"
      >
        {skill.title}
      </Typography>
    </div>
  ));
  return (
    <Container className=" my-8">
      <TexteSection title="My Skills" />
      <div className="flex justify-evenly items-center max-lg:flex-col max-lg:mt-6">
        <div className="flex flex-col justify-center lg:max-w-[40rem] space-y-5 max-lg:text-center">
          <div className="flex items-center gap-2 max-lg:justify-center">
            <Logo size="very-small" />
            <Typography
              variant="caption2"
              component="span"
              weight="medium"
              className="dark:text-primary-300"
            >
              Mon portfolio
            </Typography>
          </div>
          <Typography variant="h2" component="h2" className="dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Typography
            variant="body-sm"
            component="p"
            theme="gray"
            className="lg:max-w-lg dark:text-primary-300"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            repellendus ullam a explicabo maxime aperiam quod impedit quasi quas
            alias?
          </Typography>
          <div className="flex-center-lg">
            <Button baseUrl="/#contact" linkType={LinkType.INTERNAL}>
              Contact me
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 max-lg:grid-cols-4 max-md:grid-cols-2 gap-4 py-8 select-none">
          {skillsList}
        </div>
      </div>
    </Container>
  );
};
