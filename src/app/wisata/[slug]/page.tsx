import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Starburst from "@/components/Starburst";
import {
  categories,
  destinations,
  featuredDestinations,
  getByCategory,
  getDestination,
  getTourUrl,
  type Destination,
} from "@/data/destinations";
import styles from "./detail.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return destinations.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestination(slug);
  if (!destination) return {};
  return { title: destination.name, description: destination.tagline };
}

/** Judul bergaya pill: kata terakhir merah, kata sebelumnya (jika ada ≥3 kata) putih. */
function TitlePills({ text }: { text: string }) {
  const words = text.split(" ");
  const last = words[words.length - 1];
  const middle = words.length >= 3 ? words[words.length - 2] : null;
  const plain = words.slice(0, words.length >= 3 ? -2 : -1).join(" ");

  return (
    <>
      {plain && <>{plain} </>}
      {middle && <span className={`${styles.pill} ${styles.pillWhite}`}>{middle}</span>}{" "}
      <span className={`${styles.pill} ${styles.pillRed}`}>{last}</span>
    </>
  );
}

function related(d: Destination): Destination[] {
  const pool = [...getByCategory(d.category), ...featuredDestinations].filter((x) => x.slug !== d.slug && x.image);
  const unique = pool.filter((x, i) => pool.findIndex((y) => y.slug === x.slug) === i);
  return unique.slice(0, 3);
}

