import React from "react";
import { Tabs, Tab } from "@nextui-org/react";
import InfoTerbaru from "../../../assets/icons/Sent.png";
import BeritaTerbaru from "../../../assets/icons/News.png";
import ArtikelTerbaru from "../../../assets/icons/Document.png";
import PengumumanTerbaru from "../../../assets/icons/Microphone.png";
import Berita from "../../../assets/images/Berita BMKG.png";
import Berita1 from "../../../assets/images/Berita BMKG 1.png";
import Pengumuman from "../../../assets/images/Pengumuman.png";
import Artikel from "../../../assets/images/Artikel.png";
import Panah from "../../../assets/icons/panah.png";
import Twitter from "../../../assets/icons/TwitterBiruMuda.png";
import WhatsApp from "../../../assets/icons/WhatsAppHIjau.png";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  ButtonGroup,
  Button,
  Divider,
} from "@chakra-ui/react";

import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const data = [
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
];

export default function TabAndCard() {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
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
        

        {data.map((item, index) => (
          <div key={index}>
            <Card
              maxW="272px"
              style={{ borderRadius: "18px", margin: "0 15px" }}
            >
              <CardBody>
                <img src={item.image} alt="" className="w-[284px] h-[162]" />
                <Stack mt="6" spacing="3">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <p style={{ fontSize: "16px" }} className="font-bold">
                      {item.title}
                    </p>
                    <p style={{ fontSize: "14px" }} className="text-graytext">
                      {item.date}
                    </p>
                  </div>
                  <Text style={{ fontSize: "14px" }} className="text-tertiary">
                    {item.content}
                  </Text>
                </Stack>
              </CardBody>
              <CardFooter>
                <div className="flex justify-between">
                  <div className="flex items-center mr-14">
                    <p className="text-xm font-semibold mr-1 text-fouthtiary">
                      Read More
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
          </div>
        ))}
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
        <Card maxW="272px" style={{ borderRadius: "18px", margin: "0 15px" }}>
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
                <p className="text-xm font-semibold mr-1 text-fouthtiary">
                  Read More
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

        <Card maxW="272px" style={{ borderRadius: "18px", margin: "0 15px" }}>
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
                <p className="text-xm font-semibold mr-1 text-fouthtiary">
                  Read More
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
        <Card maxW="272px" style={{ borderRadius: "18px", margin: "0 15px" }}>
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
                <p className="text-xm font-semibold mr-1 text-fouthtiary">
                  Read More
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
        <Card maxW="272px" style={{ borderRadius: "18px", margin: "0 15px" }}>
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
                <p className="text-xm font-semibold mr-1  text-fouthtiary">
                  Read More
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
      </Tab>
    </Tabs>
  );
}
