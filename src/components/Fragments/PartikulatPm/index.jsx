/* eslint-disable react/prop-types */
/* eslint-disable no-irregular-whitespace */
import ContentSection from "../../Layouts/ContentSection";
import { Select, SelectItem, SelectSection } from "@nextui-org/react";
import { daftarProvinsi, dataPartikulatPm } from "./data";
import { useState } from "react";
import { format } from "date-fns";
import { id } from "date-fns/locale/id";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.css";

const airQualityData = [
  { range: '0-15.5 µgr/m3', category: 'Baik', color: '#9BD84D' },
  { range: '15.6-55.4 µgr/m3', category: 'Sedang', color: '#FBCF3A' },
  { range: '55.5-150.4 µgr/m3', category: 'Tidak Sehat', color: '#FD8E49' },
  { range: '150.5-250.4 µgr/m3', category: 'Sangat Tidak Sehat', color: '#F75E60' },
  { range: '>250.4 µgr/m3', category: 'Berbahaya', color: '#7B0002' },
];

const AirQualityTable = () => {
  return (
    <div className="container mx-auto">
      <table className="min-w-full">
        <thead>
          <tr className="w-full text-white bg-active">
            <th className="px-4 py-2">Kisaran (µgr/m3)</th>
            <th className="px-4 py-2">Kategori</th>
            <th className="px-4 py-2">Indikator</th>
          </tr>
        </thead>
        <tbody>
          {airQualityData.map((item, index) => (
            <tr
              key={index}
              className={`text-center ${index % 2 === 0 ? 'bg-white' : 'bg-gray-100'}`}
            >
              <td className="px-4 py-2">{item.range}</td>
              <td className="px-4 py-2">{item.category}</td>
              <td className="px-4 py-2">
                <div
                  className="inline-block w-6 h-6 rounded"
                  style={{ backgroundColor: item.color }}
                ></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

function getStatusColor(status) {
  switch (status) {
    case "Baik":
      return "#9BD84D";
    case "Sedang":
      return "#FBCF3A";
    case "Tidak Sehat":
      return "#FD8E49";
    case "Sangat Tidak Sehat":
      return "#F75E60";
    case "Berbahaya":
      return "#7B0002";
    default:
      return "#000000"; // Default color for unknown status
  }
}

function getStatus(indeksPm) {
  if (indeksPm >= 0 && indeksPm <= 15.5) {
    return "Baik";
  } else if (indeksPm >= 15.6 && indeksPm <= 55.4) {
    return "Sedang";
  } else if (indeksPm >= 55.5 && indeksPm <= 150.4) {
    return "Tidak Sehat";
  } else if (indeksPm >= 150.5 && indeksPm <= 250.4) {
    return "Sangat Tidak Sehat";
  } else if (indeksPm > 250.4) {
    return "Berbahaya";
  } else {
    return "Nilai tidak valid";
  }
}

function getNextHour() {
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const nextHour = (currentHour + 1) % 24;
  const nextHourString = `${String(nextHour).padStart(2, "0")}:00`;

  return nextHourString;
}

const formatDate = () => {
  const now = new Date();
  const formattedDate = format(now, "EEEE, dd MMMM yyyy", { locale: id }); // Menggunakan locale id untuk nama hari dan nama bulan bahasa Indonesia
  return formattedDate;
};

const CardContent = ({ indeks }) => {
  const currentStatus = indeks
    ? getStatus(indeks.nilai)
    : "Data tidak tersedia";
  const statusColor = getStatusColor(currentStatus);

  return (
    <div className="w-[150px] h-[180px] bg-[#F5F5F5] my-5 rounded-md flex flex-col justify-between items-center p-5">
      <p className="text-[18px] font-bold text-[#666666]">{indeks.jam} WIB</p>
      <div>
        <p className="text-3xl font-bold leading-8 text-center">
          {indeks.nilai}
        </p>
        <p className="font-bold text-[18px] text-center">
          µ/m<sup>3</sup>
        </p>
      </div>
      <div
        className="px-2 py-1 font-semibold text-white rounded-lg"
        style={{ backgroundColor: statusColor }}
      >
        {currentStatus}
      </div>
    </div>
  );
};

const MainContent = ({ data }) => {
  const formattedTanggal = formatDate();
  const nextHour = getNextHour();
  const nextHourPm = data.indeksPm.find((pm) => {
    return pm.jam === nextHour;
  });
  const currentStatus = nextHourPm
    ? getStatus(nextHourPm.nilai)
    : "Data tidak tersedia";
  const statusColor = getStatusColor(currentStatus);

  return (
    <div className="flex flex-col my-6 border-[1.75px] rounded-[20px] border-slate-200 items-center">
      <h2 className="mt-8 text-xl font-bold text-center text-active">
        {data.kabKot}, {data.provinsi}
      </h2>
      <span className="flex justify-center">
        <h3 className="font-bold text-[#666666]">{formattedTanggal}</h3>
        <h3 className="ml-8 font-bold text-[#666666]">{nextHour} WIB</h3>
      </span>
      <div className="flex w-[90%] sm:w-[60%] h-[100px] my-5">
        {nextHourPm ? (
          <>
            <div
              className="w-[25%] h-full rounded-tl-[15px] rounded-bl-[15px] flex flex-col justify-center items-center"
              style={{ backgroundColor: statusColor }}
            >
              <p className="text-2xl font-bold leading-8 text-white sm:text-3xl">
                {nextHourPm.nilai}
              </p>
              <p className="font-bold text-white sm:text-[18px] text-[16px]">
                µ/m<sup>3</sup>
              </p>
            </div>
            <div className="w-[75%] h-full bg-[#F5F5F5] flex flex-col justify-center sm:p-8 p-3 rounded-tr-[15px] rounded-br-[15px]">
              <p className="font-bold sm:text-xl text-[18px]">
                Indeks Partikulat Udara (PM2.5)
              </p>
              <p
                className="font-bold sm:text-xl text-[18px]"
                style={{ color: statusColor }}
              >
                {currentStatus}
              </p>
            </div>
          </>
        ) : (
          <p>Data tidak tersedia</p>
        )}
      </div>
      <div className="w-[90%] mb-8">
        <Swiper
        breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 0,
            },
            1400: {
              slidesPerView: 5,
              spaceBetween: 0,
            },
          }}
          modules={[Navigation, Autoplay, Pagination, A11y]}
          navigation={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          className="px-16 sm:px-0"
          style={{
            "--swiper-navigation-color": "#1C2B78",
            "--swiper-pagination-color": "#1C2B78",
            "--swiper-navigation-size": "25px",
          }}
        >
          {data.indeksPm.map((pm, index) => (
            <SwiperSlide key={index}>
              <CardContent indeks={pm} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const PartikulatPm = () => {
  const [wilayahValue, setWilayahValue] = useState("1");
  const selectedWilayah = Array.from(wilayahValue).join("");

  const selectedData = dataPartikulatPm.find(
    (data) => data.id === selectedWilayah
  );

  return (
    <ContentSection
      title="Informasi Konsentrasi Partikulat (PM2.5)"
      description={
        <div>
          <p className="mb-2">
            Particulate Matter (PM2.5) adalah partikel udara yang berukuran
            lebih kecil dari atau sama dengan 2.5 µm (mikrometer). Pengukuran
            konsentrasi PM2.5 menggunakan metode penyinaran sinar{" "}
            <span className="italic">Beta (Beta Attenuation Monitoring)</span>{" "}
            dengan satuan mikrogram per meter kubik (µm/m<sub>3</sub>).
          </p>
          <p>
            Pemantauan PM2.5 yang dilakukan oleh BMKG ini baru dimulai sejak
            tahun 2020.
          </p>
        </div>
      }
    >
      <Select
        items={daftarProvinsi}
        label="Kabupaten/Kota"
        placeholder="Pilih Kabupaten/Kota"
        showScrollIndicators={true}
        selectedKeys={wilayahValue}
        onSelectionChange={setWilayahValue}
        className="max-w-xs mr-5 font-pt-sans"
      >
        {(province) => (
          <SelectSection showDivider title={province.nama}>
            {province.daftarKabKot.map((kabKot) => (
              <SelectItem key={kabKot.id}>{kabKot.nama}</SelectItem>
            ))}
          </SelectSection>
        )}
      </Select>
      {/* Tampilkan konten jika selectedData sudah ada */}
      {selectedData && <MainContent data={selectedData} />}
      <p className="my-3 font-bold">Keterangan</p>
      <AirQualityTable />
    </ContentSection>
  );
};

export default PartikulatPm;
