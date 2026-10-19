export type ProjectType = "Independent Project" | "Concept";

export type ProjectCategory =
  | "Landing Pages"
  | "Corporate Websites"
  | "E-commerce"
  | "Web Application";

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
  /** Comparable package from the published pricing — never a claim of paid work. */
  suggestedPackage: string;
  designDirection: string;
  keyFeatures: string[];
  techStack: string[];
  cover: { photoId: string; alt: string };
  externalUrl?: string;
  sourceUrl?: string;
  /** True only when a live deployment has actually been verified. */
  liveVerified?: boolean;
  caseStudy?: CaseStudy;
};

export function unsplashUrl(photoId: string, width: number): string {
  return `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=72`;
}

/*
 * Independent projects — self directed builds, linked to their source.
 * None of these are paid client engagements, and none are presented as such.
 */
export const independentProjects: Project[] = [
  {
    slug: "greenpulse-logistics",
    title: "GreenPulse Logistics",
    industry: "Freight & Supply Chain",
    category: "Corporate Websites",
    type: "Independent Project",
    tagline: "Enterprise freight network site with an interactive carbon estimate tool.",
    description:
      "A multi page corporate website for a sustainable freight company — service and industry architecture, a representative case study system, and an interactive Eco Quote tool that models emissions across transport modes.",
    suggestedPackage: "Comparable to Corporate Website",
    designDirection:
      "Enterprise editorial. A restrained green and charcoal palette, a structured service architecture, and an interactive calculator used as the page's centrepiece rather than an illustration.",
    keyFeatures: [
      "Service and industry architecture across six freight offerings",
      "Interactive Eco Quote tool with per mode CO₂e comparison",
      "Representative, clearly labelled case study system",
      "Quote and inquiry lead generation flow",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    cover: { photoId: "photo-1494412574643-ff11b0a5c1c3", alt: "Stacked shipping containers at a port terminal" },
    externalUrl: "https://greenpulse-logistics.vercel.app/",
    sourceUrl: "https://github.com/emartsantos/greenpulse-logistics",
    liveVerified: true,
    caseStudy: {
      overview:
        "GreenPulse Logistics is an independent project: a multi page website for a fictional sustainable freight and supply chain company. It demonstrates how a technically dense B2B service business can be organised and presented on the web.",
      businessScenario:
        "Enterprise shippers choosing a freight partner need three things fast: proof of service coverage, a clear understanding of what the company does, and a way to get an estimate. The site is built around those three jobs rather than around a generic marketing narrative.",
      audience:
        "Logistics and supply chain managers at retail, manufacturing, food, pharmaceutical, automotive, and technology companies — people who skim a services page looking for their own lane.",
      challenge:
        "Freight and carbon are abstract. The site had to make both concrete: explain six services without turning into a wall of copy, and make emissions data something a visitor can actually play with before making contact.",
      designStrategy:
        "Treat the site like an operations document. Services and industries are structured, scannable lists; the centrepiece is a working estimate tool that models a shipment and compares emissions mode by mode, turning a marketing claim into an interactive calculation.",
      visualDirection:
        "A restrained freight palette — deep green, off white, and charcoal — over a structured editorial layout. Monospaced annotations mark technical metadata, and one accent colour is reserved for actions and the calculator's live results.",
      informationArchitecture: [
        { page: "Home", purpose: "Positioning, capability summary, and first conversion path" },
        { page: "Services", purpose: "Six freight services, each with its own detail page" },
        { page: "Industries", purpose: "Relevance specific to each sector, across six verticals" },
        { page: "Case Studies", purpose: "Representative engagement types, clearly labelled as illustrative" },
        { page: "Eco Quote", purpose: "Interactive per mode emissions estimator" },
        { page: "About & Contact", purpose: "Company context and a quote request flow" },
      ],
      uxDecisions: [
        {
          decision: "The Eco Quote tool is a destination, not a decoration",
          rationale:
            "The most distinctive thing about the fictional business is its emissions focus, so the calculator is given its own page and its own CTA — it converts curiosity into an inquiry.",
        },
        {
          decision: "Mode comparison is shown as labelled figures, not a chart",
          rationale:
            "Comparing ocean, rail, road, and air by exact figure is clearer and more honest than a stylised chart, and it stays accessible.",
        },
        {
          decision: "Case studies are labelled as representative",
          rationale:
            "Because the company is fictional, every engagement is marked as a placeholder. An honest boundary is more credible than invented client results.",
        },
      ],
      features: [
        { feature: "Interactive emissions estimator", detail: "Inputs for distance, weight, mode, and shipment volume return an estimated per shipment footprint and a cross mode comparison." },
        { feature: "Structured service architecture", detail: "Six services with individual detail routes, each describing scope in plain operational language." },
        { feature: "Industry relevance", detail: "Six sector pages so a visitor sees their own supply chain context." },
        { feature: "Lead generation quote flow", detail: "A contact route positioned as the next step after any estimate." },
      ],
      technology: [
        { choice: "Next.js App Router", reason: "Multi page structure with metadata for each page, and a mix of server rendered content and a client side calculator." },
        { choice: "Tailwind CSS", reason: "A consistent utility system keeps a large, multi page site visually coherent." },
        { choice: "Structured content modules", reason: "Services, industries, and engagements live in typed data, ready for a CMS if the content grows." },
      ],
      responsive:
        "Service and industry grids collapse from multi column to single column reading lists on mobile, and the calculator stacks its inputs above the results so the output stays visible while adjusting values.",
      performance:
        "Static, server rendered pages with optimised imagery; the only substantial client side JavaScript is the calculator itself.",
      gallery: [
        { photoId: "photo-1553413077-190dd305871c", alt: "Distribution warehouse with racking and palletised freight" },
        { photoId: "photo-1601584115197-04ecc0da31d7", alt: "Fleet of trucks staged in a distribution yard" },
        { photoId: "photo-1466611653911-95081537e5b7", alt: "Wind turbines representing lower carbon energy" },
      ],
    },
  },
  {
    slug: "lumina",
    title: "Lumina",
    industry: "Telehealth",
    category: "Corporate Websites",
    type: "Independent Project",
    tagline: "A nationwide telehealth practice site with a full care information architecture.",
    description:
      "A comprehensive multi page website for a virtual healthcare practice — care services, specialties, a provider directory, anonymised patient stories, a wellness hub, and a structured visit intake flow.",
    suggestedPackage: "Comparable to Premium Corporate Website",
    designDirection:
      "Calm healthcare editorial. Generous type, careful care pathways, and a trustworthy information hierarchy that keeps a large amount of content navigable.",
    keyFeatures: [
      "Care services and specialty architecture",
      "Provider directory and patient story system",
      "Wellness hub with article templates",
      "Visit intake call to action present at every decision point",
    ],
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    cover: { photoId: "photo-1576091160550-2173dba999ef", alt: "Clinician consulting with a patient in a bright room" },
    externalUrl: "https://lumina-three-olive.vercel.app/",
    sourceUrl: "https://github.com/emartsantos/lumina",
    liveVerified: true,
    caseStudy: {
      overview:
        "Lumina is an independent project: a large multi page site for a fictional nationwide telehealth practice. It demonstrates handling a broad information architecture — care, specialties, providers, stories, and editorial — without losing clarity.",
      businessScenario:
        "A telehealth practice competes on trust and convenience. The site has to explain what it treats, prove who the clinicians are, reassure on privacy, and make starting a visit feel like a single obvious step.",
      audience:
        "People seeking primary, preventive, or mental health care who want to understand their options before booking, across all fifty states.",
      challenge:
        "Healthcare sites can become overwhelming. The challenge was to keep a large content set — six care services, five specialties, a provider directory, patient stories, and a wellness hub — readable and calm, with a consistent path to starting a visit.",
      designStrategy:
        "Design around care pathways. Every service and specialty page repeats the same trustworthy structure — who it is for, what happens, and how to start — so visitors learn the pattern once and can navigate the rest intuitively.",
      visualDirection:
        "Warm, quiet healthcare editorial: soft neutral surfaces, a single calm accent, generous line height, and photography that shows care rather than clinical equipment. Trust signals are stated plainly rather than shouted.",
      informationArchitecture: [
        { page: "Home", purpose: "Positioning, care options, and a prominent path to start a visit" },
        { page: "Care", purpose: "Six services from primary care to prescriptions" },
        { page: "Specialties", purpose: "Five clinical focus areas" },
        { page: "Providers", purpose: "A directory of clinicians" },
        { page: "Patient stories", purpose: "Anonymised experiences, framed with permission" },
        { page: "Wellness hub", purpose: "Editorial articles supporting SEO and trust" },
        { page: "Company & Contact", purpose: "About, trust and safety, and how to begin" },
      ],
      uxDecisions: [
        {
          decision: "One consistent template across care and specialty pages",
          rationale:
            "A repeatable structure lets visitors compare options quickly and keeps a large site maintainable as content grows.",
        },
        {
          decision: "Patient stories are anonymised and framed as illustrative",
          rationale:
            "For a fictional practice there is no verified outcome to cite, so stories avoid invented hard claims and the interface says individual results vary.",
        },
        {
          decision: "A single, persistent call to action to start a visit",
          rationale:
            "The conversion path is the same everywhere, so a visitor never has to work out what to click next.",
        },
      ],
      features: [
        { feature: "Care service system", detail: "Six services with individual pages and a shared, scannable structure." },
        { feature: "Specialty pages", detail: "Five clinical areas presented consistently for quick comparison." },
        { feature: "Provider directory", detail: "A browsable list of clinicians with a clear path to booking." },
        { feature: "Editorial wellness hub", detail: "Article templates and index for supporting content and search." },
      ],
      technology: [
        { choice: "Next.js App Router", reason: "A large route set with metadata for each page, built mostly from Server Components." },
        { choice: "Tailwind CSS", reason: "A shared utility system keeps dozens of pages visually consistent." },
        { choice: "Typed content modules", reason: "Services, specialties, and stories are structured data, ready to move behind a CMS." },
      ],
      responsive:
        "Dense multi column service and specialty grids restructure into readable single column sequences on mobile, and navigation is reorganised into grouped, touch friendly sections rather than a wall of links.",
      performance:
        "Static rendering with optimised imagery and limited client side JavaScript outside navigation and interactive elements.",
      gallery: [
        { photoId: "photo-1631217868264-e5b90bb7e133", alt: "Clinician speaking with a patient by video call" },
        { photoId: "photo-1666214280557-f1b5022eb634", alt: "Healthcare professional reviewing notes" },
        { photoId: "photo-1579684385127-1ef15d508118", alt: "Calm, modern healthcare environment" },
      ],
    },
  },
  {
    slug: "ember-and-oak",
    title: "Ember & Oak",
    industry: "Hospitality — Wood Fired Pizzeria",
    category: "Landing Pages",
    type: "Independent Project",
    tagline: "A single page pizzeria site with menu, hours, and WhatsApp ordering.",
    description:
      "A single page starter website for a wood fired pizzeria — story, full menu with dietary marks, opening hours and directions, and click to message ordering. Four sections, static output, and no client side JavaScript.",
    suggestedPackage: "Comparable to Corporate Website",
    designDirection:
      "A printed bill of fare. Hairline rules, small caps labels, and asymmetric editorial grids borrowed from a menu card rather than a SaaS landing page.",
    keyFeatures: [
      "Anchored single page structure",
      "Full menu with dietary marks and dot leaders",
      "Opening hours and directions",
      "Generated WhatsApp ordering links",
      "Zero client side JavaScript",
    ],
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "next/image"],
    cover: { photoId: "photo-1513104890138-7c749659a591", alt: "Wood fired pizza with a blistered crust" },
    externalUrl: "https://emartsantos.github.io/ember-and-oak/",
    sourceUrl: "https://github.com/emartsantos/ember-and-oak",
    liveVerified: true,
    caseStudy: {
      overview:
        "Ember & Oak is an independent project at a deliberately small, single page scope: four sections, no CMS, no e-commerce, and no backend. It is a study in doing a small site with real discipline.",
      businessScenario:
        "An independent pizzeria needs a page that does three practical jobs: tell a short story, publish a menu people can read on a phone at the door, and make booking or ordering a message away.",
      audience:
        "Local diners, nearby offices, and small event hosts choosing where to eat — most of them on a phone.",
      challenge:
        "Avoid every restaurant template cliché — the full bleed slider, the centred hero, the rounded card grid — while keeping the menu genuinely readable and the ordering path frictionless, all with no backend.",
      designStrategy:
        "Build the page like a menu card: numbered sections, hairline rules, small caps labels, and dot leaders that sit exactly on the text baseline. Ordering happens through WhatsApp deep links rather than a form, because a message converts faster than an inbox.",
      visualDirection:
        "Ink, paper, ember, and crust: four values and one accent, with Instrument Serif for display and Archivo for everything else. Ember appears only on things you can act on, which makes the WhatsApp button the loudest element without any gradient.",
      informationArchitecture: [
        { page: "Hero", purpose: "Positioning and the primary ordering action" },
        { page: "The kitchen", purpose: "Story, method, and supplier transparency" },
        { page: "The menu", purpose: "Pizza, small plates, and sweet & drinks with dietary marks" },
        { page: "Visit", purpose: "Address, hours, directions, and contact" },
      ],
      uxDecisions: [
        {
          decision: "WhatsApp deep links instead of a contact form",
          rationale:
            "A form needs a backend, spam handling, and a reply process; a prefilled message converts faster for a pizzeria and the number is stored once.",
        },
        {
          decision: "Menu rows use baseline aligned dot leaders",
          rationale:
            "The printed menu convention keeps prices scannable on a phone, achieved with a three track grid so the leader lands on the text baseline rather than near it.",
        },
        {
          decision: "No hamburger menu — the nav wraps to its own row",
          rationale:
            "With no client side state, the navigation simply reflows below the small breakpoint, keeping the page free of JavaScript.",
        },
      ],
      features: [
        { feature: "Single page anchored structure", detail: "Four numbered sections with in page anchors and no routing." },
        { feature: "Baseline dot leader menu", detail: "A three track grid puts the dotted rule exactly on the baseline, like print." },
        { feature: "Generated WhatsApp links", detail: "Each wa.me URL is built from one stored number and a context specific prefilled message." },
        { feature: "Inlaid photography", detail: "An overlapping, paper bordered image composition instead of a card gallery." },
        { feature: "Zero client JavaScript", detail: "Every component is a Server Component; there is no application bundle." },
      ],
      technology: [
        { choice: "Next.js App Router, static export", reason: "The whole site exports to plain files, deployed to GitHub Pages under a sub path." },
        { choice: "No client components", reason: "Navigation, hours, and ordering avoid state entirely, so no JavaScript ships for the app." },
        { choice: "Pre encoded WebP imagery", reason: "Because there is no image server on static hosting, photos are committed already optimised." },
      ],
      responsive:
        "The header is two rows on small screens and one from the small breakpoint up; the About and Visit sections become two column from the medium breakpoint; the menu becomes a full width, baseline aligned list designed for reading while standing.",
      performance:
        "Static output, self hosted fonts, pre encoded WebP images with explicit sizes, and no application JavaScript — the only shipped JavaScript is the framework runtime the stack requires.",
      gallery: [
        { photoId: "photo-1590947132387-155cc02f3212", alt: "Hands shaping dough on a floured wooden bench" },
        { photoId: "photo-1571407970349-bc81e7e96d47", alt: "Wood fired oven with a pizza baking on the hearth" },
        { photoId: "photo-1555396273-367ea4eb4db5", alt: "Warmly lit dining room with wooden tables" },
      ],
    },
  },
  {
    slug: "summit-peak",
    title: "Summit Peak Coffee Co.",
    industry: "Specialty Coffee Roastery & Café",
    category: "Landing Pages",
    type: "Independent Project",
    tagline: "A roastery and café site built around origin transparency.",
    description:
      "A premium single page site for a specialty coffee roastery and café — storytelling led by the process, from sourcing to brewing, an offerings showcase, visiting details, and an enquiry flow for wholesale and subscriptions.",
    suggestedPackage: "Comparable to Premium Corporate Website",
    designDirection:
      "Alpine Editorial. A restrained palette, editorial typography, generous negative space, and storytelling led by photography, with inquiry as the primary conversion.",
    keyFeatures: [
      "Process storytelling from sourcing to brewing",
      "Offerings showcase for beans, café bar, and retail",
      "Visit module with hours and location",
      "Inquiry form for wholesale, subscriptions, and events",
    ],
    techStack: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS v4", "react-hook-form", "Zod"],
    cover: { photoId: "photo-1447933601403-0c6688de566e", alt: "Freshly brewed coffee in a ceramic cup" },
    externalUrl: "https://summit-peak-coffee-co.vercel.app/",
    sourceUrl: "https://github.com/emartsantos/summit-peak-coffee-co",
    liveVerified: true,
    caseStudy: {
      overview:
        "Summit Peak Coffee Co. is an independent project: a bespoke single page site for a specialty coffee roastery and café, art directed around an Alpine Editorial concept.",
      businessScenario:
        "A small roastery and café competes on transparency and craft. The site has to convey origin, method, and standards, then turn that credibility into wholesale, subscription, and event enquiries.",
      audience:
        "Coffee enthusiasts, nearby café customers, and wholesale buyers — cafés, offices, and retailers considering the roaster as a supplier.",
      challenge:
        "Communicate craft and provenance without a wall of jargon, and drive a single conversion — the enquiry — while keeping the whole page fast and fully static.",
      designStrategy:
        "Lead with process. The page follows the coffee from sourcing to roasting to brewing, using numbered steps and photography to make a short supply chain feel concrete, then closes on the enquiry.",
      visualDirection:
        "Forest, terracotta, cream, and charcoal tokens with Playfair Display for display type and Inter for body. Generous negative space keeps the photography and a pull quote as the emotional anchors.",
      informationArchitecture: [
        { page: "Hero", purpose: "Positioning and the primary enquiry action" },
        { page: "Story", purpose: "The approach and a pull quote on craft" },
        { page: "Offerings", purpose: "Single origin beans, the café bar, and retail subscriptions" },
        { page: "Craft", purpose: "Standards guided by numbers and the sourcing to brewing process" },
        { page: "Visit", purpose: "Location, hours, and the inquiry form" },
      ],
      uxDecisions: [
        {
          decision: "One conversion goal — the enquiry",
          rationale:
            "Wholesale, subscription, and event interest all route to the same form, which keeps the page focused and the outcome measurable.",
        },
        {
          decision: "Standards stated as commitments, not claims",
          rationale:
            "Rather than fabricating reviews or results, the page states what the roastery will and will not do, and leaves space for real proof later.",
        },
        {
          decision: "All content centralised in one config file",
          rationale:
            "Copy, contact details, and CTAs live in a single typed object so the team can update the page without touching components.",
        },
      ],
      features: [
        { feature: "Process storytelling", detail: "A sourcing to brewing narrative in numbered steps with supporting photography." },
        { feature: "Offerings showcase", detail: "Beans, café bar, and retail or subscription presented as distinct, scannable blocks." },
        { feature: "Validated inquiry form", detail: "Built with react-hook-form and Zod, with inline errors and a WhatsApp fallback." },
        { feature: "Standards section", detail: "Transparency commitments that avoid invented reviews or results." },
      ],
      technology: [
        { choice: "Next.js 16 App Router", reason: "Fully prerendered static output with metadata for each page and SEO structure." },
        { choice: "react-hook-form + Zod", reason: "Typed, accessible form validation with inline error messaging." },
        { choice: "Centralised config", reason: "One typed config object drives every string, so content edits never touch markup." },
      ],
      responsive:
        "The process and offerings sections restructure from horizontal, photography led spreads into vertical sequences on mobile, with type scaled for reading distance and CTAs kept within thumb reach.",
      performance:
        "Static, prerendered routes, optimised local imagery with explicit sizes, and reduced motion aware scroll reveals; the form ships as the only interactive client component.",
      gallery: [
        { photoId: "photo-1554118811-1e0d58224f24", alt: "Warm café interior with wooden seating" },
        { photoId: "photo-1498804103079-a6351b050096", alt: "Freshly roasted coffee beans up close" },
        { photoId: "photo-1442512595331-e89e73853f31", alt: "Pour over coffee being brewed at the bar" },
      ],
    },
  },
  {
    slug: "apex-horizon",
    title: "Apex Horizon",
    industry: "Corporate — Technology",
    category: "Corporate Websites",
    type: "Independent Project",
    tagline: "A live corporate technology site with a typed front end and a Prisma data layer.",
    description:
      "A corporate website for Apex Horizon Technologies built with Next.js, TypeScript, and Tailwind CSS, with a Prisma data layer in the repository. It is deployed live on Vercel, and the source is public on GitHub.",
    suggestedPackage: "Comparable to Corporate Website",
    designDirection:
      "Corporate and structured — a restrained, typographic layout with a data layer in place for dynamic content.",
    keyFeatures: [
      "Corporate site structure and navigation",
      "Prisma schema included in the repository",
      "Environment configuration example provided",
      "Vercel deployment configuration",
    ],
    techStack: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Prisma"],
    cover: { photoId: "photo-1506905925346-21bda4d32df4", alt: "Mountain range reflected in an alpine lake" },
    externalUrl: "https://apex-horizon-technologies.vercel.app/",
    sourceUrl: "https://github.com/emartsantos/apex-horizon",
    liveVerified: true,
    caseStudy: {
      overview:
        "Apex Horizon is a corporate website for a fictional technology company, Apex Horizon Technologies. It is a working, deployed build that pairs a corporate front end with a Prisma data layer prepared for managed content.",
      businessScenario:
        "The project explores a corporate website that also carries a database — a common requirement when a company's site needs dynamic, managed content rather than fixed pages.",
      audience:
        "An audience at a technology company, with the site structured for corporate positioning and product presentation.",
      challenge:
        "Stand up a corporate front end that is ready to be backed by real data, without shipping a template that would need to be thrown away once content becomes dynamic.",
      designStrategy:
        "Keep the build structured and typed from the start: a Next.js App Router front end with Tailwind for layout, and a Prisma schema prepared for the data the site will eventually manage.",
      visualDirection:
        "A measured corporate direction — typographic hierarchy, restrained surfaces, and a palette suited to a technology brand.",
      informationArchitecture: [
        { page: "Home", purpose: "Corporate positioning and primary navigation" },
        { page: "Content pages", purpose: "Company and product information" },
        { page: "Data layer", purpose: "Prisma schema prepared for managed content" },
      ],
      uxDecisions: [
        {
          decision: "Typed, structured build from the outset",
          rationale:
            "Because the site is intended to become data driven, the layout and content model are kept separate from the start.",
        },
        {
          decision: "Corporate hierarchy kept shallow",
          rationale:
            "Primary sections are kept to a shallow hierarchy so company and product content stays a click or two from the home page.",
        },
      ],
      features: [
        { feature: "Corporate front end", detail: "A Next.js and Tailwind layout structured for a technology company's content." },
        { feature: "Prisma data layer", detail: "A schema included in the repository, ready for dynamic content as the build progresses." },
        { feature: "Deployment configuration", detail: "Vercel configuration and an environment example are included in the repository." },
      ],
      technology: [
        { choice: "Next.js + TypeScript", reason: "A typed, modern foundation suitable for a site that will grow into dynamic content." },
        { choice: "Prisma", reason: "A data layer built from a schema first, ready to back managed content when the site reaches that stage." },
        { choice: "Tailwind CSS", reason: "Utility styling for a consistent corporate visual system." },
      ],
      responsive:
        "Corporate layouts are built responsive from the start, with a single column fallback for small screens and a structured multi column presentation on larger viewports.",
      performance:
        "The project is built on the Next.js App Router, which prerenders pages by default and only adds client JavaScript where interactivity requires it.",
      gallery: [
        { photoId: "photo-1486406146926-c627a92ad1ab", alt: "Modern glass office building facade" },
        { photoId: "photo-1497366216548-37526070297c", alt: "Meeting room with glass walls in a modern office" },
        { photoId: "photo-1521737604893-d14cc237f11d", alt: "Team in discussion around a table" },
      ],
    },
  },
];

export const allProjects: Project[] = independentProjects;

export function getProject(slug: string): Project | undefined {
  return allProjects.find((p) => p.slug === slug);
}
