// components/Sidebar.tsx
"use client";

import { useState } from "react";
import { FiInbox, FiSend, FiFolder, FiChevronDown } from "react-icons/fi";
import { FaStar, FaExclamationTriangle } from "react-icons/fa"; 

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <div
      className={`${
        isCollapsed ? "w-16" : "w-64"
      } h-screen bg-gray-800 text-white flex flex-col transition-all duration-300`}
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-4 focus:outline-none"
      >
        {isCollapsed ? ">" : "<"}
      </button>

      {/* Menu Items */}
      <ul className="flex-1 space-y-4">

        <li className="flex items-center space-x-2 p-4 hover:bg-gray-700">
          <FiInbox />
          {!isCollapsed && <span>Inbox</span>}
        </li>
        <li className="flex items-center space-x-2 p-4 hover:bg-gray-700">
          <FiSend />
          {!isCollapsed && <span>Sent</span>}
        </li>
        <li className="flex items-center space-x-2 p-4 hover:bg-gray-700">
          <FiFolder />
          {!isCollapsed && <span>Archive</span>}
        </li>

        {/* Dropdown */}
        <li
          className="flex items-center space-x-2 p-4 hover:bg-gray-700 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <FiChevronDown />
          {!isCollapsed && <span>More</span>}
        </li>
        {isDropdownOpen && !isCollapsed && (
          <ul className="ml-8 space-y-2">
            <li className="flex items-center space-x-2">
              <FaExclamationTriangle className="text-white-500" /> {/* Spam icon */}
              <span>Spam</span>
            </li>

            <li className="flex items-center space-x-2">
              <FaStar className="text-white-400" /> {/* Starred icon */}
              <span>Starred</span>
            </li>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
