import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { Cta } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioHref, site } from "@/lib/site";
import {
  packages,
  packageCategories,
  comparisonRows,
  pricingConditions,
} from "@/data/packages";
import styles from "./pricing.module.css";

export const metadata: Metadata = {
  title: "Engagements & packages",
  description:
    "Five packages for corporate websites, premium brand sites, e-commerce stores, admin dashboards, and enterprise web applications. Scope and quotation are confirmed in writing before any work begins.",
  alternates: { canonical: "/pricing" },
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        index="02"
        eyebrow="Engagements"
        title={
          <>
            Five ways to <span className="serif">work together.</span>
          </>
        }
        note="Every engagement is scoped and quoted from confirmed, written requirements. Domain, hosting, third party subscriptions, paid assets, and ongoing maintenance are excluded unless explicitly included in your quotation."
      >
        <Cta href={portfolioHref("/contact")}>Request a quotation</Cta>
        <Cta href={portfolioHref("/services")} variant="secondary">
          View services
        </Cta>
      </PageHero>

      {/* ——— Packages by category ——— */}
      <section className="section" aria-label="Packages by category">
        <div className="shell">
          {packageCategories.map((cat) => {
            const catPackages = packages.filter((p) => p.category === cat.id);
            return (
              <div key={cat.id} className={styles.categoryBlock}>
                <aside className={styles.aside}>
                  <span className={styles.asideIndex} aria-hidden="true">
                    {cat.index}
                  </span>
                  <h2 className={styles.asideTitle}>{cat.title}</h2>
                  <p className={styles.asideBlurb}>{cat.blurb}</p>
                  <Cta
                    href={portfolioHref("/contact")}
                    variant="ghost"
                    className={styles.asideCta}
                  >
                    Request a quotation{" "}
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </Cta>
                </aside>

                <div className={styles.packageGrid}>
                  {catPackages.map((pkg) => (
                    <Reveal key={pkg.id} className={styles.packageCell}>
                      <article className={styles.packageCard}>
                        <h3 className={styles.packageName}>{pkg.name}</h3>
                        <p className={styles.packagePositioning}>{pkg.positioning}</p>
                        <p className={styles.packageIdeal}>
                          <span className="eyebrow">Best fit</span>
                          <span>{pkg.ideal}</span>
                        </p>
                        <ul className={styles.scope} aria-label={`${pkg.name} scope`}>
                          {pkg.scope.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                        <p className={styles.exclusions}>{pkg.exclusions}</p>
                      </article>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ——— Comparison ——— */}
      <section className={`${styles.bandAlt} section`} aria-labelledby="comparison-heading">
        <div className="shell">
          <Reveal>
            <SectionHeading
              id="comparison-heading"
              index="03"
              title="Side by side"
              annotation="How the five engagements differ across fit, scope, deliverables, and discovery."
            />
          </Reveal>

          <div className={styles.tableWrap}>
            <table className={styles.comparison}>
              <thead>
                <tr>
                  <th scope="col" className={styles.compareLabel}>
                    Criteria
                  </th>
                  {packages.map((pkg) => (
                    <th key={pkg.id} scope="col" className={styles.compareHead}>
                      {pkg.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row" className={styles.compareRowLabel}>
                      {row.label}
                    </th>
                    {packages.map((pkg) => (
                      <td key={pkg.id} className={styles.compareCell}>
                        {row.values[pkg.name] ?? "—"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ——— Conditions ——— */}
      <section className="section" aria-labelledby="conditions-heading">
        <div className="shell">
          <Reveal>
            <SectionHeading
              id="conditions-heading"
              index="04"
              title="How engagements are quoted"
              annotation="The ground rules that keep scope, timeline, and quotation predictable."
            />
          </Reveal>
          <ol className={styles.conditions}>
            {pricingConditions.map((condition, i) => (
              <li key={condition} className={styles.condition}>
                <span className={styles.conditionNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{condition}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— Final CTA ——— */}
      <section className={`${styles.finalCta} band-ink`} aria-label="Start a project">
        <div className="shell">
          <Reveal>
            <h2 className={styles.finalTitle}>
              Ready to <span className="serif">move forward?</span>
            </h2>
            <div className={styles.finalBottom}>
              <p className={styles.finalSub}>
                Send a brief — what you&rsquo;re building, who it&rsquo;s for, your
                approximate scope and timeline. You&rsquo;ll get a proposal with a fixed scope.
              </p>
              <div className={styles.finalActions}>
                <Cta href={portfolioHref("/contact")}>Start a project</Cta>
                <Cta href={`mailto:${site.email}`} variant="secondary">
                  Email directly
                </Cta>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
