/* eslint-disable no-irregular-whitespace */
import ContentSection from "../../Layouts/ContentSection";
import Chart from "react-apexcharts";

const options = {
  title: {
    text: "Monitoring Kimia Air Hujan Mei 2024",
    align: "center",
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize: "18px",
      fontWeight: "bold",
      fontFamily: "PT Sans Caption, sans-serif",
      color: "#263238",
    },
  },
  subtitle: {
    text: "Sumber: Database Kualitas Udara",
    align: "center",
    margin: 10,
    offsetX: 0,
    offsetY: 30,
    floating: true,
    style: {
      fontSize: "14px",
      fontWeight: "normal",
      fontFamily: "PT Sans, sans-serif",
      color: "#9699a2",
    },
  },
  chart: {
    type: "bar",
  },
  plotOptions: {
    bar: {
      horizontal: true,
      colors: {
        ranges: [
          {
            from: 0,
            to: 5.6,
            color: "#f25d5d",
          },
          {
            from: 5.6,
            to: 7.5,
            color: "#019800",
          },
        ],
      },
      dataLabels: {
        position: "top",
      },
    },
  },

  xaxis: {
    categories: [
      "BANJARBARU",
      "BRANTI",
      "DRAMAGA2",
      "JEFMAN",
      "KEMAYORAN2",
      "KENTEN",
      "KOTOTABANG",
      "MUTIARA",
      "NEGARA",
      "PONDOK BETUNG",
      "PULAU BAAI",
      "SUPADIO",
    ],
    min: 0,
    max: 7.5,
    tickAmount: 3, // Untuk menampilkan 4 tick
    labels: {
      formatter: function (value) {
        return value.toFixed(1); // Format nilai menjadi 2 desimal
      },
    },
  },
  annotations: {
    xaxis: [
      {
        x: 5.6,
        borderColor: "#019800",
        label: {
          borderColor: "#4d984d",
          style: {
            color: "#fff",
            background: "#4d984d",
          },
          text: "pH Ideal (5.6 pH)",
        },
      },
    ],
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val.toFixed(2); // Tampilkan nilai dengan 3 angka desimal
    },
    offsetX: 40, // Geser label ke kanan
    style: {
      colors: ["#000"],
      fontWeight: 500,
    },
  },
  legend: {
    show: true,
    showForSingleSeries: true,
    position: "bottom",
    horizontalAlign: "center",
    markers: {
      fillColors: ["#019800"], // Warna ikon legenda sesuai dengan warna batang
    },
  },
};

const series = [
  {
    name: "Konsentrasi (pH)",
    data: [
      4.75, 5.55, 5.5, 4.64, 6.24, 4.48, 4.62, 5.72, 4.38, 5.66, 4.66, 5.4,
    ],
  },
];

const KimiaAirHujan = () => {
  return (
    <ContentSection
      title="Informasi Kimia Air Hujan (Mei 2024)"
      description={
        <div>
          <p className="mb-2 font-pt-sans-caption font-[600]">
            Tingkat Keasaman (pH) Air Hujan di Indonesia Bulan Mei 2024
          </p>
          <p className="mb-2">
            Pemantauan tingkat keasaman air hujan (pH) di Indonesia dilakukan di
            52 (Lima Puluh Dua) stasiun. Pengambilan sampel menggunakan metode
            <span className="italic">Wet Deposition</span> dan 
            <span className="italic">Wet & Dry Deposition</span> dengan alat 
            <span className="italic">Automatic Rain Water Sampler (ARWS)</span>.
            Analisis sampel air hujan dilakukan di laboratorium kualitas udara
            BMKG dengan menggunakan alat ion chromatograph.
          </p>
          <p>
            Hasil analisis laboratorium pada bulan Mei 2024 seperti terlihat
            pada grafik di bawah ini:
          </p>
        </div>
      }
    >
      <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height="500"
      />
      <p>
        Sebagian besar stasiun pemantauan di Indonesia pada Mei 2024 memiliki
        air hujan dengan pH di bawah 5.6, menandakan kondisi hujan asam. Stasiun
        seperti KEMAYORAN2, MUTIARA, dan PONDOK BETUNG memiliki pH di atas nilai
        ideal, menunjukkan kondisi yang lebih baik.
      </p>
      <p className="mt-3 font-semibold">Berikut ini dijelaskan keterangan mengenai pH air hujan.</p>
      <table className="my-3">
      <thead className="text-white bg-active">
        <tr>
          <th className="w-1/4 px-4 py-2">Kategori pH</th>
          <th className="w-1/2 px-4 py-2">Deskripsi</th>
          <th className="w-1/4 px-4 py-2">Tingkat Bahaya</th>
        </tr>
      </thead>
      <tbody className="text-gray-700">
        <tr className="bg-gray-200">
          <td className="px-4 py-2">&gt; 7</td>
          <td className="px-4 py-2">pH basa</td>
          <td className="px-4 py-2">Tidak berbahaya</td>
        </tr>
        <tr>
          <td className="px-4 py-2">6.1 - 7</td>
          <td className="px-4 py-2">Air hujan sangat baik, cenderung netral seperti air permukaan</td>
          <td className="px-4 py-2">Tidak berbahaya</td>
        </tr>
        <tr className="bg-gray-200">
          <td className="px-4 py-2">5.6 - 6</td>
          <td className="px-4 py-2">pH air hujan ideal</td>
          <td className="px-4 py-2">Tidak berbahaya</td>
        </tr>
        <tr>
          <td className="px-4 py-2">4.1 - 5.5</td>
          <td className="px-4 py-2">Hujan asam</td>
          <td className="px-4 py-2">Berbahaya</td>
        </tr>
        <tr className="bg-gray-200">
          <td className="px-4 py-2">3 - 4</td>
          <td className="px-4 py-2">Hujan asam (tinggi)</td>
          <td className="px-4 py-2">Sangat berbahaya</td>
        </tr>
        <tr>
          <td className="px-4 py-2">&lt; 3</td>
          <td className="px-4 py-2">Hujan asam (ekstrem)</td>
          <td className="px-4 py-2">Sangat berbahaya</td>
        </tr>
      </tbody>
    </table>
    </ContentSection>
  );
};

export default KimiaAirHujan;
