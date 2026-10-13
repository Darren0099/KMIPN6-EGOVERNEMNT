import Image from "next/image";
import styles from "./home.module.css";

/**
 * Ornamen ilustrasi yang menimpa antar-section.
 * Posisi/ukuran diatur di home.module.css (.m10, .m11, .m3) dan skala mengikuti lebar layar.
 */
export default function Decor({ name }: { name: "m10" | "m11" | "m3" }) {
  return (
    <div className={`${styles.decor} ${styles[name]}`} aria-hidden="true">
      <Image src={`/decor/${name}.png`} alt="" width={1080} height={1080} sizes="500px" />
    </div>
  );
}
