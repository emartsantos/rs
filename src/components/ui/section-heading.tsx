import styles from "./section-heading.module.css";

type SectionHeadingProps = {
  index: string;
  title: string;
  annotation?: string;
  className?: string;
  tag?: "h2" | "h3";
  id?: string;
};

export function SectionHeading({
  index,
  title,
  annotation,
  className = "",
  tag: Tag = "h2",
  id,
}: SectionHeadingProps) {
  return (
    <header className={`${styles.head} ${className}`}>
      <span className={`${styles.index} eyebrow`} aria-hidden="true">
        {index}
      </span>
      <div className={styles.body}>
        <Tag id={id} className={styles.title}>{title}</Tag>
        {annotation && <p className={styles.note}>{annotation}</p>}
      </div>
    </header>
  );
}
