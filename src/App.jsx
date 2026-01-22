import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DashboardHeader from "./components/DashboardHeader";
import VenueDetailsPage from "./pages/VenueDetailsPage";

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
