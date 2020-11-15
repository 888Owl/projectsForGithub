
const enc = () => {
    const encInp = document.getElementById('encInp').value
    let encArr = encInp.split('')
    let alpha = 'abcdefghijklmnopqrstuvwxyz.!?,'
    let tempArr = []
    for (let i = 0; i < encArr.length; i++) {
        let cur = alpha.indexOf(encArr[i])
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
    let layer2Arr = tempArr.reverse()

    secEnc(layer2Arr)
}

const secEnc = (layer2Arr) => {
    let tempArr2 = []
    for (let i = 0; i < layer2Arr.length; i++) {
        tempArr2[i] = layer2Arr[i].charCodeAt(0).toString(2)
    }
    thirdEnc(tempArr2)
}

const thirdEnc = (tempArr2) => {
    const salt = document.getElementById('salt').value
    let tempArr3 = []
    for (let i = 0; i < tempArr2.length; i++) {
        if (salt > 0) {
            tempArr3[i] = parseInt(Number(tempArr2[i]), 2) / salt
        } else {
            tempArr3[i] = parseInt(Number(tempArr2[i]), 2)
        }
    }
    const forCopying = document.getElementById('forCopying')
    const result = document.getElementById('result')
    result.innerText = tempArr3.join(' ')
    forCopying.value = tempArr3.join(' ')
}


const dec = () => {
    const encInp1 = document.getElementById('encInp').value
    const salt = document.getElementById('salt').value

    let encInp = encInp1.split(' ')
    let tempArr = []
    for (let i = 0; i < encInp.length; i++) {
        if (salt > 0) {
            tempArr[i] = parseInt((Number(encInp[i]) * salt), 10).toString(2)
        } else {
            tempArr[i] = parseInt(Number(encInp[i]), 10).toString(2)
        }
    }
    secDec(tempArr)
}

const secDec = (tempArr) => {
    let tempArr2 = []
    for (let i = 0; i < tempArr.length; i++) {
        tempArr2[i] = String.fromCharCode(parseInt(tempArr[i], 2))
    }
    thirdDec(tempArr2)
}

const thirdDec = (tempArr2) => {
    let alpha = 'abcdefghijklmnopqrstuvwxyz.!?,'
    let tempArr = []
    for (let i = 0; i < tempArr2.length; i++) {
        let cur = alpha.indexOf(tempArr2[i])
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
    const result = document.getElementById('result')
    const forCopying = document.getElementById('forCopying')
    forCopying.value = tempArr.reverse().join('')
    result.innerText = tempArr.join('')

}

const copyToClip = () => {
    const forCopying = document.getElementById('forCopying')
    forCopying.select();
    forCopying.setSelectionRange(0, 99999)
    document.execCommand("copy");
}

const showMessage = () => {
    let hide = document.getElementById('hide')
    let show = document.getElementById('show')
    let result = document.getElementById('result')
    show.style.display = 'none'
    hide.style.display = 'inline-block'
    result.style.display = 'block'
}

const hideMessage = () => {
    let hide = document.getElementById('hide')
    let show = document.getElementById('show')
    let result = document.getElementById('result')
    show.style.display = 'inline-block'
    hide.style.display = 'none'
    result.style.display = 'block'
}