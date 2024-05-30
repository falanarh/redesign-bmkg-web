import EarlyWarning from "./components/Elements/EarlyWarning";
import NavbarSection from "./components/Layouts/NavbarSection";
import SideFooter from "./components/Elements/SideFooter";
import Beranda from "./pages/beranda";

export default function App() {
  return (
    <div className="fixed top-0 left-0 right-0">
      <NavbarSection />
      <EarlyWarning />
      {/* <Beranda /> */}
      <SideFooter />
    </div>
  );
}
