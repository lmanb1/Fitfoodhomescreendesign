import { motion } from "motion/react";

interface CalorieProgressProps {
  current: number;
  goal: number;
  isDarkMode: boolean;
}

export function CalorieProgress({ current, goal, isDarkMode }: CalorieProgressProps) {
  const percentage = Math.min((current / goal) * 100, 100);
  const circumference = 2 * Math.PI * 85;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const textPrimary = isDarkMode ? "text-white" : "text-gray-900";
  const textSecondary = isDarkMode ? "text-gray-400" : "text-gray-600";
  const bgStroke = isDarkMode ? "#1a1f3a" : "#e5e7eb";

  return (
    <div className="relative flex items-center justify-center">
      <svg width="230" height="230" className="transform -rotate-90 drop-shadow-[0_0_25px_rgba(46,204,113,0.7)]">
        {/* Background circle */}
        <circle
          cx="115"
          cy="115"
          r="100"
          stroke={bgStroke}
          strokeWidth="18"
          fill="none"
        />
        {/* Progress circle with vibrant neon gradient */}
        <defs>
          <linearGradient id="vibrantGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2ECC71" />
            <stop offset="30%" stopColor="#27AE60" />
            <stop offset="60%" stopColor="#1ABC9C" />
            <stop offset="100%" stopColor="#2ECC71" />
          </linearGradient>
          <filter id="vibrantGlow">
            <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <motion.circle
          cx="115"
          cy="115"
          r="100"
          stroke="url(#vibrantGradient)"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          filter="url(#vibrantGlow)"
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className={`text-6xl font-black ${textPrimary} tracking-tight`}>{current}</div>
        <div className={`text-sm font-bold ${textSecondary} mt-1`}>/ {goal} kalori</div>
      </div>
    </div>
  );
}
