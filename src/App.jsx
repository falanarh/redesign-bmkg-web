import { Footer } from "antd/es/layout/layout";
import EarlyWarning from "./components/Elements/EarlyWarning";
import NavbarSection from "./components/Layouts/NavbarSection";
import SideFooter from "./components/Elements/SideFooter";

export default function App() {
  return (
    <div className="flex flex-col">
      <NavbarSection />
      <EarlyWarning />
      <SideFooter />
    </div>
  );
}
