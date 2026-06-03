import { useState } from "react";
import { Droplet, Plus } from "lucide-react";
import { motion } from "motion/react";

interface WaterTrackerProps {
  isDarkMode: boolean;
}

export function WaterTracker({ isDarkMode }: WaterTrackerProps) {
  const [glasses, setGlasses] = useState(5);
  const goal = 8;

  const addGlass = () => {
    if (glasses < goal) {
      setGlasses(glasses + 1);
    }
  };

  const cardBg = isDarkMode ? "bg-[#0f1629]" : "bg-white";
  const cardBorder = isDarkMode ? "border-[#1a2139]" : "border-gray-200";
  const textPrimary = isDarkMode ? "text-white" : "text-gray-900";
  const textSecondary = isDarkMode ? "text-gray-400" : "text-gray-600";
  const emptyGlass = isDarkMode ? "bg-[#1a1f3a]" : "bg-gray-200";

  return (
    <div className={`${cardBg} rounded-2xl p-6 border ${cardBorder} ${isDarkMode ? "shadow-[0_10px_40px_rgba(0,0,0,0.12)]" : "shadow-[0_8px_24px_rgba(0,0,0,0.06)]"} transition-all duration-500`}>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30">
            <Droplet className="w-6 h-6 text-blue-500" />
          </div>
          <h3 className={`text-2xl font-black ${textPrimary}`}>Su İstifadəsi</h3>
        </div>
        <button
          onClick={addGlass}
          className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg shadow-blue-500/40 hover:scale-110"
        >
          <Plus className="w-5 h-5 text-white" />
        </button>
      </div>

      <div className="flex items-center gap-2 mb-4">
        {Array.from({ length: goal }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`flex-1 h-12 rounded-xl ${
              i < glasses
                ? "bg-gradient-to-br from-blue-400 to-blue-600 shadow-lg shadow-blue-500/50"
                : emptyGlass
            } transition-all duration-300`}
            style={i < glasses ? {
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)'
            } : {}}
          />
        ))}
      </div>

      <p className={`text-sm font-semibold ${textSecondary}`}>
        {glasses} / {goal} stəkan (2L)
      </p>
    </div>
  );
}
