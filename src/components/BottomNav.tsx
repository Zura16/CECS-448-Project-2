import { LayoutGrid, Dumbbell, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/src/lib/utils";

export default function BottomNav() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: "/dashboard", label: "Dashboard", icon: LayoutGrid },
    { path: "/workout", label: "Add Session", icon: Dumbbell },
    { path: "/account", label: "Account", icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 h-16 bg-[#1c1b1b]/80 backdrop-blur-2xl border-t border-outline-variant/10 shadow-[0_-5px_20px_rgba(0,0,0,0.3)]">
      {navItems.map((item, index) => {
        const isActive = currentPath === item.path;
        const isMiddle = index === 1;
        const Icon = item.icon;

        return (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex flex-col items-center justify-center transition-all duration-300 active:scale-90 flex-1 h-full",
              isMiddle
                ? "relative"
                : isActive
                  ? "text-primary-container"
                  : "text-on-surface-variant hover:text-primary-container"
            )}
          >
            {isMiddle ? (
              <div className="absolute -top-6 bg-gradient-to-br from-[#00f5ff] to-[#00dce5] text-[#002021] rounded-full p-3 shadow-[0_5px_15px_rgba(0,245,255,0.4)] active:scale-95 transition-transform">
                <Icon className="w-6 h-6 fill-current" />
              </div>
            ) : (
              <Icon className={cn("w-5 h-5", isActive && "fill-current")} />
            )}
            <span className={cn(
              "text-[0.625rem] font-bold tracking-[0.02em] uppercase mt-1",
              isMiddle && "mt-8"
            )}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
