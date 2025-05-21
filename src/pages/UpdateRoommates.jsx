import { useLoaderData, useNavigate } from "react-router";
import { useState } from "react";
import Swal from "sweetalert2";

const UpdateRoommates = () => {
  const roommate = useLoaderData();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: roommate.title,
    location: roommate.location,
    rent: roommate.rent,
    roomType: roommate.roomType,
    description: roommate.description,
    userName: roommate.userName,
    userEmail: roommate.userEmail,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  fetch(`http://localhost:3000/roommates/${roommate._id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.modifiedCount) {
        Swal.fire(
          " Updated!",
          "Your listing was updated successfully.",
          "success"
        );
        navigate("/my-listings");
      } else {
        Swal.fire(
          " No Changes",
          "You didn't change anything in the form.",
          "info"
        );
      }
    })
    .catch(() => {
      Swal.fire("❌ Error", "Something went wrong!", "error");
    });
};


  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white p-6">
      <div className="max-w-2xl mx-auto bg-white p-8 shadow-xl rounded-3xl border border-indigo-100">
        <h2 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
          ✏️ Update Listing
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Rent */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Rent ($)
            </label>
            <input
              type="number"
              name="rent"
              value={formData.rent}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Room Type */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Room Type
            </label>
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
            >
              <option value="">Select type</option>
              <option value="Private">Private</option>
              <option value="Shared">Shared</option>
              <option value="Studio">Studio</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Description
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400"
            ></textarea>
          </div>

          {/* Read-only Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-500 text-sm mb-1">
                Posted by
              </label>
              <input
                type="text"
                value={formData.userName}
                readOnly
                className="w-full bg-gray-100 text-gray-600 border border-gray-300 rounded-lg p-2"
              />
            </div>
            <div>
              <label className="block text-gray-500 text-sm mb-1">Email</label>
              <input
                type="email"
                value={formData.userEmail}
                readOnly
                className="w-full bg-gray-100 text-gray-600 border border-gray-300 rounded-lg p-2"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white px-6 py-2 rounded-xl cursor-pointer hover:bg-indigo-700 transition font-semibold"
            >
              ✅ Update Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateRoommates;
