import { Bolt, Mail, Lock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginScreen() {
  return (
    <div className="bg-surface text-primary min-h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Hero Visual Section */}
      <div className="relative w-full md:w-1/2 lg:w-3/5 h-[353px] md:h-screen overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Training Hard"
            className="w-full h-full object-cover grayscale brightness-50 contrast-125"
            src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1000"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-surface"></div>
        </div>
        {/* Editorial Typography Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-16 lg:p-24 pointer-events-none">
          <div className="mb-3">
            <span className="bg-primary-container text-on-primary-fixed text-[0.625rem] font-black uppercase tracking-[0.2em] px-2 py-0.5 rounded-full">
              GALAXY FITNESS
            </span>
          </div>
          <h1 className="text-4xl md:text-[5rem] font-black leading-[0.9] tracking-tighter uppercase italic text-primary">
            PRACTICE<br />MAKES<br /><span className="text-surface-tint">PERFECT</span>
          </h1>
          <p className="mt-4 text-on-surface-variant max-w-xs text-xs font-medium tracking-wide">
            Experience a seamless workout experience with even better training tracking that is intuitive.
          </p>
        </div>
      </div>

      {/* Authentication Form Section */}
      <div className="w-full md:w-1/2 lg:w-2/5 flex flex-col justify-center items-center p-6 md:p-12 lg:p-20 z-20 bg-surface md:bg-transparent">
        <div className="w-full max-w-sm space-y-8">
          {/* Logo Section */}
          <div className="flex flex-col items-start gap-1">
            <div className="flex items-center gap-2">
              <Bolt className="text-primary-container w-6 h-6 fill-current" />
              <span className="text-lg font-black italic text-primary-container tracking-widest uppercase">GALAXY FITNESS</span>
            </div>
            <h2 className="text-2xl font-black text-primary tracking-tight">WELCOME BACK</h2>
          </div>

          {/* Login Form */}
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-4">
              {/* Email Input */}
              <div className="group">
                <label className="block text-[0.6875rem] font-black uppercase tracking-[0.05em] text-on-surface-variant mb-2 ml-1 group-focus-within:text-primary-container transition-colors">
                  EMAIL ADDRESS
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary-container transition-colors w-5 h-5" />
                  <input
                    className="w-full h-14 bg-surface-container-highest border-none rounded-xl pl-12 pr-4 text-primary placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary-container focus:bg-surface-bright transition-all"
                    placeholder="name@performance.com"
                    type="email"
                  />
                </div>
              </div>
              {/* Password Input */}
              <div className="group">
                <div className="flex justify-between items-end mb-2 ml-1">
                  <label className="block text-[0.6875rem] font-black uppercase tracking-[0.05em] text-on-surface-variant group-focus-within:text-primary-container transition-colors">
                    PASSWORD
                  </label>
                  <a className="text-[0.625rem] font-bold text-on-surface-variant hover:text-primary-container uppercase transition-colors" href="#">Forgot?</a>
                </div>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary-container transition-colors w-5 h-5" />
                  <input
                    className="w-full h-14 bg-surface-container-highest border-none rounded-xl pl-12 pr-4 text-primary placeholder:text-on-surface-variant/50 focus:ring-2 focus:ring-primary-container focus:bg-surface-bright transition-all"
                    placeholder="••••••••"
                    type="password"
                  />
                </div>
              </div>
            </div>
            {/* Primary Action */}
            <Link
              to="/dashboard"
              className="w-full h-14 rounded-xl bg-gradient-to-br from-primary-container to-surface-tint text-on-primary-fixed font-black uppercase tracking-widest text-sm flex items-center justify-center gap-2 shadow-[0_10px_40px_rgba(0,245,255,0.15)] active:scale-[0.98] transition-all"
            >
              LOGIN
              <ArrowRight className="w-5 h-5" />
            </Link>
          </form>

          {/* Social Login Alternative */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="h-[1px] flex-1 bg-surface-container-highest"></div>
              <span className="text-[0.6875rem] font-bold text-on-surface-variant uppercase tracking-widest">OR CONTINUE WITH</span>
              <div className="h-[1px] flex-1 bg-surface-container-highest"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 h-12 rounded-xl bg-surface-container-low hover:bg-surface-container-high text-primary transition-colors">
                <img
                  alt="Google"
                  className="w-5 h-5"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPp4BsCBxaPcIcHfvKgaaACWa1EaUHh9hO6RfBAMQ3-41mwvHC7l0pFLYK6VWkBWwfyyUdZekrE8UxmRyLGN_v8rMEr7_MXcKo4YgDpbPmLE3-z3O9P-O3boxUEbVFR8RvZKccaUkgx0JbXdaElmB6uFEcsYK8L2gDf1G8B1mq3W1BOM_6QWnR8d1MbGpb257vm1uEuceMvCqaavwH9KDSsGDu7eN_xuGNIIztVet92uGeq1lyW3XO7x6VcQGocjKIPUiUuWVBUHc"
                  referrerPolicy="no-referrer"
                />
                <span className="text-xs font-black uppercase tracking-wider">Google</span>
              </button>
              <button className="flex items-center justify-center gap-3 h-12 rounded-xl bg-surface-container-low hover:bg-surface-container-high text-primary transition-colors">
                <Bolt className="w-5 h-5 fill-current" />
                <span className="text-xs font-black uppercase tracking-wider">Apple</span>
              </button>
            </div>
          </div>

          {/* Footer Link */}
          <p className="text-center text-sm font-medium text-on-surface-variant">
            New to the grind?
            <a className="text-primary-container font-black hover:underline underline-offset-4 ml-1 transition-all" href="#">SIGN UP NOW</a>
          </p>
        </div>
      </div>

      {/* Aesthetic Decorative Element: Blur Glows */}
      <div className="fixed top-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-primary-container/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      <div className="fixed bottom-[-10%] left-[10%] w-[30vw] h-[30vw] bg-surface-tint/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
    </div>
  );
}
