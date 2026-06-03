import { motion } from "motion/react";
import { useState } from "react";

interface PullCordBulbProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export function PullCordBulb({ isDarkMode, onToggle }: PullCordBulbProps) {
  const [isPulling, setIsPulling] = useState(false);

  const handlePull = () => {
    setIsPulling(true);
    setTimeout(() => {
      setIsPulling(false);
      onToggle();
    }, 200);
  };

  return (
    <div className="relative flex flex-col items-center pt-2">
      {/* Cord/String - extends from top */}
      <motion.div
        className={`w-0.5 ${isDarkMode ? "bg-gray-600" : "bg-gray-400"} rounded-full absolute top-0`}
        style={{ height: isPulling ? "14px" : "10px" }}
        animate={{ height: isPulling ? "14px" : "10px" }}
        transition={{ duration: 0.2 }}
      />

      {/* Light Bulb */}
      <motion.button
        onClick={handlePull}
        className="relative group cursor-pointer mt-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: isPulling ? 3 : 0 }}
        transition={{ duration: 0.2 }}
      >
        {/* Glow effect when light is on */}
        {!isDarkMode && (
          <motion.div
            className="absolute inset-0 rounded-full blur-xl"
            style={{ backgroundColor: "rgba(250, 204, 21, 0.6)" }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.6 }}
            transition={{ duration: 0.3 }}
          />
        )}

        {/* Bulb SVG */}
        <svg
          width="40"
          height="50"
          viewBox="0 0 40 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="relative z-10"
        >
          {/* Light bulb shape */}
          <path
            d="M20 5C13.3726 5 8 10.3726 8 17C8 21.5 10.5 25 13 28C14.5 29.8 15 31 15 33H25C25 31 25.5 29.8 27 28C29.5 25 32 21.5 32 17C32 10.3726 26.6274 5 20 5Z"
            fill={!isDarkMode ? "#FBBF24" : "none"}
            stroke={isDarkMode ? "#6B7280" : "#F59E0B"}
            strokeWidth="2"
          />
          {/* Bulb base */}
          <rect
            x="15"
            y="33"
            width="10"
            height="3"
            fill={isDarkMode ? "#4B5563" : "#9CA3AF"}
            rx="1"
          />
          <rect
            x="15"
            y="36"
            width="10"
            height="3"
            fill={isDarkMode ? "#4B5563" : "#9CA3AF"}
            rx="1"
          />
          <rect
            x="16"
            y="39"
            width="8"
            height="4"
            fill={isDarkMode ? "#374151" : "#6B7280"}
            rx="1"
          />

          {/* Light rays when on */}
          {!isDarkMode && (
            <>
              <motion.line
                x1="20"
                y1="3"
                x2="20"
                y2="0"
                stroke="#FCD34D"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <motion.line
                x1="10"
                y1="8"
                x2="6"
                y2="4"
                stroke="#FCD34D"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
              />
              <motion.line
                x1="30"
                y1="8"
                x2="34"
                y2="4"
                stroke="#FCD34D"
                strokeWidth="2"
                strokeLinecap="round"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
              />
            </>
          )}
        </svg>

        {/* Tooltip */}
        <div className={`absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity ${isDarkMode ? "bg-gray-700 text-white" : "bg-gray-800 text-white"} shadow-lg`}>
          {isDarkMode ? "İşığı yandır" : "İşığı söndür"}
        </div>
      </motion.button>
    </div>
  );
}
