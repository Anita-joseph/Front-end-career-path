// javascript
let opponentCards = [];
let discardCards = [];
let playerCards = [];

const opponentDeck = document.getElementById(`opponent-deck`);
const discardPile = document.getElementById(`discard-pile`);
const playerDeck = document.getElementById(`player-deck`);
const opponentFace = document.getElementById(`opponent-face`);

for (let i = 0; i < 4; i++) {
    let suit;
    // Hearts, Spades, Diamonds, and Clubs
    switch (i) {
        case 0:
            suit = `H`;
            break;
        case 1:
            suit = `S`;
            break;
        case 2:
            suit = `D`;
            break;
        default:
            suit = `C`;
    }

    // Create Each Card
    for (let x = 0; x < 13; x++) {
        switch (x) {
            case 0:
                discardCards.push(`A` + suit);
                break;
            case 10:
                discardCards.push(`J` + suit);
                break;
            case 11:
                discardCards.push(`Q` + suit);
                break;
            case 12:
                discardCards.push(`K` + suit);
                break;
            default:
                discardCards.push(x + suit);
        }
    }
}

console.log(discardCards);

// Shuffle array
function shuffle(deck) {
    let currentCard = deck.length;
    let temporaryCard;
    let randomCard;

    while (0 !== currentCard) {
        // Pick a card
        randomCard = Math.floor(Math.random() * currentCard);
        currentCard -= 1;

        // Shuffle
        temporaryCard = deck[currentCard];
        deck[currentCard] = deck[randomCard];
        deck[randomCard] = temporaryCard;
    }
    return deck;
}

discardCards = shuffle(discardCards);

console.log(discardCards);

for (let i = 0, c = discardCards.length; i < c; i++) {
    if (i % 2 === 0) {
        playerCards.push(discardCards[i]);
    } else if (i % 2 !== 0) {
        opponentCards.push(discardCards[i]);
    }
}

discardCards = [];

function playCard(event) {
    const target = event.target.id;
    discardPile.style.visibility = `visible`;
    if (target === `player-deck`) {
        discardCards.push(playerCards[0]);
        playerCards.splice(0, 1);

    } else if (target === `opponent-deck`) {
        discardCards.push(opponentCards[0]);
        opponentCards.splice(0, 1);
    }

    const currentCard = discardCards[discardCards.length - 1];
    let currentValue = currentCard.substring(0, 1);
    if (Number(currentValue)) {
        currentValue = Number(currentValue) + 1;
    }
    const suit = currentCard.substring(1, 2);
    const cardNumbers = document.getElementsByClassName(`card-number`);
    let suitSymbol;
    discardPile.classList.remove(`red`);
    for (let i = 0; i < 2; i++) {
        switch (suit) {
            case `H`:
                {

                    discardPile.classList.add(`red`);
                    cardNumbers[i].innerText = currentValue + "\n♥";
                    suitSymbol = "♥";
                }
                break;
            case `D`:
                {

                    discardPile.classList.add(`red`);
                    cardNumbers[i].innerText = currentValue + "\n♦";
                    suitSymbol = "♦";
                }
                break;
            case `S`:
                {

                    cardNumbers[i].innerText = currentValue + "\n♠";
                    suitSymbol = "♠";
                }
                break;
            case `C`:
                {

                    cardNumbers[i].innerText = currentValue + "\n♣";
                    suitSymbol = "♣";
                }
                break;
            default:
                console.error(`No recognizable suit found`);
        }
    }

    const cardArt = document.getElementsByClassName(`card-art`)[0];
    while (cardArt.children[0]) {
        cardArt.children[0].remove();
    }

    cardArt.style.flexFlow = null;

    if (Number(currentValue)) {
        for (let i = 0; i < currentValue; i++) {
            let suitSymbolContainer = document.createElement(`div`);
            suitSymbolContainer.textContent = suitSymbol;
            cardArt.append(suitSymbolContainer);
        }

        if (currentValue < 4) {
            cardArt.style.flexFlow = `column wrap`;
        }
    } else if (!Number(currentValue)) {
        switch (currentValue) {
            case `J`:
                suitSymbol = `🤵`;
                break;
            case `Q`:
                suitSymbol = `👸`;
                break;
            case `K`:
                suitSymbol = `🤴`;
                break;
            default:
        }

        let suitSymbolContainer = document.createElement(`div`);
        suitSymbolContainer.textContent = suitSymbol;
        suitSymbolContainer.style.fontSize = `6vh`;
        cardArt.append(suitSymbolContainer);

        if (currentValue !== `A`) {
            cardArt.style.flexFlow = `column wrap`;
            let flippedSuitSymbolContainer = document.createElement(`div`);
            flippedSuitSymbolContainer.textContent = suitSymbol;
            flippedSuitSymbolContainer.style.fontSize = `6vh`;
            flippedSuitSymbolContainer.style.transform = `rotate(180deg)`;
            cardArt.append(flippedSuitSymbolContainer);
        }

    }
    getCurrentCards();
    opponentAI(target);
}

