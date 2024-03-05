import { DarkModeContext } from "@/ui/components/darkMode/DarkModeGlobal";
import clsx from "clsx";
import { motion } from "framer-motion";
import { useContext, useState } from "react";
import { RiArrowLeftCircleLine, RiArrowRightCircleFill } from "react-icons/ri";

export const ImageSlider = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

  const handleNext = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 1) % 5
      );
      return updatedIndexes;
    });
  };

  const handleBack = () => {
    setPositionIndexes((prevIndexes) => {
      const updatedIndexes = prevIndexes.map(
        (prevIndex) => (prevIndex + 4) % 5
      );

      return updatedIndexes;
    });
  };

  const images = [
    "/assets/images/4.jpg",
    "/assets/images/4.jpg",
    "/assets/images/4.jpg",
    "/assets/images/4.jpg",
    "/assets/images/4.jpg",
  ];

  const positions = ["center", "left1", "left", "right", "right1"];

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 3 },
    left: { x: "-90%", scale: 0.5, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 3 },
  };
  return (
    <div
      className={clsx(
        "flex items-center flex-col justify-center",
        isDarkMode && "dark"
      )}
    >
      {images.map((image, index) => (
        <motion.img
          key={index}
          src={image}
          alt={image}
          className="rounded-[12px]"
          initial="center"
          animate={positions[positionIndexes[index]]}
          variants={imageVariants}
          transition={{ duration: 0.5 }}
          style={{ width: "45%", position: "absolute" }}
          onClick={handleNext}
        />
      ))}
      <div className="flex flex-row gap-1 mt-48 text-8xl">
        <button
          className="text-gary dark:text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleBack}
        >
          <RiArrowLeftCircleLine />
        </button>
        <button
          className=" text-gray dark:text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          <RiArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};
