import { Carousel, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import AlertIcon from "../../../assets/icons/AlertIcon.png";
import { useState } from "react";

const contentStyle = {
  height: "70px",
  color: "#000000",
  lineHeight: "25px",
  textAlign: "center",
  background: "#FEEBCB",
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
  const [showEarlyWarning, setShowEarlyWarning] = useState(true);

  const handleClose = () => {
    setShowEarlyWarning(false);
  };

  return showEarlyWarning ? (
    <Carousel autoplay>
      {warningData.map((data, index) => (
        <div key={index}>
          <div
            key={index}
            style={contentStyle}
            className="flex justify-center items-center relative"
          >
            <Button
              type="text"
              shape="circle"
              icon={<CloseOutlined />}
              className="absolute top-1 right-0 m-4"
              onClick={handleClose}
            />
            <div className="flex flex-col justify-center items-start w-full max-w-[1280px] h-full pl-10 pr-6 pt-2 pb-2">
              <img
                src={AlertIcon}
                alt="Warning Icon"
                className="size-[20px] absolute top-6 left-[100px]"
              />
              <p className="text-sm/3 font-bold">
                {data.date} | {data.city}
              </p>
              <p className="text-sm text-left">
                {data.warning}
                <span className="font-bold underline text-active cursor-pointer ml-1">
                  Selengkapnya
                </span>
              </p>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  ) : null;
};

export default EarlyWarning;
