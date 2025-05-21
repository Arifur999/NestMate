import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../Authentication/AuthContext';  
import { useNavigate } from 'react-router';

const AddRoommate = () => {
  const { user } = useContext(AuthContext);

  const handleAddData = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const addData = Object.fromEntries(formData.entries());

    fetch('http://localhost:3000/roommates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(addData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId || data.acknowledged) {
          Swal.fire({
            title: 'Success!',
            text: 'Roommate listing added successfully!',
            icon: 'success',
            confirmButtonColor: '#6366F1',
          });
          form.reset();
        } else {
          Swal.fire({
            title: 'Failed!',
            text: 'Could not add listing. Please try again.',
            icon: 'error',
            confirmButtonColor: '#EF4444',
          });
        }
      })
      .catch((error) => {
        console.error('Error adding roommate:', error);
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again later.',
          icon: 'error',
          confirmButtonColor: '#EF4444',
        });
      });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-white py-16 px-4">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-2xl border border-indigo-100">
        <h2 className="text-4xl font-extrabold text-center text-indigo-700 mb-10">
          Add a Roommate Listing
        </h2>

        <form onSubmit={handleAddData} className="space-y-6">
          {/* Title */}
          <input
            type="text"
            name="title"
            placeholder="e.g., Looking for a roommate in NYC"
            required
            className="w-full p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />

          {/* Location and Rent */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="location"
              placeholder="Location"
              required
              className="w-full p-4 border border-gray-300 rounded-xl"
            />
            <input
              type="number"
              name="rent"
              placeholder="Rent Amount ($)"
              required
              className="w-full p-4 border border-gray-300 rounded-xl"
            />
          </div>

          {/* Room Type and Availability */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <select
              name="roomType"
              required
              className="w-full p-4 border border-gray-300 rounded-xl bg-white"
            >
              <option value="">Select Room Type</option>
              <option value="Single">Single</option>
              <option value="Shared">Shared</option>
              <option value="Studio">Studio</option>
            </select>

            <select
              name="availability"
              required
              className="w-full p-4 border border-gray-300 rounded-xl bg-white"
            >
              <option value="available">Available</option>
              <option value="not-available">Not Available</option>
            </select>
          </div>

          {/* Lifestyle Preferences */}
          <input
            type="text"
            name="lifestyle"
            placeholder="Lifestyle Preferences (Pets, Smoking, Night Owl, etc.)"
            className="w-full p-4 border border-gray-300 rounded-xl"
          />

          {/* Description */}
          <textarea
            name="description"
            rows="4"
            placeholder="Describe your listing and roommate expectations..."
            required
            className="w-full p-4 border border-gray-300 rounded-xl"
          />

          {/* Contact Info */}
          <input
            type="text"
            name="contact"
            placeholder="Your Contact Info (Phone, WhatsApp, or Email)"
            required
            className="w-full p-4 border border-gray-300 rounded-xl"
          />

          {/* User Info - Auto filled from Firebase Auth */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              name="userName"
              value={user?.displayName || 'Anonymous'}
              readOnly
              className="w-full p-4 border border-gray-300 rounded-xl bg-gray-100 cursor-not-allowed"
            />
            <input
              type="email"
              name="userEmail"
              value={user?.email || ''}
              readOnly
              className="w-full p-4 border border-gray-300 rounded-xl bg-gray-100 cursor-not-allowed"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 cursor-pointer shadow-md transition duration-300"
          >
            ➕ Add Listing
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddRoommate;
