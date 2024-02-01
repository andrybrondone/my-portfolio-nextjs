import { LinkType } from "@/lib/link-type";
import { FooterLinks } from "@/types/app-links";
import { Logo } from "@/ui/design-system/logo/Logo";
import { Typography } from "@/ui/design-system/typography/Typography";
import { v4 as uuidv4 } from "uuid";
import { Container } from "../container/Container";
import { ActiveLink } from "./active-link";
import { footerLinks } from "./app-links";
import { SocialNetworksButtons } from "./social-networks-buttons";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerNavigationList = footerLinks.map((colomnLinks) => (
    <FooterLink key={uuidv4()} data={colomnLinks} />
  ));

  return (
    <div className="bg-gray">
      <Container className="flex items-center justify-between">
        <div className="flex flex-col items-center gap-1 pt-16">
          <Typography variant="caption1" theme="white" weight="medium">
            Formation gratuites
          </Typography>
          <Typography variant="caption3" theme="gray">
            Abonne-toi à la chaine
          </Typography>
          <Logo size="large" />
        </div>
        <div className="flex gap-7 pt-8">{footerNavigationList}</div>
      </Container>
      <Container className="pt-9 pb-6 space-y-11">
        <hr className="text-gray-800" />
        <div className="flex items-center justify-between">
          <Typography variant="caption4" theme="gray">
            Copyright &copy; {`${currentYear} `} | Propulsed by Brondone
          </Typography>
          <div className="">
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
        <ActiveLink href={link.baseUrl}>{link.label}</ActiveLink>
      )}
      {link.type === LinkType.EXTERNAL && (
        <a href={link.baseUrl} target="_blank">
          {link.label}
        </a>
      )}
    </div>
  ));

  return (
    <div className="min-w-[190px]">
      <Typography
        theme="white"
        variant="caption2"
        weight="medium"
        className="pb-5"
      >
        {data.label}
      </Typography>
      <Typography theme="gray" variant="caption3" className="space-y-4">
        {linkList}
      </Typography>
    </div>
  );
};
