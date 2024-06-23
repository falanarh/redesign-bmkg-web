/* eslint-disable react/prop-types */
/* eslint-disable no-irregular-whitespace */
import { Tabs } from "antd";
import KomponenIBF from "../KomponenIBF";
import PrakiraanDampakDaerah from "../PrakiraanDampakDaerah";
import ContentSection from "../../Layouts/ContentSection";
import { Link } from "@nextui-org/react";

const onChange = (key) => {
  console.log(key);
};

const PrakiraanBerbasisDampak = ({isMobile}) => {
  const items = [
    {
      key: "1",
      label: "Komponen Penting IBF",
      children: <KomponenIBF isMobile={isMobile} />,
    },
    {
      key: "2",
      label: "Prakiraan Cuaca Berbasis Dampak di Daerah",
      children: <PrakiraanDampakDaerah />,
    },
  ];
  
  return (
    <ContentSection
      title="Prakiraan Berbasis Dampak"
      description={
        <p className="text-[14px] font-pt-sans">
          Prakiraan berbasis dampak atau Impact-Based Forecast (IBF) merupakan
          informasi prakiraan yang sudah memperhitungkan potensi dampak yang akan
          terjadi akibat dari cuaca. Dalam sistem IBF juga disajikan rekomendasi
          respon atau langkah yang harus dilakukan oleh stakeholder/user atau
          masyarakat terkait dampak dari dinamika cuaca tersebut. Untuk informasi
          selengkapnya kunjungi <Link href="https://signature.bmkg.go.id" target="_blank" className="font-semibold text-active" >website</Link> berikut.
        </p>
      }
    >
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </ContentSection>
  );
};

export default PrakiraanBerbasisDampak;
