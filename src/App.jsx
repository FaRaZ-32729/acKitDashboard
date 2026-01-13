// // src/App.jsx
// import { useState } from 'react';
// import Sidebar from './components/Sidebar';
// import DashboardHeader from './components/DashboardHeader';
// import VenueDetailsPage from './pages/VenueDetailsPage';

// function App() {
//   const [isSidebarHovered, setIsSidebarHovered] = useState(false);
//   const user = "faraz";

//   return (
//     <>
//       <DashboardHeader />
//       <div className="flex relative">
//         {/* Sidebar */}
//         <Sidebar isHovered={isSidebarHovered} onHover={() => setIsSidebarHovered(true)} onLeave={() => setIsSidebarHovered(false)} />

//         {/* Main Content */}
//         <div className={`flex-1 flex flex-col transition-all duration-300 ml-16 `}>
//           <VenueDetailsPage />
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";
import VenueDetailsPage from "./pages/VenueDetailsPage";

// function App() {
//     const [sidebarOpen, setSidebarOpen] = useState(false); // for hover on desktop
//     const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false); // for mobile/tablet toggle

//     return (
//       <div className="relative min-h-screen bg-gray-50">
//         {/* Sidebar */}
//         <Sidebar
//           sidebarOpen={sidebarOpen}
//           mobileOpen={mobileSidebarOpen}
//           setMobileOpen={setMobileSidebarOpen}
//         />

//         {/* Overlay for mobile */}
//         {mobileSidebarOpen && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-30 z-40 lg:hidden"
//             onClick={() => setMobileSidebarOpen(false)}
//           />
//         )}

//         {/* MAIN WRAPPER */}
//         <div
//           className={`
//             transition-all duration-300
//             ml-16
//             lg:${sidebarOpen ? "ml-64" : "ml-16"}
//           `}
//         >
//           {/* Header */}
//           <DashboardHeader setMobileSidebarOpen={setMobileSidebarOpen} />

//           {/* Page Content */}
//           <main className="w-full">
//             <VenueDetailsPage />
//           </main>
//         </div>
//       </div>
//     );
//   }

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false); // desktop hover
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false); // mobile toggle

  return (
    <div className="relative min-h-screen bg-gray-50 ">
      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        mobileOpen={mobileSidebarOpen}
        setMobileOpen={setMobileSidebarOpen}
      />

      {/* Overlay for mobile */}
      {mobileSidebarOpen && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }} // 30% opaque black
          onClick={() => setMobileSidebarOpen(false)}
        />
      )}


      {/* MAIN WRAPPER */}
      <div
        className={`
          transition-all duration-300
          ml-0 lg:ml-16
          ${sidebarOpen ? "lg:ml-64" : "lg:ml-16"}
        `}
      >
        {/* Header */}
        <DashboardHeader setMobileSidebarOpen={setMobileSidebarOpen} />

        {/* Page Content */}
        <main className="w-full">
          <VenueDetailsPage />
        </main>
      </div>
    </div>
  );
}


export default App;
