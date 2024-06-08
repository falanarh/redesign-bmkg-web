/* eslint-disable no-unused-vars */
import EarlyWarning from "./components/Elements/EarlyWarning";
import NavbarSection from "./components/Layouts/NavbarSection";
import SideFooter from "./components/Layouts/SideFooter";
import Beranda from "./pages/beranda";
import GempaBumi from "./pages/gempabumi";
import PrimaryLayout from "./pages/primarylayout";

export default function App() {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-50">
        <NavbarSection />
        <EarlyWarning />
      </div>
      {/* <div className="mt-[120px]">
        <Beranda />
      </div> */}
      <div className="mt-[135px]">
        <GempaBumi></GempaBumi>
        {/* <PrimaryLayout /> */}
      </div>
      <SideFooter />
    </div>
  );
}
