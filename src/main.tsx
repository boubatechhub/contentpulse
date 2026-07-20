// src/main.tsx
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import "./index.css";

// Le QueryClient = cache + config globale du data fetching.
const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60_000 } }, // fraîcheur par défaut 60s
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>,
);
