const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const button = document.querySelector('button')
const score = document.querySelector('#score')

let result = 0;
let hitposition = null;
let counterValue = 10;
let counterDownId, timerid
let h1
function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    let randomIndx = Math.floor(Math.random() * 9)
    // console.log(randomIndx)
    let randomSquare = squares[randomIndx]
    // console.log(randomSquare)
    randomSquare.classList.add("mole")
    hitposition = randomSquare.id

}

function moveMole() {
    timerid = setInterval(randomSquare, 500);

}
function reset() {
    console.log("button clicked")
    document.body.removeChild(h1)
    result = 0;
    counterValue = 10
    timeLeft.textContent = counterValue
    score.innerHTML = result
    hitposition = null
    counterDownId = setInterval(countDown, 1000)
    moveMole()
}
console.log("button:", button)

moveMole()

squares.forEach((square) => {
    if (counterValue !== 0) {
        square.addEventListener('mousedown', () => {
            if (square.id === hitposition && counterValue != 0) {
                console.log("squareid=", square.id, " result=", result)
                result++;
                score.innerHTML = result
                hitposition = null
            }
            else if (counterValue == 0) {
                alert("Your time is up,try next time!!")
            }
        })
    }
    else {
        square.removeEventListener('mousedown', () => {
            if (square.id === hitposition && counterValue != 0) {
                console.log("squareid=", square.id, " result=", result)
                result++;
                score.innerHTML = result
                hitposition = null
            }
            else if (counterValue == 0) {
                alert("Your time is up,try next time!!")
            }
        })
    }
})
function countDown() {
    // console.log("counter=", counterValue)
    counterValue--;
    // console.log("after decrement counter=", counterValue)
    timeLeft.textContent = counterValue
    if (counterValue === 0) {
        // console.log("when 0 counter=", counterValue)
        clearInterval(counterDownId)
        clearInterval(timerid)
        console.log("result=", result)
        h1 = document.createElement("h1")
        h1.innerHTML = `Game Over, Your final score is: ${result} `
        h1.classList.add("resultDeclare")
        const button = document.createElement("button")
        h1.appendChild(button)
        button.innerHTML = "Start Again"
        if (button != null)
            button.addEventListener('click', reset)
        document.body.appendChild(h1)
        // alert("Game over,Your final score is:" + result + " " + counterValue)
        // result = 0;
        // counterValue = 10

    }
}

counterDownId = setInterval(countDown, 1000)