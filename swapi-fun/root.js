// initial variables and utility functions
const apiToHtml = document.getElementById('api-content')
const appendableList = document.getElementById('listItems')
const mainSection = document.getElementById('mainSection')
const apiContent = document.getElementById('api-content')

const episode = (num) => {
    switch (num) {
        case 0:
            return 'Episode IV'
        case 1:
            return 'Episode V'
        case 2:
            return 'Episode VI'
        case 3:
            return 'Episode I'
        case 4:
            return 'Episode II'
        case 5:
            return 'Episode III'
    }
}

const nFormatter = (value) => {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const sleep = (ms) => {
    console.log('sleeping')
    return new Promise(resolve => setTimeout(resolve, ms));
}

// movie endpoint functions and variables
const crawlDisp = document.getElementById('crawlDisp')
const crawlerTitle = document.getElementById('crawlerTitle')
const crawlArticle = document.getElementById('crawlerBody')
const crawlerEpisode = document.getElementById('crawlerEpisode')
const closeCrawler = document.getElementById('closeCrawler')

const films = () => {
    appendableList.innerHTML = ''
    fetch('https://swapi.dev/api/films')
        .then(response => response.json())
        .then(data => {
            if (data.results) {
                for (let i = 0; i < data.results.length; i++) {
                    appendableList.innerHTML += (`<li class='titleshower' 
                    onclick="selectedtitle(${i})"
                    >
                    ${data.results[i].title}
                    </li>`)
                    appendableList.innerHTML += ('<br>')
                }
            }
        });
}

const resetCrawler = () => {
    crawlDisp.style.display = 'none'
    apiContent.style.display = 'block'
    mainSection.style.display = 'block'
    crawlerTitle.innerText = ''
    crawlArticle.innerText = ''
    crawlerEpisode.innerText = ''
}

const selectedtitle = (num) => {
    fetch('https://swapi.dev/api/films')
        .then(response => response.json())
        .then(data => {
            if (data.results) {
                crawlDisp.style.display = 'flex'
                apiContent.style.display = 'none'
                mainSection.style.display = 'none'
                crawlerTitle.innerText = data.results[num].title
                crawlerEpisode.innerText = episode(num)
                crawlArticle.innerText = data.results[num].opening_crawl
                sleep(60000).then(() => resetCrawler())
            }
        });
}
// person endpoint functions and variables
const personDisp = document.getElementById('personDisp')
const personName = document.getElementById('personName')
const personHeight = document.getElementById('personHeight')
const personBirth = document.getElementById('personBirth')
const personColor = document.getElementById('personColor')
const personEye = document.getElementById('personEye')
const personHome = document.getElementById('personHome')

const people = () => {
    appendableList.innerHTML = ''
    fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(data => {
            if (data.results) {
                for (let i = 0; i < data.results.length; i++) {
                    appendableList.innerHTML += (`<li class='titleshower' 
                    onclick="checkPerson(${i})"
                    >
                    ${data.results[i].name}
                    </li>`)
                    appendableList.innerHTML += ('<br>')
                }
            }
        });
}

const resetPerson = () => {
    apiContent.style.display = 'block'
    mainSection.style.display = 'block'
    personDisp.style.display = 'none'
}

const checkPerson = (num) => {
    fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(data => {
            if (data.results[num]) {
                personHome.style.display = 'block'
                personDisp.style.display = 'flex'
                apiContent.style.display = 'none'
                mainSection.style.display = 'none'
                personName.innerText = data.results[num].name
                personBirth.innerText = `Birth year: ${data.results[num].birth_year}`
                personHeight.innerText = `Height: ${data.results[num].height}cm`
                personColor.innerText = `Skin color: ${data.results[num].skin_color}`
                personEye.innerText = `Eye color: ${data.results[num].eye_color}`
            }
        });
}
// planet endpoint functions and variables
const planetDisp = document.getElementById('planetDisp')
const planetName = document.getElementById('planetName')
const planetClimate = document.getElementById('planetClimate')
const planetRadius = document.getElementById('planetRadius')
const planetOrbitPeriod = document.getElementById('planetOrbitPeriod')
const planetRotation = document.getElementById('planetRotation')
const planetPopulation = document.getElementById('planetPopulation')
const planetHome = document.getElementById('planetHome')

const planets = () => {
    appendableList.innerHTML = ''
    fetch('https://swapi.dev/api/planets')
        .then(response => response.json())
        .then(data => {
            if (data.results) {
                for (let i = 0; i < data.results.length; i++) {
                    appendableList.innerHTML += (`<li class='titleshower' 
                    onclick="checkPlanet(${i})"
                    >
                    ${data.results[i].name}
                    </li>`)
                    appendableList.innerHTML += ('<br>')
                }
            }
        });
}

const resetPlanet = () => {
    apiContent.style.display = 'block'
    mainSection.style.display = 'block'
    planetDisp.style.display = 'none'
    planetName.innerText = ''
    planetClimate.innerText = ''
    planetRadius.innerText = ''
    planetOrbitPeriod.innerText = ''
    planetRotation.innerText = ''
    planetPopulation.innerText = ''
}

const checkPlanet = (num) => {
    fetch('https://swapi.dev/api/planets')
        .then(response => response.json())
        .then(data => {
            if (data.results) {
                planetHome.style.display = 'block'
                apiContent.style.display = 'none'
                mainSection.style.display = 'none'
                planetDisp.style.display = 'flex'
                planetName.innerText = data.results[num].name
                planetClimate.innerText = `The climate on ${data.results[num].name} is ${data.results[num].climate}.`
                planetRadius.innerText = `${data.results[num].name} has a diameter of ${nFormatter(data.results[num].diameter)}km.`
                planetOrbitPeriod.innerText = `${data.results[num].name} takes ${data.results[num].orbital_period} days to orbit its sun.`
                planetRotation.innerText = `On ${data.results[num].name} days last ${data.results[num].rotation_period} hours.`
                planetPopulation.innerText = `${data.results[num].name} has a population of ${nFormatter(data.results[num].population)} people.`
            }
        });
}

// species endpoint functions and variables
const speciesHome = document.getElementById('speciesHome')
const speciesDisp = document.getElementById('speciesDisp')
const speciesName = document.getElementById('speciesName')
const speciesHeight = document.getElementById('speciesHeight')
const speciesLifeSpan = document.getElementById('speciesLifeSpan')
const specieslanguage = document.getElementById('specieslanguage')
const speciesDesignation = document.getElementById('speciesDesignation')
const speciesClassification = document.getElementById('speciesClassification')

const species = () => {
    appendableList.innerHTML = ''
    fetch('https://swapi.dev/api/species')
        .then(response => response.json())
        .then(data => {
            if (data.results) {
                for (let i = 0; i < data.results.length; i++) {
                    appendableList.innerHTML += (`<li class='titleshower' 
                    onclick="checkSpecies(${i})"
                    >
                    ${data.results[i].name}
                    </li>`)
                    appendableList.innerHTML += ('<br>')
                }
            }
        });
}

const resetSpecies = () => {
    apiContent.style.display = 'block'
    mainSection.style.display = 'block'
    speciesDisp.style.display = 'none'
    speciesHome.style.display = 'none'
}

const checkSpecies = (num) => {
    fetch('https://swapi.dev/api/species')
        .then(response => response.json())
        .then(data => {
            if (data.results) {
                speciesDisp.style.display = 'flex'
                apiContent.style.display = 'none'
                mainSection.style.display = 'none'
                speciesHome.style.display = 'block'
                speciesName.innerText = `Species: ${data.results[num].name}`
                speciesHeight.innerText = `${data.results[num].name} have an average height of ${data.results[num].average_height}cm.`
                speciesLifeSpan.innerText = `${data.results[num].name} live an average of ${data.results[num].average_lifespan} years.`
                specieslanguage.innerText = `${data.results[num].name} speak ${data.results[num].language}.`
                speciesDesignation.innerText = `${data.results[num].name} are designated as a ${data.results[num].designation} species.`
                speciesClassification.innerText = `${data.results[num].name} are classified as a ${data.results[num].classification} species.`
            }
        });
}

// starships endpoint functions and variables
const starshipDisp = document.getElementById('starshipDisp')
const starshipHome = document.getElementById('starshipHome')
const starshipName = document.getElementById('starshipName')
const starshipModel = document.getElementById('starshipModel')
const starshipManufacturer = document.getElementById('starshipManufacturer')
const starshipHDR = document.getElementById('starshipHDR')
const starshipCost = document.getElementById('starshipCost')


const starships = () => {
    appendableList.innerHTML = ''
    fetch('https://swapi.dev/api/starships')
        .then(response => response.json())
        .then(data => {
            if (data.results) {
                for (let i = 0; i < data.results.length; i++) {
                    appendableList.innerHTML += (`<li class='titleshower' 
                    onclick="checkStarShip(${i})"
                    >
                    ${data.results[i].name}
                    </li>`)
                    appendableList.innerHTML += ('<br>')
                }
            }
        });
}

const resetStarShip = () => {
    apiContent.style.display = 'block'
    mainSection.style.display = 'block'
    starshipDisp.style.display = 'none'
    starshipHome.style.display = 'none'
}

const checkStarShip = (num) => {
    fetch('https://swapi.dev/api/starships')
        .then(response => response.json())
        .then(data => {
            if (data.results) {
                apiContent.style.display = 'none'
                mainSection.style.display = 'none'
                starshipDisp.style.display = 'flex'
                starshipHome.style.display = 'block'
                starshipName.innerText = data.results[num].name
                starshipModel.innerText = `Model ${data.results[num].model}`
                starshipManufacturer.innerText = `The ${data.results[num].name} was manufactured by ${data.results[num].manufacturer}.`
                starshipHDR.innerText = `The ${data.results[num].name} has a Hyper drive rating of ${data.results[num].hyperdrive_rating}.`
                starshipCost.innerText = `The ${data.results[num].name} cost ${nFormatter(data.results[num].cost_in_credits)} credits.`
            }
        });
}

// vehicles endpoint functions and variables
const vehicleDisp = document.getElementById('vehicleDisp')
const vehicleHome = document.getElementById('vehicleHome')
const vehicleName = document.getElementById('vehicleName')
const vehicleModel = document.getElementById('vehicleModel')
const vehicleManufacturer = document.getElementById('vehicleManufacturer')
const vehicleClass = document.getElementById('vehicleClass')
const vehicleCost = document.getElementById('vehicleCost')

const vehicles = () => {
    appendableList.innerHTML = ''
    fetch('https://swapi.dev/api/vehicles')
        .then(response => response.json())
        .then(data => {
            if (data.results) {
                for (let i = 0; i < data.results.length; i++) {
                    appendableList.innerHTML += (`<li class='titleshower' 
                    onclick="checkVehicle(${i})"
                    >
                    ${data.results[i].name}
                    </li>`)
                    appendableList.innerHTML += ('<br>')
                }
            }
        });
}

const resetVehicle = () => {
    apiContent.style.display = 'block'
    mainSection.style.display = 'block'
    vehicleDisp.style.display = 'none'
    vehicleHome.style.display = 'none'
}

const checkVehicle = (num) => {
    fetch('https://swapi.dev/api/vehicles')
        .then(response => response.json())
        .then(data => {
            if (data.results) {
                apiContent.style.display = 'none'
                mainSection.style.display = 'none'
                vehicleDisp.style.display = 'flex'
                vehicleHome.style.display = 'block'
                vehicleName.innerText = data.results[num].name
                vehicleModel.innerText = `Model ${data.results[num].model}`
                vehicleManufacturer.innerText = `The ${data.results[num].name} was manufactured by ${data.results[num].manufacturer}.`
                vehicleClass.innerText = `The ${data.results[num].name} is of class type ${data.results[num].vehicle_class}.`
                vehicleCost.innerText = `The ${data.results[num].name} cost ${nFormatter(data.results[num].cost_in_credits)} credits.`
            }
        });
}