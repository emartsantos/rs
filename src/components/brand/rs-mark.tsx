import { useId } from "react";

type RsMarkProps = {
  className?: string;
  height?: number | string;
  title?: string;
  /** Decorative by default; pass a title to expose it to assistive tech. */
  "aria-hidden"?: boolean;
};

/**
 * RS monogram — the "Signal Tile".
 *
 * Concept: a single rounded badge with the R and S reversed out of a solid
 * field, so the two initials are read as one constructed object rather than
 * two letters set side by side. The R is built from a stem, a true
 * semicircular bowl and a single offset leg; the S is drawn from four
 * controlled cubic sweeps that keep a constant weighted aperture between the
 * two forms. Everything is knocked out of the tile with an SVG mask, so the
 * counter is always the true background colour and the mark reads with the
 * same contrast on the light canvas and on the ink bands.
 *
 * The tile is filled with `currentColor`, so it inherits text colour wherever
 * it is placed (navigation, footer, documents, empty states).
 */
export function RsMark({ className, height = 26, title, "aria-hidden": ariaHidden }: RsMarkProps) {
  const labelled = Boolean(title);
  const rawId = useId();
  const maskId = `rs-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;
  return (
    <svg
      className={className}
      height={height}
      viewBox="0 0 96 72"
      role={labelled ? "img" : undefined}
      aria-hidden={labelled ? undefined : (ariaHidden ?? true)}
      aria-label={labelled ? title : undefined}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {labelled && <title>{title}</title>}
      <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="96" height="72">
        <rect width="96" height="72" rx="17" fill="#fff" />
        <g fill="none" stroke="#000" strokeWidth={6} strokeLinecap="round" strokeLinejoin="round">
          {/* R — stem, true bowl, offset leg */}
          <path d="M18 20 V52" />
          <path d="M18 20 H36 A11 11 0 0 1 36 42 H18" />
          <path d="M34 42 L45 52" />
          {/* S — four weighted cubic sweeps, opening toward the R */}
          <path d="M78 26 C78 19 68 18 63 22 C58 26 64 31 70 33 C76 35 80 38 78.5 44 C77 49 67 50 60 45" />
        </g>
      </mask>
      <rect width="96" height="72" rx="17" fill="currentColor" mask={`url(#${maskId})`} />
    </svg>
  );
}

type WordmarkProps = {
  className?: string;
  /** Show the monogram alongside the name. */
  withMark?: boolean;
  markHeight?: number;
};

/** RS monogram + "Raymart Santos" wordmark lockup. */
export function Wordmark({ className, withMark = true, markHeight = 24 }: WordmarkProps) {
  return (
    <span className={className} style={{ display: "inline-flex", alignItems: "center", gap: "0.6rem" }}>
      {withMark && <RsMark height={markHeight} />}
      <span
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 600,
          fontSize: "1.0625rem",
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        Raymart Santos
      </span>
    </span>
  );
}
