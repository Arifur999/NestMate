import React, { useState } from "react";
import { useLoaderData } from "react-router";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaHome,
  FaCheckCircle,
  FaTimesCircle,
  FaHeart,
} from "react-icons/fa";

const RoommateDetails = () => {
  const roommate = useLoaderData();
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="w-11/12 mx-auto max-w-5xl my-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-2">
          🧑‍🤝‍🧑 Roommate Details
        </h1>
        <p className="text-gray-600 text-lg max-w-xl mx-auto">
          Here's everything you need to know before choosing your perfect match!
        </p>
      </div>

      {/* Card */}
      <div className="p-8 bg-white rounded-2xl shadow-2xl space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold text-indigo-700">{roommate.title}</h2>
          <button
            onClick={handleLike}
            className={`text-2xl transition ${
              liked ? "text-red-500 scale-110" : "text-gray-400 hover:text-red-400"
            }`}
            title={liked ? "Liked" : "Like"}
          >
            <FaHeart />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-indigo-500" />
            <strong>Location:</strong> {roommate.location}
          </p>
          <p className="flex items-center gap-2">
            <FaMoneyBillWave className="text-green-500" />
            <strong>Rent:</strong> ${roommate.rent}
          </p>
          <p className="flex items-center gap-2">
            <FaHome className="text-purple-500" />
            <strong>Room Type:</strong> {roommate.roomType}
          </p>
          <p
            className={`flex items-center gap-2 font-semibold ${
              roommate.availability === "available" ? "text-green-600" : "text-red-500"
            }`}
          >
            {roommate.availability === "available" ? (
              <FaCheckCircle />
            ) : (
              <FaTimesCircle />
            )}
            {roommate.availability}
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Description</h3>
          <p className="text-gray-600 leading-relaxed">{roommate.description}</p>
        </div>
      </div>
    </div>
  );
};

export default RoommateDetails;
