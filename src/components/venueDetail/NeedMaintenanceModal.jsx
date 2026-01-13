import React from 'react';
import {
    X,
    Wrench,
    AlertTriangle,
    ChevronUp,
    Download,
    Eye,
} from 'lucide-react';

const NeedMaintenanceModal = () => {
    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="relative bg-white w-[900px] max-w-[95%] h-[600px] rounded-[32px] border-2 border-blue-400 shadow-xl flex flex-col">

                {/* Close Button */}
                <button className="absolute top-5 right-5 w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">
                    <X className="w-5 h-5 text-white" />
                </button>

                {/* Header */}
                <div className="pt-8 px-10">
                    <div className="flex items-center justify-center gap-4">
                        <div className="relative w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                            <Wrench className="text-red-600 w-6 h-6" />
                            <span className="absolute w-8 h-[3px] bg-red-600 rotate-45"></span>
                        </div>
                        <h2 className="text-2xl font-semibold text-blue-700">
                            Need Maintenance
                        </h2>
                    </div>
                    <div className="mt-4 h-[2px] bg-blue-500 w-full" />
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-scroll px-10 py-6 custom-scrollbar">
                    <div className="space-y-4">

                        {/* Venue Group */}
                        <div className="border-b pb-3">
                            <div className="flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="w-5 h-5 rounded text-blue-600"
                                />

                                <button>
                                    <ChevronUp className="w-4 h-4 text-gray-400" />
                                </button>

                                <span className="flex-1 font-medium text-gray-800">
                                    Gulshan, Block 14 Branch
                                </span>

                                <button
                                    className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                    title="View Venue Details"
                                >
                                    <Eye className="w-4 h-4" />
                                </button>

                                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                                <span className="w-8 text-right font-medium">3</span>
                            </div>

                            {/* Alerts */}
                            <div className="mt-4 ml-14 space-y-3">
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                                    <span className="flex-1">AC Unit 01</span>
                                    <span className="text-xs text-gray-500">01 Jan 2026</span>
                                </div>

                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                                    <span className="flex-1">AC Unit 02</span>
                                    <span className="text-xs text-gray-500">03 Jan 2026</span>
                                </div>

                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                                    <span className="flex-1">AC Unit 03</span>
                                    <span className="text-xs text-gray-500">05 Jan 2026</span>
                                </div>
                            </div>
                        </div>

                        {/* Another Venue */}
                        <div className="border-b pb-3">
                            <div className="flex items-center gap-4">
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="w-5 h-5 rounded text-blue-600"
                                />

                                <button>
                                    <ChevronUp className="w-4 h-4 text-gray-400" />
                                </button>

                                <span className="flex-1 font-medium text-gray-800">
                                    DHA Phase 6 Branch
                                </span>

                                <button
                                    className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition-colors"
                                    title="View Venue Details"
                                >
                                    <Eye className="w-4 h-4" />
                                </button>

                                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                                <span className="w-8 text-right font-medium">2</span>
                            </div>

                            <div className="mt-4 ml-14 space-y-3">
                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                                    <span className="flex-1">AC Unit 07</span>
                                    <span className="text-xs text-gray-500">02 Jan 2026</span>
                                </div>

                                <div className="flex items-center gap-3 text-sm text-gray-600">
                                    <AlertTriangle className="w-4 h-4 text-yellow-500" />
                                    <span className="flex-1">AC Unit 09</span>
                                    <span className="text-xs text-gray-500">04 Jan 2026</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Footer */}
                <div className="px-10 pb-6 flex justify-end">
                    <button className="flex items-center gap-3 px-6 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700">
                        <Download className="w-5 h-5" />
                        Download (5)
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NeedMaintenanceModal;
