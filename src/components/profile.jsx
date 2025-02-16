import React, { useContext } from "react";
import { UserContext } from "../context/userContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Handle logout
  const handleLogout = () => {
    sessionStorage.removeItem("token"); // Clear session storage
    setUser(null); // Clear user context
    navigate("/login"); // Redirect to login page
  };

  // If no user is logged in, show login message
  if (!user) {
    return (
      <div className="flex items-center justify-center w-full h-full px-4">
        <div className="w-full sm:max-w-md lg:max-w-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700 text-center">
          <p className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Please log in first
          </p>
          <button
            onClick={() => navigate("/login")}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center w-full h-full px-4">
      <div className="w-full sm:max-w-md lg:max-w-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700">
        <h2 className="text-center text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          👤 User Profile
        </h2>

        <div className="text-center text-gray-800 dark:text-gray-200">
          <p className="mb-2">
            <span className="font-semibold">Username:</span> {user.username}
          </p>
          <p className="mb-4">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
        </div>

        <button
          onClick={handleLogout}
          className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-all duration-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
