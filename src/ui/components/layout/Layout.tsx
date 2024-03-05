import clsx from "clsx";
import { useContext } from "react";
import { DarkModeContext } from "../darkMode/DarkModeGlobal";
import { Footer } from "../navigation/Footer";
import { Navigation } from "../navigation/Navigation";

interface Props {
  children: React.ReactNode;
}

export const Layout = ({ children }: Props) => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <div className={clsx(isDarkMode && "dark")}>
      <div className="">
        <Navigation />
        {children}
        <Footer />
      </div>
    </div>
  );
};
