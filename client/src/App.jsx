import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import DashboardPage from "./pages/DashboardPage";
import CheckInPage from "./pages/CheckInPage";
import JournalPage from "./pages/JournalPage";
import InsightsPage from "./pages/InsightsPage";
import ActivitiesPage from "./pages/ActivitiesPage";
import ResourcesPage from "./pages/ResourcesPage";
import SettingsPage from "./pages/SettingsPage";
import PrivacyPage from "./pages/PrivacyPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Public */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Authenticated application */}
        <Route element={<AppLayout />}>

          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/check-in" element={<CheckInPage />} />
          <Route path="/journal" element={<JournalPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;