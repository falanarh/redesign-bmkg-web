import { Tabs } from "antd";
import PrakiraanCuacaBandara from "../PrakiraanCuacaBandara";
import ContentSection from "../../Layouts/ContentSection";
import { Link } from "@nextui-org/react";

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: "1",
    label: "Prakiraan Cuaca Bandara",
    children: <PrakiraanCuacaBandara />,
  },
  {
    key: "2",
    label: "Laporan Cuaca Aktual Bandara",
    children: "",
  },
];

const PrakiraanCuacaPenerbangan = () => {
  return (
    <ContentSection
      title="Cuaca Penerbangan"
      description={
        <p className="text-[14px] font-pt-sans">
          Menampilkan seputar informasi cuaca aktual bandara dan prakiraan cuaca
          bandara dengan beberapa pilihan waktu prakiraan cuaca. Untuk informasi
          selengkapnya kunjungi{" "}
          <Link
            href="https://web-aviation.bmkg.go.id/"
            target="_blank"
            className="text-active font-semibold"
          >
            website
          </Link>{" "}
          berikut.
        </p>
      }
    >
      <Tabs
        defaultActiveKey="1"
        items={items}
        onChange={onChange}
      />
    </ContentSection>
  );
};

export default PrakiraanCuacaPenerbangan;
