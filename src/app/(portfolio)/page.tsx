import Link from "next/link";
import type { Metadata } from "next";
import { Cta } from "@/components/ui/cta";
import { SectionHeading } from "@/components/ui/section-heading";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { FeaturedProjectRow } from "@/components/portfolio/featured-project-row";
import { portfolioHref, site } from "@/lib/site";
import { conceptProjects } from "@/data/projects";
import { services } from "@/data/services";
import { packageCategories } from "@/data/packages";
import { processSteps } from "@/data/process";
import { faqItems } from "@/data/faq";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: `${site.name} — Web Developer & Website Designer`,
  description: site.description,
  alternates: { canonical: site.url + "/" },
};

const featured = ["auren-studio", "meridian-advisory", "oriel-objects", "northstar-operations"]
  .map((slug) => conceptProjects.find((p) => p.slug === slug))
  .filter((p): p is NonNullable<typeof p> => Boolean(p));

const priceBlurbs: Record<string, string> = {
  Websites:
    "Focused landing pages to twenty-page corporate sites — custom direction, transparent starting prices.",
  "E-commerce":
    "Standard stores on established platforms, and advanced storefronts with deeper merchandising.",
  "Custom Software":
    "Websites backed by admin systems, up to full enterprise web applications. Discovery-led.",
};

const whyItems = [
  {
    title: "Custom direction, every time",
    text: "No resold templates. Each project starts from your business, your audience, and the competitors you actually face.",
  },
  {
    title: "Transparent starting prices",
    text: "Package pricing is published up front, with deliverables and exclusions written plainly. No surprise invoices.",
  },
  {
    title: "You work with me directly",
    text: "One person accountable for design and engineering — no account managers, no handoffs, no diluted decisions.",
  },
  {
    title: "Built to hold up",
    text: "Performance budgets, accessibility targets, responsive verification, and maintainable code come standard.",
  },
];

const specRows = [
  {
    layer: "Frontend",
    stack: "Next.js · React · TypeScript — Server Components by default, client JavaScript only where interaction demands it.",
  },
  {
    layer: "Styling",
    stack: "Tailwind CSS · CSS Modules · bespoke design systems with CSS custom properties and disciplined type scales.",
  },
  {
    layer: "Commerce",
    stack: "Shopify storefronts · custom e-commerce frontends · catalog, filtering, and checkout integration.",
  },
  {
    layer: "Backend",
    stack: "Node.js · PostgreSQL · Prisma — introduced only when a project genuinely needs them.",
  },
  {
    layer: "Quality",
    stack: "WCAG 2.2 AA as a working target · Core Web Vitals · keyboard navigation · reduced-motion support.",
  },
  {
    layer: "Delivery",
    stack: "GitHub Pages & Vercel deployments · CI pipelines · documentation and handover sessions.",
  },
];

const keywords = [
  "Landing pages",
  "Corporate websites",
  "E-commerce",
  "Admin dashboards",
  "Enterprise web apps",
  "Performance",
  "Accessibility",
];

