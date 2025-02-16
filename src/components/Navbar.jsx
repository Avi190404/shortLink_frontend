import React, { useState, useContext } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { HomeContext } from "../context/homeContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setHomeState } = useContext(HomeContext);
  const token = sessionStorage.getItem("token");

  return (
    <nav className="bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white shadow-md px-6 py-3 flex justify-between items-center border-b border-gray-300 dark:border-gray-700">
      <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
        Logo
      </div>

      <button
        className="text-gray-900 dark:text-white focus:outline-none sm:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      <div
        className={`absolute top-10 left-0 w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white sm:static sm:w-auto sm:flex ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center">
          <div
            className="cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-700"
            onClick={() => {
              setHomeState("generate");
              setIsOpen(false);
            }}
          >
            Generate Links
          </div>
          <div
            className="cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-700"
            onClick={() => {
              setHomeState("links");
              setIsOpen(false);
            }}
          >
            All Links
          </div>
          {token ? (
            <div
              className="cursor-pointer w-full text-center py-3 px-4 rounded-lg transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-700"
              onClick={() => setHomeState("profile")}
            >
              Profile
            </div>
          ) : (
            <Link to="/login">
              <div className="cursor-pointer w-full text-center py-3 px-4 rounded-lg transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-700">
                Log in
              </div>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
