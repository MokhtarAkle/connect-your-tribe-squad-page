

// Importeer express uit de node_modules map
import express from 'express'


const url = "https://whois.fdnd.nl/api/v1/squad/";

const data = await fetch(url).then((response) => response.json());

const generalUrl = "https://whois.fdnd.nl/api/v1/";



// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine en geef de 'views' map door
app.set('view engine', 'ejs')
app.set('views', './views')

// Gebruik de map 'public' voor statische resources
app.use(express.static('public'))

// Maak een route voor de index
app.get('/', (req, res) => {
  console.log(req.query.squad)

  let slug = req.query.squad || 'squat-c-2022'
  let orderBy = req.query.orderBy || 'name'
  let direction

  
  let role = req.query.role
  
  switch (orderBy) {
    case "name-AZ":
        orderBy = "name"
        direction = "ASC"
        break;
    case "name-ZA":
        orderBy = "name"
        direction = "DESC"
        break;
    case "surname-AZ":
        orderBy = "surname"
        direction = "ASC"
        break;
    case "surname-ZA":
        orderBy = "surname"
        direction = "DESC"
        break;
    case "nickname-AZ":
        orderBy = "nickname"
        direction = "ASC"
        break;
    case "nickname-ZA":
        orderBy = "nickname"
        direction = "DESC"
        break;                                
    
}

  let squadUrl = url + slug + '?orderBy=' + orderBy + '&direction=' + direction + "&role=" + role

  console.log(squadUrl)


  fetchJson(squadUrl).then((data) => {
    res.render('index', data)
  })
})

// Stel het poortnummer in waar express op gaat luisteren
app.set('port', process.env.PORT || 8000)

// Start express op, haal het ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})

async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error)
}