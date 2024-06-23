/* eslint-disable react/prop-types */
import { Tabs } from "antd";
import PrakiraanCuacaBandara from "../PrakiraanCuacaBandara";
import ContentSection from "../../Layouts/ContentSection";
import { Link } from "@nextui-org/react";
import PrakiraanCuacaBandaraAktual from "../PrakiraanCuacaBandaraAktual";

const onChange = (key) => {
  console.log(key);
};
const PrakiraanCuacaPenerbangan = ({isMobile}) => {
  const items = [
    {
      key: "1",
      label: "Prakiraan Cuaca Bandara",
      children: <PrakiraanCuacaBandara isMobile={isMobile} />,
    },
    {
      key: "2",
      label: "Laporan Cuaca Aktual Bandara",
      children: <PrakiraanCuacaBandaraAktual isMobile={isMobile} />,
    },
  ];
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
            className="font-semibold text-active"
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
