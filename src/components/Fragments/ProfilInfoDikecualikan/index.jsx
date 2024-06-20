import ContentSection from "../../Layouts/ContentSection";

const ProfilInfoDikecualikan = () => {
  const pdfUrl =
    "https://drive.google.com/file/d/18337R8x87pqPCKoMGdfbca29Mu0diTBB/preview"; // Ganti dengan URL PDF yang sebenarnya

  return (
    <ContentSection
      title="Informasi yang Dikecualikan"
      description={
        <p className="mt-4 text-[14px]">
          Adapun beberapa informasi yang harus dijaga kerahasiaannya. Oleh
          karena itu, tidak dipublikasikan kepada publik secara langsung.
          Berikut daftar informasi yang dikecualikan.
        </p>
      }
    >
      <ul className="list-decimal ml-6 text-[14px]">
        <li>Naskah dinas yang sifatnya rahasia.</li>
        <li>
          Dokumen keuangan meliputi Kuitansi, Surat Perintah Pembayaran (SPP),
          Surat Permintaan Membayar (SPM), Surat Perintah Pencairan Dana (SP2D),
          Data rekonsiliasi keuangan, dan POK.
        </li>
        <li>
          Data kepegawaian yang bersifat pribadi meliputi permohonan izin
          perceraian, rekam media, DP3, SKP/DP2KP, Berkas dan Surat Keputusan
          Sanksi Disiplin, Berkas Perceraian, DRH Pegawai, Dokumen Baperjakat,
          dan Dokumen Assesment Center.
        </li>
        <li>
          Data mentah MKG yang diperoleh dari pengamatan langsung baik dengan
          menggunakan peralatan manual maupun otomatis.
        </li>
        <li>
          Metode analisis atau model yang masih dalam taraf penelitian dan
          pengembangan.
        </li>
        <li>Gambar yang meliputi:</li>
        <ul
          className="ml-6 text-[14px]"
          style={{ listStyleType: "lower-alpha" }}
        >
          <li>Pimpinan tertinggi sampai dengan terendah;</li>
          <li>
            Detail jalur-jalur mekanikal elektrikal dimana kondisi operasional
            BMKG merupakan kegiatan yang menggunakan peralatan canggih dan
            membutuhkan elektrikal untuk operasional;
          </li>
          <li>
            Spesifikasi material/ peralatan mekanikal elektrikal yang digunakan
            di areal gedung BMKG; dan/atau
          </li>
          <li>Jalur perkabelan atau data-data dari radar, antena.</li>
        </ul>
        <li>Jaringan Komunikasi BMKG yang meliputi:</li>
        <ul
          className="ml-6 text-[14px]"
          style={{ listStyleType: "lower-alpha" }}
        >
          <li>
            Sistem Monitoring, Jaringan Komunikasi, Server dan Data Center;
          </li>
          <li>
            Konfigurasi Infrastruktur jaringan komunikasi WAN BMKG dan Internet;
          </li>
          <li>Manajemen bandwindth internet dan WAN BMKG;</li>
          <li>
            Kode Akses Elektronik dan Sistem Keamanan Elektronik; dan/atau
          </li>
          <li>Sistem Manajemen Database.</li>
        </ul>
        <li>Hasil Pengawasan yang dilakukan APIP meliputi:</li>
        <ul
          className="ml-6 text-[14px]"
          style={{ listStyleType: "lower-alpha" }}
        >
          <li>Laporan hasil audit beserta Tindak Lanjutnya</li>
          <li>Laporan hasil Verifikasi TPKN</li>
          <li>Data LHKASN</li>
          <li>Laporan hasil tim IPAL</li>
        </ul>
        <li>Dokumen pengadaan barang/jasa, yaitu:</li>
        <ul
          className="ml-6 text-[14px]"
          style={{ listStyleType: "lower-alpha" }}
        >
          <li>Rincian Harga Perkiraan Sendiri (HPS); atau</li>
          <li>Dokumen Kontrak.</li>
        </ul>
      </ul>
      <iframe
        className="w-full mt-4 mb-10"
        src={pdfUrl}
        height="600px"
        style={{ border: "none" }}
        allowFullScreen
        title="PDF Viewer"
      />
    </ContentSection>
  );
};

export default ProfilInfoDikecualikan;
