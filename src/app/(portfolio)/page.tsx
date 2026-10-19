import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Cta } from "@/components/ui/cta";
import { Accordion } from "@/components/ui/accordion";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Marquee } from "@/components/ui/marquee";
import { FeaturedProjectRow } from "@/components/portfolio/featured-project-row";
import { portfolioHref, site } from "@/lib/site";
import { independentProjects, unsplashUrl } from "@/data/projects";
import { services } from "@/data/services";
import { packages, packageCategories } from "@/data/packages";
import { concepts } from "@/data/concepts";
import { processSteps } from "@/data/process";
import { faqItems } from "@/data/faq";
import styles from "./home.module.css";

export const metadata: Metadata = {
  title: { absolute: `${site.name} — Web Developer & Website Designer` },
  description: site.description,
  alternates: { canonical: site.url + "/" },
};

const marqueeItems = [
  "Custom websites",
  "E-commerce",
  "Web applications",
  "Design systems",
  "Next.js & React",
  "Performance",
  "Accessibility",
  "CMS integration",
];

const heroFacts = [
  { label: "Availability", value: "Open to new projects" },
  { label: "Markets", value: "Singapore · United States · PH" },
  { label: "Focus", value: "Custom design & development" },
  { label: "Core stack", value: "Next.js · React · TypeScript" },
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
    stack: "WCAG 2.2 AA target · Core Web Vitals · keyboard navigation · reduced motion support.",
  },
  {
    layer: "Delivery",
    stack: "GitHub Pages & Vercel · CI pipelines · documentation and handover.",
  },
];

const packagesByCategory = packageCategories.map((cat) => ({
  ...cat,
  items: packages.filter((p) => p.category === cat.id),
}));

