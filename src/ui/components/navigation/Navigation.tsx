import { Button } from "@/ui/design-system/button/Button";
import { Logo } from "@/ui/design-system/logo/Logo";
import { Typography } from "@/ui/design-system/typography/Typography";
import { scrollToElement } from "@/utils/scrollToElement";
import clsx from "clsx";
import Link from "next/link";
import { useContext, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { Container } from "../container/Container";
import { DarkModeContext } from "../darkMode/DarkModeGlobal";
import { ToggleBtn } from "../darkMode/ToggleBtn";
import { ActiveLink } from "./active-link";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={clsx("py-1", isDarkMode && "dark")}>
      <Container className="flex items-center justify-between gap-7 fixed z-50 blur-nav border-2 border-gray-500 bg-white/60 dark:bg-gray/40  rounded-[200px] pr-1 pl-0.5 lg:pl-0.5 lg:pr-1 dark:border-gray-800">
        <Link href="/">
          <div className="flex items-center gap-2.5">
            <Logo size="small" />
            <div>
              <Typography
                variant="h4"
                component="h2"
                className="text-gray font-bold dark:text-white"
              >
                Welcome to my Portfolio
              </Typography>
            </div>
          </div>
        </Link>
        <div className="absolute left-1/2 -translate-x-[26%]">
          <Typography
            variant="body-base"
            component="div"
            className="flex items-center gap-10 dark:text-white"
          >
            <ActiveLink
              href="/"
              className="test flex justify-center items-center"
            >
              <AiOutlineHome className="relative bottom-0.5 right-1" />
              Home
            </ActiveLink>
            <ActiveLink href="/#about">About me</ActiveLink>
            <ActiveLink href="/#project">Project</ActiveLink>
          </Typography>
        </div>
        <div className="flex items-center justify-center gap-5">
          <ToggleBtn />
          <Button
            action={() => scrollToElement("#contact".split("#")[1])}
            className="rounded-[200px] text-caption1"
          >
            Contact
          </Button>
        </div>
      </Container>
    </div>
  );
};
