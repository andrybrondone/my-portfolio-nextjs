import { AboutView } from "./components/about/about.view";
import { AccueilView } from "./components/accueil/accueil.view";
import { ContactContainer } from "./components/contact/contact.container";
import { ProjectView } from "./components/project/project.view";
import { SkillsView } from "./components/skills/skills.view";

export const LandingPageView = () => {
  return (
    <>
      <AccueilView />
      <AboutView />
      <SkillsView />
      <ProjectView />
      <ContactContainer />
    </>
  );
};
