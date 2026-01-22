// import React from "react";
// import {
//     Plus,
//     Lock,
//     AlertTriangle,
//     Zap,
//     Edit,
//     Trash2,
//     Play,
//     Square,
//     Calendar,
//     Clock,
//     Thermometer,
//     Repeat,
// } from "lucide-react";

// const DeviceSchedulingSection = () => {
//     return (
//         <div
//             className="bg-white rounded-xl sm:rounded-2xl shadow-md border w-full sm:w-[280px] md:w-[300px] -ml-0 sm:-ml-2 md:-ml-4 border-gray-200 p-3 sm:p-4 flex flex-col"
//             style={{ maxHeight: "480px" }}
//         >
//             {/* Header */}
//             <div className="flex items-center justify-between mb-3 sm:mb-4 pb-2 border-b border-gray-200 gap-2">
//                 <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 truncate flex-1">
//                     AC-Device-01
//                 </h3>

//                 <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium bg-yellow-500 text-white">
//                     <Lock className="w-3.5 h-3.5" />
//                     <span>Locked</span>
//                     <span className="text-xs">▼</span>
//                 </button>
//             </div>

//             {/* Fault + Energy */}
//             <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-4">
//                 <div className="bg-red-50 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-red-200">
//                     <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
//                         <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-red-600" />
//                         <span className="text-[10px] sm:text-xs font-medium text-red-600">
//                             Fault Devices
//                         </span>
//                     </div>
//                     <p className="text-xs sm:text-sm font-bold text-gray-900">
//                         2 Devices
//                     </p>
//                 </div>

//                 <div className="bg-yellow-50 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-yellow-200">
//                     <div className="flex items-center gap-1.5 sm:gap-2 mb-1">
//                         <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-600" />
//                         <span className="text-[10px] sm:text-xs font-medium text-yellow-600">
//                             Energy
//                         </span>
//                     </div>
//                     <p className="text-xs sm:text-sm font-bold text-gray-900">
//                         12.6 KV
//                     </p>
//                 </div>
//             </div>

//             {/* Events Header */}
//             <div className="flex items-center justify-between mb-3 gap-2">
//                 <div className="flex items-center gap-1.5 sm:gap-2">
//                     <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600" />
//                     <h4 className="text-xs sm:text-sm font-bold text-gray-900">
//                         Events
//                     </h4>
//                     <span className="text-[10px] sm:text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
//                         2
//                     </span>
//                 </div>

//                 <button className="w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center text-blue-600 hover:bg-blue-50 rounded-full border border-blue-200 bg-white">
//                     <Plus className="w-4 h-4" />
//                 </button>
//             </div>

//             {/* Events List */}
//             <div
//                 className="space-y-2 sm:space-y-3 overflow-y-auto pr-2 flex-1 custom-scrollbar"
//                 style={{ maxHeight: "200px" }}
//             >
//                 {/* Event Card */}
//                 <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-2 sm:p-2.5 border border-green-200 hover:shadow-md relative pb-12">
//                     {/* Actions */}
//                     <div className="absolute top-2 right-1 flex gap-1">
//                         <button className="p-1 text-blue-600">
//                             <Edit className="w-4 h-4" />
//                         </button>
//                         <button className="p-1 text-red-600">
//                             <Trash2 className="w-4 h-4" />
//                         </button>
//                     </div>

//                     <div className="pr-10">
//                         <h5 className="text-xs sm:text-sm font-bold text-gray-900 truncate">
//                             Morning Cooling
//                         </h5>

//                         <div className="space-y-2 mt-2">
//                             <div className="flex items-center gap-2 text-xs text-gray-700">
//                                 <Calendar className="w-3.5 h-3.5 text-blue-600" />
//                                 Mon, 12 Aug
//                             </div>

//                             <div className="flex items-center gap-2 text-xs text-gray-700">
//                                 <Clock className="w-3.5 h-3.5 text-blue-600" />
//                                 9:00 AM → 11:00 AM
//                             </div>

//                             <div className="flex items-center gap-2 text-xs text-gray-700">
//                                 <Thermometer className="w-3.5 h-3.5 text-red-500" />
//                                 <span className="font-semibold text-red-600">22°C</span>
//                             </div>

