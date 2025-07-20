import React, { useEffect, useState } from "react";
import AllRoommates from "./AllRoommates"; 
import { Helmet } from "react-helmet-async";

const AllItemsPage = () => {
  const [roommates, setRoommates] = useState([]);
  const [filter, setFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("asc");

  useEffect(() => {
    fetch("https://assingment-10-server-gold.vercel.app/roommates/featured")
      .then((res) => res.json())
      .then((data) => setRoommates(data));
  }, []);

  // Filtering and sorting logic
  const filtered = roommates.filter((item) => {
    if (filter === "available") return item.availability === "available";
    if (filter === "unavailable") return item.availability === "unavailable";
    return true;
  });

  const sorted = [...filtered].sort((a, b) => {
    return sortOrder === "asc" ? a.rent - b.rent : b.rent - a.rent;
  });

  return (
    <div className="w-11/12 max-w-7xl mx-auto my-10">
      <Helmet>
        <title>NestMate || All Roommates</title>
      </Helmet>

      <h1 className="text-3xl md:text-4xl pb-8 font-bold text-center text-indigo-700 ">
        🧾 All Roommate Listings
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
        <select
          className="select select-bordered"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="all">All Items</option>
          <option value="available">Available</option>
          <option value="unavailable">Unavailable</option>
        </select>

        <select
          className="select select-bordered"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="asc">Sort by Rent: Low to High</option>
          <option value="desc">Sort by Rent: High to Low</option>
        </select>
      </div>

      {/* Cards Grid */}
      {sorted.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((roommate) => (
            <AllRoommates key={roommate._id} roommate={roommate} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No listings found.</p>
      )}
    </div>
  );
};

export default AllItemsPage;
