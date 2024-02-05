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
        "pt-5 pb-5",
        isActive
          ? "text-secondary-600 font-medium hover:text-secondary-600"
          : "hover:translate-y-[-5px]"
      )}
    >
      {children}
    </Link>
  );
};
