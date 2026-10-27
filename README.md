# Palembang Go Vacation — Portal Pariwisata Kota Palembang

Proyek **portal informasi wisata Palembang** untuk karya KMIPN VI, dikembangkan bersama tim Politeknik Negeri Sriwijaya. Website menyatukan informasi destinasi, sejarah, galeri, peta, dan tautan tur virtual agar calon wisatawan lebih mudah menemukan tujuan kunjungan.

## Tantangan

Informasi pariwisata sering tersebar dalam bentuk artikel dan booklet. Website ini mengubah informasi tersebut menjadi **katalog yang dapat dijelajahi berdasarkan kategori**, dengan tata letak detail yang konsisten untuk setiap destinasi.

## Fitur utama

- **94 destinasi wisata** dalam empat kategori: 47 sejarah/budaya, 32 wisata buatan, 4 wisata alam, dan 11 wisata kuliner.
- **Hero slider** dan rekomendasi destinasi unggulan.
- **Filter kategori serta dropdown** untuk menelusuri koleksi destinasi.
- **Halaman dinamis `/wisata/[slug]`** berisi deskripsi, galeri foto dan informasi lokasi.
- **Galeri lightbox**, peta Google Maps, serta tautan **tur virtual 3D/360°** untuk 14 destinasi yang didukung.
- Penyajian informasi sejarah, profil kota, serta konten booklet wisata.

## Teknologi dan pendekatan

**Next.js 15 (App Router), React 19, TypeScript, CSS Modules**, serta integrasi tautan Google Maps dan Indonesia Virtual Tour. Semua destinasi didefinisikan melalui `src/data/destinations.ts` sehingga satu template bisa menghasilkan banyak halaman detail, tanpa menyalin HTML untuk setiap objek wisata.

## Hasil yang didapat

Website menyajikan **94 entri destinasi**, dengan **73 deskripsi lengkap** dan sisanya masih menggunakan tampilan fallback. Pengunjung dapat membandingkan tujuan wisata dan membuka petanya dari satu antarmuka. Form newsletter saat ini masih berupa placeholder dan belum tersambung ke layanan pengiriman email.

**Repository:** https://github.com/Darren0099/KMIPN6-EGOVERNEMNT

*Sumber materi:* booklet pariwisata Dinas Pariwisata Kota Palembang dan tautan tur virtual yang digunakan pada proyek.
