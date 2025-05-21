import React, { useState, useContext } from "react";
import { useLoaderData } from "react-router";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaHome,
  FaCheckCircle,
  FaTimesCircle,
  FaHeart,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../Authentication/AuthContext";

const RoommateDetails = () => {
  const roommate = useLoaderData();
  const { user } = useContext(AuthContext);

  const [liked, setLiked] = useState(roommate.likedBy?.includes(user.email));
  const [showContact, setShowContact] = useState(
    roommate.likedBy?.includes(user.email)
  );

  const handleLike = async () => {
    if (roommate.userEmail === user.email) {
      Swal.fire({
        icon: "warning",
        title: "Oops!",
        text: "You cannot like your own post!",
      });
      return;
    }

    if (liked) {
      Swal.fire({
        icon: "info",
        title: "Already Liked",
        text: "You have already liked this post.",
      });
      return;
    }

    try {
      const res = await fetch(
        `http://localhost:3000/roommates/${roommate._id}/like`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userEmail: user.email }),
        }
      );

      const data = await res.json();

      if (res.status === 403 || res.status === 400 || res.status === 404) {
        Swal.fire({
          icon: "error",
          title: "Action Failed",
          text: data.message || "Something went wrong",
        });
        return;
      }

      if (res.ok && data.modifiedCount > 0) {
        setLiked(true);
        setShowContact(true);
        Swal.fire({
          icon: "success",
          title: "Liked!",
          text: "Contact number unlocked.",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error("Error liking roommate:", error);
      Swal.fire({
        icon: "error",
        title: "Network Error",
        text: "Something went wrong. Please try again.",
      });
    }
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
          <h2 className="text-3xl font-bold text-indigo-700">
            {roommate.title}
          </h2>
          <button
            onClick={handleLike}
            className={`text-2xl transition ${
              liked
                ? "text-red-500 scale-110"
                : "text-gray-400 hover:text-red-400"
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
            <strong>Rent:</strong> ৳{roommate.rent}
          </p>
          <p className="flex items-center gap-2">
            <FaHome className="text-purple-500" />
            <strong>Room Type:</strong> {roommate.roomType}
          </p>
          <p
            className={`flex items-center gap-2 font-semibold ${
              roommate.availability === "available"
                ? "text-green-600"
                : "text-red-500"
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
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            Description
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {roommate.description}
          </p>
        </div>

        {showContact && (
          <p className="text-lg text-indigo-700 font-medium">
            📞 Contact: {roommate.contact}
          </p>
        )}
      </div>
    </div>
  );
};

export default RoommateDetails;
