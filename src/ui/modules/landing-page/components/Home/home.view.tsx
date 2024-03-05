import { LinkType } from "@/lib/link-type";
import { Container } from "@/ui/components/container/Container";
import { DarkModeContext } from "@/ui/components/darkMode/DarkModeGlobal";
import { Background } from "@/ui/design-system/background/Background";
import { Button } from "@/ui/design-system/button/Button";
import { Typography } from "@/ui/design-system/typography/Typography";
import clsx from "clsx";
import Image from "next/image";
import { useContext } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { RiArrowDropRightLine } from "react-icons/ri";

export const HomeView = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  const aboutScroll = () => {
    const about = document.getElementById("about");
    about?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={clsx(isDarkMode && "dark")}>
      <Background />
      <Container className="flex items-center justify-between pt-2 overflow-hidden mt-16">
        <div className="w-[500px] h-[585px]">
          <Image
            priority={true}
            src="/assets/images/me.jpg"
            alt="Ma photo"
            width={495}
            height={585}
            className="rounded-[100px] dark:shadow-4xl"
          />
        </div>
        <div className="w-full max-w-2xl space-y-7 text-justify">
          <Typography
            variant="body-base"
            theme="gray"
            component="p"
            className="mx-w-xl dark:text-primary-300"
          >
            My name is
          </Typography>
          <Typography
            variant="h1"
            component="h1"
            className="mx-w-lg dark:text-white"
          >
            Brondone ANDRIAMBOLOLOMANANA
          </Typography>
          <div>
            <Typography
              variant="body-base"
              theme="gray"
              component="p"
              className="mx-w-xl dark:text-primary-300"
            >
              I'm a
            </Typography>
            <Typography
              variant="h2"
              theme="secondary"
              component="h2"
              className="font-bold"
            >
              Web Developper
            </Typography>
          </div>
          <div className="space-x-5 pt-2.5">
            <Button
              baseUrl="/projet-marketing.pdf"
              linkType={LinkType.EXTERNAL}
              icon={{ icon: AiOutlineDownload }}
              className="dark:shadow-3xl animate-bounce"
            >
              CV
            </Button>
            <Button
              action={aboutScroll}
              icon={{ icon: RiArrowDropRightLine }}
              variant="secondary"
            >
              More
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
