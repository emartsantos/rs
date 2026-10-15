export const site = {
  name: "Raymart Santos",
  role: "Web Developer · Website Designer · Full-Stack Developer",
  email: "santosraymart.dc@gmail.com",
  github: "https://github.com/emartsantos",
  repo: "https://github.com/emartsantos/portfolio",
  location: "Philippines",
  markets: ["Singapore", "United States", "Philippines", "International"],
  url: "https://emartsantos.github.io/portfolio",
  description:
    "Custom websites, e-commerce stores, and web applications built around each business — not another template. Transparent pricing from S$350. Based in the Philippines, working with clients in Singapore, the United States, and internationally.",
} as const;

export const SITE_PATHS = {
  home: "/",
  work: "/work",
  services: "/services",
  pricing: "/pricing",
  about: "/about",
  contact: "/contact",
} as const;

export function portfolioHref(path: string): string {
  return `/portfolio${path === "/" ? "/" : path}`;
}

export function absoluteUrl(path: string = "/"): string {
  return `${site.url}${path === "/" ? "/" : path}`;
}
