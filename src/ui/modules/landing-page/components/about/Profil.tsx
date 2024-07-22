import { Typography } from "@/ui/design-system/typography/Typography";
import Image from "next/image";

export const Profil = () => {
  return (
    <div className="flex items-center justify-center gap-3 max-[830px]:flex-col custom-bg">
      <div className="relative w-[200px] h-[200px] max-sm:ml-[50%] max-sm:-translate-x-1/2">
        <div className="absolute -inset-1 border-4 rounded-full dark:shadow-5xl border-dashed border-secondary animate-spin-slow"></div>
        <Image
          src="/assets/images/me2.jpg"
          alt=""
          width={200}
          height={200}
          priority
          className="rounded-full"
        />
      </div>
      <div className="w-[520px] max-sm:w-full dark:bg-gray/50 bg-gray-300/50 p-10 max-sm:px-3">
        <Typography variant="body-lg" component="p">
          I am currently a third-year student pursuing a Bachelor's degree in
          Professional License at ENI Fianarantsoa. I have a strong passion for
          web application development, and my ability to quickly adapt to new
          technologies allows me to stay ahead in this fast-evolving field.
        </Typography>
        <Typography variant="body-lg" component="p">
          My goal is to continuously learn and grow as a developer, and I am
          eager to bring my passion for web development and my technical skills
          to new challenges. I am confident in my ability to deliver
          high-quality solutions and am excited about the opportunity to work
          with innovative teams.
        </Typography>
      </div>
    </div>
  );
};
