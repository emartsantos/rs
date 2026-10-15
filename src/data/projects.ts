export type ProjectType = "Concept Project" | "Independent Project";

export type ProjectCategory =
  | "Landing Pages"
  | "Corporate Websites"
  | "E-commerce"
  | "Website + Admin Dashboard"
  | "Enterprise Web Applications";

export type CaseStudy = {
  overview: string;
  businessScenario: string;
  audience: string;
  challenge: string;
  designStrategy: string;
  visualDirection: string;
  informationArchitecture: { page: string; purpose: string }[];
  uxDecisions: { decision: string; rationale: string }[];
  features: { feature: string; detail: string }[];
  technology: { choice: string; reason: string }[];
  responsive: string;
  performance: string;
  gallery: { photoId: string; alt: string }[];
};

export type Project = {
  slug: string;
  title: string;
  industry: string;
  category: ProjectCategory;
  type: ProjectType;
  tagline: string;
  description: string;
  suggestedPackage: string;
  designDirection: string;
  keyFeatures: string[];
  techStack: string[];
  cover: { photoId: string; alt: string };
  liveDemoPath?: string;
  externalUrl?: string;
  sourceUrl?: string;
  caseStudy?: CaseStudy;
};

export function unsplashUrl(photoId: string, width: number): string {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=72`;
}

export const conceptProjects: Project[] = [
  {
    slug: "auren-studio",
    title: "Auren Studio",
    industry: "Interior Design",
    category: "Landing Pages",
    type: "Concept Project",
    tagline: "A boutique interior design studio, presented like an architectural monograph.",
    description:
      "A single-page site for a fictional interior design studio — built as an exercise in restraint: asymmetric photography, quiet typography, and a direct inquiry flow.",
    suggestedPackage: "Starter Landing Page — from S$350",
    designDirection:
      "Architectural editorial. Warm concrete greys, a high-contrast display serif, large carefully cropped interior photography, and generous negative space. Almost no chrome — the work carries the page.",
    keyFeatures: [
      "Single-page experience with anchored navigation",
      "Asymmetric, cropped photography compositions",
      "Services and selected project highlights",
      "Studio introduction and inquiry call-to-action",
      "Responsive image treatment across breakpoints",
    ],
    techStack: ["Next.js", "React", "TypeScript", "CSS Modules", "next/font"],
    cover: { photoId: "photo-1618221195710-dd6b41faaea6", alt: "Minimal interior with soft daylight and concrete textures" },
    liveDemoPath: "/sites/auren-studio",
    caseStudy: {
      overview:
        "Auren Studio is a speculative concept for a boutique interior design practice. The brief was to prove that a single page — done with discipline — can carry the same authority as a multi-page site.",
      businessScenario:
        "A small interior design studio needs a presence that signals taste before a client ever books a call. The site is the first portfolio piece a prospective client sees, so every crop, margin, and type choice is itself a work sample.",
      audience:
        "Affluent homeowners and small commercial clients in search of a studio with a clear point of view.",
      challenge:
        "Design a one-page site that never feels like a template landing page — no hero gradient, no three-column feature grid, no stock-icon rows — while still making the inquiry path obvious.",
      designStrategy:
        "Treat the page like a printed monograph: a numbered sequence of spreads (introduction, services, selected work, studio, inquiry), each with its own compositional logic, held together by one typeface pairing and a single muted palette.",
      visualDirection:
        "Warm concrete grey and bone palette. A high-contrast serif for display, a neutral grotesque for body. Photography is always cropped asymmetrically and never sits inside a card or rounded frame. Section numbers appear as small annotations in the margin.",
      informationArchitecture: [
        { page: "Single page", purpose: "Introduction — studio positioning and primary inquiry" },
        { page: "Services", purpose: "Three service offers with short, confident descriptions" },
        { page: "Selected work", purpose: "Three project highlights with large, cropped imagery" },
        { page: "Studio", purpose: "Who the studio is, how it works, where it works" },
        { page: "Inquiry", purpose: "Closing call-to-action with contact details" },
      ],
      uxDecisions: [
        {
          decision: "Anchored section navigation instead of multiple pages",
          rationale:
            "A one-page site keeps the whole story in a single scroll — right for a studio whose pitch is finished thinking, not volume of content.",
        },
        {
          decision: "Images break the text column rather than aligning to it",
          rationale:
            "Controlled asymmetry signals art direction and keeps the composition from reading as a stack of template blocks.",
        },
        {
          decision: "One primary call-to-action, repeated at natural exits",
          rationale:
            "Visitors decide to inquire at different points; the CTA appears after services, after work, and at the end — never nagging, always reachable.",
        },
      ],
      features: [
        { feature: "Asymmetric editorial layout", detail: "A 12-column grid used off-centre, with deliberate breaks in alignment." },
        { feature: "Responsive image treatment", detail: "Crops recompose at each breakpoint instead of simply scaling." },
        { feature: "Anchored smooth navigation", detail: "Section links with reduced-motion support and keyboard access." },
        { feature: "Inquiry call-to-action", detail: "Direct email contact, presented as the page's closing gesture." },
      ],
      technology: [
        { choice: "Next.js App Router", reason: "Server Components keep the static page lean; zero client JavaScript by default." },
        { choice: "CSS Modules", reason: "Scoped styles guarantee no leakage and allow exact typographic control." },
        { choice: "next/font", reason: "Self-hosted fonts with swap behaviour — no runtime third-party requests." },
      ],
      responsive:
        "The asymmetric compositions recompose for each breakpoint: multi-column spreads collapse into intentional vertical sequences, image crops change ratio, and type scales down through a defined ratio rather than shrinking uniformly.",
      performance:
        "Server-rendered static page, self-hosted fonts with preloading, sized Unsplash assets with explicit dimensions to prevent layout shift, and almost no client-side JavaScript.",
      gallery: [
        { photoId: "photo-1616486338812-3dadae4b4ace", alt: "Living room interior with linen sofa and warm light" },
        { photoId: "photo-1493809842364-78817add7ffb", alt: "Mustard accent chair against a pale wall" },
        { photoId: "photo-1524758631624-e2822e304c36", alt: "Dining space with timber table and pendant lighting" },
      ],
    },
  },
  {
    slug: "fieldnote-coffee",
    title: "Fieldnote Coffee",
    industry: "Specialty Coffee",
    category: "Corporate Websites",
    type: "Concept Project",
    tagline: "An independent coffee business, told like a printed field journal.",
    description:
      "A five-page business website for a fictional specialty coffee brand — warm print-inspired art direction, a clear menu, and location information that works on the walk over.",
    suggestedPackage: "Business Website — from S$750",
    designDirection:
      "Warm tactile editorial. Cream paper tones, deep coffee greens and browns, a soft display serif paired with a clean grotesque, stamped label motifs, and product photography that feels handled rather than staged.",
    keyFeatures: [
      "Home, About, Menu, Location, and Contact pages",
      "Menu structured for quick scanning on mobile",
      "Location, hours, and directions",
      "Social links and inquiry form",
      "Carefully considered mobile navigation",
    ],
    techStack: ["Next.js", "React", "TypeScript", "CSS Modules", "next/font"],
    cover: { photoId: "photo-1495474472287-4d71bcdd2085", alt: "Coffee cup and pour-over setup on a wooden counter" },
    liveDemoPath: "/sites/fieldnote-coffee",
    caseStudy: {
      overview:
        "Fieldnote Coffee is a speculative five-page website for an independent specialty coffee business, exploring how far print-inspired art direction can go on the web without hurting usability.",
      businessScenario:
        "An independent roaster and café needs a website that does three jobs: explain what makes the coffee different, publish a menu people can actually read on a phone, and make the shop easy to find and contact.",
      audience:
        "Local regulars, remote workers choosing a café for the day, and specialty coffee enthusiasts discovering the roaster online.",
      challenge:
        "Create a warm, printed-journal feeling site that stays fast, legible, and practical — the menu must work better on a phone at the door than a PDF ever did.",
      designStrategy:
        "Build the site like an issue of a small journal: a cover (home), a note from the roaster (about), a menu spread, a directory page (location), and a back page (contact) — each with its own composition but one shared grid, type system, and paper texture.",
      visualDirection:
        "Cream and bone backgrounds with deep green and roasted brown accents. A soft, slightly idiosyncratic serif for headlines; a neutral grotesque for body text. Stamped label motifs carry metadata (origin, roast date) the way a print journal would annotate a field note.",
      informationArchitecture: [
        { page: "Home", purpose: "Cover story — the coffee, the craft, a first invitation to visit" },
        { page: "About", purpose: "The roaster's story, sourcing philosophy, and people" },
        { page: "Menu", purpose: "Drinks, retail beans, and food — structured for scanning" },
        { page: "Location", purpose: "Address, hours, directions, and atmosphere photography" },
        { page: "Contact", purpose: "Inquiry form, social links, and wholesale contact" },
      ],
      uxDecisions: [
        {
          decision: "Menu as a dedicated page, not a PDF",
          rationale:
            "The most-visited page for a café site is the menu — it deserves its own URL, semantic markup, and a mobile layout designed for reading while standing at the counter.",
        },
        {
          decision: "Hours and address repeated in the footer of every page",
          rationale:
            "Practical information should never require a hunt; location intent often arrives on any page.",
        },
        {
          decision: "Mobile navigation designed as a stamped index",
          rationale:
            "The menu overlay mirrors the journal's index page, keeping the concept intact in the most-used part of the site.",
        },
      ],
      features: [
        { feature: "Print-inspired design system", detail: "Paper tones, stamped labels, and rules borrowed from editorial layout." },
        { feature: "Structured menu", detail: "Drinks and retail organized with clear typographic hierarchy and dietary marks." },
        { feature: "Location module", detail: "Hours, address, and directions presented for quick mobile reference." },
        { feature: "Inquiry form", detail: "Contact form with validation and honest success/error states." },
      ],
      technology: [
        { choice: "Next.js App Router", reason: "Static multi-page output with shared layout primitives." },
        { choice: "CSS Modules per page section", reason: "Keeps the print-style compositions local and maintainable." },
        { choice: "next/font with two families", reason: "Self-hosted serif and grotesque without layout shift." },
      ],
      responsive:
        "The journal layout translates rather than collapses: single-column on mobile with type scaled for reading distance, the menu becomes a full-width index, and photography crops shift from landscape spreads to portrait frames.",
      performance:
        "Fully static output, optimised image sizes with explicit dimensions, minimal client JavaScript (navigation and form only), and self-hosted fonts.",
      gallery: [
        { photoId: "photo-1509042239860-f550ce710b93", alt: "Latte art in a ceramic cup viewed from above" },
        { photoId: "photo-1498804103079-a6351b050096", alt: "Freshly roasted coffee beans up close" },
        { photoId: "photo-1554118811-1e0d58224f24", alt: "Warm café interior with wooden seating" },
      ],
    },
  },
  {
    slug: "meridian-advisory",
    title: "Meridian Advisory",
    industry: "Management Consulting",
    category: "Corporate Websites",
    type: "Concept Project",
    tagline: "A consulting firm's website with the structure of a briefing document.",
    description:
      "A premium corporate website for a fictional advisory firm — sophisticated typographic hierarchy, structured information architecture, and restrained art direction built for a boardroom audience.",
    suggestedPackage: "Premium Corporate Website — from S$7,500",
    designDirection:
      "Structured and authoritative. A tight grotesque paired with a serious serif, navy and ivory with fine gold hairlines, disciplined columns, and carefully art-directed photography of working environments rather than handshakes.",
    keyFeatures: [
      "Corporate homepage with editorial storytelling",
      "Services and industry expertise pages",
      "Leadership and case study sections",
      "Contact and lead-generation forms",
      "SEO-friendly content structure",
    ],
    techStack: ["Next.js", "React", "TypeScript", "CSS Modules", "next/font"],
    cover: { photoId: "photo-1497366216548-37526070297c", alt: "Glass-walled meeting room in a modern office" },
    liveDemoPath: "/sites/meridian-advisory",
    caseStudy: {
      overview:
        "Meridian Advisory is a speculative corporate website for a management consulting firm, designed to demonstrate how authority can be communicated through structure and typography rather than claims.",
      businessScenario:
        "An advisory firm competing for mid-market and enterprise engagements needs a site that reads as evidence of rigour — the website is often the first deliverable a client judges.",
      audience:
        "C-suite executives, corporate development teams, and board members evaluating advisory partners.",
      challenge:
        "Avoid every consulting-template cliché — the centred hero with a stock handshake, the three identical capability cards — while still organizing a large amount of structured content across services, industries, leadership, and case studies.",
      designStrategy:
        "Structure the site like a briefing document: numbered sections, clear hierarchical levels, industry pages that speak to sector-specific problems, and case studies written as situation–approach–outcome narratives without fabricated metrics.",
      visualDirection:
        "Ivory and deep navy with thin gold rules used only for structure. Typographic hierarchy does the heavy lifting: a confident grotesque for headlines, a readable serif for long-form, and mono annotations for document-like metadata.",
      informationArchitecture: [
        { page: "Home", purpose: "Positioning, flagship capabilities, selected thinking" },
        { page: "Services", purpose: "Six advisory practices, each with scope and approach" },
        { page: "Industries", purpose: "Sector expertise organized by market" },
        { page: "Leadership", purpose: "Partner profiles in a restrained editorial format" },
        { page: "Case studies", purpose: "Engagement narratives without invented results" },
        { page: "Contact", purpose: "Structured inquiry with project context fields" },
      ],
      uxDecisions: [
        {
          decision: "Persistent document-style section numbering",
          rationale:
            "Executives skim. Numbered sections and a clear hierarchy let a reader navigate a dense site the way they would a printed briefing.",
        },
        {
          decision: "Case studies written as narratives, not stat cards",
          rationale:
            "Without verified client results, honesty itself becomes the differentiator — narratives describe approach and reasoning, never invented percentages.",
        },
        {
          decision: "Restrained motion",
          rationale:
            "A boardroom audience reads excessive animation as noise; transitions are limited to subtle reveals and clear hover states.",
        },
      ],
      features: [
        { feature: "Structured information architecture", detail: "Services, industries, leadership, and thinking cross-referenced cleanly." },
        { feature: "Editorial case study system", detail: "A repeatable situation–approach–outcome template for future content." },
        { feature: "Lead-generation contact form", detail: "Inquiry fields capturing sector, service interest, and timeline." },
        { feature: "SEO foundations", detail: "Semantic heading structure, unique metadata, and structured data per page." },
      ],
      technology: [
        { choice: "Next.js App Router", reason: "Static multi-page export with per-page metadata generation." },
        { choice: "CSS Modules", reason: "Corporate compositions need precise typographic and grid control." },
        { choice: "Typed content modules", reason: "Services, industries, and case studies live in structured data, ready for a future CMS." },
      ],
      responsive:
        "Multi-column briefing layouts collapse into single-column reading sequences on mobile; industry tables become stacked definition lists; the leadership grid becomes a vertical sequence with preserved hierarchy.",
      performance:
        "Static rendering, restrained font loading, no heavy animation libraries, and sized imagery with stable dimensions.",
      gallery: [
        { photoId: "photo-1521737604893-d14cc237f11d", alt: "Advisory team in discussion around a table" },
        { photoId: "photo-1454165804606-c3d57bc86b40", alt: "Documents and notes spread across a meeting table" },
        { photoId: "photo-1497366811353-6870744d04b2", alt: "Quiet office interior with deep focus workspaces" },
      ],
    },
  },
  {
    slug: "oriel-objects",
    title: "Oriel Objects",
    industry: "Homeware & Lifestyle Retail",
    category: "E-commerce",
    type: "Concept Project",
    tagline: "A premium homeware storefront where the product is the only decoration.",
    description:
      "A concept e-commerce experience for a fictional homeware retailer — editorial collection pages, refined product detail layouts, working search, filtering, and a clearly labeled demo checkout.",
    suggestedPackage: "Advanced E-commerce — from S$7,000",
    designDirection:
      "Product-first retail. Bone and charcoal with a clay accent, generous whitespace, large product photography, and merchandising hierarchy that stays out of the product's way.",
    keyFeatures: [
      "Product catalog with collections",
      "Variant selection on product pages",
      "Search and category/price filtering",
      "Working client-side cart with persistence",
      "Clearly labeled demo checkout",
    ],
    techStack: ["Next.js", "React", "TypeScript", "CSS Modules", "localStorage cart"],
    cover: { photoId: "photo-1578749556568-bc2c40e68b61", alt: "Handmade ceramic vessels on a pale surface" },
    liveDemoPath: "/sites/oriel-objects",
    caseStudy: {
      overview:
        "Oriel Objects is a speculative e-commerce concept for a premium homeware brand. The build focuses on the parts of shopping that templates usually get wrong: product hierarchy, filtering ergonomics, and an honest checkout boundary.",
      businessScenario:
        "A homeware brand with a small, curated range needs a storefront that presents each object with the care of a gallery — and still handles the practical work of search, filtering, variants, and cart management.",
      audience:
        "Design-conscious buyers furnishing homes, purchasing gifts, and comparing materials and finishes.",
      challenge:
        "Build a storefront that feels editorial without sacrificing commerce ergonomics — filtering must be fast, the cart must be real, and nothing may imply that a demo checkout processes actual payments.",
      designStrategy:
        "Let photography lead every surface. Product grids use consistent proportions with intentional whitespace; collection pages open with an editorial band; the product detail page is laid out like a catalogue entry — material, dimensions, and care first, persuasion second.",
      visualDirection:
        "Bone backgrounds, charcoal type, and a single clay accent used for actions and states. No decorative badges, no urgency timers, no clutter. Typography is quiet and spacious; product images sit on the page, not inside cards.",
      informationArchitecture: [
        { page: "Home", purpose: "Brand introduction and featured collections" },
        { page: "Collections", purpose: "All collections with editorial previews" },
        { page: "Collection pages", purpose: "Filtered product grids per collection" },
        { page: "Product pages", purpose: "Catalogue-entry product detail — variants, materials, dimensions, related objects" },
        { page: "Cart & demo checkout", purpose: "Working cart and a clearly labeled non-payment checkout" },
      ],
      uxDecisions: [
        {
          decision: "Filters apply instantly, client-side",
          rationale:
            "On a curated catalog, waiting for a round-trip per filter click feels broken; instant filtering with a visible result count keeps the shopper oriented.",
        },
        {
          decision: "Cart persists in the browser",
          rationale:
            "A cart that empties on refresh undermines the demo's credibility; localStorage persistence makes the experience behave like a real store.",
        },
        {
          decision: "Checkout labeled as a demo at every step",
          rationale:
            "An honest boundary — the checkout collects nothing and charges nothing, and the interface says so plainly rather than mimicking payment screens.",
        },
      ],
      features: [
        { feature: "Collection & catalog system", detail: "Typed product data with collections, variants, and price ranges." },
        { feature: "Search and filtering", detail: "Text search plus category and price filters with result counts." },
        { feature: "Variant selection", detail: "Finish and size variants with per-variant pricing and availability." },
        { feature: "Cart with persistence", detail: "Add, update, and remove line items — saved across sessions in the browser." },
        { feature: "Demo checkout", detail: "A clearly labeled, non-functional checkout boundary — no data is sent or charged." },
      ],
      technology: [
        { choice: "Next.js static export", reason: "Product pages pre-rendered for speed; interactions hydrate on demand." },
        { choice: "Typed local product data", reason: "A structured data layer stands in for a commerce backend and mirrors how a real catalog would be modeled." },
        { choice: "React context + localStorage", reason: "A real cart lifecycle without pretending a payment backend exists." },
      ],
      responsive:
        "Product grids move from four columns to two to one; filters collapse into an accessible drawer; the product detail page stacks with the purchase panel directly under the primary image.",
      performance:
        "Static product pages, sized imagery, layout reserved for every image, and client JavaScript limited to cart, filtering, and search.",
      gallery: [
        { photoId: "photo-1602143407151-7111542de6e8", alt: "Ceramic vase styled on a shelf" },
        { photoId: "photo-1567538096630-e0c55bd6374c", alt: "Stoneware vessel against a neutral backdrop" },
        { photoId: "photo-1519710164239-da123dc03ef4", alt: "Sculptural lounge chair in a bright room" },
      ],
    },
  },
  {
    slug: "northstar-operations",
    title: "Northstar Operations",
    industry: "Business Operations Software",
    category: "Enterprise Web Applications",
    type: "Concept Project",
    tagline: "An operations platform demo that proves workflow logic, not just charts.",
    description:
      "A fully interactive operations platform concept — clients, tasks, requests, approvals, roles, and activity history — with real CRUD, status transitions, and browser-persisted simulated data.",
    suggestedPackage: "Website + Admin Dashboard — from S$10,000",
    designDirection:
      "Functional enterprise interface. Dense but readable tables, workflow-driven navigation, clear status indicators, mono numerals, and minimal decorative styling — the design serves the work, not the screenshot.",
    keyFeatures: [
      "Dashboard overview with workload signals",
      "Client management with create/edit workflows",
      "Task management with status transitions",
      "Requests and approvals queue",
      "Search and filtering across records",
      "User and role management",
      "Activity history",
    ],
    techStack: ["Next.js", "React", "TypeScript", "CSS Modules", "localStorage persistence"],
    cover: { photoId: "photo-1497215728101-856f4ea42174", alt: "Operations team working across screens in an open office" },
    liveDemoPath: "/sites/northstar-operations",
    caseStudy: {
      overview:
        "Northstar Operations is a speculative enterprise web application demonstrating what an internal operations platform can look like when workflow logic drives the interface — built entirely client-side with persistent simulated data.",
      businessScenario:
        "A service business coordinating clients, projects, and internal approvals typically runs on spreadsheets and chat threads. The concept models the system that would replace them: one place for records, requests, and accountability.",
      audience:
        "Operations managers, account leads, and administrators — the people who live in internal tools all day.",
      challenge:
        "Most dashboard demos only display charts. This one had to prove real workflow behaviour — create, edit, transition, approve, audit — without a backend, while being transparent that the data is simulated.",
      designStrategy:
        "Design for the eighth hour of use, not the first screenshot: predictable navigation, keyboard-friendly tables, inline status transitions, and forms that match the shape of the records they create.",
      visualDirection:
        "Neutral interface greys with one functional accent for actions. Tables carry the density; cards are reserved for summaries. Status is communicated by labelled chips with sufficient contrast, never colour alone. Mono numerals keep columns of figures scannable.",
      informationArchitecture: [
        { page: "Overview", purpose: "Workload summary, pending approvals, recent activity" },
        { page: "Clients", purpose: "Client records with create, edit, and detail views" },
        { page: "Tasks", purpose: "Task board and table with status transitions" },
        { page: "Requests", purpose: "Inbound requests with approval/rejection workflow" },
        { page: "Users & roles", purpose: "Team members, roles, and access levels" },
        { page: "Activity", purpose: "Append-only history of record changes" },
      ],
      uxDecisions: [
        {
          decision: "Status transitions are inline, one click, with confirmation",
          rationale:
            "Operations work is mostly state changes; burying them in detail pages would miss the point of the tool.",
        },
        {
          decision: "Every mutation writes to activity history",
          rationale:
            "Accountability is the core promise of operations software — the demo models that with a full audit trail per record.",
        },
        {
          decision: "Roles change what actions appear, not just what badges say",
          rationale:
            "A viewer role genuinely hides mutating controls, demonstrating permission-aware UI even in a client-side demo.",
        },
      ],
      features: [
        { feature: "Full CRUD", detail: "Create, edit, and delete clients, tasks, and users with validated forms." },
        { feature: "Approval workflow", detail: "Requests move through submitted → under review → approved/rejected with recorded reasons." },
        { feature: "Search & filters", detail: "Global search plus status, assignee, and date filters on every list view." },
        { feature: "Role simulation", detail: "Switch between Admin, Manager, and Viewer to see permission-aware interfaces." },
        { feature: "Activity log", detail: "Append-only audit trail of every mutation, filterable per record." },
        { feature: "Browser persistence", detail: "All changes persist in localStorage — clearly labeled as simulated business data." },
      ],
      technology: [
        { choice: "Next.js + React client components", reason: "The interface is application logic; static hosting is fine because state lives in the browser." },
        { choice: "localStorage persistence layer", reason: "Real CRUD behaviour without a backend, honestly labeled — nothing is sent anywhere." },
        { choice: "CSS Modules", reason: "Dense interfaces need exact control over table rhythm, spacing, and focus states." },
      ],
      responsive:
        "Desktop-first density with honest mobile behaviour: tables become record cards below 768px, navigation collapses to a drawer, and approval actions stay thumb-reachable.",
      performance:
        "One client-side application entry with no heavy table or chart libraries — rows, filters, and forms are hand-built for full control over rendering cost.",
      gallery: [
        { photoId: "photo-1551288049-bebda4e38f71", alt: "Analytics dashboard displayed on a laptop" },
        { photoId: "photo-1552664730-d307ca884978", alt: "Team reviewing work together at a desk" },
        { photoId: "photo-1517048676732-d65bc937f952", alt: "Planning session with notes and laptops" },
      ],
    },
  },
];

export const independentProjects: Project[] = [
  {
    slug: "greenpulse-logistics",
    title: "GreenPulse Logistics",
    industry: "Freight & Supply Chain",
    category: "Corporate Websites",
    type: "Independent Project",
    tagline: "Enterprise freight network site with an interactive carbon-estimate tool.",
    description:
      "A multi-page corporate website for a sustainable freight company, including an interactive Eco-Quote tool that models emissions across transport modes.",
    suggestedPackage: "Comparable to Corporate Website — from S$3,500",
    designDirection: "Enterprise editorial — structured service architecture with an interactive calculator as the centrepiece.",
    keyFeatures: ["Service & industry pages", "Case study section", "Interactive carbon estimator", "Lead-generation forms"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    cover: { photoId: "photo-1494412574643-ff11b0a5c1c3", alt: "Stacked shipping containers at a port terminal" },
    externalUrl: "https://greenpulse-logistics.vercel.app/",
    sourceUrl: "https://github.com/emartsantos/greenpulse-logistics",
  },
  {
    slug: "lumina",
    title: "Lumina",
    industry: "Telehealth",
    category: "Corporate Websites",
    type: "Independent Project",
    tagline: "A nationwide telehealth practice site with a full care information architecture.",
    description:
      "A comprehensive multi-page website for a virtual healthcare practice — services, specialties, provider directory, patient stories, and a structured visit-intake flow.",
    suggestedPackage: "Comparable to Premium Corporate Website — from S$7,500",
    designDirection: "Calm healthcare editorial — generous type, clear care pathways, and trustworthy information hierarchy.",
    keyFeatures: ["Service & specialty pages", "Provider directory", "Patient story system", "Visit intake CTA"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    cover: { photoId: "photo-1576091160550-2173dba999ef", alt: "Clinician consulting with a patient in a bright room" },
    externalUrl: "https://lumina-three-olive.vercel.app/",
    sourceUrl: "https://github.com/emartsantos/lumina",
  },
  {
    slug: "ember-and-oak",
    title: "Ember & Oak",
    industry: "Hospitality — Wood-Fired Pizzeria",
    category: "Landing Pages",
    type: "Independent Project",
    tagline: "A one-page pizzeria site with menu, hours, and WhatsApp ordering.",
    description:
      "A single-page restaurant website covering story, menu, and visit details — with click-to-message ordering and careful mobile-first typography.",
    suggestedPackage: "Comparable to Starter Landing Page — from S$350",
    designDirection: "Warm hospitality editorial — dark oven tones, honest food photography, and menu typography built for phones.",
    keyFeatures: ["Anchored single-page structure", "Full menu with dietary marks", "Hours & directions", "WhatsApp ordering links"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    cover: { photoId: "photo-1513104890138-7c749659a591", alt: "Wood-fired pizza with blistered crust" },
    externalUrl: "https://emartsantos.github.io/ember-and-oak/",
    sourceUrl: "https://github.com/emartsantos/ember-and-oak",
  },
  {
    slug: "summit-peak",
    title: "Summit Peak Coffee Co.",
    industry: "Specialty Coffee Roastery",
    category: "Corporate Websites",
    type: "Independent Project",
    tagline: "A roastery and café site built around origin transparency.",
    description:
      "A single-page specialty coffee website covering sourcing, roasting, and café offerings — with an enquiry flow for wholesale and subscriptions.",
    suggestedPackage: "Comparable to Business Website — from S$750",
    designDirection: "Craft editorial — process-led storytelling with farm-to-cup structure and enquiry conversion.",
    keyFeatures: ["Process storytelling", "Offerings showcase", "Visit & contact module", "Enquiry form"],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    cover: { photoId: "photo-1447933601403-0c6688de566e", alt: "Freshly brewed coffee in a ceramic cup" },
    externalUrl: "https://summit-peak-coffee-co.vercel.app/",
    sourceUrl: "https://github.com/emartsantos/summit-peak-coffee-co",
  },
  {
    slug: "apex-horizon",
    title: "Apex Horizon",
    industry: "Outdoor Adventure",
    category: "Landing Pages",
    type: "Independent Project",
    tagline: "An adventure brand landing page concept.",
    description:
      "A landing page concept for an outdoor adventure brand. Source code is available on GitHub; a live deployment is not currently published.",
    suggestedPackage: "Comparable to Starter Landing Page — from S$350",
    designDirection: "Bold outdoor editorial — landscape photography and direct call-to-action structure.",
    keyFeatures: ["Single-page structure", "Brand-forward hero", "Offering highlights", "Contact CTA"],
    techStack: ["Next.js", "React", "TypeScript"],
    cover: { photoId: "photo-1506905925346-21bda4d32df4", alt: "Mountain range reflected in an alpine lake" },
    sourceUrl: "https://github.com/emartsantos/apex-horizon",
  },
];

export const allProjects: Project[] = [...conceptProjects, ...independentProjects];

export function getProject(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}

export const projectFilters: Array<{ label: string; value: string }> = [
  { label: "All work", value: "all" },
  { label: "Landing Pages", value: "Landing Pages" },
  { label: "Corporate Websites", value: "Corporate Websites" },
  { label: "E-commerce", value: "E-commerce" },
  { label: "Website + Admin", value: "Website + Admin Dashboard" },
  { label: "Enterprise Apps", value: "Enterprise Web Applications" },
  { label: "Independent", value: "Independent" },
];
