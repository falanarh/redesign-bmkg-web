import EarlyWarning from "./components/Elements/EarlyWarning";
import NavbarSection from "./components/Layouts/NavbarSection";

export default function App() {
  return (
    <div className="fixed top-0 left-0 right-0">
      <NavbarSection />
      <EarlyWarning />
    </div>
  );
}
