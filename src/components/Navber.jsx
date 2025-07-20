import React, { useState, useContext, useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import { AuthContext } from "../Authentication/AuthContext";
import Swal from "sweetalert2";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { AiOutlineHome, AiOutlineLogin, AiOutlineUser } from "react-icons/ai";
import { BsSun, BsMoon } from "react-icons/bs";
import { FaRegAddressCard, FaUserPlus } from "react-icons/fa";
import {
  MdDashboardCustomize,
  MdOutlineContactMail,
  MdPlaylistAddCheck,
  MdViewList,
} from "react-icons/md";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const handleLogout = () => {
    logout()
      .then(() => {
        Swal.fire("Logged out!", "", "success");
        navigate("/login");
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  };

  const linkStyle =
    "flex items-center gap-1 text-gray-700 dark:text-gray-200 font-medium hover:text-indigo-600 transition duration-300";
  const activeLinkStyle = "text-indigo-600 dark:text-indigo-400 font-semibold";

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md mx-auto rounded sticky top-0 z-50 lg:px-14">
      <Tooltip id="navbar-tooltip" place="bottom" className="z-50" />

      <div className="mx-auto py-4 flex justify-between items-center px-4">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center text-2xl font-bold text-indigo-600"
        >
          <img
            src="/logo2.png"
            alt="NestMate Logo"
            className="w-full h-12 object-contain drop-shadow-sm"
          />
          <h1>
            Nest<span className="text-gray-600 dark:text-white">Mate</span>
          </h1>
        </NavLink>

        {/* Desktop Navigation (lg and up) */}
        <nav className="hidden lg:flex items-center gap-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeLinkStyle : ""}`
            }
          >
            <AiOutlineHome /> Home
          </NavLink>

          <NavLink
            to="/browse-listings"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeLinkStyle : ""}`
            }
          >
            <MdViewList /> Browse Listings
          </NavLink>

          <NavLink
            to="/contact-us"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeLinkStyle : ""}`
            }
          >
            <MdOutlineContactMail /> Contact Us
          </NavLink>

          <NavLink
            to="/about-us"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeLinkStyle : ""}`
            }
          >
            <FaRegAddressCard /> About Us
          </NavLink>

          {user && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `${linkStyle} ${isActive ? activeLinkStyle : ""}`
              }
            >
              <MdDashboardCustomize /> Dashboard
            </NavLink>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-xl text-gray-700 dark:text-white hover:text-indigo-600 transition cursor-pointer"
            data-tooltip-id="navbar-tooltip"
            data-tooltip-content={
              theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
          >
            {theme === "dark" ? <BsSun /> : <BsMoon />}
          </button>

          {/* Auth */}
          {user ? (
            <div className="relative group" tabIndex={0}>
              <img
                src={user.photoURL}
                referrerPolicy="no-referrer"
                alt={user.displayName}
                className="w-10 h-10 rounded-full border-2 border-indigo-600 cursor-pointer"
                data-tooltip-id="navbar-tooltip"
                data-tooltip-content={user.displayName}
              />
              <div className="absolute right-0 mt-3 w-56 bg-white dark:bg-gray-800 shadow-lg rounded-xl p-4 hidden group-hover:block group-focus:block z-50">
                <p className="text-sm text-gray-800 dark:text-white font-semibold">
                  {user.displayName}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-300 mb-3">
                  {user.email}
                </p>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition cursor-pointer"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `${linkStyle} ${isActive ? activeLinkStyle : ""}`
                }
              >
                <AiOutlineLogin /> Login
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  `${linkStyle} ${isActive ? activeLinkStyle : ""}`
                }
              >
                <AiOutlineUser /> Signup
              </NavLink>
            </>
          )}
        </nav>

        {/* Mobile / Tablet Menu Button */}
        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7 text-gray-700 dark:text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile / Tablet Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 shadow-lg px-6 py-4 rounded-b-xl space-y-3">
          <NavLink to="/" className={linkStyle}>
            <AiOutlineHome /> Home
          </NavLink>
          <NavLink to="/browse-listings" className={linkStyle}>
            <MdViewList /> Browse Listings
          </NavLink>
          <NavLink to="/contact-us" className={linkStyle}>
            <MdOutlineContactMail /> Contact Us
          </NavLink>
          <NavLink to="/about-us" className={linkStyle}>
            <FaRegAddressCard /> About Us
          </NavLink>

          {user && (
            <>
              <NavLink to="/dashboard" className={linkStyle}>
                <MdDashboardCustomize /> Dashboard
              </NavLink>
              <NavLink to="/add-roommate" className={linkStyle}>
                <FaUserPlus /> Add Roommate
              </NavLink>
              <NavLink to="/my-listings" className={linkStyle}>
                <MdPlaylistAddCheck /> My Listings
              </NavLink>
            </>
          )}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-xl text-gray-700 dark:text-white hover:text-indigo-600 transition"
          >
            {theme === "dark" ? <BsSun /> : <BsMoon />}
          </button>

          {/* Auth */}
          {!user ? (
            <>
              <NavLink to="/login" className={linkStyle}>
                <AiOutlineLogin /> Login
              </NavLink>
              <NavLink to="/signup" className={linkStyle}>
                <AiOutlineUser /> Signup
              </NavLink>
            </>
          ) : (
            <>
              <p className="text-gray-700 dark:text-white font-medium">
                {user.displayName}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-300">
                {user.email}
              </p>
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition cursor-pointer"
              >
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
