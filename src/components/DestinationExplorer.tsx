"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./explorer.module.css";

export interface ExplorerItem {
  slug: string;
  name: string;
  category: string;
  image?: string;
  tagline?: string;
  hasTour: boolean;
}

export interface ExplorerTab {
  key: string;
  label: string;
}

const PAGE_SIZE = 12;

export default function DestinationExplorer({ items, tabs }: { items: ExplorerItem[]; tabs: ExplorerTab[] }) {
  const [active, setActive] = useState(tabs[0].key);
  const [visible, setVisible] = useState(PAGE_SIZE);

  const list = items.filter((i) => i.category === active);
  const shown = list.slice(0, visible);

  return (
    <div>
      <div className={styles.tabs} role="tablist">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            role="tab"
            aria-selected={t.key === active}
            className={`${styles.tab} ${t.key === active ? styles.tabActive : ""}`}
            onClick={() => {
              setActive(t.key);
              setVisible(PAGE_SIZE);
            }}
          >
            {t.label}
            <span>{items.filter((i) => i.category === t.key).length}</span>
          </button>
        ))}
      </div>

      <ul className={styles.grid}>
        {shown.map((d) => (
          <li key={d.slug}>
            <Link href={`/wisata/${d.slug}`} className={styles.card}>
              <span className={styles.photo}>
                {d.image ? (
                  <Image src={d.image} alt={d.name} fill sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 280px" />
                ) : (
                  <span className={styles.initials}>{d.name.replace(/[^A-Za-z ]/g, "").split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("").toUpperCase()}</span>
                )}
                {d.hasTour && <span className={styles.tour}>360°</span>}
              </span>
              <span className={styles.name}>
                <strong>{d.name}</strong>
                <span className={styles.arrow} aria-hidden="true">
                  ↗
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>

      {visible < list.length && (
        <div className={styles.more}>
          <button type="button" className="btn-dark" onClick={() => setVisible((v) => v + PAGE_SIZE)}>
            Tampilkan lebih banyak ({list.length - visible})
          </button>
        </div>
      )}
    </div>
  );
}
