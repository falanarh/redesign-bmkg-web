import TabAndCard from "../../Elements/TabAndCard";
import Section from "../../Layouts/Section";

export default function BerandaBawah() {

  return (
    <Section
      title="Seputar BMKG"
      subtitle="Rangkuman Berita, Artikel, dan Siaran Pers Terbaru Terkait BMKG"
      titleAnimateOnView={true}
      subtitleAnimateOnView={true}
      childrenAnimateOnView={true}
    >
      <TabAndCard />
    </Section>
  );
}
