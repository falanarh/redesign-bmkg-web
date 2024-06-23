import { Select, SelectItem } from "@nextui-org/react";
import ContentSection from "../../Layouts/ContentSection";
import React from "react";
import { Divider } from "antd";
import { FaCalendarDays, FaPen } from "react-icons/fa6";
import { anomaliTahunan, tahun } from "./data";


const AnomaliSuhuUdaraTahunan = () => {
    const [tahunValue, setTahunValue] = React.useState(new Set());

    // Konversi Set menjadi string
    const selectedTahun = Array.from(tahunValue).join("");
    const selectedKey = `${selectedTahun}`;

    // Debugging logs
    console.log("Tahun Value:", selectedTahun);
    console.log("Selected Key:", selectedKey);


    const selectedData = anomaliTahunan.find(
        (data) => data.key === selectedKey
    );

    // Log hasil pencarian
    console.log("Selected Data:", selectedData);

    return (
        <ContentSection>
            <div className="flex -mt-5">
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
            {selectedTahun ? (
                selectedData ? (
                    <div className="flex flex-col font-pt-sans">
                        <Divider className="mt-3" />
                        <h1 className="my-3 ml-2 text-xl italic font-bold text-center font-pt-sans text-active">
                            {selectedData.title}
                        </h1>

                        <Divider className="mb-3" />
                        {selectedData.tgl && selectedData.penulis ? (
                            <div className="flex gap-4 my-3">
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
                                    {Array.isArray(content.description) ? (
                                        content.description.map((desc, idx) => (
                                            <p key={idx} className="text-[14px] my-2">{desc}</p>
                                        ))
                                    ) : (
                                        <p className="text-[14px] my-2">{content.description}</p>
                                    )}
                                </div>
                            ))}
                        </div>

                    </div>
                ) : (
                    <p className="my-10 text-base italic font-bold  font-pt-sans">
                        Data tidak ditemukan
                    </p>
                )
            ) : (
                <p className="my-10 text-base italic font-bold font-pt-sans">
                    Gambar akan keluar setelah memilih tahun.
                </p>
            )}
        </ContentSection>
    );
};

export default AnomaliSuhuUdaraTahunan;