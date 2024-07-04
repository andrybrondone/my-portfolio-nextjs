import { Container } from "@/ui/components/container/Container";
import { TexteSection } from "@/ui/design-system/text-section/TexteSection";
import { Typography } from "@/ui/design-system/typography/Typography";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { AnimationNumbersConatiner } from "../animation-numbers-container/AnimationNumbersContainer";
import OngletAbout from "./ongletAbout";

interface NumberDataListInterface {
  value: number;
  delay: number;
  description: string;
}

const numberData: NumberDataListInterface[] = [
  {
    value: 4,
    delay: 0,
    description: "Project Completed",
  },
  {
    value: 2,
    delay: 0.3,
    description: "Experiences",
  },
  {
    value: 6,
    delay: 0.15,
    description: "Web technologie",
  },
];

export const AboutView = () => {
  const numberLst = numberData.map((number) => (
    <div key={uuidv4()}>
      <motion.div
        className="text-center py-9 relative w-56 shadow-lg rounded dark:shadow dark:shadow-gray-800/50"
        initial={{ top: 0 }}
        whileInView={{ top: -128 }}
        transition={{ duration: 2, type: "spring", delay: number.delay }}
        viewport={{ once: true }}
      >
        <Typography variant="h1" component="h1" className="dark:text-secondary">
          <AnimationNumbersConatiner value={number.value} />+
        </Typography>
        <Typography
          variant="caption1"
          component="p"
          theme="gray"
          className="dark:text-gray-600"
        >
          {number.description}
        </Typography>
      </motion.div>
    </div>
  ));

  return (
    <div id="about" className="pt-24">
      <div className="bg-gray-300 pt-10 dark:bg-dark-gray">
        <Container>
          <div className="flex items-center justify-center gap-5 max-sm:gap-2 flex-wrap">
            {numberLst}
          </div>
          <div className="relative -top-20">
            <TexteSection title="About me" />
            {/* <div className="flex justify-evenly items-center my-8">
              <OngletAbout />
              <div className="relative h-96 w-96 rounded-full">
                <Image
                  src="/assets/images/pen.jpg"
                  alt=""
                  priority
                  fill
                  className=" rounded-full object-cover object-left"
                />
              </div>
            </div> */}
            <OngletAbout />
          </div>
        </Container>
      </div>
    </div>
  );
};
