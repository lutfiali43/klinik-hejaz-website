import type { LucideIcon } from 'lucide-react'
import {
  Bone,
  Spline,
  FlaskConical,
  Scale,
  Baby,
  Ear,
  Wind,
  Bandage,
  ScanLine,
  Brain,
  HeartPulse,
  Sparkles,
} from 'lucide-react'

export type Branch = {
  slug: string
  name: string
  shortName: string
  address: string
  phone: string
  phoneRaw: string
  whatsapp: string
  hours: string
  doctor: string
  mapEmbed: string
  googleMapsUrl: string
  geo: { latitude: number; longitude: number }
  // Hyper-local SEO fields
  locality: string
  district: string
  postcode: string
  metaTitle: string
  metaDescription: string
  heroIntro: string
  localContent: string[]
  areasServed: string[]
  landmarks: string[]
  whyLocal: { title: string; description: string }[]
  directions: string
  localFaqs: FaqItem[]
  gallery: { src: string; alt: string }[]
}

export type FaqItem = {
  question: string
  answer: string
}

export type Treatment = {
  slug: string
  title: string
  shortTitle: string
  category: 'Tulang & Sendi' | 'Kesihatan Am' | 'Keluarga'
  hero: boolean
  icon: LucideIcon
  tagline: string
  description: string
  longDescription: string
  benefits: string[]
  symptoms: string[]
  faqs: FaqItem[]
  cardBg?: string
}

export const SITE = {
  name: 'Klinik Nurani',
  tagline: 'Penjagaan Kesihatan Yang Anda Boleh Percaya',
  description:
    'Klinik Nurani menawarkan rawatan profesional untuk sakit lutut, sendi, belakang, gout dan banyak lagi di Sabak Bernam dan Sungai Buloh.',
  email: 'info@kliniknurani.com',
  url: 'https://kliniknurani.com',
}

