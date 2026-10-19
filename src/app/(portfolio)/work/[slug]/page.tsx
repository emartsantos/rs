import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Cta } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioHref } from "@/lib/site";
import { allProjects, getProject, unsplashUrl } from "@/data/projects";
import styles from "./case-study.module.css";

export async function generateStaticParams() {
  return allProjects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — ${project.type}`,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}` },
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    notFound();
  }

  const cs = project.caseStudy;

  return (
    <div>
      {/* ——— Hero ——— */}
      <section className={styles.hero} aria-labelledby="case-title">
        <div className="shell">
          <Link href={portfolioHref("/work")} className={styles.back}>
            <ArrowLeft size={15} aria-hidden="true" /> All projects
          </Link>

          <div className={styles.heroTop}>
            <span className="tag tag-solid">{project.type}</span>
            <span className="eyebrow">
              {project.category} · {project.industry}
            </span>
          </div>

          <h1 id="case-title" className={styles.title}>
            {project.title}
          </h1>
          <p className={styles.tagline}>{project.tagline}</p>

          <div className={styles.actions}>
            {project.externalUrl ? (
              <a
                href={project.externalUrl}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.liveVerified ? "Visit live site" : "Visit site"}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ) : null}
            {project.sourceUrl ? (
              <a
                href={project.sourceUrl}
                className="btn btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View source
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ) : null}
            <Cta href={portfolioHref("/contact")} variant="ghost">
              Start a similar project
            </Cta>
          </div>

          {project.externalUrl && !project.liveVerified ? (
            <p className={styles.note}>
              Deployment not verified at the time of writing — the source repository is linked above.
            </p>
          ) : null}
        </div>
      </section>

      {/* ——— Cover ——— */}
      <section className={styles.coverSection} aria-label="Project cover">
        <div className="shell">
          <div className={`${styles.cover} img-wrapper`}>
            <Image
              src={unsplashUrl(project.cover.photoId, 1800)}
              alt={project.cover.alt}
              fill
              sizes="(min-width: 1100px) 90vw, 100vw"
              className={styles.coverImage}
              priority
            />
          </div>
        </div>
      </section>

      {/* ——— Meta ——— */}
      <section className={`${styles.meta} section-sm`} aria-label="Project details">
        <div className="shell">
          <dl className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <dt className="eyebrow">Category</dt>
              <dd>{project.category}</dd>
            </div>
            <div className={styles.metaItem}>
              <dt className="eyebrow">Industry</dt>
              <dd>{project.industry}</dd>
            </div>
            <div className={styles.metaItem}>
              <dt className="eyebrow">Stack</dt>
              <dd>{project.techStack.join(" · ")}</dd>
            </div>
            <div className={styles.metaItem}>
              <dt className="eyebrow">Comparable package</dt>
              <dd>{project.suggestedPackage}</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ——— About ——— */}
      <section className="section" aria-labelledby="desc-heading">
        <div className="shell">
          <Reveal>
            <SectionHeading id="desc-heading" index="00" title="About this project" />
            <p className={styles.prose}>{project.description}</p>
          </Reveal>
        </div>
      </section>

      {cs ? (
        <>
          {/* Overview */}
          <section className={`${styles.bandAlt} section`} aria-labelledby="overview-heading">
            <div className="shell">
              <Reveal>
                <SectionHeading id="overview-heading" index="01" title="Overview" />
                <div className={styles.prose}>
                  <p>{cs.overview}</p>
                  <p>{cs.businessScenario}</p>
                  <p>{cs.audience}</p>
                  <p>{cs.challenge}</p>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Design */}
          <section className="section" aria-labelledby="design-heading">
            <div className="shell">
              <Reveal>
                <SectionHeading id="design-heading" index="02" title="Design" />
                <div className={styles.twoCol}>
                  <div className={styles.colItem}>
                    <h3 className={styles.subheading}>Design strategy</h3>
                    <p>{cs.designStrategy}</p>
                  </div>
                  <div className={styles.colItem}>
                    <h3 className={styles.subheading}>Visual direction</h3>
                    <p>{cs.visualDirection}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Information architecture */}
          <section className={`${styles.bandAlt} section`} aria-labelledby="ia-heading">
            <div className="shell">
              <Reveal>
                <SectionHeading id="ia-heading" index="03" title="Information architecture" />
                <div className={styles.tableWrap}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th scope="col">Page</th>
                        <th scope="col">Purpose</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cs.informationArchitecture.map((item) => (
                        <tr key={item.page}>
                          <td className={styles.cellStrong}>{item.page}</td>
                          <td>{item.purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
            </div>
          </section>

          {/* UX decisions */}
          <section className="section" aria-labelledby="ux-heading">
            <div className="shell">
              <Reveal>
                <SectionHeading id="ux-heading" index="04" title="UX decisions" />
                <div className={styles.cardGrid}>
                  {cs.uxDecisions.map((item) => (
                    <article key={item.decision} className={styles.card}>
                      <h3 className={styles.cardTitle}>{item.decision}</h3>
                      <p className={styles.cardText}>{item.rationale}</p>
                    </article>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* Features */}
          <section className={`${styles.bandAlt} section`} aria-labelledby="features-heading">
            <div className="shell">
              <Reveal>
                <SectionHeading id="features-heading" index="05" title="Key features" />
                <div className={styles.cardGrid}>
                  {cs.features.map((item) => (
                    <article key={item.feature} className={styles.card}>
                      <h3 className={styles.cardTitle}>{item.feature}</h3>
                      <p className={styles.cardText}>{item.detail}</p>
                    </article>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>

          {/* Technology */}
          <section className="section" aria-labelledby="tech-heading">
            <div className="shell">
              <Reveal>
                <SectionHeading id="tech-heading" index="06" title="Technology" />
                <div className={styles.tableWrap}>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th scope="col">Choice</th>
                        <th scope="col">Reason</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cs.technology.map((item) => (
                        <tr key={item.choice}>
                          <td className={styles.cellStrong}>{item.choice}</td>
                          <td>{item.reason}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Delivery */}
          <section className={`${styles.bandAlt} section`} aria-labelledby="delivery-heading">
            <div className="shell">
              <Reveal>
                <SectionHeading id="delivery-heading" index="07" title="Delivery" />
                <div className={styles.twoCol}>
                  <div className={styles.colItem}>
                    <h3 className={styles.subheading}>Responsive behaviour</h3>
                    <p>{cs.responsive}</p>
                  </div>
                  <div className={styles.colItem}>
                    <h3 className={styles.subheading}>Performance considerations</h3>
                    <p>{cs.performance}</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Gallery */}
          <section className="section" aria-labelledby="gallery-heading">
            <div className="shell">
              <Reveal>
                <SectionHeading id="gallery-heading" index="08" title="Gallery" />
                <div className={styles.gallery}>
                  {cs.gallery.map((image) => (
                    <figure key={image.photoId} className={styles.galleryItem}>
                      <div className={`${styles.galleryWrap} img-wrapper`}>
                        <Image
                          src={unsplashUrl(image.photoId, 1400)}
                          alt={image.alt}
                          fill
                          sizes="(min-width: 1100px) 45vw, 100vw"
                          className={styles.galleryImage}
                        />
                      </div>
                      <figcaption className={styles.galleryCaption}>{image.alt}</figcaption>
                    </figure>
                  ))}
                </div>
              </Reveal>
            </div>
          </section>
        </>
      ) : null}

      {/* ——— CTA ——— */}
      <section className={`${styles.finalCta} band-ink`} aria-label="Next steps">
        <div className="shell">
          <Reveal>
            <h2 className={styles.finalTitle}>
              Want something like this for <span className="serif">your business?</span>
            </h2>
            <div className={styles.finalBottom}>
              <p className={styles.finalSub}>
                Tell me about your goals and constraints — I&apos;ll return a clear
                proposal with a fixed scope and a quotation.
              </p>
              <div className={styles.finalActions}>
                <Cta href={portfolioHref("/contact")}>Start a project</Cta>
                <Cta href={portfolioHref("/work")} variant="secondary">
                  Back to all work
                </Cta>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
