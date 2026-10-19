export type PkgCategory = "Websites" | "E-commerce" | "Custom Software";

export type Pkg = {
  id: string;
  name: string;
  category: PkgCategory;
  /** One-line "best fit" for the comparison and cards. */
  ideal: string;
  /** A short positioning line under the name. */
  positioning: string;
  scope: string[];
  exclusions: string;
  /** Restrained emphasis — the most comprehensive website engagement. */
  featured?: boolean;
};

export const packages: Pkg[] = [
  {
    id: "corporate-website",
    name: "Corporate Website",
    category: "Websites",
    positioning: "A credible multi page presence for an established company.",
    ideal: "Companies replacing an outdated site with a structured, professional presence.",
    scope: [
      "Up to 10 approved pages",
      "Custom corporate visual direction",
      "Responsive layouts",
      "Contact and inquiry forms",
      "Basic SEO setup",
      "Performance and accessibility checks",
      "Deployment and handover",
    ],
    exclusions:
      "Content writing, extensive migration, custom integrations, and ongoing support are quoted separately unless included in your proposal.",
  },
  {
    id: "premium-corporate",
    name: "Premium Corporate Website",
    category: "Websites",
    positioning: "Bespoke art direction and a design system built for the brand.",
    ideal: "Brands that need a highly differentiated presence, not a template.",
    scope: [
      "Up to 20 approved pages",
      "Bespoke art direction",
      "Custom page compositions",
      "Advanced visual interactions where appropriate",
      "CMS integration when included in scope",
      "SEO and performance optimization",
      "Testing and documentation",
    ],
    exclusions:
      "Complex integrations, multilingual systems, and extensive content migration require separate scoping.",
    featured: true,
  },
  {
    id: "advanced-ecommerce",
    name: "Advanced E-commerce",
    category: "E-commerce",
    positioning: "A bespoke storefront designed around how the range is actually sold.",
    ideal: "Growing retail brands whose catalog deserves better than a stock theme.",
    scope: [
      "Custom storefront design",
      "Product and collection presentation",
      "Shopping experience improvements",
      "Product filtering and search where supported",
      "Cart and checkout integration",
      "Responsive shopping experience",
      "Platform configuration and handover",
    ],
    exclusions:
      "Final scope depends on the chosen commerce platform, product count, integrations, and migration requirements. Headless builds, ERP systems, and setups spanning several markets are assessed separately.",
  },
  {
    id: "website-admin",
    name: "Website + Admin Dashboard",
    category: "Custom Software",
    positioning: "A public website paired with a secure internal system.",
    ideal: "Businesses replacing spreadsheets and manual handoffs with a managed platform.",
    scope: [
      "A bespoke public website",
      "Custom admin interface",
      "Content management backed by a database",
      "Approved create, read, update, and delete workflows",
      "Authentication and permissions enforced on the server",
      "Testing and deployment documentation",
    ],
    exclusions:
      "Advanced workflows, complex permission models, third party integrations, and extensive reporting can change the estimate.",
  },
  {
    id: "enterprise-app",
    name: "Enterprise Web Application",
    category: "Custom Software",
    positioning: "Application development guided by discovery, for complex operations.",
    ideal: "Organisations with custom workflows, data, permissions, and integrations.",
    scope: [
      "Requirements discovery",
      "Technical architecture",
      "Custom application design",
      "Modules tailored to your business",
      "Secure authentication and authorization",
      "Database and API development",
      "Approved integrations",
      "Testing and deployment planning",
      "Documentation and handover",
    ],
    exclusions:
      "An engagement guided by discovery — not a fixed quote. Large integrations, regulated workloads, enterprise SSO, security audits, and ongoing support must be separately assessed. Enterprise projects may require a paid discovery phase.",
  },
];

export const packageCategories: Array<{
  id: PkgCategory;
  index: string;
  title: string;
  blurb: string;
}> = [
  {
    id: "Websites",
    index: "01",
    title: "Websites",
    blurb:
      "From a structured corporate presence to a fully bespoke brand site. Every project starts with a visual direction built around the business — never a resold theme.",
  },
  {
    id: "E-commerce",
    index: "02",
    title: "E-commerce",
    blurb:
      "Storefronts designed around the catalog and how it is sold, with the platform and integrations chosen to fit the business.",
  },
  {
    id: "Custom Software",
    index: "03",
    title: "Custom Software",
    blurb:
      "Public websites backed by internal systems, or full operational platforms. These engagements are guided by discovery, where the feature set is approved before a build begins.",
  },
];

export const pricingConditions: string[] = [
  "Every engagement is quoted from confirmed, written requirements — never the other way around.",
  "Domain registration, hosting, paid apps, and third party subscriptions are quoted separately unless included in your proposal.",
  "Content writing, extensive migration, custom integrations, and ongoing support are agreed in writing before work begins.",
  "Additional features or changes outside the approved scope may require a separate quotation.",
  "Enterprise engagements may begin with a paid discovery phase before a final build estimate is issued.",
];

export const comparisonRows: Array<{
  label: string;
  values: Record<string, string>;
}> = [
  {
    label: "Best fit",
    values: {
      "Corporate Website": "Established companies with several service lines",
      "Premium Corporate Website": "Brands needing differentiated art direction",
      "Advanced E-commerce": "Growing retail brands with a real catalog",
      "Website + Admin Dashboard": "Businesses replacing spreadsheet workflows",
      "Enterprise Web Application": "Organisations with complex operations",
    },
  },
  {
    label: "Typical scope",
    values: {
      "Corporate Website": "Up to 10 pages",
      "Premium Corporate Website": "Up to 20 pages",
      "Advanced E-commerce": "Storefront + catalog + product pages",
      "Website + Admin Dashboard": "Public website + authenticated app",
      "Enterprise Web Application": "Platform defined by discovery",
    },
  },
  {
    label: "Main deliverables",
    values: {
      "Corporate Website": "Custom design, responsive layouts, inquiry forms, deployment",
      "Premium Corporate Website": "Design system, custom templates, CMS, testing",
      "Advanced E-commerce": "Bespoke storefront, filtering, cart & checkout",
      "Website + Admin Dashboard": "Admin workflows, database, roles & permissions",
      "Enterprise Web Application": "Architecture, modules, APIs, integrations, documentation",
    },
  },
  {
    label: "CMS / backend",
    values: {
      "Corporate Website": "Quoted separately if needed",
      "Premium Corporate Website": "Included when in scope",
      "Advanced E-commerce": "Admin provided by the platform",
      "Website + Admin Dashboard": "Custom backend + database",
      "Enterprise Web Application": "Custom architecture throughout",
    },
  },
  {
    label: "Discovery required",
    values: {
      "Corporate Website": "Light — scope confirmed in writing",
      "Premium Corporate Website": "Light — content and CMS planning",
      "Advanced E-commerce": "Moderate — platform & catalog review",
      "Website + Admin Dashboard": "Moderate — workflow definition",
      "Enterprise Web Application": "Extensive — paid discovery phase",
    },
  },
];
