function pairElement() {
    let leftSide = document.getElementById('singleHelix')
    let fullStrand = document.getElementById('doubleHelix')
    let ansArr = []
    let parsable = leftSide.value.toUpperCase().split('')
    for (let i = 0; i < parsable.length; i++) {
        switch (parsable[i]) {
            case 'A':
                ansArr[i] = [`${parsable[i]}~T 
                `]
                break
            case 'C':
                ansArr[i] = [`${parsable[i]}~G 
                `]
                break
            case 'G':
                ansArr[i] = [`${parsable[i]}~C 
                `]
                break
            case 'T':
                ansArr[i] = [`${parsable[i]}~A 
                `]
                break
        }
    }
    return fullStrand.innerText = ansArr.join('');
}

