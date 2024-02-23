import { LinkType } from "@/lib/link-type";
import { FooterLinks } from "@/types/app-links";
import { Logo } from "@/ui/design-system/logo/Logo";
import { Typography } from "@/ui/design-system/typography/Typography";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container } from "../container/Container";
import { DarkModeContext } from "../darkMode/DarkModeGlobal";
import { footerLinks } from "./app-links";
import { SocialNetworksButtons } from "./social-networks-buttons";

export const Footer = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  const currentYear = new Date().getFullYear();

  const footerNavigationList = footerLinks.map((colomnLinks) => (
    <FooterLink key={uuidv4()} data={colomnLinks} />
  ));

  return (
    <div className={clsx("bg-gray dark:bg-black", isDarkMode && "dark")}>
      <Container className="flex items-center justify-between pt-16 gap-7">
        <div className="flex flex-col items-center gap-1">
          <Typography variant="lead" theme="white" weight="medium">
            Portfolio
          </Typography>
          <Typography variant="body-base" theme="gray">
            Brondone Andriambololomanana
          </Typography>
          <Logo size="large" />
        </div>
        <div className="relative w-[300px] h-[200px]">
          <Image
            fill
            src={"/assets/images/emoji-g0bf5c5369_1920.png"}
            alt="image"
          />
        </div>
        <div className="flex gap-4">{footerNavigationList}</div>
      </Container>
      <Container className="pt-9 pb-6 space-y-11">
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between">
          <Typography variant="caption3" theme="gray">
            Copyright &copy; {`${currentYear} `} | Realized by{" "}
            <Link
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo(0, 0);
              }}
              className="hover:text-secondary dark:hover:text-dark-secondary"
            >
              Brondone
            </Link>
          </Typography>
          <div>
            <SocialNetworksButtons theme="gray" />
          </div>
        </div>
      </Container>
    </div>
  );
};

interface footerLinkProps {
  data: FooterLinks;
}

const FooterLink = ({ data }: footerLinkProps) => {
  const { isDarkMode } = useContext(DarkModeContext);

  const linkList = data.links.map((link) => (
    <div key={uuidv4()}>
      {link.type === LinkType.INTERNAL && (
        <Link
          href={link.baseUrl}
          onClick={link.action}
          className="hover:text-secondary dark:hover:text-dark-secondary"
        >
          {link.label}
        </Link>
      )}
      {link.type === LinkType.EXTERNAL && (
        <a
          href={link.baseUrl}
          target="_blank"
          className="hover:text-secondary dark:hover:text-dark-secondary"
        >
          {link.label}
        </a>
      )}
    </div>
  ));

  return (
    <div className={clsx("min-w-[190px]", isDarkMode && "dark")}>
      <Typography theme="white" variant="lead" weight="medium" className="pb-5">
        {data.label}
      </Typography>
      <Typography theme="gray" variant="body-base" className="space-y-4">
        {linkList}
      </Typography>
    </div>
  );
};
