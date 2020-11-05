let firstVar = document.getElementById('input1').value
let secondVar = document.getElementById('input2')
let problemType = null
secondVar.style.display = 'none'

const inputByButtons = ( event ) => {

    if(problemType === null){
        let tempArr = firstVar.split('')
        let tempStr = [...tempArr, event.target.id]
        return firstVar = tempStr.join('') 
    } else {
        let tempArr = secondVar.value.split('')
        let tempStr = [...tempArr, event.target.id]
        return secondVar.value = tempStr.join('') 
    }
}
    


const setProblemType = (event) => {
    console.log(event)
    let item = event.target.name
    switch (item) {
        case "divide":
            problemType = "divide"
            break;
        case "multiply":
            problemType = "multiply"
            break;
        case "subtract":
            problemType = "subtract"
            break;
        case "add":
            problemType = "add"
            break;
        default: problemType = null
    }
    console.log(problemType)
}

const calculate = () => {
    switch (problemType) {
        case "divide":
            Number(firstVar) /= Number(secondVar.value)
            Number(secondVar.value) = 0;
            problemType = null;
            break;
        case "multiply":
            Number(firstVar) *= Number(secondVar.value)
            Number(secondVar.value) = 0;
            problemType = null;
            break;
        case "subtract":
            Number(firstVar) -= Number(secondVar.value)
            Number(secondVar.value) = 0;
            problemType = null;
            break;
        case "add":
            Number(firstVar) += Number(secondVar.value)
            Number(secondVar.value) = 0;
            problemType = null;
            break;
        default: problemType = null
    }
}