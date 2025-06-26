import React, { useContext, useEffect, useState } from "react";
import { FaListAlt, FaUserAlt, FaBoxes } from "react-icons/fa";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AuthContext } from "../Authentication/AuthContext";
import { NavLink } from "react-router";

const DashboardHome = () => {
  const { user } = useContext(AuthContext);

  const [totalItems, setTotalItems] = useState(0);
  const [myItems, setMyItems] = useState(0);
  const [recentListings, setRecentListings] = useState([]);

  const BASE_URL = "https://assingment-10-server-gold.vercel.app";

  useEffect(() => {
    fetch(`${BASE_URL}/stats/total-roommates`)
      .then((res) => res.json())
      .then((data) => setTotalItems(data.total));

    if (user?.email) {
      fetch(`${BASE_URL}/stats/my-roommates/${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyItems(data.myItems));

      fetch(`${BASE_URL}/roommates/recent/${user.email}`)
        .then((res) => res.json())
        .then((data) => setRecentListings(data));
    }
  }, [user?.email]);

  return (
    <div className="space-y-10">
      {/* Welcome Message */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-indigo-600 flex items-center justify-center gap-2">
          <MdOutlineDashboardCustomize className="text-4xl" />
          Dashboard Overview
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Welcome back, <span className="font-semibold">{user?.displayName}</span>!
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{user?.email}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Total Items */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-center gap-4">
          <FaBoxes className="text-3xl text-indigo-600" />
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Total Listings</p>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              {totalItems}
            </h3>
          </div>
        </div>

        {/* My Listings */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-center gap-4">
          <FaListAlt className="text-3xl text-green-600" />
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">My Listings</p>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              {myItems}
            </h3>
          </div>
        </div>

        {/* User Info */}
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex items-center gap-4">
          <FaUserAlt className="text-3xl text-orange-500" />
          <div>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Logged in as</p>
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">
              {user?.displayName}
            </h3>
          </div>
        </div>
      </div>

      {/* 🕒 Recent Listings */}
      {recentListings.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-bold text-indigo-700 mb-4">🕒 Recent Listings</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {recentListings.map((item) => (
              <div
                key={item._id}
                className="bg-base-100 p-5 rounded-xl border border-indigo-100 shadow hover:shadow-lg transition"
              >
                <h4 className="text-lg font-semibold text-indigo-600">{item.title}</h4>
                <p className="text-sm text-gray-600">📍 {item.location}</p>
                <p className="text-sm text-gray-600">
                  💰 ${item.rent} | 🛏 {item.roomType}
                </p>
                <p
                  className={`text-sm mt-2 font-medium ${
                    item.availability === "available"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {item.availability}
                </p>
              </div>
            ))}
          </div>
          <div className="pt-3">
            <NavLink
              to="/browse-listings"
              className="inline-block text-indigo-600 font-semibold text-sm hover:underline"
            >
              See More →
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardHome;
