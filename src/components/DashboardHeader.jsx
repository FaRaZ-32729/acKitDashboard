// import React from "react";
// import { Menu, RefreshCw, LogOut, AlertCircle } from "lucide-react";

// const DashboardHeader = () => {
//     return (
//         // <header className="bg-white shadow-md border-b sticky top-0 z-20 w-full min-h-[60px] sm:h-[10vh] flex items-center">
//         <header className="
//   bg-white
//   shadow-md
//   border-b
//   sticky top-0
//   z-20
//   w-full
//   min-h-[60px]
//   sm:h-[10vh]
//   flex
//   items-center
//   flex-shrink-0
// ">
//             <div className="px-3 sm:px-4 md:px-6 w-full">
//                 <div className="flex items-center justify-between gap-2 sm:gap-3">

//                     {/* LEFT */}
//                     <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
//                         {/* Menu */}
//                         <button className="lg:hidden p-1.5 sm:p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
//                             <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
//                         </button>

//                         {/* Title */}
//                         <div className="min-w-0 flex-1 lg:pl-4">
//                             <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 truncate">
//                                 Dashboard
//                             </h1>
//                             <p className="text-[11px] sm:text-xs md:text-sm text-gray-600 truncate">
//                                 Welcome back, Admin
//                             </p>
//                         </div>
//                     </div>

//                     {/* RIGHT */}
//                     <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-shrink-0">
//                         {/* Alerts */}
//                         <div className="hidden md:flex items-center gap-2 bg-red-50 px-2 sm:px-3 py-1 rounded-lg border border-red-200">
//                             <AlertCircle className="w-4 h-4 text-red-600" />
//                             <span className="text-xs sm:text-sm font-medium text-red-800">
//                                 3 Alerts
//                             </span>
//                         </div>

//                         {/* Refresh */}
//                         <button className="p-1.5 sm:p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
//                             <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
//                         </button>

//                         {/* Logout */}
//                         <button className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
//                             <LogOut className="w-4 h-4" />
//                             <span className="hidden sm:inline">Logout</span>
//                         </button>
//                     </div>

//                 </div>
//             </div>
//         </header>
//     );
// };

// export default DashboardHeader;


import React from "react";
import { Menu, RefreshCw, LogOut, AlertCircle } from "lucide-react";

const DashboardHeader = ({ setMobileSidebarOpen }) => {
    return (
        <header className="bg-white shadow-md border-b sticky top-0 z-30 w-full min-h-[60px] sm:h-[10vh] flex items-center flex-shrink-0">
            <div className="px-3 sm:px-4 md:px-6 w-full">
                <div className="flex items-center justify-between gap-2 sm:gap-3">
                    {/* LEFT */}
                    <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                        {/* Menu Button - MOBILE */}
                        <button
                            className="lg:hidden p-1.5 sm:p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            onClick={() => setMobileSidebarOpen((prev) => !prev)}
                        >
                            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>

                        {/* Title */}
                        <div className="min-w-0 flex-1 lg:pl-4">
                            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 truncate">
                                Dashboard
                            </h1>
                            <p className="text-[11px] sm:text-xs md:text-sm text-gray-600 truncate">
                                Welcome back, Admin
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3 flex-shrink-0">
                        {/* Alerts */}
                        <div className="hidden md:flex items-center gap-2 bg-red-50 px-2 sm:px-3 py-1 rounded-lg border border-red-200">
                            <AlertCircle className="w-4 h-4 text-red-600" />
                            <span className="text-xs sm:text-sm font-medium text-red-800">
                                3 Alerts
                            </span>
                        </div>

                        {/* Refresh */}
                        <button className="p-1.5 sm:p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                            <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5" />
                        </button>

                        {/* Logout */}
                        <button className="flex items-center gap-1.5 px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-700 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors">
                            <LogOut className="w-4 h-4" />
                            <span className="hidden sm:inline">Logout</span>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};


export default DashboardHeader;
