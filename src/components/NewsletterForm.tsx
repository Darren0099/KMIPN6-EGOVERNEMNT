"use client";

import { useState } from "react";
import styles from "./footer.module.css";

export default function NewsletterForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      className={styles.form}
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: hubungkan ke layanan newsletter/email jika sudah tersedia.
        e.currentTarget.reset();
        setSent(true);
      }}
    >
      <i className="far fa-envelope" />
      <input type="email" name="email" placeholder={sent ? "Terima kasih!" : "Enter your email id"} required />
      <button type="submit" aria-label="Kirim">
        <i className="fas fa-arrow-right" />
      </button>
    </form>
  );
}
