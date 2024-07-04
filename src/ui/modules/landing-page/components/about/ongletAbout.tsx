import { Container } from "@/ui/components/container/Container";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { RiAddBoxLine, RiListUnordered } from "react-icons/ri";
import { Education } from "./Education";
import { Experience } from "./Experience";
import { Profil } from "./Profil";

const allData = [
  {
    icon: <RiAddBoxLine />,
    label: "Profil",
    component: <Profil />,
  },
  {
    icon: <RiListUnordered />,
    label: "Educations",
    component: <Education />,
  },
  {
    icon: <RiListUnordered />,
    label: "Experiences",
    component: <Experience />,
  },
];

const initialTabs = allData;

export default function OngletAbout() {
  const [selectedTab, setSelectedTab] = useState(initialTabs[0]);

  return (
    <>
      <Container className="mt-10 flex items-center justify-between gap-4 max-lg:flex-col">
        <div className="flex lg:flex-col gap-10 max-sm:gap-0 max-sm:justify-between dark:text-white">
          {initialTabs.map((item) => (
            <div className="relative group" key={item.label}>
              <p
                className={clsx(
                  "px-8 max-sm:px-5 py-2 cursor-pointer flex items-center gap-2 text-caption1 font-medium",
                  item === selectedTab
                    ? "selecte bg-secondary/5 rounded-t"
                    : " hover:bg-secondary-200/10 transition"
                )}
                onClick={() => setSelectedTab(item)}
              >
                {item.icon}
                {item.label}
              </p>
              <span
                className={clsx(
                  item === selectedTab
                    ? "h-[2px] rounded inline-block bg-secondary  dark:bg-secondary-200 absolute left-1/2 -translate-x-1/2 w-full transition-[width] ease-in-out duration-300"
                    : "h-[2px] rounded inline-block w-0 bg-secondary absolute left-0  group-hover:w-full transition-[width] ease-in-out duration-300 hover:font-medium"
                )}
              ></span>
            </div>
          ))}
        </div>
        <div className="flex justify-center flex-grow w-full select-none h-[630px] relative bg-white dark:bg-gray-800">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : "empty"}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {selectedTab ? selectedTab.component : "😋"}
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </>
  );
}
