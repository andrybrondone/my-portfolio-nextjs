import { DarkModeContext } from "@/ui/components/darkMode/DarkModeGlobal";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import { LandingPageView } from "./landing-page.view";

export const LandingPageContainer = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <>
      <LandingPageView />;
      <ToastContainer
        position="top-center"
        theme={isDarkMode ? "dark" : "light"}
      />
    </>
  );
};
