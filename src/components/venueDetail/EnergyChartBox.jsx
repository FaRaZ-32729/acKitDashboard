// import React, { useState } from 'react';
// import { Plus, Minus, Lock, Unlock } from 'lucide-react';

// const EnergyChartBox = () => {
//     const [isLocked, setIsLocked] = useState(true); // Lock state
//     const [dropdownOpen, setDropdownOpen] = useState(false); // Dropdown visibility

//     // Toggle lock state
//     const handleLockToggle = (state) => {
//         setIsLocked(state);
//         setDropdownOpen(false);
//     };

//     return (
//         <div
//             className="w-full sm:w-[280px] md:w-[300px] -mt-8 sm:-mt-16 md:-mt-32 bg-blue-500 shadow-sm -ml-0 sm:-ml-2 md:-ml-4 rounded-xl sm:rounded-2xl overflow-visible"
//             style={{ maxHeight: '130px' }}
//         >
//             {/* Header */}
//             <div className="bg-blue-500 px-3 sm:px-4 md:px-6 py-1.5 rounded-t-xl sm:rounded-t-2xl">
//                 <div className="flex items-center justify-between mb-1.5">
//                     <span className="text-white font-semibold text-sm sm:text-base md:text-xl truncate pr-2">
//                         Main Venue
//                     </span>

//                     <div className="flex items-center gap-2">
//                         <span className="text-white text-xs font-medium">ON</span>

//                         {/* Power Toggle (Static) */}
//                         <button
//                             className="relative inline-flex h-5 w-10 items-center rounded-full bg-green-500 transition-all focus:outline-none"
//                         >
//                             <span className="inline-block h-3.5 w-3.5 transform translate-x-5 rounded-full bg-white transition-transform" />
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom Card */}
//             <div className="bg-blue-500 p-1 sm:p-1.5 relative overflow-visible rounded-b-xl sm:rounded-b-2xl">
//                 {/* Temperature Control */}
//                 <div className="mb-1">
//                     <div className="flex items-center gap-1 sm:gap-1.5 bg-white border border-gray-300 rounded-lg sm:rounded-xl px-1.5 sm:px-2 py-0.5 sm:py-1 w-fit">
//                         <button className="p-0.5 sm:p-1 text-blue-600 rounded">
//                             <Minus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
//                         </button>

//                         <input
//                             type="number"
//                             value={22}
//                             disabled
//                             className="text-[10px] sm:text-xs font-medium text-gray-900 w-10 sm:w-12 text-center bg-transparent border-none focus:outline-none"
//                         />

//                         <span className="text-[10px] sm:text-xs text-gray-600">°C</span>

//                         <button className="p-0.5 sm:p-1 text-blue-600 rounded">
//                             <Plus className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
//                         </button>
//                     </div>
//                 </div>

//                 {/* Lock Dropdown */}
//                 <div className="flex justify-end mt-1">
//                     <div className="relative">
//                         <button
//                             onClick={() => setDropdownOpen(!dropdownOpen)}
//                             className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium transition-colors bg-yellow-500 text-white"
//                         >
//                             <Lock className="w-3.5 h-3.5" />
//                             <span>{isLocked ? 'Locked' : 'Unlocked'}</span>
//                             <span className="text-xs">▼</span>
//                         </button>

//                         {/* Dropdown */}
//                         {dropdownOpen && (
//                             <div className="absolute top-full right-0 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-lg z-50 min-w-[160px]">
//                                 <button
//                                     onClick={() => handleLockToggle(false)}
//                                     className="w-full px-4 py-2 text-left text-sm flex items-center gap-2 hover:bg-gray-50"
//                                 >
//                                     <Unlock className="w-4 h-4 text-gray-600" />
//                                     <span>Unlocked</span>
//                                 </button>

//                                 <button
//                                     onClick={() => handleLockToggle(true)}
//                                     className="w-full px-4 py-2 text-left text-sm flex items-center gap-2 bg-yellow-50 hover:bg-yellow-100 text-yellow-700"
//                                 >
//                                     <Lock className="w-4 h-4 text-yellow-600" />
//                                     <span>Remote Locked</span>
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default EnergyChartBox;


import React from "react";
import { Plus, Minus, Lock } from "lucide-react";

const EnergyChartBox = () => {
    return (
        <div className="w-full bg-blue-500 shadow-sm rounded-xl sm:rounded-2xl overflow-visible ">
            {/* Header */}
            <div className="bg-blue-500 px-3  py-2 rounded-t-xl sm:rounded-t-2xl">
                <div className="flex items-center justify-between">
                    <span className="text-white font-semibold text-sm sm:text-base md:text-lg truncate pr-2">
                        Main Venue
                    </span>

                    <div className="flex items-center gap-2">
                        <span className="text-white text-xs font-medium">ON</span>

                        {/* Static Power Toggle */}
                        <div className="relative inline-flex h-5 w-10 items-center rounded-full bg-green-500">
                            <span className="inline-block h-3.5 w-3.5 translate-x-5 rounded-full bg-white" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Card */}
            <div className="bg-blue-500 p-2 sm:p-3 rounded-b-xl sm:rounded-b-2xl">
                {/* Temperature Control */}
                <div >
                    <div className="flex items-center gap-1.5 bg-white border border-gray-300 rounded-lg sm:rounded-xl px-2 py-1 w-fit">
                        <button className="p-1 text-blue-600 rounded">
                            <Minus className="w-3.5 h-3.5" />
                        </button>

                        <input
                            type="number"
                            value={22}
                            disabled
                            className="text-xs font-medium text-gray-900 w-10 text-center bg-transparent border-none focus:outline-none"
                        />

                        <span className="text-xs text-gray-600">°C</span>

                        <button className="p-1 text-blue-600 rounded">
                            <Plus className="w-3.5 h-3.5" />
                        </button>
                    </div>
                </div>

                {/* Lock Button (Static) */}
                <div className="flex justify-end">
                    <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium bg-yellow-500 text-white">
                        <Lock className="w-3.5 h-3.5" />
                        <span>Locked</span>
                        <span className="text-xs">▼</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EnergyChartBox;
