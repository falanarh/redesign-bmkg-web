import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import InfoTerbaru from "../../../assets/icons/Sent.png";
import BeritaTerbaru from "../../../assets/icons/News.png";
import ArtikelTerbaru from "../../../assets/icons/Document.png";
import PengumumanTerbaru from "../../../assets/icons/Microphone.png";
import Berita from "../../../assets/images/berita.png";
import Berita1 from "../../../assets/images/berita1.png";
import Berita2 from "../../../assets/images/berita2.jpeg";
import Berita3 from "../../../assets/images/berita3.jpeg";
import Berita4 from "../../../assets/images/berita4.jpeg";
import Pengumuman from "../../../assets/images/Pengumuman.png";
import Pengumuman1 from "../../../assets/images/pengumuman1.jpeg";
import Pengumuman2 from "../../../assets/images/pengumuman2.jpeg";
import Pengumuman3 from "../../../assets/images/pengumuman3.jpeg";
import Pengumuman4 from "../../../assets/images/pengumuman4.jpeg";
import Artikel from "../../../assets/images/Artikel.png";
import Artikel1 from "../../../assets/images/artikel1.jpeg";
import Artikel2 from "../../../assets/images/artikel2.jpeg";
import Artikel3 from "../../../assets/images/artikel3.jpeg";
import Artikel4 from "../../../assets/images/artikel4.jpeg";
import Panah from "../../../assets/icons/panah.png";
import Twitter from "../../../assets/icons/TwitterBiruMuda.png";
import WhatsApp from "../../../assets/icons/WhatsAppHIjau.png";
import { Card, CardBody, CardFooter, Stack, Text } from "@chakra-ui/react";

