# Kodeoppgave: søkefelt med debounce

**Kontekst:** Vi har et søkefelt som slår opp mot et API. Vi vil ikke sende et kall for hvert tastetrykk.

## Del 1: `useDebouncedValue` (ca. 7 min)

Skriv hooken:

```ts
function useDebouncedValue<T>(value: T, delayMs: number): T;
```

Krav:

- Ved første render returneres `value` umiddelbart.
- Når `value` endres, skal den returnerte verdien oppdateres først etter at `delayMs` har gått uten nye endringer.
- Ingen timere skal bli liggende igjen etter at komponenten er fjernet fra DOM-en.
- Hooken skal fungere for alle typer `T`, ikke bare `string`.

---

## Del 2: hent data (ca. 8 min)

Endepunktet er `GET /api/search?q=<tekst>` og returnerer `{ id: string; title: string }[]`.

Skriv `useEffect`-en i `Search` som henter data basert på `debounced`, og vis resultatene i en liste.

Krav:

- Vis en loading-tilstand mens vi venter, og en feilmelding hvis noe går galt.
- Tomt søkefelt skal ikke gjøre noe kall.
- Svar fra et eldre søk skal aldri overskrive svar fra et nyere søk.

---

## Del 3: throttle (ca. 5 min)

Vi vil også ha en variant som ikke venter på at brukeren slutter å skrive, men som oppdaterer jevnlig mens de skriver (for eksempel et live forhåndsvisningspanel):

```ts
function useThrottledValue<T>(value: T, intervalMs: number): T;
```

Krav:

- Returnert verdi oppdateres maks én gang per `intervalMs`.
- Den siste verdien skal alltid komme frem til slutt, selv om brukeren slutter å skrive midt i et intervall.

Du trenger ikke skrive den ferdig. Forklar hvordan du ville gjort det, og skriv gjerne kode for kjernen.

---

## Kjøre prosjektet

```bash
npm install   # kun første gang (er sannsynligvis allerede gjort)
npm run dev   # åpner http://localhost:5173
```

- All koden din skal skrives i `src/Search.tsx`.
- Konsollen i nettleseren og terminalen viser hva som skjer. Terminalen logger alle kall til `/api/search`.
- `npm run typecheck` kjører TypeScript-sjekk.
- API-et er en enkel mock. Hvis noe virker rart med den, si fra.
