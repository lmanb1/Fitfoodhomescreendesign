import { Progress } from "./ui/progress";

interface MacroNutrientsProps {
  carbs: { current: number; goal: number };
  protein: { current: number; goal: number };
  fat: { current: number; goal: number };
  isDarkMode: boolean;
}

export function MacroNutrients({ carbs, protein, fat, isDarkMode }: MacroNutrientsProps) {
  const macros = [
    { name: "Karb.", color: "#3b82f6", ...carbs },
    { name: "Zülal", color: "#10b981", ...protein },
    { name: "Yağ", color: "#f59e0b", ...fat },
  ];

  const textPrimary = isDarkMode ? "text-gray-300" : "text-gray-700";
  const textSecondary = isDarkMode ? "text-gray-400" : "text-gray-500";
  const trackBg = isDarkMode ? "bg-[#1a1f3a]" : "bg-gray-200";

  return (
    <div className="space-y-5">
      {macros.map((macro) => {
        const percentage = (macro.current / macro.goal) * 100;
        return (
          <div key={macro.name} className="space-y-2">
            <div className="flex justify-between items-center">
              <span className={`text-base font-bold ${textPrimary}`}>{macro.name}</span>
              <span className={`text-xs font-semibold ${textSecondary}`}>
                {macro.current}q / {macro.goal}q
              </span>
            </div>
            <div className={`h-3 ${trackBg} rounded-full overflow-hidden shadow-inner`}>
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${Math.min(percentage, 100)}%`,
                  backgroundColor: macro.color,
                  boxShadow: `0 0 12px ${macro.color}CC`,
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
