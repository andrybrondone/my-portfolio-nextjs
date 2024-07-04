import { ToggleNavContext } from "@/context/ToggleNavContext";
import { Button } from "@/ui/design-system/button/Button";
import { Logo } from "@/ui/design-system/logo/Logo";
import { Typography } from "@/ui/design-system/typography/Typography";
import { scrollToElement } from "@/utils/scrollToElement";
import Link from "next/link";
import { useContext } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { toast } from "sonner";
import { Container } from "../container/Container";
import { ToggleBtn } from "../darkMode/ToggleBtn";
import { ActiveLink } from "./active-link";
import LinkMobile from "./LinkMobile";

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = () => {
  const { isMobile, toggleNav } = useContext(ToggleNavContext);

  const clickMenuBurger = () => {
    const menutoggel = document.getElementById("menuBurger");
    menutoggel?.classList.toggle("active");
    toggleNav();
  };

  return (
    <div className="py-3">
      <Container className="flex-between h-14 max-sm:h-12 gap-7 fixed z-50 blur-nav border-2 border-gray-500 bg-white/60 dark:bg-gray/40  rounded-[200px] pr-1 pl-0.5 lg:pl-0.5 lg:pr-1 dark:border-gray-800">
        <Link href="/">
          <div className="flex items-center gap-2.5 max-sm:gap-1 max-lg:gap-2">
            <Logo size="small" className="max-sm:w-[45px] max-lg:w-[50px]" />
            <div
              onClick={() => {
                toast.success("tost");
              }}
            >
              <Typography
                variant="h4"
                component="h2"
                weight="bold"
                className="text-gray dark:text-white max-sm:mt-1"
              >
                Welcome to my Portfolio
              </Typography>
            </div>
          </div>
        </Link>
        <div className=" max-md:hidden">
          <Typography
            variant="body-base"
            component="div"
            className="flex items-center gap-10 dark:text-white"
          >
            <ActiveLink href="/" className="flex-center">
              <AiOutlineHome className="relative bottom-0.5 right-1" />
              Home
            </ActiveLink>
            <ActiveLink href="/#about">About me</ActiveLink>
            <ActiveLink href="/#project">Project</ActiveLink>
          </Typography>
        </div>
        <div className="flex-center gap-5">
          <ToggleBtn className="max-sm:hidden" />
          <Button
            action={() => scrollToElement("#contact".split("#")[1])}
            className="rounded-[200px] max-lg:hidden "
          >
            Contact
          </Button>
          <div
            id="menuBurger"
            className="toggle z-50 md:hidden max-md:mr-3"
            onClick={clickMenuBurger}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </Container>
      {isMobile && <LinkMobile />}
    </div>
  );
};
