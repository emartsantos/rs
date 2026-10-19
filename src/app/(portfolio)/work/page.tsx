import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Cta } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/reveal";
import { FeaturedProjectRow } from "@/components/portfolio/featured-project-row";
import { portfolioHref } from "@/lib/site";
import { independentProjects } from "@/data/projects";
import styles from "./work.module.css";

export const metadata: Metadata = {
  title: "Selected Work",
  description:
    "Independent projects by Raymart Santos — logistics platforms, telehealth systems, hospitality sites, and specialty coffee brands, each with its own design language.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        index="01"
        eyebrow="Selected work"
        title={
          <>
            Five projects, five <span className="serif">distinct</span> design languages.
          </>
        }
        note="Each project is my own work on a real, deployed website — linked to its live deployment and source wherever they exist."
      >
        <Cta href={portfolioHref("/contact")}>Start a project</Cta>
        <Cta href={portfolioHref("/concepts")} variant="secondary">
          See concepts
        </Cta>
      </PageHero>

      <section className="section" aria-label="Projects">
        <div className="shell">
          <div className={styles.list}>
            {independentProjects.map((project, index) => (
              <Reveal key={project.slug}>
                <FeaturedProjectRow project={project} index={index} flip={index % 2 === 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
