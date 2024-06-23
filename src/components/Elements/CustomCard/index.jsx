/* eslint-disable react/prop-types */
import { Card } from "antd";

const CustomCard = ({ image, title, description, width }) => {
    return (
        <Card className="w-full sm:w-[${width}px] border-2 border-gray-200 rounded-2xl mt-2">
            <div className="flex flex-col sm:flex-row">
                <img src={image} alt={title} className="w-full sm:w-[${width * 0.4}px] h-auto sm:h-[${width * 0.5}px] sm:max-w-[250px]" />
                <div className="flex flex-col p-4 font-pt-sans">
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