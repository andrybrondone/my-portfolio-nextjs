import { Typography } from "@/ui/design-system/typography/Typography";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";

interface Props {
  value: number;
}
export default function NumberAnimation() {
  return (
    <>
      {/* <AnimationNumbers value={55} />+ */}
      <Skills />
    </>
  );
}

const AnimationNumbers = ({ value }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
};

interface SkillProps {
  name: string;
  x: string;
  y: string;
}

const Skills = () => {
  return (
    <>
      <Typography
        variant="h2"
        component="h2"
        theme="primary"
        className="font-bold w-full text-center"
      >
        Skills
      </Typography>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          web
        </motion.div>
        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="Tailwind CSS" x="-25vw" y="2vw" />
        <Skill name="Javascript" x="20vw" y="6vw" />
        <Skill name="ReactJs" x="0vw" y="12vw" />
        <Skill name="NextJs" x="-20vw" y="-15vw" />
        <Skill name="NodeJs" x="32vw" y="5vw" />
        <Skill name="FireBase" x="-25vw" y="18vw" />
      </div>
    </>
  );
};
const Skill = ({ name, x, y }: SkillProps) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  );
};
