/* eslint-disable no-irregular-whitespace */
import { Tabs } from "antd";
import KomponenIBF from "../KomponenIBF";
import PrakiraanDampakDaerah from "../PrakiraanDampakDaerah";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Komponen Penting IBF",
    children: <KomponenIBF />,
  },
  {
    key: "2",
    label: "Prakiraan Cuaca Berbasis Dampak di Daerah",
    children: <PrakiraanDampakDaerah />,
  },
];

const PrakiraanBerbasisDampak = () => {
  return (
    <div className="flex flex-col mb-10">
      <h1 className="text-2xl font-pt-sans-caption font-bold text-active mb-3">
        Prakiraan Cuaca Berbasis Dampak
      </h1>
      <p className="text-[14px] font-pt-sans">
        Prakiraan berbasis dampak atau Impact-Based Forecast (IBF) merupakan
        informasi prakiraan yang sudah memperhitungkan potensi dampak yang akan
        terjadi akibat dari cuaca. Dalam sistem IBF juga disajikan rekomendasi
        respon atau langkah yang harus dilakukan oleh stakeholder/user atau
        masyarakat terkait dampak dari dinamika cuaca tersebut. Untuk informasi
        selengkapnya kunjungi website berikut.
      </p>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} className="mt-6" />
    </div>
  );
};

export default PrakiraanBerbasisDampak;
