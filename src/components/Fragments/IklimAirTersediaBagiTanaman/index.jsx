import { Select, SelectItem } from "@nextui-org/react";
import ContentSection from "../../Layouts/ContentSection";
import React from "react";
import { FaCalendarDays, FaPen } from "react-icons/fa6";
import { Divider } from "antd";
import { airTersediaBagiTanaman, bulan, tahun } from "./data";


const AirTersediaBagiTanaman = () => {
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


    const selectedData = airTersediaBagiTanaman.find(
        (data) => data.key === selectedKey
    );

    // Log hasil pencarian
    console.log("Selected Data:", selectedData);

    return (
        <ContentSection title="Air Tersedia Bagi Tanaman (ATi)" description="Memuat informasi tentang analisis curah hujan yang terjadi dan prediksi hujan 3 (tiga) bulan ke depan. Dalam buletin ini juga dibahas analisis dinamika atmosfer dan laut serta prediksi El Nino Southern Oscilation (ENSO), Indian Ocean Dipole (IOD), monsun dan suhu muka laut (SST).">
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
                        <Divider className="mt-9 mb-6 bg-[#eaeaea]" />
                        <h1 className="text-xl font-bold  font-pt-sans-caption text-active">{selectedData.title}</h1>

                        <div className="my-3 flex gap-4">
                            <p className="flex items-center gap-2 text-[14px] text-graytext">
                                <FaCalendarDays />{selectedData.tgl}
                            </p>
                            <p className="flex items-center gap-2 text-[14px] text-graytext">
                                <FaPen /> {selectedData.penulis}
                            </p>
                        </div>
                        <img className="mt-3"
                            src={selectedData.link}
                        />
                        <div className="text-[14px] ">
                            <p className="mt-3">Tingkat Ketersediaan Air Tanah bagi Tanaman (ATi) menggunakan perhitungan neraca air dengan metode Thornthwaite and Mather.</p>
                            <p className="mt-2">ATi dihitung dengan persamaan sebagai berikut : ((KAT - TLP)/(KL - TLP)) x 100%.</p>
                            <p className="mt-2">Dengan kriteria:</p>
                            <ul className="list-disc list-inside ml-6">
                                <li className="mt-1">Kurang : jika ketersediaan air tanah {'<'} 40%</li>
                                <li className="mt-1">Sedang : jika ketersediaan air tanah 40% - 60%</li>
                                <li className="mt-1">Cukup : jika ketersediaan air tanah {'>'} 60%</li>
                            </ul>
                        </div>
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

export default AirTersediaBagiTanaman;