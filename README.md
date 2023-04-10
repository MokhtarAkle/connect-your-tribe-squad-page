# Squad page met Node en data uit de whois.fdnd.nl API.

![image](https://user-images.githubusercontent.com/45001009/230918461-6cc0a9f6-eb2b-4444-91a1-538f8266ca78.png)

![image](https://user-images.githubusercontent.com/45001009/230918856-dc5ea90e-56ec-4b17-b2cc-4174d359ac72.png)

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Gebruik](#gebruik)
  * [Licentie](#licentie)

## Beschrijving
Deze sprint zijn we voor het eerst aan de slag gegaan met NodeJS, EJS en Express om een project met server-side code op te zetten. Alle FDND studenten hebben wat data moet invullen die we vervolgens kunnen gebruiken via de whoisfdnd REST API. Deze data wordt visueel weergeven en het is mogelijk om deze te filteren en sorteren door gebruik te maken van queries. De site is verder opgebouwd met een Masonry layout en maakt gebruik van checkboxes en een select voor de sorteeropties en het filter.

## Kenmerken
### Node
Node is een onderliggend framework dat er voor zorgt dat we server side code kunnen schrijven en gebruik kunnen maken van verschillende modules zoals Express en EJS.

### Express
We gebruiken Express als framework voor onze projecten. Met express kunnen we verschillende routes aanmaken waarin we content kunnen aanbieden als webpaginas. Ook kunnen we gebruik maken van een view engine door middel van Express om de opmaak van de HTML makkelijker te maken. Verder kan je statische bestanden aanbieden door een statische route aan te geven via express. Door middel van de statische mappen

```
//Algemene opzet Express

// Importeer express uit de node_modules map
import express from 'express'

// Maak een nieuwe express app aan
const app = express()

// Gebruik de map 'public' voor statische resources
app.use('/static', express.static('public'))

// Maak een route voor de index
app.get('/', (req, res) => {
```

### EJS
De view engine die we gebruiken is EJS. Hiermee kan je makkelijk templates van HTML maken terwijl je direct in combinatie hiermee JS kan gebruiken.

```
// Stel ejs in als template engine en geef de 'views' map door
app.set('view engine', 'ejs')
app.set('views', './views')

```

## Installatie
Fork en clone de repo om de nodige bestanden lokaal op te slaan, check dubbel voor package.json en run npm install.

```
npm run start
```
## Gebruik
De site zal openen met een overzicht van studenten uit squad C van FDND. Er zijn verschillende squads beschikbaar en individuele rollen. Door gebruik te maken van de checkboxes en select optie aan de bovenkant van de pagina, kan je de resultaten filteren en sorteren om specifieke squads/individuele rollen te zien.

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
