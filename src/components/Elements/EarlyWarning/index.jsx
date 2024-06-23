import { Carousel, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import AlertIcon from "../../../assets/icons/AlertIcon.png";
import { useState } from "react";

const warningData = [
  {
    date: "Selasa, 12 Mei 2024",
    city: "Surabaya",
    warning: "Potensi hujan dengan guntur dan angin kencang di beberapa wilayah. Waspadai banjir lokal.",
  },
  {
    date: "Rabu, 13 Mei 2024",
    city: "Jakarta",
    warning: "Hujan lebat dengan angin kencang di beberapa wilayah. Hindari perjalanan tidak perlu.",
  },
  {
    date: "Kamis, 14 Mei 2024",
    city: "Bandung",
    warning: "Hujan sedang hingga lebat. Waspadai kilat dan angin kencang.",
  },
];

const EarlyWarning = ({ onClose }) => {
  const [showEarlyWarning, setShowEarlyWarning] = useState(true);

  const handleClose = () => {
    setShowEarlyWarning(false);
    onClose();
  };

  return showEarlyWarning ? (
    <Carousel autoplay>
      {warningData.map((data, index) => (
        <div key={index}>
          <div
            style={{ background: "#FEEBCB" }}
            className="relative flex items-center justify-center h-20 px-4 pt-2 pb-3 xxl:px-14"
          >
            <img
              src={AlertIcon}
              alt="Warning Icon"
              className="w-4 h-4 mr-3 sm:w-6 sm:h-6"
            />
            <div className="flex flex-col justify-center items-start w-full max-w-[1220px]">
              <p className="text-xs font-bold sm:text-sm">
                {data.date} | {data.city}
              </p>
              <p className="text-xs text-left sm:text-sm">
                {data.warning}
                <span className="ml-1 font-bold underline cursor-pointer text-active">
                  Selengkapnya
                </span>
              </p>
            </div>
            <Button
              type="text"
              shape="circle"
              icon={<CloseOutlined />}
              onClick={handleClose}
            />
          </div>
        </div>
      ))}
    </Carousel>
  ) : null;
};

export default EarlyWarning;
