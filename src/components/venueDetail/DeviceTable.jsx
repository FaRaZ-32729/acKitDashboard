import React, { useState } from "react";
import { Thermometer, Power, Plus, Eye } from "lucide-react";

const DeviceTable = ({ onDeviceSelect }) => {
  const [devices, setDevices] = useState([
    { id: "DEV-001", name: "AC Unit 01", venue: "Main Hall", temp: 22, status: "ON" },
    { id: "DEV-002", name: "AC Unit 02", venue: "Main Hall", temp: 22, status: "ON" },
    { id: "DEV-003", name: "AC Unit 03", venue: "Main Hall", temp: 22, status: "OFF" },
    { id: "DEV-004", name: "AC Unit 04", venue: "Main Hall", temp: 22, status: "ON" },
    { id: "DEV-004", name: "AC Unit 04", venue: "Main Hall", temp: 22, status: "ON" },
    { id: "DEV-004", name: "AC Unit 04", venue: "Main Hall", temp: 22, status: "ON" },
    { id: "DEV-004", name: "AC Unit 04", venue: "Main Hall", temp: 22, status: "ON" },
    { id: "DEV-004", name: "AC Unit 04", venue: "Main Hall", temp: 22, status: "ON" },
    { id: "DEV-004", name: "AC Unit 04", venue: "Main Hall", temp: 22, status: "ON" },
    { id: "DEV-004", name: "AC Unit 04", venue: "Main Hall", temp: 22, status: "ON" },
    { id: "DEV-004", name: "AC Unit 04", venue: "Main Hall", temp: 22, status: "ON" },
    { id: "DEV-004", name: "AC Unit 04", venue: "Main Hall", temp: 22, status: "ON" },
    { id: "DEV-004", name: "AC Unit 04", venue: "Main Hall", temp: 22, status: "ON" },
    { id: "DEV-004", name: "AC Unit 04", venue: "Main Hall", temp: 22, status: "ON" },
    { id: "DEV-004", name: "AC Unit 04", venue: "Main Hall", temp: 22, status: "ON" },
    { id: "DEV-004", name: "AC Unit 04", venue: "Main Hall", temp: 22, status: "ON" },
    { id: "DEV-004", name: "AC Unit 04", venue: "Main Hall", temp: 22, status: "ON" },
  ]);

  const [dragIndex, setDragIndex] = useState(null);

  const handleDragStart = (index) => setDragIndex(index);
  const handleDragOver = (e) => e.preventDefault();
  const handleDrop = (index) => {
    const newDevices = [...devices];
    const [moved] = newDevices.splice(dragIndex, 1);
    newDevices.splice(index, 0, moved);
    setDevices(newDevices);
    setDragIndex(null);
  };

  return (
    <div className="bg-white rounded-xl sm:rounded-2xl w-full mt-1 sm:mt-4 overflow-hidden flex flex-col">
      {/* Table Header */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto min-w-[200px] lg:min-w-[200px]">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="pl-2 pr-3 py-2 sm:py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider border-gray-300 text-center">
                Device ID
              </th>
              {/* Venue - hidden below md */}
              <th className="px-1 py-2 sm:py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider border-b-2 border-gray-300 hidden md:table-cell text-center">
                Venue
              </th>
              <th className="px-1 py-2 sm:py-3 text-center font-semibold text-gray-700 uppercase tracking-wider border-b-2 border-gray-300">
                <div className="flex items-center justify-center gap-1 sm:gap-1.5">
                  <Thermometer className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline text-xs">Temperature</span>
                  <span className="sm:hidden text-xs">Temp</span>
                </div>
              </th>
              <th className="px-1 py-2 sm:py-3 text-center font-semibold text-gray-700 uppercase tracking-wider border-b-2 border-gray-300">
                <div className="flex items-center justify-center gap-1 sm:gap-1.5">
                  <Power className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs">Status</span>
                </div>
              </th>
              {/* Events - hide below md */}
              <th className="px-1 pr-2 sm:pr-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-gray-700 uppercase tracking-wider border-b-2 border-gray-300 hidden md:table-cell">
                <div className="flex items-center justify-center gap-1 sm:gap-1.5">
                  <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs">Events</span>
                </div>
              </th>
              {/* View - hide below md */}
              <th className="pl-1 pr-2 py-2 sm:py-3 text-center font-semibold text-gray-700 uppercase tracking-wider border-b-2 border-gray-300 hidden md:table-cell">
                <div className="flex items-center justify-center gap-1 sm:gap-1.5">
                  <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="text-xs">View</span>
                </div>
              </th>
            </tr>
          </thead>
        </table>
      </div>

      {/* Scrollable Body */}
      <div className="flex-1 max-h-[60vh] lg:max-h-[25vh] 2xl:max-h-[50vh] overflow-y-auto min-w-[200px] lg:min-w-[200px]">
        <table className="w-full table-fixed">
          <tbody>
            {devices.map((device, index) => (
              <tr
                key={device.id}
                draggable
                onDragStart={() => handleDragStart(index)}
                onDragOver={handleDragOver}
                onDrop={() => handleDrop(index)}
                className="cursor-move"
              >
                <td
                  className="pl-2 pr-3 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 font-samibold cursor-pointer hover:underline text-center"
                  onClick={() => onDeviceSelect({ id: device.id, name: device.name })}
                >
                  {device.id}
                </td>
                {/* Venue */}
                <td className="px-1 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 truncate hidden md:table-cell text-center">
                  {device.venue}
                </td>
                <td className="px-1 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 text-center">
                  {device.temp}°C
                </td>
                <td className="px-1 py-2 sm:py-3 text-xs sm:text-sm text-green-600 font-medium text-center">
                  {device.status}
                </td>
                {/* Events */}
                <td className="px-1 pr-2 sm:pr-4 py-2 sm:py-3 text-center hidden md:table-cell">
                  <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium">Add</button>
                </td>
                {/* View */}
                <td className="pl-1 pr-2 py-2 sm:py-3 text-center hidden md:table-cell">
                  <button className="text-gray-600 hover:text-gray-800">
                    <Eye className="w-4 h-4 mx-auto" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DeviceTable;
