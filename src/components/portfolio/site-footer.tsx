import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioHref, site } from "@/lib/site";
import styles from "./site-footer.module.css";

const conceptDemos = [
  { label: "Auren Studio", href: "/sites/auren-studio" },
  { label: "Fieldnote Coffee", href: "/sites/fieldnote-coffee" },
  { label: "Meridian Advisory", href: "/sites/meridian-advisory" },
  { label: "Oriel Objects", href: "/sites/oriel-objects" },
  { label: "Northstar Operations", href: "/sites/northstar-operations" },
];

export function SiteFooter() {
  return (
    <footer className={`hairline-t ${styles.footer}`}>
      <div className="container-portfolio">
        <div className={styles.emailBlock}>
          <span className="mono-label">Start a conversation</span>
          <a href={`mailto:${site.email}`} className={`font-display ${styles.emailLink}`}>
            {site.email}
            <ArrowUpRight aria-hidden="true" strokeWidth={1.5} />
          </a>
        </div>

        <div className={styles.columns}>
          <div className={styles.brandCol}>
            <p className={styles.brandName}>{site.name}</p>
            <p className={styles.brandRole}>{site.role}</p>
            <p className={`annotation ${styles.brandMeta}`}>
              Based in the Philippines
              <br />
              Working with clients in SG · US · PH · International
            </p>
          </div>

          <nav aria-label="Footer" className={styles.linkGrid}>
            <div>
              <span className="mono-label">§01 Portfolio</span>
              <ul className={styles.links}>
                <li>
                  <Link href={portfolioHref("/work")} className="link-ink">
                    All work
                  </Link>
                </li>
                <li>
                  <Link href={portfolioHref("/services")} className="link-ink">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href={portfolioHref("/pricing")} className="link-ink">
                    Pricing
                                   </Link>
                </li>
              </ul>
            </div>

            <div>
              <span className="mono-label">§02 Live demos</span>
              <ul className={styles.links}>
                {conceptDemos.map((demo) => (
                  <li key={demo.href}>
                    <Link href={demo.href} className="link-ink">
                      {demo.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="mono-label">§03 Elsewhere</span>
              <ul className={styles.links}>
                <li>
                  <Link href={portfolioHref("/about")} className="link-ink">
                    About
                  </Link>
                </li>
                <li>
                  <Link href={portfolioHref("/contact")} className="link-ink">
                    Contact
                  </Link>
                </li>
                <li>
                  <a href={site.github} className="link-ink" target="_blank" rel="noopener noreferrer">
                    GitHub ↗
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className={styles.bottomBar}>
          <span className="annotation">© {new Date().getFullYear()} {site.name}</span>
          <span className="annotation">Set in Archivo &amp; IBM Plex Mono · Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
