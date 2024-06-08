import MapSlider from "../../Elements/MapSlider";
import Section from "../../Layouts/Section";

export default function BerandaTengah() {
  return (
    <Section
      title="Peta atau Produk Informasi Meteorologi"
      subtitle="Visualisasi data dan penyajian informasi yang lebih kompleks tentang cuaca dan iklim untuk membantu pengambilan keputusan yang tepat."
      titleAnimateOnView={true}
      subtitleAnimateOnView={true}
      childrenAnimateOnView={true}
    >
      <MapSlider />
    </Section>
  );
}
