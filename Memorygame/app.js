const cardArray = [
    {
        name: "pic1",
        img: "img/pic1.png"
    },
    {
        name: "pic2",
        img: "img/pic2.png"
    },
    {
        name: "pic3",
        img: "img/pic3.png"
    },
    {
        name: "pic4",
        img: "img/pic4.png"
    },
    {
        name: "pic5",
        img: "img/pic5.png"
    },
    {
        name: "pic6",
        img: "img/pic6.png"
    }, {
        name: "pic1",
        img: "img/pic1.png"
    },
    {
        name: "pic2",
        img: "img/pic2.png"
    },
    {
        name: "pic3",
        img: "img/pic3.png"
    },
    {
        name: "pic4",
        img: "img/pic4.png"
    },
    {
        name: "pic5",
        img: "img/pic5.png"
    },
    {
        name: "pic6",
        img: "img/pic6.png"
    }

]
cardArray.sort(() => 0.5 - Math.random())
console.log(cardArray)
let gridDisplay = document.querySelector("#grid")
const button = document.querySelector("button");
const h1 = document.createElement("h1")
const score = document.querySelector("#result")
score.innerHTML = 0;
button.addEventListener('click', () => {
    cardArray.sort(() => 0.5 - Math.random())
    countMatched = 0;
    gridDisplay.innerHTML = "";
    createBoard()
    cardsChosen = []
    score.innerHTML = 0;
    console.log("child removed", document.body.removeChild(h1))
})
let cardsChosen = []
let countMatched = 0;

function createBoard() {
    for (let i = 0; i < 12; i++) {
        const card = document.createElement('img')

        card.setAttribute("src", "img/cover.png")
        card.setAttribute("data-id", i)
        card.setAttribute("class", "cardimg")
        // console.log(card)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)

    }
}
createBoard()

function flipCard() {
    const cardId = this.getAttribute("data-id")
    cardsChosen.push({ name: cardArray[cardId].name, img: this, dataId: cardId })
    console.log("array:", cardsChosen)
    // console.log(cardArray, "\n cardId=", cardId)
    console.log("clicked", this, cardArray[cardId].name)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
        setTimeout(() => {
            console.log("cards match checking")
            if (cardsChosen[0].name === cardsChosen[1].name && (cardsChosen[0].dataId != cardsChosen[1].dataId)) {

                console.log("cards matched", "1st=", cardsChosen[0], "\n 2nd=", cardsChosen[1])
                cardsChosen[0].img.removeEventListener('click', flipCard)
                cardsChosen[1].img.removeEventListener('click', flipCard)
                cardsChosen[1].img.setAttribute('id', "aftermatched")
                cardsChosen[0].img.setAttribute('id', "aftermatched")

                const span = document.createElement("span")
                span.innerHTML = "Matched"
                span.setAttribute("class", "div_for_matched")

                const div1 = document.createElement("div")
                div1.setAttribute("class", "div")
                div1.appendChild(cardsChosen[0].img)
                div1.appendChild(span)

                const div2 = document.createElement("div")
                div2.setAttribute("class", "div")
                div2.appendChild(cardsChosen[1].img)
                div2.appendChild(span)
                console.log("before:", gridDisplay)

                gridDisplay.appendChild(div1)
                gridDisplay.appendChild(div2)
                console.log(div1)
                console.log(div2)
                console.log("after", gridDisplay)
                countMatched++;
                score.innerHTML = countMatched
                if (countMatched == 6) {
                    console.log("You Win!!!")

                    // h11.setAttribute("class", "h1")
                    h1.innerHTML = "You WIN!!!"
                    document.body.append(h1)
                }
            }
            else {
                console.log("cards dont match")
                cardsChosen[0].img.setAttribute('src', "img/cover.png")
                cardsChosen[1].img.setAttribute('src', "img/cover.png")
            }
            cardsChosen.length = 0
            console.log("after emptying:", cardsChosen)
        }, 500)
    }
}