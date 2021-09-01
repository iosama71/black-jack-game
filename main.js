
let resulttt = {
    chip : 125 , 
    user: "osama"
}
let cardsEl = document.getElementById("cards")
let sumEl = document.getElementById("sum")
let messageEl = document.getElementById("message")
let myCards = []
let sum = 0 ; 
let hasBlackjack = false ;
let isAllive = false ;
let message = ""

let playerEl = document.querySelector(".player-el")

playerEl.textContent =  resulttt.user + ": $" +resulttt.chip

function startgame(){
    isAllive = true ;
    let firstCard = getRanbdom()  ;
    let secondCard = getRanbdom() ; 
    myCards = [firstCard,secondCard]
    sum = firstCard + secondCard 
    renderGame() 
}


function getRanbdom() {
    let randomNumber = Math.floor((Math.random()*13) + 1) 
    
    return  randomNumber  === 1 ? 11 : 
            randomNumber  >= 11 ? 10 :  randomNumber
}


function renderGame() {
    cardsEl.textContent  = "cards :"
    for (let i = 0; i < myCards.length; i++) {
        cardsEl.textContent += myCards[i] + " "
    }
    sumEl.textContent = "sum: " + sum ;
    if  (sum <= 20) {
        hasBlackjack = false ;
        message = "DO YOU WANT TO DRAW ANOTHER ONE?"
    } else if (sum === 21) {
        hasBlackjack = true ;
        message = "you'v won and you gota blackjac !"
    }else {
        isAllive = false ;
        message = "you lost" 
    }
    messageEl.textContent = message
}


function newCard() {
    if (isAllive === true && hasBlackjack === false) {
        let card = getRanbdom() ;
        myCards.push(card)
        sum += card ;
        renderGame()
    }
}




