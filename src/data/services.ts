export type Service = {
  index: string;
  title: string;
  value: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    index: "01",
    title: "Corporate Website Development",
    value:
      "Professional websites designed around a company's identity, services, and business objectives — structured so the site argues for the business rather than looking like everyone else in the sector.",
    deliverables: [
      "Custom corporate visual direction",
      "Up to 10 approved pages",
      "Responsive layouts",
      "Contact and inquiry forms",
      "Basic SEO setup",
      "Deployment and handover",
    ],
  },
  {
    index: "02",
    title: "Premium Website Design & Development",
    value:
      "Custom digital experiences with stronger visual art direction, carefully structured content, and refined interactions — for brands whose website has to carry the brand.",
    deliverables: [
      "Bespoke art direction",
      "Custom page compositions",
      "Design system and templates",
      "Advanced interactions where appropriate",
      "CMS integration when in scope",
      "Testing and documentation",
    ],
  },
  {
    index: "03",
    title: "E-commerce Development",
    value:
      "Online stores with product presentation, shopping workflows, and commerce integrations suited to the chosen platform — merchandising that matches how people actually shop.",
    deliverables: [
      "Custom storefront design",
      "Product and collection presentation",
      "Search and filtering where supported",
      "Cart and checkout integration",
      "Responsive shopping experience",
      "Platform configuration and handover",
    ],
  },
  {
    index: "04",
    title: "Website & Admin Dashboard Development",
    value:
      "Public websites paired with secure administration tools and content management workflows when a project needs one — so your team can run the site without a developer on retainer.",
    deliverables: [
      "A bespoke public website",
      "Custom admin interface",
      "Content management backed by a database",
      "Approved create, read, update, delete workflows",
      "Authentication and permissions enforced on the server",
      "Testing and deployment documentation",
    ],
  },
  {
    index: "05",
    title: "Enterprise Web Application Development",
    value:
      "Custom business applications built around approved workflows, integrations, permissions, security requirements, and the operational reality of the people who use them every day.",
    deliverables: [
      "Requirements discovery",
      "Technical architecture",
      "Modules tailored to your business",
      "Database and API development",
      "Approved integrations",
      "Documentation and handover",
    ],
  },
  {
    index: "06",
    title: "Website Improvements & Technical Support",
    value:
      "Responsive improvements, interface refinements, troubleshooting, performance work, and ongoing maintenance within an agreed scope — for sites that work but need attention.",
    deliverables: [
      "Responsive and interface refinements",
      "Performance audit and fixes",
      "Troubleshooting and regression checks",
      "Accessibility review",
      "Agreed maintenance cadence",
      "Support within scope",
    ],
  },
];