export const branches: Branch[] = [
  {
    slug: 'sabak-bernam',
    name: 'Klinik Nurani Sabak Bernam',
    shortName: 'Sabak Bernam',
    address:
      'NO 11 (Ground Floor) PT.2539, 1, Jalan Raja Chulan, Pekan Sabak Bernam, 45200 Sabak Bernam, Selangor',
    phone: '014-933 2908',
    phoneRaw: '+60149332908',
    whatsapp:
      'https://wa.me/60149332908?text=Hi%20Klinik%20Nurani%20Sabak%20Bernam,%20saya%20nak%20tanya%20tentang%20rawatan...',
    hours: 'Setiap hari: 9:00 pagi - 6:00 petang (Ahad tutup)',
    doctor: 'Dr. Ahmad Adib Zainuddin',
    mapEmbed:
      'https://www.google.com/maps?q=Klinik%20Nurani%20Sabak%20Bernam&output=embed',
    googleMapsUrl: 'https://maps.app.goo.gl/v7ViJGhuVVyund4E9',
    geo: { latitude: 3.7688006, longitude: 100.9831181 },
    locality: 'Sabak Bernam',
    district: 'Daerah Sabak Bernam',
    postcode: '45200',
    metaTitle:
      'Klinik Nurani Sabak Bernam | Rawatan Lutut, Sendi & Gout',
    metaDescription:
      'Klinik Nurani Sabak Bernam di Jalan Raja Chulan menawarkan rawatan sakit lutut, sendi, gout dan saraf untuk penduduk Sabak Bernam, Sungai Besar dan sekitarnya. Walk-in & WhatsApp tersedia.',
    heroIntro:
      'Klinik keluarga di tengah Pekan Sabak Bernam yang pakar dalam rawatan sakit lutut, sendi dan saraf untuk komuniti Sabak Bernam dan kawasan persisiran pantai.',
    localContent: [
      'Terletak strategik di Jalan Raja Chulan, tepat di tengah Pekan Sabak Bernam, Klinik Nurani memudahkan penduduk daerah Sabak Bernam mendapatkan rawatan tulang, sendi dan saraf tanpa perlu jauh ke bandar besar. Ramai pesakit kami datang dari kalangan petani, penoreh getah dan nelayan yang kerap mengalami sakit lutut dan sakit belakang akibat kerja berat harian.',
      'Sebagai klinik tempatan yang memahami gaya hidup masyarakat luar bandar, kami menyediakan rawatan suntikan sendi, pengurusan gout dan fisioterapi yang disesuaikan dengan keperluan penduduk Sabak Bernam, Sungai Besar dan Sungai Air Tawar. Kami juga menawarkan perkhidmatan lawatan ke rumah untuk warga emas di kawasan kampung sekitar yang sukar bergerak.',
    ],
    areasServed: [
      'Pekan Sabak Bernam',
      'Sungai Besar',
      'Sungai Air Tawar',
      'Sekinchan',
      'Parit Baru',
      'Bagan Terap',
      'Sungai Panjang',
    ],
    landmarks: [
      'Balai Bomba Sabak Bernam',
      'Kolej Komuniti Sabak Bernam',
      'Masjid Jamek Daerah Sabak Bernam',
    ],
    whyLocal: [
      {
        title: 'Pakar Sakit Lutut Penduduk Luar Bandar',
        description:
          'Kami memahami sakit lutut dan sendi yang dialami petani dan pekerja ladang di Sabak Bernam, dengan rawatan yang praktikal dan berpatutan.',
      },
      {
        title: 'Mudah Dikunjungi',
        description:
          'Lokasi di tengah pekan dengan ruang letak kereta yang mudah, sesuai untuk pesakit warga emas dari seluruh daerah Sabak Bernam.',
      },
      {
        title: 'Lawatan Ke Rumah Tempatan',
        description:
          'Perkhidmatan doktor ke rumah meliputi kampung-kampung sekitar Sabak Bernam untuk pesakit terlantar dan warga emas.',
      },
    ],
    directions:
      'Dari Lebuhraya Persisiran Pantai (Jalan Sabak Bernam), masuk ke Pekan Sabak Bernam dan menuju Jalan Raja Chulan. Klinik berada di tingkat bawah, berhampiran kawasan pekan utama.',
    localFaqs: [
      {
        question:
          'Adakah Klinik Nurani Sabak Bernam menerima pesakit walk-in?',
        answer:
          'Ya, penduduk Sabak Bernam dan kawasan sekitar boleh terus berkunjung (walk-in). Namun kami galakkan WhatsApp dahulu ke 014-933 2908 untuk menempah slot dan mengurangkan masa menunggu.',
      },
      {
        question:
          'Kawasan mana yang dilindungi perkhidmatan lawatan ke rumah dari cawangan Sabak Bernam?',
        answer:
          'Kami menyediakan lawatan ke rumah di sekitar Pekan Sabak Bernam, Sungai Besar, Sungai Air Tawar dan kampung-kampung berdekatan. Hubungi kami untuk mengesahkan liputan kawasan anda.',
      },
      {
        question: 'Adakah klinik ini sesuai untuk rawatan sakit lutut warga emas?',
        answer:
          'Sangat sesuai. Cawangan Sabak Bernam kerap merawat sakit lutut dan sendi warga emas dengan suntikan sendi, fisioterapi dan pelan pemulihan yang lembut serta berkesan.',
      },
    ],
    gallery: [
      {
        src: '/galeri/klinik-nurani-sabak-bernam-fasad-kedai.jpeg',
        alt: 'Fasad bangunan Klinik Nurani Sabak Bernam dengan papan tanda biru',
      },
      {
        src: '/galeri/klinik-nurani-sabak-bernam-pintu-masuk.jpeg',
        alt: 'Pintu masuk kaca Klinik Nurani Sabak Bernam yang sedang dibuka',
      },
      {
        src: '/galeri/klinik-nurani-sabak-bernam-kaunter-dispensari.jpeg',
        alt: 'Kaunter dispensari dan farmasi di Klinik Nurani Sabak Bernam',
      },
      {
        src: '/galeri/klinik-nurani-sabak-bernam-koridor-menunggu.jpeg',
        alt: 'Koridor dan ruang menunggu berlantai marmar di Klinik Nurani Sabak Bernam',
      },
      {
        src: '/galeri/klinik-nurani-sabak-bernam-bilik-rawatan.jpeg',
        alt: 'Bilik rawatan dengan katil pemeriksaan di Klinik Nurani Sabak Bernam',
      },
      {
        src: '/galeri/klinik-nurani-sabak-bernam-bilik-ultrasound.jpeg',
        alt: 'Bilik pemeriksaan dengan mesin ultrasound di Klinik Nurani Sabak Bernam',
      },
    ],
  },
  {
    slug: 'sungai-buloh',
    name: 'Klinik Nurani Sungai Buloh',
    shortName: 'Sungai Buloh',
    address:
      '58, Jalan BRP 1/2, Bukit Rahman Putra, 47000 Sungai Buloh, Selangor',
    phone: '014-288 4034',
    phoneRaw: '+60142884034',
    whatsapp:
      'https://wa.me/60142884034?text=Hi%20Klinik%20Nurani%20Sungai%20Buloh,%20saya%20nak%20tanya%20tentang%20rawatan...',
    hours: 'Setiap hari: 9:00 pagi - 6:00 petang (Ahad tutup)',
    doctor: 'Dr. Noor Aisyah Shahrin',
    mapEmbed:
      'https://www.google.com/maps?q=Klinik%20Nurani%20Sungai%20Buloh&output=embed',
    googleMapsUrl: 'https://maps.app.goo.gl/jGoCRJ535nheN48C6',
    geo: { latitude: 3.2115139, longitude: 101.5620263 },
    locality: 'Sungai Buloh',
    district: 'Bukit Rahman Putra',
    postcode: '47000',
    metaTitle:
      'Klinik Nurani Sungai Buloh | Rawatan Lutut, Sendi & Gout',
    metaDescription:
      'Klinik Nurani di Bukit Rahman Putra, Sungai Buloh menawarkan rawatan sakit lutut, sendi, gout dan saraf untuk penduduk Sungai Buloh, Kota Damansara dan Kepong. Walk-in & WhatsApp tersedia.',
    heroIntro:
      'Klinik moden di Bukit Rahman Putra yang pakar dalam rawatan sakit lutut, sendi dan saraf untuk komuniti Sungai Buloh dan kawasan Lembah Klang utara.',
    localContent: [
      'Terletak di 58, Jalan BRP 1/2, Bukit Rahman Putra, Klinik Nurani Sungai Buloh berada di lokasi yang mudah diakses oleh penduduk Sungai Buloh, Kota Damansara, Kepong dan Rawang. Kawasan ini dipenuhi keluarga muda dan golongan profesional yang sering mengalami sakit belakang dan sakit lutut akibat gaya hidup duduk lama dan kerja pejabat.',
      'Sebagai klinik tempatan di pinggir Lembah Klang, kami menyediakan rawatan sakit sendi, pembetulan postur, program berat badan dan rawatan saraf yang disesuaikan dengan gaya hidup bandar. Lokasi kami di Bukit Rahman Putra menjadikannya pilihan mudah untuk penduduk sekitar yang mahukan penjagaan kesihatan tanpa kesesakan hospital besar.',
    ],
    areasServed: [
      'Bukit Rahman Putra',
      'Sungai Buloh',
      'Kota Damansara',
      'Kepong',
      'Rawang',
      'Saujana Utama',
      'Kundang',
    ],
    landmarks: [
      'Petron Bukit Rahman Putra',
      'Hong Leong Bank Bukit Rahman Putra',
    ],
    whyLocal: [
      {
        title: 'Pakar Sakit Belakang Golongan Profesional',
        description:
          'Kami memahami sakit belakang dan sakit lutut akibat kerja pejabat dan gaya hidup bandar di kawasan Sungai Buloh dan Kota Damansara.',
      },
      {
        title: 'Lokasi Strategik Lembah Klang',
        description:
          'Mudah dihubungi dari LATAR, Guthrie Corridor dan Kepong, sesuai untuk keluarga sibuk yang mahukan rawatan pantas.',
      },
      {
        title: 'Rawatan Keluarga Moden',
        description:
          'Dari program berat badan hingga rawatan ibu dan anak, kami melayani keperluan keluarga muda di Bukit Rahman Putra.',
      },
    ],
    directions:
      'Dari Lebuhraya LATAR atau Guthrie Corridor, keluar ke arah Sungai Buloh dan menuju Bukit Rahman Putra. Klinik berada di Jalan BRP 1/2, berhampiran kawasan kedai utama Bukit Rahman Putra.',
    localFaqs: [
      {
        question: 'Adakah Klinik Nurani Sungai Buloh sesuai untuk rawatan sakit belakang?',
        answer:
          'Ya, cawangan Sungai Buloh kerap merawat sakit belakang dan postur untuk golongan profesional dan keluarga muda di Bukit Rahman Putra, Kota Damansara dan sekitarnya.',
      },
      {
        question: 'Bolehkah saya membuat temujanji melalui WhatsApp?',
        answer:
          'Sudah tentu. Hubungi WhatsApp cawangan Sungai Buloh di 014-288 4034 untuk menempah slot dan mengelakkan masa menunggu yang lama.',
      },
      {
        question: 'Kawasan mana yang dekat dengan cawangan Sungai Buloh?',
        answer:
          'Cawangan ini mudah diakses oleh penduduk Bukit Rahman Putra, Sungai Buloh, Kota Damansara, Kepong, Rawang dan Saujana Utama.',
      },
    ],
    gallery: [
      {
        src: '/galeri/klinik-nurani-sungai-buloh-fasad-kedai.jpeg',
        alt: 'Fasad bangunan Klinik Nurani Sungai Buloh dengan papan tanda besar',
      },
      {
        src: '/galeri/klinik-nurani-sungai-buloh-pintu-masuk.jpeg',
        alt: 'Pintu masuk Klinik Nurani Sungai Buloh dengan banner rawatan',
      },
      {
        src: '/galeri/klinik-nurani-sungai-buloh-ruang-menunggu.jpeg',
        alt: 'Ruang menunggu dengan bangku dan banner di Klinik Nurani Sungai Buloh',
      },
      {
        src: '/galeri/klinik-nurani-sungai-buloh-koridor-rawatan.jpeg',
        alt: 'Koridor menuju bilik rawatan di Klinik Nurani Sungai Buloh',
      },
      {
        src: '/galeri/klinik-nurani-sungai-buloh-kaunter-pendaftaran.jpeg',
        alt: 'Kaunter pendaftaran dan dispensari di Klinik Nurani Sungai Buloh',
      },
      {
        src: '/galeri/klinik-nurani-sungai-buloh-bilik-rawatan.jpeg',
        alt: 'Bilik konsultasi dan pemeriksaan di Klinik Nurani Sungai Buloh',
      },
    ],
  },
]

