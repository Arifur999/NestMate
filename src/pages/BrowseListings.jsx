import React from "react";
import { useLoaderData, Link } from "react-router";
import {
  FaArrowRight,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBed,
  FaCheckCircle,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const BrowseListings = () => {
  const roommates = useLoaderData();

  return (
    <>
      <Helmet>
        <title>NestMate || Browse Listings</title>
      </Helmet>
      <div className="w-11/12 max-w-7xl mx-auto my-10  ">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-8 text-center">
          🧾 All Roommate Listings
        </h1>

        <div className="overflow-x-auto rounded-lg shadow-xl ">
          <table className="min-w-full text-sm md:text-base text-left text-gray-700 border border-gray-200">
            <thead className="bg-indigo-600 text-white">
              <tr>
                <th className="py-3 px-4">🏠 Title</th>
                <th className="py-3 px-4">
                  <FaMapMarkerAlt className="inline mr-1" /> Location
                </th>
                <th className="py-3 px-4">
                  <FaMoneyBillWave className="inline mr-1" /> Rent
                </th>
                <th className="py-3 px-4">
                  <FaBed className="inline mr-1" /> Room Type
                </th>
                <th className="py-3 px-4">
                  <FaCheckCircle className="inline mr-1" /> Availability
                </th>
                <th className="py-3 px-4 text-center">🔍 Action</th>
              </tr>
            </thead>
            <tbody>
              {roommates.map((rm) => (
                <tr
                  key={rm._id}
                  className="border-t hover:bg-gray-50 transition duration-200"
                >
                  <td className="py-3 px-4 font-medium text-indigo-800">
                    {rm.title}
                  </td>
                  <td className="py-3 px-4">{rm.location}</td>
                  <td className="py-3 px-4">${rm.rent}</td>
                  <td className="py-3 px-4">{rm.roomType}</td>
                  <td
                    className={`py-3 px-4 font-semibold ${
                      rm.availability === "available"
                        ? "text-green-600"
                        : "text-red-500"
                    }`}
                  >
                    {rm.availability}
                  </td>
                  <td className="py-3 px-4 text-center">
                    <Link
                      to={`/roommates/${rm._id}`}
                      className="inline-flex items-center gap-1 text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-full text-xs md:text-sm shadow-sm transition duration-200"
                    >
                      See More <FaArrowRight />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default BrowseListings;
