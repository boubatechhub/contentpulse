// src/api/http.ts
const BASE = import.meta.env.VITE_API_URL ?? ""; // URL de base via variable d'env

export async function http<T>(
  chemin: string,
  options?: RequestInit,
): Promise<T> {
  const res = await fetch(`${BASE}${chemin}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });
  if (!res.ok) throw new Error(`Erreur ${res.status}`);
  return res.json() as Promise<T>;
}
