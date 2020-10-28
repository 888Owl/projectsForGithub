function wdwd() {
    let num = document.getElementById('inputForWdWd').value
    const renderSpace = document.getElementById('storeResult')
    //if there is a previous list remove it
    for(let j = 0; j < renderSpace.children.length; j++){
        renderSpace.children[j].style.display = 'none'
    }
    //generate list of return values
    for (let i = 1; i < Number(num)+1; i++) {
        let li = document.createElement('li')
        if (i % 3 === 0 && i % 5 !== 0) {
            li.innerText = `Web, ${i}`
            renderSpace.append(li)
        } else if (i % 3 !== 0 && i % 5 === 0) {
            li.innerText = `Dev, ${i}`
            renderSpace.append(li)
        } else if (i % 15 === 0) {
            li.innerText = `Web-Dev, ${i}`
            renderSpace.append(li)
        } else {
            continue
        }
    }
}