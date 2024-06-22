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
      >
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </ContentSection>
    );
  };
  
  export default AnomaliSuhuUdara;
  