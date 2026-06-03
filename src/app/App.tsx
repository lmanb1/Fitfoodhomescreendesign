import { useState } from "react";
import { CalorieProgress } from "./components/CalorieProgress";
import { MacroNutrients } from "./components/MacroNutrients";
import { WaterTracker } from "./components/WaterTracker";
import { MealCard } from "./components/MealCard";
import { BottomNav } from "./components/BottomNav";
import { PullCordBulb } from "./components/PullCordBulb";
import { Target, Flame, Globe } from "lucide-react";

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState("AZ");
  const meals = [
    {
      title: "Səhər yeməyi",
      calories: 420,
      time: "08:00",
      imageUrl: "https://images.unsplash.com/photo-1542814880-7e62cf14b7c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxoZWFsdGh5JTIwYXZvY2FkbyUyMGJyZWFrZmFzdCUyMGJvd2wlMjBzYWxhZHxlbnwxfHx8fDE3ODAyNTQ2OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      completed: true,
    },
    {
      title: "Nahar",
      calories: 550,
      time: "13:00",
      imageUrl: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwY2hpY2tlbiUyMGhlYWx0aHklMjBsdW5jaCUyMGJvd2wlMjB2ZWdldGFibGVzfGVufDF8fHx8MTc4MDI1NDY5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
      completed: false,
    },
    {
      title: "Şam yeməyi",
      calories: 480,
      time: "19:00",
      imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFsdGh5JTIwZGlubmVyJTIwc2FsbW9uJTIwZmlzaCUyMHZlZ2V0YWJsZXN8ZW58MXx8fHwxNzgwMjU0Njk0fDA&ixlib=rb-4.1.0&q=80&w=1080",
      completed: false,
    },
  ];

  const bgColor = isDarkMode ? "bg-[#0a0e1a]" : "bg-[#F5F7FB]";
  const cardBg = isDarkMode ? "bg-[#0f1629]" : "bg-white";
  const cardBorder = isDarkMode ? "border-[#1a2139]" : "border-gray-200";
  const textPrimary = isDarkMode ? "text-white" : "text-gray-900";
  const textSecondary = isDarkMode ? "text-gray-400" : "text-gray-600";
  const headerBg = isDarkMode ? "bg-[#0f1629]" : "bg-white";
  const headerBorder = isDarkMode ? "border-[#1a2139]" : "border-gray-100";

  return (
    <div className={`min-h-screen ${bgColor} pb-24 transition-colors duration-500`}>
      {/* Header */}
      <header className={`${headerBg} border-b ${headerBorder} px-6 py-5 transition-colors duration-500 shadow-sm`}>
        <div className="max-w-md mx-auto">
          {/* Top Row: Profile and Controls */}
          <div className="flex items-center justify-between mb-4">
            {/* Left Side: User Profile */}
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-green-500/40">
                L
              </div>
              <div>
                <h2 className={`${textPrimary} font-bold text-lg`}>Leman Bayramova</h2>
              </div>
            </div>

            {/* Right Side: Streak & Theme Toggle */}
            <div className="flex items-center gap-2.5">
              {/* Streak Counter */}
              <div className={`flex items-center gap-1.5 px-3 py-2 ${isDarkMode ? "bg-orange-500/10" : "bg-orange-50"} rounded-xl border ${isDarkMode ? "border-orange-500/20" : "border-orange-200"} shadow-sm`}>
                <Flame className="w-4 h-4 text-orange-500" />
                <span className={`text-sm font-bold ${isDarkMode ? "text-orange-400" : "text-orange-600"}`}>12 Gün</span>
              </div>

              {/* Pull-Cord Light Bulb */}
              <div className="relative">
                <PullCordBulb isDarkMode={isDarkMode} onToggle={() => setIsDarkMode(!isDarkMode)} />
              </div>
            </div>
          </div>

          {/* AI Insight Message - Clean spacing below profile */}
          <div className={`px-5 py-4 rounded-2xl ${isDarkMode ? "bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20" : "bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200"} shadow-sm`}>
            <p className={`text-sm font-semibold ${textSecondary} leading-relaxed`}>
              Ləman, hədəfinə çatmağa az qaldı! Bu gün zülal miqdarını bir az artırmağı unutma. 🚀
            </p>
          </div>
        </div>
      </header>

      <main className="max-w-md mx-auto px-5 py-5 space-y-5">
        {/* Calorie Dashboard */}
        <div className={`${cardBg} rounded-2xl p-6 border ${cardBorder} ${isDarkMode ? "shadow-[0_10px_40px_rgba(0,0,0,0.12)]" : "shadow-[0_8px_24px_rgba(0,0,0,0.06)]"} transition-all duration-500`}>
          <div className="flex items-center gap-2 mb-6">
            <div className="p-2 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
              <Target className="w-6 h-6 text-green-500" />
            </div>
            <h3 className={`text-2xl font-black ${textPrimary}`}>Günlük Məqsəd</h3>
          </div>

          <div className="flex justify-center mb-6">
            <CalorieProgress current={1200} goal={2000} isDarkMode={isDarkMode} />
          </div>

          <MacroNutrients
            carbs={{ current: 120, goal: 200 }}
            protein={{ current: 85, goal: 150 }}
            fat={{ current: 45, goal: 65 }}
            isDarkMode={isDarkMode}
          />
        </div>

        {/* Water Tracker */}
        <WaterTracker isDarkMode={isDarkMode} />

        {/* Meal Plan */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-2xl font-black ${textPrimary}`}>Yemək Planı</h3>
            <button className="text-sm font-bold text-green-500 hover:text-green-400 transition-colors">
              Hamısına bax
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {meals.map((meal, index) => (
              <MealCard key={index} {...meal} isDarkMode={isDarkMode} />
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className={`${cardBg} rounded-2xl p-5 border ${cardBorder} text-center ${isDarkMode ? "shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]" : "shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)]"} transition-all duration-500 hover:scale-105 cursor-pointer`}>
            <div className="text-3xl font-black text-green-500 mb-1">7</div>
            <div className={`text-xs font-bold ${textSecondary}`}>Ardıcıl gün</div>
          </div>
          <div className={`${cardBg} rounded-2xl p-5 border ${cardBorder} text-center ${isDarkMode ? "shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]" : "shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)]"} transition-all duration-500 hover:scale-105 cursor-pointer`}>
            <div className="text-3xl font-black text-blue-500 mb-1">5.2kg</div>
            <div className={`text-xs font-bold ${textSecondary}`}>İtirildi</div>
          </div>
          <div className={`${cardBg} rounded-2xl p-5 border ${cardBorder} text-center ${isDarkMode ? "shadow-[0_8px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.18)]" : "shadow-[0_6px_20px_rgba(0,0,0,0.06)] hover:shadow-[0_10px_28px_rgba(0,0,0,0.12)]"} transition-all duration-500 hover:scale-105 cursor-pointer`}>
            <div className="text-3xl font-black text-purple-500 mb-1">21</div>
            <div className={`text-xs font-bold ${textSecondary}`}>Reseptlər</div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation */}
      <BottomNav isDarkMode={isDarkMode} />

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
