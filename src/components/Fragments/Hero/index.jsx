import React, { useEffect, useState } from "react";
import { Parallax } from "react-parallax";
import { Button } from "@nextui-org/react";
import HeroPict from "../../Elements/HeroPict";
import { ForwardOutlined } from "@ant-design/icons";
import WorldMap from "../../../assets/images/world_map_blue6.png";
import { motion } from "framer-motion";

const Hero = ({ scrollToBerandaAtas }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  let heroPictSize = 400; // Default size for larger screens

  if (windowWidth <= 640) {
    heroPictSize = 300; // Adjust size for smaller screens
  }
  
  return (
    <Parallax className="w-full h-full" bgImage={WorldMap} strength={windowWidth <= 640 ? 400 : 300}>
      <div className="w-full min-h-screen flex flex-col sm:flex-row items-center justify-start overflow-hidden px-4 py-10 sm:py-16 lg:px-[10%] mt-16 relative sm:mt-0 xxl:px-[15vw] xxl:-mt-16">
        <motion.div
          className="z-10 mt-[5vh]"
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.5,
            type: "spring",
            stiffness: 60,
            duration: 1,
          }}
          ease="easeIn"
          viewport={{ once: true }}
        >
          <HeroPict size={heroPictSize} />
        </motion.div>
        <div className="z-10 flex flex-col items-center w-full sm:items-start mt-[50px] xxl:pl-10">
          <motion.h1
            className="px-4 text-xl font-bold leading-tight text-center sm:px-0 sm:text-left sm:text-2xl lg:text-3xl text-active font-pt-sans-caption"
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              type: "spring",
              stiffness: 60,
              duration: 1,
            }}
            ease="easeIn"
            viewport={{ once: true }}
          >
            Mengamati dan memahami fenomena meteorologi, klimatologi, kualitas
            udara dan geofisika.
          </motion.h1>
          <motion.h3
            className="px-4 mt-3 mb-5 text-sm font-medium leading-snug text-center sm:px-0 sm:text-left sm:text-base lg:text-lg font-pt-sans"
            initial={{ x: "100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.7,
              type: "spring",
              stiffness: 60,
              duration: 1,
            }}
            ease="easeIn"
            viewport={{ once: true }}
          >
            Menyediakan data, informasi, dan jasa meteorologi, klimatologi,
            kualitas udara, dan geofisika yang handal dan terpercaya.
          </motion.h3>
          <motion.div
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              delay: 0.9,
              type: "spring",
              stiffness: 60,
              duration: 1,
            }}
            ease="easeIn"
            viewport={{ once: true }}
          >
            <Button
              size="md"
              startContent={<ForwardOutlined className="text-2xl text-white sm:text-3xl" />}
              variant="shadow"
              className="w-[100px] sm:w-[130px] bg-active sm:mt-8"
              onPress={scrollToBerandaAtas}
            >
              <p className="text-sm font-semibold text-white sm:text-[18px] font-pt-sans">
                Mulai
              </p>
            </Button>
          </motion.div>
        </div>
      </div>
    </Parallax>
  );
};

export default Hero;