//                             <div className="flex gap-1 flex-wrap">
//                                 <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
//                                     Mon-Fri
//                                 </span>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Badges */}
//                     <div className="absolute bottom-2 left-2 space-y-1">
//                         <span className="text-xs font-semibold px-2 py-0.5 rounded bg-green-100 text-green-700 border border-green-300">
//                             Active
//                         </span>
//                         <span className="text-xs text-purple-600 bg-purple-50 px-2 py-0.5 rounded flex items-center gap-1 w-fit">
//                             <Repeat className="w-3 h-3" />
//                             Recurring
//                         </span>
//                     </div>

//                     {/* Enable / Disable */}
//                     <div className="absolute bottom-2 right-2">
//                         <button className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-700 flex items-center gap-1">
//                             <Square className="w-3 h-3" />
//                             Disable
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DeviceSchedulingSection;

/////-----------------------------13/1/26------------------

// import React from "react";
// import {
//     Plus,
//     Lock,
//     AlertTriangle,
//     Zap,
//     Edit,
//     Trash2,
//     Square,
//     Calendar,
//     Clock,
//     Thermometer,
//     Repeat,
// } from "lucide-react";

// const DeviceSchedulingSection = () => {
//     return (
//         <div className="bg-white rounded-xl sm:rounded-2xl shadow-md border border-gray-200 p-3 sm:p-2 flex flex-col w-full">
//             {/* Header */}
//             <div className="flex items-center justify-between mb-3 sm:mb-2 pb-2 border-b border-gray-200 gap-2">
//                 <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 truncate">
//                     AC-Device-01
//                 </h3>

//                 <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium bg-yellow-500 text-white">
//                     <Lock className="w-3.5 h-3.5" />
//                     <span>Locked</span>
//                     <span className="text-xs">▼</span>
//                 </button>
//             </div>

//             {/* Fault + Energy */}
//             <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3 sm:mb-2">
//                 <div className="bg-red-50 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-red-200">
//                     <div className="flex items-center gap-2 mb-1">
//                         <AlertTriangle className="w-4 h-4 text-red-600" />
//                         <span className="text-xs font-medium text-red-600">
//                             Fault Devices
//                         </span>
//                     </div>
//                     <p className="text-sm font-bold text-gray-900">2 Devices</p>
//                 </div>

//                 <div className="bg-yellow-50 rounded-lg sm:rounded-xl p-2 sm:p-3 border border-yellow-200">
//                     <div className="flex items-center gap-2 mb-1">
//                         <Zap className="w-4 h-4 text-yellow-600" />
//                         <span className="text-xs font-medium text-yellow-600">
//                             Energy
//                         </span>
//                     </div>
//                     <p className="text-sm font-bold text-gray-900">12.6 KV</p>
//                 </div>
//             </div>

//             {/* Events Header */}
//             <div className="flex items-center justify-between mb-1 gap-2">
//                 <div className="flex items-center gap-2">
//                     <Calendar className="w-4 h-4 text-blue-600" />
//                     <h4 className="text-sm font-bold text-gray-900">Events</h4>
//                     <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
//                         2
//                     </span>
//                 </div>

//                 <button className="w-7 h-7 flex items-center justify-center text-blue-600 hover:bg-blue-50 rounded-full border border-blue-200 bg-white">
//                     <Plus className="w-4 h-4" />
//                 </button>
//             </div>

//             {/* Events List */}
//             <div className="space-y-3 overflow-y-auto pr-1 flex-1">
//                 {/* Event Card */}
//                 <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-2 border border-green-200 hover:shadow-md relative pb-12">
//                     {/* Actions */}
//                     <div className="absolute top-2 right-2 flex gap-1">
//                         <button className="p-1 text-blue-600">
//                             <Edit className="w-4 h-4" />
//                         </button>
//                         <button className="p-1 text-red-600">
//                             <Trash2 className="w-4 h-4" />
//                         </button>
//                     </div>

//                     <h5 className="text-sm font-bold text-gray-900 truncate">
//                         Morning Cooling
//                     </h5>

