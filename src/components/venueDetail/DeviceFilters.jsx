// import React from "react";
// import { AlertTriangle, Thermometer, Power, Lock, Search } from "lucide-react";

// const DeviceFilters = () => {
//     return (
//         <section className="rounded-xl p-2 sm:p-3 md:p-4 mb-1">
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">
//                 {/* Alert Button */}
//                 <div className="col-span-2 sm:col-span-1">
//                     <button
//                         type="button"
//                         className="w-full px-2 sm:px-3 py-2 border border-blue-300 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1.5 sm:gap-2 bg-blue-500 text-white hover:bg-blue-600"
//                     >
//                         <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                         <span className="truncate">Alert</span>
//                     </button>
//                 </div>

//                 {/* Temperature */}
//                 <div className="flex justify-center">
//                     <div className="flex items-center border border-gray-300 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
//                         <Thermometer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />

//                         <input
//                             type="number"
//                             min="16"
//                             max="30"
//                             defaultValue="22"
//                             placeholder="Temp"
//                             readOnly
//                             className="

//         bg-transparent
//         text-white
//         text-xs sm:text-sm
//         text-center
//         border-none
//         focus:outline-none
//       "
//                         />

//                         <span className="text-white text-xs sm:text-sm">°C</span>
//                     </div>
//                 </div>


//                 {/* Status */}
//                 <div>
//                     <div className="relative">
//                         <Power className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 pointer-events-none" />
//                         <select
//                             defaultValue=""
//                             disabled
//                             className="w-full pl-8 sm:pl-10 pr-2 sm:pr-3 py-1.5 sm:py-2 border border-gray-300 rounded-lg text-xs sm:text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
//                         >
//                             <option value="" disabled>Status</option>
//                             <option value="on">On</option>
//                             <option value="off">Off</option>
//                         </select>
//                     </div>
//                 </div>

//                 {/* Lock */}
//                 <div>
//                     <div className="relative">
//                         <Lock className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400 pointer-events-none" />
//                         <select
//                             defaultValue=""
//                             disabled
//                             className="w-full pl-8 sm:pl-10 pr-2 sm:pr-3 py-1.5 sm:py-2 border border-blue-300 rounded-lg text-xs sm:text-sm font-medium bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-blue-300"
//                         >
//                             <option value="" disabled>Lock</option>
//                             <option value="locked">Locked</option>
//                             <option value="unlocked">Unlocked</option>
//                         </select>
//                     </div>
//                 </div>

//                 {/* Search */}
//                 <div className="col-span-2 sm:col-span-1">
//                     <div className="relative">
//                         <Search className="absolute left-2 sm:left-3 top-1/2 transform -translate-y-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 text-white pointer-events-none" />
//                         <input
//                             type="text"
//                             defaultValue="Search"
//                             readOnly
//                             placeholder="Search..."
//                             className="w-full pl-8 sm:pl-10 pr-2 sm:pr-3 py-1.5 sm:py-2 border border-blue-300 rounded-lg text-xs sm:text-sm font-medium bg-blue-500 text-white placeholder:text-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300"
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default DeviceFilters;


// import React from "react";
// import { AlertTriangle, Thermometer, Power, Lock, Search } from "lucide-react";

// const DeviceFilters = () => {
//     return (
//         <section className="rounded-xl p-2 sm:p-3 md:p-4 mb-1">
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">

//                 {/* Alert Button */}
//                 <div className="col-span-2 sm:col-span-1">
//                     <button
//                         type="button"
//                         className="w-full px-2 sm:px-3 py-2 border border-blue-300 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1.5 sm:gap-2 bg-blue-500 text-white hover:bg-blue-600"
//                     >
//                         <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
//                         <span className="truncate">Alert</span>
//                     </button>
//                 </div>

//                 {/* Temperature */}
//                 <div className="flex justify-center">
//                     <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2">
//                         <Thermometer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
//                         <input
//                             type="number"
//                             min="16"
//                             max="30"
//                             defaultValue="22"
//                             readOnly
//                             className="bg-transparent text-white text-xs sm:text-sm text-center border-none focus:outline-none"
//                         />
//                         <span className="text-white text-xs sm:text-sm">°C</span>
//                     </div>
//                 </div>