export const treatments: Treatment[] = [
  {
    slug: 'rawatan-sakit-lutut',
    title: 'Rawatan Lutut & Sendi',
    shortTitle: 'Lutut & Sendi',
    category: 'Tulang & Sendi',
    hero: true,
    icon: Bone,
    tagline: 'Kembali bergerak bebas tanpa sakit lutut & sendi',
    description:
      'Penilaian menyeluruh, suntikan sendi dan panduan fisioterapi untuk meredakan sakit lutut serta sendi akut dan kronik.',
    longDescription:
      'Sakit lutut dan sendi boleh menjejaskan aktiviti harian anda dan menjadi tanda osteoartritis, arthritis, gout atau keradangan sendi. Di Klinik Nurani, kami menyediakan penilaian klinikal terperinci untuk mengenal pasti punca sebenar — sama ada disebabkan osteoartritis, kecederaan ligamen, atau keradangan sendi. Rawatan kami merangkumi suntikan sendi (joint injection), rawatan anti-radang, pengurusan ubat dan panduan fisioterapi yang disesuaikan untuk memulihkan fungsi sendi dan membantu anda kembali bergerak dengan selesa.',
    benefits: [
      'Penilaian klinikal punca sakit lutut & sendi',
      'Suntikan sendi untuk kelegaan segera',
      'Rawatan anti-radang yang berkesan',
      'Panduan fisioterapi peribadi',
      'Pelan pemulihan jangka panjang',
    ],
    symptoms: [
      'Sakit ketika berjalan atau menaiki tangga',
      'Lutut atau sendi bengkak dan kaku pada waktu pagi',
      'Bunyi geseran atau kemerahan pada sendi',
    ],
    faqs: [
      {
        question: 'Adakah suntikan sendi menyakitkan?',
        answer:
          'Prosedur suntikan sendi dilakukan dengan bius setempat dan hanya mengambil masa beberapa minit. Kebanyakan pesakit hanya merasa sedikit tekanan dan kelegaan dirasai dalam beberapa hari.',
      },
      {
        question: 'Apakah perbezaan antara arthritis dan gout?',
        answer:
          'Gout disebabkan oleh penumpukan asid urik manakala arthritis merangkumi pelbagai jenis keradangan sendi. Doktor kami akan menjalankan pemeriksaan untuk menentukan punca tepat dan rawatan yang sesuai.',
      },
      {
        question: 'Berapa lama untuk pulih daripada sakit lutut & sendi?',
        answer:
          'Tempoh pemulihan bergantung kepada punca dan tahap keterukan. Ramai pesakit menunjukkan peningkatan ketara dalam masa 2 hingga 6 minggu dengan gabungan rawatan dan fisioterapi.',
      },
      {
        question: 'Perlukah saya membuat temujanji terlebih dahulu?',
        answer:
          'Anda boleh terus berkunjung (walk-in), namun kami galakkan menghubungi kami melalui WhatsApp untuk menempah slot dan mengurangkan masa menunggu.',
      },
    ],
    cardBg: '/card-bg/sakit-lutut.png',
  },
  {
    slug: 'program-berat-badan',
    cardBg: '/card-bg/berat-badan.png',
    title: 'Program Penurunan Berat Badan',
    shortTitle: 'Berat Badan',
    category: 'Kesihatan Am',
    hero: true,
    icon: Scale,
    tagline: 'Turun berat dengan selamat dan terkawal',
    description:
      'Program penurunan berat badan perubatan yang dipantau untuk hasil yang sihat dan mampan.',
    longDescription:
      'Penurunan berat badan yang sihat memerlukan pendekatan perubatan yang terancang. Klinik Nurani menawarkan program penurunan berat badan yang dipantau oleh doktor, merangkumi penilaian kesihatan, sasaran berat badan realistik, panduan pemakanan dan pemantauan berkala untuk memastikan anda mencapai matlamat dengan selamat.',
    benefits: [
      'Penilaian kesihatan dan BMI menyeluruh',
      'Pelan pemakanan yang disesuaikan',
      'Pemantauan kemajuan berkala',
      'Sokongan motivasi berterusan',
      'Pemeriksaan darah dan saringan penyakit kronik',
    ],
    symptoms: [
      'Berat badan berlebihan atau obesiti',
      'Risiko kencing manis atau darah tinggi',
      'Kesukaran menurunkan berat sendiri',
    ],
    faqs: [
      {
        question: 'Adakah program ini selamat?',
        answer:
          'Ya, program kami dipantau sepenuhnya oleh doktor dan disesuaikan dengan keadaan kesihatan individu anda untuk memastikan keselamatan.',
      },
      {
        question: 'Berapa lama untuk nampak hasil?',
        answer:
          'Hasil berbeza mengikut individu, namun kebanyakan peserta mula nampak perubahan positif dalam masa beberapa minggu dengan komitmen yang konsisten.',
      },
    ],
  },
  {
    slug: 'kutil-dan-ketuat',
    cardBg: '/card-bg/kutil-ketuat.png',
    title: 'Kutil & Ketulan',
    shortTitle: 'Kutil & Ketulan',
    category: 'Kesihatan Am',
    hero: true,
    icon: ScanLine,
    tagline: 'Penyelesaian untuk kutil dan ketulan',
    description:
      'Pembedahan kecil untuk menghilangkan kutil, ketulan dan tanda kulit dengan selamat.',
    longDescription:
      'Kutil dan ketulan bukan sahaja menjejaskan penampilan tetapi juga boleh menyebabkan ketidakselesaan. Klinik Nurani menawarkan penyelesaian berkesan melalui pembedahan kecil (minor surgery) untuk menghilangkan kutil, ketulan dan tanda kulit dengan selamat dan kemas, dilakukan oleh doktor berpengalaman.',
    benefits: [
      'Pembedahan kecil yang kemas',
      'Penilaian kutil, ketulan dan tanda kulit',
      'Prosedur cepat dengan bius tempatan',
      'Risiko parut yang minimum',
    ],
    symptoms: [
      'Ketumbuhan kulit yang mengganggu',
      'Kutil pada tangan atau kaki',
      'Ketulan atau tanda kulit (skin tags) yang membesar',
    ],
    faqs: [
      {
        question: 'Adakah prosedur ini menyakitkan?',
        answer:
          'Prosedur dilakukan dengan bius tempatan untuk meminimumkan kesakitan. Anda hanya akan merasa sedikit tidak selesa semasa prosedur.',
      },
      {
        question: 'Adakah ia akan berulang?',
        answer:
          'Selepas rawatan yang betul, kebanyakan kutil dan ketulan tidak berulang. Doktor akan memberi nasihat penjagaan selepas prosedur.',
      },
    ],
  },
  {
    slug: 'luka-diabetes',
    cardBg: '/card-bg/luka-diabetes.png',
    title: 'Luka Diabetes',
    shortTitle: 'Luka Diabetes',
    category: 'Kesihatan Am',
    hero: true,
    icon: Bandage,
    tagline: 'Penjagaan luka kronik yang profesional',
    description:
      'Penjagaan ulser kronik, pembalut perubatan dan kawalan jangkitan untuk pesakit diabetes.',
    longDescription:
      'Luka pada pesakit diabetes memerlukan penjagaan khusus kerana ia lambat sembuh dan berisiko jangkitan. Klinik Nurani menyediakan penjagaan luka diabetes profesional termasuk pembersihan luka, pembalut perubatan, kawalan jangkitan dan pemantauan berkala untuk mempercepatkan penyembuhan dan mengelakkan komplikasi.',
    benefits: [
      'Pembersihan dan penjagaan luka profesional',
      'Pembalut perubatan berkualiti',
      'Kawalan dan pencegahan jangkitan',
      'Pemantauan penyembuhan berkala',
    ],
    symptoms: [
      'Luka yang lambat sembuh',
      'Ulser pada kaki atau jari',
      'Tanda jangkitan seperti kemerahan dan nanah',
    ],
    faqs: [
      {
        question: 'Mengapa luka diabetes lambat sembuh?',
        answer:
          'Paras gula darah yang tinggi menjejaskan peredaran darah dan sistem imun, menyebabkan luka lambat sembuh dan mudah dijangkiti. Penjagaan profesional sangat penting.',
      },
      {
        question: 'Berapa kerap saya perlu menukar pembalut?',
        answer:
          'Ia bergantung kepada keadaan luka. Doktor kami akan menetapkan jadual penukaran pembalut yang sesuai untuk anda.',
      },
    ],
  },
  {
    slug: 'diabetes-dan-darah-tinggi',
    cardBg: '/card-bg/diabetes-darah-tinggi.png',
    title: 'Diabetes & Darah Tinggi',
    shortTitle: 'Diabetes & Darah Tinggi',
    category: 'Kesihatan Am',
    hero: true,
    icon: HeartPulse,
    tagline: 'Kawal gula darah dan tekanan darah dengan berkesan',
    description:
      'Saringan, rawatan dan pemantauan berterusan untuk kencing manis (diabetes) dan darah tinggi (hipertensi).',
    longDescription:
      'Diabetes dan darah tinggi adalah penyakit kronik yang perlu dikawal dengan teliti bagi mengelakkan komplikasi serius seperti masalah jantung, buah pinggang, mata dan saraf. Klinik Nurani menyediakan saringan gula darah dan tekanan darah, rawatan ubat, panduan pemakanan serta pemantauan berkala untuk membantu anda mengekalkan bacaan yang sihat dan menjalani kehidupan yang lebih selesa.',
    benefits: [
      'Saringan gula darah dan tekanan darah',
      'Rawatan ubat yang disesuaikan',
      'Panduan pemakanan dan gaya hidup sihat',
      'Pemantauan berkala dan susulan berterusan',
    ],
    symptoms: [
      'Kerap dahaga, kerap kencing atau cepat letih',
      'Sakit kepala atau pening berterusan',
      'Bacaan gula darah atau tekanan darah yang tinggi',
    ],
    faqs: [
      {
        question: 'Bolehkah diabetes dan darah tinggi dikawal?',
        answer:
          'Ya. Dengan ubat yang betul, pemakanan seimbang dan pemantauan berkala, kebanyakan pesakit dapat mengekalkan bacaan gula darah dan tekanan darah dalam julat yang sihat.',
      },
      {
        question: 'Adakah saya perlu buat pemeriksaan kerap?',
        answer:
          'Pemeriksaan berkala penting untuk memantau keberkesanan rawatan dan mengelakkan komplikasi. Doktor kami akan menetapkan jadual susulan yang sesuai untuk anda.',
      },
    ],
  },
  {
    slug: 'rawatan-sakit-kulit',
    cardBg: '/card-bg/sakit-kulit.png',
    title: 'Rawatan Sakit Kulit',
    shortTitle: 'Sakit Kulit',
    category: 'Kesihatan Am',
    hero: true,
    icon: Sparkles,
    tagline: 'Kulit sihat, gatal dan ruam terkawal',
    description:
      'Rawatan untuk masalah kulit seperti ekzema, kurap, jangkitan kulat, ruam dan jerawat.',
    longDescription:
      'Masalah kulit seperti ekzema, kurap, jangkitan kulat, ruam, gatal-gatal dan jerawat boleh menjejaskan keyakinan dan keselesaan harian. Klinik Nurani menyediakan penilaian kulit menyeluruh untuk mengenal pasti punca masalah anda dan menawarkan rawatan yang bersesuaian termasuk ubat sapuan, ubat oral dan nasihat penjagaan kulit untuk memulihkan kesihatan kulit anda.',
    benefits: [
      'Penilaian punca masalah kulit',
      'Rawatan ekzema, kurap dan jangkitan kulat',
      'Rawatan ruam, gatal dan jerawat',
      'Nasihat penjagaan kulit harian',
    ],
    symptoms: [
      'Gatal, ruam atau kemerahan pada kulit',
      'Kulit kering, bersisik atau melecet',
      'Jerawat atau jangkitan kulit berulang',
    ],
    faqs: [
      {
        question: 'Adakah masalah kulit saya boleh sembuh sepenuhnya?',
        answer:
          'Kebanyakan masalah kulit boleh dirawat dengan berkesan. Sesetengah keadaan seperti ekzema bersifat kronik tetapi boleh dikawal dengan baik melalui rawatan dan penjagaan yang betul.',
      },
      {
        question: 'Perlukah saya berhenti guna produk kulit sedia ada?',
        answer:
          'Doktor akan menilai produk yang anda gunakan dan menasihatkan sama ada perlu dihentikan atau diganti bagi mengelakkan keadaan menjadi lebih teruk.',
      },
    ],
  },
  {
    slug: 'rawatan-ibu-dan-anak',
    cardBg: '/card-bg/ibu-anak.png',
    title: 'Rawatan Ibu & Anak',
    shortTitle: 'Ibu & Anak',
    category: 'Keluarga',
    hero: false,
    icon: Baby,
    tagline: 'Penjagaan menyeluruh untuk ibu dan si kecil',
    description:
      'Penjagaan kesihatan pediatrik dan penjagaan ibu untuk keluarga yang sihat dan bahagia.',
    longDescription:
      'Kesihatan ibu dan anak adalah keutamaan kami. Klinik Nurani menyediakan pemeriksaan kesihatan kanak-kanak, nasihat pemakanan bayi, serta penjagaan kesihatan ibu sebelum dan selepas bersalin. Doktor kami mesra kanak-kanak dan komited untuk memastikan keluarga anda sentiasa sihat.',
    benefits: [
      'Pemeriksaan tumbesaran kanak-kanak',
      'Nasihat pemakanan ibu dan bayi',
      'Penjagaan kesihatan ibu menyeluruh',
      'Rawatan demam dan selesema kanak-kanak',
    ],
    symptoms: [
      'Demam atau selesema pada anak',
      'Kebimbangan tumbesaran kanak-kanak',
      'Keperluan pemeriksaan kesihatan ibu',
    ],
    faqs: [
      {
        question: 'Bolehkah saya membawa anak untuk pemeriksaan rutin?',
        answer:
          'Sudah tentu. Pemeriksaan kesihatan rutin penting untuk memantau tumbesaran dan perkembangan anak anda.',
      },
      {
        question: 'Adakah klinik mesra kanak-kanak?',
        answer:
          'Ya, doktor dan kakitangan kami berpengalaman merawat kanak-kanak dan memastikan mereka selesa sepanjang pemeriksaan.',
      },
    ],
  },
  {
    slug: 'cuci-telinga',
    cardBg: '/card-bg/sakit-telinga.png',
    title: 'Cuci Telinga',
    shortTitle: 'Cuci Telinga',
    category: 'Kesihatan Am',
    hero: false,
    icon: Ear,
    tagline: 'Pembersihan tahi telinga yang pantas dan selamat',
    description:
      'Pengeluaran tahi telinga yang tersumbat secara pantas dan tanpa sakit (ear irrigation).',
    longDescription:
      'Tahi telinga yang tersumbat boleh menyebabkan pendengaran berkurangan, rasa tidak selesa dan jangkitan. Klinik Nurani menawarkan prosedur cuci telinga (ear irrigation) yang selamat, pantas dan tanpa sakit untuk mengeluarkan tahi telinga yang tersumbat dan memulihkan pendengaran anda.',
    benefits: [
      'Prosedur pantas dan tanpa sakit',
      'Memulihkan pendengaran serta-merta',
      'Dilakukan oleh kakitangan terlatih',
      'Mengurangkan risiko jangkitan',
    ],
    symptoms: [
      'Pendengaran berkurangan atau berdengung',
      'Rasa penuh atau tersumbat di telinga',
      'Gatal atau tidak selesa pada telinga',
    ],
    faqs: [
      {
        question: 'Adakah cuci telinga menyakitkan?',
        answer:
          'Tidak, prosedur ini selamat dan tanpa sakit. Anda hanya akan merasa sensasi air suam dalam telinga semasa pembersihan.',
      },
      {
        question: 'Berapa kerap saya perlu cuci telinga?',
        answer:
          'Ia bergantung kepada individu. Sesetengah orang mungkin memerlukannya beberapa kali setahun, manakala yang lain jarang memerlukannya.',
      },
    ],
  },
  {
    slug: 'nebulizer-dan-asthma',
    cardBg: '/card-bg/nebulizer-sedut-kahak.png',
    title: 'Nebulizer & Asthma',
    shortTitle: 'Asthma',
    category: 'Kesihatan Am',
    hero: false,
    icon: Wind,
    tagline: 'Pengurusan asma kecemasan dan jangka panjang',
    description:
      'Terapi nebulizer untuk kecemasan asma dan pengurusan jangka panjang untuk pernafasan lega.',
    longDescription:
      'Asma memerlukan pengurusan yang teliti untuk mengelakkan serangan yang berbahaya. Klinik Nurani menyediakan terapi nebulizer untuk melegakan serangan asma akut serta pelan pengurusan jangka panjang termasuk ubat pencegah dan pendidikan pesakit untuk mengawal asma dengan berkesan.',
    benefits: [
      'Terapi nebulizer untuk kelegaan segera',
      'Pelan pengurusan asma jangka panjang',
      'Pendidikan pengenalan pencetus asma',
      'Pemantauan fungsi pernafasan',
    ],
    symptoms: [
      'Sesak nafas atau berdehit (wheezing)',
      'Batuk berterusan terutama waktu malam',
      'Dada terasa sempit',
    ],
    faqs: [
      {
        question: 'Bilakah saya perlu rawatan nebulizer?',
        answer:
          'Rawatan nebulizer diperlukan semasa serangan asma yang teruk apabila inhaler biasa tidak mencukupi. Datang ke klinik kami untuk kelegaan segera.',
      },
      {
        question: 'Bolehkah asma dikawal sepenuhnya?',
        answer:
          'Asma boleh diurus dengan sangat baik melalui ubat pencegah dan mengelakkan pencetus, membolehkan kebanyakan pesakit menjalani kehidupan normal.',
      },
    ],
  },
  {
    slug: 'rawatan-gout',
    cardBg: '/card-bg/gout.png',
    title: 'Rawatan Gout',
    shortTitle: 'Gout',
    category: 'Tulang & Sendi',
    hero: false,
    icon: FlaskConical,
    tagline: 'Kawal asid urik, hentikan serangan gout',
    description:
      'Kawalan asid urik dan pengurusan serangan gout akut untuk mengelakkan kesakitan berulang.',
    longDescription:
      'Gout berlaku apabila paras asid urik yang tinggi membentuk hablur pada sendi, menyebabkan kesakitan yang amat sangat. Klinik Nurani menawarkan ujian paras asid urik, rawatan untuk serangan akut dan pelan pengurusan jangka panjang termasuk nasihat pemakanan untuk mengelakkan serangan berulang.',
    benefits: [
      'Ujian dan pemantauan paras asid urik',
      'Rawatan pantas untuk serangan akut',
      'Pelan pencegahan jangka panjang',
      'Panduan diet rendah purin',
    ],
    symptoms: [
      'Sakit teruk mengejut pada ibu jari kaki',
      'Sendi bengkak, merah dan panas',
      'Serangan berulang pada waktu malam',
    ],
    faqs: [
      {
        question: 'Makanan apa yang perlu saya elakkan?',
        answer:
          'Makanan tinggi purin seperti jeroan, makanan laut tertentu dan minuman beralkohol perlu dihadkan. Kami akan menyediakan panduan diet peribadi untuk anda.',
      },
      {
        question: 'Adakah gout boleh dikawal sepenuhnya?',
        answer:
          'Ya, dengan ubat yang betul dan perubahan gaya hidup, paras asid urik boleh dikawal dan serangan gout dapat dielakkan.',
      },
    ],
  },
  {
    slug: 'rawatan-saraf',
    cardBg: '/card-bg/sakit-saraf.png',
    title: 'Rawatan Saraf',
    shortTitle: 'Sakit Saraf',
    category: 'Tulang & Sendi',
    hero: false,
    icon: Brain,
    tagline: 'Lega daripada kebas, kesemutan dan sakit saraf',
    description:
      'Penilaian dan rawatan untuk masalah saraf seperti kebas, kesemutan, sakit menjalar dan saraf tersepit.',
    longDescription:
      'Masalah saraf seperti kebas, kesemutan, rasa terbakar atau sakit yang menjalar boleh menjejaskan kualiti hidup dan menjadi tanda masalah yang lebih serius seperti saraf tersepit (sciatica), kerosakan saraf akibat diabetes (neuropati) atau tekanan pada saraf tulang belakang. Di Klinik Nurani, kami menyediakan penilaian klinikal menyeluruh untuk mengenal pasti punca masalah saraf anda dan menawarkan rawatan ubat, pengurusan kesakitan serta panduan pemulihan yang disesuaikan untuk membantu anda kembali berfungsi dengan selesa.',
    benefits: [
      'Penilaian punca kebas dan kesemutan',
      'Rawatan saraf tersepit dan sakit menjalar',
      'Pengurusan neuropati diabetik',
      'Pelan pemulihan dan kawalan kesakitan',
    ],
    symptoms: [
      'Kebas atau kesemutan pada tangan dan kaki',
      'Sakit menjalar dari belakang ke kaki',
      'Rasa terbakar atau lemah pada otot',
    ],
    faqs: [
      {
        question: 'Apakah punca kebas dan kesemutan yang kerap berlaku?',
        answer:
          'Kebas dan kesemutan boleh disebabkan oleh saraf tersepit, neuropati diabetik, kekurangan vitamin atau tekanan pada saraf. Penilaian doktor diperlukan untuk mengenal pasti punca sebenar.',
      },
      {
        question: 'Adakah masalah saraf boleh dirawat tanpa pembedahan?',
        answer:
          'Ya, kebanyakan masalah saraf boleh diuruskan dengan ubat, terapi dan perubahan gaya hidup. Kami akan merujuk anda kepada pakar sekiranya rawatan lanjut diperlukan.',
      },
      {
        question: 'Bilakah saya perlu berjumpa doktor untuk masalah saraf?',
        answer:
          'Jika kebas, kesemutan atau sakit saraf berterusan, semakin teruk atau disertai kelemahan otot, anda dinasihatkan mendapatkan penilaian doktor secepat mungkin.',
      },
    ],
  },
  {
    slug: 'rawatan-sakit-belakang',
    cardBg: '/card-bg/sakit-belakang.png',
    title: 'Rawatan Sakit Belakang',
    shortTitle: 'Sakit Belakang',
    category: 'Tulang & Sendi',
    hero: false,
    icon: Spline,
    tagline: 'Pulihkan postur, hapuskan sakit belakang',
    description:
      'Rawatan sakit belakang, sokongan lumbar dan pembetulan postur untuk kehidupan tanpa kesakitan.',
    longDescription:
      'Sakit belakang adalah salah satu masalah kesihatan paling kerap dan boleh berpunca daripada postur yang salah, ketegangan otot atau masalah saraf tulang belakang. Klinik Nurani menyediakan penilaian postur, rawatan sakit, sokongan lumbar dan latihan pengukuhan otot teras untuk membantu anda menghapuskan sakit belakang dan mencegahnya daripada berulang.',
    benefits: [
      'Penilaian postur dan tulang belakang',
      'Rawatan kesakitan dan ketegangan otot',
      'Latihan pengukuhan otot teras',
      'Panduan ergonomik harian',
    ],
    symptoms: [
      'Sakit belakang bawah yang berterusan',
      'Sakit menjalar ke kaki (sciatica)',
      'Ketegangan otot selepas duduk lama',
    ],
    faqs: [
      {
        question: 'Apakah punca biasa sakit belakang?',
        answer:
          'Punca biasa termasuk postur yang salah, mengangkat berat secara tidak betul, duduk terlalu lama dan ketegangan otot. Doktor kami akan membantu mengenal pasti punca khusus anda.',
      },
      {
        question: 'Perlukah saya buat x-ray?',
        answer:
          'Tidak semua kes memerlukan imbasan. Doktor akan menilai keadaan anda dan mengesyorkan pemeriksaan lanjut hanya jika perlu.',
      },
    ],
  },
]

