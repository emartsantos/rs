"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { portfolioHref } from "@/lib/site";
import { Cta } from "@/components/ui/cta";
import styles from "./site-header.module.css";

const nav = [
  { label: "Work", href: "/work", index: "01" },
  { label: "Services", href: "/services", index: "02" },
  { label: "Pricing", href: "/pricing", index: "03" },
  { label: "About", href: "/about", index: "04" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <div className={`container-portfolio ${styles.bar}`}>
        <Link href={portfolioHref("/")} className={styles.brand}>
          <span className={styles.brandName}>Raymart Santos</span>
          <span className={styles.brandRole}>— Web Developer</span>
        </Link>

        <nav aria-label="Primary" className={styles.nav}>
          {nav.map((item) => {
            const active = pathname.startsWith(portfolioHref(item.href));
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
          <Cta href={portfolioHref("/contact")} className={styles.navCta}>
            Start a project
          </Cta>
        </nav>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      <div id="mobile-menu" className={`${styles.mobilePanel} ${open ? styles.mobileOpen : ""}`}>
        <nav aria-label="Mobile" className={styles.mobileNav}>
          {nav.map((item) => (
            <Link
              key={item.href}
              href={portfolioHref(item.href)}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              <span className="mono-label">§{item.index}</span>
              <span className="font-display-md text-3xl">{item.label}</span>
            </Link>
          ))}
          <Link
            href={portfolioHref("/contact")}
            className={styles.mobileLinkSignal}
            onClick={() => setOpen(false)}
          >
            Start a project →
          </Link>
        </nav>
      </div>
    </header>
  );
}
