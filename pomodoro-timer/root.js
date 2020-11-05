const timerVisual = document.getElementById('counter')

const countdown = () => {
    let time = document.getElementById('setter').value * 60000
    let setNow = Date.now()
    let endTime = time + setNow
    setInterval(() => {
        let now = Date.now()
        let distance = endTime - now;
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (distance > 0) {
            timerVisual.innerText = `${minutes}:${seconds}`
        } else {
            completed()
        }
    }, 800);
}

const completed = () => {
    let finalCountDown = 5 * 60000
    let setNow = Date.now()
    let endTime = finalCountDown + setNow
    setInterval(() => {
        let now = Date.now()
        let distance = endTime - now;
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (distance > 0) {
            timerVisual.innerText = `${minutes}:${seconds}`
        } else {
            ended()
        }
    }, 800);
}

const ended = () => {
    alert('shit')
}
