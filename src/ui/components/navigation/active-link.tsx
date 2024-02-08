import clsx from "clsx";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

interface Props {
  href: string;
  children: React.ReactNode;
}

export const ActiveLink = ({ href, children }: Props) => {
  const router = useRouter();

  const isActive: boolean = useMemo(() => {
    return router.pathname === href;
  }, [router.pathname, href]);

  return (
    <Link
      href={href}
      className={clsx(
        "pt-5 pb-5 relative group",
        isActive && "text-secondary-600 font-medium hover:text-secondary-600"
      )}
    >
      {children}

      <span
        className={clsx(
          !isActive &&
            "h-[1.52px] inline-block w-0 bg-secondary-400 absolute left-0 bottom-2 group-hover:w-full transition-[width] ease-in-out duration-300"
        )}
      >
        &nbsp;
      </span>
    </Link>
  );
};
