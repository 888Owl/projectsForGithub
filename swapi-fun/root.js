fetch('https://swapi.dev/api/')
    .then(response => response.json())
    .then(data => console.log(data));

const apiToHtml = document.getElementById('api-content')
const appendableList = document.getElementById('listItems')
const crawlDisp = document.getElementById('crawlDisp')
const crawlerTitle = document.getElementById('crawlerTitle')
const crawlArticle = document.getElementById('crawlerBody')
const crawlerEpisode = document.getElementById('crawlerEpisode')
const mainSection = document.getElementById('mainSection')
const apiContent = document.getElementById('api-content')
const closeCrawler = document.getElementById('closeCrawler')
const films = () => {
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
                console.log(data.results)
            }
        });
}

const people = () => {
    fetch('https://swapi.dev/api/people')
        .then(response => response.json())
        .then(data => {
            if (data.results) { console.log(data.results) }
        });
}

const planets = () => {
    fetch('https://swapi.dev/api/planets')
        .then(response => response.json())
        .then(data => {
            if (data.results) { console.log(data.results) }
        });
}

const species = () => {
    fetch('https://swapi.dev/api/species')
        .then(response => response.json())
        .then(data => {
            if (data.results) { console.log(data.results) }
        });
}

const starships = () => {
    fetch('https://swapi.dev/api/starships')
        .then(response => response.json())
        .then(data => {
            if (data.results) { console.log(data.results) }
        });
}

const vehicles = () => {
    fetch('https://swapi.dev/api/vehicles')
        .then(response => response.json())
        .then(data => {
            if (data.results) { console.log(data.results) }
        });
}

const selectedtitle = (num) => {
    
    fetch('https://swapi.dev/api/films')
        .then(response => response.json())
        .then(data => {
            if (data.results) {
                crawlDisp.style.display =  'flex'
                apiContent.style.display = 'none'
                mainSection.style.display = 'none'
                crawlerTitle.innerText = data.results[num].title
                crawlerEpisode.innerText = episode(num)
                crawlArticle.innerText = data.results[num].opening_crawl
                sleep(60000).then(() => resetCrawler())
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
    console.log('potato')
}

const episode = (num) => {
    switch(num) {
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


const sleep = (ms) => {
    console.log('sleeping')
    return new Promise(resolve => setTimeout(resolve, ms));
  }