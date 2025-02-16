import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../context/userContext";

const AllLinks = () => {
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);
  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

  const getAllLinks = async () => {
    try {
      const response = await axios.post(`${BACKEND_URL}/links`, { username: user.username });
      setLinks(response.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getAllLinks();
  }, []);

  return (
    <div className="flex items-center justify-center w-full h-full px-4">
      <div className="w-full sm:max-w-md lg:max-w-lg bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md border border-gray-300 dark:border-gray-700">
        <h2 className="text-center text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
          🔗 Your Shortened Links
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-32">
            <span className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full"></span>
          </div>
        ) : links.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400">
            No links found. Create a short link now!
          </p>
        ) : (
          <div className="overflow-x-auto max-h-64 overflow-y-auto custom-scrollbar">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white">
                  <th className="p-2 text-left">Original URL</th>
                  <th className="p-2 text-center">Shortcode</th>
                  <th className="p-2 text-center">Total Clicks</th>
                </tr>
              </thead>
              <tbody>
                {links.map((link, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    <td className="p-2 max-w-xs truncate">
                      <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">
                        {link.url}
                      </a>
                    </td>
                    <td className="p-2 text-center">
                      <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                        {link.shortCode}
                      </span>
                    </td>
                    <td className="p-2 text-center font-bold">{link.count}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllLinks;
