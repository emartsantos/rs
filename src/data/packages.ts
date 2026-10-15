export type Pkg = {
  id: string;
  name: string;
  price: string;
  category: "Websites" | "E-commerce" | "Custom Software";
  ideal: string;
  scope: string[];
  exclusions: string;
};

export const packages: Pkg[] = [
  {
    id: "starter-landing",
    name: "Starter Landing Page",
    price: "S$350",
    category: "Websites",
    ideal: "Small businesses, freelancers, service providers, and focused campaigns that need one page that converts.",
    scope: [
      "One-page website with a custom visual direction",
      "Responsive desktop, tablet, and mobile layouts",
      "Business or service information",
      "Contact CTA and inquiry form",
      "Social media integration",
      "Basic SEO setup",
      "Performance optimization",
      "Agreed revision rounds",
    ],
    exclusions:
      "Advanced integrations, extensive copywriting, paid subscriptions, and complex functionality are additional.",
  },
  {
    id: "business-website",
    name: "Business Website",
    price: "S$750",
    category: "Websites",
    ideal: "Small businesses that need a professional multi-page online presence.",
    scope: [
      "Up to five agreed pages",
      "Custom brand-aligned design",
      "Responsive layouts",
      "About, services, and contact sections",
      "Inquiry forms",
      "Social links",
      "Basic SEO",
      "Performance optimization",
      "Deployment and handover",
    ],
    exclusions: "Complex CMS functionality and third-party integrations are quoted separately.",
  },
  {
    id: "corporate-website",
    name: "Corporate Website",
    price: "S$3,500",
    category: "Websites",
    ideal: "Established companies needing a comprehensive corporate presence.",
    scope: [
      "Up to 10 agreed pages",
      "Bespoke corporate design",
      "Custom navigation and page layouts",
      "Service and industry pages",
      "Case studies or project showcases",
      "Contact and lead-generation forms",
      "CMS when included in scope",
      "SEO foundations",
      "Performance and accessibility review",
      "Deployment and documentation",
    ],
    exclusions: "Large content migrations and multilingual systems are scoped separately.",
  },
  {
    id: "premium-corporate",
    name: "Premium Corporate Website",
    price: "S$7,500",
    category: "Websites",
    ideal: "Established brands that require a highly differentiated digital presence.",
    scope: [
      "Up to 20 agreed pages",
      "Advanced art direction",
      "Bespoke design system",
      "Custom page templates",
      "Sophisticated interactions",
      "CMS integration",
      "Case study or editorial content system",
      "Advanced responsive design",
      "Performance optimization",
      "SEO foundations",
      "Documentation and handover",
    ],
    exclusions:
      "Complex integrations, multilingual systems, and extensive content migration require separate scoping.",
  },
  {
    id: "standard-ecommerce",
    name: "Standard E-commerce",
    price: "S$1,800",
    category: "E-commerce",
    ideal: "Businesses launching a standard online store on an established platform.",
    scope: [
      "Storefront setup",
      "Product catalog",
      "Collection organization",
      "Product detail pages",
      "Cart and supported checkout integration",
      "Payment provider configuration where supported",
      "Responsive shopping experience",
      "Basic store SEO",
      "Product management using the selected platform",
      "Store handover",
    ],
    exclusions:
      "Custom headless commerce, advanced inventory systems, ERP integrations, and substantial catalog migration require a separate quotation.",
  },
  {
    id: "advanced-ecommerce",
    name: "Advanced E-commerce",
    price: "S$7,000",
    category: "E-commerce",
    ideal: "Growing retail brands requiring a sophisticated storefront with deeper customization.",
    scope: [
      "Bespoke storefront design",
      "Advanced collection and product templates",
      "Search and filtering",
      "Improved product discovery",
      "Cart experience",
      "Commerce platform integration",
      "Payment and shipping configuration",
      "Approved product data migration",
      "Advanced responsive layouts",
      "Performance and accessibility testing",
      "Store management documentation",
    ],
    exclusions:
      "Custom headless architecture, ERP integrations, subscriptions, complex pricing rules, and multi-market implementations may increase the project cost.",
  },
  {
    id: "website-admin",
    name: "Website + Admin Dashboard",
    price: "S$10,000",
    category: "Custom Software",
    ideal: "Businesses that need both a public website and an internal management system.",
    scope: [
      "Bespoke public website",
      "Secure administrator authentication",
      "Role-based access control",
      "Create, edit, delete, and publish workflows as approved",
      "Database integration",
      "Search and filtering",
      "Forms and validation",
      "Secure file management where required",
      "Testing",
      "Deployment",
      "Administrator documentation",
    ],
    exclusions: "The actual feature list and security requirements must be approved before development.",
  },
  {
    id: "enterprise-app",
    name: "Enterprise Web Application",
    price: "S$25,000+",
    category: "Custom Software",
    ideal:
      "Organizations with complex business workflows, data management, integrations, and operational requirements.",
    scope: [
      "Requirements discovery",
      "Technical architecture",
      "Custom product design",
      "Authentication and permissions",
      "Business workflow automation",
      "Database architecture",
      "API integrations",
      "Reporting",
      "Audit logging",
      "Security controls",
      "Automated testing",
      "Deployment and monitoring",
      "Technical documentation",
      "Handover and training",
    ],
    exclusions:
      "This is a discovery-led starting price — not a promise of an unlimited platform. Large integrations, regulated workloads, enterprise SSO, extensive migration, security audits, and ongoing support must be separately assessed.",
  },
];

