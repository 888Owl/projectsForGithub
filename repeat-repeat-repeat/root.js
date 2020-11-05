const timesThree = () => {
    let words = document.getElementById('repeatable').value
    let newWords = document.getElementById('repeated')

    return newWords.innerText = `
     ${words}
     ${words}
     ${words}`
}