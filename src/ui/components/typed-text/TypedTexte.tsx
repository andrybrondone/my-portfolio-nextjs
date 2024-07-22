// components/TypedText.js
import { motion } from "framer-motion";

interface Props {
  text: string;
}

const TypedText = ({ text }: Props) => {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.06 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="inline-block"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default TypedText;
