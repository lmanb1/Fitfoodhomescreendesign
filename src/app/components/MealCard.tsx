import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Utensils } from "lucide-react";

interface MealCardProps {
  title: string;
  calories: number;
  time: string;
  imageUrl: string;
  completed?: boolean;
  isDarkMode: boolean;
}

export function MealCard({ title, calories, time, imageUrl, completed, isDarkMode }: MealCardProps) {
  const cardBg = isDarkMode ? "bg-[#0f1629]" : "bg-white";
  const cardBorder = isDarkMode ? "border-[#1a2139]" : "border-gray-200";
  const textPrimary = isDarkMode ? "text-white" : "text-gray-900";
  const textSecondary = isDarkMode ? "text-gray-400" : "text-gray-600";

  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      className={`min-w-[300px] ${cardBg} rounded-3xl overflow-hidden border ${cardBorder} cursor-pointer ${isDarkMode ? "shadow-[0_10px_40px_rgba(0,0,0,0.15)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.25)]" : "shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]"} transition-all duration-300`}
    >
      <div className="relative h-52 overflow-hidden">
        <ImageWithFallback
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
        {completed && (
          <div className="absolute top-4 right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/50">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-2">
            <div className="p-1.5 bg-green-500/10 rounded-lg">
              <Utensils className="w-4 h-4 text-green-500" />
            </div>
            <h4 className={`font-black text-lg ${textPrimary}`}>{title}</h4>
          </div>
          <span className="text-sm text-green-500 font-bold px-3 py-1 bg-green-500/10 rounded-full">{calories} kcal</span>
        </div>
        <p className={`text-sm font-semibold ${textSecondary}`}>{time}</p>
      </div>
    </motion.div>
  );
}
