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
      fetch(`https://assingment-10-server-gold.vercel.app/roommates/user/${user.email}`)
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
    <div className="min-h-screen card bg-base-200  py-10 px-4">
      <div className="max-w-6xl mx-auto bg-base-100 shadow-xl rounded-3xl p-6 sm:p-10 border border-indigo-100">
        <h1 className="text-3xl sm:text-4xl font-bold text-center text-indigo-700 mb-6 sm:mb-10">
          🏠 My Roommate Listings
        </h1>

        <div className="overflow-x-auto rounded-lg shadow-xl min-w-full text-sm md:text-base text-left text-gray-700 border border-gray-200">
          <table className="min-w-full table-auto border text-sm sm:text-base ">
            <thead className="  uppercase text-xs sm:text-sm bg-indigo-600 text-white">
              <tr>
                <th className="px-3 sm:px-6 py-3 text-left">Title</th>
                <th className="px-3 sm:px-6 py-3 text-left">Location</th>
                <th className="px-3 sm:px-6 py-3 text-left">Rent</th>
                <th className="px-3 sm:px-6 py-3 text-left">Room Type</th>
                <th className="px-3 sm:px-6 py-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {listings.map((listing) => (
                <tr key={listing._id} className="border-b hover:bg-gray-50">
                  <td className="px-3 sm:px-6 py-4">{listing.title}</td>
                  <td className="px-3 sm:px-6 py-4">{listing.location}</td>
                  <td className="px-3 sm:px-6 py-4">${listing.rent}</td>
                  <td className="px-3 sm:px-6 py-4">{listing.roomType}</td>
                  <td className="px-3 sm:px-6 py-4 flex flex-wrap gap-2">
                    <button
                      onClick={() =>
                        navigate(`/roommates/update/${listing._id}`)
                      }
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
                  <td colSpan="5" className="text-center py-6 text-gray-500">
                    No listings found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </>
  );
};

export default MyListings;
