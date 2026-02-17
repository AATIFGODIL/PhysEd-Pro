"use client";

export function LiquidLoader() {
    return (
        <div className="flex items-center justify-center h-screen w-full bg-[#0a0514]">
            <div className="relative w-20 h-28 rounded-2xl overflow-hidden border border-white/[0.12] bg-purple-950/30 backdrop-blur-sm">
                {/* Liquid fill */}
                <div className="absolute bottom-0 left-0 right-0 animate-liquid-fill bg-gradient-to-t from-purple-600/60 via-fuchsia-500/40 to-transparent" />
                {/* Bubble effects */}
                <div className="absolute bottom-2 left-3 w-1.5 h-1.5 rounded-full bg-purple-300/30 animate-bubble-1" />
                <div className="absolute bottom-4 right-4 w-1 h-1 rounded-full bg-fuchsia-300/30 animate-bubble-2" />
                <div className="absolute bottom-1 left-1/2 w-1 h-1 rounded-full bg-purple-200/20 animate-bubble-3" />
            </div>
        </div>
    );
}



/* Initial release of PhysEd-Pro */
  