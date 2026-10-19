import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { portfolioHref } from "@/lib/site";
import { unsplashUrl, type Project } from "@/data/projects";
import styles from "./featured-project-row.module.css";

type FeaturedProjectRowProps = {
  project: Project;
  /** Alternates the image side of the row on large screens. */
  flip?: boolean;
  /** Index shown in the meta line, in the style of a project ledger. */
  index?: number;
};

export function FeaturedProjectRow({ project, flip = false, index }: FeaturedProjectRowProps) {
  const caseHref = portfolioHref(`/work/${project.slug}`);

  return (
    <article className={`${styles.row} ${flip ? styles.flip : ""}`}>
      <Link
        href={caseHref}
        className={styles.media}
        aria-label={`View case study: ${project.title}`}
      >
        <div className={`${styles.frame} img-wrapper`}>
          <Image
            src={unsplashUrl(project.cover.photoId, 1600)}
            alt={project.cover.alt}
            fill
            sizes="(min-width: 900px) 55vw, 100vw"
            className={styles.image}
          />
          <span className={`tag tag-solid ${styles.badge}`}>{project.type}</span>
        </div>
      </Link>

      <div className={styles.body}>
        <div className={styles.meta}>
          {typeof index === "number" && (
            <span className={styles.num} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
          )}
          <span>{project.category}</span>
          <span className={styles.sep} aria-hidden="true" />
          <span>{project.industry}</span>
          {project.liveVerified && (
            <>
              <span className={styles.sep} aria-hidden="true" />
              <span className={styles.live}>
                <span className="dot" aria-hidden="true" />
                Live
              </span>
            </>
          )}
        </div>

        <h3 className={styles.title}>
          <Link href={caseHref} className={styles.titleLink}>
            {project.title}
          </Link>
        </h3>

        <p className={styles.tagline}>{project.tagline}</p>

        <ul className={styles.tech} aria-label="Technologies used">
          {project.techStack.map((t) => (
            <li key={t} className="tag">
              {t}
            </li>
          ))}
        </ul>

        <div className={styles.actions}>
          <Link href={caseHref} className={styles.readLink}>
            Read the build <ArrowRight size={15} aria-hidden="true" />
          </Link>
          {project.externalUrl ? (
            <a
              href={project.externalUrl}
              className={styles.extLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              View live site <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ) : null}
          {project.sourceUrl ? (
            <a
              href={project.sourceUrl}
              className={styles.extLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Source <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
