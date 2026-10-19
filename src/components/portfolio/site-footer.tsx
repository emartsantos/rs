import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { portfolioHref, site } from "@/lib/site";
import { independentProjects } from "@/data/projects";
import styles from "./site-footer.module.css";

const navSections = [
  {
    title: "Explore",
    links: [
      { label: "All projects", href: portfolioHref("/work") },
      { label: "Website concepts", href: portfolioHref("/concepts") },
      { label: "Services", href: portfolioHref("/services") },
      { label: "Engagements", href: portfolioHref("/pricing") },
    ],
  },
  {
    title: "Projects",
    links: independentProjects.map((p) => ({
      label: p.title,
      href: p.externalUrl ?? portfolioHref(`/work/${p.slug}`),
      external: !!p.externalUrl,
    })),
  },
  {
    title: "Connect",
    links: [
      { label: "About", href: portfolioHref("/about") },
      { label: "Contact", href: portfolioHref("/contact") },
      { label: "GitHub", href: site.github, external: true },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className={`${styles.footer} band-ink`}>
      <div className="shell">
        <div className={styles.head}>
          <span className={`eyebrow ${styles.kicker}`}>Available for select projects</span>
          <a
            href={`mailto:${site.email}`}
            className={styles.email}
            aria-label={`Email ${site.name}`}
          >
            {site.email}
            <ArrowUpRight aria-hidden="true" size={32} strokeWidth={1.5} className={styles.emailIcon} />
          </a>
        </div>

        <div className={styles.body}>
          <div className={styles.brandCol}>
            <Logo tone="light" height={26} className={styles.mark} title="Raymart Santos monogram" />
            <p className={styles.meta}>
              Independent web developer & designer based in the Philippines, working with
              clients in Singapore, the United States, and internationally.
            </p>
            <a href={site.github} className={styles.social} target="_blank" rel="noopener noreferrer">
              github.com/emartsantos
              <ArrowUpRight aria-hidden="true" size={14} strokeWidth={1.75} />
            </a>
          </div>

          <nav aria-label="Footer navigation" className={styles.navGrid}>
            {navSections.map((section) => (
              <div key={section.title} className={styles.navColumn}>
                <span className={`eyebrow ${styles.navTitle}`}>{section.title}</span>
                <ul className={styles.navLinks}>
                  {section.links.map((link) => (
                    <li key={link.href}>
                      {link.external ? (
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          {link.label}
                        </a>
                      ) : (
                        <Link href={link.href}>{link.label}</Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <p>Set in Instrument Sans, Fraunces &amp; IBM Plex Mono — Built with Next.js</p>
        </div>
      </div>
    </footer>
  );
}
