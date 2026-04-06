import { Bell } from "lucide-react";

interface TopBarProps {
  userImage?: string;
}

export default function TopBar({ userImage }: TopBarProps) {
  return (
    <header className="fixed top-0 w-full z-50 glass-header flex justify-between items-center px-4 py-3">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-primary-container">
          {userImage ? (
            <img
              src={userImage}
              alt="User Profile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          ) : (
            <div className="w-full h-full bg-surface-container-highest flex items-center justify-center">
              <span className="text-primary-container text-[0.625rem] font-bold">KP</span>
            </div>
          )}
        </div>
        <h1 className="text-lg font-black italic text-primary-container tracking-widest uppercase">
          GALAXY FITNESS
        </h1>
      </div>
      <button className="text-primary-container hover:bg-surface-container-high transition-colors p-1.5 rounded-full active:scale-95 transition-transform duration-150">
        <Bell className="w-5 h-5" />
      </button>
    </header>
  );
}
