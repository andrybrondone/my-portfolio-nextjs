import { Toaster } from "sonner";
import { LandingPageView } from "./landing-page.view";

export const LandingPageContainer = () => {
  return (
    <>
      <LandingPageView />;
      <Toaster richColors position="top-center" duration={6000} closeButton />
    </>
  );
};
