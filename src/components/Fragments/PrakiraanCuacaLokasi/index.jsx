import { Tabs } from 'antd';
import { useState, useEffect } from 'react';
import MapSlider from '../../Elements/MapSlider';
import ContentSection from '../../Layouts/ContentSection';
import { Link } from '@nextui-org/react';

const customColumns = [
    {
      uid: "nomor",
      name: "No",
      sortable: true,
      renderCell: (item) => (
        <div className="flex flex-col">
          <p className="text-bold text-sm">{item.nomor}</p>
        </div>
      ),
    },
    {
      uid: "stasiun",
      name: "Email Address",
      sortable: false,
      renderCell: (item) => item.email,
    },
    {
      uid: "age",
      name: "Age",
      sortable: true,
      renderCell: (item) => item.age,
    },
    {
      uid: "country",
      name: "Country",
      sortable: true,
      renderCell: (item) => item.country,
    },
  ];

  const initialVisibleColumns = ["name", "age", "email", "status"];

const getDayName = (date) => {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  return days[date.getDay()];
};

const getMonthName = (monthIndex) => {
  const months = [
    'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 
    'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
  ];
  return months[monthIndex];
};

const getFormattedDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = getMonthName(date.getMonth());
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

const generateTabs = () => {
  const tabs = [];
  for (let i = 0; i < 3; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    tabs.push({
      key: String(i + 1),
      label: `${getDayName(date)}, ${getFormattedDate(date)}`,
      children: 'Content of Tab Pane 1',
    //   children: `Content of Tab Pane ${i + 1}`,
    });
  }
  return tabs;
};

const PrakiraanCuacaLokasi = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(generateTabs());
  }, []);

  const onChange = (key) => {
    console.log(key);
  };

  return (
    <ContentSection title="Prakiraan Cuaca Lokasi" description={<p className='text-[14px] font-pt-sans'>Menampilkan prakiraan cuaca terkini berdasarkan lokasi yang dipilih.  Untuk informasi selengkapnya kunjungi <Link href="https://web-meteo.bmkg.go.id/id/?fromURL=www.bmkg.go.id" className='text-active font-semibold' target="_blank">website</Link> berikut.</p>}>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange}  />
    </ContentSection>
  );
};

export default PrakiraanCuacaLokasi;
