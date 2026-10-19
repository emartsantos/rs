import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/ui/page-hero";
import { portfolioHref, site } from "@/lib/site";
import { ContactForm } from "./_components/ContactForm";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Start a project",
  description:
    "Send a project inquiry. Describe what you're building, who it's for, your approximate scope and timeline. You'll get clarifying questions back, then a proposal with a fixed scope.",
  alternates: { canonical: "/contact" },
};

const alternatives = [
  { label: "Email", value: site.email, href: `mailto:${site.email}`, external: true },
  { label: "GitHub", value: "github.com/emartsantos", href: site.github, external: true },
  { label: "Engagements", value: "Packages & how I work", href: portfolioHref("/pricing"), external: false },
  { label: "Work", value: "Selected projects & case studies", href: portfolioHref("/work"), external: false },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        index="06"
        eyebrow="Contact"
        title={
          <>
            Start a <span className="serif">project.</span>
          </>
        }
        note="Tell me what the business needs and I'll design around it. You'll get clarifying questions back, then a proposal with a fixed scope and a quotation."
      />

      <section className="section" aria-labelledby="form-heading">
        <div className="shell">
          <div className={styles.layout}>
            <div className={styles.formCol}>
              <h2 id="form-heading" className={styles.formTitle}>
                Project inquiry
              </h2>
              <ContactForm />
            </div>

            <aside className={styles.aside} aria-labelledby="alt-heading">
              <h2 id="alt-heading" className={styles.asideTitle}>
                Other ways to reach me
              </h2>
              <div className={styles.altGrid}>
                {alternatives.map((item) =>
                  item.external ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className={styles.altCard}
                    >
                      <span className="eyebrow">{item.label}</span>
                      <span className={styles.altValue}>
                        {item.value}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </span>
                    </a>
                  ) : (
                    <Link key={item.label} href={item.href} className={styles.altCard}>
                      <span className="eyebrow">{item.label}</span>
                      <span className={styles.altValue}>
                        {item.value}
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </span>
                    </Link>
                  ),
                )}
              </div>

              <p className={styles.responseNote}>
                Most inquiries receive a reply within one business day.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
