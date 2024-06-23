import { data } from './data';
import CustomCard from "../../Elements/CustomCard";

const GBSkalaMMI = () => {
    return (
        <div className="flex flex-col p-4 font-pt-sans">
            <p className="text-2xl font-bold text-active">Skala MMI</p>
            <p className="mt-4 text-[14px]">
                Skala Mercalli adalah satuan untuk mengukur kekuatan gempa bumi. Satuan ini diciptakan oleh seorang vulkanologis dari Italia yang bernama Giuseppe Mercalli pada tahun 1902. Skala Mercalli terbagi menjadi 12 pecahan berdasarkan informasi dari orang-orang yang selamat dari gempa tersebut dan juga dengan melihat serta membandingkan tingkat kerusakan akibat gempa bumi tersebut. Oleh itu skala Mercalli adalah sangat subjektif dan kurang tepat dibanding dengan perhitungan magnitudo gempa yang lain. Oleh karena itu, saat ini penggunaan Skala Richter lebih luas digunakan untuk untuk mengukur kekuatan gempa bumi. Tetapi skala Mercalli yang dimodifikasi, pada tahun 1931 oleh ahli seismologi Harry Wood dan Frank Neumann masih sering digunakan terutama apabila tidak terdapat peralatan seismometer yang dapat mengukur kekuatan gempa bumi di tempat kejadian. 
            </p>
            <div className="flex flex-wrap justify-around gap-6 mt-6">
                {data.map((item, index) => (
                    <CustomCard key={index} width={410} image={item.image} title={item.title} description={item.description} />
                ))}
            </div>
            <p className="text-[12px] text-right mt-4 mr-3">Desain Kartun oleh : Eko Wardoyo</p>
        </div>
    );
};

export default GBSkalaMMI;