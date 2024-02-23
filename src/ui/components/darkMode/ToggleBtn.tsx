import clsx from "clsx";
import { useContext, useEffect } from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { setTimeout } from "timers";
import { DarkModeContext } from "./DarkModeGlobal";

export const ToggleBtn = () => {
  const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const element = document.querySelector(".toogle-anim");

    element?.classList.add("toogle-animated");

    const timeOut = setTimeout(() => {
      element?.classList.remove("toogle-animated");
    }, 500);

    return () => {
      clearTimeout(timeOut);
    };
  }, [isDarkMode]);

  return (
    <div className={clsx(isDarkMode && "dark")}>
      <div
        className="bg-gray-400 w-14 h-7 rounded-[10rem] px-[3px] cursor-pointer shadow-sm relative flex items-center dark:bg-gray-700"
        onClick={toggleDarkMode}
      >
        <div className="bg-white w-6 h-6 rounded-full absolute dark:bg-gray-800 dark:translate-x-[26px]">
          <div
            className="toogle-anim
              w-full h-full flex justify-center items-center"
          >
            {isDarkMode ? (
              <RiMoonClearFill className="text-white text-sm" />
            ) : (
              <RiSunFill className="text-alert-warning text-4xl" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
