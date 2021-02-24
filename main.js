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
// async function displayCountry(){
//     const country = "Belgie";
//     const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
//
//     const response = await axios.get(url)
//     console.log(response.data[0].name); // geeft Belgium
//     const countryName = response.data[0].name;
//     console.log("COUNTRYNAME:", countryName); // geeft COUNTRYNAME: Belgium
//     const countryArea = response.data[0].subregion;
//     console.log("COUNTRYAREA:", countryArea); // geeft COUNTRYAREA: Western Europe
//     const countryPopulation = response.data[0].population;
//     console.log("COUNTRYPOPULATION:", countryPopulation); // geeft COUNTRYPOPULATION: 11319511
//
//     const countryData = response.data[0];
//     const geography= `${countryData.name} is situated in ${countryData.subregion}. It has a population of ${(countryData.population / 1000000).toFixed(1)} million people.`
//     console.log("OUTPUT:", geography); // geeft Belgium is situated in Western Europe. It has a population of 11.3 million people.
// }
//
// const button = document.getElementById("search-button");
// button.addEventListener("click", displayCountry);

// Vraag 3
// async function displayCountry(){
//     const country = "Belgie";
//     const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
//
//     const response = await axios.get(url)
//
//     const countryData = response.data[0];
//     const geography = `${countryData.name} is situated in ${countryData.subregion}. It has a population of ${(countryData.population / 1000000).toFixed(1)} million people.`
//     const capital = `The capital is ${countryData.capital}`
//     console.log("OUTPUT:", capital); // OUTPUT: The capital is Brussels
// }
//
// const button = document.getElementById("search-button");
// button.addEventListener("click", displayCountry);

// Vraag 4
// async function displayCountry(){
//     const country = "België";
//     const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
//
//     const response = await axios.get(url)
//
//     const countryData = response.data[0];
//     const geography = `${countryData.name} is situated in ${countryData.subregion}. It has a population of ${(countryData.population / 1000000).toFixed(1)} million people.`
//     const capital = `The capital is ${countryData.capital}`
//
//     const currencies = countryData.currencies;
//     console.log("CURRENCIES:", currencies); // geeft CURRENCIES: 0: {code: "EUR", name: "Euro", symbol: "€"}
//     // Je roept de functie hier aan, omdat de currencies in deze functie staan
//     formatCurrencies(currencies); // argument: waarde
//     const currencyString = formatCurrencies(currencies);
//     console.log(currencyString); // and you can pay with Euro's
// }
//
// function formatCurrencies(currencyArray){ // parameter: placeholders
//     console.log("INPUT FUNCTIE:", currencyArray); // check input parameter: INPUT FUNCTIE: 0: {code: "EUR", name: "Euro", symbol: "€"}
//     const currencyOne = currencyArray[0];
//     const currencyTwo = currencyArray[1];
//     console.log("CURRENCYONE:", currencyOne, "CURRENCYTWO:", currencyTwo); // geeft CURRENCYONE: {code: "EUR", name: "Euro", symbol: "€"} CURRENCYTWO: undefined
//     // Scenario: length is 1
//     // Hoe kun je kijken hoeveel elementen er in een array zitten: .length
//     console.log("LENGTE 1?:", currencyArray.length === 1); // geeft true
//     // Scenario: length is 2
//     console.log("LENGTE 2?:", currencyArray.length > 1); // geeft false
//     if(currencyArray.length === 1){
//         return `and you can pay with ${currencyOne.name}'s`
//     }
//     if (currencyArray.length > 1) {
//         return `and you can pay with ${currencyOne.name}'s and ${currencyTwo.name}'s`
//     }
// }
//
// const button = document.getElementById("search-button");
// button.addEventListener("click", displayCountry);

// Vraag 5
// async function displayCountry(){
//     const country = "Antarctica";
//     const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
//
//     const response = await axios.get(url)
//
//     const countryData = response.data[0];
//     const geography = `${countryData.name} is situated in ${countryData.subregion}. It has a population of ${(countryData.population / 1000000).toFixed(1)} million people.`
//     const capital = `The capital is ${countryData.capital}`
//
//     const currencies = countryData.currencies;
//     const currencyString = formatCurrencies(currencies);
//     console.log(currencyString); // and you can pay with Australian dollar's and British pound's
// }
//
// function formatCurrencies(currencyArray){
//     const currencyOne = currencyArray[0];
//     const currencyTwo = currencyArray[1];
//     if(currencyArray.length === 1){
//         return `and you can pay with ${currencyOne.name}'s`
//     }
//     if (currencyArray.length > 1) {
//         return `and you can pay with ${currencyOne.name}'s and ${currencyTwo.name}'s`
//     }
// }
//
// const button = document.getElementById("search-button");
// button.addEventListener("click", displayCountry);

