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
      className="delivery-head-section max-h-[600px] overflow-y-auto "
      ref={containerRef}
    >
      {positions.map((position) => (
        <div
          key={position.id}
          className="delivery-head-cardborder border-gray-300 border-solid rounded-md px-6 py-4 border hover:bg-emerald-100 transition-colors duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium">{position.company}</h3>
            <button className="text-green-500 hover:text-green-600 focus:outline-none">
              <FaBookmark
                size={20}
                className="text-green-500 hover:text-green-600"
              />
            </button>
          </div>
          <div className="flex items-center text-sm mb-2">
            <FaUserGraduate className="mr-3 text-gray-500" />
            <span>{position.experience}</span>
          </div>
          <div className="flex items-center text-sm mb-2">
            <FaMapMarkerAlt className="mr-3 text-gray-500" />
            <span>{position.location}</span>
          </div>
          <div className="flex items-center text-sm mb-2">
            <FaMoneyBillAlt className="mr-3 text-gray-500" />
            <span>{position.salary}</span>
          </div>
          <div className="flex items-center text-sm mb-2">
            <span className="mr-3 font-medium">{position.department}</span>
          </div>
          <div className="flex items-center text-sm mb-2">
            <FaCalendarAlt className="mr-3 text-gray-500" />
            <span>Posted On: {position.postedOn}</span>
          </div>
          <div className="flex items-center text-sm">
            <FaCalendarAlt className="mr-3 text-gray-500" />
            <span>CC Update Date: {position.ccUpdateDate}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeliveryHeadSection;
