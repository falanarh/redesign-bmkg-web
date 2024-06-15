/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EarlyWarning from "./components/Elements/EarlyWarning";
import NavbarSection from "./components/Layouts/NavbarSection";
import SideFooter from "./components/Layouts/SideFooter";
import Beranda from "./pages/beranda";
import Cuaca from "./pages/cuaca";
import GempaBumi from "./pages/gempabumi";
import Profil from "./pages/profil";
import Artikel from "./components/Fragments/Artikel";

export default function App() {
  const [isEarlyWarningVisible, setIsEarlyWarningVisible] = useState(true);

  return (
    <Router>
      <div className="relative">
        <div className={`fixed top-0 left-0 right-0 z-50 ${!isEarlyWarningVisible && "shadow-md"}`}>
          <NavbarSection />
          {isEarlyWarningVisible && <EarlyWarning onClose={() => setIsEarlyWarningVisible(false)} />}
        </div>
        <div className="mt-[80px]">
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/cuaca" element={<Cuaca />} />
            <Route path="/gempa-bumi-tsunami" element={<GempaBumi />} />
            <Route path="/profil/publikasi-dan-informasi/kegiatan-internasional" element={<Artikel />} />
            <Route path="/profil/publikasi-dan-informasi/kegiatan-internasional/artikel/:id" element={<Artikel />} />
          </Routes>
        </div>
        <SideFooter />
      </div>
    </Router>
  );
}

// /* eslint-disable no-unused-vars */
// import EarlyWarning from "./components/Elements/EarlyWarning";
// import NavbarSection from "./components/Layouts/NavbarSection";
// import SideFooter from "./components/Layouts/SideFooter";
// import Beranda from "./pages/beranda";
// import GempaBumi from "./pages/gempabumi";
// import PrimaryLayout from "./pages/primarylayout";

// export default function App() {
//   return (
//     <div className="relative">
//       <div className="fixed top-0 left-0 right-0 z-50">
//         <NavbarSection />
//         <EarlyWarning />
//       </div>
//       <div className="mt-[120px]">
//         <Beranda />
//       </div>
//       {/* <div className="mt-[135px]">
//         <GempaBumi></GempaBumi>
//       </div> */}
//       <SideFooter />
//     </div>
//   );
// }
