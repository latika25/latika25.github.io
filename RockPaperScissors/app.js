const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll('.action')
const newGame = document.querySelector('#new')
let userChoice, computerChoice, result;
possibleChoices.forEach(choice => {
    choice.addEventListener('click', (e) => {
        console.log("e=", e)
        userChoice = e.target.id
        console.log(userChoice)
        userChoiceDisplay.innerHTML = userChoice
        generateComputerChoice()
        computerChoiceDisplay.innerHTML = computerChoice
        getResult()
        resultDisplay.innerHTML = result
    })
})

function generateComputerChoice() {
    let randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1;
    // let one = Math.random();
    // let two = one * possibleChoices.length
    // let three = Math.floor(two)
    // let four = three + 1;
    // console.log("Math.random=", one, " ->*3=", two, " .floor=", three, " +1=", four)
    if (randomNumber === 1)
        computerChoice = "rock"
    if (randomNumber === 2)
        computerChoice = "paper"
    if (randomNumber === 3)
        computerChoice = "scissors"

}
function getResult() {
    if (computerChoice === userChoice) {
        result = "Its a draw!"
    }
    if (computerChoice === "rock" && userChoice === "paper")
        result = "You Win!!"
    if (computerChoice === "rock" && userChoice === "scissors")
        result = "You lost!!"
    if (computerChoice === "paper" && userChoice === "scissors")
        result = "You Win!!"
    if (computerChoice === "paper" && userChoice === "rock")
        result = "You lost!!"
    if (computerChoice === "scissors" && userChoice === "rock")
        result = "You Win!!"
    if (computerChoice === "scissors" && userChoice === "paper")
        result = "You lost!!"
}

newGame.addEventListener('click', (e) => {
    resultDisplay.innerHTML = "";
    computerChoiceDisplay.innerHTML = ""
    userChoiceDisplay.innerHTML = ""
})