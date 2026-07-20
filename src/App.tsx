// src/App.tsx
import { Routes, Route } from "react-router";
import { DashboardProvider } from "./context/DashboardContext";
import Layout from "./components/Layout";
import RoutePrivee from "./components/RoutePrivee";
import Overview from "./components/pages/Overview";
import StatDetail from "./components/pages/StatDetail";
import Login from "./components/pages/Login";
import { Settings } from "./components/pages/Settings";
import { NotFound } from "./components/pages/NotFound";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    // On enveloppe l'app par les deux providers (auth + état dashboard).
    <AuthProvider>
      <DashboardProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Overview />} /> {/* "/" */}
            <Route path="stat/:id" element={<StatDetail />} />{" "}
            {/* "/stat/xxx" */}
            <Route path="login" element={<Login />} />
            {/* Bloc protégé : il faut être connecté */}
            <Route element={<RoutePrivee />}>
              <Route path="reglages" element={<Settings />} />
            </Route>
            <Route path="*" element={<NotFound />} /> {/* 404, en dernier */}
          </Route>
        </Routes>
      </DashboardProvider>
    </AuthProvider>
  );
}
export default App;
