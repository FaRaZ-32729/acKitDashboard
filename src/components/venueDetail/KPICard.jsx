import React from "react";
import { Users } from "lucide-react";

const KPICard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm p-2 border border-gray-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-medium text-gray-600 mb-0.5">
            Total Devices
          </p>
          <p className="text-base font-bold text-gray-900">128</p>
        </div>

        <div className="bg-blue-100 rounded-full p-1.5">
          <Users className="w-4 h-4 text-blue-600" />
        </div>
      </div>
    </div>
  );
};

export default KPICard;