// Vraag 6: bonus

// Vraag 7 - flag en countryname aan dom toegevoegd
// async function displayCountry(){
//     const country = "Antarctica";
//     const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
//     const response = await axios.get(url)
//
//     const countryData = response.data[0];
//
//     // Maak een selectCountry container aan
//     const selectCountry = document.createElement('div');
//     selectCountry.setAttribute('id', 'selectCountry');
//
//     // Maak de <img> tag om de vlag in weer te geven
//     const flag = document.createElement("img");
//     console.log("FLAG:", flag); // geeft FLAG: <img src="https://restcountries.eu/data/ata.svg">
//     // Stop de image url in het src attribuut van img
//     flag.setAttribute('src', countryData.flag);
//     selectCountry.appendChild(flag);
//
//     // Countryname maken
//     const countryName = document.createElement('h1');
//     console.log("NAME:", countryName);
//     countryName.textContent = countryData.name;
//     selectCountry.appendChild(countryName);
//
//     const currencies = countryData.currencies;
//     const currencyString = formatCurrencies(currencies);
//
//     const geography = `${countryData.name} is situated in ${countryData.subregion}. It has a population of ${(countryData.population / 1000000).toFixed(1)} million people.`
//     const capital = `The capital is ${countryData.capital}`
//
//     console.log("POPULATION", geography);
//     console.log("CAPITAL", capital);
//     console.log("CURRENCIES", currencyString);
//
//     // Sla de referentie op naar de country-container waarin de informatie van een land staat
//     const previousSearchResult = document.getElementById("selectCountry");
//     // Als deze referentie bestaat (en er dus al een land op de pagina wordt weergegeven) dan halen we deze eerst weg
//     if (previousSearchResult) {
//         countryContainer.removeChild(previousSearchResult);
//     }
//
//     // Voeg de country <div> toe aan de countryContainer
//     countryContainer.appendChild(selectCountry);
// }
//
// function formatCurrencies(currencyArray){
//     const currencyOne = currencyArray[0];
//     const currencyTwo = currencyArray[1];
//     if(currencyArray.length === 1){
//         return `and you can pay with ${currencyOne.name}'s`
//     }
//     if (currencyArray.length > 1) {
//         return `and you can pay with ${currencyOne.name}'s and ${currencyTwo.name}'s`
//     }
// }
//
// // Sla de referentie naar het "anker" element op waarin we alle landen gaan toevoegen
// const countryContainer = document.getElementById("countries");
//
// const button = document.getElementById("search-button");
// button.addEventListener("click", displayCountry);

// Vraag 7 subregion, population, capital en currency aan dom toegevoegd
// async function displayCountry(){
//     const country = "Holland";
//     const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
//     const response = await axios.get(url)
//
//     const countryData = response.data[0];
//
//     const selectCountry = document.createElement('div');
//     selectCountry.setAttribute('id', 'selectCountry');
//
//     const flag = document.createElement("img");
//     flag.setAttribute('src', countryData.flag);
//     selectCountry.appendChild(flag);
//
//     const countryName = document.createElement('h1');
//     countryName.textContent = countryData.name;
//     selectCountry.appendChild(countryName);
//
//     const currencies = countryData.currencies;
//     const currencyString = formatCurrencies(currencies);
//
//     const geography = document.createElement("p");
//     geography.textContent = `${countryData.name} is situated in ${countryData.subregion}. It has a population of ${(countryData.population / 1000000).toFixed(1)} million people.`;
//     selectCountry.appendChild(geography);
//
//     const capital = document.createElement("p");
//     capital.textContent = `The capital is ${countryData.capital} ${currencyString}.`;
//     selectCountry.appendChild(capital);
//
//     const previousSearchResult = document.getElementById("selectCountry");
//     if (previousSearchResult) {
//         countryContainer.removeChild(previousSearchResult);
//     }
//
//     countryContainer.appendChild(selectCountry);
// }
//
// function formatCurrencies(currencyArray){
//     const currencyOne = currencyArray[0];
//     const currencyTwo = currencyArray[1];
//     if(currencyArray.length === 1){
//         return `and you can pay with ${currencyOne.name}'s`
//     }
//     if (currencyArray.length > 1) {
//         return `and you can pay with ${currencyOne.name}'s and ${currencyTwo.name}'s`
//     }
// }
//
// const countryContainer = document.getElementById("countries");
//
// const button = document.getElementById("search-button");
// button.addEventListener("click", displayCountry);


