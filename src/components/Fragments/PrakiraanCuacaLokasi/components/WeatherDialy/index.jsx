import { Divider, Input } from "@nextui-org/react";
import { ConfigProvider, Table } from "antd";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./index.css";

const getImageSrc = (weatherCondition) => {
  switch (weatherCondition.toLowerCase()) {
    case "cerah":
      return "https://www.bmkg.go.id/asset/img/weather_icon/ID/cerah-pm.png";
    case "cerah berawan":
      return "https://www.bmkg.go.id/asset/img/weather_icon/ID/cerah%20berawan-pm.png";
    case "berawan":
      return "https://www.bmkg.go.id/asset/img/weather_icon/ID/berawan-am.png";
    case "berawan tebal":
      return "https://www.bmkg.go.id/asset/img/weather_icon/ID/berawan%20tebal-pm.png";
    case "hujan ringan":
      return "https://www.bmkg.go.id/asset/img/weather_icon/ID/hujan%20ringan-am.png";
    case "hujan sedang":
      return "https://www.bmkg.go.id/asset/img/weather_icon/ID/hujan%20sedang-am.png";
    case "hujan petir":
      return "https://www.bmkg.go.id/asset/img/weather_icon/ID/hujan%20petir-pm.png";
    case "kabut":
      return "https://www.bmkg.go.id/asset/img/weather_icon/ID/kabut-pm.png";
    default:
      return "";
  }
};

