import Himawari_9_IR_Enhanced from "../Components";

export const citraSatelitList = [
  {
    key: "himawari_9_ir_enhanced",
    image:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Indonesia.png?id=73230rn8jghhtr3962mrhsm",
    title: "Himawari-9 IR Enhanced",
    description:
      "Pada produk Himawari-9 EH menunjukkan suhu puncak awan yang didapat dari pengamatan radiasi pada panjang gelombang 10.4 mikrometer yang kemudian diklasifikasi dengan pewarnaan tertentu, dimana warna hitam atau biru menunjukkan tidak terdapat pembentukan awan yang banyak (cerah), sedangkan semakin dingin suhu puncak awan, dimana warna mendekati jingga hingga merah, menunjukan pertumbuhan awan yang signifikan dan berpotensi terbentuknya awan Cumulonimbus.",
      content: <Himawari_9_IR_Enhanced />,
  },
  {
    key: "himawari-9-natural-color",
    image:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_NC_Indonesia.png?id=45679gvovctcn202xbczs30",
    title: "Himawari-9 Natural Color",
    description:
      "Produk Himawari-9 NC menggunakan metode RGB (Red Green Blue) dimana beberapa band dari data satelit digabungkan sehingga diperoleh identifikasi warna yang lebih jelas. Produk ini digunakan untuk mengamati proses konvektifitas, ketebalan awan, serta mikrofisis awan. Produk ini menggunakan band visible yang dipancarkan oleh matahari, sehingga produk ini hanya tersedia pada saat pagi hingga sore hari.",
  },
  {
    key: "himawari-9-water-vapor-enhanced",
    image:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_WE_Indonesia.png?id=69646n8ol26v8p21qpnl5e3",
    title: "Himawari-9 Water Vapor Enhanced",
    description:
      "Produk Himawari-9 WE menampilkan kondisi kelembaban atmosfer pada lapisan menengah hingga atas yang didapat dari radiasi infrared pada panjang gelombang 6.2 mikrometer. Produk ini dapat menunjukkan kondisi kelembapan udara sebagai bahan pembentukan awan, dimana wilayah yang berwarna coklat menunjukkan kondisi kering dan berwarna biru menunjukkan kondisi basah. Produk ini digunakan untuk mengamati pergerakan massa udara kering dari benua Australia pada musim kemarau.",
  },
  {
    key: "himawari-9-rainfall-potential",
    image:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_RP_Indonesia.png?id=76373rzdzpz2uavv2z5aqlh",
    title: "Himawari-9 Rainfall Potential",
    description:
      "Produk turunan Himawari-9 Potential Rainfall adalah produk yang dapat digunakan untuk mengestimasi potensi curah hujan, yang disajikan berdasarkan kategori ringan, sedang, lebat, hingga sangat lebat, dengan menggunakan hubungan antara suhu puncak awan dengan curah hujan yang berpotensi dihasilkan.",
  },
  {
    key: "himawari-9-rdca",
    image:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_RD_Indonesia.png?id=247277qrg5001vmx60vjdcc",
    title: "Himawari-9 RDCA",
    description:
      "Produk ini adalah hasil kolaborasi penelitian dengan JMA untuk menentukan awan Cumulus yang berpotensi menjadi Cumulonimbus (tanda positif merah) dalam 1 jam ke depan.",
  },
  {
    key: "himawari-9-cloud-type",
    image:
      "https://inderaja.bmkg.go.id/IMAGE/HCAI/CLC/HCAI_CLC_Indonesia.png?id=009153ezcumsot3q974gneh",
    title: "Himawari-9 Cloud Type",
    description:
      "Produk ini adalah hasil kolaborasi penelitian dengan JMA untuk mengidentifikasi secara objektif jenis awan yang ditangkap oleh band infrared dan visibel dari satelit Himawari. Produk ini diupdate setiap 1 jam.",
  },
  {
    key: "himawari-9-cloud-top-height",
    image:
      "https://inderaja.bmkg.go.id/IMAGE/HCAI/HTC/HCAI_HTC_Indonesia.png?id=52455kkhqyjlnq1xn935040",
    title: "Himawari-9 Cloud Top Height",
    description:
      "Produk ini adalah hasil kolaborasi penelitian dengan JMA untuk mengidentifikasi secara objektif tinggi puncak awan yang ditangkap oleh band infrared dari satelit Himawari. Produk ini diupdate setiap 1 jam.",
  },
  {
    key: "himawari-9-convective-cloud",
    image:
      "https://inderaja.bmkg.go.id/IMAGE/HCAI/CVC/HCAI_CVC_Indonesia.png?id=85475sxgyxxnuzuue4b5xp6",
    title: "Himawari-9 Convective Cloud",
    description:
      "Produk ini adalah hasil kolaborasi penelitian dengan JMA untuk mengidentifikasi secara objektif jenis awan konvektif yang ditangkap oleh band infrared dan visibel dari satelit Himawari. Produk ini diupdate setiap 1 jam.",
  },
  {
    key: "himawari-9-geohotspot",
    image:
      "https://inderaja.bmkg.go.id/IMAGE/GEOHOTSPOT/H08_GH_Asean.png?id=108405dtnfj9k4bq1afs19z",
    title: "Himawari-9 Geohotspot",
    description:
      "Potensi terjadinya kebakaran hutan dan lahan dapat teramati dengan citra satelit Himawari-9 dengan menggunakan data suhu kecerahan kanal infrared untuk filtering awan, serta menentukan anomali suhu panas yang menunjukkan potensi terjadi kebakaran hutan (titik merah).Selain itu ditampilkan juga citra RGB pada kanal visibel dan near infrared untuk mendeteksi sebaran asap (warna coklat) untuk lebih memastikan didaerah tersebut terjadi kebakaran.",
  },
  {
    key: "polar-hotspot",
    image:
      "https://inderaja.bmkg.go.id/IMAGE/HOTSPOT/Hotspot_Indonesia.png?id=52326klcg1vzbf0xur2ki9k",
    title: "Polar Hotspot",
    description:
      "Deteksi Hotspot (titik api) menggunakan sensor VIIRS dan MODIS pada satelit polar (NOAA20, S-NPP, TERRA dan AQUA) memberikan gambaran lokasi wilayah yang mengalami kebakaran hutan. Satelit akan mendeteksi anomali suhu panas dibandingkan dengan sekitarnya. Observasi ini dilakukan pada siang dan malam hari untuk masing-masing satelit. Pada daerah yang tertutup awan atau blank zone, hotspot di wilayah tersebut tidak dapat terdeteksi.",
  },
  {
    key: "gsmap-rainrate-hourly",
    image:
      "https://inderaja.bmkg.go.id/IMAGE/GSMAP/Hourly_Prec.png?id=55959jx0qbeav5hhyafst9p",
    title: "GSMaP Rainrate Hourly",
    description:
      "Estimasi curah hujan dapat diperoleh dengan memanfaatkan satelit geostasioner (sensor Infrared) dan satelit polar (sensor microwave). Produk ini menunjukan estimasi curah hujan (mm/jam).",
  },
];

