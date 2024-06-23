import { motion } from "framer-motion";
import Gedung from "../../../assets/images/hero_bmkg/gedung.png";
import Logo from "../../../assets/images/hero_bmkg/logo.png";
import B from "../../../assets/images/hero_bmkg/b_up.png";
import M from "../../../assets/images/hero_bmkg/m_up.png";
import K from "../../../assets/images/hero_bmkg/k_up.png";
import G from "../../../assets/images/hero_bmkg/g_up.png";
import BirdsGif from "../../../assets/images/hero_bmkg/birds_gif.gif";
import CloudC from "../../../assets/images/hero_bmkg/cloud_c.png";
import CloudB from "../../../assets/images/hero_bmkg/cloud_b.png";
import { useEffect, useState } from "react";

const HeroPict = ({ size }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  let bottomPosition = size * -0.03; // Default bottom position

  // Adjust bottom position based on thresholdWidth and thresholdHeight
  if (windowWidth <= 450 && windowHeight <= 897) {
    bottomPosition = size * -0.07;
  }
  
  if (windowWidth <= 450 && windowHeight <= 700) {
    bottomPosition = size * -0.1;
  }

  // Adjust bottom position for very small screens
  // if (windowWidth <= 460) {
  //   bottomPosition = size * -0.1;
  // }

  
  const cloudWidth = size * 0.6;
  const cloudHeight = size * 0.35;
  const birdSize = size * 0.2;
  const gedungWidth = size;
  const gedungHeight = size * 0.83;
  const logoWidth = size * 0.67;
  const logoHeight = size * 0.58;
  const letterSize = size * 0.3;
  const fontSize = size * 0.028;

  return (
    <div style={{ width: size, height: size }} className="relative">
      <motion.img
        src={CloudC}
        style={{ width: cloudWidth, height: cloudHeight, top: -size * 0.05, left: 0 }}
        className="absolute z-2"
        alt="Logo BMKG"
        animate={{ x: [0, size * 0.25] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />
      <motion.img
        src={CloudB}
        style={{ width: cloudWidth, height: cloudHeight, top: size * 0.32, right: size * 0.3 }}
        className="absolute z-20"
        alt="Logo BMKG"
        animate={{ x: [size * 0.25, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />
      <img
        src={BirdsGif}
        style={{ width: birdSize, height: birdSize, top: size * 0.01, right: size * 0.2 }}
        className="absolute z-12"
        alt="Logo BMKG"
      />
      <img
        src={Gedung}
        style={{ width: gedungWidth, height: gedungHeight, top: size * 0.1, left: 0 }}
        className="absolute z-10"
        alt="Gedung BMKG"
      />
      <img
        src={Logo}
        style={{ width: logoWidth, height: logoHeight, top: size * 0.2, left: -size * 0.1 }}
        className="absolute z-0"
        alt="Logo BMKG"
      />
      <motion.img
        src={B}
        style={{ width: letterSize, height: letterSize, top: size * 0.2, left: size * 0.1 }}
        className="absolute z-2"
        alt="Logo BMKG"
        animate={{ rotate: [-12, -8, -12] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      <motion.img
        src={M}
        style={{ width: letterSize, height: letterSize, top: size * 0.2, right: size * 0.1 }}
        className="absolute z-2"
        alt="Logo BMKG"
        animate={{ rotate: [12, 8, 12] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      <motion.img
        src={K}
        style={{ width: letterSize, height: letterSize, bottom: size * 0.2, left: size * 0.1 }}
        className="absolute z-[12]"
        alt="Logo BMKG"
        animate={{ rotate: [-15, -10, -15] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      <motion.img
        src={G}
        style={{ width: letterSize, height: letterSize, bottom: size * 0.2, right: size * 0.1 }}
        className="absolute z-[12]"
        alt="Logo BMKG"
        animate={{ rotate: [15, 10, 15] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      />
      <p
        style={{ fontSize: fontSize, width: size * 0.8, left: size * 0.1, bottom: bottomPosition }}
        className="absolute font-semibold leading-4 text-center"
      >
        "Pelayanan informasi meteorologi, klimatologi, dan geofisika secara luas, cepat, tepat, akurat, dan mudah dipahami"
      </p>
    </div>
  );
};

export default HeroPict;