const factStyles = ["factPurple", "factYellow", "factInk", "factOutline"] as const;

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const d = getDestination(slug);
  if (!d) notFound();

  const tourUrl = getTourUrl(d);
  const gallery = d.gallery ?? [];
  const mapSrc =
    d.mapEmbed ??
    `https://www.google.com/maps?q=${encodeURIComponent(`${d.name}, Palembang`)}&output=embed`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${d.name}, Palembang`)}`;
  const intro = d.tagline ?? `Temukan informasi, foto, dan lokasi ${d.name} di Palembang.`;
  const initials = d.name
    .split(" ")
    .filter((w) => /^[A-Za-z]/.test(w))
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  // Baris informasi: tiap section = satu baris; fakta ditempel di baris pertama.
  const rows =
    d.sections && d.sections.length > 0
      ? d.sections
      : [{ title: "Informasi", body: [`Informasi lengkap tentang ${d.name} sedang disiapkan. Lihat lokasinya di peta di bawah.`] }];

  return (
    <>
      <Navbar />
      <main className={styles.page}>
        {/* ===== Hero ===== */}
        <section className={styles.hero}>
          <div className={`${styles.wrap} ${styles.heroGrid}`}>
            <div className={styles.heroText}>
              <span className={styles.crumb}>{categories[d.category].label} · Palembang</span>
              <h1 className={styles.title}>
                <TitlePills text={d.name} />
              </h1>
              <p className={styles.lead}>{intro}</p>
              <div className={styles.actions}>
                <a href={gallery.length >= 2 ? "#galeri" : "#info"} className={styles.btnDark}>
                  {gallery.length >= 2 ? "Lihat Galeri" : "Baca Informasi"}
                </a>
                {tourUrl ? (
                  <a href={tourUrl} target="_blank" rel="noopener noreferrer" className={styles.btnRed}>
                    Tur Virtual 3D <span className={styles.btnIcon}>↗</span>
                  </a>
                ) : (
                  <a href="#lokasi" className={styles.btnRed}>
                    Lihat Lokasi <span className={styles.btnIcon}>↓</span>
                  </a>
                )}
              </div>
            </div>

            <div className={styles.visual}>
              <Starburst className={styles.burstBig} points={14} depth={0.82} />
              <Starburst className={styles.burstPurple} points={9} depth={0.7} />
              <Starburst className={styles.burstRed} points={10} depth={0.72} />
              <div className={styles.frame}>
                {d.image ? (
                  <Image src={d.image} alt={d.name} fill priority sizes="(max-width: 900px) 90vw, 520px" />
                ) : (
                  <div className={styles.initials}>{initials}</div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ===== Sambutan ===== */}
        {d.tagline && (
        <section className={styles.welcome}>
          <div className={styles.wrap}>
            <div className={styles.welcomePanel}>
              <Starburst className={styles.welcomeBurstA} points={12} depth={0.75} />
              <Starburst className={styles.welcomeBurstB} points={9} depth={0.7} />
              <h2>
                Mengenal <span className={`${styles.pill} ${styles.pillYellow}`}>{d.name}</span>
              </h2>
              <p>{intro}</p>
            </div>
          </div>
        </section>
        )}

        {/* ===== Informasi ===== */}
        <section className={styles.info} id="info">
          <div className={styles.wrap}>
            {rows.map((s, i) => (
              <div key={s.title} className={styles.infoRow}>
                <div className={styles.infoHead}>
                  <h2>
                    <span className={`${styles.pill} ${i % 2 === 0 ? styles.pillPurple : styles.pillRed}`}>{s.title}</span>
                  </h2>
                  {i === 0 && d.facts && (
                    <ul className={styles.facts}>
                      {d.facts.map((f, k) => (
                        <li key={f.label} className={styles[factStyles[k % factStyles.length]]}>
                          <span>{f.label}</span>
                          <strong>{f.value}</strong>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className={styles.infoBody}>
                  {s.body.map((p, k) => (
                    <p key={k}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
            {d.sourceNote && <p className={styles.source}>{d.sourceNote}</p>}
          </div>
        </section>

        {/* ===== Galeri ===== */}
        {gallery.length >= 2 && (
          <section className={styles.gallery} id="galeri">
            <Starburst className={styles.galleryBurst} points={16} depth={0.8} />
            <div className={styles.wrap}>
              <div className={styles.sectionHead}>
                <h2>
                  <span className={`${styles.pill} ${styles.pillYellow}`}>Galeri</span>{" "}
                  <span className={`${styles.pill} ${styles.pillWhite}`}>Foto</span>
                </h2>
                <p>Klik foto untuk memperbesar.</p>
              </div>
              <Gallery items={gallery} />
            </div>
          </section>
        )}

        {/* ===== Tur virtual 3D (hanya jika tersedia di Indonesia Virtual Tour) ===== */}
        {tourUrl && (
          <section className={styles.tour} id="tur">
            <div className={styles.wrap}>
              <div className={styles.tourPanel}>
                <div className={styles.tourText}>
                  <span className={styles.tourTag}>Virtual Tour</span>
                  <h2>
                    Jelajahi <span className={`${styles.pill} ${styles.pillYellow}`}>3D</span> {d.name}
                  </h2>
                  <p>
                    Rasakan suasana {d.name} dalam tampilan 360° tanpa perlu datang ke lokasi. Seret layar untuk melihat ke segala arah.
                  </p>
                  <a href={tourUrl} target="_blank" rel="noopener noreferrer" className={styles.tourBtn}>
                    Mulai Tur Virtual <span className={styles.btnIcon}>↗</span>
                  </a>
                  <small>Tur disediakan oleh Indonesia Virtual Tour dan dibuka di tab baru.</small>
                </div>
                <div className={styles.tourVisual} aria-hidden="true">
                  <Starburst className={styles.tourBurst} points={14} depth={0.8} />
                  <span>360°</span>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ===== Lokasi ===== */}
        <section className={styles.location} id="lokasi">
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <h2>
                <span className={`${styles.pill} ${styles.pillRed}`}>Lokasi</span>
              </h2>
              <a href={mapsLink} target="_blank" rel="noopener noreferrer" className={styles.mapLink}>
                Buka di Google Maps ↗
              </a>
            </div>
            <div className={styles.map}>
              <iframe
                src={mapSrc}
                title={`Peta ${d.name}`}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* ===== Destinasi lain ===== */}
        <section className={styles.more}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <h2>
                <span className={`${styles.pill} ${styles.pillWhite}`}>Destinasi</span>{" "}
                <span className={`${styles.pill} ${styles.pillRed}`}>Lainnya</span>
              </h2>
              <Link href="/#destinations" className={styles.mapLink}>
                Kembali ke beranda →
              </Link>
            </div>
            <ul className={styles.moreGrid}>
              {related(d).map((r) => (
                <li key={r.slug}>
                  <Link href={`/wisata/${r.slug}`} className={styles.moreCard}>
                    <span className={styles.moreImg}>
                      {r.image && <Image src={r.image} alt={r.name} fill sizes="(max-width: 700px) 100vw, 380px" />}
                    </span>
                    <span className={styles.moreName}>
                      <strong>{r.name}</strong>
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
      </main>
      <Footer banner={false} />
    </>
  );
}
