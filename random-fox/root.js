const mainBody = document.getElementById('mainBody')
const foxyBackground = document.createElement('img')
const blurry = document.createElement('div')
const foxy = document.createElement('img')

fetch('https://randomfox.ca/floof/')
    .then(response => response.json())
    .then(data => {if(data.image){
        foxyBackground.src = data.image
        foxyBackground.style.width = '100vw'
        foxyBackground.style.height = '100vh'
        foxyBackground.style.opacity = '0.7'
        foxyBackground.style.zIndex = '0'
        foxyBackground.style.position = 'absolute'
        blurry.style.position = 'absolute'
        blurry.style.width = '100vw'
        blurry.style.height = '100vh'
        blurry.style.backgroundColor = 'rgba(0,0,0,0.4)'
        blurry.style.zIndex = '1'
        foxy.style.zIndex = '2'
        foxy.id = 'foxy'
        foxy.src = data.image
        mainBody.appendChild(foxyBackground)
        mainBody.appendChild(blurry)
        mainBody.appendChild(foxy)
    }
    });