export const heroTreatments = treatments.filter((t) => t.hero)

export const treatmentCategories = [
  'Semua',
  'Tulang & Sendi',
  'Kesihatan Am',
  'Keluarga',
] as const

export function getTreatment(slug: string) {
  return treatments.find((t) => t.slug === slug)
}

export function getBranch(slug: string) {
  return branches.find((b) => b.slug === slug)
}

// Senarai daerah / kawasan yang dilayani, dikumpulkan mengikut negeri.
// Meliputi Selangor (termasuk Lembah Klang), Kuala Lumpur dan Negeri Sembilan.
export const daerahGroups: { state: string; areas: string[] }[] = [
  {
    state: 'Selangor',
    areas: [
      'Sabak Bernam',
      'Kuala Selangor',
      'Hulu Selangor',
      'Klang',
      'Kuala Langat',
      'Sepang',
      'Petaling Jaya',
      'Shah Alam',
      'Subang Jaya',
      'Puchong',
      'Gombak',
      'Selayang',
      'Rawang',
      'Sungai Buloh',
      'Kota Damansara',
      'Hulu Langat',
      'Kajang',
      'Ampang',
    ],
  },
  {
    state: 'Kuala Lumpur',
    areas: [
      'Kuala Lumpur (Bandar)',
      'Kepong',
      'Cheras',
      'Setapak',
      'Bangsar',
      'Sentul',
      'Wangsa Maju',
      'Titiwangsa',
    ],
  },
  {
    state: 'Negeri Sembilan',
    areas: [
      'Seremban',
      'Port Dickson',
      'Nilai',
      'Rembau',
      'Jelebu',
      'Kuala Pilah',
      'Tampin',
    ],
  },
]
