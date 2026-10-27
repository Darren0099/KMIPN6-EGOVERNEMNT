"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import styles from "./gallery.module.css";

export interface GalleryItem {
  src: string;
  alt: string;
}

export default function Gallery({ items }: { items: GalleryItem[] }) {
  const [current, setCurrent] = useState<number | null>(null);
  const total = items.length;

  const close = useCallback(() => setCurrent(null), []);
  const step = useCallback((dir: 1 | -1) => setCurrent((i) => (i === null ? i : (i + dir + total) % total)), [total]);

  useEffect(() => {
    if (current === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [current, close, step]);

  return (
    <>
      <ul className={styles.grid} data-count={Math.min(total, 5)} data-reveal-group="up">
        {items.map((g, i) => (
          <li key={g.src}>
            <button type="button" className={styles.card} onClick={() => setCurrent(i)} aria-label={`Perbesar foto: ${g.alt}`}>
              <span className={styles.badge}>Foto {String(i + 1).padStart(2, "0")}</span>
              <span className={styles.photo}>
                <Image src={g.src} alt={g.alt} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 380px" />
              </span>
              <span className={styles.caption}>
                <span>{g.alt}</span>
                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current !== null && (
        <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label="Galeri foto" onClick={close}>
          <button type="button" className={styles.close} onClick={close} aria-label="Tutup">
            ×
          </button>
          {total > 1 && (
            <>
              <button
                type="button"
                className={`${styles.nav} ${styles.prev}`}
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label="Foto sebelumnya"
              >
                ‹
              </button>
              <button
                type="button"
                className={`${styles.nav} ${styles.next}`}
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label="Foto berikutnya"
              >
                ›
              </button>
            </>
          )}
          <figure className={styles.figure} onClick={(e) => e.stopPropagation()}>
            <div className={styles.full}>
              <Image src={items[current].src} alt={items[current].alt} fill sizes="100vw" priority />
            </div>
            <figcaption>
              {items[current].alt} · {current + 1}/{total}
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
