import Image from "next/image";
import Link from "next/link";
import {
  categories,
  categoryOrder,
  destinations,
  featuredDestinations,
  getByCategory,
} from "@/data/destinations";
import { about, cityView, history, puntiKayuHighlight, site, vision2030, whyChooseUs } from "@/data/site";
import DestinationExplorer from "./DestinationExplorer";
import Starburst from "./Starburst";
import styles from "./home.module.css";

const factStyles = ["factPurple", "factYellow", "factInk", "factOutline", "factPurple"] as const;

export function WhyChooseUs() {
  return (
    <section className={styles.why}>
      <h2 className={styles.sectionTitle} data-reveal="up">
        <span className="pill pill-yellow">Why</span> Choose <span className="pill pill-red">Us</span>
      </h2>
      <div className={styles.whyText} data-reveal-group="up">
        {whyChooseUs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </section>
  );
}

export function About() {
  return (
    <section className={styles.about} id="about">
      <div className={`${styles.aboutGrid} ${styles.wrap}`}>
        <div className={styles.aboutImages} data-reveal="left">
          {[0, 1, 2, 3].map((i) => (
            <Image key={i} src={about.image} alt="" fill sizes="400px" className={styles.aboutImg} />
          ))}
        </div>

        <div data-reveal="right">
          <h2 className={styles.aboutTitle}>
            <small>Welcome To</small>
            <span className="pill pill-purple">Palembang</span> Go <span className="pill pill-red">Vacation!</span>
          </h2>
          <p className={styles.aboutDescription}>{about.description}</p>

          <ul className={styles.facts} data-reveal-group="up">
            {about.facts.map((f, i) => (
              <li key={f.label} className={styles[factStyles[i % factStyles.length]]}>
                <span>{f.label.replace(":", "")}</span>
                <strong className={f.highlight ? styles.aboutLink : undefined}>{f.value}</strong>
              </li>
            ))}
          </ul>

          <div className={styles.aboutBottom}>
            <Link href="#destinations" className="btn-red">
              Explore More! <span className="btn-icon">↓</span>
            </Link>
            <div className={styles.socials}>
              {about.socials.map((s) => (
                <a key={s.label} href="#" aria-label={s.label}>
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function History() {
  const tones = ["tonePurple", "toneRed", "toneYellow", "toneInk"] as const;
  return (
    <section className={styles.history} id="sejarah">
      <div className={styles.wrap}>
        <h2 className={styles.sectionTitle} data-reveal="up">
          <span className="pill pill-red">Sejarah</span> <span className="pill pill-purple">Palembang</span>
        </h2>
        <ol className={styles.timeline} data-reveal-group="up">
          {history.map((h, i) => (
            <li key={h.title} className={`${styles.timeCard} ${styles[tones[i % tones.length]]}`}>
              <span className={styles.period}>{h.period}</span>
              <h3>{h.title}</h3>
              <p>{h.text}</p>
            </li>
          ))}
        </ol>

        <div className={styles.vision} data-reveal="zoom">
          <Starburst className={styles.visionBurst} points={12} depth={0.75} />
          <h3>
            Visi Kota Palembang <span className="pill pill-yellow">2030</span>
          </h3>
          <ul>
            {vision2030.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function PuntiKayu() {
  const p = puntiKayuHighlight;
  return (
    <section className={styles.punti}>
      <Starburst className={styles.puntiBurst} points={16} depth={0.8} />
      <div className={`${styles.puntiRow} ${styles.wrap}`}>
        <div className={styles.puntiText} data-reveal="left">
          <h2>
            <span className="pill pill-white">Punti</span> <span className="pill pill-yellow">Kayu</span>
          </h2>
          <p>{p.description}</p>
          <Link href={`/wisata/${p.slug}`} className="btn-yellow">
            Explore <span className="btn-icon">↗</span>
          </Link>
        </div>
        <ul className={styles.puntiCards} data-reveal-group="right">
          {p.cards.map((c) => (
            <li key={c.label} className={styles.puntiCard}>
              <span className={styles.puntiPhoto}>
                <Image src={c.image} alt={c.label} fill sizes="(max-width: 600px) 45vw, 240px" />
              </span>
              <strong>{c.label}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Stats() {
  const stats = [
    { icon: "fa-solid fa-landmark-dome", label: "Wisata Budaya dan Tempat", value: getByCategory("tempat").length },
    { icon: "fa-solid fa-tree-city", label: "Wisata Buatan", value: getByCategory("buatan").length },
    { icon: "fa-solid fa-mountain-city", label: "Wisata Alam", value: getByCategory("alam").length },
    { icon: "fa-solid fa-bowl-food", label: "Wisata Kuliner", value: getByCategory("kuliner").length },
  ];
  return (
    <div className={styles.statsWrap}>
      <div className={`${styles.stats} ${styles.wrap}`} data-reveal-group="up">
        {stats.map((s) => (
          <div key={s.label} className={styles.stat}>
            <i className={s.icon} />
            <div className={styles.statValue}>{s.value}</div>
            <h3>{s.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export function Destinations() {
  return (
    <section className={styles.destinations} id="destinations">
      <div className={styles.wrap}>
        <h2 className={styles.sectionTitle} data-reveal="up">
          <span className="pill pill-yellow">Destinasi</span> <span className="pill pill-red">Pilihan</span>
        </h2>
        <ul className={styles.cards} data-reveal-group="up">
          {featuredDestinations.map((d) => (
            <li key={d.slug}>
              <Link href={`/wisata/${d.slug}`} className={styles.card}>
                <span className={styles.cardPhoto}>
                  {d.image && <Image src={d.image} alt={d.name} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 380px" />}
                </span>
                <span className={styles.cardInfo}>
                  <span>
                    <strong>{d.name}</strong>
                    {d.tagline && <small>{d.tagline}</small>}
                  </span>
                  <span className={styles.arrow} aria-hidden="true">
                    ↗
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Explorer() {
  const items = destinations.map((d) => ({
    slug: d.slug,
    name: d.name,
    category: d.category,
    image: d.image,
    tagline: d.tagline,
    hasTour: Boolean(d.tourSlug),
  }));
  const tabs = categoryOrder.map((c) => ({ key: c, label: categories[c].label }));
  return (
    <section className={styles.explorer} id="semua">
      <div className={styles.wrap}>
        <h2 className={styles.sectionTitle} data-reveal="up">
          <span className="pill pill-white">Semua</span> <span className="pill pill-purple">Destinasi</span>
        </h2>
        <p className={styles.sectionLead} data-reveal="up">
          {destinations.length} destinasi wisata Palembang. Tanda <b>360°</b> berarti tersedia tur virtual 3D.
        </p>
        <DestinationExplorer items={items} tabs={tabs} />
      </div>
    </section>
  );
}

export function CityView() {
  return (
    <section className={styles.city}>
      <div className={styles.wrap}>
        <h2 className={styles.sectionTitle} data-reveal="up">
          <span className="pill pill-red">Palembang</span> <span className="pill pill-white">City View</span>
        </h2>
        <ul className={styles.cityRow} data-reveal-group="up">
          {cityView.map((c) => (
            <li key={c.label} className={styles.cityCol}>
              <Image src={c.image} alt={c.label} fill sizes="(max-width: 800px) 100vw, 380px" />
              <span className={styles.cityLabel}>{c.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function MapSection() {
  return (
    <section className={styles.map} id="maps">
      <div className={styles.wrap}>
        <h2 className={styles.sectionTitle} data-reveal="up">
          <span className="pill pill-yellow">Peta</span> <span className="pill pill-red">Lokasi</span>
        </h2>
        <div className={styles.mapFrame} data-reveal="zoom">
          <iframe
            src={site.mapEmbed}
            title="Lokasi Dinas Pariwisata Kota Palembang"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
