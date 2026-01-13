// import { useState } from "react";
// import { FaHome, FaChartBar, FaBell, FaCalendar, FaUsers, FaBuilding, FaMapMarkerAlt, FaTemperatureHigh, FaBolt, FaWaveSquare, FaUser, FaBars } from "react-icons/fa";

// const Sidebar = ({ sidebarOpen, mobileOpen, setMobileOpen, activeTab, setActiveTab, user }) => {
//     // desktop hover state
//     const [hoverOpen, setHoverOpen] = useState(false);

//     const isOpen = sidebarOpen || hoverOpen || mobileOpen; // show full sidebar if either desktop hover or mobile open

//     const tabs = [
//         { id: "dashboard", label: "Dashboard", icon: FaHome },
//         { id: "overview", label: "Overview", icon: FaChartBar, count: 0 },
//         { id: "alerts", label: "Alerts", icon: FaBell, count: 0, badge: "red" },
//         { id: "events", label: "Events", icon: FaCalendar, count: 1 },
//         { id: "managers", label: "Managers", icon: FaUsers, count: 3 },
//         { id: "organizations", label: "Organizations", icon: FaBuilding, count: 3 },
//         { id: "venues", label: "Venues", icon: FaMapMarkerAlt, count: 4 },
//         { id: "ac-devices", label: "AC Devices", icon: FaTemperatureHigh, count: 4 },
//         { id: "energy", label: "Energy Consumption", icon: FaBolt, count: 50 },
//         { id: "activity", label: "Activity Logs", icon: FaWaveSquare, count: 50 },
//     ];

//     return (
//         <aside
//             className={`
//         fixed top-0 left-0 h-full bg-gradient-to-b from-blue-900 to-blue-800 text-white z-50 flex flex-col transition-all duration-300 ease-in-out overflow-x-hidden
//         ${isOpen ? "w-64" : "w-16"} 
//         ${mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
//       `}
//             onMouseEnter={() => setHoverOpen(true)}
//             onMouseLeave={() => setHoverOpen(false)}
//         >
//             {/* Sidebar Header */}
//             <div className="flex items-center p-3 sm:p-4 border-b border-blue-700 space-x-3 whitespace-nowrap">
//                 <div className="bg-white rounded-lg p-2 flex items-center justify-center shadow-sm w-8 h-8 flex-shrink-0">
//                     <img src="/logo-half.png" alt="Logo" className="w-6 h-6 object-contain" />
//                 </div>

//                 {/* Animate the text container */}
//                 <div
//                     className={`overflow-hidden transition-all duration-300 ease-in-out`}
//                     style={{ width: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
//                 >
//                     <h2 className="text-base font-bold text-white tracking-tight">Admin Panel</h2>
//                     <p className="text-xs text-blue-200 font-medium mt-0.5">Control Center</p>
//                 </div>
//             </div>


//             {/* Tabs */}
//             <nav className="flex-1 py-1.5 overflow-y-auto">
//                 <div className="px-2">
//                     {tabs.map((tab) => {
//                         const Icon = tab.icon;
//                         const isActive = activeTab === tab.id;
//                         return (
//                             <button
//                                 key={tab.id}
//                                 onClick={() => {
//                                     setActiveTab(tab.id);
//                                     if (mobileOpen) setMobileOpen(false); // auto-close sidebar on mobile
//                                 }}
//                                 className={`w-full flex items-center ${isOpen ? "justify-start px-2" : "justify-center px-2"} py-2 rounded-lg transition-all duration-200 focus:outline-none
//                   ${isActive ? "bg-white text-blue-600 shadow-lg font-semibold" : "text-blue-100 hover:bg-blue-700 hover:text-white"}`}
//                                 title={!isOpen ? tab.label : ""}
//                             >
//                                 <Icon className={`text-lg flex-shrink-0 ${isActive ? "text-blue-600" : "text-white"}`} />
//                                 {isOpen && (
//                                     <>
//                                         <span className="ml-2 text-xs font-medium whitespace-nowrap sm:flex-1 text-left">{tab.label}</span>
//                                         {tab.count !== undefined && (
//                                             <span className={`ml-1.5 py-0.5 px-2 rounded-full text-[10px] font-bold min-w-[18px] text-center
//                         ${tab.badge === "red" && tab.count > 0 ? "bg-red-500 text-white" :
//                                                     isActive ? "bg-blue-100 text-blue-600" : "bg-blue-700 text-blue-100"}`}>
//                                                 {tab.count}
//                                             </span>
//                                         )}
//                                     </>
//                                 )}
//                             </button>
//                         );
//                     })}
//                 </div>
//             </nav>

//             {/* Footer */}
//             <div className="p-2 border-t border-blue-700">
//                 <div className={`flex items-center ${isOpen ? "space-x-2 px-2.5" : "justify-center px-2"} py-2 bg-blue-700 rounded-lg`}>
//                     <div className="bg-blue-600 rounded-full p-1.5 flex-shrink-0">
//                         <FaUser className="w-4 h-4" />
//                     </div>
//                     {isOpen && (
//                         <div className="flex-1 min-w-0">
//                             <p className="text-xs font-medium text-white truncate">{user?.name || "Admin"}</p>
//                             <p className="text-[10px] text-blue-200 truncate mt-0.5 leading-tight">{user?.email || "admin@example.com"}</p>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </aside>
//     );
// };

