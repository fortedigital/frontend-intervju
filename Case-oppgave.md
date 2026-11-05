# Case-brief 

NordVarehus AS er en norsk retail-kjede med 60 butikker og en nettbutikk. De vil bygge et nytt lagerverktøy for butikkansatte.

## De ansatte trenger å

- Se lagerstatus for egen butikk og søke opp produkter
- Få beskjed innen få sekunder når en nettbutikk-ordre skal plukkes i butikken (click & collect)
- Registrere varemottak og lagerjusteringer (telling, svinn)

## Rammer

- Opptil 40 000 produkter per butikk
- Brukes på delte Android-nettbrett og PC i kassen. Wifi på lageret er ustabilt
- Lagerdata finnes i dag i ERP-systemet (Dynamics 365). Nettbutikken sender ordre via webhooks
- Ingen eksisterende API eller frontend – dere starter fra blanke ark

Det finnes ikke én fasit. Vi er mer interessert i resonnementet og avveiningene dine enn i riktig svar. Still gjerne spørsmål underveis.

## Alternativ A – Frontend 
Backend-teamet tilbyr et REST-API for lager og produkter, og en event-strøm (WebSocket eller SSE) for lagerendringer og nye plukkordre. Tech-stacken er React og TypeScript. Resten er opp til deg.

### Oppgave

Skisser hvordan du ville bygget frontenden. Hvordan strukturerer du applikasjonen, hvordan håndterer du data (henting, caching, sanntid, skriving), og hvordan får du den til å fungere på nettbrett med dårlig nett?

### Hvis tid

Produktlisten på 40 000 rader skal være søkbar og vise lagerstatus live. Hvordan bygger du den så den er rask og tilgjengelig?

## Alternativ B – Backend 

Frontend-teamet bygger en React-app for nettbrettene. Du skal designe backenden som støtter den. Kjører i Azure, ellers er teknologivalg opp til deg.

### Oppgave

Skisser hvordan du ville bygget backenden. Hvordan får du lagerdata fra ERP og ordre fra nettbutikken inn, hvordan eksponerer du det til frontenden (API og sanntid), og hvordan håndterer du skriving fra nettbrett med ustabilt nett?

### Hvis tid

To nettbrett registrerer en lagerjustering på samme vare omtrent samtidig, det ene etter å ha vært uten nett i noen minutter. Hvordan håndterer backenden det?
