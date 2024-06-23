import { Card } from "antd";
import { data } from './data';
import CustomCard from "../../Elements/CustomCard";
import ContentSection from "../../Layouts/ContentSection";
import AntsipasiGBCard from "../../Elements/AntisipasiGBCard";

const GBAntisipasi = () => {
    return (
        <ContentSection title="Antisipasi Gempa Bumi" description="Gempa bumi dapat terjadi kapan pun dan dimana pun tanpa mengenal tempat dan waktu. Sebagai salah satu negara yang rawan akan bencana ini, kita sebagai warga perlu memiliki pembekalan diri mengenai cara menyelamatkan diri. Hal-hal apa yang perlu dilakukan sebelum, sesudah, dan setelah gempa bumi?">
           {data.map((item, index) => (
            <AntsipasiGBCard key={index} item={item} />
            
           ))} 

        </ContentSection>
    );
};

export default GBAntisipasi;