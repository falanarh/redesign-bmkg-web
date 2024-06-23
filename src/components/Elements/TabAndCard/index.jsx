/* eslint-disable react/prop-types */
import { useState } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { Card, CardBody, CardFooter, Stack, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.css";
import InfoTerbaru from "../../../assets/icons/Sent.png";
import BeritaTerbaru from "../../../assets/icons/News.png";
import PengumumanTerbaru from "../../../assets/icons/Microphone.png";
import Panah from "../../../assets/icons/panah.png";
import Twitter from "../../../assets/icons/TwitterBiruMuda.png";
import WhatsApp from "../../../assets/icons/WhatsAppHIjau.png";
import { informasi, berita, siaran_pers } from "./data";
import { Link } from "react-router-dom";

const TabContent = ({
  data,
  hoveredIndex,
  handleCardHover,
  handleCardUnhover,
}) => {
  return (
    <Swiper
      modules={[Navigation, Autoplay, Pagination, A11y]}
      spaceBetween={15}
      // slidesPerView={4}
      navigation={true}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      // pagination={{ clickable: true }}
      className="p-8"
      style={{
        "--swiper-navigation-color": "#1C2B78",
        "--swiper-pagination-color": "#1C2B78",
        "--swiper-navigation-size": "35px",
      }}
      breakpoints={{
        300: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        // 768: {
        //   slidesPerView: 4,
        //   spaceBetween: 40,
        // },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
      }}
    >
      {data.map((item, index) => (
        <SwiperSlide key={index}>
        <Card
            maxW="250px"
            className="h-full transition-transform transform rounded-lg hover:scale-105 hover:shadow-lg"
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardUnhover}
          >
            <CardBody>
              <img
                src={item.image}
                alt=""
                className="w-full h-[140px] rounded-xl object-cover"
              />
              <Stack mt="4" spacing="3">
                <div className="flex justify-between">
                  <p className="text-sm font-bold">{item.title}</p>
                  <p className="text-xs text-gray-500">{item.date}</p>
                </div>
                <Text className="text-xs text-gray-600">{item.content}</Text>
              </Stack>
            </CardBody>
            <CardFooter className="flex items-center justify-between">
              <div className="flex items-center">
                <Link to={item.link}>
                  <p className="mr-1 text-xs text-blue-500 cursor-pointer">
                    Selengkapnya
                  </p>
                </Link>
                <img className="w-3 h-3" src={Panah} alt="Panah" />
              </div>
              <div className="flex items-center space-x-2">
                <img
                  className={`w-8 h-8 cursor-pointer ${
                    hoveredIndex === index ? "" : "grayscale"
                  }`}
                  src={WhatsApp}
                  alt="WhatsApp"
                />
                <img
                  className={`w-8 h-8 cursor-pointer ${
                    hoveredIndex === index ? "" : "grayscale"
                  }`}
                  src={Twitter}
                  alt="Twitter"
                />
              </div>
            </CardFooter>
          </Card>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default function TabAndCard() {
  const [selected, setSelected] = useState("informasi");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleCardHover = (index) => {
    setHoveredIndex(index);
  };

  const handleCardUnhover = () => {
    setHoveredIndex(null);
  };

  const tabs = [
    {
      key: "informasi",
      title: "Informasi Terbaru",
      icon: InfoTerbaru,
      data: informasi,
    },
    {
      key: "berita",
      title: "Berita Terbaru",
      icon: BeritaTerbaru,
      data: berita,
    },
    {
      key: "siaran_pers",
      title: "Siaran Pers Terbaru",
      icon: PengumumanTerbaru,
      data: siaran_pers,
    },
  ];

  return (
    <Tabs
      aria-label="Options"
      color="primary"
      variant="bordered"
      selectedKey={selected}
      onSelectionChange={setSelected}
      className="justify-center w-full"
    >
      {tabs.map((tab) => (
        <Tab
          className="flex"
          key={tab.key}
          title={
            <div
              className="flex items-center justify-center space-x-2"
              style={{ width: "180px" }}
            >
              <img className="size-[28px]" src={tab.icon} alt={tab.title} />
              <span>{tab.title}</span>
            </div>
          }
        >
          <TabContent
            data={tab.data}
            hoveredIndex={hoveredIndex}
            handleCardHover={handleCardHover}
            handleCardUnhover={handleCardUnhover}
          />
        </Tab>
      ))}
    </Tabs>
  );
}