export default function HomePage() {
  return (
    <>
      {/* ——— Hero ——— */}
      <section className={`${styles.hero} band-ink`} aria-label="Introduction">
        <div className={`shell ${styles.heroInner}`}>
          <div className={styles.heroTop}>
            <span className="eyebrow">Independent web developer &amp; designer</span>
            <span className={`eyebrow ${styles.heroLoc}`}>Philippines · Working worldwide</span>
          </div>

          <div className={styles.heroMain}>
            <Reveal>
              <h1 className={styles.heroTitle}>
                Websites and digital products <span className="serif">built around</span> your business.
              </h1>
            </Reveal>

            <Reveal className="reveal-delay-1">
              <div className={styles.heroLower}>
                <p className={styles.heroSub}>
                  I design and develop custom websites, online stores, and business
                  applications — with a focus on thoughtful design, responsive
                  experiences, and reliable implementation.
                </p>
                <div className={styles.heroActions}>
                  <Cta href={portfolioHref("/contact")}>Start a project</Cta>
                  <Cta href={portfolioHref("/work")} variant="secondary">
                    View selected work
                  </Cta>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="reveal-delay-2">
            <dl className={styles.heroFacts}>
              {heroFacts.map((fact) => (
                <div key={fact.label} className={styles.fact}>
                  <dt className="eyebrow">{fact.label}</dt>
                  <dd className={styles.factValue}>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ——— Marquee ——— */}
      <div className={styles.marqueeBand}>
        <Marquee items={marqueeItems} />
      </div>

      {/* ——— Selected work ——— */}
      <section className="section" aria-labelledby="work-heading">
        <div className="shell">
          <Reveal>
            <SectionHeading
              id="work-heading"
              index="01"
              title="Selected work"
              annotation="Five independent projects — each with its own design language, built and documented end to end. Source and live deployments are linked wherever they exist."
            />
          </Reveal>

          <div className={styles.workList}>
            {independentProjects.map((project, index) => (
              <Reveal key={project.slug}>
                <FeaturedProjectRow project={project} index={index} flip={index % 2 === 1} />
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className={styles.foot}>
              <Link href={portfolioHref("/work")} className={styles.footLink}>
                View all projects <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ——— Services ——— */}
      <section className="section band-ink" aria-labelledby="services-heading">
        <div className="shell">
          <Reveal>
            <SectionHeading
              id="services-heading"
              index="02"
              title="Services"
              annotation="Six services — from corporate websites to enterprise web applications. Each engagement is scoped and delivered with the same rigour, whatever its size."
            />
          </Reveal>

          <ol className={styles.serviceList}>
            {services.map((service) => (
              <Reveal as="li" key={service.index} className={styles.serviceRow}>
                <span className={styles.serviceNum} aria-hidden="true">
                  {service.index}
                </span>
                <div className={styles.serviceBody}>
                  <h3 className={styles.serviceName}>{service.title}</h3>
                  <p className={styles.serviceValue}>{service.value}</p>
                  <ul className={styles.serviceTags} aria-label={`${service.title} deliverables`}>
                    {service.deliverables.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <Link
                  href={portfolioHref("/contact")}
                  className={styles.serviceCta}
                  aria-label={`Discuss ${service.title}`}
                >
                  Discuss <ArrowUpRight size={15} aria-hidden="true" />
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— Website Concepts ——— */}
      <section className="section" aria-labelledby="concepts-heading">
        <div className="shell">
          <Reveal>
            <SectionHeading
              id="concepts-heading"
              index="03"
              title="Website concepts"
              annotation="Five design directions for common kinds of business — illustrations of range and craft, clearly labelled as concepts rather than delivered client work."
            />
          </Reveal>

          <div className={styles.conceptGrid}>
            {concepts.map((concept) => (
              <Reveal key={concept.id} className={styles.conceptCell}>
                <Link href={portfolioHref("/concepts")} className={styles.conceptCard}>
                  <div className={`${styles.conceptMedia} img-wrapper`}>
                    <Image
                      src={unsplashUrl(concept.cover.photoId, 1400)}
                      alt={concept.cover.alt}
                      fill
                      sizes="(min-width: 1100px) 45vw, (min-width: 640px) 50vw, 100vw"
                      className={styles.conceptImage}
                    />
                    <span className={`tag tag-solid ${styles.conceptBadge}`}>
                      Concept {concept.letter}
                    </span>
                  </div>
                  <div className={styles.conceptBody}>
                    <h3 className={styles.conceptTitle}>{concept.title}</h3>
                    <p className={styles.conceptSummary}>{concept.summary}</p>
                    <p className={styles.conceptSuitable}>
                      <span className="eyebrow">Suitable for</span>
                      <span>{concept.suitableFor}</span>
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className={styles.foot}>
              <Link href={portfolioHref("/concepts")} className={styles.footLink}>
                Explore all concepts <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ——— Engagements ——— */}
      <section className={`${styles.engagements} section`} aria-labelledby="engagements-heading">
        <div className="shell">
          <Reveal>
            <SectionHeading
              id="engagements-heading"
              index="04"
              title="Engagements"
              annotation="Five ways to work together, from a focused corporate site to a full application. Scope and quotation are confirmed in writing before any work begins."
            />
          </Reveal>

          <div className={styles.engagementGrid}>
            {packagesByCategory.map((cat) => (
              <Reveal key={cat.id} className={styles.engagementCell}>
                <article className={styles.engagementCard}>
                  <span className={styles.engagementIndex} aria-hidden="true">
                    {cat.index}
                  </span>
                  <h3 className={styles.engagementTitle}>{cat.title}</h3>
                  <p className={styles.engagementBlurb}>{cat.blurb}</p>
                  <ul className={styles.engagementList}>
                    {cat.items.map((pkg) => (
                      <li key={pkg.id} className={styles.engagementItem}>
                        <span className={styles.engagementName}>{pkg.name}</span>
                        <span className={styles.engagementIdeal}>{pkg.ideal}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href={portfolioHref("/pricing")} className={styles.engagementLink}>
                    View {cat.title.toLowerCase()} <ArrowUpRight size={15} aria-hidden="true" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ——— Process ——— */}
      <section className="section" aria-labelledby="process-heading">
        <div className="shell">
          <Reveal>
            <SectionHeading
              id="process-heading"
              index="05"
              title="Process"
              annotation="Six stages, defined checkpoints, no black boxes. The exact steps adapt to the project — the discipline does not."
            />
          </Reveal>

          <ol className={styles.processList}>
            {processSteps.map((step) => (
              <Reveal as="li" key={step.index} className={styles.processRow}>
                <span className={styles.processNum} aria-hidden="true">
                  {step.index}
                </span>
                <div className={styles.processBody}>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processDesc}>{step.description}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— Engineering ——— */}
      <section className="section" aria-labelledby="tech-heading">
        <div className="shell">
          <Reveal>
            <SectionHeading
              id="tech-heading"
              index="06"
              title="Engineering"
              annotation="The right tool for each project — introduced only when the work requires it."
            />
          </Reveal>

          <div className={styles.techTable}>
            <table>
              <caption className="sr-only">Technology stack by layer</caption>
              <tbody>
                {specRows.map((row) => (
                  <tr key={row.layer} className={styles.techRow}>
                    <th scope="row">{row.layer}</th>
                    <td>{row.stack}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ——— FAQ ——— */}
      <section className={`${styles.faq} section`} aria-labelledby="faq-heading">
        <div className="shell">
          <Reveal>
            <SectionHeading
              id="faq-heading"
              index="07"
              title="Questions"
              annotation="Common questions answered directly."
            />
          </Reveal>

          <div className={styles.faqWrap}>
            <Accordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* ——— Final CTA ——— */}
      <section className={`${styles.finalCta} band-ink`} aria-label="Start a project">
        <div className="shell">
          <Reveal>
            <h2 className={styles.finalTitle}>
              Tell me what the business needs. <span className="serif">I&rsquo;ll design around it.</span>
            </h2>
            <div className={styles.finalBottom}>
              <p className={styles.finalSub}>
                Send a short brief — what you&rsquo;re building, who it&rsquo;s for, your
                approximate scope and timeline. You&rsquo;ll get clarifying questions
                back, then a proposal with a fixed scope. No pressure tactics, no fake urgency.
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
