import { Divider, Input, Select, SelectItem } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { ConfigProvider, Table } from "antd";
import "./index.css";
import { FaSearch } from "react-icons/fa";
import { position } from "@chakra-ui/react";
import ContentSection from "../../Layouts/ContentSection";
import { gempaBumiTerkini } from "./data";

const GempaBumiTerkini = ({isMobile}) => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(gempaBumiTerkini);
  const [timeValue, setTimeValue] = useState("");
  const selectedTime = Array.from(timeValue).join("");

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  useEffect(() => {
    const filtered = gempaBumiTerkini.filter((item) =>
      Object.keys(item).some((key) =>
        String(item[key]).toLowerCase().includes(searchTerm.toLowerCase())
      )
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
      filters: [...new Set(gempaBumiTerkini.map(item => item.tgl))].map(bandara => ({ text: bandara, value: bandara })),
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
        sortedInfo.columnKey === "waktuPrakiraan" ? sortedInfo.order : null,
      ellipsis: false,
      width: 10,
    },
    {
      title: "Bujur",
      dataIndex: "bujur",
      key: "bujur",
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
      title: "Wilayah",
      dataIndex: "wilayah",
      key: "wilayah",
      ellipsis: false,
      width: 25,
    },
  ];

  return (
    <ContentSection title="Gempa Bumi Terkini" description={<p>
Gempa bumi terkini merupakan informasi gempabumi yang <span className="font-bold"> didiseminasikan dalam waktu kurang dari 5 menit</span> setelah kejadian gempa. Informasi ini merupakan informasi gempabumi secara cepat dan tidak ada pemutakhiran parameter gempabumi. Parameter gempabumi yang final bisa jadi berbeda.
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
        {/* <Divider className="my-4" />
      <h1 className="text-[18px] italic font-bold text-active text-center">
        Tabel Prakiraan Cuaca Bandara atau Stasiun
      </h1>
      <Divider className="my-4" /> */}
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
      </div>
    </ContentSection>
  );
};

export default GempaBumiTerkini;