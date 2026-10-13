import Link from "next/link";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", textAlign: "center", padding: "2rem" }}>
      <div>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>Halaman tidak ditemukan</h1>
        <p style={{ marginBottom: "2rem" }}>Destinasi yang kamu cari tidak ada.</p>
        <Link href="/" className="btn">
          Kembali ke Beranda
        </Link>
      </div>
    </main>
  );
}
