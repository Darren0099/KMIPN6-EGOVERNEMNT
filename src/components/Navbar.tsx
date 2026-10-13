"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { categories, categoryOrder, getByCategory } from "@/data/destinations";
import { companyMenu } from "@/data/site";
import styles from "./navbar.module.css";

type MenuKey = "wisata" | "company";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<MenuKey | null>(null);

  const closeAll = () => {
    setOpen(false);
    setDropdown(null);
  };
  const toggleDropdown = (key: MenuKey) => setDropdown((cur) => (cur === key ? null : key));

  // Kunci scroll body saat menu mobile terbuka
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Navigasi utama">
        <Link href="/" className={styles.logo} onClick={closeAll}>
          <Image src="/img/logo.png" alt="" width={36} height={36} className={styles.logoImg} priority />
          <span>
            Palembang <b>Go Vacation!</b>
          </span>
        </Link>

        <button
          type="button"
          className={`${styles.toggle} ${open ? styles.toggleOpen : ""}`}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <div className={`${styles.menu} ${open ? styles.menuOpen : ""}`}>
          <ul className={styles.list}>
            <li>
              <Link href="/#sejarah" className={styles.link} onClick={closeAll}>
                Sejarah
              </Link>
            </li>

            <li className={`${styles.item} ${dropdown === "wisata" ? styles.itemOpen : ""}`}>
              <button type="button" className={`${styles.link} ${styles.dropdownButton}`} onClick={() => toggleDropdown("wisata")} aria-expanded={dropdown === "wisata"}>
                Wisata <i className={styles.chevron} />
              </button>
              <div className={styles.panel}>
                <div className={styles.panelClip}>
                  <div className={`${styles.panelInner} ${styles.cols4}`}>
                    {categoryOrder.map((cat) => (
                      <div key={cat} className={styles.group}>
                        <span className={styles.groupTitle}>
                          <i className={categories[cat].icon} /> {categories[cat].label}
                        </span>
                        <ul className={styles.sublist}>
                          {getByCategory(cat).map((d) => (
                            <li key={d.slug}>
                              <Link href={`/wisata/${d.slug}`} className={styles.sublink} onClick={closeAll}>
                                {d.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>

            <li>
              <Link href="/#destinations" className={styles.link} onClick={closeAll}>
                Event
              </Link>
            </li>

            <li className={`${styles.item} ${dropdown === "company" ? styles.itemOpen : ""}`}>
              <button type="button" className={`${styles.link} ${styles.dropdownButton}`} onClick={() => toggleDropdown("company")} aria-expanded={dropdown === "company"}>
                Company <i className={styles.chevron} />
              </button>
              <div className={`${styles.panel} ${styles.panelSmall}`}>
                <div className={styles.panelClip}>
                  <div className={`${styles.panelInner} ${styles.cols2}`}>
                    {companyMenu.map((g) => (
                      <div key={g.title} className={styles.group}>
                        <span className={styles.groupTitle}>
                          <i className={g.icon} /> {g.title}
                        </span>
                        <ul className={styles.sublist}>
                          {g.links.map((l) => (
                            <li key={l}>
                              <Link href="/#contact" className={styles.sublink} onClick={closeAll}>
                                {l}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <Link href="/#destinations" className={styles.cta} onClick={closeAll}>
            Jelajahi
          </Link>
        </div>
      </nav>
    </header>
  );
}
