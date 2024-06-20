import { Select, SelectItem } from "@nextui-org/react";
import ContentSection from "../../Layouts/ContentSection";
import { bulan, tahun, buletinIklim } from "./data";
import React from "react";
import { FaCalendarDays, FaPen } from "react-icons/fa6";
import { Divider } from "antd";


const BuletinInformasiIklim = () => {
    const [bulanValue, setBulanValue] = React.useState(new Set());
    const [tahunValue, setTahunValue] = React.useState(new Set());

    // Konversi Set menjadi string
    const selectedBulan = Array.from(bulanValue).join("");
    const selectedTahun = Array.from(tahunValue).join("");
    const selectedKey = `${selectedBulan}-${selectedTahun}`;

    // Debugging logs
    console.log("Bulan Value:", selectedBulan);
    console.log("Tahun Value:", selectedTahun);
    console.log("Selected Key:", selectedKey);


    const selectedData = buletinIklim.find(
        (data) => data.key === selectedKey
    );

    // Log hasil pencarian
    console.log("Selected Data:", selectedData);

    return (
        <ContentSection title="Buletin Informasi Iklim" description="Memuat informasi tentang analisis curah hujan yang terjadi dan prediksi hujan 3 (tiga) bulan ke depan. Dalam buletin ini juga dibahas analisis dinamika atmosfer dan laut serta prediksi El Nino Southern Oscilation (ENSO), Indian Ocean Dipole (IOD), monsun dan suhu muka laut (SST).">
            <div className="flex">
                <Select
                    items={bulan}
                    label="Bulan"
                    placeholder="Pilih Bulan"
                    showScrollIndicators={true}
                      selectedKeys={bulanValue}
                      onSelectionChange={setBulanValue}
                    className="max-w-xs font-pt-sans mr-5"
                >
                    {(bulan) => (
                        <SelectItem key={bulan.key} value={bulan.key}>
                            {bulan.label}
                        </SelectItem>
                    )}
                </Select>
                <Select
                    items={tahun}
                    label="Tahun"
                    placeholder="Pilih Tahun"
                    showScrollIndicators={true}
                      selectedKeys={tahunValue}
                      onSelectionChange={setTahunValue}
                    className="max-w-xs font-pt-sans mr-5"
                >
                    {(itemTahun) => (
                        <SelectItem key={itemTahun.key} value={itemTahun.key}>
                            {itemTahun.label}
                        </SelectItem>
                    )}
                </Select>
            </div>
            {selectedBulan && selectedTahun ? (
        selectedData ? (
          <div className="flex flex-col font-pt-sans">
            <Divider  className="mt-9 mb-6 bg-[#eaeaea]" />
            <h1 className="text-xl font-bold  font-pt-sans-caption text-active">{selectedData.title}</h1>
            
            <div className="my-3 flex gap-4">
                <p className="flex items-center gap-2 text-[14px] text-graytext">
                    <FaCalendarDays />{selectedData.tgl}
                </p>
                <p className="flex items-center gap-2 text-[14px] text-graytext">
                    <FaPen /> {selectedData.penulis}
                </p>
            </div>
            
              {selectedData.descriptions.map((description, index) => (
                <p key={index} className="text-[14px] mb-3">{description}</p>
              ))}

            <iframe 
                    className='mt-4 w-full'
                    src={selectedData.link}
                    height="500px"
                    style={{ border: 'none'}}
                    allowFullScreen
                    title="PDF Viewer"
                />
          </div>
        ) : (
          <p className=" text-base font-pt-sans font-bold italic my-10">
            Data tidak ditemukan
          </p>
        )
      ) : (
        <p className="text-base font-pt-sans font-bold italic my-10">
          Gambar akan keluar setelah memilih bulan dan tahun.
        </p>
      )}
        </ContentSection>
    );
};

export default BuletinInformasiIklim;