export const locations = [
  {
    key: "indonesia",
    label: "Indonesia",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Indonesia.png?id=54478jshv60s7p6392skt9p",
  },
  {
    key: "region-1",
    label: "Region 1",
    himawari_9_ir_enhanced: "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Region1.png?id=0740713g9389dec0be71lp0",
  },
  {
    key: "region-2",
    label: "Region 2",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Region2.png?id=60220lebfel8feyf824sp22",
  },
  {
    key: "region-3",
    label: "Region 3",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Region3.png?id=46710h1pbgfqqv6jhgcpc2b",
  },
  {
    key: "region-4",
    label: "Region 4",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Region4.png?id=130074o263uluiepeh4zqb3",
  },
  {
    key: "region-5",
    label: "Region 5",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Region5.png?id=38896d6v50no9eh7ti0bvht",
  },
  {
    key: "aceh",
    label: "Aceh",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Aceh.png?id=31221bibfju8uq652oxaqiy",
  },
  {
    key: "sumatera-utara",
    label: "Sumatera Utara",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Sumut.png?id=83359uncpbmq13fdb2e2ld7",
  },
  {
    key: "sumatera-barat",
    label: "Sumatera Barat",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Sumbar.png?id=0646730hu5esom7nk23xd3z",
  },
  {
    key: "riau",
    label: "Riau",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Riau.png?id=254899vg2bjamujspuuz0nr",
  },
  {
    key: "kepulauan-riau",
    label: "Kepulauan Riau",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Kepri.png?id=26942azymnf1381jyqlma4f",
  },
  {
    key: "jambi",
    label: "Jambi",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Jambi.png?id=108425cull2obyu329ijsv3",
  },
  {
    key: "bangka-belitung",
    label: "Bangka Belitung",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Babel.png?id=121626k5tmtvdz3db7i00ij",
  },
  {
    key: "sumatera-selatan",
    label: "Sumatera Selatan",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Sumsel.png?id=031143o7cuqcg7qdjtrvck9",
  },
  {
    key: "bengkulu",
    label: "Bengkulu",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Bengkulu.png?id=72085pl31vev58grln2mgbu",
  },
  {
    key: "lampung",
    label: "Lampung",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Lampung.png?id=1861566nbzdl870ym2ib41k",
  },
  {
    key: "kalimantan-barat",
    label: "Kalimantan Barat",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Kalbar.png?id=85343tvelodxa4zvanzb36x",
  },
  {
    key: "kalimantan-tengah",
    label: "Kalimantan Tengah",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Kalteng.png?id=30776cepv1xnu24e0pbmxda",
  },
  {
    key: "kalimantan-timur",
    label: "Kalimantan Timur",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Kaltim.png?id=63113om5bpvmdaaf21x76u6",
  },
  {
    key: "kalimantan-utara",
    label: "Kalimantan Utara",
    himawari_9_ir_enhanced: null,
  },
  {
    key: "banten",
    label: "Banten",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Banten.png?id=1880055v9g4qmkcksak29ls",
  },
  {
    key: "jakarta",
    label: "Jakarta",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Jakarta.png?id=161035y69odvesx1t1un38q",
  },
  {
    key: "jawa-barat",
    label: "Jawa Barat",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Jabar.png?id=23497aog44bj3njmq8dgbg6",
  },
  {
    key: "jawa-timur",
    label: "Jawa Timur",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Jatim.png?id=51782igs0m8gb6eog9q2g8c",
  },
  {
    key: "yogyakarta",
    label: "Yogyakarta",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Yogyakarta.png?id=32769bktuakjn5i8ahva02f",
  },
  {
    key: "bali",
    label: "Bali",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Bali.png?id=33418dphc7k8m3y477g6cy1",
  },
  {
    key: "ntb",
    label: "Nusa Tenggara Barat",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_NTB.png?id=59296l984zxzvxoamzylkui",
  },
  {
    key: "ntt",
    label: "Nusa Tenggara Tenggara",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_NTT.png?id=97248x48l6g6zk18qr4cgja",
  },
  {
    key: "sulawesi-utara",
    label: "Sulawesi Utara",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Sulut.png?id=001652f7tyt0ps21hz63g1h",
  },
  {
    key: "gorontalo",
    label: "Gorontalo",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Gorontalo.png?id=55027ix1f5dy4qm6nzt8spb",
  },
  {
    key: "sulawesi-tengah",
    label: "Sulawesi Tengah",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Sulteng.png?id=126775jox4xr57ras15roig",
  },
  {
    key: "sulawesi-barat",
    label: "Sulawesi Barat",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Sulbar.png?id=049442s0nrexz2725u4gsif",
  },
  {
    key: "sulawesi-tenggara",
    label: "Sulawesi Tenggara",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Sultra.png?id=66643l0onqom3v2drf2oxx3",
  },
  {
    key: "maluku-utara",
    label: "Maluku Utara",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Malut.png?id=30116bd7czx1l8hn3sx9ymg",
  },
  {
    key: "maluku",
    label: "Maluku",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Maluku.png?id=60479ldfychbsh5enpdbbum",
  },
  {
    key: "papua-barat",
    label: "Papua Barat",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Papuabarat.png?id=77514r4lativ59k159nmybi",
  },
  {
    key: "papua",
    label: "Papua",
    himawari_9_ir_enhanced:
      "https://inderaja.bmkg.go.id/IMAGE/HIMA/H08_EH_Papua.png?id=83049uq4la1okac3tliff6s",
  },
];
