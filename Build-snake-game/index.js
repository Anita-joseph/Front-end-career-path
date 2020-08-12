const grid = document.querySelector('.grid');
const startButton = document.getElementById('start');
const scoreDisplay = document.getElementById('score');
let squares = [];
let currentSnake = []
let direction = 1;
const width = 10;
let appleIndex = 0;
let score = 0;
let intervalTime = 1000;
let speed = 0.9;
let timerId = 0;

function createGrid() {
    // create elements
    // create 100 of these elments
    for (let i = 0; i < width * width; i++) {
        const square = document.createElement('div');
        // add styling to the element
        square.classList.add('square');
        // put the element into our grid
        grid.appendChild(square);
        // push it into a new squares array
        squares.push(square)
    }
}
createGrid();
currentSnake.forEach(index => squares[index].classList.add('snake'))

function startGame() {
    //remove the snake
    currentSnake.forEach(index => squares[index].classList.remove('snake'))
        //remove the apple
    squares[appleIndex].classList.remove('apple')
    clearInterval(timerId)
    currentSnake = [2, 1, 0]
    score = 0;
    //re add new score to browser
    scoreDisplay.textContent = score;
    direction = 1;
    intervalTime = 1000
    generateApples()
        //read the class of snake to our new currentSnake
    currentSnake.forEach(index => squares[index].classList.add('snake'));

    timerId = setInterval(move, intervalTime);
}

function move() {

    if ((currentSnake[0] + width >= width * width && direction === width) || //if snake has hoit bottom
        (currentSnake[0] % width === width - 1 && direction === 1) || // if snake has hit right
        (currentSnake[0] % width === 0 && direction === -1) || //if snake has hit left wall
        (currentSnake[0] - width < 0 && direction === -10) || //if snake has hit top
        squares[currentSnake[0] + direction].classList.contains('snake')
    ) return clearInterval(timerId)

    // remove last element from our currentSnake array
    const tail = currentSnake.pop();
    // remove styling from last element
    squares[tail].classList.remove('snake');
    // add square in direction we are heading
    currentSnake.unshift(currentSnake[0] + direction)
        // add styling so we can see it
        //deal with snake head getting the apple
    if (squares[currentSnake[0]].classList.contains('apple')) {
        //remove the class of apple
        squares[currentSnake[0]].classList.remove('apple')
            //grow our snake by adding class of snake to it
        squares[tail].classList.add('snake')
            //grow our snake array
        currentSnake.push(tail)
        console.log(currentSnake)
            //generate new apple
        generateApples()
            //add one to the score
        score++;
        //display our score
        scoreDisplay.textContent = score;
        //speed up our snake
        clearInterval(timerId)
        console.log(intervalTime)
        intervalTime = intervalTime * speed;
        console.log(intervalTime)
        timerId = setInterval(move, intervalTime)
    }
    squares[currentSnake[0]].classList.add('snake');
}
// move();

function generateApples() {
    do {
        appleIndex = Math.floor(Math.random() * squares.length);
    }
    while (squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple');
}
generateApples();
// 39 is right arrow
// 38 isfor the up arrow
// 37 is forthe left arrow
// 40 is for the down arrow

function control(e) {
    if (e.keyCode === 39) {
        console.log('right pressed')
        direction = 1
    } else if (e.keyCode === 38) {
        console.log('up pressed')
        direction = -width;
    } else if (e.keyCode === 37) {
        console.log('left pressed')
        direction = -1
    } else if (e.keyCode === 40) {
        console.log('down pressed')
        direction = +width
    }
}

document.addEventListener('keyup', control)
startButton.addEventListener('click', startGame);