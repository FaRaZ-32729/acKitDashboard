import React, { useState } from "react";
import { AlertCircle } from "lucide-react";
import DeviceTable from "../components/venueDetail/DeviceTable";
import DeviceFilters from "../components/venueDetail/DeviceFilters";
import EnergyChartBox from "../components/venueDetail/EnergyChartBox";
import DeviceSchedulingSection from "../components/venueDetail/DeviceSchedulingSection";
import VenueHeader from "../components/venueDetail/VenueHeader";

const VenueDetailsPage = ({
  hideHeader = false,
  hasOrganizations = true,
  sidebarOpen = true,
}) => {
  /* -------------------- STATIC DATA -------------------- */
  const venue = { id: 1, name: "Main Venue" };
  const organizations = [{ id: 1, name: "Demo Organization" }];
  const venues = [{ id: 1, name: "Main Venue" }];
  const devices = [
    { id: 1, name: "AC Unit 01", serialNumber: "AC-001", temperature: 24, isOn: true, isConnected: true, venueId: 1 },
    { id: 2, name: "AC Unit 02", serialNumber: "AC-002", temperature: 22, isOn: false, isConnected: false, venueId: 1 },
  ];
  const events = [];

  /* -------------------- UI STATE -------------------- */
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({});
  const [selectedDevice, setSelectedDevice] = useState(null);

  /* -------------------- KPI VALUES -------------------- */
  const totalDevices = devices.length;
  const faultDevices = 1;
  const venueEnergy = 128.5;

  /* -------------------- Venue Not Found -------------------- */
  if (!venue) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <p className="text-gray-600 text-xl mb-4">Venue not found</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">Go Back</button>
        </div>
      </div>
    );
  }

  /* -------------------- MAIN LAYOUT -------------------- */
  return (
    <div className="w-full bg-white flex flex-col items-center overflow-x-hidden">
      {/* -------------------- HEADER -------------------- */}
      <VenueHeader
        hideHeader={hideHeader}
        venue={venue}
        venues={venues}
        organizations={organizations}
        totalDevices={totalDevices}
        faultDevices={faultDevices}
        venueEnergy={venueEnergy}
        hasOrganizations={hasOrganizations}
      />

      <div className="w-full max-h-screen mx-auto pt-[2%]">
        {/* -------------------- FLEX CONTAINER -------------------- */}
        {/* <div className="flex flex-col md:flex-row justify-between gap-2"> */}
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-6">

          {/* -------------------- LEFT COLUMN -------------------- */}
          <div className="
  w-full 
  lg:w-[68%] 
  flex flex-col 
  gap-5 
  px-3 sm:px-4 
  lg:px-0 
  mb-4 lg:mb-0 lg:ml-5
  order-2 lg:order-1
">
            <div className="bg-blue-500 rounded-xl p-3 sm:p-4 shadow-md flex flex-col flex-1">
              <DeviceFilters
                filters={filters}
                setFilters={setFilters}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />

              <DeviceTable
                filteredDevices={devices}
                devices={devices}
                venue={venue}
                events={events}
                onDeviceSelect={(device) => setSelectedDevice(device)}
              />
            </div>
          </div>


          {/* -------------------- RIGHT COLUMN (Center Vertically) -------------------- */}
          <div className="
  w-full 
  lg:w-[25%] 
  px-3 sm:px-4 
  lg:px-0 
  mb-6 lg:mb-0 
  lg:mr-5
  order-1 lg:order-2
  relative
  lg:absolute
  lg:top-[14%]
  lg:right-1

">
            <div className="flex flex-col flex-1 gap-0 md:gap-6">
              <EnergyChartBox
                venue={venue}
                devices={devices}
                organizationEnergy={venueEnergy}
              />

              {/* Hide on small screens, show on lg+ */}
              <div className="hidden lg:block">
                <DeviceSchedulingSection
                  filteredDevices={devices}
                  events={events}
                  totalEnergy={venueEnergy}
                  selectedDevice={selectedDevice}
                  venue={venue}
                />
              </div>
            </div>
          </div>

        </div>
      </div>
      {/* MOBILE MODAL – Device Scheduling */}
      {selectedDevice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center lg:hidden">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setSelectedDevice(null)}
          />

          {/* Modal Content */}
          <div className="relative bg-white w-[90%] max-h-[85vh] overflow-y-auto rounded-xl shadow-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-sm font-semibold text-gray-800">
                Device Scheduling
              </h2>
              <button
                onClick={() => setSelectedDevice(null)}
                className="text-gray-500 hover:text-gray-700 text-xl"
              >
                ✕
              </button>
            </div>

            <DeviceSchedulingSection
              filteredDevices={devices}
              events={events}
              totalEnergy={venueEnergy}
              selectedDevice={selectedDevice}
              venue={venue}
            />
          </div>
        </div>
      )}

    </div>
  );
};

export default VenueDetailsPage;
