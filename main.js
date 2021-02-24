// - [x] JS, HTML & CSS files maken
// - [x] JavaScript script file linken
// - [x] CSS script file linken
// - [x] npm init (installeert package.json)
// - [x] Axios installeren (npm install axios: hiermee kun je data ophalen, installeert package-lock.json)
// - [x] Axios script linken (<script src="./node_modules/axios/dist/axios.min.js"></script>)
// - [x] Check of files JS en CSS werken

// Vraag 1
async function displayCountry(){
    const country = "Belgie";
    const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
    console.log("GET COUNTRY HERE:", url, axios) // geeft link + axios

    const response = await axios.get(url)
    console.log("RESPONSE:", response); // geeft data Array met België
}

const button = document.getElementById("search-button");
button.addEventListener("click", displayCountry);




