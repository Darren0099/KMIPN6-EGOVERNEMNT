import Image from "next/image";
import Link from "next/link";
import { site } from "@/data/site";
import NewsletterForm from "./NewsletterForm";
import styles from "./footer.module.css";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Destinations", href: "/#destinations" },
  { label: "Maps", href: "/#maps" },
];

export default function Footer({ banner = true }: { banner?: boolean }) {
  return (
    <>
      <footer className={styles.footer} id="contact">
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.logos}>
              <Image src="/img/logo-poltek.png" alt="Logo Poltek" width={80} height={80} />
              <Image src="/img/logo-01.png" alt="Logo" width={80} height={80} />
              <Image src="/img/logo-fest.png" alt="Logo Festival" width={80} height={80} />
            </div>
            <p>{site.name}</p>
          </div>

          <div className={`${styles.col} ${styles.narrow}`}>
            <h3>
              Office <span className={styles.underline} />
            </h3>
            {site.office.map((line) => (
              <p key={line}>{line}</p>
            ))}
            <p className={styles.email}>{site.email}</p>
            <h4>{site.phone}</h4>
          </div>

          <div className={`${styles.col} ${styles.narrow}`}>
            <h3>
              Links <span className={styles.underline} />
            </h3>
            <ul>
              {footerLinks.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.col}>
            <h3>
              Newsletter <span className={styles.underline} />
            </h3>
            <NewsletterForm />
            <div className={styles.social}>
              <i className="fab fa-facebook-f" />
              <i className="fab fa-twitter" />
              <i className="fab fa-whatsapp" />
              <i className="fab fa-linkedin" />
            </div>
          </div>
        </div>
        <hr />
        <p className={styles.copy}>PalembangGoVacation! © All right reserved</p>
      </footer>

      {/* Banner ilustrasi di bawah footer */}
      {banner && <Image src="/decor/m22.png" alt="" width={2000} height={1414} sizes="100vw" className={styles.banner} />}
    </>
  );
}
