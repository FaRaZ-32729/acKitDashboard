// src/components/DashboardContent.jsx
import { FaExclamationTriangle, FaTemperatureHigh, FaPowerOff, FaLock, FaSearch, FaPlus, FaEye, FaMinus, FaPlus as FaPlusIcon, FaClock, FaCalendar, FaTrash, FaEdit, FaCheckCircle, FaUsers, FaBolt } from 'react-icons/fa';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoToggle } from 'react-icons/io5';

const DashboardContent = () => {
  return (
    <main className="p-6 overflow-y-auto">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">No. of Devices</p>
            <p className="text-xl font-bold">1 Devices</p>
          </div>
          <div className="bg-blue-100 p-2 rounded-full">
            <FaUsers className="text-blue-600" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Fault Devices</p>
            <p className="text-xl font-bold">0 Devices</p>
          </div>
          <div className="bg-red-100 p-2 rounded-full">
            <FaExclamationTriangle className="text-red-600" />
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow flex items-center justify-between">
          <div>
            <p className="text-sm text-gray-500">Energy</p>
            <p className="text-xl font-bold">0.0 KV</p>
          </div>
          <div className="bg-blue-100 p-2 rounded-full">
            <FaBolt className="text-blue-600" />
          </div>
        </div>
      </div>

      {/* Control Panel */}
      <div className="bg-blue-500 p-4 rounded-xl mb-6">
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-white text-blue-600 rounded-md">
            <FaExclamationTriangle /> <span>Alert</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-md">
            <FaTemperatureHigh /> <span>Temp</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-md">
            <FaPowerOff /> <span>Status</span>
          </button>
          <button className="flex items-center space-x-2 px-4 py-2 bg-white text-blue-600 rounded-md">
            <FaLock /> <span>Lock</span>
          </button>
          <div className="flex-1 min-w-[200px]">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 bg-white rounded-md focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Device Table */}
      <div className="bg-white rounded-xl shadow mb-6 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">DEVICE ID</h3>
          <h3 className="font-semibold">VENUE</h3>
          <h3 className="font-semibold">TEMPERATURE</h3>
          <h3 className="font-semibold">STATUS</h3>
          <h3 className="font-semibold">EVENTS</h3>
          <h3 className="font-semibold">VIEW</h3>
        </div>
        <div className="flex items-center justify-between py-3 border-t">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center">
              <FaPlusIcon className="text-xs" />
            </div>
            <span>mmmmn</span>
            <span className="text-xs bg-gray-200 px-2 py-1 rounded">Offline</span>
          </div>
          <div className="flex items-center space-x-1">
            <HiOutlineLocationMarker className="text-blue-600" />
            <span>bnbbn</span>
          </div>
          <div className="flex items-center space-x-1">
            <button className="px-2 py-1 bg-gray-200 rounded">-</button>
            <span>16</span>
            <button className="px-2 py-1 bg-gray-200 rounded">+</button>
          </div>
          <div className="flex items-center space-x-2">
            <IoToggle className="text-green-500 text-xl" />
            <span>On</span>
          </div>
          <button className="p-2 bg-blue-100 rounded-full">
            <FaPlus className="text-blue-600" />
          </button>
          <button className="p-2">
            <FaEye className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Right Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Panel 1: bnbbn */}
        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">bnbbn</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm">ON</span>
              <div className="w-10 h-6 bg-green-500 rounded-full relative">
                <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between bg-white rounded-full p-2 mb-4">
            <button className="px-2">-</button>
            <span>17 °C</span>
            <button className="px-2">+</button>
          </div>
          <button className="w-full py-2 bg-green-500 text-white rounded-md flex items-center justify-center space-x-2">
            <FaLock /> <span>Unlocked</span> <FaPlusIcon className="text-xs" />
          </button>
        </div>

        {/* Panel 2: nmmmn */}
        <div className="bg-white rounded-xl shadow p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-bold">nmmmn</h3>
            <button className="px-3 py-1 bg-green-500 text-white rounded-md flex items-center space-x-1">
              <FaLock /> <span>Unlocked</span> <FaPlusIcon className="text-xs" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-red-50 p-3 rounded-lg">
              <div className="flex items-center space-x-2">
                <FaExclamationTriangle className="text-red-600" />
                <span className="text-red-600 font-medium">Fault Devices</span>
              </div>
              <p className="text-xl font-bold">0 Devices</p>
            </div>
            <div className="bg-yellow-50 p-3 rounded-lg">
              <div className="flex items-center space-x-2">
                <FaBolt className="text-yellow-600" />
                <span className="text-yellow-600 font-medium">Energy</span>
              </div>
              <p className="text-xl font-bold">0.0 KV</p>
              <p className="text-xs text-gray-600">Device offline</p>
            </div>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center space-x-2">
              <FaCalendar className="text-gray-600" />
              <span className="font-medium">Events</span>
              <span className="bg-gray-200 px-2 py-1 rounded-full text-xs">1</span>
            </div>
            <button className="p-2 bg-gray-100 rounded-full">
              <FaPlusIcon className="text-gray-600" />
            </button>
          </div>

          {/* Event Card */}
          <div className="border border-green-200 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold">zcczzcczzczc</h4>
              <div className="flex space-x-2">
                <button className="p-1 text-blue-600"><FaEdit /></button>
                <button className="p-1 text-red-600"><FaTrash /></button>
              </div>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <FaCalendar className="text-gray-500" />
              <span className="text-sm">Thu, 8 Jan</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <FaClock className="text-gray-500" />
              <span className="text-sm">12:58 PM → 9:56 PM</span>
            </div>
            <div className="flex items-center space-x-2 mb-2">
              <FaTemperatureHigh className="text-red-500" />
              <span className="text-sm">16°C</span>
            </div>
            <div className="flex justify-between items-center mt-3">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">active</span>
              <button className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-md text-xs flex items-center space-x-1">
                <FaCheckCircle /> <span>Disable</span>
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <div className="flex items-center space-x-1 bg-green-500 text-white px-3 py-1 rounded-full text-xs">
              <div className="w-3 h-3 bg-white rounded-full"></div>
              <span>Real-time Connected</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardContent;