import React from "react";
import { Link } from "react-router"; 
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaHome,
  FaCheckCircle,
  FaTimesCircle,
  FaArrowRight,
} from "react-icons/fa";

const AllRoommates = ({ roommate }) => {
  if (!roommate || roommate.availability !== "available") return null;

  const {
    _id,
    title,
    location,
    rent,
    roomType,
    availability,
    description,
  } = roommate;

  return (
    <div className="rounded-2xl overflow-hidden shadow-xl bg-white border border-indigo-100 hover:shadow-2xl transition duration-300">
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-bold text-indigo-700">{title}</h3>

        <p className="text-gray-600 flex items-center gap-2">
          <FaMapMarkerAlt className="text-indigo-500" /> {location}
        </p>
        <p className="text-gray-600 flex items-center gap-2">
          <FaMoneyBillWave className="text-green-500" /> Rent: ${rent}
        </p>
        <p className="text-gray-600 flex items-center gap-2">
          <FaHome className="text-purple-500" /> {roomType}
        </p>
        <p
          className={`text-sm font-semibold flex items-center gap-2 ${
            availability === "available" ? "text-green-600" : "text-red-500"
          }`}
        >
          {availability === "available" ? <FaCheckCircle /> : <FaTimesCircle />}
          {availability}
        </p>
        <p className="text-gray-500 line-clamp-2">{description}</p>

        <div className="flex justify-end">
          <Link
            to={`/roommates/${_id}`}
            className="mt-2 inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-indigo-700 transition"
          >
            See More <FaArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllRoommates;
