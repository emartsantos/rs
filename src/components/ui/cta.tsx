import Link from "next/link";
import type { ReactNode } from "react";

type CtaProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
  as?: "a" | "button";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

const EXTERNAL_PATTERN = /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i;

export function Cta({
  href,
  children,
  variant = "primary",
  external,
  className = "",
  as: Tag = "a",
  type,
  disabled,
  onClick,
}: CtaProps) {
  const baseClasses = "btn";
  const variantClasses = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "btn-ghost",
  };
  const cls = `${baseClasses} ${variantClasses[variant]} ${className}`;

  /* Internal links go through next/link for client-side navigation. */
  const isInternalLink = Tag === "a" && !external && !EXTERNAL_PATTERN.test(href);

  if (isInternalLink) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const props = {
    className: cls,
    disabled,
    onClick,
    ...(Tag === "button" && { type: type ?? "button" }),
    ...(Tag === "a" && { href, ...(external && { target: "_blank", rel: "noopener noreferrer" }) }),
  };

  return <Tag {...props}>{children}</Tag>;
}
