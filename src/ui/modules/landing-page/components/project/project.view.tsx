import { LinkType } from "@/lib/link-type";
import { Container } from "@/ui/components/container/Container";
import { SocialNetworksButtons } from "@/ui/components/navigation/social-networks-buttons";
import { Button } from "@/ui/design-system/button/Button";
import { TexteSection } from "@/ui/design-system/text-section/TexteSection";
import { Typography } from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import { RiGithubFill, RiLink } from "react-icons/ri";
import { v4 as uuidv4 } from "uuid";

interface ProjectListInterface {
  imagePath: string;
  imageAlt: string;
  title: string;
  description: string;
  appUrl: string;
  gitUrl: string;
}

const projectData: ProjectListInterface[] = [
  {
    imagePath: "/assets/images/note.png",
    imageAlt: "illustration",
    title: "University Grade Management",
    description:
      "A university grade management app for adding grades, and generating reports.",
    appUrl: "https://gestion-note-univ.web.app/",
    gitUrl: "https://github.com/andrybrondone/gestion_note_univ-front",
  },
  {
    imagePath: "/assets/svg/1.svg",
    imageAlt: "illustration",
    title: "Simple CRUD Application",
    description:
      "A basic CRUD application for creating, reading, updating, and deleting records.",
    appUrl: "https://crud-location.web.app/",
    gitUrl: "https://github.com/andrybrondone/CRUD-react-express-front",
  },
  {
    imagePath: "/assets/images/tic-tac-toe.png",
    imageAlt: "illustration",
    title: "Tic-Tac-Toe Game",
    description:
      "A classic Tic-Tac-Toe game built with ReactJS, featuring player vs. player mode.",
    appUrl: "https://tic-tac-toe-gm.web.app/",
    gitUrl: "https://github.com/andrybrondone/tic-tac-toe-game",
  },
];

export const ProjectView = () => {
  const projectList = projectData.map((about) => (
    <div
      key={uuidv4()}
      className="relative bg-white rounded shadow animate hover:scale-[1.025] hover:shadow-2xl dark:bg-gray-800 dark:hover:shadow dark:hover:shadow-dark-secondary"
    >
      <div className="px-7 pt-5 pb-14 flex flex-col items-center justify-center">
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
      <Typography
        variant="h1"
        className="flex items-center justify-between absolute bottom-0 rounded-b px-7 py-1 w-full bg-secondary/30 dark:bg-secondary/40"
      >
        <a href={about.appUrl} target="_blank">
          <RiLink />
        </a>
        <a href={about.gitUrl} target="_blank">
          <RiGithubFill />
        </a>
      </Typography>
    </div>
  ));

  return (
    <div className="bg-gray-300 mb-10 pt-10 dark:bg-dark-gray" id="project">
      <TexteSection title="My Recent Project" />
      <Container className="grid grid-cols-12 gap-10 max-sm:gap-14 pt-8 pb-24 max-lg:grid-cols-none max-lg:flex max-lg:flex-col">
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
              The source code of this portfolio is also available on my GitHub
              if you are interested .
            </Typography>
            <div className="flex-center-lg">
              <Button
                variant="secondary"
                baseUrl="https://github.com/andrybrondone/my-portfolio-nextjs"
                linkType={LinkType.EXTERNAL}
                icon={{ icon: RiGithubFill }}
              >
                View the source code
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
