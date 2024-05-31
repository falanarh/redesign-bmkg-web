/* eslint-disable react/jsx-key */
import { Carousel } from "antd";
import { Button } from "@nextui-org/react";
import WarningIcon from "../../../assets/icons/warning.png";
import ArrowIcon from "../../../assets/icons/arrow.png";

const contentStyle = {
  height: "100px",
  color: "#fff",
  lineHeight: "25px",
  textAlign: "center",
  background: "#fb923c",
};

const warningData = [
  {
    date: "Selasa, 12 Mei 2024",
    city: "Surabaya",
    warning:
      "Potensi hujan dengan guntur dan angin kencang di beberapa wilayah. Waspadai banjir lokal.",
  },
  {
    date: "Rabu, 13 Mei 2024",
    city: "Jakarta",
    warning:
      "Hujan lebat dengan angin kencang di beberapa wilayah. Hindari perjalanan tidak perlu.",
  },
  {
    date: "Kamis, 14 Mei 2024",
    city: "Bandung",
    warning: "Hujan sedang hingga lebat. Waspadai kilat dan angin kencang.",
  },
];

const EarlyWarning = () => {
  return (
    <Carousel autoplay>
      {warningData.map((data, index) => (
        <div key={index}>
          <div
            key={index}
            style={contentStyle}
            className="flex justify-center items-center"
          >
            <div className="flex justify-between items-end w-full max-w-[1280px] h-full pl-10 pr-6 pt-2 pb-2">
              <div className="flex flex-col justify-start items-start w-5/6 h-full">
                <div className="flex justify-center items-center">
                  <img
                    src={WarningIcon}
                    alt="Warning Icon"
                    className="w-[20px] h-[20px] mr-2"
                  />
                  <p className="font-bold text-sm/4 text-black my-1">
                    PERINGATAN DINI
                  </p>
                </div>
                <div className="flex flex-col items-start mt-2">
                  <p className="text-sm/3 font-bold">
                    {data.date} | {data.city}
                  </p>
                  <p className="text-sm text-left">{data.warning}</p>
                </div>
              </div>
              <Button
                  color="white"
                  variant="bordered"
                  size="sm"
                  startContent={
                    <img src={ArrowIcon} alt="Arrow Icon" className="size-6" />
                  }
                  className="w-[120px]"
                >
                  Selengkapnya
                </Button>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default EarlyWarning;
