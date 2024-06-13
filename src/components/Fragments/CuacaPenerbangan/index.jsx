import { Tabs } from "antd";
import PrakiraanCuacaBandara from "../PrakiraanCuacaBandara";

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
      children: '',
    },
  ];

const CuacaPenerbangan = () => {
  return (
    <div className="flex flex-col mb-10">
      <h1 className="text-2xl font-pt-sans-caption font-bold text-active mb-3">
        Cuaca Penerbangan
      </h1>
      <p className="text-[14px] font-pt-sans">
        Menampilkan seputar informasi cuaca aktual bandara dan prakiraan cuaca
        bandara dengan beberapa pilihan waktu prakiraan cuaca. Untuk informasi
        selengkapnya kunjungi website berikut.
      </p>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} className="mt-6" />
    </div>
  );
};

export default CuacaPenerbangan;
