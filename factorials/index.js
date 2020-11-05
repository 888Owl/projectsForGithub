
const factorial = () => {
    let input  = document.getElementById('factorInput').value
    let display = document.getElementById('result')
    let resultNum = 1;
    for(let i = Number(input); i > 0; i--){
        resultNum *= i;
    }
    return display.innerText = resultNum
}