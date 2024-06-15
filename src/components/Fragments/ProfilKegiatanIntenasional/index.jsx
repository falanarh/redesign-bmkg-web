import { data } from './data';
import CustomCardLink from "../../Elements/CustomCardLink";

const ProfilKegiatanInternasional = () => {
    return (
        <div className="flex flex-col font-pt-sans">
            <p className="text-2xl font-bold text-active">Kegiatan Internasional</p>
            <div className="flex flex-col gap-6 mt-6">
                {data.map((item, index) => (
                    <CustomCardLink 
                        key={index} 
                        width={935} 
                        image={item.image} 
                        title={item.title} 
                        tgl={item.tgl}
                        penulis={item.penulis}
                    />
                ))}
            </div>
            <p className="text-[12px] text-right mt-4 mr-3">Desain Kartun oleh : Eko Wardoyo</p>
        </div>
    );
};

export default ProfilKegiatanInternasional;
