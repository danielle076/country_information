// - [x] JS, HTML & CSS files maken
// - [x] JavaScript script file linken
// - [x] CSS script file linken
// - [x] npm init (installeert package.json)
// - [x] Axios installeren (npm install axios: hiermee kun je data ophalen, installeert package-lock.json)
// - [x] Axios script linken (<script src="./node_modules/axios/dist/axios.min.js"></script>)
// - [x] Check of files JS en CSS werken

// Vraag 1
// async function displayCountry(){
//     const country = "Belgie";
//     const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
//     console.log("GET COUNTRY HERE:", url, axios) // geeft link + axios
//
//     const response = await axios.get(url)
//     console.log("RESPONSE:", response); // geeft data Array met België
// }
//
// const button = document.getElementById("search-button");
// button.addEventListener("click", displayCountry);

// Vraag 2
async function displayCountry(){
    const country = "Belgie";
    const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;

    const response = await axios.get(url)
    console.log(response.data[0].name); // geeft Belgium
    const countryName = response.data[0].name;
    console.log("COUNTRYNAME:", countryName); // geeft COUNTRYNAME: Belgium
    const countryArea = response.data[0].subregion;
    console.log("COUNTRYAREA:", countryArea); // geeft COUNTRYAREA: Western Europe
    const countryPopulation = response.data[0].population;
    console.log("COUNTRYPOPULATION:", countryPopulation); // geeft COUNTRYPOPULATION: 11319511

    const countryData = response.data[0];
    const geography= `${countryData.name} is situated in ${countryData.subregion}. It has a population of ${(countryData.population / 1000000).toFixed(1)} million people.`
    console.log("OUTPUT:", geography); // geeft Belgium is situated in Western Europe. It has a population of 11.3 million people.
}

const button = document.getElementById("search-button");
button.addEventListener("click", displayCountry);