import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";

const COUNTRIES = [
  "Argentina", "Australia", "Belgia", "Brasil", "Canada", "Chile", "Danmark", "Egypt",
  "Estland", "Filippinene", "Finland", "Frankrike", "Hellas", "India", "Irland", "Island",
  "Italia", "Japan", "Kenya", "Kina", "Latvia", "Litauen", "Mexico", "Nederland",
  "New Zealand", "Norge", "Polen", "Portugal", "Spania", "Sverige", "Sveits", "Tyskland",
  "Ungarn", "USA", "Østerrike",
];

// Mock-API: GET /api/search?q=... Korte søk svarer tregere enn lange (så svar kan komme i feil rekkefølge).
// Søker du på "feil" svarer den med HTTP 500. Alle kall logges i terminalen.
function mockSearchApi(): Plugin {
  return {
    name: "mock-search-api",
    configureServer(server) {
      server.middlewares.use("/api/search", (req, res) => {
        const q = new URL(req.url ?? "", "http://localhost").searchParams.get("q") ?? "";
        const delayMs = Math.max(100, 1500 - q.length * 300);
        console.log(`[api] GET /api/search?q=${q} (svarer om ${delayMs} ms)`);

        const timer = setTimeout(() => {
          res.setHeader("Content-Type", "application/json");
          if (q.toLowerCase() === "feil") {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: "Noe gikk galt" }));
            return;
          }
          const results = COUNTRIES.filter((c) => c.toLowerCase().includes(q.toLowerCase())).map((title) => ({
            id: title.toLowerCase().replace(/\s+/g, "-"),
            title,
          }));
          res.end(JSON.stringify(results));
        }, delayMs);

        res.on("close", () => clearTimeout(timer));
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), mockSearchApi()],
});
