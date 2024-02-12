import { Typography } from "@/ui/design-system/typography/Typography";
import { motion, useScroll } from "framer-motion";
import { useRef } from "react";

export const ExperienceView = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-64">
      <Typography
        variant="h2"
        component="h2"
        theme="primary"
        className="text-center"
      >
        Experience
      </Typography>

      <div ref={ref} className="w-[75%] mx-auto relative "></div>

      <motion.div
        style={{ scaleY: scrollYProgress }}
        className="absolute left-9 top-0 w-[4px] h-full bg-gray origin-top"
      >
        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Lorem, ipsum."
            company="Lorem."
            companyLink="/#"
            time="Lorem-ipsum dolor."
            address="Lorem, ipsum dolor."
            work="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam saepe quis delectus libero atque suscipit!"
          />
          <Details
            position="Lorem, ipsum."
            company="Lorem."
            companyLink="/#"
            time="Lorem-ipsum dolor."
            address="Lorem, ipsum dolor."
            work="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam saepe quis delectus libero atque suscipit!"
          />
          <Details
            position="Lorem, ipsum."
            company="Lorem."
            companyLink="/#"
            time="Lorem-ipsum dolor."
            address="Lorem, ipsum dolor."
            work="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam saepe quis delectus libero atque suscipit!"
          />
          <Details
            position="Lorem, ipsum."
            company="Lorem."
            companyLink="/#"
            time="Lorem-ipsum dolor."
            address="Lorem, ipsum dolor."
            work="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam saepe quis delectus libero atque suscipit!"
          />
          <Details
            position="Lorem, ipsum."
            company="Lorem."
            companyLink="/#"
            time="Lorem-ipsum dolor."
            address="Lorem, ipsum dolor."
            work="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam saepe quis delectus libero atque suscipit!"
          />
          <Details
            position="Lorem, ipsum."
            company="Lorem."
            companyLink="/#"
            time="Lorem-ipsum dolor."
            address="Lorem, ipsum dolor."
            work="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam saepe quis delectus libero atque suscipit!"
          />
        </ul>
      </motion.div>
    </div>
  );
};

interface Props {
  position: string;
  company: string;
  companyLink: string;
  address: string;
  work: string;
  time: string;
}

const Details = ({
  position,
  company,
  companyLink,
  time,
  address,
  work,
}: Props) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />

      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">
          {position} &nbsp;
          <a
            href={companyLink}
            target="_blank"
            className=" text-secondary-600 capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className=" capitalize font-medium text-gray-800">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </motion.div>
    </li>
  );
};

interface PropsLiIcon {
  reference: any;
}

const LiIcon = ({ reference }: PropsLiIcon) => {
  const { scrollYProgress } = useScroll({
    target: reference,
    offset: ["center end", "center center"],
  });
  return (
    <figure className=" absolute left-0 stroke-gray">
      <svg className=" -rotate-90" width="75" height="75" viewBox="0 0 100 100">
        <circle
          cx="75"
          cy="50"
          r="20"
          className=" stroke-secondary-600 stroke-1 fill-none"
        />
        <motion.circle
          cx="75"
          cy="50"
          r="20"
          className=" stroke-[5px] fill-white"
          style={{ pathLength: scrollYProgress }}
        />
        <circle
          cx="75"
          cy="50"
          r="10"
          className=" animate-pulse stroke-1 fill-secondary-600"
        />
      </svg>
    </figure>
  );
};
