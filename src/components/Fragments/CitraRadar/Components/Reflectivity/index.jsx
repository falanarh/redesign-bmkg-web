import { ConfigProvider, Table } from "antd";
import styled from "styled-components";
import { intensitasHujan } from "./data";

const ItalicText = styled.span`
  font-style: italic;
`;

const columns = [
  {
    title: "Kategori Intensitas Hujan",
    dataIndex: "kategori_intensitas_hujan",
    key: "kategori_intensitas_hujan",
    ellipsis: true,
    render: (text) => {
      const parts = text.match(/^(.*?)(\s*\(.*\))$/); // Memisahkan teks dan bagian dalam kurung
      return (
        <>
          {parts[1]}
          <ItalicText>{parts[2]}</ItalicText>
        </>
      );
    },
  },
  {
    title: "Nilai DBZ",
    dataIndex: "nilai_dbz",
    key: "nilai_dbz",
    ellipsis: true,
  },
  {
    title: "MM/Jam",
    dataIndex: "mm_jam",
    key: "mm_jam",
    ellipsis: true,
  },
];

const Reflectivity = () => {
  return (
    <>
      <p className="text-[14px] font-pt-sans">
        Citra radar cuaca menggambarkan potensi intensitas curah hujan yang
        dideteksi oleh radar cuaca. Pengukuran intensitas curah hujan
        (presipitasi) oleh radar cuaca berdasarkan seberapa besar pancaran
        energi radar yang dipantulkan kembali oleh butiran-butiran air di dalam
        awan dan digambarkan dengan produk Reflectivity yang memiliki besaran
        satuan dBZ (decibel). Makin besar energi pantul yang diterima radar maka
        makin besar juga nilai dBZ, dan semakin besar nilai dBZ reflectivity
        menunjukkan intensitas hujan yang terjadi semakin besar. Jangkauan
        terjauh/maksimum produk Reflectivity dari radar BMKG adalah sekitar 240
        km dari lokasi radar. Skala dBZ pada legenda berkisar 5 - 75 yang
        dinyatakan dengan gradasi warna biru langit hingga ungu muda. Jika
        gradasi warna semakin ke arah ungu maka semakin tinggi intensitas
        hujannya.
      </p>
      <p className="text-[14px] font-pt-sans my-4">
        Kisaran intensitas hujan berdasarkan skala warna dBZ dan mm/jam
        disajikan seperti dalam tabel berikut:
      </p>
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
              borderColor: "#FCFCFC",
              // expandIconBg: '#000000',
              bodySortBg: "#fdfefe",
              fontFamily: "PT Sans",
              algorithm: true, // Enable algorithm
            },
          },
        }}
      >
        <Table
          columns={columns}
          dataSource={intensitasHujan}
          pagination={false}
          rowClassName={(record, index) =>
            index % 2 === 0 ? "even-row" : "odd-row"
          }
        />
      </ConfigProvider>
    </>
  );
};

export default Reflectivity;
