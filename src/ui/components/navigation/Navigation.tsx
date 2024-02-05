import { Button } from "@/ui/design-system/button/Button";
import { Logo } from "@/ui/design-system/logo/Logo";
import { Typography } from "@/ui/design-system/typography/Typography";
import Link from "next/link";
import { Container } from "../container/Container";
import { ActiveLink } from "./active-link";

interface Props {}

export const Navigation = ({}: Props) => {
  const scrollPositions = {
    home: 0,
    about: 750,
  };
  return (
    <div className="border-b-2 border-gray-500">
      <Container className=" flex items-center justify-between py-3 gap-7">
        <Link href="/">
          <div className=" flex items-center gap-2.5">
            <Logo size="small" />
            <div className=" flex flex-col">
              <div className="text-gray font-extrabold text-[32px]">
                Mon Portfolio
              </div>
              <Typography variant="caption3" theme="gray" component="span">
                Lorem ipsum dolor sit amet consectetur.
              </Typography>
            </div>
          </div>
        </Link>
        <div className=" flex items-center gap-7">
          <Typography
            variant="caption2"
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
