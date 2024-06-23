import { Select, SelectItem } from "@nextui-org/react";
import ContentSection from "../../Layouts/ContentSection";
import React from "react";
import { FaCalendarDays, FaPen } from "react-icons/fa6";
import { Divider } from "antd";
import { analisis, bulan, informasiHujanBulanan, tahun } from "./data";


const IklimInformasiHujanBulanan = () => {
    const [analisisValue, setAnalisisValue] = React.useState(new Set());
    const [bulanValue, setBulanValue] = React.useState(new Set());
    const [tahunValue, setTahunValue] = React.useState(new Set());

    // Konversi Set menjadi string
    const selectedAnalisis = Array.from(analisisValue).join("");
    const selectedBulan = Array.from(bulanValue).join("");
    const selectedTahun = Array.from(tahunValue).join("");
    const selectedKey = `${selectedAnalisis}-${selectedBulan}-${selectedTahun}`;

    // Debugging logs
    console.log("Analisis Value:", selectedAnalisis);
    console.log("Bulan Value:", selectedBulan);
    console.log("Tahun Value:", selectedTahun);
    console.log("Selected Key:", selectedKey);


    const selectedData = informasiHujanBulanan.find(
        (data) => data.key === selectedKey
    );

    // Log hasil pencarian
    console.log("Selected Data:", selectedData);

    return (
        <ContentSection title="Informasi Hujan Bulanan">
            <div className="flex flex-col gap-3 sm:flex-row sm:gap-0">
                <Select
                    items={analisis}
                    label="Jenis Analisis"
                    placeholder="Pilih Jenis Analisis"
                    showScrollIndicators={true}
                    selectedKeys={analisisValue}
                    onSelectionChange={setAnalisisValue}
                    className="max-w-xs mr-5 font-pt-sans"
                >
                    {(analisis) => (
                        <SelectItem key={analisis.key} value={analisis.key}>
                            {analisis.label}
                        </SelectItem>
                    )}
                </Select>
                <Select
                    items={bulan}
                    label="Bulan"
                    placeholder="Pilih Bulan"
                    showScrollIndicators={true}
                    selectedKeys={bulanValue}
                    onSelectionChange={setBulanValue}
                    className="max-w-xs mr-5 font-pt-sans"
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
                    className="max-w-xs mr-5 font-pt-sans"
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
                        <h1 className="text-xl font-bold font-pt-sans-caption text-active">{selectedData.title}</h1>

                        <div className="flex gap-4 my-3">
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
                    </div>
                ) : (
                    <p className="my-10 text-base italic font-bold font-pt-sans">
                        Data tidak ditemukan
                    </p>
                )
            ) : (
                <p className="my-10 text-base italic font-bold font-pt-sans">
                    Gambar akan keluar setelah memilih jenis analisis, bulan, dan tahun.
                </p>
            )}
        </ContentSection>
    );
};

export default IklimInformasiHujanBulanan;