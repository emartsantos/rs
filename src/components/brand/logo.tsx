import Image from "next/image";

const LOGO_RATIO = 1228 / 998;

type LogoProps = {
  /** "dark" = black mark for light backgrounds; "light" = white mark for dark backgrounds. */
  tone?: "dark" | "light";
  height?: number;
  className?: string;
  /** Accessible name. When omitted the logo is treated as decorative. */
  title?: string;
  priority?: boolean;
};

export function Logo({
  tone = "dark",
  height = 24,
  className,
  title,
  priority = false,
}: LogoProps) {
  const src = tone === "dark" ? "/logo-blck.png" : "/logo-white.png";
  return (
    <Image
      src={src}
      alt={title ?? ""}
      aria-hidden={title ? undefined : true}
      width={Math.round(height * LOGO_RATIO)}
      height={height}
      className={className}
      style={{ height, width: "auto" }}
      priority={priority}
    />
  );
}
