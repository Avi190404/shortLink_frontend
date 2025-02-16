import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/userContext";

const GenerateLinks = () => {
  const [link, setLink] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");
  const { user, setUser} = useContext(UserContext)

  const generateLinks = async () => {
    const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

    if (!link) {
      console.log("Please enter a URL");
      return;
    }

    try {
      const response = await axios.post(`${BACKEND_URL}/shorten`, { username: user.username,url: link });
      console.log(response.data);
      setShortenedLink(response.data);
    } catch (error) {
      console.error("Error generating link:", error);
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-full px-4">
      <div className="w-full sm:max-w-md lg:max-w-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700">
        <h2 className="text-center text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Generate Shortened Link
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Enter your link..."
            className="flex-1 px-4 py-2 border rounded-lg text-gray-700 dark:text-white bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setLink(e.target.value)}
          />
          <button
            onClick={generateLinks}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300"
          >
            Generate
          </button>
        </div>
        {shortenedLink && (
          <p className="mt-4 text-center text-gray-800 dark:text-gray-200 break-all">
            <strong>Shortened Link:</strong> {shortenedLink}
          </p>
        )}
      </div>
    </div>
  );
};

export default GenerateLinks;
