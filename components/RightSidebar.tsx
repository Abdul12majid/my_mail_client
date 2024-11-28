// components/RightSidebar.tsx
import { FiCalendar, FiUsers, FiCheckSquare, FiArchive } from "react-icons/fi";

const RightSidebar = () => {
  return (
    <div className="w-16 h-screen bg-gray-200 text-gray-800 flex flex-col items-center space-y-6 py-4">
      <button className="p-4 hover:bg-gray-300 rounded">
        <FiCalendar size={24} />
      </button>
      <button className="p-4 hover:bg-gray-300 rounded">
        <FiUsers size={24} />
      </button>
      <button className="p-4 hover:bg-gray-300 rounded">
        <FiCheckSquare size={24} />
      </button>
      <button className="p-4 hover:bg-gray-300 rounded">
        <FiArchive size={24} />
      </button>
    </div>
  );
};

export default RightSidebar;
