import { ArrowLeft, Calendar, Clock, Layers, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import TopBar from "@/src/components/TopBar";

export default function WorkoutLogsScreen() {
  const userImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuAo_mPZsa72P5qbzmb5GIdCj0oqIR5euQ97fGfW9VqHHF5py0X5-vosbER5mi5QYeBu-HUrwq4ePin0rMPltv60Eg4EsYeSb4_dvNbb6NLw5OR9lmcHAKRXhRrdcHPyALNp0J-4Ad--pS_RFI39xfI4vfom6uxzWnbydEKx4WJRXDTcAb9fo0PrgeJFPRD8qMzY55PMHVjUfZCCovwo5E1ZM0uKZDGNax7BYQpcUCQUU6oZDWr-slu0x17JBqhlWs1Iw4Y1Pez2xCU";

  const logs = [
    { id: 1, date: "Apr 04, 2026", type: "Strength", focus: "Chest & Triceps", sets: 12, duration: "1.5 Hrs", intensity: "High" },
    { id: 2, date: "Apr 02, 2026", type: "Endurance", focus: "Full Body", sets: 8, duration: "2.0 Hrs", intensity: "Medium" },
    { id: 3, date: "Mar 31, 2026", type: "Strength", focus: "Back & Biceps", sets: 15, duration: "1.5 Hrs", intensity: "Extreme" },
    { id: 4, date: "Mar 29, 2026", type: "Yoga", focus: "Core & Flexibility", sets: 4, duration: "1.0 Hrs", intensity: "Low" },
    { id: 5, date: "Mar 27, 2026", type: "Strength", focus: "Legs", sets: 18, duration: "2.5 Hrs", intensity: "Extreme" },
  ];

  return (
    <div className="bg-surface text-primary min-h-screen pb-32">
      <TopBar userImage={userImage} />

      <main className="pt-20 px-4 max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-3">
          <Link to="/dashboard" className="p-1.5 rounded-full bg-surface-container-low text-primary-container hover:bg-surface-container-high transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h2 className="text-2xl font-black tracking-tight text-primary uppercase italic">WORKOUT LOGS</h2>
        </div>

        <div className="space-y-3">
          {logs.map((log) => (
            <div key={log.id} className="bg-surface-container-low border border-outline-variant/20 rounded-xl p-4 space-y-3 hover:border-primary-container/30 transition-all group">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-lg bg-primary-container/10 text-primary-container">
                    <Activity className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-primary uppercase tracking-tight">{log.focus}</h3>
                    <p className="text-on-surface-variant text-[0.5rem] font-bold uppercase tracking-widest">{log.type} Session</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-on-surface-variant">
                  <Calendar className="w-2.5 h-2.5" />
                  <span className="text-[0.5rem] font-bold uppercase tracking-widest">{log.date}</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <Layers className="w-2.5 h-2.5" />
                    <span className="text-[0.5rem] font-bold uppercase tracking-widest">Sets</span>
                  </div>
                  <p className="text-base font-black text-primary">{log.sets}</p>
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <Clock className="w-2.5 h-2.5" />
                    <span className="text-[0.5rem] font-bold uppercase tracking-widest">Time</span>
                  </div>
                  <p className="text-base font-black text-primary">{log.duration}</p>
                </div>
                <div className="space-y-0.5">
                  <div className="flex items-center gap-1 text-on-surface-variant">
                    <Zap className="w-2.5 h-2.5 text-primary-container" />
                    <span className="text-[0.5rem] font-bold uppercase tracking-widest">Load</span>
                  </div>
                  <p className="text-base font-black text-primary-container italic">{log.intensity}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-surface-container-high/30 border border-dashed border-outline-variant/50 rounded-xl p-6 text-center">
          <p className="text-on-surface-variant text-xs font-medium italic">End of recent logs. Keep pushing.</p>
        </div>
      </main>
    </div>
  );
}

import { Zap } from "lucide-react";
