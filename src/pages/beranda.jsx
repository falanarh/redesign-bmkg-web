import { useRef } from "react";
import BerandaAtas from "../components/Fragments/BerandaAtas";
import BerandaBawah from "../components/Fragments/BerandaBawah";
import BerandaTengah from "../components/Fragments/BerandaTengah";
import Hero from "../components/Fragments/Hero";

export default function Beranda() {
  const berandaAtasRef = useRef(null);

  const scrollToBerandaAtas = () => {
    if (berandaAtasRef.current) {
      const offsetTop = berandaAtasRef.current.getBoundingClientRect().top + window.pageYOffset;
      const adjustedPosition = offsetTop - 110; // Adjust this value as needed
      window.scrollTo({ top: adjustedPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full overflow-x-hidden">
      <Hero scrollToBerandaAtas={scrollToBerandaAtas} />
      <div ref={berandaAtasRef} className="w-full h-full">
        <BerandaAtas />
      </div>
      <BerandaTengah />
      <BerandaBawah />
    </div>
  );
}
