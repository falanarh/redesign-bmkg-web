import { Parallax } from "react-parallax";
import { Button } from "@nextui-org/react";
import HeroPict from "../../Elements/HeroPict";
import { ForwardOutlined } from "@ant-design/icons";
import WorldMap from "../../../assets/images/world_map_blue6.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Parallax className="w-full h-full" bgImage={WorldMap} strength={300}>
      <div className="w-full h-screen flex items-start justify-center overflow-hidden p-[2%] xl:p-[10%] relative">
        <motion.div
          className="ml-[50px] z-10"
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
          <HeroPict size={400} />
        </motion.div>
        <div className="w-full h-full flex flex-col ml-[80px] mt-[20px] z-10">
          <motion.h1
            className="text-3xl text-active font-pt-sans-caption font-bold leading-10"
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
            className="text-base font-pt-sans font-[500] leading-6 my-5"
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
              startContent={<ForwardOutlined className="text-3xl text-white" />}
              variant="shadow"
              className="w-[130px] bg-active mt-5"
            >
              <p className="text-[18px] font-pt-sans font-semibold text-white">
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
