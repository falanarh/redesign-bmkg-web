import { data_1, data_2, data_3 } from "./data";
import ContentSection from "../../Layouts/ContentSection";
import AntisipasiGBCard from "../../Elements/AntisipasiGBCard";
import { Divider } from "antd";

const GBAntisipasi = () => {
  return (
    <ContentSection
      title="Antisipasi Gempa Bumi"
      description="Gempa bumi dapat terjadi kapan pun dan dimana pun tanpa mengenal tempat dan waktu. Sebagai salah satu negara yang rawan akan bencana ini, kita sebagai warga perlu memiliki pembekalan diri mengenai cara menyelamatkan diri. Hal-hal apa yang perlu dilakukan sebelum, sesudah, dan setelah gempa bumi?"
    >
      <p className="mb-5 text-xl font-bold text-active">
        Sebelum Terjadi Gempa Bumi
      </p>
      <div className="flex flex-col gap-5">
        {data_1.map((item, index) => (
          <AntisipasiGBCard key={index} item={item} />
        ))}
      </div>
      <Divider className="bg-graytext" />
      <p className="mb-5 text-xl font-bold text-active">
        Saat Terjadi Gempa Bumi
      </p>
      <div className="flex flex-col gap-5">
        {data_2.map((item, index) => (
          <AntisipasiGBCard key={index} item={item} />
        ))}
      </div>
      <Divider className="bg-graytext" />
      <p className="mb-5 text-xl font-bold text-active">
        Setelah Terjadi Gempa Bumi
      </p>
      <div className="flex flex-col gap-5">
        {data_3.map((item, index) => (
          <AntisipasiGBCard key={index} item={item} />
        ))}
      </div>
    </ContentSection>
  );
};

export default GBAntisipasi;
