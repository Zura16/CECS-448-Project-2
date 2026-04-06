import { PlusCircle, Layers, Timer, ChevronDown } from "lucide-react";
import TopBar from "@/src/components/TopBar";

export default function WorkoutScreen() {
  const userImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuDFIp_-96cVGzBmSM0Pay0qDFka8IPLqVFBZ2JJigaUdRxZMwDPl_UQcclzgLDAZXACspXHPFXJ9te6P8wI4pE36Rk9QuIWoXHdd4Ns0AmEXaQg2yVCKOx5RbJBHkwAgK3XC_UI5YZWjbw2u4wkrzyi4csO4EKze-Rgp0rFNNSM26g8JZGBjinPchm2evh4z_ddxelrhKM5qN0NDJAgi7Po1jx4sOYfLUm8M6nYABQLerKJ42wbD7HM0GrS35e07GKwGMt0II7UNA0";

  const sessionTypes = ["Strength", "Endurance", "Calisthenics", "Yoga"];
  const muscleGroups = ["CHEST", "BACK", "LEGS", "ARMS", "SHOULDERS", "CORE", "FULL BODY"];

  return (
    <div className="bg-surface text-primary min-h-screen pb-32">
      <TopBar userImage={userImage} />

      <main className="pt-20 px-4 max-w-2xl mx-auto">
        {/* Editorial Header */}
        <section className="mb-6">
          <span className="text-[0.625rem] font-bold tracking-[0.05em] uppercase text-primary-fixed mb-1 block">Performance Entry</span>
          <h2 className="text-4xl font-black leading-none tracking-tight text-primary mb-3 uppercase italic">LOG SESSION</h2>
          <div className="h-1 w-16 bg-gradient-to-r from-primary-container to-surface-tint rounded-full"></div>
        </section>

        {/* Form Canvas */}
        <div className="space-y-6">
          {/* Workout Session Type */}
          <section>
            <h3 className="text-[0.625rem] font-bold tracking-[0.05em] uppercase text-on-surface-variant mb-3">Workout Session Type</h3>
            <div className="grid grid-cols-2 gap-2">
              {sessionTypes.map((type, i) => (
                <button
                  key={type}
                  className={`p-3 rounded-xl text-left font-bold text-xs tracking-wide uppercase transition-all border-l-4 ${
                    i === 0 
                      ? "bg-surface-container-high border-primary-fixed" 
                      : "bg-surface-container-low border-transparent text-on-surface-variant hover:bg-surface-container-high"
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
          </section>

          {/* Muscle Group Selection */}
          <section>
            <h3 className="text-[0.625rem] font-bold tracking-[0.05em] uppercase text-on-surface-variant mb-3">Muscle Group Focus</h3>
            <div className="relative">
              <select className="w-full bg-surface-container-low border-none rounded-xl p-3 text-primary font-bold text-sm appearance-none focus:ring-2 focus:ring-primary-container transition-all pr-10">
                {muscleGroups.map((group) => (
                  <option key={group} value={group.toLowerCase()}>{group}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant w-4 h-4" />
            </div>
          </section>

          {/* Metrics Input Layer */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Sets Input */}
            <div className="bg-surface-container-low p-4 rounded-xl relative overflow-hidden">
              <label className="text-[0.625rem] font-bold tracking-[0.05em] uppercase text-on-surface-variant mb-1 block">Total Sets</label>
              <div className="flex items-center justify-between">
                <input 
                  className="bg-transparent border-none text-3xl font-black text-primary p-0 w-full focus:ring-0" 
                  placeholder="0" 
                  type="number" 
                  step="1"
                  min="0"
                />
                <Layers className="text-on-surface-variant w-5 h-5" />
              </div>
            </div>
            {/* Duration Input */}
            <div className="bg-surface-container-low p-4 rounded-xl relative overflow-hidden">
              <label className="text-[0.625rem] font-bold tracking-[0.05em] uppercase text-on-surface-variant mb-1 block">Duration (Hrs)</label>
              <div className="flex items-center justify-between relative">
                <select className="bg-transparent border-none text-3xl font-black text-primary p-0 w-full focus:ring-0 appearance-none cursor-pointer">
                  {Array.from({ length: 17 }, (_, i) => {
                    const hours = i * 0.5;
                    return (
                      <option key={hours} value={hours} className="bg-surface text-base">
                        {hours === 0 ? "0" : hours.toFixed(1)}
                      </option>
                    );
                  })}
                </select>
                <Timer className="text-on-surface-variant w-5 h-5 pointer-events-none" />
              </div>
            </div>
          </section>

          {/* Thoughts and Comments Area */}
          <section>
            <div className="bg-surface-container-low rounded-xl p-4">
              <label className="text-[0.625rem] font-bold tracking-[0.05em] uppercase text-on-surface-variant mb-2 block">Thoughts & Session Comments</label>
              <textarea
                className="w-full bg-surface-container-highest border-none rounded-lg p-3 text-primary text-sm placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary-container transition-all resize-none"
                placeholder="Focus was high..."
                rows={3}
              ></textarea>
            </div>
          </section>

          {/* Prominent CTA */}
          <section className="pt-2">
            <button className="w-full bg-gradient-to-br from-[#00f5ff] to-[#00dce5] text-[#002021] py-4 rounded-[1.25rem] font-black text-lg tracking-widest uppercase flex items-center justify-center gap-2 active:scale-95 transition-transform duration-150 shadow-[0_5px_20px_rgba(0,245,255,0.2)]">
              <PlusCircle className="w-5 h-5 fill-current" />
              ADD SESSION
            </button>
          </section>
        </div>
      </main>
    </div>
  );
}
