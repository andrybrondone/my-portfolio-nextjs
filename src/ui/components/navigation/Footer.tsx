import { LinkType } from "@/lib/link-type";
import { FooterLinks } from "@/types/app-links";
import { Logo } from "@/ui/design-system/logo/Logo";
import { Typography } from "@/ui/design-system/typography/Typography";
import Image from "next/image";
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
    <div className="bg-gray">
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
            Copyright &copy; {`${currentYear} `} | Réaliser par{" "}
            <Link href="/">Brondone</Link>
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
        <Link href={link.baseUrl}>{link.label}</Link>
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
      <Typography theme="white" variant="lead" weight="medium" className="pb-5">
        {data.label}
      </Typography>
      <Typography theme="gray" variant="body-base" className="space-y-4">
        {linkList}
      </Typography>
    </div>
  );
};
