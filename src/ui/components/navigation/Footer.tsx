import { LinkType } from "@/lib/link-type";
import { FooterLinks } from "@/types/app-links";
import { Logo } from "@/ui/design-system/logo/Logo";
import { Typography } from "@/ui/design-system/typography/Typography";
import clsx from "clsx";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import { Container } from "../container/Container";
import { footerLinks } from "./app-links";
import { SocialNetworksButtons } from "./social-networks-buttons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigationList = footerLinks.map((colomnLinks) => (
    <FooterLink key={uuidv4()} data={colomnLinks} />
  ));

  return (
    <div className={clsx("bg-gray dark:bg-black")}>
      <Container className="flex items-center justify-between pt-16 gap-7 max-sm:flex-col">
        <div className="flex flex-col items-center gap-1">
          <Typography variant="lead" theme="white">
            Portfolio
          </Typography>
          <Typography variant="body-base" theme="gray">
            Brondone Andriambololomanana
          </Typography>
          <Logo size="large" />
        </div>
        <div className="flex justify-center items-center gap-24 max-md:gap-14">
          {footerNavigationList}
        </div>
      </Container>
      <Container className="pt-9 pb-6 space-y-8 max-sm:space-y-5">
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between flex-wrap gap-5">
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
              Me
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
    <div className="">
      <Typography theme="white" variant="lead" className="pb-5">
        {data.label}
      </Typography>
      <Typography
        theme="gray"
        variant="body-base"
        className="space-y-4 max-sm:text-center"
      >
        {linkList}
      </Typography>
    </div>
  );
};
