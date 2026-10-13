/**
 * Sumber data semua destinasi wisata.
 * - Daftar nama per kategori ada di `names`.
 * - Konten lengkap (sejarah, foto, tiket, peta) ada di `details`, dikunci dengan slug.
 * - Destinasi yang belum punya konten tetap punya halaman (fallback di halaman slug).
 * Untuk menambah destinasi: tambah nama di `names`, lalu (opsional) isi `details`.
 */

import { bookletDetails } from "./booklet";

export type Category = "tempat" | "buatan" | "alam" | "kuliner";

export interface Destination {
  slug: string;
  name: string;
  category: Category;
  /** Deskripsi singkat, dipakai di kartu dan hero halaman detail. */
  tagline?: string;
  /** Foto utama (hero halaman detail dan kartu di landing). */
  image?: string;
  sections?: { title: string; body: string[] }[];
  facts?: { label: string; value: string }[];
  gallery?: { src: string; alt: string }[];
  /** URL embed Google Maps. Jika kosong, halaman memakai pencarian nama + Palembang. */
  mapEmbed?: string;
  /** Slug tur 360° di palembang.indonesiavirtualtour.com (otomatis dari `tourSlugs`). */
  tourSlug?: string;
  /** Catatan sumber informasi/foto (ditampilkan di halaman detail). */
  sourceNote?: string;
}

export const categories: Record<Category, { label: string; icon: string }> = {
  tempat: { label: "Wisata Tempat", icon: "ri-ancient-pavilion-line" },
  buatan: { label: "Wisata Buatan", icon: "ri-building-2-fill" },
  alam: { label: "Wisata Alam", icon: "ri-plant-line" },
  kuliner: { label: "Wisata Kuliner", icon: "ri-restaurant-fill" },
};

export const categoryOrder: Category[] = ["tempat", "buatan", "alam", "kuliner"];

