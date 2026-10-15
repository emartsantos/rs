import styles from "./section-heading.module.css";

type SectionHeadingProps = {
  index: string;
  title: string;
  annotation?: string;
  className?: string;
};

export function SectionHeading({ index, title, annotation, className = "" }: SectionHeadingProps) {
  return (
    <div className={`${styles.heading} ${className}`}>
      <span className="mono-label" aria-hidden="true">
        §{index}
      </span>
      <h2 className={`font-display-md text-[clamp(1.6rem,3.2vw,2.4rem)] ${styles.title}`}>{title}</h2>
      {annotation ? <p className={`annotation ${styles.annotation}`}>{annotation}</p> : null}
    </div>
  );
}
