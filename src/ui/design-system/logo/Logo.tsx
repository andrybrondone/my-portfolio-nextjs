import { DarkModeContext } from "@/ui/components/darkMode/DarkModeGlobal";
import Image from "next/image";
import { useContext } from "react";

interface Props {
  size?: "very-small" | "small" | "medium" | "large";
  className?: string;
}

export const Logo = ({ size = "medium", className }: Props) => {
  const { isDarkMode } = useContext(DarkModeContext);

  let sizeLogo: number;

  switch (size) {
    case "very-small":
      sizeLogo = 34;
      break;
    case "small":
      sizeLogo = 53;
      break;
    case "medium": //default
      sizeLogo = 88;
      break;
    case "large":
      sizeLogo = 140;
      break;
  }

  return (
    <Image
      src="/assets/images/logo.png"
      alt=""
      width={sizeLogo}
      height={sizeLogo}
      className={className}
    />
  );
};
