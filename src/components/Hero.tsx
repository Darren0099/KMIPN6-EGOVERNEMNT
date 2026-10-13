"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { heroSlides } from "@/data/site";
import styles from "./hero.module.css";

const AUTOPLAY_MS = 5000;

export default function Hero() {
  const [active, setActive] = useState(0);
  const count = heroSlides.length;
  const slide = heroSlides[active];

  const next = useCallback(() => setActive((i) => (i + 1) % count), [count]);
  const prev = useCallback(() => setActive((i) => (i - 1 + count) % count), [count]);

  // Autoplay; interval di-reset setiap slide berganti (klik panah/thumbnail juga).
  useEffect(() => {
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [active, next]);

  return (
    <section className={styles.hero} aria-roledescription="carousel" aria-label="Destinasi unggulan">
      {/* Lapisan foto latar */}
      <div className={styles.bg}>
        {heroSlides.map((s, i) => (
          <div key={s.title} className={`${styles.bgItem} ${i === active ? styles.bgActive : ""}`} aria-hidden={i !== active}>
            <Image src={s.image} alt={s.title} fill priority={i === 0} sizes="100vw" className={styles.img} />
          </div>
        ))}
      </div>

      {/* Lapisan depan: teks di atas, thumbnail di bawah (tidak pernah saling menimpa) */}
      <div className={styles.fg}>
        <div className={styles.content} key={active} aria-live="polite">
          <p>{String(active + 1).padStart(2, "0")}</p>
          <h2>{slide.title}</h2>
          <p>{slide.description}</p>
        </div>

        <div className={styles.thumbnail}>
          {heroSlides.map((s, i) => (
            <button
              type="button"
              key={s.title}
              className={`${styles.thumb} ${i === active ? styles.thumbActive : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Tampilkan ${s.thumbLabel}`}
            >
              <Image src={s.thumbImage} alt="" fill sizes="150px" />
              <span>{s.thumbLabel}</span>
            </button>
          ))}
        </div>
      </div>

      <div className={styles.arrows}>
        <button type="button" onClick={prev} aria-label="Slide sebelumnya">
          &lt;
        </button>
        <button type="button" onClick={next} aria-label="Slide berikutnya">
          &gt;
        </button>
      </div>
    </section>
  );
}
