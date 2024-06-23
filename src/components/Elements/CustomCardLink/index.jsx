/* eslint-disable react/prop-types */
import { Card } from "antd";
import { FaCalendarDays, FaPen } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CustomCardLink = ({ item, width }) => {
  return (
    <Card
      style={{
        width: `${width}px`,
        border: "2px solid #f0f0f0",
        borderRadius: "15px",
      }}
    >
      <div className="flex">
        {item.image && (
          <div style={{ flex: "0 0 30%" }}>
            <img
              src={item.image}
              alt={item.title}
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </div>
        )}
        <div
          style={{ flex: item.image ? "0 0 60%" : "0 0 100%" }}
          className="flex flex-col font-pt-sans p-4"
        >
          <Link to={`artikel/${item.id}`} className="text-xl font-bold">
            {item.title}
          </Link>
          <div className="mt-3">
            <p className="flex items-center gap-2 text-[14px] text-graytext">
              <FaCalendarDays />
              {item.tgl}
            </p>
            <p className="flex items-center gap-2 text-[14px] mt-1 text-graytext">
              <FaPen /> {item.penulis}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CustomCardLink;
