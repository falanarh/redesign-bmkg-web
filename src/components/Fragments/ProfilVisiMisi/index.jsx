import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import ContentSection from "../../Layouts/ContentSection";

const ProfilVisiMisi = () => {
  return (
    <ContentSection
      title="Visi dan Misi"
      description={
        <p className="text-[14px]">
          Dalam rangka mendukung dan mengemban tugas pokok dan fungsi serta
          memperhatikan kewenangan BMKG agar lebih efektif dan efisien, maka
          diperlukan aparatur yang profesional, bertanggung jawab dan berwibawa
          serta bebas dari Korupsi, Kolusi, dan Nepotisme (KKN), disamping itu
          harus dapat menjunjung tinggi kedisiplinan, kejujuran dan kebenaran
          guna ikut serta memberikan pelayanan informasi yang cepat, tepat dan
          akurat. Oleh karena itu kebijakan yang akan dilakukan BMKG Tahun
          2010-2014 adalah mengacu pada Visi, Misi, dan Tujuan BMKG yang telah
          ditetapkan.
        </p>
      }
    >
      <Card className="w-full font-pt-sans" shadow="sm">
        <CardHeader className="flex gap-3 bg-[#F5F5F5] px-5">
          <h2 className="text-[18px] font-semibold text-active">Visi</h2>
        </CardHeader>
        <Divider />
        <CardBody className="px-5">
          <p className="text-[14px]">
            Mewujudkan BMKG yang handal, tanggap dan mampu dalam rangka
            mendukung keselamatan masyarakat serta keberhasilan pembangunan
            nasional, dan berperan aktif di tingkat Internasional.
          </p>
          <p className="text-[14px]">
            Terminologi di dalam visi tersebut dapat dijelaskan sebagai berikut
            :
          </p>
          <ol className="list-decimal ml-6 text-[14px]">
            <li>
              Pelayanan informasi meteorologi, klimatologi, kualitas udara, dan
              geofisika yang handal ialah pelayanan BMKG terhadap penyajian
              data, informasi pelayanan jasa meteorologi, klimatologi, kualitas
              udara, dan geofisika yang akurat, tepat sasaran, tepat guna,
              cepat, lengkap, dan dapat dipertanggungjawabkan
            </li>
            <li>
              Tanggap dan mampu dimaksudkan BMKG dapat menangkap dan merumuskan
              kebutuhan stakeholder akan data, informasi, dan jasa meteorologi,
              klimatologi, kualitas udara, dan geofisika serta mampu memberikan
              pelayanan sesuai dengan kebutuhan pengguna jasa;
            </li>
          </ol>
        </CardBody>
      </Card>

      <Card className="w-full mb-16 mt-7 font-pt-sans" shadow="sm">
        <CardHeader className="flex gap-3 bg-[#F5F5F5] px-5">
          <h2 className="text-[18px] font-semibold text-active">Misi</h2>
        </CardHeader>
        <Divider />
        <CardBody className="px-5">
          <p className="text-[14px]">
            Dalam rangka mewujudkan Visi BMKG, maka diperlukan visi yang jelas
            yaitu berupa langkah-langkah BMKG untuk mewujudkan Misi yang telah
            ditetapkan yaitu :
          </p>
          <ol className="list-decimal ml-6 text-[14px]">
            <li>
              Mengamati dan memahami fenomena meteorologi, klimatologi, kualitas
              udara dan geofisika.
            </li>
            <li>
              Menyediakan data, informasi dan jasa meteorologi, klimatologi,
              kualitas udara dan geofisika yang handal dan terpercaya.
            </li>
            <li>
              Mengkoordinasikan dan memfasilitasi kegiatan di bidang
              meteorologi, klimatologi , kualitas udara dan geofisika.
            </li>
            <li>
              Berpartisipasi aktif dalam kegiatan internasional di Bidang
              meteorologi, klimatologi , kualitas udara dan geofisika.
            </li>
          </ol>

          <p className="text-[14px] mt-4">
            Secara lebih rinci, maksud dari pernyataan misi di atas adalah
            sebagai berikut :
          </p>
          <ol className="list-decimal ml-6 text-[14px]">
            <li>
              Mengamati dan memahami fenomena meteorologi, klimatologi, kualitas
              udara, dan geofisika artinya BMKG melaksanakan operasional
              pengamatan dan pengumpulan data secara teratur, lengkap dan akurat
              guna dipakai untuk mengenali dan memahami karakteristik
              unsur-unsur meteorologi, klimatologi, kualitas udara, dan
              geofisika guna membuat prakiraan dan informasi yang akurat;
            </li>
            <li>
              Menyediakan data, informasi dan jasa meteorologi, klimatologi,
              kualitas udara, dan geofisika kepada para pengguna sesuai dengan
              kebutuhan dan keinginan mereka dengan tingkat akurasi tinggi dan
              tepat waktu;
            </li>
            <li>
              Mengkoordinasi dan Memfasilitasi kegiatan sesuai dengan kewenangan
              BMKG, maka BMKG wajib mengawasi pelaksanaan operasional, memberi
              pedoman teknis, serta berwenang untuk mengkalibrasi peralatan
              meteorologi, klimatologi, kualitas udara, dan geofisika sesuai
              dengan peraturan yang berlaku
            </li>
            <li>
              Berpartisipasi aktif dalam kegiatan internasional artinya BMKG
              dalam melaksanakan kegiatan secara operasional selalu mengacu pada
              ketentuan internasional mengingat bahwa fenomena meteorologi,
              klimatologi, kualitas udara, dan geofisika tidak terbatas dan
              tidak terkait pada batas batas wilayah suatu negara manapun.
            </li>
          </ol>
        </CardBody>
      </Card>
    </ContentSection>
  );
};

export default ProfilVisiMisi;
