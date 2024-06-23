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
import ArtikelTerbaru from "../../../assets/icons/Document.png";
import PengumumanTerbaru from "../../../assets/icons/Microphone.png";
import Panah from "../../../assets/icons/panah.png";
import Twitter from "../../../assets/icons/TwitterBiruMuda.png";
import WhatsApp from "../../../assets/icons/WhatsAppHIjau.png";
import { informasi, berita, artikel, pengumuman } from "./data";

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
      pagination={{ clickable: true }}
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
            style={{ borderRadius: "18px" }}
            className="transition-transform transform hover:scale-105 hover:shadow-lg"
            onMouseEnter={() => handleCardHover(index)}
            onMouseLeave={handleCardUnhover}
          >
            <CardBody>
              <img
                src={item.image}
                alt=""
                className="w-[284px] h-[140px] rounded-xl"
              />
              <Stack mt="6" spacing="3">
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <p style={{ fontSize: "14px" }} className="font-bold">
                    {item.title}
                  </p>
                  <p style={{ fontSize: "12px" }} className="text-graytext">
                    {item.date}
                  </p>
                </div>
                <Text style={{ fontSize: "12px" }} className="text-tertiary">
                  {item.content}
                </Text>
              </Stack>
            </CardBody>
            <CardFooter>
              <div className="flex justify-between">
                <div className="flex items-center mr-14">
                  <p
                    style={{ fontSize: "12px" }}
                    className="mr-1 cursor-pointer text-xm text-fouthtiary"
                  >
                    Selengkapnya
                  </p>
                  <img className="w-[12px] h-[10px]" src={Panah} alt="" />
                </div>
                <div className="flex items-center">
                  <img
                    className={`w-[31px] h-[31px] mr-2 cursor-pointer ${
                      hoveredIndex === index ? "" : "grayscale"
                    }`}
                    src={WhatsApp}
                    alt=""
                  />
                  <img
                    className={`w-[31px] h-[31px] cursor-pointer ${
                      hoveredIndex === index ? "" : "grayscale"
                    }`}
                    src={Twitter}
                    alt=""
                  />
                </div>
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
      key: "artikel",
      title: "Artikel Terbaru",
      icon: ArtikelTerbaru,
      data: artikel,
    },
    {
      key: "pengumuman",
      title: "Pengumuman Terbaru",
      icon: PengumumanTerbaru,
      data: pengumuman,
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
