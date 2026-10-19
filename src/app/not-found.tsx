import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/portfolio/site-header";
import { SiteFooter } from "@/components/portfolio/site-footer";
import { Cta } from "@/components/ui/cta";
import { portfolioHref } from "@/lib/site";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main" className="flex-1">
        <section className={styles.wrap} aria-labelledby="notfound-heading">
          <div className={styles.shell}>
            <span className={styles.code} aria-hidden="true">
              404
            </span>
            <h1 id="notfound-heading" className={styles.title}>
              This page <span className="serif">doesn&rsquo;t exist.</span>
            </h1>
            <p className={styles.body}>
              The link may be broken, or the page may have moved. The work is a good
              place to start.
            </p>
            <div className={styles.actions}>
              <Cta href={portfolioHref("/work")}>View selected work</Cta>
              <Cta href={portfolioHref("/")} variant="secondary">
                Back to home
              </Cta>
            </div>
            <nav className={styles.links} aria-label="Site sections">
              <Link href={portfolioHref("/services")} className="link-underline">
                Services
              </Link>
              <Link href={portfolioHref("/concepts")} className="link-underline">
                Concepts
              </Link>
              <Link href={portfolioHref("/pricing")} className="link-underline">
                Engagements
              </Link>
              <Link href={portfolioHref("/contact")} className="link-underline">
                Contact
              </Link>
            </nav>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
