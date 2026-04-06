import { Timer, Weight, Zap, Settings, ChevronRight, CreditCard, Award, History, LogOut } from "lucide-react";
import TopBar from "@/src/components/TopBar";
import { Link } from "react-router-dom";

export default function AccountScreen() {
  const userImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuAvrJKM7MFiQZ6oiHgr7Ko6adMxYo5a9FSTpLRaErOyn5ekpI0JrOLF68UI-e2H1dnae41HZSGERq8yapJbDBgPfCvE5jwo3JJ2xDKuie7mqn7Yrj04776mymoUAWcT6F3d2Y2NMsswpu1J9lQLBsaetaZufOCcFv5q3HCJWKVEdeR69LkzbN_Ne7tF2kDN8qRHVdlmCd2IbDpe17ZTTUKKf8GwkdLcu6IuteC1sBP__DjGcEEv2I77L4J_juq1UfVc7Km7fVKPH78";

  const metrics = [
    { label: "Total Time", value: "142H 12M", icon: Timer },
    { label: "Volume", value: "42,500 KG", icon: Weight },
    { label: "Avg. Intensity", value: "88%", icon: Zap },
  ];

  const settings = [
    "Personal Info",
    "Privacy & Security",
    "Notifications",
    "Linked Devices",
  ];

  const history = [
    { title: "Monthly Renewal", subtitle: "Transaction ID: #44920", date: "Sep 12", value: "$49.99", icon: CreditCard, accent: true },
    { title: "Level 40 Reached", subtitle: "Achievement Unlocked", date: "Aug 28", icon: Award },
    { title: "Password Changed", subtitle: "Security Update", date: "Aug 15", icon: History },
  ];

  return (
    <div className="bg-surface text-primary min-h-screen pb-32">
      <TopBar userImage={userImage} />

      <main className="pt-20 px-4 max-w-5xl mx-auto">
        {/* Hero Account Header */}
        <section className="mb-6 relative overflow-hidden rounded-xl p-6 bg-surface-container-low">
          <div className="absolute -right-10 -top-10 w-48 h-48 bg-primary-container/10 blur-[60px] rounded-full"></div>
          <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <span className="text-[0.625rem] font-bold tracking-[0.05em] uppercase text-primary-container">Elite Member</span>
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter text-primary mt-1 uppercase italic leading-tight">Alex Sterling</h2>
              <p className="text-on-surface-variant mt-1 max-w-md text-xs leading-relaxed">
                Optimizing human performance through data-driven hypertrophy and metabolic conditioning.
              </p>
            </div>
            <div className="flex gap-3">
              <div className="bg-surface-container-high p-3 rounded-xl text-center min-w-[80px]">
                <span className="block text-[0.5rem] font-bold tracking-widest text-on-surface-variant uppercase mb-0.5">Rank</span>
                <span className="text-xl font-black text-primary-container">#12</span>
              </div>
              <div className="bg-surface-container-high p-3 rounded-xl text-center min-w-[80px]">
                <span className="block text-[0.5rem] font-bold tracking-widest text-on-surface-variant uppercase mb-0.5">Level</span>
                <span className="text-xl font-black text-primary-container">42</span>
              </div>
            </div>
          </div>

          {/* Quest Popup & Progress Bar */}
          <div className="mt-6 bg-surface-container-high/50 border border-primary-container/20 rounded-xl p-4 backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-2">
              <Zap className="w-4 h-4 text-primary-container animate-pulse" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="space-y-0.5">
                <h4 className="text-primary font-black uppercase tracking-tight text-base flex items-center gap-2">
                  Quest: <span className="text-primary-container italic">"Galaxy Conqueror"</span>
                </h4>
                <p className="text-on-surface-variant text-[0.625rem] font-medium">Complete 5 sessions this week for Elite rewards.</p>
              </div>
              <div className="flex-1 max-w-md w-full space-y-1.5">
                <div className="flex justify-between text-[0.5rem] font-black uppercase tracking-widest text-on-surface-variant">
                  <span>Progress to Level 43</span>
                  <span className="text-primary-container">75%</span>
                </div>
                <div className="w-full h-2 bg-surface-container-highest rounded-full overflow-hidden border border-outline-variant/30">
                  <div 
                    className="h-full bg-gradient-to-r from-primary-container to-surface-tint shadow-[0_0_10px_rgba(0,245,255,0.4)] transition-all duration-1000 ease-out"
                    style={{ width: '75%' }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bento Grid Management */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Membership Card */}
          <div className="md:col-span-2 bg-surface-container-low rounded-xl overflow-hidden flex flex-col group">
            <div className="p-6 h-full flex flex-col">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-black tracking-tighter text-primary uppercase">Membership Plan</h3>
                  <p className="text-on-surface-variant text-xs">Velocity Pro + Recovery Suite</p>
                </div>
                <div className="bg-primary-container/20 px-2 py-0.5 rounded-full border border-primary-container/30">
                  <span className="text-[0.5rem] font-bold text-primary-container uppercase tracking-widest">Active</span>
                </div>
              </div>
              <div className="space-y-4 mt-auto">
                <div className="flex items-center justify-between">
                  <span className="text-on-surface-variant text-xs font-medium">Next Billing Date</span>
                  <span className="font-bold text-primary text-sm">Oct 12, 2024</span>
                </div>
                <div className="w-full h-1 bg-surface-container-highest rounded-full overflow-hidden">
                  <div className="w-[65%] h-full bg-primary-container shadow-[0_0_10px_rgba(0,245,255,0.5)]"></div>
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button className="flex-1 bg-gradient-to-br from-primary-container to-surface-tint text-on-primary-fixed font-black uppercase text-[0.625rem] py-3 rounded-xl transition-all active:scale-95">Upgrade Plan</button>
                  <button className="flex-1 bg-surface-container-highest text-primary font-black uppercase text-[0.625rem] py-3 rounded-xl transition-all active:scale-95 hover:bg-surface-bright">Manage Payment</button>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Stats */}
          <div className="bg-surface-container-low rounded-xl p-6 flex flex-col justify-between">
            <h3 className="text-lg font-black tracking-tighter text-primary uppercase mb-4">Metrics</h3>
            <div className="space-y-6">
              {metrics.map((m) => (
                <div key={m.label} className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-secondary-container flex items-center justify-center">
                    <m.icon className="text-primary-container w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[0.5rem] font-bold text-on-surface-variant uppercase tracking-widest block">{m.label}</span>
                    <span className="text-lg font-black text-primary">{m.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Settings Card */}
          <div className="bg-surface-container-low rounded-xl p-6 flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-black tracking-tighter text-primary uppercase">Settings</h3>
              <Settings className="text-on-surface-variant w-4 h-4" />
            </div>
            <div className="space-y-1">
              {settings.map((s) => (
                <button key={s} className="w-full flex items-center justify-between p-2.5 rounded-lg hover:bg-surface-container-high transition-colors group text-left">
                  <span className="text-xs text-primary group-hover:text-primary-container transition-colors">{s}</span>
                  <ChevronRight className="text-on-surface-variant w-3 h-3" />
                </button>
              ))}
            </div>
          </div>

          {/* History Table */}
          <div className="md:col-span-2 bg-surface-container-low rounded-xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-black tracking-tighter text-primary uppercase">Account History</h3>
              <button className="text-[0.625rem] font-bold text-primary-container uppercase tracking-[0.05em] hover:underline decoration-2">View All</button>
            </div>
            <div className="space-y-3">
              {history.map((item, i) => (
                <div key={i} className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${item.accent ? "bg-surface-container-high border-l-4 border-primary-container" : "hover:bg-surface-container-high"}`}>
                  <div className={`p-1.5 rounded-full ${item.accent ? "bg-primary-container/10" : "bg-secondary-container/20"}`}>
                    <item.icon className={`${item.accent ? "text-primary-container" : "text-on-secondary-container"} w-4 h-4`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xs font-bold text-primary leading-tight">{item.title}</h4>
                    <p className="text-[0.625rem] text-on-surface-variant leading-tight">{item.subtitle}</p>
                  </div>
                  <div className="text-right">
                    {item.value && <p className="text-xs font-black text-primary">{item.value}</p>}
                    <p className="text-[0.5rem] text-on-surface-variant uppercase tracking-widest">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <Link to="/" className="text-error-container font-black uppercase text-[0.625rem] tracking-[0.1em] flex items-center gap-2 px-4 py-2.5 rounded-full hover:bg-error-container/20 transition-all active:scale-95">
            <LogOut className="w-3.5 h-3.5" />
            Logout from Galaxy Fitness
          </Link>
        </div>
      </main>
    </div>
  );
}
