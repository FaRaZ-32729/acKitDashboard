import React from 'react';
import { X, Calendar, RefreshCw, Power, Check } from 'lucide-react';

const EventTypeSelectionModal = () => {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-[2px] flex items-center justify-center z-[100]">
            <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full mx-4 p-8">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 text-center flex-1">
                        Choose Option
                    </h3>
                    <button className="text-gray-400 hover:text-gray-600 transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Options */}
                <div className="grid grid-cols-3 gap-6">

                    {/* Simple Event */}
                    <div className="relative group flex flex-col items-center p-6 rounded-xl border-2 border-gray-200 hover:border-blue-500 transition-all duration-200 cursor-default">
                        <div className="relative mb-4">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors">
                                <Calendar className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full" />
                        </div>
                        <span className="text-sm font-semibold text-gray-900">
                            Simple Event
                        </span>
                    </div>

                    {/* Recurring Event */}
                    <div className="relative group flex flex-col items-center p-6 rounded-xl border-2 border-gray-300 bg-gray-50 hover:border-purple-500 transition-all duration-200 cursor-default">
                        <div className="relative mb-4">
                            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                                <RefreshCw className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full" />
                        </div>
                        <span className="text-sm font-semibold text-gray-900">
                            Recurring Event
                        </span>
                        <div className="absolute bottom-2 right-2">
                            <Check className="w-5 h-5 text-cyan-500" />
                        </div>
                    </div>

                    {/* Device Power Control */}
                    <div className="relative group flex flex-col items-center p-6 rounded-xl border-2 border-gray-200 hover:border-green-500 transition-all duration-200 cursor-default">
                        <div className="relative mb-4">
                            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-500 transition-colors">
                                <Power className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" />
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-cyan-400 rounded-full" />
                        </div>
                        <span className="text-sm font-semibold text-gray-900">
                            Device Power
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default EventTypeSelectionModal;
