export const site = {
  name: "Raymart Santos",
  role: "Web Developer · Website Designer · Full Stack Developer",
  email: "santosraymart.dc@gmail.com",
  github: "https://github.com/emartsantos",
  repo: "https://github.com/emartsantos/rs",
  location: "Philippines",
  markets: ["Singapore", "United States", "Philippines", "International"],
  url: "https://santosraymart.vercel.app",
  description:
    "Custom websites, e-commerce stores, and web applications built around each business — not another template. Based in the Philippines, working with clients in Singapore, the United States, and internationally.",
} as const;

export const SITE_PATHS = {
  home: "/",
  work: "/work",
  concepts: "/concepts",
  services: "/services",
  pricing: "/pricing",
  about: "/about",
  contact: "/contact",
} as const;

export function portfolioHref(path: string): string {
  if (path === "/") return "/";
  return path;
}

export function absoluteUrl(path: string = "/"): string {
  return `${site.url}${path === "/" ? "/" : path}`;
}
