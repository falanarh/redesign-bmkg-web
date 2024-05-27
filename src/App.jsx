import EarlyWarning from "./components/Elements/EarlyWarning";
import NavbarSection from "./components/Layouts/NavbarSection";

export default function App() {
  return (
    <div className="flex flex-col">
      <NavbarSection />
      <EarlyWarning />
    </div>
  );
}
