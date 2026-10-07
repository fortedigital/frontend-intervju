import { useEffect, useState } from "react";

// DEL 1: Implementer denne.
export function useDebouncedValue<T>(value: T, delayMs: number): T {
  return value;
}

// DEL 3: Implementer eller forklar denne.
export function useThrottledValue<T>(value: T, intervalMs: number): T {
  return value;
}

// DEL 2: Hent data fra GET /api/search?q=<tekst> -> { id: string; title: string }[]
export function Search() {
  const [query, setQuery] = useState("");
  const debounced = useDebouncedValue(query, 300);

  useEffect(() => {
    console.log("søker etter", debounced);
    fetch(`/api/search?q=${debounced}`)
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, [debounced]);

  return (
    <main
      style={{
        fontFamily: "system-ui, sans-serif",
        maxWidth: 480,
        margin: "2rem auto",
      }}>
      <h1>Søk</h1>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Søk etter land…"
        style={{ width: "100%", padding: 8, fontSize: 16 }}
      />
    </main>
  );
}
