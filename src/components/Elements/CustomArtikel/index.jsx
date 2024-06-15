/* eslint-disable react/prop-types */
import { Card } from "antd";
import { FaCalendarDays, FaPen } from "react-icons/fa6";

const CustomArtikel = ({ image, title, link, tgl, penulis, width, paragraf, alinea, dokumentasi, dok }) => {
    return (
         <div className="flex flex-col font-pt-sans">
            <p className="text-2xl font-bold text-active ">Kegiatan Internasional</p>
            <Card className='mt-7' style={{ borderRadius: '15px' }}>
                <p className="text-xl font-bold text-active ">
                    {title}
                </p>
                <div className="flex flex-row mt-3">
                    <p className="flex gap-2 text-[14px] text-graytext">
                        <FaCalendarDays /> {tgl}
                    </p>
                    <p className="flex gap-2 text-[14px] text-graytext ml-4">
                        <FaPen /> {penulis}
                    </p>
                </div>
                <div className='flex justify-center items-center mt-6'>
                    <img style={{ width: 500, height: 300 }} src={image} alt={title} />
                </div>
                <div className='mt-2'>
                    {paragraf.map(paragraph => (
                        <p key={paragraph.id} className="text-[14px] mt-2 text-graytext">
                            {paragraph.alinea}
                        </p>
                    ))}
                </div>
                <p className="text-[27px] font-bold text-active mt-4 text-center">Dokumentasi</p>
                <div className="flex flex-wrap justify-center">
                    {dokumentasi.map((doc, index) => (
                        <div key={doc.id} className="m-2">
                            <img style={{ width: 150, height: 100 }} src={doc.dok} alt={`Dokumentasi ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    );
};

export default CustomArtikel;
