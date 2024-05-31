import Map from "../../Elements/Map";
import Section from "../../Layouts/Section";

export default function BerandaAtas() {
  return (
    <Section
      title="Peta Prakiraan Cuaca dan Bencana Alam BMKG"
      subtitle="Informasi terbaru mengenai prakiraan cuaca, iklim, kualitas udara, gempabumi, dan tsunami di Indonesia"
    >
      <Map />
    </Section>
  );
}