import { FaHouse } from "react-icons/fa6";
import { TiGroup } from "react-icons/ti";
import { TiStarFullOutline } from "react-icons/ti";
import { FaCreditCard } from "react-icons/fa6";
import { FaGift } from "react-icons/fa6";
import { AiFillSetting } from "react-icons/ai";

export default function CompanySidebar({ activeTab, setActiveTab }) {

    return(
    
        <div className="bg-white w-full h-full md:w-64 shadow-xl z-10 relative">
          <div className="p-6">
            <div className="text-xl font-bold text-gray-800 mb-6">Company Dashboard</div>
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
                onClick={() => setActiveTab("sessions")}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-3 ${
                  activeTab === "sessions"
                    ? "bg-indigo-100 text-indigo-600 border-1 border-transparent hover:border-indigo-600"
                    : "bg-white text-gray-600 hover:bg-gray-100 border-1 border-transparent hover:border-indigo-600"
                }`}
              >
                <TiGroup />
                <span>Sessions</span>
              </button>
              <button
                onClick={() => setActiveTab("reviews")}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-3 ${
                  activeTab === "reviews"
                    ? "bg-indigo-100 text-indigo-600 border-1 border-transparent hover:border-indigo-600"
                    : "bg-white text-gray-600 hover:bg-gray-100 border-1 border-transparent hover:border-indigo-600"
                }`}
              >
                <TiStarFullOutline />
                <span>Reviews</span>
              </button>
              <button
                onClick={() => setActiveTab("payments")}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-3 ${
                  activeTab === "payments"
                    ? "bg-indigo-100 text-indigo-600 border-1 border-transparent hover:border-indigo-600"
                    : "bg-white text-gray-600 hover:bg-gray-100 border-1 border-transparent hover:border-indigo-600"
                }`}
              >
                <FaCreditCard />
                <span>Payments</span>
              </button>
              <button
                onClick={() => setActiveTab("bonus")}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-3 ${
                  activeTab === "bonus"
                    ? "bg-indigo-100 text-indigo-600 border-1 border-transparent hover:border-indigo-600"
                    : "bg-white text-gray-600 hover:bg-gray-100 border-1 border-transparent hover:border-indigo-600"
                }`}
              >
                <FaGift />
                <span>Bonus</span>
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full text-left px-4 py-2 rounded-lg flex items-center space-x-3 ${
                  activeTab === "settings"
                    ? "bg-indigo-100 text-indigo-600 border-1 border-transparent hover:border-indigo-600"
                    : "bg-white text-gray-600 hover:bg-gray-100 border-1 border-transparent hover:border-indigo-600"
                }`}
              >
                <AiFillSetting />
                <span>Settings</span>
              </button>
            </div>
          </div>
        </div>
    );
    }