// export default Sidebar;


import { useState } from "react";
import { FaHome, FaChartBar, FaBell, FaCalendar, FaUsers, FaBuilding, FaMapMarkerAlt, FaTemperatureHigh, FaBolt, FaWaveSquare, FaUser } from "react-icons/fa";

const Sidebar = ({ sidebarOpen, mobileOpen, setMobileOpen, activeTab, setActiveTab, user }) => {
    const [hoverOpen, setHoverOpen] = useState(false);

    // Determine if sidebar is fully open
    const isOpen = sidebarOpen || hoverOpen || mobileOpen;

    const tabs = [
        { id: "dashboard", label: "Dashboard", icon: FaHome },
        { id: "overview", label: "Overview", icon: FaChartBar, count: 0 },
        { id: "alerts", label: "Alerts", icon: FaBell, count: 0, badge: "red" },
        { id: "events", label: "Events", icon: FaCalendar, count: 1 },
        { id: "managers", label: "Managers", icon: FaUsers, count: 3 },
        { id: "organizations", label: "Organizations", icon: FaBuilding, count: 3 },
        { id: "venues", label: "Venues", icon: FaMapMarkerAlt, count: 4 },
        { id: "ac-devices", label: "AC Devices", icon: FaTemperatureHigh, count: 4 },
        { id: "energy", label: "Energy Consumption", icon: FaBolt, count: 50 },
        { id: "activity", label: "Activity Logs", icon: FaWaveSquare, count: 50 },
    ];

    return (
        <aside
            className={`
        fixed top-0 left-0 h-full bg-gradient-to-b from-blue-900 to-blue-800 text-white z-50 flex flex-col
        transition-all duration-300 ease-in-out
        ${mobileOpen ? "w-64 translate-x-0" : "-translate-x-full lg:translate-x-0"}
        w-16 lg:w-16 hover:lg:w-64
      `}
            onMouseEnter={() => setHoverOpen(true)}
            onMouseLeave={() => setHoverOpen(false)}
        >
            {/* Sidebar Header */}
            <div className="flex items-center p-3 sm:p-4 border-b border-blue-700 space-x-3 whitespace-nowrap">
                <div className="bg-white rounded-lg p-2 flex items-center justify-center shadow-sm w-8 h-8 flex-shrink-0">
                    <img src="/logo-half.png" alt="Logo" className="w-6 h-6 object-contain" />
                </div>

                <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out`}
                    style={{ width: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                >
                    <h2 className="text-base font-bold text-white tracking-tight">Admin Panel</h2>
                    <p className="text-xs text-blue-200 font-medium mt-0.5">Control Center</p>
                </div>
            </div>

            {/* Tabs */}
            <nav className="flex-1 py-1.5 overflow-y-auto">
                <div className="px-2">
                    {tabs.map((tab) => {
                        const Icon = tab.icon;
                        const isActive = activeTab === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => {
                                    setActiveTab(tab.id);
                                    if (mobileOpen) setMobileOpen(false);
                                }}
                                className={`w-full flex items-center ${isOpen ? "justify-start px-2" : "justify-center px-2"} py-2 rounded-lg transition-all duration-200 focus:outline-none
                  ${isActive ? "bg-white text-blue-600 shadow-lg font-semibold" : "text-blue-100 hover:bg-blue-700 hover:text-white"}`}
                                title={!isOpen ? tab.label : ""}
                            >
                                <Icon className={`text-lg flex-shrink-0 ${isActive ? "text-blue-600" : "text-white"}`} />
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out`}
                                    style={{ width: isOpen ? "100%" : 0, opacity: isOpen ? 1 : 0 }}
                                >
                                    <span className="ml-2 text-xs font-medium whitespace-nowrap sm:flex-1 text-left">{tab.label}</span>
                                    {tab.count !== undefined && (
                                        <span
                                            className={`ml-1.5 py-0.5 px-2 rounded-full text-[10px] font-bold min-w-[18px] text-center
                        ${tab.badge === "red" && tab.count > 0
                                                    ? "bg-red-500 text-white"
                                                    : isActive
                                                        ? "bg-blue-100 text-blue-600"
                                                        : "bg-blue-700 text-blue-100"
                                                }`}
                                        >
                                            {tab.count}
                                        </span>
                                    )}
                                </div>
                            </button>
                        );
                    })}
                </div>
            </nav>

            {/* Footer */}
            <div className="p-2 border-t border-blue-700">
                <div className={`flex items-center ${isOpen ? "space-x-2 px-2.5" : "justify-center px-2"} py-2 bg-blue-700 rounded-lg`}>
                    <div className="bg-blue-600 rounded-full p-1.5 flex-shrink-0">
                        <FaUser className="w-4 h-4" />
                    </div>
                    <div
                        className={`overflow-hidden transition-all duration-300 ease-in-out`}
                        style={{ width: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    >
                        {isOpen && (
                            <>
                                <p className="text-xs font-medium text-white truncate">{user?.name || "Admin"}</p>
                                <p className="text-[10px] text-blue-200 truncate mt-0.5 leading-tight">{user?.email || "admin@example.com"}</p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;


