import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type SmartLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  external?: boolean;
  children: ReactNode;
};

export function SmartLink({ href, external, children, ...rest }: SmartLinkProps) {
  const isExternal = external ?? /^https?:\/\//.test(href);

  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noreferrer" {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
