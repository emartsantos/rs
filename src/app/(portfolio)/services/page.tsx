import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Cta } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/reveal";
import { portfolioHref } from "@/lib/site";
import { services } from "@/data/services";
import styles from "./services.module.css";

export const metadata: Metadata = {
  title: "Services & capabilities",
  description:
    "Six services, one standard of execution. Corporate websites, premium brand sites, e-commerce, admin systems, enterprise web applications, and ongoing support — built around your business, not a template.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="Services & capabilities"
        title={
          <>
            Services <span className="serif">built around</span> the business.
          </>
        }
        note="Six services, one standard of execution. Business value first — technology chosen to serve it."
      >
        <Cta href={portfolioHref("/contact")}>Discuss a project</Cta>
        <Cta href={portfolioHref("/pricing")} variant="secondary">
          See engagements
        </Cta>
      </PageHero>

      <section className="section" aria-label="Services">
        <div className="shell">
          <div className={styles.grid}>
            {services.map((service) => (
              <Reveal key={service.index} className={styles.cell}>
                <article className={styles.card}>
                  <span className={styles.index} aria-hidden="true">
                    {service.index}
                  </span>
                  <h2 className={styles.title}>{service.title}</h2>
                  <p className={styles.value}>{service.value}</p>
                  <ul className={styles.deliverables} aria-label={`${service.title} deliverables`}>
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <Link
                    href={portfolioHref("/contact")}
                    className={styles.cta}
                    aria-label={`Start a project — ${service.title}`}
                  >
                    Start this project <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.band} band-ink`} aria-label="Explore engagements">
        <div className="shell">
          <div className={styles.bandInner}>
            <h2 className={styles.bandTitle}>
              See every package and how engagements are scoped.
            </h2>
            <Cta href={portfolioHref("/pricing")}>View engagements</Cta>
          </div>
        </div>
      </section>
    </>
  );
}
