import React, { useContext } from "react";
import { HomeContext } from "../context/homeContext";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { homeState, setHomeState } = useContext(HomeContext);
  const token = sessionStorage.getItem("token");

  return (
    <div className="flex flex-col items-center justify-start gap-5 h-screen w-full sm:w-[250px] md:w-[270px] lg:w-[300px] pt-10 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white shadow-md border-r border-gray-300 dark:border-gray-700">
      <div className="text-xl font-bold text-blue-600 dark:text-blue-400">
        Logo
      </div>
      <div className="flex flex-col items-center justify-between gap-5 w-full">
        <div className="flex flex-col items-center justify-start gap-5 w-full">
          <div
            className={`cursor-pointer w-full text-center py-3 px-4 rounded-lg transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-700 ${
              homeState === "generate" ? "bg-blue-200 dark:bg-blue-800" : ""
            }`}
            onClick={() => setHomeState("generate")}
          >
            Generate Links
          </div>
          <div
            className={`cursor-pointer w-full text-center py-3 px-4 rounded-lg transition-all duration-300 hover:bg-blue-100 dark:hover:bg-blue-700 ${
              homeState === "links" ? "bg-blue-200 dark:bg-blue-800" : ""
            }`}
            onClick={() => setHomeState("links")}
          >
            All Links
          </div>
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
  );
};

export default Sidebar;
