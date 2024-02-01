import { Button } from "@/ui/design-system/button/Button";
import { Logo } from "@/ui/design-system/logo/Logo";
import { Typography } from "@/ui/design-system/typography/Typography";
import Link from "next/link";
import { Container } from "../container/Container";
import { ActiveLink } from "./active-link";

interface Props {}

export const Navigation = ({}: Props) => {
  return (
    <div className="border-b-2 border-gray-500">
      <Container className=" flex items-center justify-between py-1.5 gap-7">
        <Link href="/">
          <div className=" flex items-center gap-2.5">
            <Logo size="small" />
            <div className=" flex flex-col">
              <div className="text-gray font-extrabold text-[24px]">
                Mon Portfolio
              </div>
              <Typography variant="caption4" theme="gray" component="span">
                Lorem ipsum dolor sit amet consectetur.
              </Typography>
            </div>
          </div>
        </Link>
        <div className=" flex items-center gap-7 pb-3">
          <Typography
            variant="caption3"
            component="div"
            className="flex items-center gap-7"
          >
            <ActiveLink href="/design-system">Desing System</ActiveLink>
            <ActiveLink href="/">Accueil</ActiveLink>
            <ActiveLink href="/a-propos">A propos</ActiveLink>
            <ActiveLink href="/competence">Compétence</ActiveLink>
            <ActiveLink href="/projet">Projet</ActiveLink>
          </Typography>
          <div className="flex items-center gap-2">
            <Button size="small">Contact</Button>
          </div>
        </div>
      </Container>
    </div>
  );
};
