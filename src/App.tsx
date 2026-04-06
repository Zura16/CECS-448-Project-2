import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";
import DashboardScreen from "./screens/DashboardScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import AccountScreen from "./screens/AccountScreen";
import WorkoutLogsScreen from "./screens/WorkoutLogsScreen";
import BottomNav from "./components/BottomNav";

function AppContent() {
  const location = useLocation();
  const showBottomNav = ["/dashboard", "/workout", "/account", "/workout-logs"].includes(location.pathname);

  return (
    <div className="min-h-screen bg-surface">
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/dashboard" element={<DashboardScreen />} />
        <Route path="/workout" element={<WorkoutScreen />} />
        <Route path="/account" element={<AccountScreen />} />
        <Route path="/workout-logs" element={<WorkoutLogsScreen />} />
      </Routes>
      {showBottomNav && <BottomNav />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
