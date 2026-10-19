import Image from "next/image";
import type { Metadata } from "next";
import { PageHero } from "@/components/ui/page-hero";
import { Cta } from "@/components/ui/cta";
import { Reveal } from "@/components/ui/reveal";
import { portfolioHref } from "@/lib/site";
import { concepts } from "@/data/concepts";
import { unsplashUrl } from "@/data/projects";
import styles from "./concepts.module.css";

export const metadata: Metadata = {
  title: "Website Concepts",
  description:
    "Five website design directions — corporate, premium retail, food and hospitality, logistics, and enterprise — illustrating how the same craft adapts to different kinds of business.",
  alternates: { canonical: "/concepts" },
};

export default function ConceptsPage() {
  return (
    <>
      <PageHero
        index="03"
        eyebrow="Website concepts"
        title={
          <>
            Five directions, <span className="serif">one craft.</span>
          </>
        }
        note="Independent design studies, clearly labelled as concepts. The work in Selected Work is real and deployed — these illustrate how the same approach adapts to different businesses."
      >
        <Cta href={portfolioHref("/contact")}>Discuss a project</Cta>
        <Cta href={portfolioHref("/work")} variant="secondary">
          See real projects
        </Cta>
      </PageHero>

      <section className="section" aria-label="Concept directions">
        <div className="shell">
          <div className={styles.grid}>
            {concepts.map((concept) => (
              <Reveal key={concept.id} className={styles.cell}>
                <article className={styles.card}>
                  <div className={`${styles.media} img-wrapper`}>
                    <Image
                      src={unsplashUrl(concept.cover.photoId, 1400)}
                      alt={concept.cover.alt}
                      fill
                      sizes="(min-width: 1100px) 50vw, 100vw"
                      className={styles.image}
                    />
                    <span className={`tag tag-solid ${styles.badge}`}>
                      Concept {concept.letter}
                    </span>
                  </div>

                  <div className={styles.body}>
                    <span className={styles.letter} aria-hidden="true">
                      {concept.letter}
                    </span>
                    <h2 className={styles.title}>{concept.title}</h2>
                    <p className={styles.summary}>{concept.summary}</p>

                    <div className={styles.direction}>
                      <span className="eyebrow">Design direction</span>
                      <ul className={styles.directionList}>
                        {concept.designDirection.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <p className={styles.suitable}>
                      <span className="eyebrow">Suitable for</span>
                      <span>{concept.suitableFor}</span>
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.band} band-ink`} aria-label="Start a project">
        <div className="shell">
          <div className={styles.bandInner}>
            <h2 className={styles.bandTitle}>
              Like one of these directions, or want something that fits more precisely?
            </h2>
            <Cta href={portfolioHref("/contact")}>Start a project</Cta>
          </div>
        </div>
      </section>
    </>
  );
}
