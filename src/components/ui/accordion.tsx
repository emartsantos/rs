"use client";

import { useId, useState } from "react";
import { Minus, Plus } from "lucide-react";
import styles from "./accordion.module.css";

type AccordionItem = {
  question: string;
  answer: string;
};

export function Accordion({
  items,
  style,
  className = "",
}: {
  items: AccordionItem[];
  style?: React.CSSProperties;
  className?: string;
}) {
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <div className={`${styles.list} ${className}`} style={style}>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.question} className={`${styles.item} ${isOpen ? styles.open : ""}`}>
            <h3>
              <button
                type="button"
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={`${baseId}-panel-${i}`}
                id={`${baseId}-trigger-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className={styles.question}>{item.question}</span>
                {isOpen ? (
                  <Minus className={styles.icon} aria-hidden="true" size={16} strokeWidth={1.5} />
                ) : (
                  <Plus className={styles.icon} aria-hidden="true" size={16} strokeWidth={1.5} />
                )}
              </button>
            </h3>
            <div
              role="region"
              id={`${baseId}-panel-${i}`}
              aria-labelledby={`${baseId}-trigger-${i}`}
              className={styles.panel}
              hidden={!isOpen}
            >
              <p className={styles.answer}>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
