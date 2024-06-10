import BerandaAtas from "../components/Fragments/BerandaAtas";
import BerandaBawah from "../components/Fragments/BerandaBawah";
import BerandaTengah from "../components/Fragments/BerandaTengah";
import Hero from "../components/Fragments/Hero";

export default function Beranda() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Hero />
      <BerandaAtas />
      <BerandaTengah />
      <BerandaBawah />
    </div>
  );
}
