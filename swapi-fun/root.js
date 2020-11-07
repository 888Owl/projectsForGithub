fetch('https://swapi.dev/api/')
    .then(response => response.json())
    .then(data => console.log(data));


const films = () => {
    fetch('https://swapi.dev/api/films')
        .then(response => response.json())
        .then(data => {if(data.results){console.log(data.results)}});
}

const people = () => {
    fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(data => {if(data.results){console.log(data.results)}});
}

const planets = () => {
    fetch('https://swapi.dev/api/planets')
        .then(response => response.json())
        .then(data => {if(data.results){console.log(data.results)}});
}

const species = () => {
    fetch('https://swapi.dev/api/species')
        .then(response => response.json())
        .then(data => {if(data.results){console.log(data.results)}});
}

const starships = () => {
    fetch('https://swapi.dev/api/starships')
        .then(response => response.json())
        .then(data => {if(data.results){console.log(data.results)}});
}

const vehicles = () => {
    fetch('https://swapi.dev/api/vehicles')
        .then(response => response.json())
        .then(data => {if(data.results){console.log(data.results)}});
}