const names: Record<Category, string[]> = {
  tempat: [
    "Jembatan Ampera", "Al-quran Akbar", "Benteng Kuto Besak", "Kampung Arab Al-Munawar",
    "Masjid Agung", "Monumen Perjuangan Rakyat", "Bukit Siguntang", "Museum Balaputeradewa",
    "Museum Sultan Mahmud Badaruddin II", "Kantor Walikota- Water Leiding", "Masjid Ki Merogan",
    "Masjid Lawang Kidul", "Masjid Pulau Seribu", "Masjid Al-Mahmudiyah Simpang Suro",
    "Makam Kambang Koci", "Makam Kawah Tekurep", "Makam Sultan Agung", "Makam Sabokingking",
    "Makam Bagus Kuning", "Makam Cinde Welang", "Makam Ki Gede Ing Suro", "Makam Sultan M.Mansyur",
    "Makam Ariodillah", "Rumah Limas Cek Mas", "Rumah Limas Bayumi Wahab", "Kampung Kapitan",
    "Kawasan Pasar 16 Ilir", "Kawasan Tuan Kentang", "Kawasan Sungai Lumpur", "Kawasan Sekanak",
    "Kampung Songket", "Kampung Palembang", "Kelenteng Dewi Kwan Im", "Pabrik Es Assegaf 16 Ulu",
    "Goa Jepang Jalan Joko", "Goa Jepang AKBP H.Umar", "Taman Wisata Kerajaan Sriwijaya",
    "Museum Tekstil", "Museum Dr. A. K. Gani", "Masjid Suro", "Makam Kebon Gede",
    "Kampung Rumah Limas 10 Ulu", "Lawang Borotan", "Balai Pertemuan KBTR",
    "Kawasan 1 Ilir", "Goa Jepang Ario Kemuning", "Gedung Balai Pertemuan",
  ],
  buatan: [
    "Jakabaring Sport City", "Palembang Bird Park", "Taman Rusa PT PUSRI", "Amanzi Water Park",
    "Ampera Skate Park", "OPI Water Fun", "Danau OPI", "Masjid Cheng Ho", "PT. PUSRI",
    "Taman PT Pertamina", "Graha Songket", "Rumah Limas H. Aziz", "Kawasan Kampung Ukir",
    "Kampung Anyaman Seberang Ulu I", "Monumen SILK AIR", "Kampung Bercorak 7 Ulu",
    "Miniatur Ka'bah Asrama Haji", "Kampung Wisata Lorong Mari", "Kampung Mural Gudang Boen Tjit",
    "Kampung Ikan Hias Sekojo", "Graha Sriwijaya", "Kawasan Wisata Lebak Cindo",
    "Kampung Wisata Sugih Waras", "Tugu Belido", "Tepian Sungai Sekanak Besolek",
    "Fantasy Island", "Sekanak Lambidaro", "Rumah Adat Dekranasda", "Kampung Gerabah Kalidoni",
    "Rumah Ong Boen Tjiet", "Kampung Ikan Asin 5 Ulu", "Kampung Wisata Bahari",
  ],
  alam: ["Pulau Kemaro", "Sungai Musi", "Kambang Iwak", "Hutan Wisata Punti Kayu"],
  kuliner: [
    "Kampung Pempek", "Pasar Durian Kuto", "Riverside Restaurant", "Rumah Makan Sarinande Tempoe Doeloe",
    "Mie Celor 26 ilir", "Martabak Har", "Bebek Garang", "Mahkota Indah", "Pempek Pak Raden",
    "Pempek Beringin", "Pindang Musi Rawas",
  ],
};

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/['’]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Destinasi yang tersedia di Indonesia Virtual Tour (https://palembang.indonesiavirtualtour.com/destinasi).
 * Key = slug di website ini, value = slug di Indonesia Virtual Tour.
 * Destinasi yang tidak ada di sini otomatis tidak menampilkan tombol 3D.
 */
const tourSlugs: Record<string, string> = {
  "jembatan-ampera": "jembatan-ampera",
  "pulau-kemaro": "pulau-kemaro",
  "bukit-siguntang": "bukit-siguntang",
  "taman-wisata-kerajaan-sriwijaya": "kawasan-taman-wisata-kerajaan-sriwijaya",
  "al-quran-akbar": "al-qur-an-al-akbar",
  "museum-sultan-mahmud-badaruddin-ii": "museum-sultan-mahmud-badaruddin-ii",
  "benteng-kuto-besak": "benteng-kuto-besak",
  "jakabaring-sport-city": "jakabaring-sport-city",
  "hutan-wisata-punti-kayu": "taman-wisata-alam-punti-kayu",
  "kampung-kapitan": "kampung-kapitan",
  "tepian-sungai-sekanak-besolek": "sekanak-besolek",
  "kawasan-tuan-kentang": "tuan-kentang",
  "rumah-ong-boen-tjiet": "rumah-ong-boen-tjit",
  "sekanak-lambidaro": "taman-sekanak-lambidaro",
};

export const TOUR_BASE_URL = "https://palembang.indonesiavirtualtour.com/destinasi";

export function getTourUrl(d: Destination): string | undefined {
  return d.tourSlug ? `${TOUR_BASE_URL}/${d.tourSlug}/tour` : undefined;
}

const details: Record<string, Partial<Destination>> = {
  "jembatan-ampera": {
    gallery: [
      { src: "/img/ampera-sungai-musi.jpeg", alt: "Jembatan Ampera dilihat dari Sungai Musi" },
      { src: "/img/ampera-about.jpeg", alt: "Menara Jembatan Ampera" },
      { src: "/img/ampera-night.jpeg", alt: "Jembatan Ampera pada malam hari" },
      { src: "/img/city-lrt.jpeg", alt: "Jembatan Ampera dari stasiun LRT" },
    ],
    image: "/img/ampera-hero.png",
    tagline: "Lambang kota Palembang yang membentang di atas Sungai Musi.",
    sections: [
      {
        title: "Sejarah",
        body: [
          "Jembatan Ampera pertama kali dibangun pada tahun 1962 dengan biaya dari harta rampasan perang Jepang dan diresmikan pada tanggal 10 November 1965. Awalnya, jembatan ini sempat diberi nama Jembatan Soekarno, sebagai ungkapan rasa terima kasih masyarakat Sumatera Selatan kepada Presiden Soekarno dalam merealisasikan cita-cita masyarakat Sumatera Selatan, khususnya masyarakat Kota Palembang. Namun nama tersebut berubah seiring kondisi politik di tanah air.",
          "Jembatan Ampera pada mulanya dirancang agar bagian tengahnya bisa dinaikkan, sehingga kapal-kapal besar yang melintas tak tersangkut badan jembatan. Terdapat peralatan mekanis berupa dua bandul pemberat yang masing-masing seberat sekitar 500 ton di dua menara jembatan. Namun, pada tahun 1970, aktivitas naik turun pada bagian tengah jembatan tidak dilakukan lagi karena waktu untuk mengangkat jembatan cukup lama: satu kali proses penaikan membutuhkan waktu kurang lebih 30 menit. Pertimbangan lainnya adalah semakin berkurangnya kapal-kapal besar yang melintasi Sungai Musi, sehingga pada tahun 1990 kedua bandul di dua menara jembatan diturunkan.",
          "Pewarnaan cat pada Jembatan Ampera pun mengalami beberapa kali perubahan. Pada awalnya jembatan ini berwarna abu-abu, kemudian pada sekitar 1970 sampai 1980-an berubah menjadi kuning, lalu berubah lagi menjadi merah hingga sekarang.",
        ],
      },
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1992.1901755456026!2d104.76246908832795!3d-2.991773999246069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b76034b851401%3A0x9b68f8209694f926!2sJemb.%20Ampera%2C%20Kota%20Palembang%2C%20Sumatera%20Selatan!5e0!3m2!1sid!2sid!4v1715918329927!5m2!1sid!2sid",
  },
  "al-quran-akbar": {
    gallery: [
      { src: "/img/alquran.png", alt: "Ukiran kayu tembesu Al-Qur'an Al-Akbar" },
      { src: "/img/alquran-2.png", alt: "Lembaran Al-Qur'an Al-Akbar" },
    ],
    image: "/img/alquran.png",
    tagline: "Wisata religi ternama dan salah satu ikon Kota Palembang.",
    sections: [
      {
        title: "Sejarah Bayt Al-Qur'an Al-Akbar",
        body: [
          "Bayt Al-Qur'an Al-Akbar Palembang memiliki sejarah yang panjang. Sang penggagas, Bapak H. Kgs Syofwatillah Mohzaib, yang juga seorang pengukir kaligrafi, mewujudkan mimpinya untuk membuat Al-Qur'an raksasa. Ayat suci Al-Qur'an diukir di atas lembaran kayu tembesu. Jenis kayu ini dipilih karena tahan lama dan anti rayap, serta banyak terdapat di daerah Palembang dan Jambi.",
          "Para pengukir khusus didatangkan dari Jawa dan Palembang. Mereka juga melakukan ritual khusus seperti berpuasa sebelum mengukir ayat-ayat suci. Pendanaan berasal dari sumbangan para donatur. Pengerjaannya memakan waktu hingga 7 tahun, dimulai tahun 2002 dan selesai pada tahun 2009, karena jeda pengerjaan menunggu stok kayu tembesu dan sumbangan donatur. Bayt Al-Qur'an Al-Akbar diresmikan pada 30 Januari 2012.",
        ],
      },
    ],
    facts: [
      { label: "Tiket Reguler", value: "Rp25.000 / orang" },
      { label: "Jam buka", value: "07.00 – 23.00" },
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.308557058369!2d104.704183!3d-3.0114630000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b9fcdb814b867%3A0x593219792e75b507!2sBayt%20Al-Qur%27an%20Palembang!5e0!3m2!1sen!2sid!4v1719499655965!5m2!1sen!2sid",
  },
  "benteng-kuto-besak": {
    image: "/img/benteng.jpg",
    tagline: "Benteng bersejarah bekas keraton Kesultanan Palembang di tepi Sungai Musi.",
    sections: [
      {
        title: "Tentang",
        body: [
          "Benteng Kuto Besak adalah sebuah benteng bersejarah yang terletak di Palembang, Sumatera Selatan, Indonesia. Bentuk benteng adalah persegi panjang dengan ukuran 288,75 meter × 183,75 meter. Kementerian Pendidikan dan Kebudayaan menetapkan Benteng Kuto Besak sebagai salah satu cagar budaya di Indonesia pada tanggal 3 Maret 2004. Saat ini, Benteng Kuto Besak menjadi salah satu objek wisata bersejarah yang populer di Palembang.",
        ],
      },
      {
        title: "Sejarah",
        body: [
          "Benteng Kuto Besak awalnya merupakan bangunan keraton yang pada abad XVIII menjadi pusat Kesultanan Palembang. Gagasan mendirikannya diprakarsai oleh Sultan Mahmud Badaruddin I yang memerintah pada tahun 1724–1758, dan pembangunannya diselesaikan oleh penerusnya, Sultan Muhammad Bahauddin, yang memerintah pada tahun 1776–1803. Sultan Mahmud Bahauddin adalah tokoh Kesultanan Palembang Darussalam yang realistis dan praktis dalam perdagangan internasional, serta seorang agamawan yang menjadikan Palembang sebagai pusat sastra agama di Nusantara. Menandai perannya sebagai sultan, ia pindah dari Keraton Kuto Lamo ke Kuto Besak. Benteng Kuto diresmikan sebagai tempat kediaman sultan beserta keluarganya pada 21 Februari 1792. Belanda menyebut Kuto Besak sebagai nieuwe keraton, alias keraton baru.",
          "Keraton ini berdiri di tanah yang luas, berbentuk persegi panjang menghadap ke Sungai Musi, dengan panjang 274,32 meter dan lebar 182,88 meter. Dikelilingi tembok besar setinggi 9,14 meter dan setebal 2,13 meter, dengan empat kubu (bastion) di setiap sudutnya, serta sejumlah meriam dari besi dan kuningan. Keraton memiliki pelataran yang luas, balai agung, dan gerbang besar. Di dalamnya terdapat keputren, paseban, ruang penerimaan tamu, serta tempat kediaman sultan dan permaisuri. Di tengah keraton terdapat kolam dengan perahu, taman, dan pohon buah-buahan.",
          "Kuto Besak seolah berdiri di atas pulau karena dibatasi Sungai Sekanak di bagian barat, Sungai Tengkuruk di bagian timur, dan Sungai Kapuran di bagian utara. Di antara Keraton Kuto Besak dan Keraton Lamo terdapat jalan menuju masjid utama kerajaan.",
        ],
      },
    ],
    facts: [
      { label: "Tiket masuk", value: "Rp5.000 / orang" },
      { label: "Parkir motor", value: "Rp3.000 / motor" },
      { label: "Parkir mobil", value: "Rp5.000 / mobil" },
      { label: "Hari operasional", value: "Senin – Minggu" },
      { label: "Jam operasional", value: "08.00 – 21.00 WIB" },
    ],
    gallery: [
      { src: "/img/bkb-old.jpg", alt: "Benteng Kuto Besak tempo dulu" },
      { src: "/img/bkb-1.png", alt: "Sudut Benteng Kuto Besak" },
      { src: "/img/bkb-2.jpg", alt: "Sudut Benteng Kuto Besak" },
      { src: "/img/bkb-3.jpg", alt: "Sudut Benteng Kuto Besak" },
      { src: "/img/bkb-4.jpg", alt: "Sudut Benteng Kuto Besak" },
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.3818204102868!2d104.75662777396562!3d-2.991369696984665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b7603bed626ab%3A0x8226a20043f7e3b2!2sBenteng%20Kuto%20Besak%20(Palembang)!5e0!3m2!1sid!2sid!4v1715917399239!5m2!1sid!2sid",
  },
  "kampung-kapitan": {
    gallery: [
      { src: "/img/kapitan.jpeg", alt: "Kampung Kapitan" },
      { src: "/img/kapitan-2.png", alt: "Pelataran Kampung Kapitan" },
    ],
    image: "/img/kapitan.jpeg",
    tagline: "Keberadaan komunitas marga tionghoa",
    sections: [
      {
        title: "Tentang",
        body: [
          "Kampung Kapitan merupakan kampung etnis Tionghoa pertama di Palembang yang sudah ada sejak Dinasti Ming atau abad ke-14. Dahulu kampung ini merupakan area permukiman masyarakat etnis Tionghoa di Palembang. Kampung ini juga menjadi pusat perdagangan hingga menjadi pusat pemerintahan di masa kolonial Belanda.",
        ],
      },
      {
        title: "Sejarah Kampung Kapitan",
        body: [
          "Kampung Kapitan, didirikan pada abad ke-14 oleh masyarakat Tionghoa, merupakan permukiman etnis Tionghoa pertama di Palembang. Dahulu, kawasan ini menjadi pusat perdagangan dan interaksi budaya, serta menjadi pusat pemerintahan di masa kolonial Belanda.",
          "Saat itu Kerajaan Cina membentuk lembaga dagang yang berpusat di Palembang, sehingga pedagang Cina banyak yang menetap dan menikah dengan gadis asli Palembang. Lioang Taow Ming merupakan kepala kantor dagang Cina yang terkenal dan memiliki pengaruh kuat pada komunitas Cina.",
          "Kemudian, jabatan diwariskan secara turun-temurun kepada pewarisnya, yaitu Tjoa Kie Tjuan, pimpinan masyarakat Cina Palembang pertama yang bergelar mayor. Masa kepemimpinannya berlangsung dari tahun 1830 hingga 1855 di kawasan 7 Ulu. Setelah itu, tampuk kepemimpinan diteruskan oleh putranya, Tjoa Han Him, dengan pangkat kapeten yang menggantikan ayahnya.",
        ],
      },
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15937.47372184435!2d104.7630967!3d-2.9950521!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b77f7c1b15ae5%3A0xbaed8c5dff4aacc0!2sKampung%20Kapitan!5e0!3m2!1sen!2sid!4v1719847709793!5m2!1sen!2sid",
  },
  "jakabaring-sport-city": {
    gallery: [
      { src: "/img/jsc-stadion.png", alt: "Lintasan atletik Stadion Jakabaring" },
      { src: "/img/jsc-gelora.png", alt: "Stadion Gelora Sriwijaya" },
      { src: "/img/jsc-danau-udara.png", alt: "Danau Jakabaring dari udara" },
      { src: "/img/jsc-danau.png", alt: "Tepi danau Jakabaring" },
      { src: "/img/jsc-halaman.png", alt: "Halaman Jakabaring Sport City" },
      { src: "/img/jsc-menembak.png", alt: "Venue menembak Jakabaring" },
    ],
    image: "/img/jakabaring.jpeg",
    tagline: "Kompleks olahraga yang lengkap",
    sections: [
      {
        title: "Tentang",
        body: [
          "Jakabaring Sport City merupakan kompleks olahraga di Kota Palembang dan menjadi destinasi wisata olahraga (sport tourism) dengan luas area keseluruhan 325 hektar. Pembangunan kawasan ini dilakukan secara bertahap dan berkesinambungan, dimulai tahun 2001 dan berlanjut pada pelaksanaan PON 2004, serta terus dikembangkan hingga SEA Games 2011 dan Asian Games 2018.",
        ],
      },
      {
        title: "Sejarah",
        body: [
          "Jakabaring adalah sebuah 'terra incognita' dalam ingatan memori warga Palembang, kawasan yang sepi dan mayoritas merupakan rawa-rawa yang dihuni kawanan buaya dan ular berbisa. Pada tahun 2004, Pekan Olahraga Nasional XVI diadakan di Jakabaring, diikuti pengembangan fasilitas olahraga dan infrastruktur pendukung yang menambah momentum pengembangan lebih lanjut. Seiring waktu, Jakabaring berubah menjadi kota satelit yang maju hingga pelaksanaan SEA Games 2011 dan Asian Games 2018.",
        ],
      },
    ],
    facts: [
      { label: "Luas kawasan", value: "325 hektar" },
      { label: "Mulai dibangun", value: "2001" },
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.2839653325746!2d104.7919462!3d-3.0181776000000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b9d9421533bd9%3A0x9666a5bb44ec0c8c!2sJakabaring%20Sport%20City!5e0!3m2!1sen!2sid!4v1719149834251!5m2!1sen!2sid",
  },
  "hutan-wisata-punti-kayu": {
    image: "/img/puntikayu.png",
    sections: [
      {
        title: "Tentang",
        body: [
          "Taman Wisata Alam Punti Kayu adalah kawasan hutan wisata di Kota Palembang, sekitar 7 km dari pusat kota, dengan luas sekitar 50 hektar. Kawasan ini dapat dijangkau dengan kendaraan umum trayek km 12.",
          "Pengunjung bisa menikmati suasana hutan yang sejuk di tengah kesibukan kota, mulai dari melihat fauna, berjalan di jembatan gantung, menikmati Luma Roots Lightscape, hingga berkemah.",
        ],
      },
      {
        title: "Sejarah",
        body: [
          "Kawasan Punti Kayu telah ditetapkan sebagai hutan lindung sejak tahun 1938. Pada tahun 1986, berdasarkan kesepakatan antara Pemerintah Provinsi Sumatera Selatan dan Departemen Kehutanan, kawasan ini dikembangkan menjadi hutan wisata dengan penambahan beberapa sarana wisata.",
          "Taman wisata Punti Kayu dibagi atas 4 wilayah utama.",
        ],
      },
    ],
    facts: [
      { label: "Luas kawasan", value: "± 50 hektar" },
      { label: "Jarak dari pusat kota", value: "± 7 km" },
      { label: "Transportasi umum", value: "Trayek km 12" },
      { label: "Status", value: "Hutan lindung (1938), hutan wisata (1986)" },
    ],
    gallery: [
      { src: "/img/fauna.jpeg", alt: "Fauna" },
      { src: "/img/roots.png", alt: "Luma Roots Lightscape" },
      { src: "/img/jembatan-gantung.jpg", alt: "Jembatan Gantung" },
      { src: "/img/berkemah.jpeg", alt: "Berkemah" },
    ],
  },
  "museum-sultan-mahmud-badaruddin-ii": {
    gallery: [{ src: "/img/mahmud.jpeg", alt: "Museum Sultan Mahmud Badaruddin II" }],
    image: "/img/mahmud.jpeg",
    tagline: "Peninggalan sejarah dari era Sriwijaya",
  },
  "kawasan-tuan-kentang": {
    gallery: [{ src: "/img/kampung-kentan.jpeg", alt: "Kawasan Tuan Kentang" }],
    image: "/img/kampung-kentan.jpeg",
    tagline: "Kawasan pengrajin kain tenun",
  },
  "pulau-kemaro": {
    gallery: [
      { src: "/img/kemaro.jpeg", alt: "Pulau Kemaro" },
      { src: "/img/kemaro-2.jpeg", alt: "Pagoda sembilan lantai Pulau Kemaro" },
    ],
    image: "/img/kemaro.jpeg",
    tagline: "Pulau yang identik dengan klenteng budha",
  },
  "bukit-siguntang": {
    gallery: [{ src: "/img/siguntang.jpeg", alt: "Bukit Siguntang" }],
    image: "/img/siguntang.jpeg",
    tagline: "Bukit kecil dengan pemandangan yang asri",
  },
  "kampung-pempek": {
    image: "/img/pempek-p90.jpg",
    tagline: "Surganya pecinta kuliner khas Palembang.",
    sections: [
      {
        title: "Sentral Kampung Pempek",
        body: [
          "Sudah di kota Palembang tapi bingung mau mulai kulineran dari mana? Ke Kampung Pempek saja, kamu bisa dengan mudah menemukan aneka pempek di sana.",
          "Jika kamu mencari pempek dengan harga terjangkau, kunjungi Kampung Pempek 26 Ilir. Tempat ini menawarkan pempek lenjer, pempek kulit, pempek kapal selam, pempek adaan, dan pempek lenggang. Tempat yang bagus untuk menjelajahi cita rasa asli Palembang tanpa mengeluarkan banyak uang.",
        ],
      },
    ],
    facts: [
      { label: "Lokasi", value: "Jalan Beringin Janggut, Talang Semut, Kecamatan Bukit Kecil, Palembang" },
      { label: "Harga mulai", value: "Rp1.000" },
    ],
    gallery: [
      { src: "/img/pempek-p14.jpg", alt: "Pempek Lenggang, pempek yang dipanggang" },
      { src: "/img/pempek-p90.jpg", alt: "Aneka pempek panggang" },
      { src: "/img/pempek-p21.jpg", alt: "Pempek kulit yang tipis dan garing" },
      { src: "/img/pempek-p89.jpg", alt: "Pempek lenjer" },
      { src: "/img/pempek-p77.jpg", alt: "Pempek kapal selam berisi telur" },
      { src: "/img/pempek-p18.jpg", alt: "Kerupuk ikan belido" },
      { src: "/img/pempek-p12.jpg", alt: "Suasana makan di Kampung Pempek" },
      { src: "/img/pempek-l1.jpg", alt: "Kios pempek di Kampung Pempek" },
    ],
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3984.382514838654!2d104.75228747396561!3d-2.991178596984853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b7600d65d56fb%3A0xce461af9466676c6!2sSentral%20Kampung%20Pempek%20Palembang!5e0!3m2!1sid!2sid!4v1719378183668!5m2!1sid!2sid",
  },
};

/** Destinasi yang tampil sebagai kartu di section "Destinations" pada landing page. */
export const featuredSlugs = [
  "kampung-kapitan",
  "kawasan-tuan-kentang",
  "museum-sultan-mahmud-badaruddin-ii",
  "jakabaring-sport-city",
  "pulau-kemaro",
  "bukit-siguntang",
];

/** Alamat & telepon restoran dari daftar restoran Kota Palembang pada booklet Dinas Pariwisata. */
const restaurantInfo: Record<string, { alamat: string; telepon: string }> = {
  "riverside-restaurant": { alamat: "Jl. Benteng", telepon: "0711-368222" },
  "mie-celor-26-ilir": { alamat: "Jl. Merdeka No. 868", telepon: "0711-5630501" },
  "martabak-har": { alamat: "Jl. Jendral Sudirman No. 1078", telepon: "0711-351914" },
  "bebek-garang": { alamat: "Jl. Rumah Bari", telepon: "0711-369495" },
  "mahkota-indah": { alamat: "Jl. Letkol Iskandar No. 243", telepon: "0711-312236" },
  "pempek-pak-raden": { alamat: "Jl. Radial No. 80A", telepon: "0711-375490" },
  "pempek-beringin": { alamat: "Jl. Lingkaran 1 No. 20/8", telepon: "0711-371685" },
  "pindang-musi-rawas": { alamat: "Jl. Angkatan 45 No. 18", telepon: "0711-370590" },
};

const BOOKLET_RESTO_NOTE =
  "Sumber informasi: daftar restoran Kota Palembang pada booklet “78 Destinasi Wisata Charming Palembang”, Dinas Pariwisata Kota Palembang.";

function restaurantDetail(slug: string): Partial<Destination> | undefined {
  const r = restaurantInfo[slug];
  if (!r) return undefined;
  return {
    tagline: "Tempat makan di Kota Palembang.",
    facts: [
      { label: "Alamat", value: r.alamat },
      { label: "Telepon", value: r.telepon },
    ],
    sourceNote: BOOKLET_RESTO_NOTE,
  };
}

const uniqueBy = <T,>(items: T[], key: (t: T) => string): T[] => {
  const seen = new Set<string>();
  return items.filter((i) => (seen.has(key(i)) ? false : (seen.add(key(i)), true)));
};

/** Gabungkan konten manual (`details`) dengan data booklet. Konten manual diutamakan. */
function mergeDetail(slug: string): Partial<Destination> {
  const manual = details[slug];
  const booklet = bookletDetails[slug] ?? restaurantDetail(slug);
  if (!booklet) return manual ?? {};
  if (!manual) return booklet;

  const manualLabels = new Set((manual.facts ?? []).map((f) => f.label));
  const facts = [...(booklet.facts ?? []).filter((f) => !manualLabels.has(f.label)), ...(manual.facts ?? [])];
  const sectionTitles = new Set((manual.sections ?? []).map((x) => x.title));
  const sections = [...(manual.sections ?? []), ...(booklet.sections ?? []).filter((x) => !sectionTitles.has(x.title))];
  const gallery = uniqueBy([...(manual.gallery ?? []), ...(booklet.gallery ?? [])], (g) => g.src);

  return {
    ...booklet,
    ...manual,
    tagline: manual.tagline ?? booklet.tagline,
    image: manual.image ?? booklet.image,
    facts: facts.length ? facts : undefined,
    sections: sections.length ? sections : undefined,
    gallery: gallery.length ? gallery : undefined,
    sourceNote: booklet.sourceNote,
  };
}

export const destinations: Destination[] = categoryOrder.flatMap((category) =>
  names[category].map((name) => {
    const slug = slugify(name);
    return { slug, name, category, tourSlug: tourSlugs[slug], ...mergeDetail(slug) };
  }),
);

export function getDestination(slug: string): Destination | undefined {
  return destinations.find((d) => d.slug === slug);
}

export function getByCategory(category: Category): Destination[] {
  return destinations.filter((d) => d.category === category);
}

export const featuredDestinations: Destination[] = featuredSlugs
  .map(getDestination)
  .filter((d): d is Destination => Boolean(d));
