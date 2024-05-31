import EarlyWarning from "./components/Elements/EarlyWarning";
import NavbarSection from "./components/Layouts/NavbarSection";
import SideFooter from "./components/Layouts/SideFooter";
import Beranda from "./pages/beranda";

export default function App() {
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-[99999]">
        <NavbarSection />
        <EarlyWarning />
      </div>
      <div className="mt-[200px]">
        <Beranda />
      </div>
      <SideFooter />
    </div>
  );
}
