import { useEffect, useState } from "react";
import { dataAktual } from "./data";
import "./index.css";
import { ConfigProvider, Divider, Table } from "antd";
import { FaSearch } from "react-icons/fa";
import { Input } from "@nextui-org/react";

const PrakiraanCuacaBandaraAktual = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(dataAktual);
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  // useEffect for search term
  useEffect(() => {
    const filtered = dataAktual.filter((item) =>
      Object.keys(item).some((key) =>
        String(item[key]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
  }, [searchTerm]);

  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
      sorter: (a, b) => a.no - b.no,
      sortOrder: sortedInfo.columnno === "no" ? sortedInfo.order : null,
      ellipsis: false,
      width: 3,
      fixed: "left",
    },
    {
      title: "Bandara/Stasiun",
      dataIndex: "bandaraStasiun",
      key: "bandaraStasiun",
      filters: [...new Set(dataAktual.map((item) => item.bandaraStasiun))].map(
        (bandara) => ({ text: bandara, value: bandara })
      ),
      filteredValue: filteredInfo.bandaraStasiun || null,
      onFilter: (value, record) => record.bandaraStasiun.includes(value),
      sorter: (a, b) => a.bandaraStasiun.length - b.bandaraStasiun.length,
      sortOrder:
        sortedInfo.columnKey === "bandaraStasiun" ? sortedInfo.order : null,
      ellipsis: false,
      fixed: "left",
      width: 10,
    },
    {
      title: "Waktu Prakiraan (WIB)",
      dataIndex: "waktuPengamatan",
      key: "waktuPengamatan",
      //   filters: [
      //     ...new Set(dataAktual.map((item) => item.waktuPrakiraan)),
      //   ].map((waktu) => ({ text: waktu, value: waktu })),
      //   filteredValue: filteredInfo.waktuPrakiraan || null,
      //   onFilter: (value, record) => record.waktuPrakiraan.includes(value),
      //   sorter: (a, b) => {
      //     // Convert waktuPrakiraan to comparable numbers
      //     const timeA = parseInt(a.waktuPrakiraan.replace(":", ""), 10);
      //     const timeB = parseInt(b.waktuPrakiraan.replace(":", ""), 10);
      //     return timeA - timeB;
      //   },
      //   sortOrder:
      //     sortedInfo.columnKey === "waktuPrakiraan" ? sortedInfo.order : null,
      ellipsis: false,
      width: 10,
    },
    {
      title: "Arah Angin",
      dataIndex: "arahAngin",
      key: "arahAngin",
      filters: [...new Set(dataAktual.map((item) => item.arahAngin))].map(
        (arah) => ({ text: arah, value: arah })
      ),
      filteredValue: filteredInfo.arahAngin || null,
      onFilter: (value, record) => record.arahAngin.includes(value),
      sorter: (a, b) => a.arahAngin.length - b.arahAngin.length,
      sortOrder: sortedInfo.columnKey === "arahAngin" ? sortedInfo.order : null,
      ellipsis: false,
      width: 8,
    },
    {
      title: "Kecepatan Angin (km/jam)",
      dataIndex: "kecepatanAngin",
      key: "kecepatanAngin",
      sorter: (a, b) => a.kecepatanAngin - b.kecepatanAngin,
      sortOrder:
        sortedInfo.columnKey === "kecepatanAngin" ? sortedInfo.order : null,
      ellipsis: false,
      width: 10,
    },
    {
      title: "Jarak Pandang (km)",
      dataIndex: "jarakPandang",
      key: "jarakPandang",
      sorter: (a, b) => a.jarakPandang - b.jarakPandang,
      sortOrder:
        sortedInfo.columnKey === "jarakPandang" ? sortedInfo.order : null,
      ellipsis: false,
      width: 8,
    },
    {
      title: "Cuaca",
      dataIndex: "cuaca",
      key: "cuaca",
      filters: [...new Set(dataAktual.map((item) => item.cuaca))].map(
        (cuaca) => ({ text: cuaca, value: cuaca })
      ),
      filteredValue: filteredInfo.cuaca || null,
      onFilter: (value, record) => record.cuaca.includes(value),
      sorter: (a, b) => a.cuaca.length - b.cuaca.length,
      sortOrder: sortedInfo.columnKey === "cuaca" ? sortedInfo.order : null,
      ellipsis: false,
      width: 8,
    },
    {
      title: "Suhu (°C)",
      dataIndex: "suhu",
      key: "suhu",
      render: (text) => (text === null ? "-" : text),
      sorter: (a, b) => a.suhu - b.suhu,
      sortOrder: sortedInfo.columnKey === "suhu" ? sortedInfo.order : null,
      ellipsis: false,
      width: 8,
    },
    {
      title: "Titik Embun (°C)",
      dataIndex: "titikEmbun",
      key: "titikEmbun",
      render: (text) => (text === null ? "-" : text),
      sorter: (a, b) => a.titikEmbun - b.titikEmbun,
      sortOrder:
        sortedInfo.columnKey === "titikEmbun" ? sortedInfo.order : null,
      ellipsis: false,
      width: 8,
    },
    {
      title: "Tekanan Udara (hPa)",
      dataIndex: "tekananUdara",
      key: "tekananUdara",
      render: (text) => (text === null ? "-" : text),
      sorter: (a, b) => a.tekananUdara - b.tekananUdara,
      sortOrder:
        sortedInfo.columnKey === "tekananUdara" ? sortedInfo.order : null,
      ellipsis: false,
      width: 8,
    },
  ];

  return (
    <>
      <Divider className="mb-4 -mt-1" />
      <h1 className="text-[18px] italic font-bold text-active text-center">
        Tabel Laporan Cuaca Aktual Bandara atau Stasiun
      </h1>
      <Divider className="my-4" />
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
            "w-[50%]",
            "mb-4",
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
            x: 1800,
            y: 500,
          }}
          pagination={{
            defaultPageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: ["10", "25", "50", "100"],
            position: ["bottomCenter"],
          }}
        />
      </ConfigProvider>
    </>
  );
};

export default PrakiraanCuacaBandaraAktual;
