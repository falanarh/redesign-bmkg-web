/* eslint-disable react/prop-types */
import { Divider, Input, Select, SelectItem } from "@nextui-org/react";
import { prakiraanCuaca, times } from "./data";
import { useState, useEffect } from "react";
import { ConfigProvider, Table } from "antd";
import "./index.css";
import { FaSearch } from "react-icons/fa";

const PrakiraanCuacaBandara = ({isMobile}) => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(prakiraanCuaca);
  const [timeValue, setTimeValue] = useState("");
  const selectedTime = Array.from(timeValue).join("");

  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  // useEffect for search term
  useEffect(() => {
    const filtered = prakiraanCuaca.filter((item) =>
      Object.keys(item).some((key) =>
        String(item[key]).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
  }, [searchTerm]);

  // useEffect for selected time filter
  useEffect(() => {
    if (selectedTime) {
      const now = new Date(); // Ambil waktu saat ini
      const selectedTimeHours = parseInt(selectedTime); // Ambil jam yang akan datang dari dropdown
      const cutoffTime = new Date(
        now.getTime() + selectedTimeHours * 60 * 60 * 1000
      );
      const filteredByTime = prakiraanCuaca.filter((item) => {
        // Ubah waktu prakiraan menjadi objek Date
        const forecastTimeParts = item.waktuPrakiraan.split(":");
        const forecastDate = new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate(),
          parseInt(forecastTimeParts[0]),
          parseInt(forecastTimeParts[1])
        );

        // Bandingkan dengan waktu cut-off
        return forecastDate > now && forecastDate <= cutoffTime;
      });
      setFilteredData(filteredByTime);
    } else {
      // Jika selectedTime kosong, gunakan filtered dari search term
      const filtered = prakiraanCuaca.filter((item) =>
        Object.keys(item).some((key) =>
          String(item[key]).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredData(filtered);
    }
  }, [selectedTime]);

  const columns = [
    {
      title: "No",
      dataIndex: "key",
      key: "key",
      sorter: (a, b) => a.key - b.key,
      sortOrder: sortedInfo.columnKey === "key" ? sortedInfo.order : null,
      ellipsis: false,
      width: 55,
      fixed: isMobile ? null : "left",
    },
    {
      title: "Bandara/Stasiun",
      dataIndex: "bandaraStasiun",
      key: "bandaraStasiun",
      filters: [...new Set(prakiraanCuaca.map(item => item.bandaraStasiun))].map(bandara => ({ text: bandara, value: bandara })),
      filteredValue: filteredInfo.bandaraStasiun || null,
      onFilter: (value, record) => record.bandaraStasiun.includes(value),
      sorter: (a, b) => a.bandaraStasiun.length - b.bandaraStasiun.length,
      sortOrder:
        sortedInfo.columnKey === "bandaraStasiun" ? sortedInfo.order : null,
      ellipsis: false,
      fixed: isMobile ? null : "left",
      width: 350,
    },
    {
      title: "Waktu Prakiraan (WIB)",
      dataIndex: "waktuPrakiraan",
      key: "waktuPrakiraan",
      filters: [...new Set(prakiraanCuaca.map(item => item.waktuPrakiraan))].map(waktu => ({ text: waktu, value: waktu })),
      filteredValue: filteredInfo.waktuPrakiraan || null,
      onFilter: (value, record) => record.waktuPrakiraan.includes(value),
      sorter: (a, b) => {
        // Convert waktuPrakiraan to comparable numbers
        const timeA = parseInt(a.waktuPrakiraan.replace(":", ""), 10);
        const timeB = parseInt(b.waktuPrakiraan.replace(":", ""), 10);
        return timeA - timeB;
      },
      sortOrder:
        sortedInfo.columnKey === "waktuPrakiraan" ? sortedInfo.order : null,
      ellipsis: false,
      width: 200,
    },
    {
      title: "Arah Angin",
      dataIndex: "arahAngin",
      key: "arahAngin",
      filters: [...new Set(prakiraanCuaca.map(item => item.arahAngin))].map(arah => ({ text: arah, value: arah })),
      filteredValue: filteredInfo.arahAngin || null,
      onFilter: (value, record) => record.arahAngin.includes(value),
      sorter: (a, b) => a.arahAngin.length - b.arahAngin.length,
      sortOrder: sortedInfo.columnKey === "arahAngin" ? sortedInfo.order : null,
      ellipsis: false,
    },
    {
      title: "Kecepatan Angin (km/jam)",
      dataIndex: "kecepatanAnginKmJam",
      key: "kecepatanAnginKmJam",
      sorter: (a, b) => a.kecepatanAnginKmJam - b.kecepatanAnginKmJam,
      sortOrder:
        sortedInfo.columnKey === "kecepatanAnginKmJam"
          ? sortedInfo.order
          : null,
      ellipsis: false,
      width: 250,
    },
    {
      title: "Jarak Pandang (km)",
      dataIndex: "jarakPandangKm",
      key: "jarakPandangKm",
      sorter: (a, b) => a.jarakPandangKm - b.jarakPandangKm,
      sortOrder:
        sortedInfo.columnKey === "jarakPandangKm" ? sortedInfo.order : null,
      ellipsis: false,
      width: 200,
    },
    {
      title: "Cuaca",
      dataIndex: "cuaca",
      key: "cuaca",
      filters: [...new Set(prakiraanCuaca.map(item => item.cuaca))].map(cuaca => ({ text: cuaca, value: cuaca })),
      filteredValue: filteredInfo.cuaca || null,
      onFilter: (value, record) => record.cuaca.includes(value),
      sorter: (a, b) => a.cuaca.length - b.cuaca.length,
      sortOrder: sortedInfo.columnKey === "cuaca" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Probabilitas (%)",
      dataIndex: "probabilitas",
      key: "probabilitas",
      render: (text) => (text === null ? "-" : text),
      sorter: (a, b) => a.probabilitas - b.probabilitas,
      sortOrder:
        sortedInfo.columnKey === "probabilitas" ? sortedInfo.order : null,
      ellipsis: false,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className={`flex gap-3 ${isMobile ? "flex-col" : "flex-row"}`}>
        <Select
          items={times}
          label="Waktu prakiraan cuaca"
          placeholder="Pilih waktu prakiraan cuaca"
          showScrollIndicators={true}
          selectedKeys={timeValue}
          onSelectionChange={setTimeValue}
          className="r-5 font-pt-sans"
        >
          {(time) => (
            <SelectItem key={time.key} value={time.key}>
              {time.label}
            </SelectItem>
          )}
        </Select>
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
      <Divider className="my-4" />
      <h1 className="text-[18px] italic font-bold text-active text-center">
        Tabel Prakiraan Cuaca Bandara atau Stasiun
      </h1>
      <Divider className="my-4" />
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
            x: 1500,
            y: 500,
          }}
          pagination={{ defaultPageSize: 10, showSizeChanger: true, pageSizeOptions: ['10', '25', '50', '100'], position: ['bottomCenter']}}
        />
      </ConfigProvider>
    </div>
  );
};

export default PrakiraanCuacaBandara;