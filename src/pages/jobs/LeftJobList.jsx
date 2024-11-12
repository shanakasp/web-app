import React, { useEffect, useRef, useState } from "react";
import {
  FaBookmark,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaMoneyBillAlt,
  FaUserGraduate,
} from "react-icons/fa";

const DeliveryHeadSection = () => {
  const [positions, setPositions] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    // Fetch data and set the positions state
    setPositions([
      {
        id: "12345",
        ccid: "120001",
        company: "Tata Consultancy Services Ltd",
        experience: "15-20 Yrs",
        location: "Mumbai, Pune",
        salary: "$150 - $400",
        department: "Finance",
        postedOn: "2024 Aug 12",
        ccUpdateDate: "2024 Sep 15",
      },
      {
        id: "12346",
        ccid: "120002",
        company: "Tata Consultancy Services Ltd",
        experience: "15-20 Yrs",
        location: "Mumbai, Pune",
        salary: "$150 - $400",
        department: "Finance",
        postedOn: "2024 Aug 12",
        ccUpdateDate: "2024 Sep 15",
      },
      // Add more positions as needed
    ]);
  }, []);

  return (
    <div
      className="delivery-head-section max-h-[300px] overflow-y-auto"
      ref={containerRef}
    >
      {positions.map((position) => (
        <div
          key={position.id}
          className="delivery-head-card  border border-gray-300 border-solid rounded-md p-4 mb-4 hover:bg-emerald-200  transition-colors duration-300"
        >
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-medium">{position.company}</h3>
            <button className="text-green-500 hover:text-green-600 focus:outline-none">
              <FaBookmark size={20} />
            </button>
          </div>
          <div className="flex items-center text-sm mb-1">
            <FaUserGraduate className="mr-2" />
            <span>{position.experience}</span>
          </div>
          <div className="flex items-center text-sm mb-1">
            <FaMapMarkerAlt className="mr-2" />
            <span>{position.location}</span>
          </div>
          <div className="flex items-center text-sm mb-1">
            <FaMoneyBillAlt className="mr-2" />
            <span>{position.salary}</span>
          </div>
          <div className="flex items-center text-sm mb-1">
            <span className="mr-2 font-medium">{position.department}</span>
          </div>
          <div className="flex items-center text-sm mb-1">
            <FaCalendarAlt className="mr-2" />
            <span>Posted On: {position.postedOn}</span>
          </div>
          <div className="flex items-center text-sm">
            <FaCalendarAlt className="mr-2" />
            <span>CC Update Date: {position.ccUpdateDate}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeliveryHeadSection;