//                     <div className="space-y-2 mt-2">
//                         <div className="flex items-center gap-2 text-xs text-gray-700">
//                             <Calendar className="w-3.5 h-3.5 text-blue-600" />
//                             Mon, 12 Aug
//                         </div>

//                         <div className="flex items-center gap-2 text-xs text-gray-700">
//                             <Clock className="w-3.5 h-3.5 text-blue-600" />
//                             9:00 AM → 11:00 AM
//                         </div>

//                         <div className="flex items-center gap-2 text-xs text-gray-700">
//                             <Thermometer className="w-3.5 h-3.5 text-red-500" />
//                             <span className="font-semibold text-red-600">22°C</span>
//                         </div>

//                         <div className="flex flex-wrap gap-">
//                             <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
//                                 Mon-Fri
//                             </span>
//                         </div>
//                     </div>

//                     {/* Badges */}
//                     <div className="absolute bottom-2 left-2 space-y-1">
//                         <span className="text-xs font-semibold px-2 py-0.5 rounded bg-green-100 text-green-700 border border-green-300">
//                             Active
//                         </span>
//                         <span className="text-xs text-purple-600 bg-purple-50 px-2 py-0.5 rounded flex items-center gap-1 w-fit">
//                             <Repeat className="w-3 h-3" />
//                             Recurring
//                         </span>
//                     </div>

//                     {/* Enable / Disable */}
//                     <div className="absolute bottom-2 right-2">
//                         <button className="px-2 py-1 rounded text-xs font-medium bg-yellow-100 text-yellow-700 flex items-center gap-1">
//                             <Square className="w-3 h-3" />
//                             Disable
//                         </button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DeviceSchedulingSection;
















//------------------------------------------current-----------------





import React from "react";
import {
    Plus,
    Lock,
    AlertTriangle,
    Zap,
    Edit,
    Trash2,
    Square,
    Calendar,
    Clock,
    Thermometer,
    Repeat,
} from "lucide-react";

