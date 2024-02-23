import { Button } from "@/ui/design-system/button/Button";
import { Logo } from "@/ui/design-system/logo/Logo";
import { Typography } from "@/ui/design-system/typography/Typography";
import clsx from "clsx";
import Link from "next/link";
import { useContext } from "react";
import { RiHome3Line } from "react-icons/ri";
import { Container } from "../container/Container";
import { DarkModeContext } from "../darkMode/DarkModeGlobal";
import { ToggleBtn } from "../darkMode/ToggleBtn";
import { ActiveLink } from "./active-link";

interface Props {}

export const Navigation = ({}: Props) => {
  const { isDarkMode } = useContext(DarkModeContext);

  const contactScroll = () => {
    const contact = document.getElementById("contact");
    contact?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const projectScroll = () => {
    const project = document.getElementById("project");
    project?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const aboutScroll = () => {
    const about = document.getElementById("about");
    about?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className={clsx("py-3", isDarkMode && "dark")}>
      <Container className="flex items-center justify-between gap-7 border-2 border-gray-500  rounded-[200px] pr-1 pl-0.5 lg:pl-0.5 lg:pr-1 dark:border-gray-800">
        <Link href="/">
          <div className=" flex items-center gap-2.5">
            <Logo size="small" />
            <div>
              <Typography
                variant="h4"
                component="h2"
                className=" text-gray font-bold dark:text-white"
              >
                Welcom to my Portfolio
              </Typography>
            </div>
          </div>
        </Link>
        <div className="absolute left-[50%] -translate-x-[25.8%]">
          <Typography
            variant="body-base"
            component="div"
            className="flex items-center gap-10 dark:text-white"
          >
            <ActiveLink href="/" className="flex justify-center items-center">
              <RiHome3Line className="relative bottom-[1px] right-1" />
              Home
            </ActiveLink>
            <ActiveLink href="/about" onClick={aboutScroll}>
              About me
            </ActiveLink>
            <ActiveLink href="/project" onClick={projectScroll}>
              Project
            </ActiveLink>
          </Typography>
        </div>
        <div className="flex items-center justify-center gap-5">
          <ToggleBtn />
          <Button
            action={contactScroll}
            className="rounded-[200px] text-caption1"
          >
            Contact
          </Button>
        </div>
      </Container>
    </div>
  );
};
