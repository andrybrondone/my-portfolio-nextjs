import { scrollToElement } from "@/utils/scrollToElement";
import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const ActiveLink = ({ href, children, className, onClick }: Props) => {
  const router = useRouter();

  const isActive: boolean = useMemo(() => {
    return router.asPath === href;
  }, [router.asPath, href]);

  const handleLinkClick = (href: string) => {
    scrollToElement(href.split("#")[1]);
  };

  return (
    <Link
      href={href}
      className={clsx(className, "pt-6 pb-6 relative group")}
      onClick={() => {
        handleLinkClick(href);
        if (onClick) {
          onClick();
        }
      }}
    >
      {children}

      <span
        className={clsx(
          !isActive
            ? "h-[2px] rounded inline-block w-0 bg-secondary dark:bg-dark-secondary absolute left-0 bottom-3 group-hover:w-full transition-[width] ease-in-out duration-300 hover:font-medium"
            : "h-[3.5px] rounded inline-block bg-secondary-600 dark:bg-dark-secondary absolute left-1/2 -translate-x-1/2 bottom-3 w-5 transition-[width] ease-in-out duration-300"
        )}
      ></span>
    </Link>
  );
};
