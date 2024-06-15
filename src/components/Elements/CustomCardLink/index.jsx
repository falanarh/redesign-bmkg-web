/* eslint-disable react/prop-types */
import { Card } from "antd";
import { FaCalendarDays, FaPen } from "react-icons/fa6";

const CustomCardLink = ({ image, title, link, tgl, penulis, width }) => {
    return (
        <Card style={{ width: `${width}px`, border: "2px solid #f0f0f0", borderRadius: "15px" }}>
            <div className="flex">
                <div style={{ flex: '0 0 30%' }}>
                    <img src={image} alt={title} style={{ width: "100%", borderRadius: "10px" }} />
                </div>
                <div style={{ flex: '0 0 60%' }} className="flex flex-col font-pt-sans p-4">
                    <a href={link} target="_blank" rel="noopener noreferrer" className="text-xl font-bold">
                        {title}
                    </a>
                    <div className="mt-3">
                        <p className="flex items-center gap-2 text-[14px] text-graytext">
                            <FaCalendarDays />{tgl}
                        </p>
                        <p className="flex items-center gap-2 text-[14px] mt-1 text-graytext">
                            <FaPen /> {penulis}
                        </p>
                    </div>
                </div>
            </div>
        </Card>
    );
};

export default CustomCardLink;
