import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Authentication/AuthContext";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";

const MyListings = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [listings, setListings] = useState([]);

  useEffect(() => {
    if (user?.email) {
      fetch(`https://assingment-10-server-gold.vercel.app/roommates/user/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setListings(data))
        .catch((err) => console.error("Error fetching listings:", err));
    }
  }, [user?.email]);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assingment-10-server-gold.vercel.app/roommates/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((result) => {
            if (result.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your listing has been deleted.",
                "success"
              );
              setListings((prev) => prev.filter((item) => item._id !== id));
            }
          })
          .catch(() => {
            Swal.fire("Error", "Something went wrong.", "error");
          });
      }
    });
  };

  return (
    <>
  <Helmet>
    <title>NestMate || My Listings</title>
  </Helmet>

  <div className="min-h-screen card  py-10 px-4">
    <div className="max-w-6xl mx-auto bg-base-100 shadow-xl rounded-3xl p-6 sm:p-10  ">

      <h1 className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 mb-6 sm:mb-10">
        🏠 My Roommate Listings
      </h1>

      {/* Desktop Table */}
      <div className="hidden md:block overflow-x-auto rounded-lg shadow-xl min-w-full text-sm md:text-base text-left ">
        <table className="min-w-full table-auto border text-sm sm:text-base ">
          <thead className="uppercase text-xs sm:text-sm bg-indigo-600 ">
            <tr>
              <th className="px-3 sm:px-6 py-3 text-left">Title</th>
              <th className="px-3 sm:px-6 py-3 text-left">Location</th>
              <th className="px-3 sm:px-6 py-3 text-left">Rent</th>
              <th className="px-3 sm:px-6 py-3 text-left">Room Type</th>
              <th className="px-3 sm:px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="">
            {listings.map((listing) => (
              <tr key={listing._id} className="border-b ">
                <td className="px-3 sm:px-6 py-4">{listing.title}</td>
                <td className="px-3 sm:px-6 py-4">{listing.location}</td>
                <td className="px-3 sm:px-6 py-4">${listing.rent}</td>
                <td className="px-3 sm:px-6 py-4">{listing.roomType}</td>
                <td className="px-3 sm:px-6 py-4 flex flex-wrap gap-2">
                  <button
                    onClick={() => navigate(`/roommates/update/${listing._id}`)}
                    className="bg-yellow-400 text-white px-3 py-1.5 cursor-pointer rounded-lg hover:bg-yellow-500 transition text-sm"
                  >
                    ✏️ Update
                  </button>
                  <button
                    onClick={() => handleDelete(listing._id)}
                    className="bg-red-500 text-white px-3 py-1.5 cursor-pointer rounded-lg hover:bg-red-600 transition text-sm"
                  >
                    🗑️ Delete
                  </button>
                </td>
              </tr>
            ))}
            {listings.length === 0 && (
              <tr>
                <td colSpan="5" className="text-center py-6 ">
                  No listings found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="md:hidden space-y-6">
        {listings.length === 0 && (
          <p className="text-center ">No listings found.</p>
        )}
        {listings.map((listing) => (
          <div
            key={listing._id}
            className="bg-base-100 p-4 rounded-xl shadow-md border border-indigo-100"
          >
            <h3 className="text-lg font-semibold text-indigo-700">{listing.title}</h3>
            <p className="text-gray-600">📍 Location: {listing.location}</p>
            <p className="text-gray-600">💰 Rent: ${listing.rent}</p>
            <p className="text-gray-600">🛏 Room Type: {listing.roomType}</p>
            <div className="flex gap-3 mt-4">
              <button
                onClick={() => navigate(`/roommates/update/${listing._id}`)}
                className="flex-1 bg-yellow-400 text-white py-2 rounded-lg hover:bg-yellow-500 transition"
              >
                ✏️ Update
              </button>
              <button
                onClick={() => handleDelete(listing._id)}
                className="flex-1 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
              >
                🗑️ Delete
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</>

  );
};

export default MyListings;
