import { ExportOutlined } from "@ant-design/icons";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter, CardHeader, Divider } from "@nextui-org/react";

const data = [
  {
    id: 1,
    title: "  Peringatan Gelombang Tinggi",
    content:
      "Peringatan dini gelombang tinggi merupakan informasi prakiraan gelombang untuk 2 hari ke depan yang akan diinformasikan jika terjadi gelombang tinggi lebih dari 1.25 meter dan bertahan selama 12 jam ke depan di sekitar perairan Indonesia dan berlaku maksimal 2 hari sejak dikeluarkan dan diperbaharui setiap ada perubahan dan sebelum masa berlakunya habis.",
    href: "https://drive.google.com/file/d/1HwEGsNTs3t8XFXvTyMCQvjkv7WnInesF/view?usp=sharing",
  },
];

const PrakiraanCuacaMaritim = () => {
  return (
    <div className="flex flex-col mb-10">
      <h1 className="text-2xl font-pt-sans-caption font-bold text-active mb-3">
        Prakiraan Cuaca Maritim
      </h1>
      <p className="text-[14px] font-pt-sans">
        Memuat informasi mengenai peringatan gelombang tinggi. Selain itu,
        disajikan variasi tinggi gelombang yang berpeluang terjadi di beberapa
        daerah tertentu yang dimuat dalam laporan di bawah ini. Untuk informasi
        selengkapnya kunjungi website berikut.
      </p>
      {data.map((item) => (
        <Card key={item.id} className="w-full font-pt-sans mt-10" shadow="sm">
          <CardHeader className="flex gap-3 bg-[#F5F5F5] px-5">
            <h2 className="text-[18px] font-semibold text-active">
              {item.title}
            </h2>
          </CardHeader>
          <Divider />
          <CardBody className="px-5">
            <p className="text-[14px]">{item.content}</p>
          </CardBody>
          <CardFooter className="flex justify-end">
            <Button
              color="primary"
              startContent={
                <ExportOutlined className="text-[16px] text-shadow-thick" />
              }
              className="text-[14px] font-semibold"
              onClick={() => window.open(item.href, "_blank")}
            >
              Lihat Dokumen
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PrakiraanCuacaMaritim;
