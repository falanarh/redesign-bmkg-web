/* eslint-disable no-irregular-whitespace */
import ContentSection from "../../Layouts/ContentSection";
import Chart from "react-apexcharts";
import './index.css';

const options = {
  title: {
    text: 'Monitoring Sulfur Dioksida Bulan Mei 2024',
    align: "center",
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false,
    style: {
      fontSize: "18px",
      fontWeight: "bold",
      fontFamily: 'PT Sans Caption, sans-serif',
      color: "#263238",
    },
  },
  subtitle: {
      text: 'Sumber: Database Kualitas Udara',
      align: 'center',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: true,
      style: {
        fontSize:  '12px',
        fontWeight:  'normal',
        fontFamily:  'PT Sans, sans-serif',
        color:  '#9699a2'
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
            from: 0.01,
            to: 1,
            color: "#f25d5d",
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
      "ANCOL",
      "BANDENGAN",
      "BIVAK",
      "GROGOL",
      "KEMAYORAN",
      "KEMENTAN",
      "KOTOTABANG",
      "MONAS",
      "TMII",
    ],
    min: 0,
    max: 0.15,
    tickAmount: 4, // Untuk menampilkan 5 tick (0, 0.05, 0.1, 0.15)
    labels: {
      formatter: function (value) {
        return value.toFixed(2); // Format nilai menjadi 2 desimal
      },
    },
  },
  annotations: {
    xaxis: [
      {
        x: 0.14,
        borderColor: "#ff0000",
        label: {
          borderColor: "#ffa200",
          style: {
            color: "#fff",
            background: "#ffa200",
          },
          text: "Batas Maksimum (0.14 ppm)",
        },
      },
    ],
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val.toFixed(3); // Tampilkan nilai dengan 3 angka desimal
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
  },
};

const series = [
  {
    name: "Konsentrasi",
    data: [0.005, 0.007, 0.005, 0.006, 0.009, 0.003, 0.001, 0.142, 0.004],
  },
];

const SulfurDioksida = () => {
  return (
    <ContentSection
      title="Monitoring Sulfur Dioksida (SO2) (Mei 2024)"
      description={
        <div>
          <p className="mb-2">
            Pemantauan Sulfur Dioksida (SO2) di wilayah DKI-Jakarta dilakukan di
            9 (sembilan) lokasi yaitu: Ancol, Bandengan (Delta), Bivak, Glodok,
            Grogol, Kemayoran, Kementan, TMII, dan Monas. Di wilayah Sumatera
            Barat dan Kalimantan dilakukan di masing-masing 1 (satu) lokasi
            yaitu : Kototabang dan Siantan.
          </p>
          <p className="mb-2">
            Pengukuran kadar SO2 dilakukan dengan metode passive gas menggunakan
            alat passive sampler. Analisis sampel dilakukan di laboratorium
            kualitas udara BMKG, menggunakan alat ion chromatography.
          </p>
          <p>
            Hasil pengukuran kadar SO2 pada bulan ini dapat dilihat pada Grafik
            di bawah ini.
          </p>
        </div>
      }
    >
      <Chart
        options={options}
        series={series}
        type="bar"
        width="100%"
        height="400"
      />
    </ContentSection>
  );
};

export default SulfurDioksida;
