import { Container } from "@/ui/components/container/Container";
import { Typography } from "@/ui/design-system/typography/Typography";
import { motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { AnimationNumbersConatiner } from "../animation-numbers-container/AnimationNumbersContainer";

interface NumberDataListInterface {
  value: number;
  delay: number;
  description: string;
}

const numberData: NumberDataListInterface[] = [
  {
    value: 4,
    delay: 0,
    description: "Projet Réaliser",
  },
  {
    value: 2,
    delay: 0.4,
    description: "Experiences",
  },
  {
    value: 8,
    delay: 0.2,
    description: "Projet Realiser",
  },
];

export const AboutView = () => {
  const numberLst = numberData.map((number) => (
    <div key={uuidv4()}>
      <motion.div
        className="text-center py-9 relative -top-32 w-56 shadow-lg rounded"
        initial={{ top: 0 }}
        whileInView={{ top: -128 }}
        transition={{ duration: 2, type: "spring", delay: number.delay }}
        viewport={{ once: true }}
      >
        <Typography variant="h1" component="h1">
          <AnimationNumbersConatiner value={number.value} />+
        </Typography>
        <Typography variant="caption1" component="p" theme="gray">
          {number.description}
        </Typography>
      </motion.div>
    </div>
  ));

  return (
    <div id="a-propos" className=" pt-24">
      <div className="bg-gray-300 py-10 ">
        <Container>
          <div className="flex items-center justify-center gap-5">
            {numberLst}
          </div>
        </Container>
      </div>
    </div>
  );
};
