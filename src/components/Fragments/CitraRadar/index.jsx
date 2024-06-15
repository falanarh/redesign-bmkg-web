import ContentSection from "../../Layouts/ContentSection";
import Reflectivity from "./Components/Reflectivity";
import Wilayah from "./Components/Wilayah";
import "./index.css";
import { Tabs } from "antd";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Reflectivity",
    children: <Reflectivity />,
  },
  {
    key: "2",
    label: "Citra Radar Wilayah",
    children: <Wilayah />,
  },
];

const CitraRadar = () => {
  return (
    <ContentSection title="Citra Radar">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} className="-mt-5"/>
    </ContentSection>
  );
};

export default CitraRadar;
