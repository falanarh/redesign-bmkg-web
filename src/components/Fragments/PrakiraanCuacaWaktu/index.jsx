import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
} from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { ExportOutlined } from "@ant-design/icons";

const data = [
  {
    id: 1,
    title: "Prakiraan Cuaca Harian",
    content:
      "Prakiraan cuaca harian dapat dilihat dari kondisi atmosfer yang diperkirakan tidak terlalu jauh dari waktu observasi. Prakiraan ini berguna untuk perencanaan kegiatan harian kedepan.",
    href: "https://drive.google.com/file/d/13SX6_O96F4k1eJMgAtSvsJG6JPsrXUFS/view?usp=drive_link",
  },
  {
    id: 2,
    title: "Prakiraan Cuaca Tiga Harian",
    content:
      "Prakiraan cuaca tiga harian digunakan untuk melihat keseimbangan antara ketepatan dan pandangan ke depan yang sedikit lebih panjang. Prediksi ini berguna untuk perencanaan jangka pendek seperti perjalanan atau acara.",
    href: "https://drive.google.com/file/d/1DUAHJpi1ZS3wiOhnv5cMthWFQjl7Xmcq/view?usp=drive_link",
  },
  {
    id: 3,
    title: "Prakiraan Cuaca Mingguan",
    content:
      "Prakiraan cuaca mingguan lebih berguna untuk perencanaan jangka menengah, seperti kegiatan komersial atau perencanaan kerja. Namun, prakiraan jenis ini dipengaruhi faktor-faktor atmosferik yang dapat berubah sewaktu-waktu.",
    href: "https://drive.google.com/file/d/1TYrr8VEaB3MQrwi0Q0Zk-UD_qzKMfZ4u/view?usp=sharing",
  },
];

export default function PrakiraanCuacaWaktu() {
  return (
    <div className="flex flex-col mb-10">
      <h1 className="text-2xl font-pt-sans-caption font-bold text-active mb-3">
        Prakiraan Cuaca Berdasarkan Waktu
      </h1>
      <p className="text-[14px] font-pt-sans">
        Menampilkan prakiraan cuaca terkini berdasarkan lokasi yang dipilih.
        Untuk informasi selengkapnya kunjungi website berikut.
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
}
