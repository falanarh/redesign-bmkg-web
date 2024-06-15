import { Card } from "antd";
import { data } from './data';
import CustomCard from "../../Elements/CustomCard";

const GBAntisipasi = () => {
    return (
        <div className="flex flex-col font-pt-sans ">
            <p className="text-2xl font-bold text-active ">Antisipasi Gempa Bumi</p>
            <p className="mt-4 text-[14px]">
            Gempa bumi dapat terjadi kapan pun dan dimana pun tanpa mengenal tempat dan waktu. Sebagai salah satu negara yang rawan akan bencana ini, kita sebagai warga perlu memiliki pembekalan diri mengenai cara menyelamatkan diri. Hal-hal apa yang perlu dilakukan sebelum, sesudah, dan setelah gempa bumi?
            </p>
            <div className="flex flex-wrap gap-6 mt-6">
                {data.map((item, index) => (
                    <CustomCard  key={index} width={450} image={item.image} title={item.title} description={item.description} />
                ))}
            </div>
            <p className="text-[12px] text-right mt-4 mr-3">Desain Kartun oleh : Eko Wardoyo</p>
        </div>
    );
};

export default GBAntisipasi;