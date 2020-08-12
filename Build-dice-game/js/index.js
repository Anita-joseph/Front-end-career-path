/***********
  Functions
 ***********/

function roll() {
    return Math.floor(Math.random() * 6 + 1);
}

function reset() {
    resetBtn.style.display = 'none';

    playerOne.score = 0;
    playerTwo.score = 0;

    message.textContent = activePlayer.name + "'s turn!";
    playerOneScore.textContent = 0;
    playerTwoScore.textContent = 0;

    dice.disabled = false;
    dice.style.cursor = 'pointer';
    diceImg.setAttribute('src', 'img/1.png');
    diceImg.setAttribute('alt', '1');
}

function rotate(element, duration) {
    let degree = 0;

    // Calculate even delay between the 36 steps of the rotation
    let delay = duration / 36;

    let timer = setInterval(function() {
        degree += 10;
        element.style.transform = `rotate(${degree}deg)`;

        if (degree >= 360) {
            clearInterval(timer);
        }
    }, delay);
}



/************
  Game State
 ************/

const playerOne = {
    name: 'Player One',
    score: 0
};

const playerTwo = {
    name: 'Player Two',
    score: 0
};

let activePlayer = playerOne;



/***********
  DOM Nodes
 ***********/

const intro = document.querySelector('#intro');
const form = document.querySelector('#form');
const gameArea = document.querySelector('#game');
const message = document.querySelector('#game-message');
const playerOneName = document.querySelector('#player-one-name');
const playerOneScore = document.querySelector('#player-one-score');
const playerTwoName = document.querySelector('#player-two-name');
const playerTwoScore = document.querySelector('#player-two-score');
const dice = document.querySelector('#dice');
const diceImg = document.querySelector('#dice-image');
const resetBtn = document.querySelector('#reset-btn');



/*****************
  Event Listeners
 *****************/

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Grab names and update player objects
    playerOne.name = document.querySelector('#player-one').value;
    playerTwo.name = document.querySelector('#player-two').value;

    intro.style.display = 'none';

    message.textContent = activePlayer.name + "'s Turn";
    playerOneName.textContent = playerOne.name;
    playerOneScore.textContent = playerOne.score;
    playerTwoName.textContent = playerTwo.name;
    playerTwoScore.textContent = playerTwo.score;

    gameArea.style.display = 'block';
});

dice.addEventListener('click', function() {
    const animDuration = 300;
    const diceValue = roll();

    rotate(dice, animDuration);

    // Update state after animation has finished
    setTimeout(function() {
        diceImg.setAttribute('src', 'img/' + diceValue + '.png');
        diceImg.setAttribute('alt', diceValue);
        activePlayer.score += diceValue;

        if (activePlayer === playerOne) {
            playerOneScore.textContent = playerOne.score;
            activePlayer = playerTwo;
        } else {
            playerTwoScore.textContent = playerTwo.score;
            activePlayer = playerOne;
        }

        if (playerOne.score >= 25) {
            message.textContent = playerOne.name + ' won! 🥳';

            // Disable dice button
            dice.disabled = true;
            dice.style.cursor = 'not-allowed';

            // Show reset button
            resetBtn.style.display = 'inline-block';
        } else if (playerTwo.score >= 25) {
            message.textContent = playerTwo.name + ' won! 🥳';

            // Disable dice button
            dice.disabled = true;
            dice.style.cursor = 'not-allowed';

            // Show reset button
            resetBtn.style.display = 'inline-block';
        } else {
            message.textContent = activePlayer.name + "'s turn!";
        }
    }, animDuration);
});

resetBtn.addEventListener('click', reset);