import { Carousel, Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import AlertIcon from "../../../assets/icons/AlertIcon.png";
import { useState } from "react";

const warningData = [
  {
    date: "Kamis, 27 Juni 2024",
    city: "Surabaya",
    warning:
      "Potensi hujan dengan guntur dan angin kencang di beberapa wilayah. Waspada terhadap banjir lokal.",
  },
  {
    date: "Kamis, 27 Juni 2024",
    city: "Jakarta",
    warning:
      "Hujan lebat dengan angin kencang di beberapa wilayah. Hindari perjalanan yang tidak perlu.",
  },
  {
    date: "Kamis, 27 Juni 2024",
    city: "Bandung",
    warning: "Hujan sedang hingga lebat. Waspada kilat dan angin kencang.",
  },
  {
    date: "Kamis, 27 Juni 2024",
    city: "Medan",
    warning:
      "Hujan ringan dengan potensi guntur. Lebih baik berada di dalam ruangan jika memungkinkan.",
  },
  {
    date: "Kamis, 27 Juni 2024",
    city: "Semarang",
    warning:
      "Hujan dengan intensitas yang tidak merata dan potensi banjir lokal. Gunakan kewaspadaan saat bepergian.",
  },
  {
    date: "Kamis, 27 Juni 2024",
    city: "Makassar",
    warning:
      "Cuaca hujan dengan sesekali guntur. Siapkan diri untuk kondisi basah.",
  },
  {
    date: "Kamis, 27 Juni 2024",
    city: "Yogyakarta",
    warning:
      "Hujan dengan angin kencang. Ambil tindakan pencegahan yang diperlukan di luar ruangan.",
  },
  {
    date: "Kamis, 27 Juni 2024",
    city: "Palembang",
    warning:
      "Hujan dan guntur di beberapa wilayah. Tetap waspada terhadap perubahan kondisi cuaca.",
  },
  {
    date: "Kamis, 27 Juni 2024",
    city: "Balikpapan",
    warning:
      "Perkiraan hujan dengan potensi guntur. Rencanakan aktivitas dengan baik.",
  },
  {
    date: "Kamis, 27 Juni 2024",
    city: "Padang",
    warning:
      "Hujan ringan dengan potensi guntur. Tetap update informasi cuaca.",
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
