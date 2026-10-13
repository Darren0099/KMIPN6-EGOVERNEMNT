/** Konten statis landing page (selain data destinasi). */

export const site = {
  name: "Palembang Go Vacation!",
  shortName: "Palembang Go Vacation",
  description:
    "Portal informasi destinasi wisata terkini di kota Palembang: tempat bersejarah, wisata buatan, alam, dan kuliner.",
  email: "PalembangGoVacation!@gmail.com",
  phone: "082183945815",
  office: ["Politeknik Negeri Sriwijaya", "Bukit Besar, Palembang"],
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63750.25046795974!2d104.6763309216797!3d-2.9889377999999955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b75fc50976d93%3A0x27a35fd6c4f39f1b!2sDinas%20Pariwisata%20Kota%20Palembang!5e0!3m2!1sid!2sid!4v1719583077748!5m2!1sid!2sid",
};

export interface HeroSlide {
  title: string;
  description: string;
  image: string;
  thumbImage: string;
  thumbLabel: string;
}

export const heroSlides: HeroSlide[] = [
  {
    title: "Jembatan Ampera",
    description:
      "Jembatan Ampera, yang menjadi lambang kota, terletak di tengah-tengah kota Palembang, menghubungkan daerah Seberang Ulu dan seberang Ilir yang dipisahkan oleh Sungai Musi.",
    image: "/img/ampera-sungai-musi.jpeg",
    thumbImage: "/img/ampera-sungai-musi.jpeg",
    thumbLabel: "Jembatan Ampera",
  },
  {
    title: "Taman Punti Kayu",
    description:
      "Kawasan pelestarian alam yang dimanfaatkan untuk kegiatan pariwisata alam dan rekreasi di Palembang, Sumatera Selatan.",
    image: "/img/puntikayu.png",
    thumbImage: "/img/puntikayu-thumb.png",
    thumbLabel: "Punti Kayu",
  },
  {
    title: "Rumah Limas",
    description:
      "Rumah tradisional berbentuk limas yang dibuat dengan gaya panggung. Bangunan khas daerah Palembang ini dibangun bertingkat.",
    image: "/img/museum.jpg",
    thumbImage: "/img/museum.jpg",
    thumbLabel: "Rumah Limas",
  },
  {
    title: "Benteng Kuto Besak",
    description:
      "Selain di Yogya dan Solo, Palembang juga punya bangunan Keraton Benteng Kuto Besak yang bersejarah. Dari sana traveler bisa melihat indahnya Sungai Musi.",
    image: "/img/benteng.jpg",
    thumbImage: "/img/benteng.jpg",
    thumbLabel: "Benteng Kuto Besak",
  },
  {
    title: "Al-qur'an Akbar",
    description:
      "Al-Qur'an Al-Akbar menjadi wisata religi ternama dan menjadi salah satu ikon Kota Palembang.",
    image: "/img/alquran.png",
    thumbImage: "/img/alquran.png",
    thumbLabel: "Al-qur'an Akbar",
  },
];

export const whyChooseUs = [
  "Kami dengan senang hati menyambut Anda di situs resmi kami. Palembang Go Vacation adalah portal informasi destinasi wisata terkini di kota Palembang dan sekitarnya. Melalui website ini, kami berkomitmen untuk memberikan Anda informasi yang akurat dan terpercaya mengenai tempat-tempat menarik, kuliner, budaya, dan aktivitas seru di Palembang.",
  "Dengan semakin pesatnya teknologi informasi, kami berusaha memanfaatkan sarana ini untuk memudahkan Anda dalam merencanakan liburan dan menjelajahi keindahan kota Palembang. Kami juga mengajak Anda untuk berpartisipasi aktif dengan memberikan masukan dan saran melalui halaman kontak kami.",
];

