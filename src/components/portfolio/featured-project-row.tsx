import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioHref } from "@/lib/site";
import { unsplashUrl, type Project } from "@/data/projects";
import styles from "./featured-project-row.module.css";

type FeaturedProjectRowProps = {
  project: Project;
  flip?: boolean;
};

export function FeaturedProjectRow({ project, flip = false }: FeaturedProjectRowProps) {
  const caseHref = portfolioHref(`/work/${project.slug}`);
  const demoHref = project.liveDemoPath ?? null;

  return (
    <article className={`${styles.row} ${flip ? styles.flip : ""}`}>
      <Link href={caseHref} className={styles.imageLink} aria-label={`View case study: ${project.title}`}>
        <div className={styles.imageWrap}>
          <Image
            src={unsplashUrl(project.cover.photoId, 1400)}
            alt={project.cover.alt}
            fill
            sizes="(min-width: 960px) 55vw, 100vw"
            className={styles.image}
          />
          <span className={styles.typeBadge}>{project.type}</span>
        </div>
      </Link>

      <div className={styles.body}>
        <div className={styles.meta}>
          <span className="mono-label">{project.category}</span>
          <span className="mono-label" aria-hidden="true">
            ·
          </span>
          <span className="mono-label">{project.industry}</span>
        </div>
        <h3 className={`font-display-md ${styles.title}`}>
          <Link href={caseHref} className={styles.titleLink}>
            {project.title}
          </Link>
        </h3>
        <p className={styles.tagline}>{project.tagline}</p>
        <div className={styles.actions}>
          <Link href={caseHref} className="link-ink">
            Case study →
          </Link>
          {demoHref ? (
            <a href={demoHref} className="link-ink" target="_blank" rel="noopener noreferrer">
              Live demo ↗
            </a>
          ) : null}
          {project.externalUrl ? (
            <a href={project.externalUrl} className="link-ink" target="_blank" rel="noopener noreferrer">
              Visit site ↗
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
