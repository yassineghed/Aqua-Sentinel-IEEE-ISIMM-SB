"use client";

import React from "react";

interface MobileFrameProps {
    children: React.ReactNode;
}

export function MobileFrame({ children }: MobileFrameProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-cyan-50 flex items-center justify-center p-4 md:p-8">
            {/* Phone Frame */}
            <div className="relative">
                {/* Phone outer shell */}
                <div className="relative bg-gray-900 rounded-[3rem] p-1.5 shadow-2xl shadow-blue-900/20">
                    {/* Phone notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-gray-900 rounded-b-2xl z-20 flex items-center justify-center">
                        <div className="w-16 h-4 bg-gray-800 rounded-full flex items-center justify-center gap-2">
                            <div className="w-2 h-2 bg-gray-700 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                        </div>
                    </div>

                    {/* Screen bezel */}
                    <div className="relative bg-black rounded-[2.25rem] overflow-hidden">
                        {/* Status bar background */}
                        <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-black/20 to-transparent z-10 pointer-events-none"></div>

                        {/* App content */}
                        <div className="w-[420px] h-[900px] overflow-y-auto overflow-x-hidden bg-background rounded-[2.25rem] relative pt-8">
                            {children}
                        </div>
                    </div>

                    {/* Home indicator */}
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-600 rounded-full"></div>
                </div>

                {/* Phone reflection/shine effect */}
                <div className="absolute -inset-1 bg-gradient-to-tr from-transparent via-white/5 to-white/10 rounded-[3.5rem] pointer-events-none"></div>

                {/* Subtle glow */}
                <div className="absolute -inset-8 bg-gradient-radial from-blue-400/10 to-transparent rounded-full blur-2xl -z-10"></div>
            </div>
        </div>
    );
}