export const about = {
  image: "/img/ampera-about.jpeg",
  description:
    "Jangan lupa untuk selalu mengunjungi website Palembang Go Vacation agar Anda tidak ketinggalan informasi terbaru seputar destinasi wisata di Palembang. Terima kasih atas kunjungannya, dan semoga Anda menikmati pengalaman berlibur yang tak terlupakan di kota ini!",
  facts: [
    { label: "Province:", value: "Sumatera Selatan" },
    { label: "City Area:", value: "358,55 km²" },
    { label: "Population:", value: "± 1,8 juta jiwa" },
    { label: "From:", value: "Palembang, Indonesia" },
    { label: "Email:", value: "PalembangGoVacation!@gmail.com", highlight: true },
  ],
  socials: [
    { icon: "fa-brands fa-twitter", label: "Twitter" },
    { icon: "fa-brands fa-instagram", label: "Instagram" },
    { icon: "fa-brands fa-square-facebook", label: "Facebook" },
    { icon: "fa-brands fa-linkedin", label: "LinkedIn" },
  ],
};

/** Bagian "Punti Kayu" di landing page. Detail lengkap ada di data destinasi. */
export const puntiKayuHighlight = {
  slug: "hutan-wisata-punti-kayu",
  title: "Punti Kayu",
  description:
    "Taman Wisata Alam Punti Kayu adalah hutan wisata seluas sekitar 50 hektar yang hanya sekitar 7 km dari pusat Kota Palembang. Sejak 1938 kawasan ini berstatus hutan lindung, dan sejak 1986 dikembangkan menjadi hutan wisata. Cocok untuk melihat fauna, menyeberangi jembatan gantung, dan berkemah.",
  cards: [
    { label: "Fauna", image: "/img/fauna.jpeg" },
    { label: "Luma Roots Lightscape", image: "/img/roots.png" },
    { label: "Jembatan Gantung", image: "/img/jembatan-gantung.jpg" },
    { label: "Berkemah", image: "/img/berkemah.jpeg" },
  ],
};

/** Sejarah singkat Kota Palembang (ringkasan dari booklet Dinas Pariwisata Kota Palembang). */
export const history = [
  {
    period: "683 M",
    title: "Berdirinya Palembang",
    text: "Didirikan pada 16 Juni 683 M oleh Dapunta Hyang berdasarkan Prasasti Kedukan Bukit yang bertulis huruf Pallawa dan berbahasa Melayu kuno. Palembang merupakan kota tertua di Indonesia.",
  },
  {
    period: "Abad ke-7 – 13",
    title: "Kerajaan Sriwijaya",
    text: "Palembang pernah menjadi pusat Kerajaan Sriwijaya, pusat perdagangan antar negara melalui laut Cina dan Selat Malaka, serta pusat agama Buddha.",
  },
  {
    period: "Abad ke-16 – 19",
    title: "Kesultanan Palembang Darussalam",
    text: "Kerajaan Islam yang meletakkan Islam sebagai dasar negara. Perlawanan terhadap Belanda dipimpin Sultan Mahmud Badaruddin II, sultan terakhir yang akhirnya ditangkap dan diasingkan pada 1825.",
  },
  {
    period: "1906 – 1945",
    title: "Masa Kolonial hingga Kemerdekaan",
    text: "Pada 1 April 1906 pemerintah kolonial Belanda menetapkan Palembang sebagai kota. Kabar kemerdekaan disebarluaskan dr. A.K. Gani pada 22 Agustus 1945, memicu pertempuran lima hari lima malam di pusat kota.",
  },
];

export const vision2030 = [
  "Kota pariwisata sungai dan event olah raga kelas dunia",
  "Kota modern berbasis budaya Palembang Darussalam dan Sriwijaya",
  "Kuliner khas Palembang mendunia",
];

export const cityView = [
  { image: "/img/city-lrt.jpeg", label: "Stasiun LRT" },
  { image: "/img/city-sudirman.jpeg", label: "Jalan Sudirman" },
  { image: "/img/city-square.jpeg", label: "Palembang Square" },
];

export const companyMenu = [
  { title: "About us", icon: "ri-community-line", links: ["About us", "Support", "Contact us"] },
  { title: "Safety and quality", icon: "ri-shield-line", links: ["Cookie settings", "Privacy Policy"] },
];
