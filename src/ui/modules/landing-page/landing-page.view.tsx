import { HomeView } from "./components/Home/home.view";
import { AboutView } from "./components/about/about.view";
import { ContactView } from "./components/contact/contact.view";
import { ProjectView } from "./components/project/project.view";
import { SkillsView } from "./components/skills/skills.view";

export const LandingPageView = () => {
  return (
    <>
      <HomeView />
      <AboutView />
      <SkillsView />
      <ProjectView />
      <ContactView />
    </>
  );
};
