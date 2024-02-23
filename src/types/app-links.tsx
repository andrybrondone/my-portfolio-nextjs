import { LinkType } from "@/lib/link-type";
import { MouseEventHandler } from "react";
import { IconType } from "react-icons";

export interface AppLinks {
  label: string;
  baseUrl: string;
  type: LinkType;
  icon?: IconType;
  action?: MouseEventHandler<HTMLAnchorElement>;
}
export interface FooterLinks {
  label: string;
  links: AppLinks[];
}
