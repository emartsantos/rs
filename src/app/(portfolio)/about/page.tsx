import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Cta } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { RsMark } from "@/components/brand/rs-mark";
import { portfolioHref, site } from "@/lib/site";
import styles from "./about.module.css";

const facts = [
  { label: "Based in", value: site.location },
  { label: "Markets", value: "Singapore · United States · PH · International" },
  { label: "Role", value: "Web Developer · Website Designer · Full Stack Developer" },
  { label: "Availability", value: "Open to new projects" },
];

const interests = [
  "Building accessible, performant web experiences",
  "Design systems that scale across teams and products",
  "Architectures that put the server first with Next.js",
  "Editorial design on the web — typography, hierarchy, composition",
  "Helping small businesses compete with better digital tools",
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
    stack: "WCAG 2.2 AA as a working target · Core Web Vitals · keyboard navigation · reduced motion support.",
  },
  {
    layer: "Delivery",
    stack: "GitHub Pages & Vercel deployments · CI pipelines · documentation and handover sessions.",
  },
];

export const metadata: Metadata = {
  title: "About",
  description:
    "Raymart Santos — Web Developer, Website Designer, Full Stack Developer. Based in the Philippines, working with clients in Singapore, the United States, and internationally.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        index="04"
        eyebrow="About"
        title={
          <>
            A small studio&rsquo;s attention, an <span className="serif">engineer&rsquo;s</span> discipline.
          </>
        }
        note={site.role}
      >
        <Cta href={portfolioHref("/contact")}>Start a project</Cta>
        <Cta href={portfolioHref("/work")} variant="secondary">
          View selected work
        </Cta>
      </PageHero>

      {/* ——— Bio ——— */}
      <section className="section" aria-label="Biography">
        <div className="shell">
          <div className={styles.bio}>
            <aside className={styles.facts}>
              <div className={styles.factsInner}>
                <RsMark height={34} className={styles.mark} title="Raymart Santos monogram" />
                <dl className={styles.factList}>
                  {facts.map((fact) => (
                    <div key={fact.label} className={styles.factRow}>
                      <dt className="eyebrow">{fact.label}</dt>
                      <dd>{fact.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>

            <div className={styles.prose}>
              <p className={styles.leadParagraph}>
                I&apos;m {site.name}, a web developer and website designer based in{" "}
                {site.location}. I work with clients in Singapore, the United States,
                the Philippines, and internationally.
              </p>
              <p>
                My focus is building custom websites, e-commerce stores, and web
                applications that serve the business — not resold templates. Every
                project starts from your offer, your audience, and the competitors you
                actually face.
              </p>
              <p>
                Rather than claim experience I can&apos;t show, I built a body of
                independent projects I can point to directly — a freight logistics site,
                a telehealth platform, a wood fired pizzeria, a specialty coffee roaster,
                and more. Each one is live, each one is mine, and each one is linked to
                its source so you can see exactly how it was made.
              </p>
              <p>
                That work taught me two things I carry into every engagement: good design
                is invisible when it works, and engineering discipline is what keeps a
                project maintainable long after launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ——— Interests ——— */}
      <section className={`${styles.bandAlt} section`} aria-labelledby="interests-heading">
        <div className="shell">
          <Reveal>
            <SectionHeading id="interests-heading" index="05" title="What I care about" />
          </Reveal>
          <ol className={styles.interests}>
            {interests.map((item, i) => (
              <li key={item} className={styles.interest}>
                <span className={styles.interestNum} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ——— Capabilities ——— */}
      <section className="section" aria-labelledby="tech-heading">
        <div className="shell">
          <Reveal>
            <SectionHeading
              id="tech-heading"
              index="06"
              title="Engineering capabilities"
              annotation="The right tool for each project — introduced only when the work requires it."
            />
          </Reveal>
          <div className={styles.tableWrap}>
            <table className={styles.table}>
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
        </div>
      </section>

      {/* ——— Final CTA ——— */}
      <section className={`${styles.finalCta} band-ink`} aria-label="Start a project">
        <div className="shell">
          <Reveal>
            <h2 className={styles.finalTitle}>
              Let&rsquo;s <span className="serif">work together.</span>
            </h2>
            <div className={styles.finalBottom}>
              <p className={styles.finalSub}>
                Send a short brief — what you&rsquo;re building, who it&rsquo;s for, your
                approximate scope and timeline.
              </p>
              <div className={styles.finalActions}>
                <Cta href={portfolioHref("/contact")}>Start a project</Cta>
                <Cta href={portfolioHref("/work")} variant="secondary">
                  View selected work
                </Cta>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
