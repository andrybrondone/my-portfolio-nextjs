import { AppLinks } from "@/types/app-links";
import {
  RiFacebookCircleFill,
  RiGithubFill,
  RiLinkedinFill,
} from "react-icons/ri";

const footerApplicationLinks: AppLinks[] = [
  {
    label: "Accueil",
    baseUrl: "/",
    type: "internal",
  },
  {
    label: "A props",
    baseUrl: "/a-propos",
    type: "internal",
  },
  {
    label: "Compétence",
    baseUrl: "/competence",
    type: "internal",
  },
  {
    label: "Projet",
    baseUrl: "/projet",
    type: "internal",
  },
];
const footerUsersLinks: AppLinks[] = [
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
];
export const footerSocialNetworksLink: AppLinks[] = [
  {
    label: "Facebook",
    baseUrl: "/#",
    type: "external",
    icon: RiFacebookCircleFill,
  },
  {
    label: "LinkedIn",
    baseUrl: "/#",
    type: "external",
    icon: RiLinkedinFill,
  },
  {
    label: "Github",
    baseUrl: "/#",
    type: "external",
    icon: RiGithubFill,
  },
];

export const footerLinks = [
  {
    label: "App",
    links: footerApplicationLinks,
  },
  {
    label: "Utilisateur",
    links: footerUsersLinks,
  },
  {
    label: "Information",
    links: fooInformationLink,
  },
  {
    label: "Réseaux",
    links: footerSocialNetworksLink,
  },
];