const DeviceSchedulingSection = () => {
    return (
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-md border border-gray-200 p-3 sm:p-2 flex flex-col w-full">
            {/* Header */}
            <div className="flex items-center justify-between mb-3 sm:mb-2 pb-2 border-b border-gray-200 gap-2">
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 truncate">
                    AC-Device-01
                </h3>

                <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium bg-yellow-500 text-white">
                    <Lock className="w-3.5 h-3.5" />
                    <span>Locked</span>
                    <span className="text-xs">▼</span>
                </button>
            </div>

            {/* Fault + Energy */}
            <div className="grid grid-cols-2 gap-2 sm:mb-2">
                <div className="rounded-lg sm:rounded-xl p-2 border border-red-200">
                    <div className="flex items-center justify-center gap-2 mb-1">
                        <AlertTriangle className="w-4 h-4 text-red-600" />
                        <span className="text-[10px] md:text-s font-medium text-red-600">
                            Fault Devices
                        </span>
                    </div>
                    <p className="text-xs md:text-sm text-center font-bold text-gray-900">5-Dec-25</p>
                </div>

                <div className=" rounded-lg sm:rounded-xl p-2 sm:p-3 border border-yellow-200">
                    <div className="flex items-center justify-center gap-2 mb-1">
                        <Zap className="w-4 h-4 text-yellow-600" />
                        <span className="text-[10px] md:text-s font-medium text-yellow-600">
                            Energy
                        </span>
                    </div>
                    <p className="text-xs md:text-sm text-center font-bold text-gray-900">12.6 KV</p>
                </div>
            </div>

            {/* Events Header */}
            <div className="flex items-center justify-between mt-2 sm:mt-0 gap-2">
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-blue-600" />
                    <h4 className="text-sm font-bold text-gray-900">Events</h4>
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                        2
                    </span>
                </div>

                <button className="w-7 h-7 flex items-center justify-center text-blue-600 hover:bg-blue-50 rounded-full border border-blue-200 bg-white">
                    <Plus className="w-4 h-4" />
                </button>
            </div>

            {/* Events List */}
            <div className="overflow-y-auto max-h-[60vh] lg:max-h-[25vh] 2xl:max-h-[50vh] flex-1">
                {/* Event Card One*/}
                <div className="bg-gradient-to-br m-2 from-white to-gray-50 rounded-lg p-2 border border-green-200 hover:shadow-md relative pb-10">

                    <div className="">
                        <div className="flex flex-col items-center justify-center text-xs text-gray-700">
                            {/* Time */}
                            <div className="font-medium">
                                <span>9:00 PM</span>
                                <span className="mx-3">-</span>
                                <span>11:00 AM</span>
                            </div>

                            {/* Labels */}
                            <div className="flex justify-evenly w-full max-w-[150px] text-gray-500 my-1">
                                <span>Start Time</span>
                                <span>End Time</span>
                            </div>
                        </div>


                        <div className="flex items-center gap-2 text-xs text-gray-700">
                            <span className="font-semibold text-red-600">Command:ON</span>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">

                        {/* Days */}
                        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                            Mon-Fri
                        </span>

                        {/* Enable / Disable */}
                        <button className="px-2 py-1 rounded-xl text-xs font-medium bg-[#33B057] text-white flex items-center gap-1">
                            {/* <Square className="w-3 h-3" /> */}
                            Disable
                        </button>

                    </div>

                </div>
                {/* Event Card Two*/}
                <div className="bg-gradient-to-br m-2 from-white to-gray-50 rounded-lg p-2 border border-green-200 hover:shadow-md relative pb-10">

                    <div className="">
                        <div className="flex flex-col items-center justify-center text-xs text-gray-700">
                            {/* Time */}
                            <div className="font-medium">
                                <span>9:00 PM</span>
                                <span className="mx-3">-</span>
                                <span>11:00 AM</span>
                            </div>

                            {/* Labels */}
                            <div className="flex justify-evenly w-full max-w-[150px] text-gray-500 my-1">
                                <span>Start Time</span>
                                <span>End Time</span>
                            </div>
                        </div>


                        <div className="flex items-center gap-2 text-xs text-gray-700">
                            <span className="font-semibold text-red-600">Command:ON</span>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">

                        {/* Days */}
                        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                            Mon-Fri
                        </span>

                        {/* Enable / Disable */}
                        <button className="px-2 py-1 rounded-xl text-xs font-medium bg-[#33B057] text-white flex items-center gap-1">
                            {/* <Square className="w-3 h-3" /> */}
                            Disable
                        </button>

                    </div>

                </div>
                {/* Event Card Two*/}
                <div className="bg-gradient-to-br m-2 from-white to-gray-50 rounded-lg p-2 border border-green-200 hover:shadow-md relative pb-10">

                    <div className="">
                        <div className="flex flex-col items-center justify-center text-xs text-gray-700">
                            {/* Time */}
                            <div className="font-medium">
                                <span>9:00 PM</span>
                                <span className="mx-3">-</span>
                                <span>11:00 AM</span>
                            </div>

                            {/* Labels */}
                            <div className="flex justify-evenly w-full max-w-[150px] text-gray-500 my-1">
                                <span>Start Time</span>
                                <span>End Time</span>
                            </div>
                        </div>


                        <div className="flex items-center gap-2 text-xs text-gray-700">
                            <span className="font-semibold text-red-600">Command:ON</span>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">

                        {/* Days */}
                        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                            Mon-Fri
                        </span>

                        {/* Enable / Disable */}
                        <button className="px-2 py-1 rounded-xl text-xs font-medium bg-[#33B057] text-white flex items-center gap-1">
                            {/* <Square className="w-3 h-3" /> */}
                            Disable
                        </button>

                    </div>

                </div>
                {/* Event Card Two*/}
                <div className="bg-gradient-to-br m-2 from-white to-gray-50 rounded-lg p-2 border border-green-200 hover:shadow-md relative pb-10">

                    <div className="">
                        <div className="flex flex-col items-center justify-center text-xs text-gray-700">
                            {/* Time */}
                            <div className="font-medium">
                                <span>9:00 PM</span>
                                <span className="mx-3">-</span>
                                <span>11:00 AM</span>
                            </div>

                            {/* Labels */}
                            <div className="flex justify-evenly w-full max-w-[150px] text-gray-500 my-1">
                                <span>Start Time</span>
                                <span>End Time</span>
                            </div>
                        </div>


                        <div className="flex items-center gap-2 text-xs text-gray-700">
                            <span className="font-semibold text-red-600">Command:ON</span>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">

                        {/* Days */}
                        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                            Mon-Fri
                        </span>

                        {/* Enable / Disable */}
                        <button className="px-2 py-1 rounded-xl text-xs font-medium bg-[#33B057] text-white flex items-center gap-1">
                            {/* <Square className="w-3 h-3" /> */}
                            Disable
                        </button>

                    </div>

                </div>
                {/* Event Card Two*/}
                <div className="bg-gradient-to-br m-2 from-white to-gray-50 rounded-lg p-2 border border-green-200 hover:shadow-md relative pb-10">

                    <div className="">
                        <div className="flex flex-col items-center justify-center text-xs text-gray-700">
                            {/* Time */}
                            <div className="font-medium">
                                <span>9:00 PM</span>
                                <span className="mx-3">-</span>
                                <span>11:00 AM</span>
                            </div>

                            {/* Labels */}
                            <div className="flex justify-evenly w-full max-w-[150px] text-gray-500 my-1">
                                <span>Start Time</span>
                                <span>End Time</span>
                            </div>
                        </div>


                        <div className="flex items-center gap-2 text-xs text-gray-700">
                            <span className="font-semibold text-red-600">Command:ON</span>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">

                        {/* Days */}
                        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                            Mon-Fri
                        </span>

                        {/* Enable / Disable */}
                        <button className="px-2 py-1 rounded-xl text-xs font-medium bg-[#33B057] text-white flex items-center gap-1">
                            {/* <Square className="w-3 h-3" /> */}
                            Disable
                        </button>

                    </div>

                </div>
                {/* Event Card Two*/}
                <div className="bg-gradient-to-br m-2 from-white to-gray-50 rounded-lg p-2 border border-green-200 hover:shadow-md relative pb-10">

                    <div className="">
                        <div className="flex flex-col items-center justify-center text-xs text-gray-700">
                            {/* Time */}
                            <div className="font-medium">
                                <span>9:00 PM</span>
                                <span className="mx-3">-</span>
                                <span>11:00 AM</span>
                            </div>

                            {/* Labels */}
                            <div className="flex justify-evenly w-full max-w-[150px] text-gray-500 my-1">
                                <span>Start Time</span>
                                <span>End Time</span>
                            </div>
                        </div>


                        <div className="flex items-center gap-2 text-xs text-gray-700">
                            <span className="font-semibold text-red-600">Command:ON</span>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">

                        {/* Days */}
                        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                            Mon-Fri
                        </span>

                        {/* Enable / Disable */}
                        <button className="px-2 py-1 rounded-xl text-xs font-medium bg-[#33B057] text-white flex items-center gap-1">
                            {/* <Square className="w-3 h-3" /> */}
                            Disable
                        </button>

                    </div>

                </div>
                {/* Event Card Two*/}
                <div className="bg-gradient-to-br m-2 from-white to-gray-50 rounded-lg p-2 border border-green-200 hover:shadow-md relative pb-10">

                    <div className="">
                        <div className="flex flex-col items-center justify-center text-xs text-gray-700">
                            {/* Time */}
                            <div className="font-medium">
                                <span>9:00 PM</span>
                                <span className="mx-3">-</span>
                                <span>11:00 AM</span>
                            </div>

                            {/* Labels */}
                            <div className="flex justify-evenly w-full max-w-[150px] text-gray-500 my-1">
                                <span>Start Time</span>
                                <span>End Time</span>
                            </div>
                        </div>


                        <div className="flex items-center gap-2 text-xs text-gray-700">
                            <span className="font-semibold text-red-600">Command:ON</span>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between">

                        {/* Days */}
                        <span className="text-xs bg-gray-100 px-2 py-0.5 rounded">
                            Mon-Fri
                        </span>

                        {/* Enable / Disable */}
                        <button className="px-2 py-1 rounded-xl text-xs font-medium bg-[#33B057] text-white flex items-center gap-1">
                            {/* <Square className="w-3 h-3" /> */}
                            Disable
                        </button>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default DeviceSchedulingSection;
