# Palembang Go Vacation!

Landing page wisata kota Palembang, dibangun dengan **Next.js (App Router) + React + TypeScript + CSS Modules**.

## Menjalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi (semua halaman destinasi di-generate statis)
npm start
```

## Struktur

Hanya ada **2 page**:

| Route | File | Isi |
| --- | --- | --- |
| `/` | `src/app/page.tsx` | Landing page |
| `/wisata/[slug]` | `src/app/wisata/[slug]/page.tsx` | Detail satu destinasi, diambil dari data |

```
src/
├─ app/                 layout, globals.css, 2 page, not-found
├─ components/          Navbar, Hero (slider), HomeSections, Decor, Footer + CSS Module masing-masing
└─ data/
   ├─ destinations.ts   SEMUA data destinasi (nama, kategori, slug, sejarah, foto, tiket, peta)
   └─ site.ts           teks statis landing (slide hero, about, statistik, kontak, dll.)
public/
├─ img/                 foto yang dipakai
└─ decor/               ornamen ilustrasi (m10, m11, m3) dan banner footer (m22)
```

## Sumber konten

- `src/data/booklet.ts`: teks, lokasi, dan tagline dari booklet *78 Destinasi Wisata Charming Palembang* (Dinas Pariwisata Kota Palembang).
  Foto booklet ada di `public/img/bk/<slug>.jpg`.
- `src/data/destinations.ts`: nama destinasi, konten manual (`details`), slug tur 3D, dan penggabungan dengan booklet
  (konten manual diutamakan; booklet melengkapi).
- Daftar tur 360°: https://palembang.indonesiavirtualtour.com/destinasi

## Menambah / mengubah destinasi

Semua lewat `src/data/destinations.ts`:

1. **Destinasi baru**: tambahkan namanya ke `names` pada kategori yang sesuai. Slug dibuat otomatis
   (`"Masjid Agung"` → `/wisata/masjid-agung`) dan langsung muncul di dropdown navbar.
2. **Isi konten**: tambahkan entri di `details` dengan key = slug (`image`, `tagline`, `sections`,
   `facts`, `gallery`, `mapEmbed`). Tanpa konten, halaman tetap tampil dengan fallback + peta pencarian.
3. **Kartu di landing**: masukkan slug ke `featuredSlugs`.

4. **Galeri**: isi `gallery` (`{ src, alt }`). Layout otomatis menyesuaikan jumlah foto (1, 2, 4, atau lebih) dan
   foto bisa diperbesar (lightbox). Disarankan minimal 4 foto per destinasi.
5. **Tur 3D**: jika destinasi ada di [Palembang Virtual Tour](https://palembang.indonesiavirtualtour.com/destinasi),
   tambahkan di `tourSlugs` (key = slug di sini, value = slug di Indonesia Virtual Tour). Tombol "Tur Virtual 3D"
   muncul otomatis; tanpa entri di `tourSlugs`, tombolnya tidak ditampilkan.

Taruh foto baru di `public/img/` (gunakan nama file tanpa spasi), lalu rujuk sebagai `/img/nama-file.jpg`.

## Catatan

- Form newsletter di footer masih placeholder (belum terhubung ke layanan email).
- Ikon memakai CDN Remix Icon dan Font Awesome (lihat `src/app/layout.tsx`).
