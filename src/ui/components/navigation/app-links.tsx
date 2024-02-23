import { AppLinks } from "@/types/app-links";
import {
  RiFacebookCircleFill,
  RiGithubFill,
  RiLinkedinFill,
} from "react-icons/ri";

const homeScroll = (e: any) => {
  e.preventDefault();
  window.scrollTo(0, 0);
};

const projectScroll = (e: any) => {
  e.preventDefault();

  const project = document.getElementById("project");
  project?.scrollIntoView({
    behavior: "smooth",
  });
};

const aboutScroll = (e: any) => {
  e.preventDefault();

  const about = document.getElementById("about");
  about?.scrollIntoView({
    behavior: "smooth",
  });
};

const footerApplicationLinks: AppLinks[] = [
  {
    label: "Home",
    baseUrl: "/",
    type: "internal",
    action: homeScroll,
  },
  {
    label: "About me",
    baseUrl: "/a-propos",
    type: "internal",
    action: aboutScroll,
  },
  {
    label: "My project",
    baseUrl: "/projet",
    type: "internal",
    action: projectScroll,
  },
];
/*const footerUsersLinks: AppLinks[] = [
  {
    label: "Mon espace",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Connexion",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Inscription",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Mot de passe oublié",
    baseUrl: "/#",
    type: "internal",
  },
];
const fooInformationLink: AppLinks[] = [
  {
    label: "CGU",
    baseUrl: "/#",
    type: "internal",
  },
  {
    label: "Confidentialité",
    baseUrl: "/a-propos",
    type: "internal",
  },
  {
    label: "Contact",
    baseUrl: "/competence",
    type: "internal",
  },
];*/
export const footerSocialNetworksLink: AppLinks[] = [
  {
    label: "Facebook",
    baseUrl: "https://facebook.com/bron.don.714",
    type: "external",
    icon: RiFacebookCircleFill,
  },
  {
    label: "LinkedIn",
    baseUrl: "https://linkedin.com/in/brondone-andriambololomanana",
    type: "external",
    icon: RiLinkedinFill,
  },
  {
    label: "Github",
    baseUrl: "https://github.com/andrybrondone",
    type: "external",
    icon: RiGithubFill,
  },
];

export const footerLinks = [
  {
    label: "Application",
    links: footerApplicationLinks,
  },
  /* {
    label: "Utilisateur",
    links: footerUsersLinks,
  },
  {
    label: "Information",
    links: fooInformationLink,
  },*/
  {
    label: "Social Media",
    links: footerSocialNetworksLink,
  },
];