const WeatherDialy = ({isMobile, weatherData}) => {
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredData, setFilteredData] = useState(weatherData);
  
    const columns = [
      {
        title: "Kota",
        dataIndex: "kota",
        key: "kota",
        filters: [...new Set(weatherData.map((item) => item.kota))].map(
          (kota) => ({ text: kota, value: kota })
        ),
        filteredValue: filteredInfo.kota || null,
        onFilter: (value, record) => record.kota.includes(value),
        sorter: (a, b) => a.kota.length - b.kota.length,
        sortOrder: sortedInfo.columnKey === "kota" ? sortedInfo.order : null,
        ellipsis: false,
        fixed: isMobile ? null : "left",
        width: 200,
      },
      {
        title: "Pagi",
        dataIndex: "prakiraanCuaca",
        key: "pagi",
        render: (text) => (
          <div className="flex flex-col items-center">
            <img
              className="w-[50px]"
              src={getImageSrc(text.pagi)}
              alt={text.pagi}
            />{" "}
            <p>{text.pagi}</p>
          </div>
        ),
        filters: [
          ...new Set(weatherData.map((item) => item.prakiraanCuaca.pagi)),
        ].map((pagi) => ({ text: pagi, value: pagi })),
        filteredValue: filteredInfo.pagi || null,
        onFilter: (value, record) => record.prakiraanCuaca.pagi.includes(value),
        sorter: (a, b) =>
          a.prakiraanCuaca.pagi.length - b.prakiraanCuaca.pagi.length,
        sortOrder: sortedInfo.columnKey === "pagi" ? sortedInfo.order : null,
        ellipsis: false,
        width: 150,
      },
      {
        title: "Siang",
        dataIndex: "prakiraanCuaca",
        key: "siang",
        render: (text) => (
          <div className="flex flex-col items-center">
            <img
              className="w-[50px]"
              src={getImageSrc(text.siang)}
              alt={text.siang}
            />
            <p>{text.siang}</p>
          </div>
        ),
        filters: [
          ...new Set(weatherData.map((item) => item.prakiraanCuaca.siang)),
        ].map((siang) => ({ text: siang, value: siang })),
        filteredValue: filteredInfo.siang || null,
        onFilter: (value, record) => record.prakiraanCuaca.siang.includes(value),
        sorter: (a, b) =>
          a.prakiraanCuaca.siang.length - b.prakiraanCuaca.siang.length,
        sortOrder: sortedInfo.columnKey === "siang" ? sortedInfo.order : null,
        ellipsis: false,
        width: 150,
      },
      {
        title: "Malam",
        dataIndex: "prakiraanCuaca",
        key: "malam",
        render: (text) => (
          <div className="flex flex-col items-center">
            <img
              className="w-[50px]"
              src={getImageSrc(text.malam)}
              alt={text.malam}
            />
            <p>{text.malam}</p>
          </div>
        ),
        filters: [
          ...new Set(weatherData.map((item) => item.prakiraanCuaca.malam)),
        ].map((malam) => ({ text: malam, value: malam })),
        filteredValue: filteredInfo.malam || null,
        onFilter: (value, record) => record.prakiraanCuaca.malam.includes(value),
        sorter: (a, b) =>
          a.prakiraanCuaca.malam.length - b.prakiraanCuaca.malam.length,
        sortOrder: sortedInfo.columnKey === "malam" ? sortedInfo.order : null,
        ellipsis: false,
        width: 150,
      },
      {
        title: "Dini Hari",
        dataIndex: "prakiraanCuaca",
        key: "diniHari",
        render: (text) => (
          <div className="flex flex-col items-center">
            <img
              className="w-[45px]"
              src={getImageSrc(text.diniHari)}
              alt={text.diniHari}
            />
            <p>{text.diniHari}</p>
          </div>
        ),
        filters: [
          ...new Set(weatherData.map((item) => item.prakiraanCuaca.diniHari)),
        ].map((diniHari) => ({ text: diniHari, value: diniHari })),
        filteredValue: filteredInfo.diniHari || null,
        onFilter: (value, record) =>
          record.prakiraanCuaca.diniHari.includes(value),
        sorter: (a, b) =>
          a.prakiraanCuaca.diniHari.length - b.prakiraanCuaca.diniHari.length,
        sortOrder: sortedInfo.columnKey === "diniHari" ? sortedInfo.order : null,
        ellipsis: false,
        width: 150,
      },
      {
        title: "Suhu (°C)",
        dataIndex: "suhu",
        key: "suhu",
        sorter: (a, b) => {
          const tempA = a.suhu.split(" - ").map(Number);
          const tempB = b.suhu.split(" - ").map(Number);
          return tempA[0] - tempB[0];
        },
        sortOrder: sortedInfo.columnKey === "suhu" ? sortedInfo.order : null,
        ellipsis: false,
        width: 150,
      },
      {
        title: "Kelembapan (%)",
        dataIndex: "kelembapan",
        key: "kelembapan",
        sorter: (a, b) => {
          const humidityA = a.kelembapan.split(" - ").map(Number);
          const humidityB = b.kelembapan.split(" - ").map(Number);
          return humidityA[0] - humidityB[0];
        },
        sortOrder:
          sortedInfo.columnKey === "kelembapan" ? sortedInfo.order : null,
        ellipsis: false,
        width: 150,
      },
    ];
    const handleChange = (pagination, filters, sorter) => {
      console.log("Various parameters", pagination, filters, sorter);
      setFilteredInfo(filters);
      setSortedInfo(sorter);
    };
  
    useEffect(() => {
      const filtered = weatherData.filter((item) =>
        Object.keys(item).some((key) =>
          String(item[key]).toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
      setFilteredData(filtered);
    }, [searchTerm]);
    return (
      <div className="flex flex-col">
          <div className={`flex gap-3 ${isMobile ? "flex-col" : "flex-row"}`}>
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
                  "group-data-[focus=true]:ring-2",
                  "group-data-[focus=true]:ring-default-500",
                  "dark:group-data-[focus=true]:ring-0",
                  "dark:group-data-[focus=true]:ring-offset-0",
                ],
              }}
              placeholder="Cari..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              startContent={<FaSearch />}
            />
          </div>
          <Divider className="my-5" />
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
                x: 800,
                y: 500,
              }}
              pagination={{
                defaultPageSize: 10,
                showSizeChanger: true,
                pageSizeOptions: ["10", "20", "30"],
              }}
            />
          </ConfigProvider>
        </div>
    );
  }

  export default WeatherDialy;