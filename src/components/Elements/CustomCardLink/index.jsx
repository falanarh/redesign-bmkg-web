/* eslint-disable react/prop-types */
import { Card } from "antd";
import { FaCalendarDays, FaPen } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CustomCardLink = ({ item, width }) => {
  return (
    <Card
      className="border-2 border-gray-200 rounded-lg"
      style={{ width: `${width}px` }}
    >
      <div className="flex flex-col md:flex-row">
        {item.image && (
          <div className="flex-none md:flex-0 md:w-1/3">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full rounded-lg"
            />
          </div>
        )}
        <div
          className={`flex flex-col py-4 sm:px-4 ${
            item.image ? "md:flex-0 md:w-2/3" : "w-full"
          }`}
        >
          <Link to={item.link} className="text-xl font-bold">
            {item.title}
          </Link>
          <div className="mt-3">
            <p className="flex items-center gap-2 text-sm text-gray-400">
              <FaCalendarDays />
              {item.tgl}
            </p>
            <p className="flex items-center gap-2 mt-1 text-sm text-gray-400">
              <FaPen /> {item.penulis}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CustomCardLink;
