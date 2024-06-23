import { Input, Modal, ModalBody, ModalContent, ModalHeader } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { ConfigProvider, Table, Tag } from "antd";
import "./index.css";
import { FaSearch } from "react-icons/fa";
import ContentSection from "../../Layouts/ContentSection";
import { gempaBumiDirasakan } from "./data";
import { Link } from "react-router-dom";

const GempaBumiDirasakan = ({isMobile}) => {
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(gempaBumiDirasakan);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedData, setSelectedData] = useState(null);

    const handleOpenModal = (key_objek) => {
        const foundData = gempaBumiDirasakan.find(item => item.dirasakan.key_objek === key_objek);
        setSelectedData(foundData);
        setIsOpen(true);
    };

    const handleCloseModal = () => {
        setIsOpen(false);
        setSelectedData(null);
    };

    const handleChange = (pagination, filters, sorter) => {
        console.log("Various parameters", pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };

    useEffect(() => {
        const filtered = gempaBumiDirasakan.filter((item) =>
            Object.keys(item).some((key) => {
                if (typeof item[key] === 'object' && item[key] !== null) {
                    return Object.keys(item[key]).some((subKey) =>
                        String(item[key][subKey]).toLowerCase().includes(searchTerm.toLowerCase())
                    );
                }
                return String(item[key]).toLowerCase().includes(searchTerm.toLowerCase());
            })
        );
        setFilteredData(filtered);
    }, [searchTerm]);

    const columns = [
        {
            title: "No",
            dataIndex: "key",
            key: "key",
            sorter: (a, b) => a.key - b.key,
            sortOrder: sortedInfo.columnKey === "key" ? sortedInfo.order : null,
            ellipsis: false,
            fixed: isMobile ? null : "left",
            width: 6,
        },
        {
            title: "Tanggal",
            dataIndex: "tgl",
            key: "tgl",
            filters: [...new Set(gempaBumiDirasakan.map(item => item.tgl))].map(bandara => ({ text: bandara, value: bandara })),
            filteredValue: filteredInfo.tgl || null,
            onFilter: (value, record) => record.tgl.includes(value),
            sorter: (a, b) => a.tgl.length - b.tgl.length,
            sortOrder:
                sortedInfo.columnKey === "tgl" ? sortedInfo.order : null,
            ellipsis: false,
            fixed: isMobile ? null : "left",
            width: 10,
        },
        {
            title: "Waktu (WIB)",
            dataIndex: "jam",
            key: "jam",
            sorter: (a, b) => a.jam.length - b.jam.length,
            sortOrder:
                sortedInfo.columnKey === "jam" ? sortedInfo.order : null,
            ellipsis: false,
            fixed: isMobile ? null : "left",
            width: 12,
        },
        {
            title: "Lintang",
            dataIndex: "lintang",
            key: "lintang",
            sorter: (a, b) => {
                // Convert lintang to comparable numbers
                const timeA = parseInt(a.lintang.replace(":", ""), 10);
                const timeB = parseInt(b.lintang.replace(":", ""), 10);
                return timeA - timeB;
            },
            sortOrder:
                sortedInfo.columnKey === "lintang" ? sortedInfo.order : null,
            ellipsis: false,
            width: 10,
        },
        {
            title: "Bujur",
            dataIndex: "bujur",
            key: "bujur",
            filters: [...new Set(gempaBumiDirasakan.map(item => item.bujur))].map(arah => ({ text: arah, value: arah })),
            filteredValue: filteredInfo.bujur || null,
            onFilter: (value, record) => record.bujur.includes(value),
            sorter: (a, b) => a.bujur.length - b.bujur.length,
            sortOrder: sortedInfo.columnKey === "bujur" ? sortedInfo.order : null,
            ellipsis: false,
            width: 10,
        },
        {
            title: "Magnitudo",
            dataIndex: "magnitudo",
            key: "magnitudo",
            sorter: (a, b) => a.magnitudo - b.magnitudo,
            sortOrder:
                sortedInfo.columnKey === "magnitudo"
                    ? sortedInfo.order
                    : null,
            ellipsis: false,
            width: 10,
        },
        {
            title: "Kedalaman (km)",
            dataIndex: "kedalaman",
            key: "kedalaman",
            sorter: (a, b) => a.kedalaman - b.kedalaman,
            sortOrder:
                sortedInfo.columnKey === "kedalaman" ? sortedInfo.order : null,
            ellipsis: false,
            width: 12,
        },
        {
            title: "Dirasakan (Skala MMI)",
            dataIndex: "dirasakan",
            key: "dirasakan",
            filters: [...new Set(gempaBumiDirasakan.map(item => item.dirasakan.value))].map(value => ({ text: value, value: value })),
            filteredValue: filteredInfo.dirasakan || null,
            onFilter: (value, record) => record.dirasakan.value.includes(value),
            render: (object) => (
                <>
                    <p
                        className="cursor-pointer hover:text-fouthtiary"
                        onClick={() => handleOpenModal(object.key_objek)}
                    >{object.value}</p>
                    {object.bandara.map((bandaraItem, index) => (
                        <Tag color="#008BF9" key={index} className="m-[2px]">{bandaraItem}</Tag>
                    ))}
                </>
            ),
            ellipsis: false,
            width: 25,
        },
    ];

    return (
        <ContentSection title="Gempa Bumi Dirasakan" description={<p>
            Gempa bumi dirasakan merupakan informasi gempabumi yang didiseminasikan setelah BMKG menerima <span className="font-bold">laporan kerusakan atau dirasakan dari masyarakat.</span> Tidak ada pemutakhiran parameter gempabumi dan parameter gempabumi final bisa jadi berbeda dengan informasi dalam daftar ini. 
        </p>}
        >
            <div className="flex flex-col">
                <div className="flex gap-3">
                    <Input
                        label="Pencarian tabel"
                        radius="lg"
                        classNames={{
                            label: "text-black/50 dark:text-white/90 font-pt-sans-caption",
                            input: [
                                "bg-transparent",
                                "text-black/90 dark:text-white/90 font-pt-sans",
                                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                            ],
                            innerWrapper: "bg-transparent",
                            inputWrapper: [
                                "w-full",
                                "sm:w-[50%]",
                                "shadow-sm",
                                "bg-default-200/50",
                                "dark:bg-default/60",
                                "backdrop-blur-xl",
                                "backdrop-saturate-200",
                                "hover:bg-default-200/70",
                                "dark:hover:bg-default/70",
                                "group-data-[focus=true]:bg-default-200/50",
                                "dark:group-data-[focus=true]:bg-default/60",
                                "!cursor-text",
                            ],
                        }}
                        placeholder="Ketikkan kata kunci..."
                        startContent={<FaSearch className="text-base" />}
                        size="md"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <ConfigProvider
                    theme={{
                        components: {
                            Table: {
                                colorPrimary: "#FFFFFF",
                                colorBgContainer: "#EDF2F7",
                                headerBg: "#1C2B78",
                                headerSplitColor: "#1C2B78",
                                headerSortHoverBg: "#1C2B78",
                                headerSortActiveBg: "#1C2B78",
                                fixedHeaderSortActiveBg: "#1C2B78",
                                headerColor: "#ffffff",
                                rowHoverBg: "#ced2d7",
                                borderColor: "#FFFFFF",
                                // expandIconBg: '#000000',
                                bodySortBg: "#fdfefe",
                                fontFamily: "PT Sans",
                                algorithm: true, // Enable algorithm
                                cellPaddingBlock: 8,
                            },
                        },
                    }}
                >
                    <Table
                        columns={columns}
                        dataSource={filteredData}
                        onChange={handleChange}
                        rowClassName={(record, index) =>
                            index % 2 === 0 ? "even-row" : "odd-row"
                        }
                        scroll={{
                            x: 1200,
                            y: 500,
                        }}
                        pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '25', '50', '100'], position: ['bottomCenter'] }}
                        className="mt-8"
                    />
                </ConfigProvider>
                {selectedData && (
                    <Modal
                        isOpen={isOpen}
                        onOpenChange={setIsOpen}
                        scrollBehavior="outside"
                        isDismissable={false}
                        size="3xl"
                        className="h-[520px]"
                    >
                        <ModalContent>
                            {(onClose) => (
                                <>
                                    <ModalHeader className="flex flex-col gap-1 font-bold font-pt-sans-caption">
                                        Peta Guncangan Gempabumi (Earthquake Shakemap)
                                    </ModalHeader>
                                    <ModalBody>
                                        {/* Render the selected data here */}
                                        <div className="flex justify-center font-pt-sans">
                                            <img className="h-[450px]" src={selectedData.link} alt="Gambar Peta" />
                                            <div className="mt-24 text-nonActive">
                                                <div className="flex flex-col mb-3">
                                                    <p className="font-bold">Parameter Gempa</p>
                                                    <p>{selectedData.tgl} - {selectedData.jam}</p>
                                                </div>
                                                <div className="flex flex-col mb-3">
                                                    <p className="font-bold">Magnitudo</p>
                                                    <p>{selectedData.magnitudo}</p>
                                                </div>
                                                <div className="flex flex-col mb-3">
                                                    <p className="font-bold">Kedalaman</p>
                                                    <p>{selectedData.kedalaman} KM</p>
                                                </div>
                                                <div className="flex flex-col mb-3">
                                                    <p className="font-bold">Lokasi</p>
                                                    <p>{selectedData.bujur} {selectedData.lintang}</p>
                                                </div>
                                            </div>

                                        </div>
                                    </ModalBody>
                                </>
                            )}
                        </ModalContent>
                    </Modal>
                )}
            </div>
        </ContentSection>
    );
};

export default GempaBumiDirasakan;