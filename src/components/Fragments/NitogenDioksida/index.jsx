/* eslint-disable react/prop-types */
/* eslint-disable no-irregular-whitespace */
import ContentSection from "../../Layouts/ContentSection";
import Chart from "react-apexcharts";

const NitrogenDioksida = ({ isMobile }) => {
  const titleSize = isMobile ? "14px" : "18px";

  const options = {
    title: {
      text: "Monitoring Nitrogen Dioksida Bulan Mei 2024",
      align: "center",
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: titleSize,
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
        // colors: {
        //   ranges: [
        //     {
        //       from: 0.01,
        //       to: 1,
        //       color: "#f25d5d",
        //     },
        //   ],
        // },
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
        "SORONG",
        "TMII",
      ],
      min: 0,
      max: 0.1,
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
          x: 0.08,
          borderColor: "#ff0000",
          label: {
            borderColor: "#ffa200",
            style: {
              color: "#fff",
              background: "#ffa200",
            },
            text: "Nilai Baku Mutu (0.14 ppm)",
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
      name: "Konsentrasi NO2",
      data: [
        0.0244, 0.0206, 0.0282, 0.0222, 0.0222, 0.0246, 0.001, 0.0212, 0,
        0.0186,
      ],
    },
  ];

  return (
    <ContentSection
      title={
        <p className="mb-3 text-2xl font-bold font-pt-sans-caption text-active">
          Monitoring Nitrogen Dioksida (NO<sub>2</sub>) (Mei 2024)
        </p>
      }
      description={
        <div>
          <p className="mb-2">
            Pemantauan Nitrogen Dioksida (NO<sub>2</sub>) di wilayah DKI-Jakarta
            dilakukan di 9 (sembilan) lokasi yaitu: Ancol, Bandengan (Delta),
            Bivak, Glodok, Grogol, Kemayoran, Kementan, TMII, dan Monas. Di
            wilayah Sumatera Barat dan Kalimantan dilakukan di masing-masing 1
            (satu) lokasi yaitu : Kototabang dan Siantan.
          </p>
          <p className="mb-2">
            Pengukuran kadar NO<sub>2</sub> dilakukan dengan metode passive gas
            menggunakan alat passive sampler. Analisis sampel dilakukan di
            laboratorium kualitas udara BMKG, menggunakan alat
            spectrophotometer.
          </p>
          <p>
            Hasil pengukuran kadar NO<sub>2</sub> pada bulan ini dapat dilihat
            pada Grafik di bawah ini.
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
        Pada bulan ini, kadar NO<sub>2</sub> tertinggi di BIVAK (0.0282 ppm) dan
        kadar terendah di SORONG (0.0000 ppm), namun masih berada di bawah Nilai
        Baku Mutu (0.08 ppm).
      </p>
    </ContentSection>
  );
};

export default NitrogenDioksida;
