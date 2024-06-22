import { Tabs } from "antd";
import ContentSection from "../../Layouts/ContentSection";
import PrakiraanHujan from "../PrakiraanHujan";
import PotensiBanjir from "../PotensiBanjir";
import PrakiraanMusim from "../PrakiraanMusim";

const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Prakiraan Hujan",
      children: <PrakiraanHujan />,
    },
    {
      key: "2",
      label: "Prakiraan Musim",
      children: <PrakiraanMusim />,
    },
    {
        key: "3",
        label: "Potensi Banjir",
        children: <PotensiBanjir />,
      },
  ];
  
  const PrakiraanIklim = () => {
    return (
      <ContentSection
        title="Prakiraan Iklim"
        // description={
        //   <p className="text-[14px] font-pt-sans">
        //     Prakiraan berbasis dampak atau Impact-Based Forecast (IBF) merupakan
        //     informasi prakiraan yang sudah memperhitungkan potensi dampak yang akan
        //     terjadi akibat dari cuaca. Dalam sistem IBF juga disajikan rekomendasi
        //     respon atau langkah yang harus dilakukan oleh stakeholder/user atau
        //     masyarakat terkait dampak dari dinamika cuaca tersebut. Untuk informasi
        //     selengkapnya kunjungi <Link href="https://signature.bmkg.go.id" target="_blank" className="text-active font-semibold" >website</Link> berikut.
        //   </p>
        // }
      >
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </ContentSection>
    );
  };
  
  export default PrakiraanIklim;
  