import { data1, data2, data3 } from './data';
import ContentSection from "../../Layouts/ContentSection";
import AntsipasiGBCard from "../../Elements/AntisipasiGBCard";

const GBAntisipasi = () => {
    return (
        <ContentSection title="Antisipasi Gempa Bumi" description="Gempa bumi dapat terjadi kapan pun dan dimana pun tanpa mengenal tempat dan waktu. Sebagai salah satu negara yang rawan akan bencana ini, kita sebagai warga perlu memiliki pembekalan diri mengenai cara menyelamatkan diri. Hal-hal apa yang perlu dilakukan sebelum, sesudah, dan setelah gempa bumi?">
           <p className="font-bold text-xl text-active mb-5">Sebelum Terjadi Gempa Bumi</p>
           {data1.map((item, index) => (
            <AntsipasiGBCard key={index} item={item} />
           ))} 
            <p className="font-bold text-xl text-active mb-5">Saat Terjadi Gempa Bumi</p>
           {data2.map((item, index) => (
            <AntsipasiGBCard key={index} item={item} />
           ))} 
           <p className="font-bold text-xl text-active mb-5">Setelah Terjadi Gempa Bumi</p>
           {data3.map((item, index) => (
            <AntsipasiGBCard key={index} item={item} />
           ))} 
        </ContentSection>
    );
};

export default GBAntisipasi;