import { Tabs } from "antd";
import ContentSection from "../../Layouts/ContentSection";
import AnomaliSuhuUdaraBulanan from "../AnomaliSuhuUdaraBulanan";
import AnomaliSuhuUdaraTahunan from "../AnomaliSuhuUdaraTahunan";

const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Anomali Suhu Udara Bulanan",
      children: <AnomaliSuhuUdaraBulanan />,
    },
    {
      key: "2",
      label: "Anomali Suhu Udara Tahunan",
      children: <AnomaliSuhuUdaraTahunan />,
    },
  ];
  
  const AnomaliSuhuUdara = () => {
    return (
      <ContentSection
        title="Anomali Suhu Udara"
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
  
  export default AnomaliSuhuUdara;
  