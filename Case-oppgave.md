# Nesten-sanntids lagerdashboard for butikkansatte

## Case-brief

NordVarehus AS er en norsk retail-kjede med 60 fysiske butikker og en nettbutikk. Dataplattformen deres er nylig modernisert, og de har nå et API som eksponerer lagerstatus per butikk og produkt. Nå vil de bygge en ny frontend: et lagerdashboard for butikkansatte.

## Hva de ansatte trenger


- Se lagerstatus for egen butikk: hva er på lager, hva er snart tomt, hva er under bestilling
- Søke opp et produkt når en kunde spør, og se om nabobutikker har det
- Få beskjed når varer som er solgt i nettbutikken skal plukkes i butikken («click & collect») – dette må dukke opp innen få sekunder
- Registrere varemottak og manuelle lagerjusteringer (telling, svinn)


## Tekniske rammer


- Backend tilbyr: REST-API for lager og produkter (ca. 300 ms svartid), og en event-strøm (WebSocket eller SSE) for lagerendringer og nye plukkordre
- Et typisk varehus har 15 000 produkter; den største butikken har 40 000
- Brukes på delte nettbrett (Android) og på PC i kassen. Wifi i lageret er ustabilt, særlig i kjølerom
- De ansatte har ikke egen bruker i dag – nettbrettet er logget inn som «butikken»
- Butikksjefer vil ha en enkel oversikt over dagens plukkordre og lagerbevegelser
- Tech-stacken skal være React og TypeScript. Resten er opp til deg.


## Oppgave 1 (hovedoppgave)

Skisser hvordan du ville designet og bygget denne applikasjonen. Tegn/beskriv frontend-arkitekturen: hvordan strukturerer du applikasjonen, hvordan håndterer du data (henting, caching, sanntidsoppdateringer, skriving), og hvordan sikrer du at den fungerer godt på nettbrett med dårlig nett. Vi diskuterer valgene dine underveis.

## Oppgave 2 (hvis tid)

Produktlisten med 40 000 rader skal være søkbar, filtrerbar og vise lagerstatus som oppdateres live. Hvordan ville du bygget denne én komponenten slik at den er rask, tilgjengelig og ikke tegner om hele listen hver gang én vare endrer antall?
