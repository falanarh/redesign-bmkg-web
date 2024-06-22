import { Select, SelectItem } from "@nextui-org/react";
import ContentSection from "../../Layouts/ContentSection";
import React from "react";
import { Divider } from "antd";
import { FaCalendarDays, FaPen } from "react-icons/fa6";
import { anomaliBulanan, bulan, tahun } from "./data";


const AnomaliSuhuUdaraBulanan = () => {
    const [bulanValue, setJenisValue] = React.useState(new Set());
    const [tahunValue, setTahunValue] = React.useState(new Set());

    // Konversi Set menjadi string
    const selectedBulan = Array.from(bulanValue).join("");
    const selectedTahun = Array.from(tahunValue).join("");
    const selectedKey = `${selectedBulan}-${selectedTahun}`;

    // Debugging logs
    console.log("Bulan Value:", selectedBulan);
    console.log("Tahun Value:", selectedTahun);
    console.log("Selected Key:", selectedKey);


    const selectedData = anomaliBulanan.find(
        (data) => data.key === selectedKey
    );

    // Log hasil pencarian
    console.log("Selected Data:", selectedData);

    return (
        <ContentSection>
            <div className="flex -mt-5">
                <Select
                    items={bulan}
                    label="Bulan"
                    placeholder="Pilih Bulan"
                    showScrollIndicators={true}
                    selectedKeys={bulanValue}
                    onSelectionChange={setJenisValue}
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
                        <Divider className="mt-3" />
                        <h1 className="my-3 ml-2 text-xl italic font-bold text-center font-pt-sans text-active">
                            {selectedData.title}
                        </h1>

                        <Divider className="mb-3" />
                        {selectedData.tgl && selectedData.penulis ? (
                            <div className="my-3 flex gap-4">
                                <p className="flex items-center gap-2 text-[14px] text-graytext">
                                    <FaCalendarDays /> {selectedData.tgl}
                                </p>
                                <p className="flex items-center gap-2 text-[14px] text-graytext">
                                    <FaPen /> {selectedData.penulis}
                                </p>
                            </div>
                        ) : null}

                        <div>
                            {selectedData.content.map((content, index) => (
                                <div key={index} className="mb-5">
                                    {Array.isArray(content.link) ? (
                                        content.link.map((link, idx) => (
                                            <img key={idx} className="mt-2" src={link} alt={`Image ${idx}`} />
                                        ))
                                    ) : (
                                        <img className="mt-2" src={content.link} alt={`Image ${index}`} />
                                    )}

                                    {content.description.map((desc, idx) => (
                                        <p key={idx} className="text-[14px] my-4">{desc}</p>
                                    ))}
                                </div>
                            ))}
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

export default AnomaliSuhuUdaraBulanan;