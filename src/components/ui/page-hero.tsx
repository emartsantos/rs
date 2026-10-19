import type { ReactNode } from "react";
import styles from "./page-hero.module.css";

type PageHeroProps = {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  note?: ReactNode;
  children?: ReactNode;
  className?: string;
  dark?: boolean;
};

export function PageHero({
  index,
  eyebrow,
  title,
  note,
  children,
  className = "",
  dark = false,
}: PageHeroProps) {
  return (
    <section className={`${styles.hero} ${dark ? "band-ink" : ""} ${className}`}>
      <div className="shell">
        {(index || eyebrow) && (
          <div className={styles.top}>
            {index && (
              <span className={`${styles.index} eyebrow`} aria-hidden="true">
                {index}
              </span>
            )}
            {eyebrow && <span className={`eyebrow ${styles.eyebrow}`}>{eyebrow}</span>}
          </div>
        )}
        <h1 className={styles.title}>{title}</h1>
        {(note || children) && (
          <div className={styles.bottom}>
            {note && <p className={styles.note}>{note}</p>}
            {children && <div className={styles.actions}>{children}</div>}
          </div>
        )}
      </div>
    </section>
  );
}
