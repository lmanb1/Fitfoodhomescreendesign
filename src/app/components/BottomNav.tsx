import { Home, BookOpen, TrendingUp, User, Camera } from "lucide-react";
import { motion } from "motion/react";

interface NavItem {
  icon: typeof Home;
  label: string;
  active?: boolean;
  isScanner?: boolean;
}

interface BottomNavProps {
  isDarkMode: boolean;
}

export function BottomNav({ isDarkMode }: BottomNavProps) {
  const navItems: NavItem[] = [
    { icon: Home, label: "Ön", active: true },
    { icon: BookOpen, label: "Reseptlər", active: false },
    { icon: Camera, label: "Skan Et", active: false, isScanner: true },
    { icon: TrendingUp, label: "Tərəqqi", active: false },
    { icon: User, label: "Profil", active: false },
  ];

  const bgColor = isDarkMode ? "bg-[#0a0e1a]" : "bg-white";
  const borderColor = isDarkMode ? "border-[#1a2139]" : "border-gray-200";
  const inactiveColor = isDarkMode ? "text-gray-400 hover:text-gray-300" : "text-gray-500 hover:text-gray-700";

  return (
    <div className={`fixed bottom-0 left-0 right-0 ${bgColor} border-t ${borderColor} px-4 py-3 backdrop-blur-lg bg-opacity-95 transition-colors duration-500 shadow-[0_-8px_30px_rgba(0,0,0,0.1)]`}>
      <div className="max-w-md mx-auto flex justify-around items-end">
        {navItems.map((item, index) => {
          const Icon = item.icon;

          // AI Scanner FAB - Center button with special styling
          if (item.isScanner) {
            return (
              <motion.button
                key={item.label}
                className="relative -mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl blur-lg opacity-60" />
                <div className="relative bg-gradient-to-r from-green-500 to-emerald-600 p-4 rounded-2xl shadow-2xl shadow-green-500/50">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="text-xs font-bold text-green-500">{item.label}</span>
                </div>
              </motion.button>
            );
          }

          // Regular navigation items
          return (
            <button
              key={item.label}
              className={`flex flex-col items-center gap-1.5 transition-all duration-300 ${
                item.active
                  ? "text-green-500 scale-105"
                  : inactiveColor
              }`}
            >
              <div className={`${item.active ? "p-2.5 bg-green-500/10 rounded-xl" : "p-2"}`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className="text-xs font-semibold">{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
