# 📌 Rättningsrapport – fed24d-case-af-jobtech-team-11-1

## 🎯 Uppgiftens Krav:
[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/6VsM7MHT)
# Skapa en egen Platsbanken för ert drömscenario 

Dokumentation om Arbetsförmedlingens öppna data finns på https://jobtechdev.se. All öppna data från arbetsförmedlingen och andra offentliga organisationen går även att hitta direkt på dataportal.se. 
I detta dokument ges två förslag på användningsfall som vi tror är lämpliga för studenter som vill utveckla en applikation på riktig data. All data som är öppna data får vem som helst använda utan att fråga myndigheten om lov, så ingen är begränsad till de exempel vi ger.

Läs först igenom kom-igång hjälpen 

-  [Övergripande dokumentation API:etJobSearch](https://jobtechdev.se/sv/components/jobsearch)
-  [Kom-igång guide](https://gitlab.com/arbetsformedlingen/education/education-api/-/blob/main/GETTING_STARTED.md)

## Prova att utforska datan med vår interaktiva tjänst 

Görs genom att öppna Swagger-sidan för API:et (för att enkelt testa olika endpoints i API:et och läsa dokumentation för respektive endpoint): Search job ads (jobtechdev.se) 

## Uppgift 

Använd endpoint https://jobsearch.api.jobtechdev.se/ för att använda/söka bland befintliga annonser. 
Det går även bra att använda historiska annonser om ni vill jämföra aktuella annonser med hur det har sett ut tidigare. Detta api finns här: Historical job ads (jobtechdev.se)

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

## 🔍 ESLint-varningar:


## 🏆 **Betyg: G**
📌 **Motivering:** G‑kraven uppfylls: data hämtas strukturerat via fetch i en tjänst (serviceBase + JobService), React‑koncept används (state, hooks, routing, route error page), designsystemet används genomgående och koden är överlag läsbar och konsekvent. Extra: ni har en custom hook för sök och fungerande paginering.

💡 **Förbättringsförslag:**  
- Fel import och intern navigering: Använd react-router-dom i stället för react-router för Link/useNavigate/useLocation/useParams/useSearchParams. Byt alla interna <a href> till <Link to> för att undvika full sidladdning (t.ex. i Navbar och Footer).
- Felhantering vid hämtning: Lägg till response.ok‑kontroll, try/catch och gärna AbortController (avbryt tidigare anrop) i serviceBase.get. Visa laddnings- och felstatus i UI.
- Dubbelhämtning i sök: useJobSearch anropar getJobs för att "pinga" API:t och navigerar sedan till listan som hämtar igen. Navigera direkt och låt listan hantera fallet 0 träffar, eller skicka med sökresultat i state.
- Typningsfel: IJob.application_contacts är definierad som ett objekt men används som en array (job.application_contacts[0]). Uppdatera typen till array enligt API:s svar och använd säkra kontroller.
- Tillgänglighet och fallback: I JobInfo saknas fallback-bild och alt‑text om logo_url saknas. Återanvänd er placeholder och säkra alt‑texter.
- Konsolloggar: Ta bort console.log i JobSearch före produktion.
- Färgpalett: Uppgiften säger att inte använda Arbetsförmedlingens färger. Säkerställ att er färgpalett verkligen är egen och inte AF:s varumärkesfärger.
- Pagination och total-gräns: Ni cappar total till 2000 (bra). Informera användaren om att endast de första 2000 resultaten visas.
- Bonusmöjligheter: Lägg till enkel graf (t.ex. antal annonser per region/yrke) för extra mervärde och överväg styled-components om ni vill nyttja designsystemets tokens i komponentnivå.

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