let reaction;

function opponentAI(lastPlayer) {
    const reactionTime = Math.floor(Math.random() * (1400 - 900)) + (900);
    window.clearTimeout(reaction);
    reaction = window.setTimeout(function() {
        const discardCardsLength = discardCards.length;
        if (discardCardsLength > 0 && discardCards[discardCardsLength - 1].includes(`J`)) {
            console.log(`Slap!`);
            slap();
        } else if (lastPlayer === `player-deck`) {
            let event = new Object;
            event.target = new Object;
            event.target.id = `opponent-deck`;
            playCard(event);
        }
    }, reactionTime);
}

function slap(event) {
    const discardCardsLength = discardCards.length;
    let currentPlayer;
    if (event !== undefined) {
        currentPlayer = `player`;
    } else {
        currentPlayer = `opponent`;
        if (discardCardsLength === 0) {
            changeOpponentFace(`disappointed`);
            return;
        }
    }
    if (discardCardsLength > 0 && discardCards[discardCardsLength - 1].includes(`J`)) {
        discardPile.style.visibility = `hidden`;
        if (currentPlayer === `player`) {
            playerCards = playerCards.concat(shuffle(discardCards));
            changeOpponentFace(`disappointed`);
            window.clearTimeout(reaction);
        } else if (currentPlayer === `opponent`) {
            opponentCards = opponentCards.concat(shuffle(discardCards));
            changeOpponentFace(`happy`);
            opponentAI(`player-deck`);
        }
        discardCards = [];
        getCurrentCards();
    }
}

let expression;

function changeOpponentFace(mood) {
    if (mood === `happy`) {
        opponentFace.textContent = `😁`;
    } else if (mood === `disappointed`) {
        opponentFace.textContent = `😣`;
    }
    const expressionTime = Math.floor(Math.random() * (1000 - 500)) + (500);
    window.clearTimeout(expression);
    expression = window.setTimeout(function() {
        opponentFace.textContent = `🙂`;
    }, expressionTime);
}

function getCurrentCards() {
    if (playerCards.length === 0) {
        playerDeck.removeEventListener(`click`, playCard, false);
        playerDeck.style.visibility = `hidden`;
        window.clearTimeout(reaction);
        document.getElementById(`win-lose-status`).textContent = `YOU LOSE!`;
        document.getElementById(`play-again-wrapper`).style.display = `flex`;
    } else if (opponentCards.length === 0) {
        opponentFace.textContent = `😣`;
        opponentDeck.style.visibility = `hidden`;
        window.clearTimeout(reaction);
        document.getElementById(`win-lose-status`).textContent = `YOU WIN!`;
        document.getElementById(`play-again-wrapper`).style.display = `flex`;
    }
}



playerDeck.addEventListener(`click`, playCard, false);
discardPile.addEventListener(`click`, slap, false);