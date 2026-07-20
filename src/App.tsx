// src/App.tsx — code splitting par route
import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";
import { AuthProvider } from "./context/AuthContext";
import Layout from "./components/Layout";
import RoutePrivee from "./components/RoutePrivee";
import Loader from "./components/Loader";

// Overview reste "eager" (page d'accueil, chargée tout de suite).
import Overview from "./components/pages/Overview";

// Les autres pages sont chargées À LA DEMANDE (chunks séparés) :
const StatDetail = lazy(() => import("./components/pages/StatDetail"));
const Login = lazy(() => import("./components/pages/Login"));
const Settings = lazy(() =>
  import("./components/pages/Settings").then((m) => ({ default: m.Settings })),
);

function App() {
  return (
    <AuthProvider>
      {/* Suspense : fallback pendant le téléchargement d'un chunk de page */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Overview />} />
            <Route path="stat/:id" element={<StatDetail />} />
            <Route path="login" element={<Login />} />
            <Route element={<RoutePrivee />}>
              <Route path="reglages" element={<Settings />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </AuthProvider>
  );
}
export default App;
