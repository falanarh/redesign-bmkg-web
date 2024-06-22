/* eslint-disable react/prop-types */
import { Card } from "antd";

const CustomCard = ({ image, title, description, width }) => {
    return (
        <Card style={{ width:`${width}px`, border: "2px solid #f0f0f0", borderRadius: "15px", marginTop: "10px"}}>
            <div className="flex flex-row">
                <img src={image} alt={title} style={{ width: `${width*0.4}px`, height: `${width*0.5}px` }} />
                <div className="flex flex-col font-pt-sans p-4">
                    <p className="text-xl font-bold">
                        {title}
                    </p>
                    <p className="text-[14px] mt-2">
                        {description}
                    </p>
                </div>
            </div>
        </Card>
    );
};

export default CustomCard;
