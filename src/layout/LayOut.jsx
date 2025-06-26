import React, { useState } from "react";
import { NavLink, Outlet } from "react-router";
import {
  MdDashboard,
  MdAddHome,
  MdPeople,
  MdAccountCircle,
  MdMenu,
  MdClose,
} from "react-icons/md";

const LayOut = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const linkStyle =
    "flex items-center gap-2 px-4 py-2 text-gray-800 dark:text-white hover:bg-indigo-100 dark:hover:bg-indigo-800 rounded";
  const activeStyle = "bg-indigo-100 dark:bg-indigo-800 font-semibold";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col md:flex-row">
      {/* Mobile Top Bar */}
      <header className="md:hidden flex items-center justify-between bg-white dark:bg-gray-900 p-4 shadow-md">
        <div className="flex items-center gap-2">
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
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-label="Toggle menu"
          className="text-3xl text-indigo-600 dark:text-indigo-400"
        >
          {sidebarOpen ? <MdClose /> : <MdMenu />}
        </button>
      </header>

      {/* Sidebar */}
      {/* Desktop: always visible, Mobile: visible if sidebarOpen */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 shadow-lg p-4 space-y-2
          transform md:translate-x-0 transition-transform duration-300 ease-in-out
          ${
            sidebarOpen
              ? "translate-x-0 z-50"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        <NavLink
          to="/"
          className="flex items-center text-2xl font-bold text-indigo-600 mb-4"
        >
          <img
            src="/logo2.png"
            alt="NestMate Logo"
            className="h-12 w-12 object-contain drop-shadow-sm"
          />
          <h1 className="ml-2">
            Nest<span className="text-gray-600 dark:text-white">Mate</span>
          </h1>
        </NavLink>
        <h2 className="text-xl font-bold text-indigo-600 mb-4 hidden md:block">
          Dashboard
        </h2>
        <nav className="flex flex-col space-y-2">
          <NavLink
            to="/dashboard/dashboard-home"
            end
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
            onClick={() => setSidebarOpen(false)} // Close sidebar on mobile after click
          >
            <MdDashboard /> Dashboard Home
          </NavLink>
          <NavLink
            to="/dashboard/add-roommate"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
            onClick={() => setSidebarOpen(false)}
          >
            <MdAddHome /> Add Roommate
          </NavLink>
          <NavLink
            to="/dashboard/my-listings"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
            onClick={() => setSidebarOpen(false)}
          >
            <MdPeople /> My Roommates
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `${linkStyle} ${isActive ? activeStyle : ""}`
            }
            onClick={() => setSidebarOpen(false)}
          >
            <MdAccountCircle /> My Profile
          </NavLink>
        </nav>
      </aside>

      {/* Overlay for Mobile when sidebar open */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="flex-1 p-6 md:ml-64">
        <Outlet />
      </main>
    </div>
  );
};

export default LayOut;
