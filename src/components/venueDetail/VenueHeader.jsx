import React from "react";
import { ArrowLeft, Users, AlertTriangle, Zap } from "lucide-react";
import KPICard from "./KPICard";

const VenueHeader = ({ hideHeader = false }) => {
    /* ---------- STATIC DATA ---------- */
    const totalDevices = 24;
    const faultDevices = 3;
    const venueEnergy = 128.4;

    if (hideHeader) {
        return (
            <div className="w-full max-w-[95%] xl:max-w-[90%] 2xl:max-w-[85%] px-2 sm:px-4 py-1 bg-gray-50 relative">
                {/* Organization & Venue Dropdowns (STATIC) */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-4 mb-2 w-full sm:w-auto">
                    <select
                        className="w-full sm:w-auto flex-1 sm:flex-none px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium bg-white"
                    >
                        <option className="z-0" >Demo Organization</option>
                    </select>

                    <select
                        className="w-full sm:w-auto flex-1 sm:flex-none px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium bg-white"
                    >
                        <option>Main Venue</option>
                    </select>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-2.5 xl:gap-2 w-full sm:w-[70%] xl:w-[60%] ml-0">
                    <KPICard />
                    <KPICard />
                    <KPICard />
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white w-full flex flex-col items-center">
            <div className="w-full max-w-[95%] xl:max-w-[90%] py-3 sm:py-4 px-2 sm:px-4 md:px-6">
                {/* Header Controls */}
                <div className="mb-3 sm:mb-4 md:mb-5 xl:mb-4 w-full md:w-[70%] xl:w-[60%]">
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 xl:gap-2.5  mb-3 sm:mb-4">

                        <select className="w-full sm:w-auto flex-1 sm:flex-none px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium bg-white">
                            <option>Demo Organization</option>
                        </select>

                        <select className="w-full sm:w-auto flex-1 sm:flex-none px-3 sm:px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium bg-white">
                            <option>Main Venue</option>
                        </select>
                    </div>
                </div>

                {/* KPI Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 w-full md:w-[50%] mt-3 sm:mt-4">
                    <KPICard />
                    <KPICard />
                    <KPICard />
                </div>
            </div>
        </div>
    );
};

export default VenueHeader;
