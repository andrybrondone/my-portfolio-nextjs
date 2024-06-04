import { LinkType } from "@/lib/link-type";
import { Container } from "@/ui/components/container/Container";
import { SocialNetworksButtons } from "@/ui/components/navigation/social-networks-buttons";
import { Button } from "@/ui/design-system/button/Button";
import { TexteSection } from "@/ui/design-system/text-section/TexteSection";
import { Typography } from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import { RiGithubFill } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

interface ProjectListInterface {
  imagePath: string;
  imageAlt: string;
  title: string;
  description: string;
}

const projectData: ProjectListInterface[] = [
  {
    imagePath: "/assets/images/achievement-5597527_640.png",
    imageAlt: "illustration",
    title: "[ 2023-2024 ] - L3",
    description:
      "Je suis actuelement en troisème année de licence professionnel à L'ENI Fianarantsoa",
  },
  {
    imagePath: "/assets/images/gears-1059756_640.png",
    imageAlt: "illustration",
    title: "[ 2022-2023 ] - L2",
    description:
      "J'ai realisé un stage Chez l'ONG Nididae Antananarivo dans le cadre de la pratique",
  },
  {
    imagePath: "/assets/images/tool-145375_640.png",
    imageAlt: "illustration",
    title: "[ 2021-2022 ] - L1",
    description:
      "Premier pas dans l'étude superieur et dans le monde de l'informatique à L'ENI",
  },
  {
    imagePath: "/assets/images/write-33360_640.png",
    imageAlt: "illustration",
    title: "[ 2020-2021 ] - Terminal D",
    description:
      "Obtantion de mon baccalaureat serie D avec montien Bien ! avec montien Bien !",
  },
];

export const ProjectView = () => {
  const projectList = projectData.map((about) => (
    <div
      key={uuidv4()}
      className="flex flex-col items-center justify-center bg-white rounded p-7 shadow animate hover:scale-[1.025] hover:shadow-2xl dark:bg-gray-800 dark:hover:shadow dark:hover:shadow-dark-secondary"
    >
      <div className="relative w-[130px] h-[130px] rounded-full mb-10 overflow-hidden">
        <Image
          fill
          src={about.imagePath}
          alt={about.imageAlt}
          className="object-scale-down blur-2xl"
        />
        <Image
          fill
          src={about.imagePath}
          alt={about.imageAlt}
          className="object-scale-down"
        />
      </div>
      <Typography
        variant="body-sm"
        component="h3"
        weight="medium"
        className=" font-bold text-center mb-2.5 text-secondary border-b-2 border-dotted pb-1.5"
      >
        {about.title}
      </Typography>
      <Typography
        variant="caption2"
        component="p"
        theme="gray"
        className="text-center mb-2.5 dark:text-primary-300"
      >
        {about.description}
      </Typography>
    </div>
  ));

  return (
    <div className="bg-gray-300 mb-10 pt-10 dark:bg-dark-gray" id="project">
      <TexteSection title="My Recent Project" />
      <Container className="grid grid-cols-12 gap-10 max-sm:gap-14 pt-8 pb-24 max-lg:grid-cols-none max-lg:flex max-lg:flex-col-reverse">
        <div className="col-span-7 grid grid-cols-2 gap-5 max-lg:mx-[5%] max-md:mx-[1%] max-sm:gap-4 max-sm:grid-cols-none max-sm:mx-4">
          {projectList}
        </div>
        <div className="flex flex-col justify-between col-span-5 gap-10 max-lg:text-center">
          <div>
            <Typography
              variant="h2"
              component="h2"
              weight="bold"
              className="mb-5 word-space dark:text-dark-primary"
            >
              The projects already completed
            </Typography>
            <Typography
              variant="body-lg"
              theme="gray"
              component="p"
              className="mb-10 dark:text-primary-300"
            >
              Le code source de ce portfolio est aussi disponible sur mon GitHub
              s'il vous intéresse .
            </Typography>
            <div className="flex-center-lg">
              <Button
                variant="secondary"
                baseUrl="https://github.com/andrybrondone"
                linkType={LinkType.EXTERNAL}
                icon={{ icon: RiGithubFill }}
              >
                Voir le code source
              </Button>
            </div>
          </div>
          <div>
            <Typography
              variant="caption3"
              theme="gray"
              component="div"
              className="mb-4 dark:text-primary-300"
            >
              My social networks
            </Typography>

            <SocialNetworksButtons className="flex-center-lg" />
          </div>
        </div>
      </Container>
    </div>
  );
};
