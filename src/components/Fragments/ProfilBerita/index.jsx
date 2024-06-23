import CustomCardLink from "../../Elements/CustomCardLink";
import ContentSection from "../../Layouts/ContentSection";
import { dataBerita } from "./data";

const ProfilBerita = () => {
  return (
    <ContentSection title="Berita">
      <div className="flex flex-col gap-6 mb-6">
        {dataBerita.map((item, index) => (
          <CustomCardLink
            key={index}
            item={item}
            width="100%" // Make width 100% for responsiveness
          />
        ))}
      </div>
    </ContentSection>
  );
};

export default ProfilBerita;
