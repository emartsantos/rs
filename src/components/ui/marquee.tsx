import styles from "./marquee.module.css";

type MarqueeProps = {
  items: string[];
  className?: string;
};

export function Marquee({ items, className = "" }: MarqueeProps) {
  const track = (
    <div className="marquee-track" aria-hidden="true">
      {items.map((item, i) => (
        <span key={`${item}-${i}`} className={styles.item}>
          {item}
        </span>
      ))}
    </div>
  );

  return (
    <div className={`marquee ${className}`} aria-hidden="true">
      {track}
      {track}
    </div>
  );
}
