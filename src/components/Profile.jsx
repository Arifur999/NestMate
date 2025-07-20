import React, { useContext } from "react";
import { AuthContext } from "../Authentication/AuthContext";
import { FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout",
    }).then((result) => {
      if (result.isConfirmed) {
        logout().then(() => {
          Swal.fire("Logged out!", "", "success");
          navigate("/login");
        });
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>NestMate || Profile</title>
      </Helmet>

      <div className="min-h-screen bg-base-200 flex flex-col md:flex-row items-center justify-center p-6 gap-10">
        {/* Left: Profile Info */}
        <div className="bg-base-100 w-full max-w-md rounded-2xl shadow-xl p-8 ">

          {/* Heading */}
          <div className="mb-6 text-center">
            <h2 className="text-3xl font-bold text-indigo-600">My Profile</h2>
            <p className="text-sm  mt-1">
              Manage your information and logout securely.
            </p>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center mb-6">
            <img
              src={user?.photoURL || "/default-avatar.png"}
              alt="User"
              className="w-28 h-28 rounded-full border-4 border-indigo-600 shadow-md object-cover"
            />
          </div>

          {/* User Info */}
          <h1 className="text-2xl font-bold text-indigo-600 mb-1 text-center">
            {user?.displayName || "Anonymous User"}
          </h1>
          <p className="text-sm  mb-6 text-center flex items-center justify-center gap-2">
            <FaEnvelope /> {user?.email || "No email found"}
          </p>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl font-medium transition"
          >
            🔓 Logout
          </button>
        </div>

        {/* Right: Illustration */}
        <div className="max-w-md w-full hidden lg:block">
          <img
            src="/Resume-bro.svg"
            alt="Profile Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
