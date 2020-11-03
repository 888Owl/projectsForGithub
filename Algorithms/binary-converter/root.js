const textToBinary = () => {
    let input = document.getElementById('textinput')
    let output = document.getElementById('binaryoutput')
    let arr = input.value.split('')
    let tempArr = []
    for (let i = 0; i < arr.length; i++) {
        tempArr[i] = arr[i].charCodeAt(0).toString(2)
    }
    output.innerText = tempArr.join(' ')
}

const binaryToText = () => {
    let input = document.getElementById('binaryinput')
    let output = document.getElementById('textoutput')
    let arr = input.value.split(' ')
    console.log(arr)
    let tempArr = []
    for (let i = 0; i < arr.length; i++) {
        tempArr[i] = String.fromCharCode(parseInt(arr[i], 2))
    }
    console.log(tempArr)
    output.innerText = tempArr.join(' ')
}