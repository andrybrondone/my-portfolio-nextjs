import clsx from "clsx";
import { useContext, useEffect } from "react";
import { RiMoonClearFill, RiSunFill } from "react-icons/ri";
import { setTimeout } from "timers";
import { DarkModeContext } from "./DarkModeGlobal";

interface Props {
  className?: string;
}

export const ToggleBtn = ({ className }: Props) => {
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
    <div className={clsx(className, isDarkMode && "dark")}>
      <div
        className="bg-gray-400 w-11 h-5 max-md:w-9 max-md:h-4 rounded-[10rem] max-md:rounded-[20px] cursor-pointer shadow-sm relative flex items-center  dark:bg-secondary/50"
        onClick={toggleDarkMode}
      >
        <div className="bg-white shadow w-6 h-6 max-md:w-5 max-md:h-5 rounded-full absolute dark:bg-secondary dark:translate-x-[20px] max-md:dark:translate-x-[15px]">
          <div className="toogle-anim w-full h-full flex justify-center items-center">
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
