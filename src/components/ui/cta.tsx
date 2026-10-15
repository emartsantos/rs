import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./cta.module.css";

type CtaProps = {
  href: string;
  children: ReactNode;
  variant?: "signal" | "outline" | "ink";
  external?: boolean;
  className?: string;
};

export function Cta({ href, children, variant = "signal", external, className = "" }: CtaProps) {
  const cls = `${styles.cta} ${styles[variant]} ${className}`;
  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
