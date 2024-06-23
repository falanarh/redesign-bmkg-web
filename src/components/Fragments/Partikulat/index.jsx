/* eslint-disable react/prop-types */
/* eslint-disable no-irregular-whitespace */
import ContentSection from "../../Layouts/ContentSection";
import Chart from "react-apexcharts";

const Partikulat = ({isMobile}) => {
  const titleSize = isMobile ? "11px" : "18px";

  const options = {
    title: {
      text: "Monitoring Suspended Particular Matter Bulan Mei 2024",
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
      events: {
      mounted: function(chartContext, config) {
        // Tambahkan kelas CSS ke elemen judul setelah chart dimount
        const titleElement = chartContext.el.querySelector('.apexcharts-title-text');
        if (titleElement) {
          titleElement.classList.add('chart-title');
        }
      }
    }
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
        "KEDIRI",
        "KEMAYORAN",
        "KEMENTAN",
        "KOTOTABANG",
        "MONAS",
        "NEGARA",
        "NGURAHRAI",
        "PONDOK BETUNG",
        "TMII",
      ],
      min: 0,
      max: 300,
      tickAmount: 3, // Untuk menampilkan 3 tick
      labels: {
        formatter: function (value) {
          return value.toFixed(0); // Format nilai menjadi 2 desimal
        },
      },
    },
    annotations: {
      xaxis: [
        {
          x: 230,
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
    },
  };
  
  const series = [
    {
      name: "Konsentrasi (SPM)",
      data: [
        172.66, 128.46, 92, 114.48, 128.31, 146.64, 121.81, 27.38, 114.42, 93.83,
        52.28, 177.52, 135.49,
      ],
    },
  ];
  return (
    <ContentSection
      title="Monitoring Suspended Particulated Matter (Mei 2024)"
      description={
        <div>
          <p className="mb-2">
            Pemantauan Suspended Particulated Matter (SPM) di Indonesia
            dilakukan di 13 stasiun.
          </p>
          <p className="mb-2">
            Pemantauan SPM dilakukan dengan metode sampling menggunakan, 
            <span className="italic">High Volume Sampler (HVS)</span>, sedangkan
            untuk analisis laboratorium menggunakan 
            <span className="italic">Neraca Analitik (Analytical Balance)</span>
            .
          </p>
          <p>
            Hasil analisa laboratorium pada bulan Mei 2024, menunjukkan bahwa
            kadar partikulat di stasiun-stasiun berikut berada di bawah nilai
            baku mutu (230 ug/m<sup>3</sup>) seperti terlihat pada grafik di
            bawah ini:
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
        Pada bulan ini, kadar SPM tertinggi di PONDOK BETUNG (177.52 ug/m
        <sup>3</sup>) dan kadar terendah di KOTOTABANG (27.38 ug/m<sup>3</sup>),
        namun masih berada di bawah Nilai Baku Mutu (230 ug/m<sup>3</sup>).
      </p>
    </ContentSection>
  );
};

export default Partikulat;
