import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./index.css";
import { useRef, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import Iklim from "../../../assets/icons/iklim.png";
import HariTanpaHujan from "../../../assets/icons/hari_tanpa_hujan.jpg";
import CitraSatelit from "../../../assets/icons/citra_satelit.png";
import PrakiraanTinggiGelombang from "../../../assets/icons/prakiraan_tinggi_gelombang.png";
import PrakiraanAngin from "../../../assets/icons/prakiraan_angin.jpg";
import KebakaranHutan from "../../../assets/icons/kebakaran_hutan.png";

const slides = [
  {
    src: Iklim,
    title: "Informasi Iklim",
  },
  {
    src: HariTanpaHujan,
    title: "Hari Tanpa Hujan",
  },
  {
    src: CitraSatelit,
    title: "Citra Satelit",
  },
  {
    src: PrakiraanTinggiGelombang,
    title: "Prakiraan Tinggi Gelombang",
  },
  {
    src: PrakiraanAngin,
    title: "Prakiraan Angin",
  },
  {
    src: KebakaranHutan,
    title: "Potensi Kebakaran Hutan",
  },
];

const MapSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [modalData, setModalData] = useState(null);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const swiperRef = useRef(null);

  const handleMouseEnter = (index) => {
    setIsHovered(true);
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setHoveredIndex(null);
  };

  const handleOpen = (slide) => {
    swiperRef.current.swiper.autoplay.stop();
    setModalData(slide);
    onOpen();
  };

  const handleClose = () => {
    swiperRef.current.swiper.autoplay.start();
    onOpenChange(false);
    setModalData(null);
  };

  return (
    <div>
      <Swiper
        ref={swiperRef}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 350,
          modifier: 1,
          slideShadows: false,
        }}
        navigation={true}
        spaceBetween={150}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="h-[400px] w-[500px] relative"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`static top-0 left-0 w-full mb-6 text-2xl font-bold text-center text-active uppercase ${
                index === activeIndex
                  ? "visible animate-slideDown"
                  : "invisible"
              }`}
            >
              {slide.title}
            </div>
            <img
              src={slide.src}
              className="object-cover w-full h-full"
              alt={`Slide ${index + 1}`}
            />
            {index === activeIndex && isHovered && hoveredIndex === index && (
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 p-4 flex justify-center items-center bg-white bg-opacity-60 rounded-lg transition-all w-full h-full">
                <Button onPress={() => handleOpen(slide)} color="primary">
                  <p className="text-lg font-pt-sans font-bold">Lihat Detail</p>
                </Button>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <Modal isOpen={isOpen} onOpenChange={handleClose} isDismissable={false} size="4xl">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 font-pt-sans-caption font-bold text-xl text-center uppercase">
                {modalData?.title}
              </ModalHeader>
              <ModalBody>
                <img src={modalData?.src} alt={modalData?.title} className="object-cover w-full h-full" />
              </ModalBody>
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default MapSlider;