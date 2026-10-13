# Palembang Go Vacation!

Website informasi pariwisata **Kota Palembang**. Pengunjung bisa menjelajahi **94 destinasi wisata** (sejarah & budaya, wisata buatan, alam, dan kuliner), melihat sejarah singkat kota, membaca informasi lengkap tiap destinasi, melihat galeri foto dan peta lokasi, serta membuka **tur virtual 3D/360°** untuk destinasi yang tersedia.

Dibangun dengan **Next.js (App Router), React, TypeScript, dan CSS Modules**. Hanya ada dua halaman; seluruh destinasi dikelola dari satu file data.

## Fitur

### Landing page (`/`)
- **Navbar** pill melayang bergaya kaca buram, dengan dropdown **Wisata** yang berisi seluruh destinasi per kategori. Responsif, di mobile menjadi menu kartu dengan accordion.
- **Hero slider** destinasi unggulan (autoplay, panah, dan thumbnail yang bisa diklik).
- **Why Choose Us** dan **Welcome**: pengantar website dan profil singkat kota (luas, penduduk).
- **Sejarah Palembang**: ringkasan perjalanan dari Sriwijaya, Kesultanan Palembang Darussalam, masa kolonial, hingga kemerdekaan, plus Visi Kota Palembang 2030.
- **Punti Kayu**: sorotan taman wisata alam dengan galeri aktivitas.
- **Statistik**: jumlah destinasi per kategori (dihitung otomatis dari data).
- **Destinasi Pilihan**: kartu destinasi unggulan.
- **Semua Destinasi**: daftar seluruh destinasi dengan tab kategori dan tombol "tampilkan lebih banyak". Tanda **360°** menandai destinasi yang punya tur virtual.
- **Palembang City View**, **peta lokasi**, dan **footer** (kontak serta form newsletter).

### Halaman destinasi (`/wisata/[slug]`)
Satu template dinamis untuk semua destinasi, dengan bagian:
- **Hero** berisi nama, kategori, tagline, dan foto utama.
- **Informasi**: deskripsi atau sejarah, ditambah tag fakta (lokasi, tiket, jam buka, dan lainnya).
- **Galeri foto** dengan *lightbox* (perbesar, geser dengan panah atau tombol keyboard, tutup dengan Esc). Tampil jika ada minimal 2 foto.
- **Tur Virtual 3D/360°** lewat [Indonesia Virtual Tour](https://palembang.indonesiavirtualtour.com/destinasi). Tombolnya hanya muncul untuk destinasi yang tersedia di sana.
- **Peta lokasi** (Google Maps) dan tautan "Buka di Google Maps".
- **Destinasi lainnya**: rekomendasi destinasi terkait.
- Destinasi yang belum punya konten tetap punya halaman (fallback) dengan peta pencarian otomatis.

## Isi data

| Kategori | Jumlah |
| --- | --- |
| Wisata Tempat (sejarah & budaya) | 47 |
| Wisata Buatan | 32 |
| Wisata Alam | 4 |
| Wisata Kuliner | 11 |
| **Total** | **94** |

- 73 destinasi sudah punya deskripsi lengkap; sisanya masih memakai halaman fallback.
- 14 destinasi punya tur virtual 3D/360°.

## Teknologi

- [Next.js 15](https://nextjs.org/) (App Router, pembuatan halaman statis lewat `generateStaticParams`)
- React 19 dan TypeScript
- CSS Modules (tanpa library UI)
- Ikon: Remix Icon dan Font Awesome (CDN). Font: Poppins (Google Fonts).

## Struktur proyek

```
src/
├─ app/
│  ├─ page.tsx                    Landing page
│  ├─ wisata/[slug]/page.tsx      Halaman detail destinasi (+ detail.module.css)
│  ├─ layout.tsx, globals.css     Layout, font, token warna, kelas bersama
│  └─ not-found.tsx
├─ components/
│  ├─ Navbar, Hero                Navbar pill dan slider hero
│  ├─ HomeSections                Seluruh section landing page
│  ├─ DestinationExplorer         Tab kategori "Semua Destinasi"
│  ├─ Gallery                     Galeri + lightbox
│  ├─ Starburst, Decor, Footer, NewsletterForm
│  └─ *.module.css                CSS tiap komponen
└─ data/
   ├─ destinations.ts             Daftar destinasi, konten manual, slug tur 3D, penggabungan data
   ├─ booklet.ts                  Konten dari booklet Dinas Pariwisata
   └─ site.ts                     Teks statis landing (slide hero, sejarah, kontak, dll.)
public/
├─ img/                           Foto destinasi
│  └─ bk/                         Foto dari booklet (nama file = slug destinasi)
└─ decor/                         Ornamen ilustrasi dan banner footer
```

## Menjalankan

Butuh Node.js 18.18 atau lebih baru (disarankan 20+).

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi, semua halaman destinasi dibuat statis
npm start
```

## Menambah atau mengubah destinasi

Semua lewat `src/data/destinations.ts`:

1. **Destinasi baru**: tambahkan namanya ke `names` pada kategori yang sesuai. Slug dibuat otomatis (`"Masjid Agung"` menjadi `/wisata/masjid-agung`) dan langsung muncul di dropdown navbar serta daftar "Semua Destinasi".
2. **Isi konten**: tambahkan entri di `details` dengan key = slug (`image`, `tagline`, `sections`, `facts`, `gallery`, `mapEmbed`).
3. **Galeri**: isi `gallery` (`{ src, alt }`). Disarankan minimal 4 foto per destinasi.
4. **Kartu di landing**: masukkan slug ke `featuredSlugs`.
5. **Tur 3D**: jika destinasi ada di Palembang Virtual Tour, tambahkan di `tourSlugs` (key = slug di sini, value = slug di Indonesia Virtual Tour). Tanpa entri tersebut, tombol 3D tidak ditampilkan.

Taruh foto baru di `public/img/` dengan nama file tanpa spasi, lalu rujuk sebagai `/img/nama-file.jpg`.

## Sumber konten

- Teks, lokasi, dan foto sebagian besar destinasi: booklet *78 Destinasi Wisata Charming Palembang*, Dinas Pariwisata Kota Palembang.
- Tur virtual 3D/360°: [Palembang Virtual Tour (Indonesia Virtual Tour)](https://palembang.indonesiavirtualtour.com/destinasi).
- Konten destinasi lain: halaman website versi sebelumnya.

## Catatan

- Form newsletter di footer masih placeholder (belum terhubung ke layanan email).
- Sebagian destinasi baru punya 1 foto, sehingga bagian galerinya belum tampil.
- Link sosial media di bagian "Welcome" dan menu "Company" masih berupa tautan kosong.
