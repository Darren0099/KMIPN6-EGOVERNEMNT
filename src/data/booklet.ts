/**
 * Konten destinasi dari booklet "78 Destinasi Wisata Charming Palembang"
 * (Dinas Pariwisata Kota Palembang). Teks ditranskripsi dari booklet dengan perbaikan ejaan/typo ringan.
 * Foto ada di public/img/bk/<slug>.jpg (dipotong dari booklet).
 * Dipakai oleh destinations.ts: isi di sini melengkapi (tidak menimpa) konten manual di `details`.
 */
import type { Destination } from "./destinations";

export const BOOKLET_SOURCE =
  "Sumber informasi dan foto: Booklet “78 Destinasi Wisata Charming Palembang”, Dinas Pariwisata Kota Palembang.";

interface Entry {
  name: string;
  tagline: string;
  /** Paragraf deskripsi. Kosongkan jika konten manual sudah lengkap. */
  text?: string[];
  /** Judul section deskripsi (default "Tentang"). */
  title?: string;
  lokasi: string;
  extra?: { label: string; value: string }[];
  /** false = tidak memakai foto booklet (sudah ada foto lain yang cukup). */
  photo?: boolean;
}

const entries: Record<string, Entry> = {
  "jembatan-ampera": {
    name: "Jembatan Ampera",
    tagline: "Lambang kota Palembang yang membentang di atas Sungai Musi.",
    lokasi: "Jl. Jendral Sudirman",
    photo: false,
  },
  "kantor-walikota-water-leiding": {
    name: "Kantor Walikota (Menara Air)",
    tagline: "Menara Air peninggalan kolonial yang dikenal sebagai Kantor Ledeng.",
    text: [
      "Pembangunan Menara Air, yaitu instalasi pengolahan air bersih pada masa Walikota Palembang dijabat Ir. R.C.A.F.J. Le Cocq d’Armandville dapat dikatakan sungguh luar biasa. Pasalnya, saat itu keuangan Haminte (Gemeente) Palembang sedang dalam kondisi yang sangat buruk.",
      "Ketika tercetus ide untuk membangun Menara Air (akhirnya dikenal sebagai Kantor Ledeng) pada tahun 1928, utang Haminte Palembang sudah menumpuk.",
    ],
    lokasi: "Jl. Merdeka No. 1",
  },
  "benteng-kuto-besak": {
    name: "Benteng Kuto Besak",
    tagline: "Benteng bersejarah bekas keraton Kesultanan Palembang di tepi Sungai Musi.",
    lokasi: "Jl. Sultan Mahmud Badaruddin",
    extra: [{ label: "Masa pembangunan", value: "1780 – 1797 M (17 tahun)" }],
    photo: false,
  },
  "bukit-siguntang": {
    name: "Bukit Siguntang",
    tagline: "Bukit kecil dengan pemandangan yang asri",
    text: [
      "Bukit Seguntang atau kadang disebut juga Bukit Siguntang adalah sebuah bukit kecil setinggi 29–30 meter dari permukaan laut yang terletak sekitar 3 kilometer dari tepian utara Sungai Musi dan masuk dalam wilayah Kota Palembang, Sumatera Selatan.",
      "Secara administratif situs ini termasuk kelurahan Bukit Lama, Kecamatan Ilir Barat I, Palembang. Bukit ini berjarak sekitar 4 kilometer di sebelah barat daya pusat Kota Palembang.",
    ],
    lokasi: "Jl. Bukit Lama, Ilir Barat I",
    extra: [{ label: "Ketinggian", value: "29 – 30 m dpl" }],
  },
  "museum-balaputeradewa": {
    name: "Museum Balaputeradewa",
    tagline: "Museum negeri bergaya arsitektur tradisional Palembang.",
    text: [
      "Museum ini dibangun pada tahun 1977 dengan arsitektur tradisional Palembang di atas areal seluas 23.565 meter persegi dan diresmikan pada tanggal 5 November 1984.",
      "Pada mulanya museum ini bernama Museum Negeri Provinsi Sumatera Selatan, selanjutnya diberi nama Museum Negeri Provinsi Sumatera Selatan “Bala Putra Dewa”. Nama Bala Putra Dewa berasal dari nama seorang raja Sriwijaya yang memerintah pada abad VIII–IX yang mencapai kerajaan maritim.",
    ],
    lokasi: "Jl. Srijaya",
    extra: [{ label: "Luas areal", value: "23.565 m²" }],
  },
  "museum-sultan-mahmud-badaruddin-ii": {
    name: "Museum Sultan Mahmud Badaruddin II",
    tagline: "Peninggalan sejarah dari era Sriwijaya",
    text: [
      "Terletak di tepi Sungai Musi, museum ini memamerkan berbagai koleksi mulai dari arkeologi, etnografi, biologi, seni, dan mata uang (numismatik).",
      "Di museum ini, Anda bisa menemukan berbagai peninggalan sejarah mulai dari koleksi replika prasasti Kedukan Bukit, patung-patung Buddha kuno dan Amarawati Ganesha, serta berbagai sisa sejarah lainnya termasuk yang berasal dari era Sriwijaya.",
    ],
    lokasi: "Jl. Sultan Mahmud Badaruddin",
  },
  "museum-dr-a-k-gani": {
    name: "Museum Dr. A. K. Gani",
    tagline: "Museum pribadi yang menyimpan koleksi sang tokoh, dr. A.K. Gani.",
    text: [
      "Sebagai museum pribadi, Museum dr. A.K. Gani memamerkan berbagai koleksi yang berhubungan dengan sang tokoh. Koleksi artefak terbanyak adalah barang-barang yang pernah dipakai semasa hidup dr. A.K. Gani, seperti alat-alat kedokteran dan alat-alat perang.",
      "Lalu ada sepeda tua yang dipakai untuk mendatangi pasien-pasien di tempat-tempat yang jauh.",
    ],
    lokasi: "Jl. MP. Mangkunegara No. 1F",
  },
  "museum-tekstil": {
    name: "Museum Tekstil",
    tagline: "Bangunan kolonial bekas Museum Tekstil di sekitar Kambang Iwak.",
    text: [
      "Museum Tekstil Palembang merupakan museum yang berada di sekitar Kambang Iwak Palembang. Dulunya terdapat lebih dari 500 barang bersejarah di Palembang dan Sumatera Selatan.",
      "Dari estetika bangunan yang berkonsep klasik, terlihat bangunan masih bernuansa kolonial Belanda; terdapat satu meriam di depan gedung, selain itu terdapat patung pengantin pria dan wanita berpakaian adat Sumatera Selatan. Namun sekarang gedung ini beralih fungsi menjadi gedung perkantoran milik Pemerintah Provinsi Sumatera Selatan.",
    ],
    lokasi: "Jl. Talang Semut, Bukit Kecil",
  },
  "monumen-perjuangan-rakyat": {
    name: "Monumen Perjuangan Rakyat (Monpera)",
    tagline: "Monumen berbentuk melati bermahkota lima untuk mengenang para pejuang.",
    text: [
      "Peletakan batu pertama dilakukan pada tanggal 17 Agustus 1975. Pembangunan monumen selesai pada 1988, yang kemudian diresmikan oleh Alamsyah Ratu Prawiranegara dengan nama Monumen Perjuangan Rakyat (Monpera).",
      "Bentuk Monpera menyerupai bunga melati bermahkota lima. Melati menyimbolkan kesucian hati para pejuang, sedangkan lima sisi menggambarkan lima wilayah keresidenan yang tergabung dalam Sub Komandemen Sumatera Selatan.",
    ],
    lokasi: "Jl. Merdeka",
  },
  "masjid-agung": {
    name: "Masjid Agung Sultan Mahmud Badaruddin I Jayo Wikramo",
    tagline: "Masjid terbesar di Palembang dengan perpaduan arsitektur Indonesia, China, dan Eropa.",
    text: [
      "Masjid Agung Sultan Mahmud Badaruddin I atau biasa disebut Masjid Agung Palembang adalah masjid paling besar di Kota Palembang, Sumatera Selatan.",
      "Masjid ini dipengaruhi oleh tiga arsitektur, yakni Indonesia, China, dan Eropa. Bentuk arsitektur Eropa terlihat dari pintu masuk di gedung baru masjid yang besar dan tinggi, sedangkan arsitektur China terlihat dari masjid utama yang atapnya seperti kelenteng.",
    ],
    lokasi: "Jl. Jendral Sudirman",
  },
  "masjid-ki-merogan": {
    name: "Masjid Ki Merogan",
    tagline: "Masjid dan makam Kiai Merogan di muara Sungai Ogan.",
    text: [
      "Kiai Merogan sebenarnya bernama lengkap Masagus H. Abdul Hamid bin Masagus H. Mahmud. Namun bagi masyarakat Palembang, julukan “Kiai Merogan” lebih terkenal dibanding nama lengkapnya.",
      "Julukan Kiai Merogan dikarenakan lokasi masjid dan makamnya terletak di muara Sungai Ogan, anak Sungai Musi, Kertapati, Palembang. Mengenai waktu kelahirannya, tidak ditemukan catatan yang pasti. Ada yang mengatakan ia lahir sekitar tahun 1811, ada pula yang menyebut tahun 1802.",
    ],
    lokasi: "Jl. Ki Merogan",
  },
  "masjid-lawang-kidul": {
    name: "Masjid Lawang Kidul",
    tagline: "Masjid tepi Sungai Musi dengan menara dan atap tiga undakan.",
    text: [
      "Arsitektur Masjid Lawang Kidul menyerupai Masjid Agung Palembang dan Masjid Kiai Muara Ogan. Ada ciri khas pada Masjid Lawang Kidul, yakni menara masjid memiliki tiga undakan pada bagian tubuh menara.",
      "Atap masjid pada bangunan utama melebar memayungi ruang utama di bawahnya. Atap Masjid Lawang Kidul memiliki tiga undakan. Uniknya, undakan kedua seakan-akan menutupi undakan pertama.",
    ],
    lokasi: "Jl. Slamet Riyadi",
  },
  "masjid-pulau-seribu": {
    name: "Masjid Pulau Seribu",
    tagline: "Masjid Syeh Azhari, salah satu masjid tertua di Palembang.",
    text: [
      "Berdasarkan cerita masyarakat yang didapat secara turun-temurun, nama Pulau Seribu melekat di kawasan ini karena dulunya terdapat gundukan-gundukan tanah yang menyebar di tempat itu. Gundukan tanah tersebut cukup besar dan tinggi, dan tiap gundukan dikelilingi air sungai sehingga ibarat pulau.",
      "Masjid Syeh Azhari bisa dikatakan sebagai salah satu masjid tertua di Palembang.",
    ],
    lokasi: "Jl. Pulau Seribu",
  },
  "masjid-al-mahmudiyah-simpang-suro": {
    name: "Masjid Al-Mahmudiyah Suro",
    tagline: "Masjid tua yang selesai dibangun pada 1889 (1310 H).",
    text: [
      "Masjid yang berada persis di pertigaan Jalan Kirangga Wira Sentika dan Jalan Kigede Ing Suro, Kelurahan 30 Ilir, Kecamatan Ilir Barat II ini merupakan salah satu masjid tertua di Palembang.",
      "Dibangun oleh seorang ulama besar, Ki Haji Abdurahman Delamat, di atas tanah wakaf milik Ki Kgs H Khotib Mahmud dan selesai dibangun pada 1889 (1310 H).",
    ],
    lokasi: "Jl. Talang Keranggo",
  },
  "makam-kambang-koci": {
    name: "Makam Kambang Koci",
    tagline: "Situs pemakaman masa Kesultanan Palembang Darussalam.",
    text: [
      "Situs Kambang Koci merupakan situs pemakaman yang terletak di areal parkir pelabuhan peti kemas milik Pelindo II di Boom Baru, Palembang. Pemakaman ini termasuk salah satu aset budaya masa silam, terutama masa Kesultanan Palembang Darussalam di Sumatera Selatan, yang perlu dilestarikan.",
      "Lokasi pemakaman ini bersebelahan dengan Pemakaman Kawah Tengkurep, dengan jarak sekitar 200 meter.",
    ],
    lokasi: "Jl. 3 Ilir",
  },
  "makam-kebon-gede": {
    name: "Makam Kebon Gede",
    tagline: "Makam raja kedua Kesultanan Palembang Darussalam.",
    text: [
      "Inilah makam Sultan Muhammad Mansyur Jayo Ing Lago ibni Seri Sultan Susuhan Abdurahman Candiwalang Khalifatul Mukminin Sayyidul Imam Ratu Djamaludin Mangkurat, yaitu raja kedua Kesultanan Palembang Darussalam yang memerintah pada tahun 1706 sampai 1714.",
      "Pusara sultan yang bernama Raden Ario bergelar Pangeran Ratu Senopati Jayo Ing Lago ini berada di Guguk Kebon Gede (Makrayu), Kelurahan Tigapuluh Dua Ilir, Kecamatan Ilir Barat Dua, Kota Palembang.",
    ],
    lokasi: "Kelurahan Tigapuluh Dua Ilir, Kecamatan Ilir Barat Dua",
  },
  "makam-kawah-tekurep": {
    name: "Makam Kawah Tekurep",
    tagline: "Kompleks makam sultan yang dibangun pada tahun 1728.",
    text: [
      "Makam Kawah Tekurep dibangun pada tahun 1728 dengan menggunakan tiga unsur, yaitu kapur pasir, putih telur, dan batu. Makam ini dibangun bersamaan dengan pembangunan Masjid Agung Palembang.",
      "Di makam yang berlokasi di Kecamatan Ilir Timur II, Palembang ini terdapat makam Sultan Mahmud Badaruddin beserta empat istrinya, yaitu Ratu Sepuh dari Demak, Ratu Gading dari Malaysia, Ratu Mas Ayu dari Cina, dan Nyai Mas Naimah dari Palembang.",
    ],
    lokasi: "Jl. 3 Ilir",
    extra: [{ label: "Dibangun", value: "1728" }],
  },
  "makam-sultan-agung": {
    name: "Makam Sultan Agung",
    tagline: "Kompleks makam Sultan Agung Komaruddin Sri Teruno.",
    text: [
      "Kompleks Makam Sultan Agung Komaruddin Sri Teruno (1718–1727 M) merupakan salah satu kekayaan arkeologi di Kota Palembang. Kompleks ini terdapat di kawasan Kelurahan 1 Ilir, Kecamatan Ilir Timur II, berbatasan dengan lingkungan PT Pusri (ada sebuah masjid, yaitu Masjid Sultan Agung, yang menjadi pembatas).",
    ],
    lokasi: "Jl. Sultan Agung",
  },
  "makam-sabokingking": {
    name: "Makam Sabokingking",
    tagline: "Makam kerajaan Pangeran Sido Ing Kenayan.",
    text: [
      "Sabokingking adalah sebuah makam kerajaan. Nama Sabokingking berasal dari bahasa Sansekerta. Sama dengan Kerajaan Majapahit yang rajanya bernama Hayam Wuruk, Sabokingking dipimpin oleh seorang raja bernama Pangeran Sido Ing Kenayan.",
      "Pangeran ini berasal dari Jawa, dan istrinya bernama Ratu Sinuhun. Pangeran ini memiliki seorang guru spiritual atau penasihat bernama Habib Muh. Nuh.",
    ],
    lokasi: "Makam Sabokingking",
  },
  "makam-bagus-kuning": {
    name: "Makam Bagus Kuning",
    tagline: "Makam Ratu Bagus Kuning di kawasan Plaju yang teduh.",
    text: [
      "Kawasan Bagus Kuning di kawasan Plaju Palembang merupakan salah satu objek wisata di Kota Palembang. Dari kompleks perumahan hingga lapangan sepak bola, situasi terlihat hijau sehingga memberi kesan teduh.",
      "Di satu bagian, yakni makam Ratu Bagus Kuning Ma’a Ahluh Wa’ Shohabuh, diyakini memiliki keramat sehingga banyak masyarakat yang mendatanginya.",
    ],
    lokasi: "Jl. DI Panjaitan",
  },
  "makam-cinde-welang": {
    name: "Makam Cinde Welang",
    tagline: "Makam sultan pertama Kesultanan Palembang Darussalam.",
    text: [
      "Di area ini terdapat makam sultan pertama dari Kesultanan Palembang Darussalam, yakni Kemas Hindi yang bergelar Pangeran Ratu Kemas Hindi Sri Susuhanan Abdurrahman Candiwalang Khalifatul Mukminin Sayidul Iman.",
      "Ada cerita panjang terkait awal mula Kesultanan Palembang Darussalam dan hubungannya dengan kompleks makam ini, setelah Keraton Kuto Gawang dikuasai oleh Belanda.",
    ],
    lokasi: "Jl. Cinde Welan",
  },
  "makam-ki-gede-ing-suro": {
    name: "Makam Ki Gede Ing Suro",
    tagline: "Makam tokoh yang menandai awal Kerajaan Palembang memeluk Islam.",
    text: [
      "Ki Gede Ing Suro adalah putra Ki Gede Ing Lautan, salah satu dari 24 bangsawan dari Demak yang datang ke Palembang setelah terjadi kekacauan di kerajaan Islam terbesar di Pulau Jawa. Kekisruhan ini merupakan rangkaian panjang dari sejarah kerajaan terbesar di Nusantara setelah Kerajaan Sriwijaya, yaitu Kerajaan Majapahit.",
      "Pada masa Ki Gede Ing Suro inilah awal mula Kerajaan Palembang memeluk agama Islam.",
    ],
    lokasi: "Jl. Ratu Sinaun",
  },
  "makam-sultan-m-mansyur": {
    name: "Makam Sultan Muhammad Mansyur",
    tagline: "Kompleks makam Sultan Muhammad Mansyur dan permaisurinya.",
    text: [
      "Secara administrasi kompleks makam ini terletak di Kelurahan 32 Ilir, Kecamatan Ilir Barat II. Situs yang berada di kawasan permukiman ini terlihat berada di lahan yang lebih tinggi dari daerah sekitarnya. Di dekat kompleks makam ini terdapat saluran yang bermuara di Sungai Musi.",
      "Di kompleks ini dimakamkan Sultan Muhammad Mansur dan permaisurinya serta Imam Sultan.",
    ],
    lokasi: "Jl. 32 Ilir",
  },
  "makam-ariodillah": {
    name: "Makam Ariodillah",
    tagline: "Makam Ario Dillah (Ario Damar), putra Sri Prabu Kertawijaya.",
    text: [
      "Makam Ario Dillah (Ario Damar) berlokasi di Jl. Ariodillah, Kecamatan Ilir Timur I, Palembang. Ario Damar atau Ario Dillah adalah putra dari Sri Prabu Kertawijaya.",
      "Ario Damar dibesarkan oleh ibunya yang bernama Endang Sasmitapura dan uwaknya yang bernama Ki Kumbarawa di Pertapaan Wanassalam (nama hutan di selatan Majapahit).",
    ],
    lokasi: "Jl. Ariodillah III",
  },
  "rumah-limas-cek-mas": {
    name: "Rumah Limas Cek Mas",
    tagline: "Rumah limas berusia sekitar 120 tahun di bantaran Sungai Musi.",
    text: [
      "Sebuah rumah berarsitektur khas Palembang yang lazim disebut “Rumah Limas” di bantaran Sungai Musi tampak kokoh berdiri hingga kini meski sudah berusia 120 tahun.",
      "Rumah pada areal seluas 1.000 meter persegi di Jalan Ki Gede Ing Suro, Kelurahan 30 Ilir, Lorong Masjid Suro, Kota Palembang, berjarak sekitar 100 meter dari tepi jalan aspal menuju arah sungai. Kondisinya tetap terjaga meski berada di atas lumpur.",
    ],
    lokasi: "Jl. Tanggo Buntung",
    extra: [{ label: "Usia", value: "± 120 tahun" }],
  },
  "rumah-limas-bayumi-wahab": {
    name: "Rumah Limas Bayumi Wahab",
    tagline: "Rumah panggung kayu berarsitektur limas khas Sumatera Selatan.",
    text: [
      "Rumah panggung kayu. “Bari” dalam bahasa Palembang berarti lama atau kuno. Dari segi arsitektur, rumah-rumah kayu itu disebut rumah limas karena bentuk atapnya yang berupa limasan.",
      "Sumatera Selatan adalah salah satu daerah yang memiliki ciri khas rumah limas sebagai rumah tinggal. Alam Sumatera Selatan yang lekat dengan perairan tawar, baik rawa maupun sungai, membuat masyarakatnya membangun rumah panggung.",
    ],
    lokasi: "Jl. Kampus Univ. IBA",
  },
  "kawasan-1-ilir": {
    name: "Kawasan 1 Ilir",
    tagline: "Kawasan wisata religi dan sejarah di Ilir Timur II.",
    text: [
      "1 Ilir adalah salah satu kelurahan di Kecamatan Ilir Timur II. Di sini terdapat beberapa tempat wisata religi seperti masjid dan makam Sultan Agung. Di sini juga terdapat kawasan yang dulunya merupakan bekas rumah Temenggung Jompong.",
    ],
    lokasi: "Jl. Kawasan 1 Ilir",
  },
  "kawasan-pasar-16-ilir": {
    name: "Kawasan Pasar 16 Ilir",
    tagline: "Pusat perekonomian tua Palembang di tepi Sungai Musi.",
    text: [
      "Geliat perekonomian 16 Ilir dan sekitarnya sesungguhnya sudah dimulai sejak Kimas Hindi Pangeran Ario Kesumo Abdulrohim memindahkan pusat kekuasaan dari 1 Ilir, yang dibakar habis oleh VOC tahun 1659, ke Kuto Cerancang (kini kawasan Beringin Janggut, Masjid Lama, dan sekitarnya) pada tahun 1662.",
    ],
    lokasi: "Jl. Pasar 16 Ilir",
  },
  "kawasan-tuan-kentang": {
    name: "Kawasan Tuan Kentang",
    tagline: "Kawasan pengrajin kain tenun",
    text: [
      "Kawasan pengrajin kain tenun di Kelurahan Tuan Kentang, Kecamatan Seberang Ulu I Palembang, ternyata menyimpan pesona yang layak dijual di dunia sebagai destinasi wisata sungai baru.",
      "Pemerintah Kota Palembang melalui Dinas Perindustrian, bekerja sama dengan Bank Indonesia (BI), akan menjadikan kawasan Tuan Kentang, Kecamatan Seberang Ulu I Palembang, sebagai kampung kain.",
    ],
    lokasi: "Jl. Seberang Ulu 1",
  },
  "kawasan-sungai-lumpur": {
    name: "Kawasan Sungai Lumpur",
    tagline: "Kampung tua dengan masjid bersejarah di 11 Ulu.",
    text: [
      "Kampung Sungai Lumpur di Jalan Abdullah Azhary, Kelurahan 11 Ulu, juga bisa menjadi referensi baru untuk para pelancong. Di daerah tersebut terdapat masjid tua bersejarah yang memperlihatkan jejak-jejak penyebaran Islam di Palembang.",
    ],
    lokasi: "Jl. 11 Ulu",
  },
  "kampung-kapitan": {
    name: "Kampung Kapitan",
    tagline: "Keberadaan komunitas marga tionghoa",
    lokasi: "Jl. KH. Azhari",
    extra: [{ label: "Luas kawasan", value: "± 20 ha (Kelurahan 7 Ulu, Kec. Seberang Ulu I)" }],
  },
  "taman-wisata-kerajaan-sriwijaya": {
    name: "Taman Wisata Kerajaan Sriwijaya",
    tagline: "Taman bertema alur kehidupan Kerajaan Sriwijaya.",
    text: [
      "Dengan konsep pameran yang menggambarkan alur kehidupan Kerajaan Sriwijaya, mulai dari masa Pra-Sriwijaya dengan peninggalan berupa artefak seperti manik-manik, keramik, dan kendi.",
      "Kemudian artefak seperti prasasti, arca, candi, keramik, perjanjian hubungan perdagangan, dan kemudi kapal yang menggambarkan kerajaan maritim, serta masa Pasca-Sriwijaya.",
    ],
    lokasi: "Jl. Karang Anyar",
  },
  "goa-jepang-ario-kemuning": {
    name: "Goa Jepang Ario Kemuning",
    tagline: "Bekas markas dan tempat persembunyian tentara Jepang.",
    text: [
      "Goa Jepang ini dulunya adalah markas dan tempat persembunyian bagi tentara Jepang. Menurut cerita, goa tersebut memiliki lorong yang bisa menghubungkan ke bunker Jepang yang berada di dekat Rumah Sakit Charitas Palembang (berjarak sekitar 4 atau 5 km dari goa).",
      "Karena kondisinya yang saat ini tidak terurus, sepertinya tidak ada yang berani menelusuri lorong goa tersebut untuk membuktikan kebenaran cerita itu.",
    ],
    lokasi: "Jl. Ario Kemuning",
  },
  "goa-jepang-jalan-joko": {
    name: "Goa Jepang Jalan Joko",
    tagline: "Rumah bawah tanah peninggalan masa pendudukan Jepang.",
    text: [
      "Rumah bawah tanah atau yang dikenal dengan Goa Jepang Jalan Joko beralamat di Jalan Joko, Kelurahan 29 Ilir, tepatnya di belakang SMP N 1 Palembang.",
    ],
    lokasi: "Jl. Joko, 29 Ilir",
  },
  "gedung-balai-pertemuan": {
    name: "Gedung Balai Pertemuan",
    tagline: "Gedung tahun 1938 yang kini menjadi restoran.",
    text: [
      "Gedung Balai Pertemuan (juga dikenal sebagai Gedung Kesenian Palembang) dibangun pada tahun 1938. Dulunya tempat ini menjadi tempat berkumpulnya para nona Belanda dan berfungsi sebagai balai pertemuan pada masa itu.",
      "Saat ini, gedung ini beralih fungsi menjadi restoran.",
    ],
    lokasi: "Jl. Sekanak No. 26",
    extra: [{ label: "Dibangun", value: "1938" }],
  },
  "kampung-arab-al-munawar": {
    name: "Kampung Arab Al-Munawar",
    tagline: "Desa wisata keturunan Arab di tepi Sungai Musi.",
    text: [
      "Kampung Arab Al Munawar konon namanya diambil dari Habib Hasan Abdurrahman Al-Munawwar. Dari beberapa sumber, kampung ini terdiri dari 30 kepala keluarga yang merupakan keturunan asli Arab.",
      "Desa wisata Kampung Arab Al Munawar ini berada di sepanjang Sungai Musi, baik di bagian Ilir maupun Ulu, tepatnya di kawasan 13 Ulu, Palembang.",
    ],
    lokasi: "Lrg. Al Haddad, 13 Ulu",
  },
  "kampung-palembang": {
    name: "Kampung Palembang",
    tagline: "Puluhan rumah limas berusia ratusan tahun yang masih terawat.",
    text: [
      "Puluhan rumah limas berusia ratusan tahun yang merupakan bangunan tradisional milik warga Palembang masih berdiri kokoh di kawasan wisata Kampung Palembang. Secara fisik rumah limas tradisional tersebut memiliki struktur unik, dan tiap profil bangunannya memiliki arti tersendiri.",
      "Hal ini menjadi daya tarik bagi para pengunjung yang datang ke area yang beralamat di Lorong Firma 3/4 Ulu, Seberang Ulu 1, Palembang. Meski sudah berusia ratusan tahun, rumah limas ini masih terawat sebagai cagar budaya yang terus dilestarikan.",
    ],
    lokasi: "Lorong Firma 3/4 Ulu, Seberang Ulu 1",
  },
  "lawang-borotan": {
    name: "Lawang Borotan",
    tagline: "Gerbang kokoh sisa benteng keraton di tepi Sungai Musi.",
    text: [
      "Lawang Borotan terdiri dari dua pilar atau semacam tiang besar dan dua daun pintu dari kayu yang tebal. Tinggi daun pintunya saja sekitar empat sepeda motor, terlihat sangat kuat dan berat. Baik bangunan beton maupun daun pintunya semuanya masih asli.",
      "Jika masuk ke bagian dalam pintu, terdapat ruangan kecil sebelum menuju ke dalam keraton atau benteng yang kini tidak ada lagi, karena bagian dalam benteng telah menjadi permukiman. Bagian depannya yang menghadap Sungai Musi adalah Markas Kesdam II Sriwijaya.",
    ],
    lokasi: "19 Ilir, Kec. Bukit Kecil",
  },
  "jakabaring-sport-city": {
    name: "Jakabaring Sport City",
    tagline: "Kompleks olahraga yang lengkap",
    lokasi: "Jl. Gubernur H.A. Bastari",
    extra: [
      { label: "Jarak dari pusat kota", value: "± 5 km" },
      { label: "Event besar", value: "PON XVI 2004, SEA Games XXVI 2011, Asian Games 2018" },
    ],
  },
  "opi-water-fun": {
    name: "OPI Water Fun",
    tagline: "Wahana air di kompleks OPI Jakabaring.",
    text: [
      "OPI Water Fun adalah tempat wisata wahana air yang ada di Jl. Gubernur H.A. Bastari, Kompleks OPI (Ogan Permata Indah) Jakabaring, Palembang, Sumatera Selatan.",
    ],
    lokasi: "Jl. Gubernur H.A. Bastari",
  },
  "amanzi-water-park": {
    name: "Amanzi Water Park",
    tagline: "Wahana wisata air di kawasan Citra Grand City.",
    text: ["Amanzi Waterpark adalah wahana wisata air yang berlokasi di kawasan Citra Grand City, Palembang."],
    lokasi: "Jl. Citra Grand City",
  },
  "ampera-skate-park": {
    name: "Ampera Skate Park",
    tagline: "Arena skateboard tepat di bawah Jembatan Ampera.",
    text: [
      "Ampera Skate Park adalah arena permainan papan seluncur (skateboarding) bagi para skateboarder di Kota Palembang. Arena ini diresmikan pada tahun 2018.",
      "Dengan arena yang cukup memadai dan luas, tempat ini cocok digunakan untuk latihan skateboard sambil memandang Jembatan Ampera, karena letaknya tepat di bawah sisi jembatan.",
    ],
    lokasi: "Jl. Palembang Darussalam, 19 Ilir, Kec. Bukit Kecil",
    extra: [{ label: "Diresmikan", value: "2018" }],
  },
  "fantasy-island": {
    name: "Fantasy Island",
    tagline: "Waterpark ramai di Kertapati untuk liburan keluarga.",
    text: [
      "Fantasy Island merupakan salah satu taman bermain air atau waterpark yang ada di Palembang. Tempat wisata ini selalu ramai oleh masyarakat yang ingin menghabiskan hari libur dengan berenang maupun sekadar bermain air.",
      "Berlokasi di Jalan Prameswara, Karya Jaya, Kecamatan Kertapati, posisinya strategis dan mudah dijangkau bagi para wisatawan yang ingin berlibur ke tempat ini.",
    ],
    lokasi: "Jl. Prameswara, Karya Jaya, Kec. Kertapati",
  },
  "danau-opi": {
    name: "Danau OPI",
    tagline: "Danau buatan favorit muda-mudi di Jakabaring.",
    text: [
      "Di kawasan Seberang Ulu, tepatnya di Jakabaring, ada satu danau buatan yang biasanya dikunjungi muda-mudi Palembang. Objek rekreasi favorit ini terletak di kompleks perumahan Ogan Permata Indah (OPI) Jakabaring.",
      "Untuk menuju ke Danau OPI tidaklah sulit karena lokasinya berada di Jalan Gubernur H. Bastari, dekat dengan Stadion Gelora Sriwijaya Jakabaring, tempat markas besar Sriwijaya FC berlatih.",
    ],
    lokasi: "Jl. Ogan Permata Indah",
  },
  "al-quran-akbar": {
    name: "Al-Qur’an Al-Akbar",
    tagline: "Wisata religi ternama dan salah satu ikon Kota Palembang.",
    lokasi: "Jl. Moh. Amin (Pondok Pesantren Al Ihsaniyah Gandus)",
    extra: [
      { label: "Isi", value: "30 juz ayat suci Al-Qur’an" },
      { label: "Bahan", value: "± 40 m³ kayu tembesu" },
      { label: "Biaya", value: "Tidak kurang dari Rp2 miliar" },
      { label: "Ukuran tiap lembar", value: "177 × 140 × 2,5 cm" },
    ],
  },
  "palembang-bird-park": {
    name: "Palembang Bird Park",
    tagline: "Taman burung di kawasan bisnis OPI Jakabaring.",
    text: [
      "Palembang Bird Park terletak di kawasan bisnis OPI (Ogan Permata Indah) Jakabaring, di antara OPI Water Fun, OPI Convention Centre, dan OPI Mall.",
    ],
    lokasi: "Jl. Gubernur H.A. Bastari",
  },
  "masjid-cheng-ho": {
    name: "Masjid Cheng Ho",
    tagline: "Masjid bernuansa Tionghoa dengan menara bertingkat.",
    text: [
      "Keberadaan Masjid Cheng Ho di Palembang bukan sekadar untuk mengultuskan Cheng Ho sebagai seorang tokoh muslim Tiongkok. Lebih dari itu, nama Cheng Ho diharapkan mampu menyadarkan kita akan arti penting meneladani apa yang sudah dilakukannya, yaitu menyebarkan kedamaian kepada siapa pun yang ditemuinya.",
    ],
    lokasi: "Jl. 15 Ulu",
  },
  "sekanak-lambidaro": {
    name: "Sekanak Lambidaro",
    tagline: "Ikon wisata sungai baru sepanjang lebih dari 2 km.",
    text: [
      "Destinasi wisata Sungai Sekanak Lambidaro merupakan ikon wisata baru Kota Palembang dengan panjang lebih dari 2 kilometer. Membentang mulai dari Jalan Brigjen Efendi di sekitar Palembang Indah Mall hingga ke muara Sungai Musi di dekat kantor Wali Kota Palembang.",
      "Wisatawan dapat menyusuri sungai, menikmati aneka jajanan tradisional di sepanjang jalur pedestrian, atau bersantai di ruang terbuka di sekitar sungai. Pada malam hari suasana semakin cantik karena pendar cahaya dari lampu taman yang terpasang.",
    ],
    lokasi: "24 Ilir, Kec. Bukit Kecil",
    extra: [{ label: "Panjang", value: "> 2 km" }],
  },
  "taman-rusa-pt-pusri": {
    name: "Taman Rusa PT Pusri",
    tagline: "Taman rusa yang ramai di akhir pekan.",
    text: [
      "Taman Rusa yang letaknya persis di depan rumah sakit dan kantor pusat PT Pusri ini, setiap sore di hari libur, Minggu, dan hari besar lainnya, selalu dipadati pengunjung dan karyawan PT Pusri.",
    ],
    lokasi: "Jl. May Zen, Kalidoni, Kec. Kalidoni",
  },
  "taman-pt-pertamina": {
    name: "Taman PT Pertamina",
    tagline: "Taman edukasi keanekaragaman hayati Kilang Pertamina Plaju.",
    text: [
      "Kilang Pertamina Internasional Refinery Unit III Plaju yang berlokasi di Sumatera Selatan berkomitmen bertanggung jawab dalam pengelolaan keanekaragaman hayati di lingkungan sekitar.",
      "Hal ini diwujudkan dengan program keanekaragaman hayati, di antaranya budidaya ikan Belida, penangkaran rusa, penanaman pohon atau penghijauan di wilayah kompleks Pertamina, dan konservasi Gajah Sumatera.",
    ],
    lokasi: "Talang Putri, Kec. Plaju",
  },
  "monumen-silk-air": {
    name: "Monumen SILK AIR",
    tagline: "Monumen peringatan jatuhnya pesawat Silk Air 185 (1997).",
    text: [
      "Monumen yang terletak di Kebun Bunga ini dibangun atas musibah jatuhnya pesawat Silk Air 185 pada tanggal 19 Desember 1997 di Sungsang.",
    ],
    lokasi: "Jl. Kebun Bunga",
  },
  "graha-songket": {
    name: "Graha Songket",
    tagline: "Showroom kerajinan songket dan tenun khas Sumatera Selatan.",
    text: [
      "Gedung Graha Songket ini dibangun di atas lahan seluas 523 m² dengan luas bangunan utama 293,5 m². Graha Songket adalah showroom bagi produk-produk kerajinan sandang khas Sumsel, khususnya kerajinan tenun songket, tenun kajung, blongsong, maupun jumputan.",
    ],
    lokasi: "Jl. Balap Sepeda",
    extra: [{ label: "Luas lahan", value: "523 m² (bangunan utama 293,5 m²)" }],
  },
  "rumah-limas-h-aziz": {
    name: "Rumah Limas H. Aziz",
    tagline: "Rumah limas pusat oleh-oleh dengan koleksi pernak-pernik khas Palembang.",
    text: [
      "Rumah limas ini terdiri dari dua lantai. Lantai pertama merupakan pusat oleh-oleh dan jajanan, dan lantai kedua tempat koleksi pernak-pernik khas Palembang, mulai dari songket, pelaminan khas Palembang, hingga rupa kamar khas Palembang.",
      "Tersedia juga penyewaan pakaian adat untuk berfoto. Venue untuk berfoto bisa dipilih, seperti kamar pengantin, kamar akikah, kode pengantin, dan ambenan.",
    ],
    lokasi: "Jl. Demang Lebar Daun",
  },
  "pabrik-es-assegaf-16-ulu": {
    name: "Pabrik Es Assegaf 16 Ulu",
    tagline: "Bekas pabrik es berdiri sejak 1929 di tepi Sungai Musi.",
    text: [
      "Salah seorang dari komunitas ini, Habib Alwi Al Assegaff, kemudian menikah dengan salah seorang putri Habib Abdurrahman Al Munawar, pemukim Arab pertama di Kampung Arab Al Munawar. Setelah pernikahan, Habib Alwi pindah ke kawasan 16 Ulu dan mulai membangun rumah di kawasan itu, tepat di tepi Sungai Musi.",
      "Perkampungan ini kian berkembang, apalagi pada tahun 1929 didirikan pabrik es.",
    ],
    lokasi: "Jl. 16 Ulu",
    extra: [{ label: "Pabrik es berdiri", value: "1929" }],
  },
  "rumah-adat-dekranasda": {
    name: "Rumah Adat Dekranasda",
    tagline: "Kumpulan rumah adat kabupaten/kota se-Sumatera Selatan.",
    text: [
      "Sumatera Selatan (Sumsel) terbagi dalam belasan kabupaten dan kota. Masing-masing kabupaten atau kota tersebut memiliki rumah adat dengan ciri khas yang berbeda.",
      "Cukup datang ke Kompleks Dewan Kerajinan Nasional Daerah (Dekranasda) Palembang yang terletak di Jalan Gubernur H. Bastari, Jakabaring, Kecamatan Seberang Ulu I, Palembang.",
    ],
    lokasi: "Jl. Gubernur H. Bastari",
  },
  "kampung-gerabah-kalidoni": {
    name: "Kampung Gerabah Kalidoni",
    tagline: "Kampung kreatif pengrajin gerabah tanah liat.",
    text: [
      "Kampung ini merupakan salah satu kampung yang mengikuti Kampung Kreatif Kota Palembang. Dengan gerabah sebagai ikon kampungnya, masyarakat di sini membuat gerabah dari tanah liat menjadi benda yang berguna bagi kehidupan sehari-hari, mulai dari mangkok, celengan, pot bunga, hingga hiasan untuk keindahan rumah dan lingkungan.",
      "Hasil gerabah kampung ini juga dijual ke luar dan menjadi ladang perputaran ekonomi masyarakat kampung.",
    ],
    lokasi: "Sei Selincah, Kec. Kalidoni",
  },
  "kampung-mural-gudang-boen-tjit": {
    name: "Kampung Mural Gudang Boen Tjit",
    tagline: "Bekas gudang kolonial yang kini jadi kampung mural.",
    text: [
      "Kampung Mural yang berada di Jalan Ki Gede Ing Suro, Kelurahan 29 Ilir, Palembang, ini sebelumnya merupakan kompleks pergudangan kuno di zaman Belanda, tetapi kini direnovasi menjadi destinasi wisata urban yang digemari milenial, khususnya pencinta foto.",
    ],
    lokasi: "Jl. Ki Gede Ing Suro No. 296, 28 Ilir, Kec. Ilir Barat II",
  },
  "tugu-belido": {
    name: "Tugu Belido",
    tagline: "Tugu ikan belido menghadap Sungai Musi untuk melestarikan ikan endemik.",
    text: [
      "Patung Ikan Belido dibuat oleh seniman asal Boyolali, Jawa Tengah, yang kemudian dirakit di Kota Palembang. Patungnya terbuat dari lempengan tembaga, kerangkanya dari baja, sedangkan lapisan luarnya adalah perak. Menghadap ke Sungai Musi, tugu ini dapat mengeluarkan air mancur melalui mulutnya.",
      "Meski menjadi hewan endemik di Sungai Musi, keberadaan ikan belido nyaris punah. Karena itu dibangunlah Tugu Ikan Belido yang bertujuan membangkitkan semangat warga Palembang untuk melestarikan habitat ikan ini.",
    ],
    lokasi: "19 Ilir, Kec. Bukit Kecil",
  },
  "tepian-sungai-sekanak-besolek": {
    name: "Tepian Sungai Sekanak Besolek",
    tagline: "Wisata air kekinian dengan mural warna-warni dan kubus apung.",
    text: [
      "Sekanak Besolek merupakan destinasi wisata air baru di Kota Palembang. Destinasi ini disebut juga sebagai destinasi kekinian dan instagramable.",
      "Warna-warni mural, disertai kubus yang mengapung di sepanjang Sungai Sekanak, membuat Sekanak Besolek menjadi salah satu destinasi primadona di kota pempek yang banyak dikunjungi orang setiap harinya.",
    ],
    lokasi: "22 Ilir, Kec. Bukit Kecil",
  },
  "graha-sriwijaya": {
    name: "Graha Sriwijaya",
    tagline: "Kawasan perhotelan dan pusat olahraga di Jl. Merdeka.",
    text: [
      "Graha Sriwijaya adalah kawasan perhotelan dan pusat olahraga yang terdiri dari kolam renang dan sport center, berada di Jalan Merdeka dan terletak dekat dari Masjid Agung Palembang, Benteng Kuto Besak, dan Monpera.",
    ],
    lokasi: "Jl. Merdeka No. 9, 19 Ilir, Kec. Bukit Kecil Selatan 30113",
  },
  "rumah-ong-boen-tjiet": {
    name: "Rumah Ong Boen Tjiet",
    tagline: "Rumah saudagar berusia sekitar 300 tahun dengan ornamen Tiongkok.",
    text: [
      "Salah satu destinasi religi non-Islam yang ada di Kota Palembang adalah Rumah Ong Boen Tjiet yang berlokasi di Lorong Saudagar Yucing, Kelurahan 3-4 Ulu.",
      "Rumah ini telah dibangun sejak abad ke-17 oleh seorang saudagar kaya bernama Ong Boen Tjiet. Daya tarik utama rumah berusia sekitar 300 tahun ini ialah masih berdiri kokoh di tepian Sungai Musi dengan keindahan ornamen Tiongkok hingga ukiran khas Kota Palembang.",
    ],
    lokasi: "3-4 Ulu, Kecamatan Seberang Ulu I",
  },
  "kampung-pempek": {
    name: "Kampung Pempek",
    tagline: "Surganya pecinta kuliner khas Palembang.",
    title: "Kampung Pempek 27 Ilir",
    text: [
      "Di Palembang ada kampung pempek yang diusahakan oleh masyarakat asli yang rata-rata mendapat sematan gelar kebangsawanan Raden. Lokasinya berada di 27 Ilir, tidak jauh dari pusat kerajaan Kesultanan Palembang. Dahulu yang menetap di kawasan ini rata-rata ialah adipati.",
      "Di kampung ini, rata-rata diproduksi makanan tradisional seperti pempek dan kudapan olahan ikan lainnya.",
    ],
    lokasi: "Jl. Depaten Lama, 27 Ilir, Kec. Ilir Barat II",
  },
  "pasar-durian-kuto": {
    name: "Pasar Durian Kuto",
    tagline: "Surga durian di tengah Kota Palembang.",
    text: [
      "Salah satu destinasi kuliner yang memikat hati para pecinta durian adalah Pasar Kuto Palembang. Tidak hanya menjadi tempat jual-beli, pasar ini menjadikan durian sebagai bintang utamanya dan dianggap sebagai surga durian di tengah Kota Palembang.",
      "Pasar ini menawarkan ragam durian dari yang kecil hingga besar, dari yang manis hingga legit, semuanya dipetik dari kebun-kebun durian di berbagai pelosok Sumatera Selatan.",
    ],
    lokasi: "Jl. Slamet Riady No. 521, Kuto Batu, Kec. Ilir Timur II",
  },
  "kampung-ikan-hias-sekojo": {
    name: "Kampung Ikan Hias Sekojo",
    tagline: "Kampung budidaya ikan hias yang diresmikan lewat program Kotaku.",
    text: [
      "Wisata yang terletak di Jalan Yasin, Lorong Damai 1, Sekojo, Palembang ini diresmikan pada 29 Januari 2018 melalui program Kotaku (Kota Tanpa Kumuh).",
      "Kampung ikan hias ini dulunya adalah rawa-rawa dan pada tahun 1994 dimanfaatkan oleh warga menjadi kolam ikan hias. Terdapat puluhan jenis ikan hias dan ratusan tambak ikan hias milik 19 peternak.",
    ],
    lokasi: "RT 40 Sekojo",
    extra: [{ label: "Diresmikan", value: "29 Januari 2018" }],
  },
  "kampung-wisata-sugih-waras": {
    name: "Kampung Wisata Sugih Waras",
    tagline: "Desa wisata tepi Sungai Ogan dengan flying fox dan perahu ketek.",
    text: [
      "Desa Sugih Waras merupakan salah satu desa yang terletak di Kecamatan Teluk Gelam, Kabupaten Ogan Komering Ilir, Sumatera Selatan. Sebagian besar penduduknya bermata pencaharian di sektor pertanian, dengan luas tanah sawah 215 ha dan tanah perkebunan 1.000 ha.",
      "Desa Wisata Sugih Waras terletak 200 meter dari jalan raya Tanjung Lubuk dan berada di pinggiran Sungai Ogan. Pesona wisata yang ditawarkan terdiri dari taman wisata dengan panorama alam, fasilitas bermain anak, gazebo untuk keluarga, photo booth bernuansa alam, flying fox, dan perahu ketek untuk menyusuri sungai.",
    ],
    lokasi: "Talang Jambe, Kec. Sukarami",
  },
  "kawasan-wisata-lebak-cindo": {
    name: "Kawasan Wisata Lebak Cindo",
    tagline: "Pedestrian 500 meter yang instagramable.",
    text: [
      "Pedestrian sepanjang 500 meter ini masuk segmen program restorasi Sekanak Lambidaro. Kawasan ini berada di Jl. Letnan Mukmin No. 1041, 24 Ilir, Kec. Bukit Kecil, Kota Palembang, Sumatera Selatan 30127.",
      "Karena cantik dipandang mata, pengunjung memanfaatkannya sebagai spot foto yang instagramable.",
    ],
    lokasi: "Jl. Letnan Mukmin No. 1041, 24 Ilir, Kec. Bukit Kecil",
    extra: [{ label: "Panjang pedestrian", value: "500 m" }],
  },
  "kampung-wisata-lorong-mari": {
    name: "Kampung Wisata Lorong Mari",
    tagline: "Kampung warna-warni dan kampung 3D penghasil kemplang tunu.",
    text: [
      "Kota Palembang punya kampung wisata yang unik, namanya Kampung Wisata Lorong Mari, berlokasi di Jalan Kapten Abdullah, Lorong Mari, Talang Bubuk, Kecamatan Plaju.",
      "Fasilitasnya beragam, mulai dari Kelompok Swadaya Masyarakat (KSM), kampung warna-warni, kampung 3D, kampung hijau, dan kampung mini pedestrian. Mayoritas penduduk kampung ini juga berprofesi sebagai pengusaha “kemplang tunu” (kerupuk panggang khas Sumatera Selatan).",
    ],
    lokasi: "Kec. Plaju",
  },
  "kampung-ikan-asin-5-ulu": {
    name: "Kampung Ikan Asin 5 Ulu",
    tagline: "Sentra ikan asin terbesar di Palembang (Kampung Siabang).",
    text: [
      "Di Kota Palembang terdapat sentra pembuatan ikan asin terbesar. Dikenal dengan nama Kampung Siabang, puluhan pelaku UMKM di sini memproduksi ratusan kilogram ikan asin setiap harinya. Kampung Ikan Asin Siabang terletak di Jalan Faqih Usman, Lorong Keramasan 1, Kelurahan 5 Ulu, Kecamatan Seberang Ulu I, Kota Palembang.",
      "Jika wisatawan datang ke sini, bukan hanya bisa membeli beragam jenis ikan asin, tetapi juga bisa melihat proses pembuatannya.",
    ],
    lokasi: "Lrg. Keramat, RT.05/RW.02, 5 Ulu, Kecamatan Seberang Ulu",
  },
  "kampung-wisata-bahari": {
    name: "Kampung Wisata Bahari",
    tagline: "Kampung bahari dengan lima klaster di tepian Sungai Ogan.",
    text: [
      "Kampung Bahari Nusantara ini dibentuk untuk mengangkat potensi maritim di tepian Sungai Ogan.",
      "Di Kampung Bahari Nusantara terdapat lima klaster: klaster pendidikan dengan berdirinya Rumah Pintar, klaster ekonomi budidaya ikan lele, klaster pariwisata pelestarian perahu bidar, klaster pertahanan pemberdayaan pemuda setempat, dan klaster kesehatan dengan pendirian posyandu.",
    ],
    lokasi: "Jl. Pangeran Ratu, 15 Ulu, Kecamatan Seberang Ulu I",
  },
  "pulau-kemaro": {
    name: "Pulau Kemaro",
    tagline: "Pulau yang identik dengan klenteng budha",
    text: [
      "Di pulau ini terdapat sebuah klenteng Buddha yang selalu dikunjungi penganutnya, terutama pada perayaan Cap Go Meh.",
      "Pulau ini dapat dicapai dengan transportasi air seperti ketek, speedboat, kapal wisata Putri Kembang Dadar, Sigentar Alam, dan perahu Naga dari dermaga wisata Benteng Kuto Besak (BKB) atau dari pabrik Intirub.",
    ],
    lokasi: "Jl. 1 Ilir",
  },
  "sungai-musi": {
    name: "Sungai Musi",
    tagline: "Sungai sepanjang 750 km yang membelah Kota Palembang.",
    text: [
      "Sungai Musi adalah sebuah sungai yang terletak di Provinsi Sumatera Selatan, Indonesia. Dengan panjang 750 km, sungai ini merupakan salah satu sungai terpanjang di Sumatera Selatan dan membelah Kota Palembang menjadi dua bagian.",
      "Jembatan Ampera yang menjadi ikon Kota Palembang melintas di atas sungai ini. Sejak zaman Kerajaan Sriwijaya hingga sekarang, sungai ini terkenal sebagai sarana transportasi utama bagi masyarakat.",
    ],
    lokasi: "Perairan Sungai Musi",
    extra: [{ label: "Panjang", value: "750 km" }],
  },
  "kambang-iwak": {
    name: "Kambang Iwak",
    tagline: "Taman kota peninggalan masa kolonial sejak 1900-an.",
    text: [
      "Kambang Iwak merupakan salah satu jejak peninggalan kompeni Belanda di Palembang. Tidak diketahui persis nama taman ini di zaman Belanda, tetapi yang jelas taman ini dibuat pada zaman Belanda untuk warga Belanda yang bermukim di sekitar taman sebagai sarana rekreasi keluarga.",
      "Taman Kambang Iwak merupakan taman kota yang sudah ada sejak tahun 1900-an.",
    ],
    lokasi: "Jl. Tasik",
  },
  "hutan-wisata-punti-kayu": {
    name: "Taman Wisata Alam Punti Kayu",
    tagline: "Hutan wisata untuk wisata alam, rekreasi, dan berkemah.",
    lokasi: "Jl. Kol H. Burlian",
  },
};

export const bookletDetails: Record<string, Partial<Destination>> = Object.fromEntries(
  Object.entries(entries).map(([slug, e]) => {
    const photo = e.photo !== false ? `/img/bk/${slug}.jpg` : undefined;
    const detail: Partial<Destination> = {
      tagline: e.tagline,
      facts: [{ label: "Lokasi", value: e.lokasi }, ...(e.extra ?? [])],
      sourceNote: BOOKLET_SOURCE,
    };
    if (e.text?.length) detail.sections = [{ title: e.title ?? "Tentang", body: e.text }];
    if (photo) {
      detail.image = photo;
      detail.gallery = [{ src: photo, alt: e.name }];
    }
    return [slug, detail];
  }),
);
