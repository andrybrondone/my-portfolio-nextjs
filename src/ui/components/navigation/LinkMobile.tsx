import { ToggleNavContext } from "@/context/ToggleNavContext";
import { useContext } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { DarkModeContext } from "../darkMode/DarkModeGlobal";
import { ToggleBtn } from "../darkMode/ToggleBtn";
import { ActiveLink } from "./active-link";

export default function LinkMobile() {
  const { toggleNav } = useContext(ToggleNavContext);
  const { isDarkMode } = useContext(DarkModeContext);

  const clickMenuBurger = () => {
    const menutoggel = document.getElementById("menuBurger");
    menutoggel?.classList.toggle("active");

    toggleNav();
  };

  return (
    <>
      <div
        className="anim-transition fixed top-[75px] left-0 w-full h-[100vh] z-50"
        onClick={clickMenuBurger}
      ></div>

      <div className="bg-gray-300/60 backdrop-blur-sm shadow-lg dark:text-white dark:bg-black/60 dark-transition fixed top-[60px] rounded flex flex-col items-center py-6 px-10 anim-transition w-full z-50 animation-nav">
        <div className="flex items-center gap-4 border-b-2 border-gray-700 pb-4">
          {isDarkMode ? (
            <h1>Passer en mode claire</h1>
          ) : (
            <h1>Passer en mode sombre</h1>
          )}

          <ToggleBtn />
        </div>
        <ActiveLink
          href="/"
          className="flex items-center"
          onClick={clickMenuBurger}
        >
          <AiOutlineHome className="relative bottom-[1px] right-1" />
          Home
        </ActiveLink>
        <ActiveLink href="/#about" onClick={clickMenuBurger}>
          About me
        </ActiveLink>
        <ActiveLink href="/#project" onClick={clickMenuBurger}>
          Project
        </ActiveLink>
      </div>
    </>
  );
}