// Vraag 8
// async function displayCountry(){
//     const country = "Holland";
//     const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
//     const response = await axios.get(url)
//
//     const countryData = response.data[0];
//
//     const selectCountry = document.createElement('div');
//     selectCountry.setAttribute('id', 'selectCountry');
//
//     const flag = document.createElement("img");
//     flag.setAttribute('src', countryData.flag);
//     selectCountry.appendChild(flag);
//
//     const countryName = document.createElement('h1');
//     countryName.textContent = countryData.name;
//     selectCountry.appendChild(countryName);
//
//     const currencies = countryData.currencies;
//     const currencyString = formatCurrencies(currencies);
//
//     const geography = document.createElement("p");
//     geography.textContent = `${countryData.name} is situated in ${countryData.subregion}. It has a population of ${(countryData.population / 1000000).toFixed(1)} million people.`;
//     selectCountry.appendChild(geography);
//
//     const capital = document.createElement("p");
//     capital.textContent = `The capital is ${countryData.capital} ${currencyString}.`;
//     selectCountry.appendChild(capital);
//
//     const previousSearchResult = document.getElementById("selectCountry");
//     if (previousSearchResult) {
//         countryContainer.removeChild(previousSearchResult);
//     }
//
//     countryContainer.appendChild(selectCountry);
// }
//
// function formatCurrencies(currencyArray){
//     const currencyOne = currencyArray[0];
//     const currencyTwo = currencyArray[1];
//     if(currencyArray.length === 1){
//         return `and you can pay with ${currencyOne.name}'s`
//     }
//     if (currencyArray.length > 1) {
//         return `and you can pay with ${currencyOne.name}'s and ${currencyTwo.name}'s`
//     }
// }
//
// const countryContainer = document.getElementById("countries");
//
// function handleKeyPress (event){
//     console.log("KEY PRESSED?", event.code === "Enter"); // KEY PRESSED? true
//     if(event.code === "Enter"){
//         displayCountry()
//     }
// }
//
// const button = document.getElementById("search-button");
// button.addEventListener("click", displayCountry);
//
// const searchInput = document.getElementById("search-bar");
// searchInput.addEventListener("keypress", handleKeyPress)
// console.log("INPUT:", searchInput); // INPUT: <input id="search-bar" type="text" placeholder="search country">

// Vraag 9
async function displayCountry(){
    const inputElement = document.getElementById("search-bar");
    console.log("INPUT ELEMENT:", inputElement); // INPUT ELEMENT: <input id="search-bar" type="text" placeholder="search country">
    const userInput = inputElement.value;
    console.log("USERINPUT:", userInput); // type hoi in de search-bar geeft USERINPUT: hoi
    const country = userInput; // het land vervang je met userInput
    const url = `https://restcountries.eu/rest/v2/name/${country}?fullText=true`;
    const response = await axios.get(url)

    const countryData = response.data[0];

    const selectCountry = document.createElement('div');
    selectCountry.setAttribute('id', 'selectCountry');

    const flag = document.createElement("img");
    flag.setAttribute('src', countryData.flag);
    selectCountry.appendChild(flag);

    const countryName = document.createElement('h1');
    countryName.textContent = countryData.name;
    selectCountry.appendChild(countryName);

    const currencies = countryData.currencies;
    const currencyString = formatCurrencies(currencies);

    const geography = document.createElement("p");
    geography.textContent = `${countryData.name} is situated in ${countryData.subregion}. It has a population of ${(countryData.population / 1000000).toFixed(1)} million people.`;
    selectCountry.appendChild(geography);

    const capital = document.createElement("p");
    capital.textContent = `The capital is ${countryData.capital} ${currencyString}.`;
    selectCountry.appendChild(capital);

    const previousSearchResult = document.getElementById("selectCountry");
    if (previousSearchResult) {
        countryContainer.removeChild(previousSearchResult);
    }

    countryContainer.appendChild(selectCountry);
}

function formatCurrencies(currencyArray){
    const currencyOne = currencyArray[0];
    const currencyTwo = currencyArray[1];
    if(currencyArray.length === 1){
        return `and you can pay with ${currencyOne.name}'s`
    }
    if (currencyArray.length > 1) {
        return `and you can pay with ${currencyOne.name}'s and ${currencyTwo.name}'s`
    }
}

const countryContainer = document.getElementById("countries");

function handleKeyPress (event){
    if(event.code === "Enter"){
        displayCountry()
    }
}

const button = document.getElementById("search-button");
button.addEventListener("click", displayCountry);

const searchInput = document.getElementById("search-bar");
searchInput.addEventListener("keypress", handleKeyPress)