/* eslint-disable react/prop-types */
import { Input } from "@nextui-org/react";
import { useState, useEffect } from "react";
import { ConfigProvider, Table } from "antd";
import "./index.css";
import { FaEnvelope, FaSearch } from "react-icons/fa";
import ContentSection from "../../Layouts/ContentSection";
import { profilStasiunMKG } from "./data";
import { FaBuilding, FaSquarePhone } from "react-icons/fa6";

const ProfilStasiunMKG = ({ isMobile }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(profilStasiunMKG);

  // const handleChange = (pagination, filters, sorter) => {
  //     console.log("Various parameters", pagination, filters, sorter);
  //     setSortedInfo(sorter);
  // };

  useEffect(() => {
    const filtered = profilStasiunMKG.filter((item) =>
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
      ellipsis: false,
      width: 3,
    },
    {
      title: "Stasiun / UPT",
      dataIndex: "stasiun",
      key: "stasiun",
      render: (stasiun) => (
        <>{stasiun.map((s, index) => s && <p key={index}>{s}</p>)}</>
      ),
      ellipsis: false,
      width: 10,
    },
    {
      title: "Alamat",
      dataIndex: "alamat",
      key: "alamat",
      render: (object) => (
        <div>
          <p className="flex items-center">
            <FaBuilding className="text-[10px] w-[15%] mr-2" />
            <p className="w-full">{object.jalan}</p>
          </p>
          {Array.isArray(object.telp)
            ? object.telp.map(
                (telpItem, index) =>
                  telpItem && (
                    <p key={index} className="flex items-center">
                      {telpItem && <FaSquarePhone className="text-[10px] w-[15%] mr-2" />}
                      <p className="w-full">{telpItem}</p>
                    </p>
                  )
              )
            : object.telp && (
                <p className="flex items-center">
                  {object.telp && <FaSquarePhone className="text-[10px] w-[15%] mr-2" />}
                  <p className="w-full">{object.telp}</p>
                </p>
              )}
          {object.email && (
            <p className="flex items-center">
              <FaEnvelope className="text-[10px] w-[15%] mr-2" />
              <p className="w-full">{object.email}</p>
            </p>
          )}
        </div>
      ),
      ellipsis: false,
      width: 12,
    },
    {
      title: "Kepala",
      dataIndex: "kepala",
      key: "kepala",
      ellipsis: false,
      width: 10,
    },
  ];

  return (
    <ContentSection
      title="Stasiun dan UPT Meteorologi, Klimatologi, dan Geofisika"
      description={
        <p>
          Kumpulan informasi terkait stasiun dan UPT meteorologi, klimatologi,
          dan geofisika di tiap daerah.
        </p>
      }
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
                "sm:w-[50%]",
                "w-full",
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
            // onChange={handleChange}
            rowClassName={(record, index) =>
              index % 2 === 0 ? "even-row" : "odd-row"
            }
            scroll={
              isMobile
                ? { x: 800, y: 500 }
                : {
                    x: 1000,
                    y: 500,
                  }
            }
            pagination={{
              defaultPageSize: 10,
              showSizeChanger: true,
              pageSizeOptions: ["10", "25", "50", "100"],
              position: ["bottomCenter"],
            }}
            className="mt-8"
          />
        </ConfigProvider>
      </div>
    </ContentSection>
  );
};

export default ProfilStasiunMKG;
