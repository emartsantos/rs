export type Concept = {
  letter: string;
  id: string;
  title: string;
  summary: string;
  designDirection: string[];
  suitableFor: string;
  cover: { photoId: string; alt: string };
};

/*
 * Website Concepts — illustrative design directions, not client engagements.
 * They exist to show that the same craft adapts to different kinds of
 * business, and they are labelled as concepts everywhere they appear.
 */
export const concepts: Concept[] = [
  {
    letter: "A",
    id: "corporate-professional-services",
    title: "Corporate & Professional Services",
    summary:
      "Authority communicated through structure and typography rather than claims — a feel of a briefing document for firms that are judged on rigour.",
    designDirection: [
      "Refined typography with a clear editorial hierarchy",
      "Structured layouts that read like a document, with section numbering",
      "Professional photography of working environments",
      "Obvious service navigation and sector entry points",
      "An inquiry flow that builds trust",
    ],
    suitableFor: "Consulting firms, professional services, and established companies.",
    cover: { photoId: "photo-1497366216548-37526070297c", alt: "Meeting room with glass walls in a modern office" },
  },
  {
    letter: "B",
    id: "premium-retail-ecommerce",
    title: "Premium Retail & E-commerce",
    summary:
      "The product is the only decoration — an editorial storefront that presents a curated range with the care of a gallery and the ergonomics of a shop.",
    designDirection: [
      "Art direction led by the product, with consistent proportions",
      "Carefully composed, editorial collection layouts",
      "Elegant product detail pages — material, dimensions, care",
      "Clear, quiet shopping navigation",
      "A shopping experience designed for mobile first",
    ],
    suitableFor: "Fashion, lifestyle, jewellery, and specialty retail.",
    cover: { photoId: "photo-1578749556568-bc2c40e68b61", alt: "Handmade ceramic vessels on a pale surface" },
  },
  {
    letter: "C",
    id: "food-cafe-hospitality",
    title: "Food, Café & Hospitality",
    summary:
      "Composition led by photography, with a distinctive brand voice — practical information for the walk over, and ordering or booking one action away.",
    designDirection: [
      "Composition led by photography and generous negative space",
      "Distinctive brand typography",
      "A menu or product list built for quick scanning",
      "Warm or restrained colour drawn from the brand",
      "Local information and reservation, enquiry, or ordering actions",
    ],
    suitableFor: "Cafés, bakeries, restaurants, and hospitality businesses.",
    cover: { photoId: "photo-1495474472287-4d71bcdd2085", alt: "Coffee cup and pour over setup on a wooden counter" },
  },
  {
    letter: "D",
    id: "logistics-industrial",
    title: "Logistics & Industrial",
    summary:
      "Operational clarity for B2B — services explained plainly, information architected for scanning, and a quote or enquiry workflow built in.",
    designDirection: [
      "Operational clarity over ornament",
      "Strong, legible typography at large and small sizes",
      "Structured information architecture for complex services",
      "Purposeful diagrams and photography where they add meaning",
      "Clear service explanations and quote workflows",
    ],
    suitableFor: "Logistics, manufacturing, construction, and B2B companies.",
    cover: { photoId: "photo-1494412574643-ff11b0a5c1c3", alt: "Stacked shipping containers at a port terminal" },
  },
  {
    letter: "E",
    id: "enterprise-web-application",
    title: "Enterprise Web Application",
    summary:
      "Interface design built around the workflow for internal systems: readable data, efficient forms, and permissions and statuses made obvious.",
    designDirection: [
      "Navigation built around the workflow",
      "Readable data tables that hold up to long use",
      "Efficient forms with clear labels",
      "Experiences tailored to each role, and clear permissions",
      "Data visualisation only where real data exists",
    ],
    suitableFor: "Internal business systems, management platforms, and operations software.",
    cover: { photoId: "photo-1497215728101-856f4ea42174", alt: "Operations team working across screens in an open office" },
  },
];