//                 {/* Status */}
//                 <div className="flex justify-center">
//                     <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 ">
//                         <Power className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
//                         <select
//                             defaultValue=""
//                             disabled
//                             className="w-full text-xs sm:text-sm border-none focus:outline-none bg-transparent text-white"
//                         >
//                             <option value="" disabled>Status</option>
//                             <option value="on">On</option>
//                             <option value="off">Off</option>
//                         </select>
//                     </div>
//                 </div>

//                 {/* Lock */}
//                 <div className="flex justify-center">
//                     <div className="flex items-center gap-2 border border-blue-300 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 bg-blue-500">
//                         <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
//                         <select
//                             defaultValue=""
//                             disabled
//                             className="w-full text-xs sm:text-sm border-none focus:outline-none bg-transparent text-white"
//                         >
//                             <option value="" disabled>Lock</option>
//                             <option value="locked">Locked</option>
//                             <option value="unlocked">Unlocked</option>
//                         </select>
//                     </div>
//                 </div>

//                 {/* Search */}
//                 <div className=" flex justify-center">
//                     <div className="flex items-center gap-2 border border-blue-300 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 bg-blue-500  w-[90px] sm:w-full">
//                         <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
//                         <input
//                             type="text"
//                             defaultValue="Search"
//                             readOnly
//                             placeholder="Search..."
//                             className="w-full text-xs sm:text-sm border-none bg-transparent text-white placeholder:text-blue-100 focus:outline-none"
//                         />
//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default DeviceFilters;


import React from "react";
import { AlertTriangle, Thermometer, Power, Lock, Search } from "lucide-react";

const DeviceFilters = () => {
    return (
        <section className="rounded-xl p-2 sm:p-3 md:p-4 mb-1">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 sm:gap-3">

                {/* Alert Button */}
                <div className="col-span-2 sm:col-span-1">
                    <button
                        type="button"
                        className="w-full px-2 sm:px-3 py-2 border border-blue-300 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center justify-center gap-1.5 sm:gap-2 bg-blue-500 text-white hover:bg-blue-600"
                    >
                        <AlertTriangle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                        <span className="truncate">Alert</span>
                    </button>
                </div>

                {/* Temperature */}
                <div className="col-span-1 sm:col-span-1">
                    <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 w-full">
                        <Thermometer className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        <input
                            type="number"
                            min="16"
                            max="30"
                            defaultValue="22"
                            readOnly
                            className="w-full bg-transparent text-white text-xs sm:text-sm text-center border-none focus:outline-none"
                        />
                        <span className="text-white text-xs sm:text-sm">°C</span>
                    </div>
                </div>

                {/* Status */}
                <div className="col-span-1 sm:col-span-1">
                    <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 w-full">
                        <Power className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        <select
                            defaultValue=""
                            disabled
                            className="w-full text-xs sm:text-sm border-none focus:outline-none bg-transparent text-white"
                        >
                            <option value="" disabled>Status</option>
                            <option value="on">On</option>
                            <option value="off">Off</option>
                        </select>
                    </div>
                </div>

                {/* Lock */}
                <div className="col-span-1 sm:col-span-1">
                    <div className="flex items-center gap-2 border border-blue-300 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 bg-blue-500 w-full">
                        <Lock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        <select
                            defaultValue=""
                            disabled
                            className="w-full text-xs sm:text-sm border-none focus:outline-none bg-transparent text-white"
                        >
                            <option value="" disabled>Lock</option>
                            <option value="locked">Locked</option>
                            <option value="unlocked">Unlocked</option>
                        </select>
                    </div>
                </div>

                {/* Search */}
                <div className="col-span-1 sm:col-span-1">
                    <div className="flex items-center gap-2 border border-blue-300 rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 bg-blue-500 w-full">
                        <Search className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                        <input
                            type="text"
                            defaultValue="Search"
                            readOnly
                            placeholder="Search..."
                            className="w-full text-xs sm:text-sm border-none bg-transparent text-white placeholder:text-blue-100 focus:outline-none"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default DeviceFilters;