// import Swiper core and required modules
import { Navigation, Autoplay, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const informasi = [
  {
    image: Berita,
    title: "Berita BMKG",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Pengumuman,
    title: "Pengumuman",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Artikel,
    title: "Artikel",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Berita1,
    title: "Berita BMKG",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Artikel1,
    title: "Artikel",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Berita2,
    title: "Berita BMKG",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Pengumuman1,
    title: "Pengumuman",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Pengumuman2,
    title: "Pengumuman",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Artikel2,
    title: "Artikel",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Artikel3,
    title: "Artikel",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Pengumuman3,
    title: "Pengumuman",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Artikel4,
    title: "Artikel",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Berita3,
    title: "Berita BMKG",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Berita4,
    title: "Berita BMKG",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Pengumuman4,
    title: "Pengumuman",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
];

const berita = [
  {
    image: Berita,
    title: "Berita BMKG",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Berita1,
    title: "Berita BMKG",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Berita2,
    title: "Berita BMKG",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Berita3,
    title: "Berita BMKG",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Berita4,
    title: "Berita BMKG",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
];

const artikel = [
  {
    image: Artikel,
    title: "Artikel",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Artikel1,
    title: "Artikel",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Artikel2,
    title: "Artikel",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Artikel3,
    title: "Artikel",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Artikel4,
    title: "Artikel",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
];

const pengumuman = [
  {
    image: Pengumuman,
    title: "Pengumuman",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Pengumuman1,
    title: "Pengumuman",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Pengumuman2,
    title: "Pengumuman",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Pengumuman3,
    title: "Pengumuman",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
  {
    image: Pengumuman4,
    title: "Pengumuman",
    date: "23-04-2024",
    content: "Siswa North Jakarta International School Menjelajah Dunia BMKG",
  },
];

export default function TabAndCard() {
  const [selected, setSelected] = React.useState("informasi");

  return (
    <Tabs
      aria-label="Options"
      color="primary"
      variant="bordered"
      selectedKey={selected}
      onSelectionChange={setSelected}
    >
      <Tab
        className="flex"
        key="informasi"
        title={
          <div
            className="flex items-center justify-center space-x-2"
            style={{ width: "180px" }}
          >
            <img
              className="size-[28px]"
              src={InfoTerbaru}
              alt="Informasi Terbaru"
            />
            <span>Informasi Terbaru</span>
          </div>
        }
      >
        <Swiper
          // install Swiper modules
          modules={[Navigation, Autoplay, Pagination, A11y]}
          spaceBetween={15}
          slidesPerView={4}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="p-8"
        >
          {informasi.map((item, index) => (
            <SwiperSlide key={index}>
              <Card maxW="250px" style={{ borderRadius: "18px" }}>
                <CardBody>
                  <img src={item.image} alt="" className="w-[284px] h-[140px] rounded-xl" />
                  <Stack mt="6" spacing="3">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: "14px" }} className="font-bold">
                        {item.title}
                      </p>
                      <p style={{ fontSize: "12px" }} className="text-graytext">
                        {item.date}
                      </p>
                    </div>
                    <Text
                      style={{ fontSize: "12px" }}
                      className="text-tertiary"
                    >
                      {item.content}
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <div className="flex justify-between">
                    <div className="flex items-center mr-14">
                      <p
                        style={{ fontSize: "12px" }}
                        className="text-xm mr-1 text-fouthtiary"
                      >
                        Selengkapnya
                      </p>
                      <img className="w-[12px] h-[10px]" src={Panah} alt="" />
                    </div>
                    <div className="flex items-center ">
                      <img
                        className="w-[31px] h-[31px] mr-2"
                        src={WhatsApp}
                        alt=""
                      />
                      <img className="w-[31px] h-[31px]" src={Twitter} alt="" />
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Tab>

      <Tab
        className="flex"
        key="berita"
        title={
          <div
            className="flex items-center justify-center space-x-2"
            style={{ width: "180px" }}
          >
            <img
              className="size-[28px]"
              src={BeritaTerbaru}
              alt="Berita Terbaru"
            />
            <span>Berita Terbaru</span>
          </div>
        }
      >
        <Swiper
          // install Swiper modules
          modules={[Navigation, Autoplay, Pagination, A11y]}
          spaceBetween={15}
          slidesPerView={4}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="p-8"
        >
          {berita.map((item, index) => (
            <SwiperSlide key={index}>
              <Card maxW="250px" style={{ borderRadius: "18px" }}>
                <CardBody>
                  <img src={item.image} alt="" className="w-[284px] h-[162]" />
                  <Stack mt="6" spacing="3">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: "14px" }} className="font-bold">
                        {item.title}
                      </p>
                      <p style={{ fontSize: "12px" }} className="text-graytext">
                        {item.date}
                      </p>
                    </div>
                    <Text
                      style={{ fontSize: "12px" }}
                      className="text-tertiary"
                    >
                      {item.content}
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <div className="flex justify-between">
                    <div className="flex items-center mr-14">
                      <p
                        style={{ fontSize: "12px" }}
                        className="text-xm mr-1 text-fouthtiary"
                      >
                        Selengkapnya
                      </p>
                      <img className="w-[12px] h-[10px]" src={Panah} alt="" />
                    </div>
                    <div className="flex items-center ">
                      <img
                        className="w-[31px] h-[31px] mr-2"
                        src={WhatsApp}
                        alt=""
                      />
                      <img className="w-[31px] h-[31px]" src={Twitter} alt="" />
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Card maxW="250px" style={{ borderRadius: "18px"}}>
          <CardBody>
            <img src={Berita} alt="" className="w-[232px] h-[133]" />
            <Stack mt="6" spacing="3">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontSize: "16px" }} className="font-bold">
                  Berita BMKG
                </p>
                <p style={{ fontSize: "14px" }} className="text-graytext">
                  23-04-2024
                </p>
              </div>

              <Text style={{ fontSize: "14px" }} className="text-tertiary">
                Siswa North Jakarta International School Menjelajah Dunia BMKG
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <div className="flex justify-between">
              <div className="flex items-center mr-14">
                <p style={{ fontSize: "14px" }} className="text-xm mr-1 text-fouthtiary">
                  Selengkapnya
                </p>
                <img className="w-[12px] h-[10px]" src={Panah} alt="" />
              </div>
              <div className="flex items-center ">
                <img className="w-[31px] h-[31px] mr-2" src={WhatsApp} alt="" />
                <img className="w-[31px] h-[31px]" src={Twitter} alt="" />
              </div>
            </div>
          </CardFooter>
        </Card>

        <Card maxW="250px" style={{ borderRadius: "18px"}}>
          <CardBody>
            <img src={Berita} alt="" className="w-[232px] h-[133]" />
            <Stack mt="6" spacing="3">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontSize: "16px" }} className="font-bold">
                  Berita BMKG
                </p>
                <p style={{ fontSize: "14px" }} className="text-graytext">
                  23-04-2024
                </p>
              </div>

              <Text style={{ fontSize: "14px" }} className="text-tertiary">
                Siswa North Jakarta International School Menjelajah Dunia BMKG
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <div className="flex justify-between">
              <div className="flex items-center mr-14">
                <p style={{ fontSize: "14px" }} className="text-xm mr-1 text-fouthtiary">
                  Selengkapnya
                </p>
                <img className="w-[12px] h-[10px]" src={Panah} alt="" />
              </div>
              <div className="flex items-center ">
                <img className="w-[31px] h-[31px] mr-2" src={WhatsApp} alt="" />
                <img className="w-[31px] h-[31px]" src={Twitter} alt="" />
              </div>
            </div>
          </CardFooter>
        </Card>

        <Card maxW="250px" style={{ borderRadius: "18px"}}>
          <CardBody>
            <img src={Berita1} alt="" className="w-[232px] h-[133]" />
            <Stack mt="6" spacing="3">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontSize: "16px" }} className="font-bold">
                  Berita BMKG
                </p>
                <p style={{ fontSize: "14px" }} className="text-graytext">
                  23-04-2024
                </p>
              </div>

              <Text style={{ fontSize: "14px" }} className="text-tertiary">
                Siswa North Jakarta International School Menjelajah Dunia BMKG
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <div className="flex justify-between">
              <div className="flex items-center mr-14">
                <p style={{ fontSize: "14px" }} className="text-xm mr-1 text-fouthtiary">
                  Selengkapnya
                </p>
                <img className="w-[12px] h-[10px]" src={Panah} alt="" />
              </div>
              <div className="flex items-center ">
                <img className="w-[31px] h-[31px] mr-2" src={WhatsApp} alt="" />
                <img className="w-[31px] h-[31px]" src={Twitter} alt="" />
              </div>
            </div>
          </CardFooter>
        </Card> */}
      </Tab>

      <Tab
        className="flex"
        key="artikel"
        title={
          <div
            className="flex items-center justify-center space-x-2"
            style={{ width: "180px" }}
          >
            <img
              className="size-[28px]"
              src={ArtikelTerbaru}
              alt="Artikel Terbaru"
            />
            <span>Artikel Terbaru</span>
          </div>
        }
      >
        <Swiper
          // install Swiper modules
          modules={[Navigation, Autoplay, Pagination, A11y]}
          spaceBetween={15}
          slidesPerView={4}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="p-8"
        >
          {artikel.map((item, index) => (
            <SwiperSlide key={index}>
              <Card maxW="250px" style={{ borderRadius: "18px" }}>
                <CardBody>
                  <img src={item.image} alt="" className="w-[284px] h-[162]" />
                  <Stack mt="6" spacing="3">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: "14px" }} className="font-bold">
                        {item.title}
                      </p>
                      <p style={{ fontSize: "12px" }} className="text-graytext">
                        {item.date}
                      </p>
                    </div>
                    <Text
                      style={{ fontSize: "12px" }}
                      className="text-tertiary"
                    >
                      {item.content}
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <div className="flex justify-between">
                    <div className="flex items-center mr-14">
                      <p
                        style={{ fontSize: "12px" }}
                        className="text-xm mr-1 text-fouthtiary"
                      >
                        Selengkapnya
                      </p>
                      <img className="w-[12px] h-[10px]" src={Panah} alt="" />
                    </div>
                    <div className="flex items-center ">
                      <img
                        className="w-[31px] h-[31px] mr-2"
                        src={WhatsApp}
                        alt=""
                      />
                      <img className="w-[31px] h-[31px]" src={Twitter} alt="" />
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Card maxW="250px" style={{ borderRadius: "18px" }}>
          <CardBody>
            <img src={Artikel} alt="" className="w-[232px] h-[133]" />
            <Stack mt="6" spacing="3">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontSize: "16px" }} className="font-bold">
                  Artikel
                </p>
                <p style={{ fontSize: "14px" }} className="text-graytext">
                  23-04-2024
                </p>
              </div>

              <Text style={{ fontSize: "14px" }} className="text-tertiary">
                Siswa North Jakarta International School Menjelajah Dunia BMKG
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <div className="flex justify-between">
              <div className="flex items-center mr-14">
                <p style={{ fontSize: "14px" }} className="text-xm mr-1 text-fouthtiary">
                  Selengkapnya
                </p>
                <img className="w-[12px] h-[10px]" src={Panah} alt="" />
              </div>
              <div className="flex items-center ">
                <img className="w-[31px] h-[31px] mr-2" src={WhatsApp} alt="" />
                <img className="w-[31px] h-[31px]" src={Twitter} alt="" />
              </div>
            </div>
          </CardFooter>
        </Card> */}
      </Tab>

      <Tab
        className="flex"
        key="pengumaman"
        title={
          <div
            className="flex items-center justify-center space-x-2"
            style={{ width: "180px" }}
          >
            <img
              className="size-[28px]"
              src={PengumumanTerbaru}
              alt="Pengumuman Terbaru"
            />
            <span>Pengumuman Terbaru</span>
          </div>
        }
      >
        <Swiper
          // install Swiper modules
          modules={[Navigation, Autoplay, Pagination, A11y]}
          spaceBetween={15}
          slidesPerView={4}
          navigation={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          className="p-8"
        >
          {pengumuman.map((item, index) => (
            <SwiperSlide key={index}>
              <Card maxW="250px" style={{ borderRadius: "18px" }}>
                <CardBody>
                  <img src={item.image} alt="" className="w-[284px] h-[162]" />
                  <Stack mt="6" spacing="3">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <p style={{ fontSize: "14px" }} className="font-bold">
                        {item.title}
                      </p>
                      <p style={{ fontSize: "12px" }} className="text-graytext">
                        {item.date}
                      </p>
                    </div>
                    <Text
                      style={{ fontSize: "12px" }}
                      className="text-tertiary"
                    >
                      {item.content}
                    </Text>
                  </Stack>
                </CardBody>
                <CardFooter>
                  <div className="flex justify-between">
                    <div className="flex items-center mr-14">
                      <p
                        style={{ fontSize: "12px" }}
                        className="text-xm mr-1 text-fouthtiary"
                      >
                        Selengkapnya
                      </p>
                      <img className="w-[12px] h-[10px]" src={Panah} alt="" />
                    </div>
                    <div className="flex items-center ">
                      <img
                        className="w-[31px] h-[31px] mr-2"
                        src={WhatsApp}
                        alt=""
                      />
                      <img className="w-[31px] h-[31px]" src={Twitter} alt="" />
                    </div>
                  </div>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <Card maxW="250px" style={{ borderRadius: "18px" }}>
          <CardBody>
            <img src={Pengumuman} alt="" className="w-[232px] h-[133]" />
            <Stack mt="6" spacing="3">
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontSize: "16px" }} className="font-bold">
                  Pengumuman
                </p>
                <p style={{ fontSize: "14px" }} className="text-graytext">
                  23-04-2024
                </p>
              </div>

              <Text style={{ fontSize: "14px" }} className="text-tertiary">
                Siswa North Jakarta International School Menjelajah Dunia BMKG
              </Text>
            </Stack>
          </CardBody>
          <CardFooter>
            <div className="flex justify-between">
              <div className="flex items-center mr-14">
                <p style={{ fontSize: "14px" }} className="text-xm mr-1  text-fouthtiary">
                  Selengkapnya
                </p>
                <img className="w-[12px] h-[10px]" src={Panah} alt="" />
              </div>
              <div className="flex items-center ">
                <img className="w-[31px] h-[31px] mr-2" src={WhatsApp} alt="" />
                <img className="w-[31px] h-[31px]" src={Twitter} alt="" />
              </div>
            </div>
          </CardFooter>
        </Card> */}
      </Tab>
    </Tabs>
  );
}
