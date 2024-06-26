import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import ContentSection from "../../Layouts/ContentSection";

const ProfilTugasFungsi = () => {
  return (
    <ContentSection
      title="Tugas dan Fungsi"
      description={
        <p className="text-[14px]">
          BMKG mempunyai status sebuah Lembaga Pemerintah Non Departemen (LPND),
          dipimpin oleh seorang Kepala Badan.
        </p>
      }
    >
      <Card className="w-full font-pt-sans" shadow="sm">
        <CardHeader className="flex gap-3 bg-[#F5F5F5] px-5">
          <h2 className="text-[18px] font-semibold text-active">Tugas</h2>
        </CardHeader>
        <Divider />
        <CardBody className="px-5">
          <p className="text-[14px]">
            Melaksanakan tugas pemerintahan di bidang Meteorologi, Klimatologi,
            Kualitas Udara dan Geofisika sesuai dengan ketentuan
            perundang-undangan yang berlaku.
          </p>
        </CardBody>
      </Card>

      <Card className="w-full mb-16 mt-7 font-pt-sans" shadow="sm">
        <CardHeader className="flex gap-3 bg-[#F5F5F5] px-5">
          <h2 className="text-[18px] font-semibold text-active">Fungsi</h2>
        </CardHeader>
        <Divider />
        <CardBody className="px-5">
          <p className="text-[14px]">
            Dalam melaksanakan tugas sebagaimana dimaksud di atas, Badan
            Meteorologi Klimatologi dan Geofisika menyelenggarakan fungsi :
          </p>
          <ul className="list-disc ml-6 text-[14px]">
            <li>
              Perumusan kebijakan nasional dan kebijakan umum di bidang
              meteorologi, klimatologi, dan geofisika;
            </li>
            <li>
              Perumusan kebijakan teknis di bidang meteorologi, klimatologi, dan
              geofisika;
            </li>
            <li>
              Koordinasi kebijakan, perencanaan dan program di bidang
              meteorologi, klimatologi, dan geofisika;
            </li>
            <li>
              Pelaksanaan, pembinaan dan pengendalian observasi, dan pengolahan
              data dan informasi di bidang meteorologi, klimatologi, dan
              geofisika;
            </li>
            <li>
              Pelayanan data dan informasi di bidang meteorologi, klimatologi,
              dan geofisika;
            </li>
            <li>
              Penyampaian informasi kepada instansi dan pihak terkait serta
              masyarakat berkenaan dengan perubahan iklim;
            </li>
            <li>
              Penyampaian informasi dan peringatan dini kepada instansi dan
              pihak terkait serta masyarakat berkenaan dengan bencana karena
              faktor meteorologi, klimatologi, dan geofisika;
            </li>
            <li>
              Pelaksanaan kerja sama internasional di bidang meteorologi,
              klimatologi, dan geofisika;
            </li>
            <li>
              Pelaksanaan penelitian, pengkajian, dan pengembangan di bidang
              meteorologi, klimatologi, dan geofisika;
            </li>
            <li>
              Pelaksanaan, pembinaan, dan pengendalian instrumentasi, kalibrasi,
              dan jaringan komunikasi di bidang meteorologi, klimatologi, dan
              geofisika;
            </li>
            <li>
              Koordinasi dan kerja sama instrumentasi, kalibrasi, dan jaringan
              komunikasi di bidang meteorologi, klimatologi, dan geofisika;
            </li>
            <li>
              Pelaksanaan pendidikan dan pelatihan keahlian dan manajemen
              pemerintahan di bidang meteorologi, klimatologi, dan geofisika;
            </li>
            <li>
              Pelaksanaan pendidikan profesional di bidang meteorologi,
              klimatologi, dan geofisika;
            </li>
            <li>
              Pelaksanaan manajemen data di bidang meteorologi, klimatologi, dan
              geofisika;
            </li>
            <li>
              Pembinaan dan koordinasi pelaksanaan tugas administrasi di
              lingkungan BMKG;
            </li>
            <li>
              Pengelolaan barang milik/kekayaan negara yang menjadi tanggung
              jawab BMKG;
            </li>
            <li>Pengawasan atas pelaksanaan tugas di lingkungan BMKG;</li>
            <li>
              Penyampaian laporan, saran, dan pertimbangan di bidang
              meteorologi, klimatologi, dan geofisika.
            </li>
          </ul>
          <p className="text-[14px]">
            Dalam melaksanakan tugas dan fungsinya BMKG dikoordinasikan oleh
            Menteri yang bertanggung jawab di bidang perhubungan.
          </p>
        </CardBody>
      </Card>
    </ContentSection>
  );
};

export default ProfilTugasFungsi;
