import { Tabs } from "antd";
import ContentSection from "../../Layouts/ContentSection";
import WeatherDialy from "./components/WeatherDialy";
import { day1, day2, day3 } from "./data";

const PrakiraanCuacaLokasi = ({ isMobile }) => {
  function formatDate(date) {
    const days = [
      "Minggu",
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
    ];
    const months = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    const dayName = days[date.getDay()];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${dayName}, ${day} ${month} ${year}`;
  }

  // Get today's date
  const today = new Date();

  // Get tomorrow's date
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  // Get the day after tomorrow's date
  const dayAfterTomorrow = new Date(today);
  dayAfterTomorrow.setDate(today.getDate() + 2);

  // Create items with formatted labels
  const items = [
    {
      key: "1",
      label: formatDate(today),
      children: <WeatherDialy isMobile={isMobile} weatherData={day1} />,
    },
    {
      key: "2",
      label: formatDate(tomorrow),
      children: <WeatherDialy isMobile={isMobile} weatherData={day2} />,
    },
    {
      key: "3",
      label: formatDate(dayAfterTomorrow),
      children: <WeatherDialy isMobile={isMobile} weatherData={day3} />,
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <ContentSection
      title="Prakiraan Cuaca Berdasarkan Lokasi"
      description={
        <p>
          Prakiraan cuaca berdasarkan lokasi memberikan informasi penting
          tentang kondisi cuaca di suatu daerah pada waktu tertentu. Informasi
          ini meliputi beberapa aspek utama seperti kondisi langit (misalnya
          cerah, berawan, hujan), suhu udara, dan kelembapan relatif.
        </p>
      }
    >
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </ContentSection>
  );
};

export default PrakiraanCuacaLokasi;
