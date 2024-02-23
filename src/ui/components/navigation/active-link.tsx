import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useMemo } from "react";
import { DarkModeContext } from "../darkMode/DarkModeGlobal";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: Function;
}

export const ActiveLink = ({
  href,
  children,
  className,
  onClick = () => {},
}: Props) => {
  const { isDarkMode } = useContext(DarkModeContext);

  const router = useRouter();

  const isActive: boolean = useMemo(() => {
    return router.pathname === href;
  }, [router.pathname, href]);

  const handleClick = (e: any) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  return (
    <Link
      href={href}
      className={clsx(
        isDarkMode && "dark",
        className,
        "pt-6 pb-6 relative group"
      )}
      onClick={handleClick}
    >
      {children}

      <span
        className={clsx(
          !isActive
            ? "h-[1.52px] rounded inline-block w-0 bg-secondary dark:bg-dark-secondary absolute left-0 bottom-2 group-hover:w-full transition-[width] ease-in-out duration-300 hover:font-medium"
            : "h-[3px] rounded inline-block bg-secondary-600 dark:bg-dark-secondary absolute bottom-2 w-5 transition-[width] ease-in-out duration-300"
        )}
      ></span>
    </Link>
  );
};