export default function HomePage() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className={styles.hero} aria-label="Introduction">
        <div className={`container-portfolio ${styles.heroGrid}`}>
          <div>
            <div className={styles.heroLabel}>
              <span className="mono-label">Web Developer · Website Designer · Full-Stack</span>
              <span className="mono-label">{site.location} — working worldwide</span>
            </div>
            <h1 className={`font-display ${styles.heroTitle}`}>
              Digital products built around your business —{" "}
              <span className={styles.heroTitleSignal}>not another template.</span>
            </h1>
            <p className={styles.heroSub}>
              I design and build landing pages, corporate websites, e-commerce stores, admin systems, and web
              applications for businesses in Singapore, the United States, the Philippines, and beyond — with
              transparent pricing and production-grade engineering.
            </p>
            <div className={styles.heroActions}>
              <Cta href={portfolioHref("/contact")}>Start a project</Cta>
              <Cta href={portfolioHref("/work")} variant="outline">
                View selected work
              </Cta>
            </div>
          </div>

          <aside className={styles.heroRail} aria-label="Quick facts">
            <div className={styles.railItem}>
              <span className="mono-label">Availability</span>
              <span className={styles.railValue}>
                <span className={styles.railDot} aria-hidden="true" />
                Open to new projects
              </span>
            </div>
            <div className={styles.railItem}>
              <span className="mono-label">Markets</span>
              <span className={styles.railValue}>SG · US · PH · International</span>
            </div>
            <div className={styles.railItem}>
              <span className="mono-label">Projects from</span>
              <span className={styles.railValue}>S$350 — 8 published packages</span>
            </div>
            <div className={styles.railItem}>
              <span className="mono-label">Contact</span>
              <span className={styles.railValue}>
                <a href={`mailto:${site.email}`} className="link-ink">
                  {site.email}
                </a>
              </span>
            </div>
          </aside>
        </div>
      </section>

      <div className={styles.strip}>
        <div className={`container-portfolio ${styles.stripInner}`}>
          {keywords.map((k) => (
            <span key={k} className={styles.stripItem}>
              {k}
            </span>
          ))}
        </div>
      </div>

      {/* ——— Selected work ——— */}
      <section className={styles.section} aria-labelledby="work-heading">
        <div className="container-portfolio">
          <div className={styles.sectionHead}>
            <SectionHeading
              index="01"
              title="Selected work"
              annotation="Five concept sites, each with its own design language — plus independent projects, live and deployed."
            />
            <Link href={portfolioHref("/work")} className="link-ink">
              All work →
            </Link>
          </div>
          <div>
            {featured.map((project, i) => (
              <Reveal key={project.slug}>
                <FeaturedProjectRow project={project} flip={i % 2 === 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Services ——— */}
      <section className={styles.section} aria-labelledby="services-heading">
        <div className="container-portfolio">
          <div className={styles.sectionHead}>
            <SectionHeading
              index="02"
              title="Services & capabilities"
              annotation="Ten services, one standard of execution. Business value first — technology chosen to serve it."
            />
            <Link href={portfolioHref("/services")} className="link-ink">
              Service details →
            </Link>
          </div>
          <div className={styles.ledger}>
            {services.map((service) => (
              <Link
                key={service.index}
                href={portfolioHref("/services")}
                className={styles.ledgerRow}
              >
                <span className={styles.ledgerIndex}>{service.index}</span>
                <span className={styles.ledgerTitle}>{service.title}</span>
                <span className={styles.ledgerValue}>{service.value}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Pricing snapshot ——— */}
      <section className={styles.section} aria-labelledby="pricing-heading">
        <div className="container-portfolio">
          <div className={styles.sectionHead}>
            <SectionHeading
              index="03"
              title="Transparent pricing"
              annotation="Starting prices, published. Final quotations follow approved scope — never the other way around."
            />
            <Link href={portfolioHref("/pricing")} className="link-ink">
              Full pricing →
            </Link>
          </div>
          <div className={styles.priceGrid}>
            {packageCategories.map((cat) => (
              <Link key={cat.id} href={portfolioHref("/pricing")} className={styles.priceCol}>
                <span className="mono-label">§{cat.index}</span>
                <h3 className={styles.priceName}>{cat.title}</h3>
                <span className={styles.priceFrom}>
                  From{" "}
                  {cat.id === "Websites"
                    ? "S$350"
                    : cat.id === "E-commerce"
                      ? "S$1,800"
                      : "S$10,000"}
                </span>
                <p className={styles.priceBlurb}>{priceBlurbs[cat.id]}</p>
                <span className={styles.priceArrow}>See packages →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Why ——— */}
      <section className={styles.section} aria-labelledby="why-heading">
        <div className="container-portfolio">
          <SectionHeading
            index="04"
            title="Why work with me"
            annotation="A small studio's attention with an engineer's discipline."
          />
          <div className={styles.whyGrid} style={{ marginTop: "2.5rem" }}>
            {whyItems.map((item) => (
              <Reveal key={item.title} className={styles.whyItem}>
                <h3 className={styles.whyTitle}>{item.title}</h3>
                <p className={styles.whyText}>{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Process ——— */}
      <section className={styles.section} aria-labelledby="process-heading">
        <div className="container-portfolio">
          <div className={styles.sectionHead}>
            <SectionHeading
              index="05"
              title="Development process"
              annotation="Five stages, defined checkpoints, no black boxes."
            />
          </div>
          <ol className={styles.processList}>
            {processSteps.map((step) => (
              <li key={step.index} className={styles.processItem}>
                <span className={styles.processIndex}>§{step.index}</span>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processText}>{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— Technology ——— */}
      <section className={styles.section} aria-labelledby="tech-heading">
        <div className="container-portfolio">
          <div className={styles.sectionHead}>
            <SectionHeading
              index="06"
              title="Engineering capabilities"
              annotation="The right tool for each project — introduced only when the work requires it."
            />
          </div>
          <table className={styles.specTable}>
            <caption className="sr-only">Technology stack by layer</caption>
            <tbody>
              {specRows.map((row) => (
                <tr key={row.layer}>
                  <th scope="row">{row.layer}</th>
                  <td>{row.stack}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ——— FAQ ——— */}
      <section className={styles.section} aria-labelledby="faq-heading">
        <div className="container-portfolio">
          <div className={styles.sectionHead}>
            <SectionHeading
              index="07"
              title="Frequently asked questions"
              annotation="The questions that come up before nearly every project."
            />
          </div>
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* ——— Final CTA ——— */}
      <section className={styles.finalCta} aria-label="Start a project">
        <div className="container-portfolio">
          <Reveal>
            <span className="mono-label">§08 — Start a project</span>
            <h2 className={`font-display ${styles.finalTitle}`} style={{ marginTop: "1rem" }}>
              Tell me what the business needs. I&apos;ll design around it.
            </h2>
            <p className={styles.finalText}>
              Send a short brief — what you&apos;re building, who it&apos;s for, your approximate budget and
              timeline. You&apos;ll get clarifying questions back, then a fixed-scope proposal. No pressure
              tactics, no fake urgency.
            </p>
            <div className={styles.finalActions}>
              <Cta href={portfolioHref("/contact")}>Start a project</Cta>
              <Cta href={`mailto:${site.email}`} variant="outline">
                Email directly
              </Cta>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
