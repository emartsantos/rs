"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { portfolioHref } from "@/lib/site";
import { Logo } from "@/components/brand/logo";
import styles from "./site-header.module.css";

const nav = [
  { label: "Work", href: "/work" },
  { label: "Concepts", href: "/concepts" },
  { label: "Services", href: "/services" },
  { label: "Engagements", href: "/pricing" },
  { label: "About", href: "/about" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";
  const overHero = open || (isHome && !scrolled);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  return (
    <header
      className={[
        styles.header,
        overHero ? styles.over : styles.solid,
        open ? styles.menuOpen : "",
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div className={`shell ${styles.bar}`}>
        <Link href={portfolioHref("/")} className={styles.brand} aria-label="Raymart Santos — Home">
          <span className={styles.lockup}>
            <Logo tone="light" height={22} priority className={styles.logoLight} />
            <Logo tone="dark" height={22} priority className={styles.logoDark} />
            <span className={styles.brandName}>Raymart Santos</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className={styles.nav}>
          {nav.map((item) => {
            const active = pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={portfolioHref(item.href)}
                className={`${styles.navLink} ${active ? styles.navActive : ""}`}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className={styles.actions}>
          <Link
            href={portfolioHref("/contact")}
            className={`${styles.navCta} btn btn-primary`}
          >
            Start a project
            <ArrowUpRight aria-hidden="true" size={15} strokeWidth={1.75} />
          </Link>
          <button
            type="button"
            className={styles.menuButton}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={styles.panel}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <nav className={styles.mobileNav}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={portfolioHref(item.href)}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href={portfolioHref("/contact")}
            className={`${styles.mobileCta} btn btn-primary`}
            onClick={() => setOpen(false)}
          >
            Start a project
            <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.75} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
