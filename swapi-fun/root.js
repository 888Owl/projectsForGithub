fetch('https://swapi.dev/api/')
    .then(response => response.json())
    .then(data => console.log(data));

const apiToHtml = document.getElementById('api-content')
const appendableList = document.getElementById('listItems')
const crawlDisp = document.getElementById('crawlDisp')
const crawlerTitle = document.getElementById('crawlerTitle')
const crawlArticle = document.getElementById('crawlerBody')
const crawlerEpisode = document.getElementById('crawlerEpisode')

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
                console.log(1234321)
                crawlDisp.style.display =  'flex'
                crawlerTitle.innerText = data.results[num].title
                crawlerEpisode.innerText = episode(num)
                crawlArticle.innerText = data.results[num].opening_crawl
                setTimeout( resetCrawler(), 60000)
            }
        });
}

const resetCrawler = () => {
    console.log(666)
    crawlDisp.style.display = 'none'
    crawlerTitle.innerText = ''
    crawlArticle.innerText = ''
    crawlerEpisode.innerText = ''
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