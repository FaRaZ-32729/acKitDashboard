import React, { useState } from "react";
import { Thermometer, Power, Plus, Eye } from "lucide-react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

const DeviceTable = ({ onDeviceSelect }) => {
    const [devices, setDevices] = useState([
        { id: "DEV-001", name: "AC Unit 01", venue: "Main Hall", temp: 22, status: "ON" },
        { id: "DEV-002", name: "AC Unit 02", venue: "Main Hall", temp: 22, status: "ON" },
        { id: "DEV-003", name: "AC Unit 03", venue: "Main Hall", temp: 22, status: "OFF" },
        { id: "DEV-004", name: "AC Unit 04", venue: "Main Hall", temp: 22, status: "ON" },
    ]);

    const handleDragEnd = (result) => {
        if (!result.destination) return;
        const items = Array.from(devices);
        const [moved] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, moved);
        setDevices(items);
    };

    return (
        <div className="bg-white rounded-xl sm:rounded-2xl w-full mt-1 sm:mt-4 overflow-hidden">
            {/* Table Header */}
            <div className="overflow-x-auto">
                <table className="w-full table-auto min-w-[600px] ">
                    <thead className="bg-gray-50 sticky top-0 z-10">
                        <tr>
                            <th className="pl-2 pr-3 py-2 sm:py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider border-gray-300 text-center">
                                Device ID
                            </th>
                            <th className="px-1 py-2 sm:py-3 text-xs font-semibold text-gray-700 uppercase tracking-wider border-b-2 border-gray-300 md:block hidden text-center">
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
                            <th className="px-1 pr-2 sm:pr-4 py-2 sm:py-3 text-center text-[10px] sm:text-xs font-semibold text-gray-700 uppercase tracking-wider border-b-2 border-gray-300">
                                <div className="flex items-center justify-center gap-1 sm:gap-1.5">
                                    <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span className="text-xs">Events</span>
                                </div>
                            </th>
                            <th className="pl-1 pr-2 py-2 sm:py-3 text-center font-semibold text-gray-700 uppercase tracking-wider border-b-2 border-gray-300">
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
            <div className="max-h-41 overflow-y-auto min-w-[600px] ">
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="devices">
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.droppableProps} className="w-full table-fixed">
                                {devices.map((device, index) => (
                                    <Draggable key={device.id} draggableId={device.id} index={index}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                                className={`table w-full ${snapshot.isDragging ? "bg-blue-50" : ""}`}
                                            >
                                                <div className="table-row">
                                                    <div className="table-cell pl-2 pr-3 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 font-samibold cursor-pointer hover:underline text-center"
                                                        onClick={() => onDeviceSelect({ id: device.id, name: device.name })}>
                                                        {device.id}
                                                    </div>
                                                    <div className="table-cell px-1 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 truncate md:block hidden text-center">
                                                        {device.venue}
                                                    </div>
                                                    <div className="table-cell px-1 py-2 sm:py-3 text-xs sm:text-sm text-gray-700 text-center">
                                                        {device.temp}°C
                                                    </div>
                                                    <div className="table-cell px-1 py-2 sm:py-3 text-xs sm:text-sm text-green-600 font-medium text-center">
                                                        {device.status}
                                                    </div>
                                                    <div className="table-cell px-1 pr-2 sm:pr-4 py-2 sm:py-3 text-center">
                                                        <button className="text-blue-600 hover:text-blue-800 text-xs sm:text-sm font-medium">Add</button>
                                                    </div>
                                                    <div className="table-cell pl-1 pr-2 py-2 sm:py-3 text-center">
                                                        <button className="text-gray-600 hover:text-gray-800">
                                                            <Eye className="w-4 h-4 mx-auto" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </DragDropContext>
            </div>
        </div>
    );
};

export default DeviceTable;