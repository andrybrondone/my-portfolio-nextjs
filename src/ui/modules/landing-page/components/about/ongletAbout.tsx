import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export interface Ingredient {
  icon: string;
  label: string;
}

export const allIngredients = [
  { icon: "🍅", label: "Tomato" },
  { icon: "🥬", label: "Lettuce" },
  { icon: "🧀", label: "Cheese" },
  { icon: "🥕", label: "Carrot" },
  { icon: "🍌", label: "Banana" },
  { icon: "🫐", label: "Blueberries" },
  { icon: "🥂", label: "Champers?" },
];

const [tomato, lettuce, cheese] = allIngredients;
export const initialTabs = [tomato, lettuce, cheese];

export function getNextIngredient(
  ingredients: Ingredient[]
): Ingredient | undefined {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}

export const OngletAbout = () => {
  const [selectedTab, setSelectedTab] = useState(initialTabs[0]);

  return (
    <div className="w-[480px] h-[360px] rounded-[10px] overflow-hidden shadow-xl flex flex-col">
      <nav className=" py-2 rounded-[10px] rounded-r-[0px] rounded-l-[0px] border bottom-[1px] border-secondary-200 h-11 bg-gray-300">
        <ul>
          {initialTabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={() => setSelectedTab(item)}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <motion.div className="underline" layoutId="underline" />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main className="flex justify-center items-center bg-white text-[128px] flex-grow select-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedTab ? selectedTab.label : "empty"}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {selectedTab ? selectedTab.icon : "😋"}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
};
