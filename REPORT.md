# 📌 Rättningsrapport – fed24d-case-af-jobtech-team-11-1

## 🎯 Uppgiftens Krav:
# Skapa en egen Platsbanken för ert drömscenario 

Dokumentation om Arbetsförmedlingens öppna data finns på https://jobtechdev.se. All öppna data från arbetsförmedlingen och andra offentliga organisationen går även att hitta direkt på dataportal.se. 
I detta dokument ges två förslag på användningsfall som vi tror är lämpliga för studenter som vill utveckla en applikation på riktig data. All data som är öppna data får vem som helst använda utan att fråga myndigheten om lov, så ingen är begränsad till de exempel vi ger.

Läs först igenom kom-igång hjälpen 

-  [Övergripande dokumentation API:etJobSearch](https://data.arbetsformedlingen.se/data/platsannonser/)
-  [Kom-igång guide](https://gitlab.com/arbetsformedlingen/job-ads/jobsearch/jobsearch-api/-/blob/main/docs/GettingStartedJobSearchSE.md)

## Prova att utforska datan med vår interaktiva tjänst 

Görs genom att öppna Swagger-sidan för API:et (för att enkelt testa olika endpoints i API:et och läsa dokumentation för respektive endpoint): [Search job ads (jobtechdev.se)](https://jobsearch.api.jobtechdev.se/)

## Uppgift 

Använd endpoint **/search** för att söka bland befintliga annonser. 
Det går även bra att använda historiska annonser om ni vill jämföra aktuella annonser med hur det har sett ut tidigare. Detta api finns här: [Historical job ads (jobtechdev.se)](https://historical.api.jobtechdev.se/)

Om möjligt, använd en grafisk presentation av era resultat genom t.ex. stapeldiagram eller linjegrafer.

**Observera**
Er slutprodukt ska ej innehålla Arbetsförmedlingens logga eller färger. Anpassa gärna efter eget tycke och smak så att ni har en färgpalett och en god tanke bakom. 

## Betygskriterier 

### Need-to-have (G) 
- Ni har hämtat data på ett strukturerat sätt med hjälp av antingen fetch eller axios. 
- Ni har skapat en tjänst som ni använder för att hämta data. 
- Ni använder react-koncept vi har pratat om för att göra datan tillgänglig (context, state, routing et.c.). 
- Ni använder den syntax, namngivningsstandard samt skrivsätt som vi har lärt er.  
- Ni använder designsystemet för presentation. 

### Nice-to-have (Extra bonus) 
- Styled components (som drar nytta av designsystemet) 
- Grafisk presentation av datat 
- Användning av custom hook där det finns möjlighet
- Använd endpoint /complete för att lägga till autocomplete-funktion och få förslag på begrepp vid fritextsökning

## 🔍 ESLint-varningar:


## 🏆 **Betyg: G**
📌 **Motivering:** Appen uppfyller G-kraven: data hämtas strukturerat via fetch i en separat tjänst (serviceBase/JobService), React-koncept som routing, state och en custom hook används, och presentationen bygger på designsystemet. Ni har sök, listvy med pagination samt detaljsida.

💡 **Förbättringsförslag:**  
- Robusthet i datamodeller: IJob.application_contacts används som array (job?.application_contacts?.[0]) men är typad som ett objekt. Ändra till ApplicationContact[] och gör flera fält valfria (t.ex. description, salary_type, application_details) så att ni kan kedja säkert.
- Optional chaining-buggar: Använd kedjad optional chaining där fält kan saknas. Exempel: job?.salary_type?.label, job?.description?.conditions, job?.application_details?.url. I nuvarande kod kan det bli runtime-fel om underobjekt saknas.
- Felhantering vid API-anrop: serviceBase.get saknar kontroll av response.ok och try/catch. Lägg till felhantering och visa en användarvänlig error/empty state samt loading-tillstånd i listor och detaljsida.
- Konsistens i routing: Importera från react-router-dom (RouterProvider, createBrowserRouter, Link, useNavigate, useSearchParams). Undvik <a href> för interna länkar (Navbar/Footer); använd <Link> för SPA-navigering och bättre UX.
- Empty state i listvy: Om /jobs?search=... ger 0 träffar via direktlänk visas ingen feedback. Visa NoJobsFound eller en tydlig tomvy även i ListContent.
- Rensa debug-loggar: Ta bort console.log i JobSearch och undvik dubbla eventhanterare. Välj en av onAfOnChange/onAfOnInput och typa event korrekt.
- Bildfallback i detaljsida: I JobInfo saknas fallback om logo_url är tom. Återanvänd placeholder eller visa tomt state samt sätt storlek/alt.
- Tillgänglighet och semantik: Säkerställ rubrikhierarki (en H1 per sida, följ med H2/H3), undvik att lägga blockrubriker direkt i länkar om det inte behövs. Kontrollera länktexter så att de är självbeskrivande.
- CSS underhållbarhet: Ni överskuggar interna komponentklasser (.sc-digi-...). Dessa kan ändras mellan versioner. Försök använda design tokens/variabler, komponenternas props eller egna wrapper-klasser.
- Konfiguration: Flytta BASE_URL till en miljövariabel (Vite env) för enklare byte mellan miljöer.
- Språk/kopior: Korrigera stavfel ("stavnig" -> "stavning").
- Bonus för VG: Lägg till grafiska visualiseringar (t.ex. top 10 yrken/orter), använd /complete för autocomplete i sök, och/eller implementera en custom hook för pagination/datahämtning med abort/debounce.

## 👥 Gruppbidrag

| Deltagare | Antal commits | Commit % | Uppgiftskomplettering | Totalt bidrag |
| --------- | -------------- | -------- | ---------------------- | ------------- |
| Jennifer Nilsson | 25 | 43.9% | 0.33 | 0.38 |
| Karin Henriksson | 20 | 35.1% | 0.33 | 0.34 |
| Alicia | 12 | 21.1% | 0.33 | 0.28 |


### 📊 Förklaring
- **Antal commits**: Antalet commits som personen har gjort
- **Commit %**: Procentuell andel av totala commits
- **Uppgiftskomplettering**: Poäng baserad på mappning av README-krav mot kodbidrag 
- **Totalt bidrag**: Viktad bedömning av personens totala bidrag (40% commits, 60% uppgiftskomplettering)
