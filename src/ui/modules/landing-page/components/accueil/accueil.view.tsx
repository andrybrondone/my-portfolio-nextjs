import { Container } from "@/ui/components/container/Container";
import { Button } from "@/ui/design-system/button/Button";
import { Typography } from "@/ui/design-system/typography/Typography";
import Image from "next/image";

export const AccueilView = () => {
  return (
    <Container className="flex items-center justify-between pt-2 pb-10 overflow-hidden">
      <div className="w-[500px] h-[585px] rounded-se-[430px] rounded-es-full">
        <Image
          priority={true}
          src="/assets/svg/me.svg"
          alt="Ma photo"
          width={500}
          height={585}
          className="rounded-se-[430px] rounded-es-full"
        />
      </div>
      <div className="w-full max-w-2xl space-y-7 text-justify">
        <Typography
          variant="body-base"
          theme="gray"
          component="p"
          className="mx-w-xl"
        >
          Mon nom est
        </Typography>
        <Typography variant="h1" component="h1" className="mx-w-lg">
          Brondone ANDRIAMBOLOLOMANANA
        </Typography>
        <Typography
          variant="body-base"
          theme="gray"
          component="p"
          className="mx-w-xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, numquam
          ea nihil, amet nostrum, doloribus saepe reiciendis id repudiandae
          error veniam illo laudantium iste fuga voluptatibus itaque et ipsam
          enim.
        </Typography>
        <div className="space-x-5 pt-2.5">
          <Button baseUrl="/#">Commencer</Button>
          <Button baseUrl="/#" variant="secondary">
            En savoir plus
          </Button>
        </div>
      </div>
    </Container>
  );
};