export const packageCategories = [
  {
    id: "Websites" as const,
    index: "01",
    title: "Websites",
    blurb:
      "From a focused one-page site to a twenty-page corporate presence. Every project starts with a visual direction built around the business — never a resold template.",
  },
  {
    id: "E-commerce" as const,
    index: "02",
    title: "E-commerce",
    blurb:
      "Standard stores launch quickly on established platforms. Advanced stores add bespoke merchandising, deeper integrations, and migration work — which is why the scope and price differ.",
  },
  {
    id: "Custom Software" as const,
    index: "03",
    title: "Custom Software",
    blurb:
      "Public websites backed by internal systems — or full operational platforms. These are discovery-led engagements where the feature set is approved before a build begins.",
  },
];

export const comparisonRows: Array<{
  label: string;
  values: Record<string, string>;
}> = [
  {
    label: "Typical client",
    values: {
      "Starter Landing Page": "Freelancers, campaigns, single-service businesses",
      "Business Website": "Small businesses needing a professional presence",
      "Corporate Website": "Established companies, multi-service firms",
      "Premium Corporate Website": "Brands requiring differentiated design",
      "Standard E-commerce": "Retailers launching a first or second store",
      "Advanced E-commerce": "Growing retail brands with real catalogs",
      "Website + Admin Dashboard": "Businesses replacing spreadsheet workflows",
      "Enterprise Web Application": "Organizations with complex operations",
    },
  },
  {
    label: "Pages / scope",
    values: {
      "Starter Landing Page": "1 page",
      "Business Website": "Up to 5 pages",
      "Corporate Website": "Up to 10 pages",
      "Premium Corporate Website": "Up to 20 pages",
      "Standard E-commerce": "Storefront + catalog + PDPs",
      "Advanced E-commerce": "Bespoke storefront + advanced templates",
      "Website + Admin Dashboard": "Website + authenticated internal app",
      "Enterprise Web Application": "Discovery-defined platform",
    },
  },
  {
    label: "CMS / backend",
    values: {
      "Starter Landing Page": "Not included",
      "Business Website": "Quoted separately if needed",
      "Corporate Website": "When included in scope",
      "Premium Corporate Website": "Included",
      "Standard E-commerce": "Platform-provided admin",
      "Advanced E-commerce": "Platform-provided admin + custom layers",
      "Website + Admin Dashboard": "Custom backend + database",
      "Enterprise Web Application": "Custom architecture throughout",
    },
  },
  {
    label: "Customization level",
    values: {
      "Starter Landing Page": "Custom visual direction on one page",
      "Business Website": "Brand-aligned custom design",
      "Corporate Website": "Bespoke layouts and navigation",
      "Premium Corporate Website": "Bespoke design system + templates",
      "Standard E-commerce": "Platform theme, configured well",
      "Advanced E-commerce": "Bespoke storefront and templates",
      "Website + Admin Dashboard": "Fully bespoke, both surfaces",
      "Enterprise Web Application": "Fully bespoke, discovery-led",
    },
  },
  {
    label: "Important exclusions",
    values: {
      "Starter Landing Page": "Copywriting, integrations, subscriptions",
      "Business Website": "Complex CMS, third-party integrations",
      "Corporate Website": "Large migrations, multilingual",
      "Premium Corporate Website": "Complex integrations, multilingual",
      "Standard E-commerce": "Headless builds, ERP, catalog migration",
      "Advanced E-commerce": "ERP, subscriptions, multi-market",
      "Website + Admin Dashboard": "Unscoped feature lists, security audits",
      "Enterprise Web Application": "SSO, regulated workloads, audits — separately assessed",
    },
  },
];
