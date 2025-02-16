import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import { HomeContext } from "../context/homeContext";
import GenerateLinks from "../components/genrateLinks";
import AllLinks from "../components/allLinks";
import Navbar from "../components/Navbar";
import { jwtDecode } from "jwt-decode";
import { UserContext } from "../context/userContext";
import Profile from "../components/profile";

const Home = () => {
  const { homeState } = useContext(HomeContext);
  const [size, setSize] = useState("");
  const { user, setUser } = useContext(UserContext);

  const getSize = () => {
    if (window.innerWidth < 640) {
      setSize("sm");
    } else {
      setSize("lg");
    }
  };

  const token = sessionStorage.getItem("token");

  if (!token) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
          <h2 className="text-2xl font-bold">🔒 Access Denied</h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2">You need to log in to access this page.</p>
          <button
            onClick={() => (window.location.href = "/login")}
            className="mt-4 px-6 py-2 bg-blue-500 dark:bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const getUser = async () => {
    const decoded = await jwtDecode(token);
    setUser(decoded);
  };

  useEffect(() => {
    getUser();
    getSize();
    window.addEventListener("resize", getSize);

    return () => window.removeEventListener("resize", getSize);
  }, []);

  return (
    <div
      className={`flex ${
        size === "sm" ? "flex-col" : "flex-row"
      } w-full h-screen bg-gradient-to-r from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900`}
    >
      {size === "sm" ? <Navbar /> : <Sidebar />}
      <div className="flex items-center justify-center w-full h-full px-4">
        {homeState === "generate" ? <GenerateLinks /> : null}
        {homeState === "links" ? <AllLinks /> : null}
        {homeState === "profile" ? <Profile /> : null}
      </div>
    </div>
  );
};

export default Home;
