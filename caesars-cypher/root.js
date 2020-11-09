
const rot13 = () => {
    let caesarsInput = document.getElementById('caesarsInput').value
    let caesarsOutput = document.getElementById('caesarsOutput')
    let alpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ.!?,'
    let tempArr = []
    for (let i = 0; i < caesarsInput.length; i++) {
        let cur = alpha.indexOf(caesarsInput[i].toUpperCase())
        if (cur !== -1) {
            if (cur >= 12 && cur <= 25) {
                tempArr[i] = alpha[cur - 13]
            }
            if (cur <= 12) {
                tempArr[i] = alpha[cur + 13]
            }
            if (cur >= 26) {
                tempArr[i] = alpha[cur]
            }
        }
        else {
            tempArr[i] = ' '
        }
    }
    console.log(caesarsInput)
    caesarsOutput.innerText = tempArr.join('')
}