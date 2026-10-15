export type Service = {
  index: string;
  title: string;
  value: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    index: "01",
    title: "Landing Page Development",
    value:
      "One page with one job: turning a visitor into an inquiry. Built around your offer, your audience, and a single clear action — not a generic template with your logo dropped in.",
    deliverables: ["Custom visual direction", "Responsive single page", "Inquiry form", "Basic SEO & performance"],
  },
  {
    index: "02",
    title: "Corporate Website Development",
    value:
      "Multi-page websites for established businesses — clear service architecture, credible presentation, and a structure your sales team is happy to send prospects to.",
    deliverables: ["Up to 20 agreed pages", "Custom navigation & layouts", "Lead-generation forms", "CMS when in scope"],
  },
  {
    index: "03",
    title: "Premium Website Redesign",
    value:
      "For sites that work but no longer represent the business. Rebuild the design, structure, and performance while preserving what already earns trust.",
    deliverables: ["Design audit", "New art direction", "Content migration plan", "Performance rebuild"],
  },
  {
    index: "04",
    title: "Shopify Store Development",
    value:
      "Stores configured properly on Shopify — merchandising that sells, checkout you don't have to babysit, and an admin your team can actually run.",
    deliverables: ["Theme setup & customization", "Product & collection structure", "App configuration", "Handover training"],
  },
  {
    index: "05",
    title: "E-commerce Development",
    value:
      "Online stores beyond the basics: product discovery, filtering, variants, and merchandising hierarchies that match how people really shop.",
    deliverables: ["Storefront design", "Catalog & filtering", "Cart & checkout integration", "Store management docs"],
  },
  {
    index: "06",
    title: "CMS Integration",
    value:
      "Give your team control of their own content. Structured content models, editor-friendly fields, and templates that hold the design together.",
    deliverables: ["Content modeling", "Editor experience setup", "Template development", "Editor documentation"],
  },
  {
    index: "07",
    title: "Custom Admin Dashboards",
    value:
      "Internal tools for the work that runs your business — orders, requests, bookings, approvals — designed around your actual workflow, not a generic admin theme.",
    deliverables: ["Role-based access", "CRUD workflows", "Search & filtering", "Administrator documentation"],
  },
  {
    index: "08",
    title: "Full-Stack Web Applications",
    value:
      "Products and platforms with real logic behind them: authentication, data, integrations, and the operational workflows your business depends on.",
    deliverables: ["Technical architecture", "Database design", "API integrations", "Testing & deployment"],
  },
  {
    index: "09",
    title: "Website Performance Optimization",
    value:
      "Slow sites lose buyers and rankings. Audit, fix, and measure — Core Web Vitals, image pipelines, font loading, and script budgets.",
    deliverables: ["Performance audit", "Implementation of fixes", "Before/after measurement", "Maintenance guidance"],
  },
  {
    index: "10",
    title: "Website Maintenance",
    value:
      "Keep a live site healthy: dependency updates, small changes, monitoring, and a real person to call when something breaks.",
    deliverables: ["Scheduled updates", "Content changes", "Uptime & regression checks", "Priority support channel"],
  },
];
