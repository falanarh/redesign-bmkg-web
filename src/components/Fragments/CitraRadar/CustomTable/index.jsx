import { ConfigProvider, Table } from "antd";
import { useState } from "react";
import { data } from "../data";
import "../index.css";

const CustomTable = () => {
  const [filteredInfo, setFilteredInfo] = useState({});
  const [sortedInfo, setSortedInfo] = useState({});
  const handleChange = (pagination, filters, sorter) => {
    console.log("Various parameters", pagination, filters, sorter);
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      filters: [
        {
          text: "Joe",
          value: "Joe",
        },
        {
          text: "Jim",
          value: "Jim",
        },
      ],
      filteredValue: filteredInfo.name || null,
      onFilter: (value, record) => record.name.includes(value),
      sorter: (a, b) => a.name.length - b.name.length,
      sortOrder: sortedInfo.columnKey === "name" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
      sortOrder: sortedInfo.columnKey === "age" ? sortedInfo.order : null,
      ellipsis: true,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      filters: [
        {
          text: "London",
          value: "London",
        },
        {
          text: "New York",
          value: "New York",
        },
      ],
      filteredValue: filteredInfo.address || null,
      onFilter: (value, record) => record.address.includes(value),
      sorter: (a, b) => a.address.length - b.address.length,
      sortOrder: sortedInfo.columnKey === "address" ? sortedInfo.order : null,
      ellipsis: true,
    },
  ];

  return (
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
            headerColor: "#ffffff",
            rowHoverBg: "#ced2d7",
            borderColor: "#FFFFFF",
            // expandIconBg: '#000000',
            bodySortBg: '#fdfefe',
            fontFamily: "PT Sans",
            algorithm: true, // Enable algorithm
          },
        },
      }}
    >
      <Table
        columns={columns}
        dataSource={data}
        onChange={handleChange}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "even-row" : "odd-row"
        }
      />
    </ConfigProvider>
  );
};

export default CustomTable;
