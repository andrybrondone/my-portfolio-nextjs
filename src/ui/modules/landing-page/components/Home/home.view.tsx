import { LinkType } from "@/lib/link-type";
import { Container } from "@/ui/components/container/Container";
import { Background } from "@/ui/design-system/background/Background";
import { Button } from "@/ui/design-system/button/Button";
import { Typography } from "@/ui/design-system/typography/Typography";
import Image from "next/image";
import { AiOutlineDownload } from "react-icons/ai";
import { RiArrowDropRightLine } from "react-icons/ri";

export const HomeView = () => {
  const aboutScroll = () => {
    const about = document.getElementById("about");
    about?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Background />
      <Container className="flex-center gap-10 max-lg:gap-5 max-md:gap-3 py-12 max-md:py-0 overflow-hidden mt-20 max-md:flex-wrap-reverse">
        <div className="min-w-[350px] min-h-[350px] max-md:w-90% max-md:my-7">
          <Image
            priority={true}
            src="/assets/images/me.jpg"
            alt="Ma photo"
            width={350}
            height={350}
            className="rounded-full dark:shadow-4xl max-md:rounded-t-full max-md:rounded-b"
          />
        </div>
        <div className="space-y-7 text-justify max-md:text-center">
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
            weight="bold"
          >
            Brondone <br /> ANDRIAMBOLOLOMANANA
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
          <div className="space-x-5 pt-2.5 flex items-center max-md:justify-center">
            <Button
              baseUrl="/projet-marketing.pdf"
              linkType={LinkType.EXTERNAL}
              icon={{ icon: AiOutlineDownload }}
              className="dark:shadow-3xl animate-bounce"
              variant="accent-rounded-full"
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
    </>
  );
};
