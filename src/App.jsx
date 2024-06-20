/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import EarlyWarning from "./components/Elements/EarlyWarning";
import NavbarSection from "./components/Layouts/NavbarSection";
import SideFooter from "./components/Layouts/SideFooter";
import Beranda from "./pages/beranda";
import Cuaca from "./pages/cuaca";
import GempaBumi from "./pages/gempabumi";
import Profil from "./pages/profil";
import Artikel from "./components/Fragments/Artikel";
import { NextUIProvider } from "@nextui-org/react";
import Iklim from "./pages/iklim";

export default function App() {
  const navigate = useNavigate();
  const [isEarlyWarningVisible, setIsEarlyWarningVisible] = useState(true);

  return (
    <NextUIProvider navigate={navigate}>
      <div className="relative">
        <div className={`fixed top-0 left-0 right-0 z-50 ${!isEarlyWarningVisible && "shadow-md"}`}>
          <NavbarSection />
          {isEarlyWarningVisible && <EarlyWarning onClose={() => setIsEarlyWarningVisible(false)} />}
        </div>
        <div className="mt-[80px]">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/profil" element={<Navigate to="/profil/profil-bmkg/sejarah" replace />} />
            <Route path="/profil/profil-bmkg/sejarah" element={<Profil endpoint="sejarah"/>} />
            <Route path="/profil/profil-bmkg/logo" element={<Profil endpoint="logo"/>} />
            <Route path="/profil/profil-bmkg/visi-dan-misi" element={<Profil endpoint="visi-dan-misi"/>} />
            <Route path="/profil/profil-bmkg/tugas-dan-fungsi" element={<Profil endpoint="tugas-dan-fungsi"/>} />
            <Route path="/profil/profil-bmkg/struktur-organisasi" element={<Profil endpoint="struktur-organisasi"/>} />
            <Route path="/profil/profil-bmkg/balai-besar-mkg" element={<Profil endpoint="balai-besar-mkg"/>} />
            <Route path="/profil/profil-bmkg/stasion-mkg" element={<Profil endpoint="stasion-mkg"/>} />
            <Route path="/profil/publikasi-dan-informasi/kegiatan-internasional" element={<Profil endpoint="kegiatan-internasional"/>} />
            <Route path="/profil/publikasi-dan-informasi/transparansi-kinerja" element={<Profil endpoint="transparansi-kinerja"/>} />
            <Route path="/profil/publikasi-dan-informasi/daftar-informasi-publik" element={<Profil endpoint="daftar-informasi-publik"/>} />
            <Route path="/profil/publikasi-dan-informasi/informasi-dikecualikan" element={<Profil endpoint="informasi-dikecualikan"/>} />
            <Route path="/cuaca" element={<Cuaca />} />
            <Route path="/iklim" element={<Iklim />} />
            <Route path="/gempa-bumi-tsunami" element={<GempaBumi />} />
            {/* <Route path="/profil/publikasi-dan-informasi/kegiatan-internasional" element={<Artikel />} /> */}
            <Route path="/profil/publikasi-dan-informasi/kegiatan-internasional/artikel/:id/*" element={<Profil />} />
          </Routes>
        </div>
        <SideFooter />
      </div>
    </NextUIProvider>
  );
}