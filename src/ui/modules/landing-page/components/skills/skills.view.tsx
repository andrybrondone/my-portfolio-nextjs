import { LinkType } from "@/lib/link-type";
import { Container } from "@/ui/components/container/Container";
import { Button } from "@/ui/design-system/button/Button";
import { Logo } from "@/ui/design-system/logo/Logo";
import { Typography } from "@/ui/design-system/typography/Typography";
import Image from "next/image";

export const SkillsView = () => {
  return (
    <Container className="flex justify-evenly items-center my-8">
      <div className="flex flex-col justify-center max-w-2xl space-y-5">
        <div className="flex items-center gap-2">
          <Logo size="very-small" />
          <Typography variant="caption2" component="span" weight="medium">
            Mon portfolio
          </Typography>
        </div>
        <Typography variant="h2" component="h2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
        <Typography
          variant="body-sm"
          component="p"
          theme="gray"
          className="max-w-lg"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          repellendus ullam a explicabo maxime aperiam quod impedit quasi quas
          alias?
        </Typography>
        <Button baseUrl="/#" linkType={LinkType.INTERNAL}>
          Lorem ipsum dolor
        </Button>
      </div>
      <div className="relative w-[300px] h-[200px]">
        <Image
          fill
          src={"/assets/images/emoji-g0bf5c5369_1920.png"}
          alt="image"
        />
      </div>
    </Container>
  );
};
