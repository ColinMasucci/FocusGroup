import { FaHouse } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { AiFillSetting } from "react-icons/ai";
import { IoIosHelpCircle } from "react-icons/io";

export default function ReviewerSidebar({ activeTab, setActiveTab }) {

    return(
    
        <div className="bg-white w-full md:w-64 shadow-xl z-10 relative">
          <div className="p-6">
            <div className="text-xl font-bold text-gray-800 mb-6">Reviewer Dashboard</div>
            <div className="space-y-2">
              <button
                onClick={() => setActiveTab("home")}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-3 ${
                  activeTab === "home"
                    ? "bg-indigo-100 text-indigo-600 border-1 border-transparent hover:border-indigo-600"
                    : "bg-white text-gray-600 hover:bg-gray-100 border-1 border-transparent hover:border-indigo-600"
                }`}
              >
                <FaHouse />
                <span>Home</span>
              </button>
              <button 
                onClick={() => setActiveTab("my_sessions")}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-3 ${
                  activeTab === "sessions"
                    ? "bg-indigo-100 text-indigo-600 border-1 border-transparent hover:border-indigo-600"
                    : "bg-white text-gray-600 hover:bg-gray-100 border-1 border-transparent hover:border-indigo-600"
                }`}
              >
                <FaCalendarAlt />
                <span>My Sessions</span>
              </button>
              <button
                onClick={() => setActiveTab("analytics")}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-3 ${
                  activeTab === "reviews"
                    ? "bg-indigo-100 text-indigo-600 border-1 border-transparent hover:border-indigo-600"
                    : "bg-white text-gray-600 hover:bg-gray-100 border-1 border-transparent hover:border-indigo-600"
                }`}
              >
                <SiGoogleanalytics />
                <span>Analytics</span>
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-3 ${
                  activeTab === "payments"
                    ? "bg-indigo-100 text-indigo-600 border-1 border-transparent hover:border-indigo-600"
                    : "bg-white text-gray-600 hover:bg-gray-100 border-1 border-transparent hover:border-indigo-600"
                }`}
              >
                <AiFillSetting />
                <span>Settings</span>
              </button>
              <button
                onClick={() => setActiveTab("help")}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-3 ${
                  activeTab === "bonus"
                    ? "bg-indigo-100 text-indigo-600 border-1 border-transparent hover:border-indigo-600"
                    : "bg-white text-gray-600 hover:bg-gray-100 border-1 border-transparent hover:border-indigo-600"
                }`}
              >
                <IoIosHelpCircle />
                <span>Help</span>
              </button>
            </div>
          </div>
        </div>
    );
    }