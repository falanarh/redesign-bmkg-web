import { Select, SelectItem } from "@nextui-org/react";
import ContentSection from "../../Layouts/ContentSection";
import React from "react";
import { Divider } from "antd";
import { FaCalendarDays, FaPen } from "react-icons/fa6";


const AnomaliSuhuUdaraBulanan = () => {
    const [jenisValue, setJenisValue] = React.useState(new Set());
    const [tahunValue, setTahunValue] = React.useState(new Set());

    // Konversi Set menjadi string
    const selectedJenis = Array.from(jenisValue).join("");
    const selectedTahun = Array.from(tahunValue).join("");
    const selectedKey = `${selectedJenis}-${selectedTahun}`;

    // Debugging logs
    console.log("Jenis Value:", selectedJenis);
    console.log("Tahun Value:", selectedTahun);
    console.log("Selected Key:", selectedKey);


    const selectedData = AnomaliSuhuUdaraBulanan.find(
        (data) => data.key === selectedKey
    );

    // Log hasil pencarian
    console.log("Selected Data:", selectedData);

    return (
        <ContentSection title="Prakiraan Musim">
            <div className="flex">
                <Select
                    items={jenis}
                    label="Jenis"
                    placeholder="Pilih Jenis"
                    showScrollIndicators={true}
                    selectedKeys={jenisValue}
                    onSelectionChange={setJenisValue}
                    className="max-w-xs font-pt-sans mr-5"
                >
                    {(jenis) => (
                        <SelectItem key={jenis.key} value={jenis.key}>
                            {jenis.label}
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
            {selectedJenis && selectedTahun ? (
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
                                    {/* <p className="text-[20px] font-bold text-active mt-3">{content.subtitle}</p> */}
                                    <img className="mt-2"
                                        src={content.link}
                                    />

                                    {selectedData.descriptions.map((descriptions, index) => (
                                        <p key={index} className="text-[14px] my-4">{descriptions}</p>
                                    ))}

                                    <iframe
                                        className='mt-5 w-full'
                                        src={content.linkPDF}
                                        height="500px"
                                        style={{ border: 'none' }}
                                        allowFullScreen
                                        title="PDF Viewer"
                                    />
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
                    Gambar akan keluar setelah memilih jenis dan tahun.
                </p>
            )}
        </ContentSection>
    );
};

export default AnomaliSuhuUdaraBulanan;