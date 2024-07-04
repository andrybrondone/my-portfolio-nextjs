import { Typography } from "@/ui/design-system/typography/Typography";
import Image from "next/image";

export const Profil = () => {
  return (
    <div className="flex-col items-center justify-center px-5">
      <div className="pt-10 w-[200px] h-[200px]">
        <Image
          src="/assets/images/me2.jpg"
          alt=""
          width={200}
          height={200}
          className="rounded-full"
        />
      </div>
      <Typography
        variant="body-lg"
        component="p"
        className="text-center mt-10 py-5"
      >
        Profil
      </Typography>
    </div>
  );
};
