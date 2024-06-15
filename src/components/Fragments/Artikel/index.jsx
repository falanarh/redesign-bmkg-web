/* eslint-disable react/prop-types */
import { FaCalendarDays, FaPen } from "react-icons/fa6";

const Artikel = ({ item }) => {
    return (
        <div className="flex flex-col font-pt-sans">
            <h1 className="text-xl font-bold">{item.title}</h1>
            <div className="mt-3 flex">
                <p className="flex items-center gap-2 text-[14px] text-graytext">
                    <FaCalendarDays />{item.tgl}
                </p>
                <p className="flex items-center gap-2 text-[14px] mt-1 text-graytext">
                    <FaPen /> {item.penulis}
                </p>
            </div>
            <img src={item.image} alt={`image-${item.id}`} />
            {item.paragraf.map((paragraph, index) => (
               <p key={index}className="mb-3">{paragraph}</p> 
            ))}
            <h2 className="text-[16px] font-bold text-center">Dokumentasi</h2>
            <div className="flex flex-wrap justify-center gap-3">
                {item.dokumentasi.map((doc, index) => (
                    <img src={doc} key={index} className="" alt="" />
                ))}
            </div>
        </div>
    );
}

export default Artikel;
