import { useScreenSize } from "@/hooks/useScreenSize";
import { LinkType } from "@/lib/link-type";
import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import Link from "next/link";
import { Spinner } from "../spinner/Spinner";

interface Props {
  variant?:
    | "accent"
    | "accent-rounded-full"
    | "secondary"
    | "outline"
    | "disabled"
    | "ico"
    | "warning"
    | "update"
    | "delete"
    | "blue";
  icon?: IconProps;
  iconTheme?: "accent" | "secondary" | "gray";
  iconPosition?: "left" | "right";
  disabled?: boolean;
  isLoading?: boolean;
  children?: React.ReactNode;
  baseUrl?: string;
  linkType?: LinkType;
  action?: () => void;
  type?: "button" | "submit";
  fullWith?: boolean;
  className?: string;
}

export const Button = ({
  className,
  variant = "accent",
  icon,
  iconTheme = "accent",
  iconPosition = "right",
  disabled,
  isLoading,
  children,
  baseUrl,
  linkType = "internal",
  type = "button",
  fullWith = false,
  action = () => {},
}: Props) => {
  const size = useScreenSize();

  let sizeForScreen;
  switch (size) {
    case "lg": // default
      sizeForScreen = "large";
      break;
    case "md":
      sizeForScreen = "medium";
      break;
    case "sm":
      sizeForScreen = "small";
      break;
  }

  const sizeAdjusted = sizeForScreen; // Taille ajustée en fonction de la taille de l'écran

  let variantStyle: string = "",
    sizeStyle: string = "",
    icoSize: number = 0;

  if (disabled) {
    variant = "disabled";
  }

  switch (variant) {
    case "accent": // default
      variantStyle =
        "bg-primary hover:bg-primary-400 border border-primary  dark:bg-primary-400 text-white rounded dark:hover:shadow-primary-400";
      break;

    case "accent-rounded-full":
      variantStyle =
        "bg-primary hover:bg-primary-400 border border-primary md:w-20 md:h-20 rounded-full max-md:w-14 max-md:h-14 dark:bg-primary-400 text-white dark:hover:shadow-primary-400";
      break;

    case "secondary":
      variantStyle =
        "text-primary dark:text-primary-300 dark:text-white rounded border border-primary dark:border-primary-300";
      break;

    case "warning":
      variantStyle =
        "text-alert-warning rounded border border-alert-warning hover:bg-alert-warning hover:text-white dark:text-white dark:border-gray-700 dark:hover:shadow-darkgray";
      break;

    case "outline":
      variantStyle =
        "bg-white hover:bg-gray-400/60 border border-gray-600 text-gray-900 rounded";
      break;

    case "disabled":
      variantStyle =
        "bg-gray-400 border border-gray-500 text-gray-600 rounded cursor-not-allowed dark:bg-gray-700 dark:border-gray-600/20 dark:text-white/50";
      break;

    case "ico":
      if (iconTheme === "accent") {
        variantStyle =
          "bg-primary hover:bg-primary-400 text-white rounded-full dark:bg-dark-primary";
      }
      if (iconTheme === "secondary") {
        variantStyle =
          "text-primary dark:text-primary-300 hover:bg-primary-400 dark:hover:bg-primary-400 dark:hover:text-white hover:text-white rounded-full border border-primary dark:border-primary-300 dark:hover:border-primary-400";
      }
      if (iconTheme === "gray") {
        variantStyle = "bg-gray-800 hover:bg-gray-700 text-white rounded-full";
      }
      break;
  }

  switch (
    sizeAdjusted // Utilisation de la taille ajustée
  ) {
    case "small":
      sizeStyle = `text-caption3 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[40px] h-[40px]"
          : "flex justify-center items-center h-[42px] px-[12px]"
      }`;
      variant === "ico" ? (icoSize = 21) : (icoSize = 19);
      break;

    case "medium": // Default
      sizeStyle = `text-caption2 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[46px] h-[46px]"
          : "flex justify-center items-center h-[45px] px-[16px]"
      }`;
      variant === "ico" ? (icoSize = 23) : (icoSize = 21);
      break;

    case "large":
      sizeStyle = `text-caption1 font-medium ${
        variant === "ico"
          ? "flex items-center justify-center w-[49px] h-[49px]"
          : "flex justify-center items-center px-[17px] h-[47px]"
      }`;
      variant === "ico" ? (icoSize = 25) : (icoSize = 22);
      break;
  }

  const hundleClick = () => {
    if (action) {
      action();
    }
  };

  const buttonContent = (
    <>
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          {variant === "accent" || variant === "ico" ? (
            <Spinner size="small" variant="white" />
          ) : (
            <Spinner size="small" />
          )}
        </div>
      )}

      <div className={clsx(isLoading && "invisible")}>
        {icon && variant === "ico" ? (
          <icon.icon size={icoSize} />
        ) : (
          <div className={clsx(icon && "flex items-center gap-1")}>
            {icon && iconPosition === "left" && <icon.icon size={icoSize} />}
            {children}
            {icon && iconPosition === "right" && <icon.icon size={icoSize} />}
          </div>
        )}
      </div>
    </>
  );

  const buttonElement = (
    <button
      type={type}
      className={clsx(
        className,
        variantStyle,
        sizeStyle,
        icoSize,
        isLoading || (disabled && "cursor-not-allowed"),
        fullWith && "w-full",
        "relative transition"
      )}
      onClick={hundleClick}
      disabled={disabled || isLoading ? true : false}
    >
      {buttonContent}
    </button>
  );

  if (baseUrl) {
    if (linkType === LinkType.EXTERNAL) {
      return (
        <a href={baseUrl} target="_blank">
          {buttonElement}
        </a>
      );
    } else {
      return <Link href={baseUrl}>{buttonElement}</Link>;
    }
  }

  return buttonElement;
};
