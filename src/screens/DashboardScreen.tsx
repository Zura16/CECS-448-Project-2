import { BadgeCheck, ArrowRight, Dumbbell, Flower2, Waves, Apple, Bath, Database } from "lucide-react";
import TopBar from "@/src/components/TopBar";
import { Link } from "react-router-dom";

export default function DashboardScreen() {
  const userImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuAo_mPZsa72P5qbzmb5GIdCj0oqIR5euQ97fGfW9VqHHF5py0X5-vosbER5mi5QYeBu-HUrwq4ePin0rMPltv60Eg4EsYeSb4_dvNbb6NLw5OR9lmcHAKRXhRrdcHPyALNp0J-4Ad--pS_RFI39xfI4vfom6uxzWnbydEKx4WJRXDTcAb9fo0PrgeJFPRD8qMzY55PMHVjUfZCCovwo5E1ZM0uKZDGNax7BYQpcUCQUU6oZDWr-slu0x17JBqhlWs1Iw4Y1Pez2xCU";

  const heatmapDays = Array.from({ length: 31 }, (_, i) => ({
    day: i + 1,
    intensity: Math.random() > 0.3 ? Math.random() : 0,
  }));

  const otherServices = [
    { name: "Personal Training", icon: Dumbbell },
    { name: "Massage", icon: Flower2 },
    { name: "Sauna", icon: Bath },
    { name: "Nutrition", icon: Apple },
    { name: "Pool Access", icon: Waves },
  ];

  return (
    <div className="bg-surface text-primary min-h-screen pb-32">
      <TopBar userImage={userImage} />

      <main className="pt-20 px-4 max-w-2xl mx-auto space-y-6">
        {/* Profile Section */}
        <section className="flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-4 border-primary-container p-1 bg-surface flex items-center justify-center">
              <div className="w-full h-full rounded-full overflow-hidden bg-surface-container-high flex items-center justify-center">
                <img
                  src={userImage}
                  alt="Alex Rivera"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 bg-primary-container text-on-primary-fixed p-1 rounded-full flex items-center justify-center">
              <BadgeCheck className="w-4 h-4 fill-current" />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight text-primary uppercase">ALEX RIVERA</h1>
            <p className="text-on-surface-variant text-[0.625rem] font-bold tracking-[0.05em] uppercase mt-0.5">
              PRO MEMBER • KINETIC ELITE
            </p>
          </div>
        </section>

        {/* Barcode Section */}
        <section className="bg-surface-container-low p-6 rounded-xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent pointer-events-none"></div>
          <div className="flex flex-col items-center gap-4 relative z-10">
            <div className="w-full h-16 barcode-gradient opacity-90 group-hover:opacity-100 transition-opacity"></div>
            <div className="space-y-0.5 text-center">
              <code className="text-primary-fixed font-mono text-base tracking-[0.5em]">KP-2944-X92</code>
              <p className="text-on-surface-variant text-[0.625rem] font-bold tracking-[0.05em] uppercase">Scan for Access</p>
            </div>
          </div>
        </section>

        {/* Heatmap Section */}
        <section className="bg-surface-container-low p-6 rounded-xl space-y-6">
          <div className="flex justify-between items-end">
            <div>
              <h2 className="text-primary text-lg font-bold uppercase tracking-tight">Activity Heatmap</h2>
              <p className="text-on-surface-variant text-xs uppercase tracking-widest">Consistency is Key</p>
            </div>
            <div className="text-right">
              <span className="text-primary-fixed text-2xl font-black italic">24</span>
              <span className="text-on-surface-variant text-[0.6875rem] font-bold uppercase block -mt-1">Active Days</span>
            </div>
          </div>
          <div className="grid grid-cols-7 gap-2">
            <div className="col-span-7 flex justify-between text-[0.6rem] font-bold text-on-surface-variant uppercase tracking-widest mb-1 px-1">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
            <div className="grid grid-cols-7 gap-2 w-full col-span-7">
              {heatmapDays.map((day) => (
                <div
                  key={day.day}
                  className="aspect-square rounded-sm flex items-center justify-center text-[0.625rem] font-black"
                  style={{
                    backgroundColor: day.intensity === 0 
                      ? "var(--color-surface-container-highest)" 
                      : `rgba(0, 245, 255, ${day.intensity})`,
                    color: day.intensity > 0.5 ? "var(--color-on-primary-fixed)" : "var(--color-primary)",
                  }}
                >
                  {day.day}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mentor Card */}
        <section className="relative group cursor-pointer overflow-hidden rounded-xl border border-primary-container/20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container to-surface-tint"></div>
          <div className="relative z-10 p-6 flex flex-col gap-1 items-start active:scale-95 transition-transform duration-150">
            <span className="bg-on-primary-fixed text-primary-container text-[0.5rem] font-black px-1.5 py-0.5 rounded-full uppercase tracking-tighter">Premium Support</span>
            <h3 className="text-on-primary-fixed text-xl font-black uppercase leading-tight">Connect with your<br />Health Mentor</h3>
            <div className="mt-2 flex items-center gap-2 text-on-primary-fixed font-bold text-xs">
              <span>Chat Now</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </section>

        {/* Workout Logs Button */}
        <section>
          <Link 
            to="/workout-logs"
            className="w-full bg-surface-container-high border border-primary-container/30 rounded-xl p-4 flex items-center justify-between group hover:bg-surface-bright transition-all active:scale-[0.98]"
          >
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-primary-container/10 text-primary-container">
                <Database className="w-5 h-5" />
              </div>
              <div className="text-left">
                <h3 className="text-primary text-sm font-black uppercase tracking-tight leading-tight">Check my workout logs and data</h3>
                <p className="text-on-surface-variant text-[0.5rem] font-bold uppercase tracking-widest">Access your full performance history</p>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-primary-container group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>

        {/* Other Services */}
        <section className="space-y-4">
          <h4 className="text-primary text-sm font-bold uppercase tracking-widest px-1">Other Gym Services</h4>
          <div className="flex overflow-x-auto gap-3 pb-2 hide-scrollbar -mx-6 px-6">
            {otherServices.map((service) => (
              <div
                key={service.name}
                className="flex-none bg-surface-container-low p-4 rounded-xl border border-outline-variant/30 min-w-[140px] flex flex-col items-center gap-3"
              >
                <service.icon className="text-primary-fixed w-8 h-8" />
                <span className="text-[0.6875rem] font-bold uppercase tracking-tight text-primary text-center">
                  {service.name}
                </span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
