# Het witte bolletje

## Overzicht
Deze website is het moderne, interactieve platform voor banketbakkerij "Het witte bolletje". Met de nieuwste webtechnologieën biedt het een aantrekkelijke gebruikerservaring, vloeiende animaties en een overzichtelijke, toegankelijke interface. De site toont het exclusieve assortiment, informatie over de bakkerij en contactmogelijkheden.

## Belangrijkste features
- **Responsief ontwerp:** Geoptimaliseerd voor mobiel, tablet en desktop
- **Moderne UI-componenten:** Gebouwd met React, gestyled met Tailwind CSS, Shadcn en Radix
- **Snel & soepel:** Direct laden en vloeiende interacties dankzij Vite
- **Duidelijke structuur:** Overzichtelijke navigatie en toegankelijke content
- **Dynamisch assortiment:** Producten en afbeeldingen eenvoudig aan te passen

## Technologieën
### Frontend
- React 18
- Vite 5
- TypeScript
- Tailwind CSS 3
- Shadcn UI
- Radix UI

### Development tools
- Visual Studio Code
- Git & GitHub
- NPM

## Installatie
### Vereisten
- Node.js (LTS-versie)
- npm (standaard bij Node.js)

### Stappen
1. Clone de repository:
   ```bash
   git clone <repository-url>
   cd witte-bolletje
   ```
2. Installeer de dependencies:
   ```bash
   npm install
   ```
3. Start de ontwikkelserver:
   ```bash
   npm run dev
   ```
4. Open je browser en ga naar [http://localhost:8080](http://localhost:8080)

## Configuratie
- Afbeeldingen kun je toevoegen in `public/lovable-uploads/` en direct gebruiken in de code.
- Tailwind CSS-configuratie vind je in `tailwind.config.ts`.
- Vite-configuratie vind je in `vite.config.ts`.

## Beschikbare scripts
| Command         | Omschrijving                        |
|-----------------|-------------------------------------|
| npm run dev     | Start de ontwikkelserver            |
| npm run build   | Maakt een productie-build           |
| npm run preview | Bekijkt de productie-build lokaal   |
| npm run lint    | Controleert de codekwaliteit        |

## Projectstructuur
```
witte-bolletje/
├── public/              # Statische assets (favicon, afbeeldingen)
│   └── lovable-uploads/ # Productafbeeldingen
├── src/
│   ├── pages/           # Pagina-componenten (Index, Assortiment, Contact)
│   ├── components/      # Herbruikbare React-componenten
│   └── ...
├── tailwind.config.ts   # Tailwind configuratie
├── vite.config.ts       # Vite configuratie
└── ...
```

## Bijdragen
Bijdragen zijn welkom! Maak gerust een Pull Request. Voor grote wijzigingen, open eerst een issue om je voorstel te bespreken.

## Licentie
Dit project is gelicentieerd onder de ISC-licentie.

## Contact
Voor vragen of suggesties, open een issue in de GitHub-repository.

## Dankwoord
- Alle leveranciers van de gebruikte open source tools
- Iedereen die heeft bijgedragen aan dit project
